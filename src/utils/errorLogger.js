// Logger central de errores. Guarda un historial rotativo en localStorage (por
// si en ese momento no hay conexión) y además manda cada error a una
// colección de Firestore ("error_logs"), para poder ver los errores de todos
// los usuarios juntos en un solo lugar, sin depender de que nadie te avise.

const STORAGE_KEY = "trashumar_error_log";
const MAX_ENTRIES = 50;

// Tope de reportes a Firestore por sesión de pestaña (no por localStorage).
// Si un bug entra en loop y tira miles de errores por segundo, esto evita
// que se coma la cuota de escrituras de Firestore. El guardado local no tiene
// este límite (es gratis, no consume cuota).
const MAX_FIRESTORE_REPORTS_PER_SESSION = 20;
let firestoreReportCount = 0;

function readLog() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeLog(entries) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch {
    // localStorage lleno o no disponible (modo privado, etc.) — no hay nada
    // más que hacer acá, el error ya se mostró por consola igual.
  }
}

// Import dinámico de Firestore, igual que en el resto del proyecto: así el
// logger de errores no le agrega peso al bundle principal solo por existir.
async function reportToFirestore(entry) {
  if (firestoreReportCount >= MAX_FIRESTORE_REPORTS_PER_SESSION) return;
  firestoreReportCount++;

  try {
    const [{ db }, { collection, addDoc }] = await Promise.all([
      import("../api/firestore"),
      import("firebase/firestore/lite"),
    ]);
    await addDoc(collection(db, "error_logs"), entry);
  } catch {
    // Si falla el envío (sin conexión, reglas, etc.) no hacemos nada más:
    // el error ya quedó guardado localmente y mostrado por consola.
  }
}

/**
 * Registra un error: lo muestra por consola (debug inmediato), lo persiste
 * en localStorage (respaldo local) y lo manda a Firestore (para verlo
 * centralizado, de todos los usuarios).
 * @param {Error|unknown} error
 * @param {object} context - datos extra útiles (ej: { component: "Perfil", action: "guardar" })
 */
export function logError(error, context = {}) {
  const entry = {
    timestamp: new Date().toISOString(),
    message: error?.message ?? String(error),
    stack: error?.stack ?? null,
    context,
    url: typeof window !== "undefined" ? window.location.href : null,
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : null,
  };

  // eslint-disable-next-line no-console
  console.error("[errorLogger]", entry.message, entry);

  const entries = readLog();
  entries.push(entry);
  // Nos quedamos solo con las últimas MAX_ENTRIES, para no llenar localStorage.
  const trimmed = entries.slice(-MAX_ENTRIES);
  writeLog(trimmed);

  // Fire-and-forget: no bloqueamos nada esperando que termine de escribir.
  reportToFirestore(entry);

  return entry;
}

/** Devuelve todos los errores guardados, más viejo primero. */
export function getErrorLog() {
  return readLog();
}

/** Vacía el historial guardado. */
export function clearErrorLog() {
  writeLog([]);
}

/** Devuelve el log como texto JSON, listo para copiar/descargar/enviar. */
export function exportErrorLog() {
  return JSON.stringify(readLog(), null, 2);
}

/**
 * Engancha los listeners globales (errores de script no atrapados y promesas
 * rechazadas sin catch). Llamar una sola vez, en main.jsx.
 */
export function installGlobalErrorHandlers() {
  if (typeof window === "undefined") return;

  window.addEventListener("error", (event) => {
    logError(event.error ?? event.message, { source: "window.onerror" });
  });

  window.addEventListener("unhandledrejection", (event) => {
    logError(event.reason, { source: "unhandledrejection" });
  });
}

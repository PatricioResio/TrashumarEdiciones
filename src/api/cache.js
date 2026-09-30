// Caché persistente (localStorage) con vencimiento, para no repetir lecturas
// a Firestore que no cambiaron. Esto es lo que más impacta en el costo: cada
// getDocs(collection(...)) cobra por cantidad de documentos leídos, así que
// evitar re-leer la misma colección en cada visita ahorra plata de verdad.
// Si localStorage no está disponible (modo privado, cuota llena, etc.) cae
// a un Map en memoria como respaldo, que al menos evita pedidos duplicados
// dentro de la misma sesión de pestaña.

const PREFIX = "trashumar_cache:";
const memoryFallback = new Map();

function storageAvailable() {
  if (typeof window === "undefined") return false;
  try {
    const testKey = "__trashumar_test__";
    window.localStorage.setItem(testKey, "1");
    window.localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

const hasStorage = storageAvailable();

/** Devuelve el valor cacheado si existe y no venció, o undefined. */
export function getCached(key) {
  if (!hasStorage) return memoryFallback.get(key);

  try {
    const raw = window.localStorage.getItem(PREFIX + key);
    if (!raw) return undefined;
    const { value, expiresAt } = JSON.parse(raw);
    if (Date.now() > expiresAt) {
      window.localStorage.removeItem(PREFIX + key);
      return undefined;
    }
    return value;
  } catch {
    return undefined;
  }
}

/**
 * Guarda un valor con vencimiento. `ttlMs` por defecto: 15 minutos — es un
 * buen punto medio para datos como proyectos/perfiles/libros, que no
 * cambian segundo a segundo pero tampoco querés que queden pegados un día
 * entero si alguien edita su perfil.
 */
export function setCached(key, value, ttlMs = 15 * 60 * 1000) {
  if (!hasStorage) {
    memoryFallback.set(key, value);
    return;
  }

  try {
    window.localStorage.setItem(
      PREFIX + key,
      JSON.stringify({ value, expiresAt: Date.now() + ttlMs })
    );
  } catch {
    // localStorage lleno o no disponible en este momento — fallback a memoria
    // para esta sesión, mejor que nada.
    memoryFallback.set(key, value);
  }
}

/** Vacía toda la caché (memoria + localStorage), útil para debug/testing. */
export function clearCache() {
  memoryFallback.clear();
  if (!hasStorage) return;
  Object.keys(window.localStorage)
    .filter((k) => k.startsWith(PREFIX))
    .forEach((k) => window.localStorage.removeItem(k));
}
// PerfilesContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { getCached, setCached } from "../api/cache";

export const PerfilesContext = createContext();

export const PerfilesProvider = ({ children }) => {
  const [perfiles, setPerfiles] = useState([]);
  const [loadingPerfiles, setLoadingPerfiles] = useState(true);
  const [perfilCache, setPerfilCache] = useState({}); // cache individual por idPerfil

   // fetch de todos los perfiles (para listados, búsqueda, etc.)
  // PerfilesProvider
useEffect(() => {
  let isMounted = true;
  let idleId;
  const cancelIdle = window.cancelIdleCallback || clearTimeout;

  const runWhenIdle = () => {
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 300));
    idleId = idle(() => {
      const cached = getCached("perfiles");
      if (cached) {
        setPerfiles(cached);
        setLoadingPerfiles(false);
        return;
      }
      // import dinámico: recién acá se baja el chunk de api.js (y firestore/firebase)
      import("../api/api").then(({ getPerfiles }) => {
        getPerfiles().then((data) => {
          if (!isMounted) return;
          setCached("perfiles", data);
          setPerfiles(data);
          setLoadingPerfiles(false);
        });
      });
    });
  };

  // Esperamos a que termine de cargar TODA la página (incluida la imagen del LCP)
  // antes de disparar el fetch a Firestore. El SDK abre una conexión Listen/channel
  // de fondo apenas se usa, aunque no llamemos onSnapshot — si arranca antes de
  // tiempo, compite por ancho de banda con el recurso del LCP en conexiones lentas.
  if (document.readyState === "complete") {
    runWhenIdle();
  } else {
    window.addEventListener("load", runWhenIdle, { once: true });
  }

  return () => {
    isMounted = false;
    window.removeEventListener("load", runWhenIdle);
    cancelIdle(idleId);
  };
}, []);

  // fetch individual cacheado por idPerfil
  const getOrFetchPerfil = async (idPerfil) => {
    if (perfilCache[idPerfil]) return;
    try {
      const { getPerfil } = await import("../api/api");
      const data = await getPerfil({ idPerfil });
      setPerfilCache((prev) => ({ ...prev, [idPerfil]: data }));
    } catch (error) {
      console.error("Error cargando perfil:", error);
    }
  };

  return (
    <PerfilesContext.Provider value={{ perfiles, loadingPerfiles, perfilCache, getOrFetchPerfil }}>
      {children}
    </PerfilesContext.Provider>
  );
};
import { createContext, useContext, useEffect, useState } from "react";

export const ProyectsContext = createContext();

export const ProyectsProvider = ({ children }) => {
  const [proyectos, setProyectos] = useState([]);
  const [loadingProyectos, setLoadingProyectos] = useState(true);
useEffect(() => {
  let isMounted = true;
  let idleId;
  const cancelIdle = window.cancelIdleCallback || clearTimeout;

  const runWhenIdle = () => {
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 300));
    idleId = idle(() => {
      // import dinámico: recién acá se baja el chunk de api.js (y firestore/firebase)
      import("../api/api").then(({ getProyectos }) => {
        getProyectos().then((data) => {
          if (!isMounted) return;
          setProyectos(data);
          setLoadingProyectos(false);
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
  return (
    <ProyectsContext.Provider value={{ proyectos, loadingProyectos }}>
      {children}
    </ProyectsContext.Provider>
  );
};
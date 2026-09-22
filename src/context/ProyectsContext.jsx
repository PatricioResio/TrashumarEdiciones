import { createContext, useContext, useEffect, useState } from "react";

export const ProyectsContext = createContext();

export const ProyectsProvider = ({ children }) => {
  const [proyectos, setProyectos] = useState([]);
  const [loadingProyectos, setLoadingProyectos] = useState(true);
// ProyectsProvider
useEffect(() => {
  let isMounted = true;
  const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 1500));
  const cancelIdle = window.cancelIdleCallback || clearTimeout;
  const id = idle(() => {
    // import dinámico: recién acá se baja el chunk de api.js (y firestore/firebase)
    import("../api/api").then(({ getProyectos }) => {
      getProyectos().then((data) => {
        if (!isMounted) return;
        setProyectos(data);
        setLoadingProyectos(false);
      });
    });
  });
  return () => {
    isMounted = false;
    cancelIdle(id);
  };
}, []);
  return (
    <ProyectsContext.Provider value={{ proyectos, loadingProyectos }}>
      {children}
    </ProyectsContext.Provider>
  );
};
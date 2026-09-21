import { createContext, useContext, useEffect, useState } from "react";
import { getProyectos } from "../api/api";

export const ProyectsContext = createContext();

export const ProyectsProvider = ({ children }) => {
  const [proyectos, setProyectos] = useState([]);
  const [loadingProyectos, setLoadingProyectos] = useState(true);
// ProyectsProvider
useEffect(() => {
  const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 1500));
  const cancelIdle = window.cancelIdleCallback || clearTimeout;
  const id = idle(() => {
    getProyectos().then((data) => {
      setProyectos(data);
      setLoadingProyectos(false);
    });
  });
  return () => cancelIdle(id);
}, []);
  return (
    <ProyectsContext.Provider value={{ proyectos, loadingProyectos }}>
      {children}
    </ProyectsContext.Provider>
  );
};

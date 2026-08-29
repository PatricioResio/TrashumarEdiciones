import { createContext, useContext, useEffect, useState } from "react";
import { getProyectos } from "../api/api";

export const ProyectsContext = createContext();

export const ProyectsProvider = ({ children }) => {
  const [proyectos, setProyectos] = useState([]);
  const [loadingProyectos, setLoadingProyectos] = useState(true);

  useEffect(() => {
    getProyectos().then((data) => {
      setProyectos(data);
      setLoadingProyectos(false);
    });
  }, []);

  return (
    <ProyectsContext.Provider value={{ proyectos, loadingProyectos }}>
      {children}
    </ProyectsContext.Provider>
  );
};

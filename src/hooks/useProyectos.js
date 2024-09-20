import { useState, useEffect } from "react";
import { getProyectos } from "../api/api";

const useProyectos = () => {
  const [proyectos, setProyectos] = useState([]);
  const [loadingProyectos, setLoadingProyectos] = useState(true);

  useEffect(() => {
    const fetchProyectos = async () => {
      const proyectos = await getProyectos();
      setProyectos(proyectos);
      setLoadingProyectos(false);
    };
    fetchProyectos();
  }, []);
  return { loadingProyectos, proyectos };
};

export default useProyectos;

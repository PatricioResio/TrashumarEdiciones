import { useState, useEffect } from "react";
import { getProyectos } from "../api/api";

const useLibros = () => {
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProyectos = async () => {
      const proyectos = await getProyectos();
      setProyectos(proyectos);
      setLoading(false);
    };
    fetchProyectos();
  }, []);
  return { loading, proyectos };
};

export default useLibros;

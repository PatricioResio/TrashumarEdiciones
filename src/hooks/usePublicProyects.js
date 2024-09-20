import { useState, useEffect } from "react";
import { getProyectos } from "../api/api";
import { useParams } from "react-router-dom";

const useProyectoPublico = () => {
  const [proyectoPublico, setProyectoPublico] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const { idProyecto } = useParams();

  useEffect(() => {
    const fetchProyectos = async () => {
      const proyectos = await getProyectos();
      const proyecto = proyectos.find(
        (proyecto) => proyecto.idProyecto == idProyecto
      );
      setProyectoPublico(proyecto);
      console.log(proyecto);
      setLoading(false);
    };
    fetchProyectos();
  }, []);
  return { loading, proyectoPublico };
};

export default useProyectoPublico;

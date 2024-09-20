import { useState, useEffect } from "react";
import useFilterPerfiles from "./useFilterPerfiles";
import useProyectos from "./useProyectos";

const useFilterProyectos = () => {
  const { perfil, loadingPerfil } = useFilterPerfiles();
  const { proyectos, loadingProyectos } = useProyectos();
  const [proyectosUser, setProyectosUser] = useState([]);
  const [loadingProyectosUser, setLoadingProyectosUser] = useState(true);

  useEffect(() => {
    const fetchProyectos = async () => {
      if (!loadingPerfil && !loadingProyectos) {
        const proyectosData = proyectos.filter(
          (proyecto) => proyecto.autor === perfil.nombrePublico
        );
        setProyectosUser(proyectosData);
        setLoadingProyectosUser(false);
      }
    };
    fetchProyectos();
  }, [perfil, proyectos, loadingProyectos, loadingPerfil]);

  return { proyectosUser, loadingProyectosUser };
};

export default useFilterProyectos;

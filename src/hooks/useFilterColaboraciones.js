import { useState, useEffect } from "react";
import useFilterPerfiles from "./useFilterPerfiles";
import useProyectos from "./useProyectos";

const useFilterColaboraciones = () => {
  const { perfil, loadingPerfil } = useFilterPerfiles();
  const { proyectos, loadingProyectos } = useProyectos();
  const [colaboraciones, setColaboraciones] = useState([]);
  const [loadingColaboraciones, setLoadingColaboraciones] = useState(true);

  useEffect(() => {
    const fetchColaboraciones = async () => {
      if (!loadingPerfil && !loadingProyectos) {
        const colaboracionesUser = proyectos.filter((proyecto) =>
          !proyecto.colaboradores
            ? []
            : proyecto.colaboradores.includes(perfil.nombrePublico)
        );
        setColaboraciones(colaboracionesUser);
      }
      setLoadingColaboraciones(false);
    };

    fetchColaboraciones();
  }, [perfil, proyectos, loadingProyectos, loadingPerfil]);
  return { colaboraciones, loadingColaboraciones };
};

export default useFilterColaboraciones;

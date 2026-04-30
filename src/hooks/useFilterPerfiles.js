import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPerfil } from "../api/api";

const useFilterPerfiles = () => {
  const [perfil, setPerfil] = useState(undefined);
  const [loadingPerfil, setLoadingPerfil] = useState(true);
  const { idPerfil } = useParams();

  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        const data = await getPerfil({ idPerfil });
        setPerfil(data);
      } catch (error) {
        console.error("Error cargando perfil:", error);
        setPerfil(null);
      } finally {
        setLoadingPerfil(false); // ← adentro del fetch, después de tener los datos
      }
    };

    fetchPerfil();
  }, [idPerfil]);

  return { perfil, loadingPerfil };
};

export default useFilterPerfiles;
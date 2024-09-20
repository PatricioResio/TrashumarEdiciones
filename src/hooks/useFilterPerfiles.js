import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPerfiles } from "../api/api";

const useFilterPerfiles = () => {
  const [perfil, setPerfil] = useState(undefined);
  const [loadingPerfil, setLoadingPerfil] = useState(true);
  const { idPerfil } = useParams();

  useEffect(() => {
    const fetchPerfiles = async () => {
      const perfiles = await getPerfiles();
      const perfilUser = perfiles.find(
        (perfil) => perfil.idPerfil === idPerfil
      );
      setPerfil(perfilUser);
    };
    fetchPerfiles();

    setLoadingPerfil(false);
  }, []);

  return { perfil, loadingPerfil };
};

export default useFilterPerfiles;

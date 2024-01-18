import React from "react";
import { useParams } from "react-router-dom";
import usePerfiles from "../hooks/usePerfiles";
import { CircularProgress } from "@mui/material";
import { PerfilPublico } from "../components";

const Perfil = () => {
  const { perfiles, loading } = usePerfiles();
  const { idPerfil } = useParams();
  const perfil = perfiles.find((perfil) => perfil.idPerfil === idPerfil);

  return loading ? (
    <CircularProgress />
  ) : (
    <>
      <PerfilPublico {...perfil} />
    </>
  );
};

export default Perfil;

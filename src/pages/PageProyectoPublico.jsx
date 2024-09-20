import React from "react";
import { useParams } from "react-router-dom";
import useProyectos from "../hooks/useProyectos";
import { CircularProgress } from "@mui/material";
import { ProyectoPublico } from "../components/index";
import useProyectoPublico from "../hooks/usePublicProyects";

const PageProyectoPublico = () => {
  const { proyectoPublico, loading } = useProyectoPublico();
  return loading ? (
    <CircularProgress />
  ) : (
    <>
      <ProyectoPublico proyectoPublico={proyectoPublico} />
    </>
  );
};

export default PageProyectoPublico;

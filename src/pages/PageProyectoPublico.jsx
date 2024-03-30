import React from "react";
import { useParams } from "react-router-dom";
import useProyectos from "../hooks/useProyectos";
import { CircularProgress } from "@mui/material";
import { ProyectoPublico } from "../components/index";

const PageProyectoPublico = () => {
  const { proyectos, loading } = useProyectos();
  const { idProyecto } = useParams();
  const proyecto = proyectos.find(
    (proyecto) => proyecto.idProyecto == idProyecto
  );
  console.log(proyecto);
  return loading ? (
    <CircularProgress />
  ) : (
    <>
      <ProyectoPublico {...proyecto} />
    </>
  );
};

export default PageProyectoPublico;

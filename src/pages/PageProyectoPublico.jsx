import React, { useContext } from "react";
import { Box, CircularProgress } from "@mui/material";
import { ProyectoPublico } from "../components/index";
import useProyectoPublico from "../hooks/usePublicProyects";
import { PerfilesContext } from "../context/PerfilesContext";

const PageProyectoPublico = () => {
  const { proyectoPublico, loadingProyectoPublico } = useProyectoPublico();
  const { perfiles, loadingPerfiles } = useContext(PerfilesContext);
  return loadingProyectoPublico ? (
    <Box sx={{ minHeight: "90vh", display: "flex", alignContent: "center" }}>
      <CircularProgress sx={{ m: "auto" }} />
    </Box>
  ) : (
    <>
      <ProyectoPublico proyectoPublico={proyectoPublico} />
    </>
  );
};

export default PageProyectoPublico;

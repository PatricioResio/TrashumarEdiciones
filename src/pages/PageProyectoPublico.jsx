import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { ProyectoPublico } from "../components/index";
import useProyectoPublico from "../hooks/usePublicProyects";
import usePerfiles from "../hooks/usePerfiles";

const PageProyectoPublico = () => {
  const { proyectoPublico, loadingProyectoPublico } = useProyectoPublico();
  const { perfiles, loading } = usePerfiles();
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

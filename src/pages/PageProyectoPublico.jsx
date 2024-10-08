import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { ProyectoPublico } from "../components/index";
import useProyectoPublico from "../hooks/usePublicProyects";

const PageProyectoPublico = () => {
  const { proyectoPublico, loading } = useProyectoPublico();
  return loading ? (
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

import React from "react";
import ContenedorDestacado from "../ContenedorDestacado/ContenedorDestacado";
import { Box } from "@mui/material";

const ArticleDestacado = () => {
  return (
    <Box
      component="article"
      sx={{ height: "800px", width: "100%", margin: "80px" }}
    >
      <ContenedorDestacado />
    </Box>
  );
};

export default ArticleDestacado;

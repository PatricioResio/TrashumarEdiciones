import React from "react";
import ContenedorDestacado from "../ContenedorDestacado/ContenedorDestacado";
import { Box } from "@mui/material";

const ArticleDestacado = () => {
  return (
    <Box
      component="article"
      sx={{

        height: {xs:"140vh",lg:'90vh'},
        margin: "auto",
        width: "95%",
      }}
    >
      <ContenedorDestacado />
    </Box>
  );
};

export default ArticleDestacado;

import React from "react";
import ContenedorDestacado from "../ContenedorDestacado/ContenedorDestacado";
import { Box } from "@mui/material";

const ArticleDestacado = () => {
  return (
    <Box
      component="article"
      sx={{
        height: {
          xs: "80rem",
          sm: "85rem",
          md: "90rem",
          lg: "50rem",
          xl: "52rem",
        },
        margin: "50px auto",
        width: "100%",
      }}
    >
      <ContenedorDestacado />
    </Box>
  );
};

export default ArticleDestacado;

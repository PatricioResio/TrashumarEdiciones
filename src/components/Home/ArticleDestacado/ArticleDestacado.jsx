import React from "react";
import ContenedorDestacado from "../ContenedorDestacado/ContenedorDestacado";
import { Box } from "@mui/material";

const ArticleDestacado = () => {
  return (
    <Box
      component="article"
      sx={{
        height: {
          xs: "120vh",
          sm: "185rem",
          md: "150rem",
          lg: "150rem",
          xl: "130vh",
        },
        margin: "auto",
        width: "95%",
      }}
    >
      <ContenedorDestacado />
    </Box>
  );
};

export default ArticleDestacado;

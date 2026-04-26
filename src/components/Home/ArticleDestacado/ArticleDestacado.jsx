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
          sm: "80vh",
          md: "80vh",
          lg: "80vh",
          xl: "80vh",
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

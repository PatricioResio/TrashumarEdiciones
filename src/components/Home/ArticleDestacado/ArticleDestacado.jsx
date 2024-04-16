import React from "react";
import ContenedorDestacado from "../ContenedorDestacado/ContenedorDestacado";
import { Box } from "@mui/material";

const ArticleDestacado = () => {
  return (
    <Box
      component="article"
      sx={{
        height: { xs: "1200px", md: "1200px", lg: "1200px", xl: "900px" },
        margin: "50px auto",
        width: "100%",
      }}
    >
      <ContenedorDestacado />
    </Box>
  );
};

export default ArticleDestacado;

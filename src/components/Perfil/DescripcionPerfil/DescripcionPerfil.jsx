import { Box, Container, Typography } from "@mui/material";
import React from "react";

const DescripcionPerfil = ({ nombrePublico, explicarPerfil }) => {
  return (
    <Container
      sx={{
        width: { xs: "350px", md: "700px", lg: "900px", xl: "1200px" },
        height: { xs: "25%", md: "80%" },
        my: { xs: "30px", sm: "auto" },
        border: "2px solid #BAE3D7",
        borderRadius: "15px",
        backgroundColor: "#BDFFF9",
        minHeight: { xs: "25", md: "80%" },
        contain: "content",
        overflowY: "scroll",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h4" sx={{ mt: "50px" }}>
          Mi descripcion
        </Typography>
        {!explicarPerfil ? (
          <Typography>
            {nombrePublico} todavía no pudo describir su trabajo!
          </Typography>
        ) : (
          <Typography variant="h5" sx={{ mt: "50px" }}>
            {explicarPerfil}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default DescripcionPerfil;

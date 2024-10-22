import { Box, Container, Typography } from "@mui/material";
import React from "react";

const DescripcionPerfil = ({ nombrePublico, explicarPerfil }) => {
  return (
    <Container
      sx={{
        height: "25rem",
        my: { xs: "30px", sm: "auto" },
        border: "2px solid #BAE3D7",
        display: "flex",
        width: { xs: "60%" },
        borderRadius: "15px",
        backgroundColor: "#BDFFF9",
        contain: "content",
        overflowY: "scroll",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
        }}
      >
        <Typography variant="h4" sx={{ mt: "10px" }}>
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

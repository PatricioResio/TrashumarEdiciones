import React from "react";

import { Box, Container, IconButton, Typography } from "@mui/material";

const Oficios = ({ oficios }) => {
  return (
    <Container
      maxWidth="2xl"
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid #BAE3D7",
        borderRadius: "15px",
        backgroundColor: "#BDFFF9",
        height: { xs: "25%", md: "80%" },
        width: { xs: "200px", md: "300px", lg: "400px", xl: "600px" },
        minHeight: { xs: "25", md: "80%" },
        m: "auto",
        mt: { xs: "30px", xl: "auto" },

        gap: "0px",
      }}
    >
      <Typography
        variant="h6"
        sx={{ mt: "0", fontWeight: "bold" }}
        component="h6"
      >
        Mis oficios
      </Typography>

      <Container sx={{ marginLeft: "0px" }}>
        {oficios.lenght === 0 || !oficios ? (
          <Typography variant="h5" component="h5">
            No hay ningun oficio registrado todavía
          </Typography>
        ) : (
          oficios.map((oficio) =>
            oficio.valor === false ? (
              <Typography></Typography>
            ) : (
              <Typography key={oficio.nombre} variant="h6" component="h6">
                {oficio.nombre}
              </Typography>
            )
          )
        )}
      </Container>
    </Container>
  );
};

export default Oficios;

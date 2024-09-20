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
        border: "2px solid #4d7a77",
        borderRadius: "8px",
        minHeight: "25vh",
        height: { xs: "80%", md: "80%", lg: "600px", xl: "630px" },
        width: { xs: "200px", md: "300px", lg: "400px", xl: "600px" },

        backgroundColor: "#BAE3D7",
        m: "auto",
        mt: { xs: "30px", xl: "auto" },

        gap: "0px",
      }}
    >
      <Typography
        gutterBottom
        variant="h4"
        sx={{ mt: "0", fontWeight: "bold" }}
        component="h4"
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
              <Typography key={oficio.nombre} variant="h5" component="h5">
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

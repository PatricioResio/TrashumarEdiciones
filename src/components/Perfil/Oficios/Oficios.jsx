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
        width: { xs: "80%", sm: "40%" },
        justifyContent: "start",
        alignItems: "center",
        border: "1px solid #09A5B0",
        borderRadius: "5px",
        backgroundColor: "#BDFFF9",
        m: "auto 6px",
        gap: "2px",
        height: { xs: "", md: "22rem" },
      }}
    >
      <Typography
        variant="h5"
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
              <Typography
                key={oficio.nombre}
                variant="h6"
                component="h6"
                sx={{ m: "auto" }}
              >
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

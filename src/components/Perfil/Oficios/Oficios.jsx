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
        width: { xs: "80%", sm: "30%" },
        justifyContent: "start",
        alignItems: "center",
        borderRadius: "5px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: " rgba(255, 255, 255, 0.8)",
        m: "auto",
        zIndex: 1,
        gap: "2px",
        height: { xs: "18rem", md: "8rem" },
      }}
    >
      <Typography
        variant="h5"
        sx={{ mt: "0", fontWeight: "bold" }}
        component="h6"
      >
        Que hago
      </Typography>

      <Container sx={{ marginLeft: "0px", display: "flex", flexWrap: "wrap" }}>
        {oficios.lenght === 0 || !oficios ? (
          <Typography variant="h5" component="h5">
            No hay ningun oficio registrado todavía
          </Typography>
        ) : (
          oficios.map((oficio) =>
            oficio.valor === false ? (
              <></>
            ) : (
              <Typography
                key={oficio.nombre}
                variant="p"
                component="p"
                sx={{ m: "auto" }}
              >
                {oficio.nombre} {oficio.valor > 0 ? "," : ""}
              </Typography>
            )
          )
        )}
      </Container>
    </Container>
  );
};

export default Oficios;

import React from "react";
import { SectionComunidad } from "../components/index";
import { Fade } from "react-awesome-reveal";
import { Container, Typography } from "@mui/material";

const Comunidad = () => {
  return (
    <Container
      maxWidth="2xl"
      sx={{
        m: "20px auto",
        p: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        minHeight: "65vh",
        textAlign: "center",
      }}
      disableGutters
    >
      <Fade triggerOnce duration={1300}>
        <Typography
          variant="h1"
          component="h2"
          fontWeight="bold"
          align="center"
          color={"secondary"}
          marginY={2}
        >
          Bienvenidos a nuestra comunidad
        </Typography>
      </Fade>
      <SectionComunidad />
    </Container>
  );
};

export default Comunidad;

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
        backgroundColor: "#215E61",
        borderRadius: "20px",
        border: "2px solid #3C9990",

        color: "#BAE3D7",
      }}
      disableGutters
    >
      <Fade triggerOnce duration={1300}>
        <Typography
          variant="h1"
          component="h2"
          fontWeight="bold"
          align="center"
        >
          Bienvenidos a nuestra comunidad
        </Typography>
      </Fade>
      <SectionComunidad />
    </Container>
  );
};

export default Comunidad;

import React from "react";
import { SectionComunidad } from "../components/index";
import { Fade } from "react-awesome-reveal";
import { Container, Typography } from "@mui/material";

const Comunidad = () => {
  return (
    <Container
      maxWidth="2xl"
      sx={{
        backgroundColor: "#4D7A77",
        borderRadius: "20px",
        border: "2px solid #3C9990",
        color: "#D8EDE9",
        width: "95vw",
        m: "20px auto",
      }}
      disableGutters
    >
      <Fade direction="down" triggerOnce duration={1300}>
        <Typography
          variant="h1"
          component="h2"
          fontWeight="bold"
          align="center"
        >
          Bienvenidos a nuestra comunidad
        </Typography>
      </Fade>
      <SectionComunidad />;
    </Container>
  );
};

export default Comunidad;

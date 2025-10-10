import React from "react";
import { SectionComunidad } from "../components/index";
import { Fade } from "react-awesome-reveal";
import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Comunidad = () => {
  return (
    <Container
      maxWidth="2xl"
      sx={{
        m: "20px auto",
        p: { xs: 0, md: "30px" },
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
        <Typography
          variant="h5"
          component="h5"
          sx={{
            mt: "2rem",
            color: "#777777ff",
            width: { xs: "90%", md: "40%" },
            m: "20px auto 0 auto",
          }}
        >
          Estamos felices de que formes parte de esta red colectiva, sumate a
          participar en los proyectos y actividades que organizamos
          <Button
            component={Link}
            to="/ingresa"
            sx={{
              fontWeight: "bold",
            }}
          >
            aqui
          </Button>
        </Typography>
      </Fade>
      <SectionComunidad />
    </Container>
  );
};

export default Comunidad;

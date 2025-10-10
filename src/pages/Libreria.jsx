import React from "react";
import SectionLibreria from "../components/SectionLibreria/SectionLibreria";
import { Container, Typography } from "@mui/material";
import { Fade } from "react-awesome-reveal";

const Libreria = () => {
  return (
    <Fade>
      <Container
        maxWidth="2xl"
        disableGutters
        sx={{
          m: "20px auto",
          p: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          minHeight: "65vh",
          textAlign: "center",
          color: "#BAE3D7",
        }}
      >
        <Fade triggerOnce>
          <Typography
            variant="h1"
            component="h2"
            fontWeight="bold"
            color={"secondary"}
            marginY={2}
          >
            Librería
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
            Nuestro catalogo de libros y publicaciones esta en pleno
            crecimiento, sumate!
          </Typography>
        </Fade>
        <Fade>
          <SectionLibreria />
        </Fade>
      </Container>
    </Fade>
  );
};

export default Libreria;

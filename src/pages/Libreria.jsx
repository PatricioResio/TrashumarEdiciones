import React from "react";
import SectionLibreria from "../components/SectionLibreria/SectionLibreria";
import { Container, Typography } from "@mui/material";
import { Fade } from "react-awesome-reveal";

const Libreria = () => {
  return (
    <Fade>
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100vw",
          minHeight: "70vh",
          textAlign: "center",
        }}
      >
        <Fade>
          <Typography variant="h1" component="h2">
            Libreria
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

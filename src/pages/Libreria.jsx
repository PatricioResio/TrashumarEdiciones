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
          backgroundColor: "#215E61",
          borderRadius: "20px",
          border: "2px solid #3C9990",

          color: "#BAE3D7",
        }}
      >
        <Fade triggerOnce>
          <Typography variant="h1" component="h2" fontWeight="bold">
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

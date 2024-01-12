import React from "react";
import SectionLibreria from "../components/SectionLibreria/SectionLibreria";
import { Container, Typography } from "@mui/material";

const Libreria = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100vw",
        textAlign: "center",
      }}
    >
      <Typography variant="h1" component="h2">
        Libreria
      </Typography>

      <SectionLibreria />
    </Container>
  );
};

export default Libreria;

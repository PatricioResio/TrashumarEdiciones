import { Box, Container, Typography } from "@mui/material";
import React from "react";

const ProyectoPublico = ({ titulo, autor, img, fecha }) => {
  return (
    <>
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          display: "flex",
          backgroundColor: "#4D7A77",
          flexDirection: "column",
          justifyContent: "center",
          gap: "80px",
          height: "800px",
          width: "80%",
          border: "3px solid #3C9990",
          borderRadius: "15px",
          p: "25px",
        }}
      >
        <Box
          sx={{
            height: "650px",
            width: "80%",
            fontSize: "20px",
            m: "auto",
            backgroundColor: "#3C9990",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "80px",
            border: "2px solid #B5C2C7",
            borderRadius: "20px",
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", color: "#fff" }}
            variant="h2"
            component="h2"
          >
            {titulo}
          </Typography>
          <Box
            sx={{
              width: "600px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <Typography>{autor}</Typography>
            <Typography>{fecha}</Typography>
          </Box>
          <Typography></Typography>
          <Box
            component="img"
            sx={{
              boxShadow: " 2px 2px rgba(0.12, 0, 0, 0.2)",
              height: "500px",
              m: "auto",
            }}
            src={img}
            alt="Ilustracion de tapa de libro"
          ></Box>
        </Box>
      </Container>
    </>
  );
};

export default ProyectoPublico;

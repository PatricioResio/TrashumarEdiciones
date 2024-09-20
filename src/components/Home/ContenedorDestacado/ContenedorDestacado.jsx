import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import {
  ID_PROYECTO_DESTACADO,
  TAPA_HIPPIES,
} from "../../../constants/constants";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const ContenedorDestacado = () => {
  return (
    <Container
      maxWidth="2xl"
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        height: { xs: "70rem", md: "90rem", lg: "56rem", xl: "55rem" },
        width: "100%",
        minWidth: { xs: "200px", xl: "700px" },
        backgroundColor: "#215E61",
        borderRadius: "20px",
        border: "2px solid #3C9990",

        color: "#BAE3D7",
        p: "25px",
      }}
    >
      <Fade triggerOnce easeOut direction="down">
        <Typography
          sx={{
            fontWeight: "bold",
            color: "#BAE3D7",
            fontSize: "3.5rem",
            margin: "2rem",
          }}
          variant="h2"
          component="h2"
        >
          Este es nuestro proyecto destacado!
        </Typography>
      </Fade>
      <Fade triggerOnce>
        <Box
          sx={{
            height: { xs: "52rem", md: "60rem", lg: "41rem", xl: "41rem" },
            display: "flex",
            justifyContent: "center",
            gap: "80px",
            border: "2px solid #215E61",
            borderRadius: "20px",
            pt: "30px",
            width: "82%",
            minWidth: { xs: "250px", lg: "600px" },
            fontSize: "20px",
            m: "auto",
            p: "2rem",

            color: "#0C2324",
            backgroundColor: "#3C9990",
            flexDirection: {
              xs: "column",
              md: "column",
              lg: "row",
              xl: "row",
            },
          }}
        >
          <Box
            component="img"
            sx={{
              boxShadow: " 2px 2px rgba(0.12, 0, 0, 0.2)",

              width: { xs: "18rem", md: "25rem", lg: "25rem", xl: "26rem" },
              m: "auto",
              mb: { xs: "0", lg: "auto" },
            }}
            src={TAPA_HIPPIES}
            alt="Ilustracion de tapa de libro novedad"
          ></Box>
          <Box
            sx={{
              width: { xs: "100%", lg: "37.5rem" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              m: "auto",
              mt: { xs: "0px", lg: "auto" },
              gap: "20px",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "1.8rem",
                  md: "2.4rem",
                  lg: "3rem",
                  xxl: "4rem",
                },
              }}
              component="h3"
              variant="h3"
            >
              El día en que los hippies descubrieron los sahumerios
            </Typography>
            <Typography component="h4" variant="h4">
              Pablo Atanasopolus
            </Typography>
            <Typography component="p" variant="body">
              Acá hay una breve descripcion de la wea de pablo
            </Typography>
            <Button
              sx={{
                color: "#BAE3D7",
                backgroundColor: "#215E61",
                width: { sx: "90px", xl: "180px" },
                m: "5px auto",
              }}
              variant="contained"
              component={Link}
              to={`/proyecto/${ID_PROYECTO_DESTACADO}`}
            >
              Ver más
            </Button>
          </Box>
        </Box>
      </Fade>
    </Container>
  );
};

export default ContenedorDestacado;

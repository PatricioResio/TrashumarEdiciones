import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import {
  ID_PROYECTO_DESTACADO,
  TAPA_HIPPIES,
} from "../../../constants/constants";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { DESCRIPCION_ARTICULO_DESTACADO } from "../../../constants/Textos";

const ContenedorDestacado = () => {
  const Descripcion = DESCRIPCION_ARTICULO_DESTACADO.slice(0, 254);
  return (
    <Container
      maxWidth="2xl"
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        width: { xs: "100%", xl: "80%" },
        minWidth: { xs: "100%", xl: "80%" },
        borderRadius: "5px",
        border: "1px solid #012936",
        p: "25px",
      }}
    >
      <Fade triggerOnce easeOut direction="down">
        <Typography
          color={"#0C2324"}
          sx={{
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
            display: "flex",
            justifyContent: "center",
            gap: "80px",
            pt: "30px",
            width: "82%",
            minWidth: { xs: "80%", lg: "600px" },
            m: "auto",
            p: "2rem",
            color: "#0C2324",
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

              width: { xs: "90%", md: "25rem", lg: "25rem", xl: "26rem" },
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
            <Typography component="h3" variant="h3">
              El día en que los hippies descubrieron los sahumerios
            </Typography>
            <Typography component="h4" variant="h4">
              Pablo Atanasópulos
            </Typography>
            <Typography component="p" variant="body">
              {Descripcion}
            </Typography>
            <Button
              sx={{
                width: { sx: "90px", xl: "180px" },
                m: "5px auto",
                color: "#022932",
                borderColor: "#022932",
              }}
              variant="outlined"
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

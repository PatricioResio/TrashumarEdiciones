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
        backgroundColor: "#4D7A77",
        flexDirection: "column",
        justifyContent: "center",
        height: { xs: "1200px", md: "1300px", lg: "1200px", xl: "900px" },
        width: "70%",
        minWidth: { xs: "200px", xl: "700px" },
        border: "3px solid #3C9990",
        borderRadius: "15px",
        p: "25px",
      }}
    >
      <Fade direction="down">
        <Typography
          sx={{ fontWeight: "bold", color: "#fff" }}
          variant="h2"
          component="h2"
        >
          Este es nuestro proyecto destacado!
        </Typography>
      </Fade>
      <Fade>
        <Box
          sx={{
            height: { xs: "880px", md: "1100px", lg: "1000px", xl: "650px" },
            display: "flex",
            justifyContent: "center",
            gap: "80px",
            border: "2px solid #B5C2C7",
            borderRadius: "20px",
            pt: "30px",
            width: "80%",
            minWidth: { xs: "250px", lg: "600px" },
            fontSize: "20px",
            m: "auto",
            backgroundColor: "#3C9990",
            flexDirection: {
              xs: "column",
              md: "column",
              lg: "column",
              xl: "row",
            },
          }}
        >
          <Box
            component="img"
            sx={{
              boxShadow: " 2px 2px rgba(0.12, 0, 0, 0.2)",
              height: { xl: "600px" },
              width: { xs: "270px", md: "400px", lg: "500px", xl: "600px" },
              m: "auto",
              mb: { xs: "0", xl: "50px" },
            }}
            src={TAPA_HIPPIES}
            alt="Ilustracion de tapa de libro novedad"
          ></Box>
          <Box
            sx={{
              width: { xs: "180px", lg: "600px" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              m: "auto",
              mt: { xs: "0px", xl: "auto" },
              gap: "20px",
            }}
          >
            <Typography component="h4" variant="h4">
              Pablo Atanasopolus
            </Typography>
            <Typography component="h5" variant="h5">
              El día en que los hippies descubrieron los sahumerios
            </Typography>
            <Typography component="p" variant="body2">
              Acá hay una breve descripcion de la wea de pablo
            </Typography>
            <Button
              sx={{ width: { sx: "90px", xl: "180px" }, m: "5px auto" }}
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

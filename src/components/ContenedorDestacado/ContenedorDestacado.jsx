import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { TAPA_HIPPIES } from "../../constants/constants";
import { Link } from "react-router-dom";

const ContenedorDestacado = () => {
  return (
    <Container
      maxWidth="xl"
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
      {" "}
      <Typography variant="h2" component="h2">
        Este es nuestro proyecto destacado!
      </Typography>
      <Box
        sx={{
          height: "650px",
          width: "80%",
          m: "auto",
          backgroundColor: "#3C9990",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "80px",
          border: "2px solid",
          borderRadius: "20px",
        }}
      >
        <Box
          component="img"
          sx={{
            boxShadow: " 2px 2px rgba(0.12, 0, 0, 0.2)",
            height: "500px",
            m: "auto",
          }}
          src={TAPA_HIPPIES}
          alt="Ilustracion de tapa de libro novedad"
        ></Box>{" "}
        <Box
          sx={{
            width: "600px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
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
          {/*   <Box
        component="img"
        src={CONTRATAPA_HIPPIES}
        alt="Ilustracion de contratapa de libro novedad"
      ></Box> */}
          <Button
            sx={{ width: "180px", m: "5px auto" }}
            variant="contained"
            component={Link}
            to="/proyecto/ "
          >
            Ver más
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ContenedorDestacado;

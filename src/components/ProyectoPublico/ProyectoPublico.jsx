import { Box, Container, Typography } from "@mui/material";

import { Fade } from "react-awesome-reveal";

const ProyectoPublico = ({ proyectoPublico }) => {
  const {
    fecha = proyectoPublico.fecha,
    img = proyectoPublico.img,
    img1 = proyectoPublico.img1,
    autor = proyectoPublico.autor,
    descripcion = proyectoPublico.descripcion,
    titulo = proyectoPublico.titulo,
    colaboradores = proyectoPublico.colaboradores,
  } = proyectoPublico;
  const formattedFecha =
    fecha instanceof Object
      ? new Date(fecha.seconds * 1000).toLocaleDateString()
      : fecha;

  return (
    <>
      <Container
        maxWidth="xxl"
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#215E61",
          justifyContent: "center",
          gap: "80px",
          my: "2rem",
          minHeight: "100vh",
          width: "100%",
          border: "3px solid #3C9990",
          borderRadius: "15px",
        }}
      >
        <Box
          sx={{
            width: "80%",
            fontSize: "20px",
            m: "1rem auto",
            backgroundColor: "#38A098",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "80px",
            border: "2px solid #B5C2C7",
            borderRadius: "20px",
            p: "1rem",
          }}
        >
          <Fade>
            <Box sx={{ m: "auto", p: "0 5.5rem" }}>
              <Box
                component="img"
                sx={{
                  boxShadow: " 2px 2px rgba(0.12, 0, 0, 0.2)",
                  minHeight: "30rem",
                  maxHeight: "30rem",
                  m: "auto",
                }}
                src={img}
                alt="Ilustracion de tapa de libro"
              />
              <Box
                component="img"
                sx={{
                  boxShadow: " 2px 2px rgba(0.12, 0, 0, 0.2)",
                  minHeight: "30rem",
                  maxHeight: "30rem",
                  m: "auto",
                }}
                src={img1}
                alt="Ilustracion de contratapa de libro"
              />
            </Box>
          </Fade>

          <Box>
            <Typography
              color="secondary"
              sx={{ fontWeight: "bold" }}
              variant="h3"
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
              <Typography component="h4">{autor}</Typography>
              <Typography component="h5">{formattedFecha}</Typography>
              <Typography>{descripcion}</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ProyectoPublico;

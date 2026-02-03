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
          justifyContent: "center",
          gap: "80px",
          my: "2rem",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Box
          bgcolor={"bg.whiteBlue"}
          sx={{
            width: { xs: "100%", md: "80%" },
            fontSize: "20px",
            minHeight: "80vh",
            m: "1rem auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "80px",
            borderRadius: "5px",
            p: "1rem",
          }}
        >
          <Fade>
            <Typography sx={{ fontWeight: "bold" }} variant="h3" component="h2">
              {titulo}
            </Typography>
            <Typography variant="h4" component="h3">
              {autor}
            </Typography>
            <Box
              sx={{
                m: "auto",
                p: { xs: "0", md: "0 5.5rem" },
                display: "flex",
                flexDirection: { xs: "column", xl: "row" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alingItems: "center",
                  flexDirection: { xs: "column", lg: "row" },
                  gap: 4,
                }}
              >
                <Box
                  component="img"
                  sx={{
                    boxShadow: " 2px 2px rgba(0.12, 0, 0, 0.2)",
                    height: { xs: "20rem", sm: "29rem", md: "39rem" },
                    width: { xs: "13rem", sm: "17rem", md: "22rem" },
                    m: "auto",
                  }}
                  src={img}
                  alt="Ilustracion de tapa de libro"
                />
                <Box
                  component="img"
                  sx={{
                    boxShadow: " 2px 2px rgba(0.12, 0, 0, 0.2)",
                    height: { xs: "20rem", sm: "29rem", md: "39rem" },
                    width: { xs: "13rem", sm: "17rem", md: "22rem" },
                    m: "auto",
                  }}
                  src={img1}
                  alt="Ilustracion de contratapa de libro"
                />
              </Box>
              <Box sx={{ m: "auto 3rem" }}>
                <Typography margin={2} component="p">
                  {formattedFecha}
                </Typography>
                <Typography margin={2} variant="p">
                  {descripcion}
                </Typography>
              </Box>
            </Box>
          </Fade>

          <Box>
            <Box
              sx={{
                width: "600px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "20px",
              }}
            ></Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ProyectoPublico;

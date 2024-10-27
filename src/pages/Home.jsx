import { Box, Typography } from "@mui/material";
import ContenedorProyectos from "../components/Home/ContenedorProyectos/ContenedorProyectos";
import ContenedorPerfiles from "../components/Home/ContenedorPerfiles/ContenedorPerfiles";
import CarruselHome from "../components/Home/CarruselHome/CarruselHome";
import { Fade } from "react-awesome-reveal";
import ArticleDestacado from "../components/Home/ArticleDestacado/ArticleDestacado";

const Home = () => {
  return (
    <>
      <CarruselHome />
      <Box
        maxWidth="100vw"
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          margin: "4rem 0",
          gap: 4,
          my: "7rem",

          color: "#BAE3D7",
        }}
      >
        <ArticleDestacado />

        <Box
          bgcolor="bg.mediumLightBlue"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            width: "100%",
            my: "7rem",

            pb: 2,
          }}
        >
          <Fade triggerOnce>
            <Typography
              color="secondary"
              component="h3"
              variant="h3"
              sx={{
                m: "1rem auto",
              }}
            >
              Proyectos para explorar
            </Typography>
            <ContenedorProyectos />
          </Fade>
        </Box>

        <Box
          bgcolor="bg.mediumLightBlue"
          sx={{
            justifyContent: "center",
            borderRadius: "5px",
            my: "7rem",

            width: "100%",
            pb: 2,
          }}
        >
          <Fade triggerOnce>
            <Typography
              component="h3"
              variant="h3"
              color="secondary"
              sx={{
                m: "1rem auto",
              }}
            >
              Perfiles de nuestra comunidad
            </Typography>
            <ContenedorPerfiles />
          </Fade>
        </Box>
      </Box>
    </>
  );
};

export default Home;

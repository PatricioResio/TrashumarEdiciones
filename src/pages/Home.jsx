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

          color: "#BAE3D7",
        }}
      >
        <ArticleDestacado />

        <Box
          bgcolor="bg.mediumBlue"
          sx={{
            background: "#09A5B0",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #3F7D92",
            borderRadius: "20px",
            width: "100%",
            pb: 2,
          }}
        >
          <Fade triggerOnce>
            <Typography
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
          bgcolor="bg.mediumBlue"
          sx={{
            justifyContent: "center",
            border: "1px solid #3F7D92",
            borderRadius: "20px",
            width: "100%",
            pb: 2,
          }}
        >
          <Fade triggerOnce>
            <Typography
              component="h3"
              variant="h3"
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

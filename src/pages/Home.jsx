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
          sx={{
            backgroundColor: "#38A098",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #3F7D92",
            borderRadius: "20px",
            width: "100%",
            margin: "10px auto",
            mt: "40px",
          }}
        >
          <Fade triggerOnce>
            <Typography
              component="h2"
              sx={{
                fontFamily: "roboto",
                fontSize: "30px",
                fontWeight: "bold",

                color: "#00333D",
              }}
            >
              Proyectos para explorar
            </Typography>
            <ContenedorProyectos />
          </Fade>
        </Box>

        <Box
          sx={{
            backgroundColor: "#38A098",
            height: "100vh",
            justifyContent: "center",
            border: "1px solid #3F7D92",
            borderRadius: "20px",
            width: "100%",
            margin: "10px auto",
          }}
        >
          <Fade triggerOnce>
            <Typography
              component="h2"
              sx={{
                fontFamily: "roboto",
                fontSize: "30px",
                fontWeight: "bold",
                color: "#00333D",
                m: "2rem auto",
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

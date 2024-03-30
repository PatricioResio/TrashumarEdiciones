import { Box, Container, Typography } from "@mui/material";
import ContenedorProyectos from "../components/ContenedorProyectos/ContenedorProyectos";
import ContenedorPerfiles from "../components/ContenedorPerfiles/ContenedorPerfiles";
import CarruselHome from "../components/CarruselHome/CarruselHome";
import { Fade } from "react-awesome-reveal";
import ArticleDestacado from "../components/ArticleDestacado/ArticleDestacado";

const Home = () => {
  return (
    <>
      <CarruselHome />
      <section>
        <Box
          maxWidth="100%"
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            margin: "4rem 0",
            gap: 4,
          }}
        >
          <ArticleDestacado />
          <Box
            sx={{
              backgroundColor: "#6BBCA8",
              height: "850px",
              justifyContent: "center",
              border: "1px solid #3F7D92",
              borderRadius: "20px",
              width: "63%",
              margin: "15px auto",
            }}
          >
            <Fade>
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
              backgroundColor: "#6BBCA8",
              height: "35rem",
              justifyContent: "center",
              border: "1px solid #3F7D92",
              borderRadius: "20px",
              width: "63%",
              margin: "15px auto",
            }}
          >
            <Fade>
              <Typography
                component="h2"
                sx={{
                  fontFamily: "roboto",
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "#00333D",
                }}
              >
                Perfiles de nuestra comunidad
              </Typography>
              <ContenedorPerfiles />
            </Fade>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default Home;

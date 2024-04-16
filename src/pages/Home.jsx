import { Box, Container, Typography } from "@mui/material";
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
            mt: "40px",
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
            height: "40rem",
            border: "1px solid #3F7D92",
            borderRadius: "20px",
            width: "63%",
            margin: "10px auto",
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
    </>
  );
};

export default Home;

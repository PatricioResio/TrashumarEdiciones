import { Container } from "@mui/material";
import ContenedorProyectos from "../ContenedorProyectos/ContenedorProyectos";
import ContenedorPerfiles from "../ContenedorPerfiles/ContenedorPerfiles";
import Swiper from "../Swiper/Swiper";
import ArticleDestacado from "../ArticleDestacado/ArticleDestacado";

const Home = () => {
  return (
    <>
      <Container
        sx={{
          backgroundColor: "#E1E5E6",
          marginBot: "20vh",
          marginTop: "20px",
          height: "500px",
        }}
      >
        <Swiper />
      </Container>
      <Box
        component="section"
        sx={{
          maxWidth: "70vw",
        }}
      >
        <ContenedorProyectos />
        <ContenedorPerfiles />
      </Box>
      <ArticleDestacado />
    </>
  );
};

export default Home;

import { Container } from "@mui/material";
import ContenedorProyectos from "../ContenedorProyectos/ContenedorProyectos";
import ContenedorPerfiles from "../ContenedorPerfiles/ContenedorPerfiles";
import Swiper from "../Swiper/Swiper";

const Home = () => {
  return (
    <Container
      sx={{ backgroundColor: "#E1E5E6", marginBot: "20vh", marginTop: "20px" }}
    >
      <Swiper></Swiper>
      <ContenedorProyectos />
      <ContenedorPerfiles />
    </Container>
  );
};

export default Home;

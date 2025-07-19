import { Box, Typography } from "@mui/material";
import ContenedorPerfiles from "../components/Home/ContenedorPerfiles/ContenedorPerfiles";
import CarruselHome from "../components/Home/CarruselHome/CarruselHome";
import { Fade } from "react-awesome-reveal";
import ArticleDestacado from "../components/Home/ArticleDestacado/ArticleDestacado";
import BorderWave from "../components/BorderWave/BorderWave";
import Contact from "./Contact";
import "../App.css";
import { BannerCuerpo } from "../components";

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
        <BannerCuerpo />

        <Box className="container-perfiles">
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
            <Typography
              component="h5"
              variant="h5"
              color="secondary"
              sx={{
                m: "1rem auto",
                width: "50%",
              }}
            >
              Descubrí historias, proyectos y talentos. Sumate a las redes que
              tejemos entre todos. Conectá con quienes pueden inspirarte o ser
              parte de tus próximos proyectos
            </Typography>
            <ContenedorPerfiles />
          </Fade>
        </Box>
        <BannerCuerpo />
        <Box component="section" id="contactForm">
          <Contact />
        </Box>
      </Box>
    </>
  );
};

export default Home;

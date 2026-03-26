import { Suspense, lazy } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import CarruselHome from "../components/Home/CarruselHome/CarruselHome";
import { Fade } from "react-awesome-reveal";
import "../App.css";
import BannerCuerpo from "../components/BannerCuerpo/BannerCuerpo";
import { useLazyImage } from "../hooks/useLazyImages";

const LazyArticleDestacado = lazy(() =>
  import("../components/Home/ArticleDestacado/ArticleDestacado")
);
const LazyContenedorPerfiles = lazy(() =>
  import("../components/Home/ContenedorPerfiles/ContenedorPerfiles")
);
const LazyContact = lazy(() => import("./Contact"));
const Home = () => {
  const { imgRef: articleRef, isVisible: articleVisible } = useLazyImage("400px");
  const { imgRef: perfilesRef, isVisible: perfilesVisible } = useLazyImage("500px");
  const { imgRef: contactRef, isVisible: contactVisible } = useLazyImage("600px");

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

          color: "linear-gradient(to bottom, #ffffff, #e9fffc 60%, #dafffe)",
        }}
      >
        <Box ref={articleRef} component="section" sx={{ minHeight: "50rem" }}>
          <Suspense fallback={<CircularProgress />}>
            {articleVisible ? <LazyArticleDestacado /> : null}
          </Suspense>
        </Box>

        <Box>
          <Typography></Typography>
        </Box>

        <Box component="section" mb={"20rem"}>
          <BannerCuerpo />
        </Box>

        <Box className="container-perfiles">
        
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
            <Box ref={perfilesRef} sx={{ minHeight: "18rem" }}>
              <Suspense fallback={<CircularProgress />}>
                {perfilesVisible ? <LazyContenedorPerfiles /> : null}
              </Suspense>
            </Box>
        
        </Box>
        <Box component="section" mb={{ xs: "-190px", md: 0 }}>
          <BannerCuerpo />
        </Box>
        <Box ref={contactRef} component="section" id="contactForm" sx={{ minHeight: "22rem" }}>
          <Suspense fallback={<CircularProgress />}>
            {contactVisible ? <LazyContact /> : null}
          </Suspense>
        </Box>
      </Box>
    </>
  );
};

export default Home;

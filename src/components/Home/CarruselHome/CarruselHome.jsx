import { Box, Button, Container, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./CarruselHome.css";
import { homeArrays } from "../../../constants/Arrays";
import { Suspense, lazy, useMemo, useState } from "react";
import LazyImage from "../../LazyImage/LazyImage.jsx";
import {
  buildWidthSrcSet,
  HERO_FULL_BLEED_SIZES,
} from "../../../utils/responsiveImages";
import { Link } from "react-router-dom";

// El paquete "swiper" (~107kB) vive en su propio chunk, cargado recién cuando
// hace falta. Mientras tanto se ve el hero estático de abajo (mismo slide 0),
// así la imagen del LCP no depende de que esa librería termine de descargar.
const SwiperCarousel = lazy(() => import("../SwiperCarousel/SwiperCarousel.jsx"));

const heroSlide = homeArrays[0];

const CarruselHome = () => {
  const [swiperReady, setSwiperReady] = useState(false);
  const heroSrcSet = useMemo(
    () => buildWidthSrcSet(heroSlide.responsiveSrcs),
    [],
  );

  const carouselHeight = {
    xs: "65vh",
    sm: "70vh",
    md: "70vh",
    lg: "65vh",
    xl: "65vh",
  };

  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        position: "relative",
        width: { xs: "85%", md: "60%", lg: "75%" },
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        borderRadius: "30px",
        height: {
          xs: "65vh",
          sm: "70vh",
          md: "70vh",
          lg: "65vh",
        },
      }}
    >
      <IconButton className="swiper-prev-custom">
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton className="swiper-next-custom">
        <ArrowForwardIosIcon />
      </IconButton>

      <Box sx={{ overflow: "hidden", borderRadius: "30px", height: carouselHeight }}>
        {/* Hero estático: mismos datos que homeArrays[0], visible al instante,
            sin esperar a que cargue la librería del carrusel. */}
        {!swiperReady && (
          <Container
            maxWidth="false"
            disableGutters
            sx={{
              width: "100%",
              margin: "auto",
              overflow: "hidden",
              borderRadius: "30px",
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              height: carouselHeight,
            }}
          >
            <LazyImage
              src={heroSlide.url}
              alt={heroSlide.h2}
              height={{ xs: "45%", lg: "100%" }}
              imgWidth={1920}
              imgHeight={1080}
              sizes={HERO_FULL_BLEED_SIZES}
              srcSet={heroSrcSet}
              priority
              fetchPriority="high"
              shouldLoad
            />

            <Container
              disableGutters
              maxWidth="false"
              sx={{
                width: { xs: "100%", lg: "70%" },
                height: { xs: "45vh", lg: "100%" },
                margin: "auto",
                backgroundColor: "rgba(255, 253, 253, 0.88)",
                border: "none",
                borderRight: { xs: "none", lg: "7px solid rgba(23, 184, 184, 1)" },
                borderBottom: { xs: "7px solid rgba(23, 184, 184, 1)", lg: "none" },
                borderLeft: { xs: "30px", lg: "none" },
                borderRadius: { xs: "0 0 30px 30px", lg: "0 30px 30px 0" },
                color: "#F5FDF8",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                color={"#121212"}
                variant="h5"
                align={"center"}
                sx={{ my: "auto", maxWidth: { sm: "80%", lg: "65%" } }}
              >
                {heroSlide.textP}
              </Typography>
              <Button
                component={Link}
                to={heroSlide.buttonLink}
                onClick={!heroSlide.function ? null : heroSlide.function}
                variant="contained"
                sx={{
                  bgcolor: "primary.main",
                  color: "white",
                  fontWeight: 600,
                  margin: "auto",
                  width: "80%",
                  px: 1,
                  py: 1.8,
                  fontSize: "0.8rem",
                  alignSelf: "flex-start",
                  borderRadius: 2,
                  "&:hover": {
                    bgcolor: "primary.dark",
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 20px rgba(23, 184, 184, 0.35)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {heroSlide.buttonText}
              </Button>
            </Container>
          </Container>
        )}

        {/* Se monta en segundo plano; cuando está listo, reemplaza al hero
            estático (misma imagen, ya en caché del navegador → sin parpadeo). */}
        <Box sx={{ display: swiperReady ? "block" : "none", height: "100%" }}>
          <Suspense fallback={null}>
            <SwiperCarousel onReady={() => setSwiperReady(true)} />
          </Suspense>
        </Box>
      </Box>
    </Container>
  );
};

export default CarruselHome;
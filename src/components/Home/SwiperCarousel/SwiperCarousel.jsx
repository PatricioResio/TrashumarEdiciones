import { Box, Button, Container, Typography } from "@mui/material";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { homeArrays } from "../../../constants/Arrays";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useMemo, useState } from "react";
import LazyImage from "../../LazyImage/LazyImage.jsx";
import {
  buildWidthSrcSet,
  HERO_FULL_BLEED_SIZES,
} from "../../../utils/responsiveImages";
import { Link } from "react-router-dom";

// Todo lo que depende del paquete "swiper" vive acá, en un chunk aparte que se
// carga con React.lazy desde CarruselHome.jsx. Así el hero estático (mismo
// slide 0, mismos datos) puede pintarse de inmediato sin esperar a que este
// chunk (~107kB) se descargue y ejecute.
// Índice del slide marcado como priority en homeArrays (0 si ninguno lo tiene,
// para no romper si algún día se borra ese campo por error).
const priorityIndex = Math.max(
  homeArrays.findIndex((item) => item.priority),
  0,
);
const restIndexes = homeArrays
  .map((_, i) => i)
  .filter((i) => i !== priorityIndex);

const SwiperCarousel = ({ onReady }) => {
 const [activeIndex, setActiveIndex] = useState(priorityIndex);
const [loadedIndexes, setLoadedIndexes] = useState(new Set([priorityIndex]));

  useEffect(() => {
    // Este componente ya se montó: el chunk de Swiper terminó de descargarse,
    // parsearse y ejecutarse. Avisamos al padre para que oculte el hero estático.
    onReady?.();
  }, [onReady]);

  useEffect(() => {
    const idle =
      window.requestIdleCallback || ((cb) => setTimeout(cb, 1500));
    const cancelIdle = window.cancelIdleCallback || clearTimeout;
    const id = idle(() => {
      setLoadedIndexes((prev) => new Set([...prev, ...restIndexes]));
    });
    return () => cancelIdle(id);
  }, []);

  useEffect(() => {
    setLoadedIndexes((prev) => {
      if (prev.has(activeIndex)) return prev;
      return new Set([...prev, activeIndex]);
    });
  }, [activeIndex]);

  const slideSrcSets = useMemo(
    () => homeArrays.map((item) => buildWidthSrcSet(item.responsiveSrcs)),
    [],
  );

  return (
    <Swiper
      className="MySwiper"
      navigation={{
        nextEl: ".swiper-next-custom",
        prevEl: ".swiper-prev-custom",
      }}
      modules={[Autoplay, Navigation, Pagination]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 30000 }}
      slidesPerView={1}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {homeArrays.map((item, index) => (
        <SwiperSlide key={item.id} className="swipper-slide">
          <Container
            maxWidth="false"
            disableGutters
            sx={{
              width: "100%",
              margin: "auto auto auto auto",
              overflow: "hidden",
              borderRadius: "30px",
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              height: {
                xs: "65vh",
                sm: "70vh",
                md: "70vh",
                lg: "65vh",
                xl: "65vh",
              },
            }}
          >
            <LazyImage
              src={item.url}
              alt={item.h2}
              height={{ xs: "45%", lg: "100%" }}
              imgWidth={1920}
              imgHeight={1080}
              sizes={HERO_FULL_BLEED_SIZES}
              srcSet={slideSrcSets[index]}
              priority={!!item.priority}
              fetchPriority={item.priority ? "high" : "auto"}
              shouldLoad={loadedIndexes.has(index)}
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
                key={item.textP}
                color={"#121212"}
                variant="h5"
                align={"center"}
                sx={{ my: "auto", maxWidth: { sm: "80%", lg: "65%" } }}
              >
                {item.textP}
              </Typography>
              <Button
                component={Link}
                to={item.buttonLink}
                key={item.buttonLink}
                onClick={!item.function ? null : item.function}
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
                {item.buttonText}
              </Button>
            </Container>
          </Container>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarousel;
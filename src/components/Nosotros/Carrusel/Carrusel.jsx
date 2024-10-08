import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Box, Container, Typography } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import useResetSwiper from "../../../hooks/useResetSwiper";

const Carrusel = ({ arrayImagenes }) => {
  const swiperRef = useResetSwiper(arrayImagenes);

  return (
    <Fade delay={1100}>
      <Box
        bgcolor="primary.main"
        sx={{
          minWidth: "100%",

          height: "100%",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
          boxShadow: "3px 3px 3px grey",
          marginTop: "0",
        }}
      >
        <Fade triggerOnce>
          <Typography
            component="h3"
            align="center"
            variant="h3"
            marginY={2}
            sx={{
              fontSize: "34px",
              color: "#D8EDE9",
              padding: "0",
            }}
          >
            ¿Porqué Trashumar?
          </Typography>
        </Fade>
        <Container
          sx={{
            display: "flex",
            maxHeight: "fit-content",
            height: "95vh",
            minWidth: "420px",
            alignItems: "center",
            margin: "0 auto 2rem auto",
          }}
        >
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            rewind={true}
            navigation={true}
            modules={[EffectFade, Navigation]}
            effect="fade"
            className="swiper"
            slidesPerView={1}
            runCallbacksOnInit={true}
          >
            {arrayImagenes.map((imgA) => (
              <Fade>
                <SwiperSlide key={imgA.id}>
                  <Box
                    sx={{
                      height: "85vh",
                      width: { xs: "20rem", md: "25rem", lg: "40rem" },
                      margin: { xs: "0", lg: "auto" },
                      boxShadow: "4px 4px black",
                    }}
                    component="img"
                    src={imgA.img}
                    alt="descripcion futura de la imagen descriptiva"
                  />
                </SwiperSlide>
              </Fade>
            ))}
          </Swiper>
        </Container>
      </Box>
    </Fade>
  );
};

export default Carrusel;

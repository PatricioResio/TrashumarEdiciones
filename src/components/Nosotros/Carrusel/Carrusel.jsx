import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Box, Container, Typography } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import useResetSwiper from "../../../hooks/useResetSwiper";

const Carrusel = ({ arrayImagenes }) => {
  const swiperRef = useResetSwiper(arrayImagenes);

  return (
    <Box
      bgcolor="bg.dark"
      sx={{
        minWidth: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        boxShadow: "3px 3px 3px grey",
        marginTop: "0",
      }}
    >
      <Fade triggerOnce delay={500}>
        <Typography
          component="h3"
          align="center"
          variant="h3"
          marginY={2}
          sx={{
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
          alignItems: "center",
          margin: "0 auto 2rem auto",
        }}
      >
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          rewind={true}
          navigation={true}
          modules={[EffectCoverflow, Navigation]}
          effect="coverFlow"
          className="swiper"
          slidesPerView={1}
          runCallbacksOnInit={true}
        >
          {arrayImagenes.map((imgA) => (
            <SwiperSlide key={imgA.id}>
              <Fade delay={1300} triggerOnce>
                <Box
                  sx={{
                    height: { xs: "70vh", sm: "480px", md: "85vh" },
                    width: { xs: "75vw", sm: "230px", md: "32rem" },
                    margin: { xs: "0", lg: "auto" },
                    boxShadow: "4px 4px black",
                  }}
                  component="img"
                  src={imgA.img}
                  alt="descripcion futura de la imagen descriptiva"
                />
              </Fade>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Carrusel;

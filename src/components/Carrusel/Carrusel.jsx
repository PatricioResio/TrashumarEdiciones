import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Box, Container } from "@mui/material";
import { Fade } from "react-awesome-reveal";

const Carrusel = ({ arrayImagenes }) => {
  return (
    <Fade>
      <Container
        sx={{
          minWidth: "100%",
          background: "#2D4746",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
          boxShadow: "3px 3px 3px grey",
          borderRadius: "20px",
          marginTop: "0",
        }}
      >
        <Container
          sx={{
            display: "flex",
            maxHeight: "fit-content",
            minWidth: "420px",
            alignItems: "center",
            margin: "2rem auto",
          }}
        >
          <Swiper
            navigation={true}
            modules={[Navigation, EffectFade]}
            effect="fade"
            className="swiper"
            spaceBetween={30}
            slidesPerView={1}
            runCallbacksOnInit={true}
          >
            {arrayImagenes.map((imgA) => (
              <SwiperSlide key={imgA.id} className="swipper-slide">
                <Box
                  sx={{
                    maxHeight: "95vh",
                    width: "100%",
                    maxWidth: "600px",
                    margin: "auto",
                    boxShadow: "4px 4px black",
                  }}
                  component="img"
                  src={imgA.img}
                  alt="descripcion futura de la imagen descriptiva"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Container>
    </Fade>
  );
};

export default Carrusel;

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Box, Container } from "@mui/material";
import { Fade } from "react-awesome-reveal";

const Carrusel = ({ arrayImagenes }) => {
  return (
    <Fade delay={1100}>
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
            height: "95vh",
            minWidth: "420px",
            alignItems: "center",
            margin: "2rem auto",
          }}
        >
          <Swiper
            rewind={true}
            navigation={true}
            modules={[EffectFade, Navigation]}
            effect="fade"
            className="swiper"
            spaceBetween={30}
            slidesPerView={1}
            runCallbacksOnInit={true}
          >
            {arrayImagenes.map((imgA) => (
              <SwiperSlide key={imgA.id}>
                <Box
                  sx={{
                    maxHeight: "95vh",
                    width: "800px",
                    maxWidth: "800px",
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

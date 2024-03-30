import { Box, Button, Container, Typography } from "@mui/material";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { homeArrays } from "../../constants/Arrays";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { autoPlay } from "react-swipeable-views-utils";

const CarruselHome = () => {
  return (
    <Fade triggerOnce={true} delay={650}>
      <Container
        maxWidth="false"
        disableGutters
        sx={{
          minWidth: "100%",
          height: "93vh",
          borderRadius: "20px",
        }}
      >
        <Swiper
          pagination={true}
          modules={[Pagination, EffectFade, Autoplay]}
          autoplay={{ delay: 5000 }}
          className="swiper"
          effect="fade"
          slidesPerView={1}
        >
          {homeArrays.map((item) => (
            <SwiperSlide key={item.id} className="swipper-slide">
              <Container
                maxWidth="false"
                disableGutters
                sx={{
                  width: "100%",
                  margin: "auto",
                  height: "100vh",
                  borderRadius: "10px",
                }}
              >
                <Box
                  sx={{
                    height: "95vh",
                    width: "100%",
                    position: "relative",
                    borderRadius: "10px",
                  }}
                  component="img"
                  src={item.url}
                  alt="descripcion futura de la imagen "
                />
                <Container
                  disableGutters
                  maxWidth="xl"
                  sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    backdropFilter: "blur(5px)",
                    width: "53%",
                    position: "absolute",
                    top: "700px",
                    left: "420px",
                    color: "white",
                    padding: "20px",
                    border: "2px solid black",
                    borderRadius: "15px",
                  }}
                >
                  <Typography
                    key={item.h2}
                    className="h2-carrusel"
                    component="h2"
                    variant="h2"
                  >
                    <Fade direction="down" delay={1000}>
                      {item.h2}
                    </Fade>
                  </Typography>
                  <Typography
                    sx={{ fontSize: "20px" }}
                    key={item.textP}
                    className="p-carrusel"
                    component="p"
                    variant="p"
                  >
                    <Fade direction="right" delay={1000}>
                      {item.textP}
                    </Fade>
                  </Typography>

                  <Button
                    className="button-carrusel"
                    component={Link}
                    to={item.buttonLink}
                    key={item.buttonLink}
                    variant="outlined"
                    sx={{ mt: "15px" }}
                  >
                    <Fade direction="top" delay={1000}>
                      {item.buttonText}
                    </Fade>
                  </Button>
                </Container>
              </Container>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Fade>
  );
};

export default CarruselHome;

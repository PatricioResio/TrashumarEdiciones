import { Box, Button, Container, Typography } from "@mui/material";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { homeArrays } from "../../../constants/Arrays";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const CarruselHome = () => {
  return (
    <Fade triggerOnce delay={1200}>
      <Container
        maxWidth="false"
        disableGutters
        sx={{
          minWidth: "100%",
          height: {
            xs: "80vh",
            sm: "60vh",
            md: "80vh",
            lg: "100vh",
            xl: "100vh",
          },
          borderRadius: "0",
          mb: "20px",
        }}
      >
        <Swiper
          pagination={true}
          modules={[EffectFade, Autoplay]}
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
                  height: {
                    xs: "80vh",
                    sm: "60vh",
                    md: "80vh",
                    lg: "100vh",
                    xl: "100vh",
                  },
                }}
              >
                <Box
                  sx={{
                    height: {
                      xs: "80vh",
                      sm: "60vh",
                      md: "80vh",
                      lg: "100vh",
                      xl: "100vh",
                    },
                    width: "100%",
                    position: "relative",
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
                    width: { xs: "89vw", sm: "53%" },
                    maxHeight: { xs: "40%" },
                    position: "absolute",
                    bottom: 0,
                    left: {
                      xs: "5%",
                      sm: "140px",
                      md: "220px",
                      lg: "290px",
                      xl: "420px",
                    },
                    padding: "20px",
                    border: "2px solid black",
                    borderRadius: "15px",
                    color: "#F5FDF8",
                  }}
                >
                  <Typography
                    variant="h3"
                    component="h2"
                    key={item.h2}
                    className="h2-carrusel"
                  >
                    <Fade triggerOnce direction="down" delay={1400}>
                      {item.h2}
                    </Fade>
                  </Typography>
                  <Typography key={item.textP} className="p-carrusel">
                    <Fade triggerOnce direction="right" delay={1200}>
                      {item.textP}
                    </Fade>
                  </Typography>

                  <Button
                    component={Link}
                    to={item.buttonLink}
                    key={item.buttonLink}
                    variant="outlined"
                    sx={{
                      mt: "15px",
                      color: "#BAE3D7",
                      borderColor: "#BAE3D7",
                    }}
                  >
                    <Fade triggerOnce direction="top" delay={1200}>
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

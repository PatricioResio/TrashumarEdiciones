import { Box, Button, Container, Typography } from "@mui/material";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "../FilaPerfiles/FilaPerfiles.css";
import "swiper/css/navigation";
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
            xs: "90vh",
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
          navigation={true}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          autoplay={{ delay: 15000 }}
          className="swiper"
          slidesPerView={1}
        >
          <div className=".swiper-button-prev"></div>
          <div className=".swiper-button-next"></div>
          {homeArrays.map((item) => (
            <SwiperSlide key={item.id} className="swipper-slide">
              <Container
                maxWidth="false"
                disableGutters
                sx={{
                  width: "100%",
                  margin: "auto",
                  height: {
                    xs: "90vh",
                    sm: "60vh",
                    md: "80vh",
                    lg: "90vh",
                    xl: "90vh",
                  },
                }}
              >
                <Box
                  sx={{
                    height: {
                      xs: "90vh",
                      sm: "60vh",
                      md: "80vh",
                      lg: "90vh",
                      xl: "90vh",
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
                  maxWidth="false"
                  sx={{
                    width: {
                      xs: "90%",
                      sm: "94%",
                      md: "95%",
                      lg: "97%",
                      xl: "98%",
                    },
                    position: "absolute",
                    bottom: 0,
                    top: 0,
                    left: 0,
                    right: 0,
                    margin: "20px",
                    border: "2px solid black",
                    borderRadius: "50px",
                    backgroundColor: "rgba(122, 231, 210, 0.5)",
                    borderColor: "rgba(122, 231, 210, 0.5)",
                    backdropFilter: "blur(5px)",
                    color: "#F5FDF8",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h1"
                    component="h2"
                    align={"center"}
                    sx={{
                      m: "auto",
                    }}
                    key={item.h2}
                  >
                    <Fade triggerOnce direction="down" delay={1400}>
                      {item.h2}
                    </Fade>
                  </Typography>
                  <Typography
                    key={item.textP}
                    variant="h2"
                    align={"center"}
                    sx={{
                      my: "auto",
                      maxWidth: "80%",
                    }}
                  >
                    <Fade triggerOnce direction="right" delay={1200}>
                      {item.textP}
                    </Fade>
                  </Typography>

                  <Button
                    component={Link}
                    to={item.buttonLink}
                    key={item.buttonLink}
                    onClick={!item.function ? null : item.function}
                    variant="outlined"
                    sx={{
                      my: "auto",
                      color: "#022932",
                      borderColor: "#022932",
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

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
          height: { xs: "40vh", md: "80vh", lg: "100vh", xl: "100vh" },
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
                  height: { xs: "40vh", md: "80vh", lg: "100vh", xl: "100vh" },
                }}
              >
                <Box
                  sx={{
                    height: {
                      xs: "40vh",
                      md: "60vh",
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
                    width: "53%",
                    position: "absolute",
                    top: { xs: "180px", md: "350px", lg: "420px", xl: "600px" },
                    left: { xs: "160px", md: "220", lg: "290px", xl: "420px" },
                    color: "white",
                    padding: "20px",
                    border: "2px solid black",
                    borderRadius: "15px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "20px",
                        md: "27px",
                        lg: "37px",
                        xl: "45px",
                      },
                      fontWeight: "bold",
                    }}
                    key={item.h2}
                    className="h2-carrusel"
                  >
                    <Fade triggerOnce direction="down" delay={1400}>
                      {item.h2}
                    </Fade>
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "13px",
                        md: "18px",
                        lg: "26px",
                        xl: "33px",
                      },
                    }}
                    key={item.textP}
                    className="p-carrusel"
                    component="p"
                    variant="p"
                  >
                    <Fade triggerOnce direction="right" delay={1200}>
                      {item.textP}
                    </Fade>
                  </Typography>

                  <Button
                    className="button-carrusel"
                    component={Link}
                    to={item.buttonLink}
                    key={item.buttonLink}
                    variant="outlined"
                    color="secondary"
                    sx={{ mt: "15px" }}
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

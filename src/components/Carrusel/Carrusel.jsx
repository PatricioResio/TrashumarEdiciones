import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { imgArray } from "../../constants/constants";
import "swiper/css";
import "swiper/css/navigation";
import { Box, Container } from "@mui/material";

const Carrusel = () => {
  return (
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
          modules={[Navigation]}
          className="swiper"
          spaceBetween={30}
          slidesPerView={1}
        >
          {imgArray.map((imgA, i) => (
            <SwiperSlide key={i} className="swipper-slide">
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
                alt="imagen descriptiva"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Container>
  );
};

export default Carrusel;

import { Container, Typography } from "@mui/material";
import {
  CartaPrograma,
  CartaPrograma2,
  CartaPrograma3,
  CartaPrograma4,
  CartaPrograma5,
} from "../CartaPrograma/CartaPrograma";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const ContenedorPrograma = () => {
  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{ mb: "150px", height: { xs: "200vh", md: "550px" } }}
    >
      <Typography variant="h3" component="h3" align="center" gutterBottom>
        Programa editorial
      </Typography>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="swiper"
        slidesPerView={1}
        spaceBetween={40}
      >
        <SwiperSlide className="swiper-slide">
          <CartaPrograma />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <CartaPrograma2 />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <CartaPrograma3 />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <CartaPrograma4 />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <CartaPrograma5 />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};
export default ContenedorPrograma;

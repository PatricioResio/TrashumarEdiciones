import CartaPerfiles from "../CartaPerfiles/CartaPerfiles";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./FilaPerfiles.css";
import { Box } from "@mui/material";

const FilaPerfiles = ({ perfiles }) => {
  return (
    <Box sx={{height: { xs: "24rem", md: "26rem", lg:"26rem" },}}>
      <Swiper
      className="Swiper"
        spaceBetween={6}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          820: { slidesPerView: "2" },
          1180: { slidesPerView: "3" },
          1690: { slidesPerView: "3" },
          1980: { slidesPerView: "4" },
        }}
      >
        {perfiles.map((perfil) => (
          <SwiperSlide key={perfil.idPerfil} className="swiper.slide">
            <CartaPerfiles perfil={{ ...perfil }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default FilaPerfiles;

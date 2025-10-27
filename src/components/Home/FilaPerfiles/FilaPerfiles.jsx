import CartaPerfiles from "../CartaPerfiles/CartaPerfiles";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import { SwiperSlide, Swiper } from "swiper/react";
import "./FilaPerfiles.css";

const FilaPerfiles = ({ perfiles }) => {
  return (
    <>
      <Swiper
        className="MySwiper"
        spaceBetween={6}
        breakpoints={{
          820: { slidesPerView: "2" },
          1180: { slidesPerView: "3" },
          1690: { slidesPerView: "3" },
          1980: { slidesPerView: "4" },
        }}
      >
        {perfiles.map((perfil) => (
          <SwiperSlide className="MySwiper">
            <CartaPerfiles key={perfil.idPerfil} perfil={{ ...perfil }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FilaPerfiles;

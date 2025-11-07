import CartaPerfiles from "../CartaPerfiles/CartaPerfiles";
import "swiper/css
import "swiper/css/pagination"
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import { SwiperSlide, Swiper, Pagination } from "swiper/react";
import "./FilaPerfiles.css";

const FilaPerfiles = ({ perfiles }) => {
  return (
    <>
      <Swiper
        className="MySwiper"
        modules=[Pagination]
        pagination=[true]
        spaceBetween={6}
        autoplay={{ delay: 15000 }}
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

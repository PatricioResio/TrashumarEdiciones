import CartaPerfiles from "../CartaPerfiles/CartaPerfiles";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const FilaPerfiles = ({ perfiles }) => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="swiper"
        spaceBetween={3}
        breakpoints={{
          740: { slidesPerView: "2" },
          1070: { slidesPerView: "3" },
          1400: { slidesPerView: "4" },
        }}
      >
        {perfiles.map((perfil, i) => (
          <SwiperSlide key={i} className="swiper-slide">
            <CartaPerfiles key={perfil.id} perfil={{ ...perfil }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FilaPerfiles;

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
        slidesPerView={4}
        spaceBetween={40}
      >
        {perfiles.map((perfil, i) => (
          <SwiperSlide key={i} className="swiper-slide">
            <CartaPerfiles key={i} perfil={{ ...perfil }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FilaPerfiles;

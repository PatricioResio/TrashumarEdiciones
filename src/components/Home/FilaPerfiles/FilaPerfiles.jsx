import CartaPerfiles from "../CartaPerfiles/CartaPerfiles";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const FilaPerfiles = ({ perfiles }) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      spaceBetween={7}
      breakpoints={{
        1180: { slidesPerView: "2" },
        1690: { slidesPerView: "3" },
        1980: { slidesPerView: "4" },
      }}
    >
      {perfiles.map((perfil) => (
        <SwiperSlide>
          <CartaPerfiles key={perfil.idPerfil} perfil={{ ...perfil }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FilaPerfiles;

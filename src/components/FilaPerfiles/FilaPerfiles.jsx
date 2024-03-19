import { Fade } from "@mui/material";
import CartaPerfiles from "../CartaPerfiles/CartaPerfiles";
import "swiper/css";
import "swiper/css/navigation";
import { EffectFade, Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const FilaPerfiles = ({ perfiles }) => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="swiper"
        spaceBetween={2}
        breakpoints={{
          1180: { slidesPerView: "2" },
          1690: { slidesPerView: "3" },
          1980: { slidesPerView: "4" },
        }}
      >
        {perfiles.map((perfil) => (
          <SwiperSlide key={perfil.id} className="MySwyper">
            <CartaPerfiles key={perfil.name} perfil={{ ...perfil }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FilaPerfiles;

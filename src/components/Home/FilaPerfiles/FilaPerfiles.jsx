import CartaPerfiles from "../CartaPerfiles/CartaPerfiles";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import {
  faCircleLeft,
  faCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/material";

const FilaPerfiles = ({ perfiles }) => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
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

import CartaProyectos from "../CartaProyectos/CartaProyectos";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "./FilaProyectos.css";
import "swiper/css/effect-coverflow";

const FilaProyectos = ({ proyectos }) => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        spaceBetween={7}
        breakpoints={{
          1180: { slidesPerView: "1" },
          1690: { slidesPerView: "2" },
          1980: { slidesPerView: "3" },
        }}
      >
        {proyectos.map((proyecto) => (
          <SwiperSlide className="MySwiper" key={proyecto.id}>
            <CartaProyectos key={proyecto.id} proyecto={{ ...proyecto }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FilaProyectos;

import CartaProyectos from "../CartaProyectos/CartaProyectos";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./FilaProyectos.css";

const FilaProyectos = ({ proyectos }) => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="swiper"
        slidesPerView={4}
        spaceBetween={5}
      >
        {proyectos.map((proyecto) => (
          <SwiperSlide className="slide-swiper" item key={proyecto.fecha}>
            <CartaProyectos proyecto={{ ...proyecto }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FilaProyectos;

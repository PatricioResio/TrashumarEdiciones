import CartaProyectos from "../CartaProyectos/CartaProyectos";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./FilaProyectos.css";
import "swiper/css/effect-coverflow";
import { Navigation } from "swiper/modules";

const FilaProyectos = ({ proyectos }) => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        spaceBetween={7}
        breakpoints={{
          820: { slidesPerView: "2" },
          1180: { slidesPerView: "3" },
          1690: { slidesPerView: "3" },
          1980: { slidesPerView: "4" },
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

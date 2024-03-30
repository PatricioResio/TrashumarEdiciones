import { Typography } from "@mui/material";
import CartaProyectos from "../CartaProyectos/CartaProyectos";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const FilaColaboraciones = ({ colaboraciones }) => {
  return (
    <>
      <Typography variant="h3" position="center">
        Colaboraciones
      </Typography>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="swiper"
        spaceBetween={2}
        breakpoints={{
          1180: { slidesPerView: "1" },
          1690: { slidesPerView: "1" },
          1980: { slidesPerView: "1" },
        }}
      >
        {colaboraciones.map((proyecto) => (
          <SwiperSlide key={proyecto.idProyecto} className="MySwyper">
            <CartaProyectos key={proyecto.name} proyecto={{ ...proyecto }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FilaColaboraciones;

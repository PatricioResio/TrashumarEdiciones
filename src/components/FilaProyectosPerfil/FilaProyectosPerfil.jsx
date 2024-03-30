import { Typography } from "@mui/material";
import CartaProyectos from "../CartaProyectos/CartaProyectos";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const FilaProyectos = ({ proyectosUser }) => {
  console.log(proyectosUser);
  return (
    <>
      {" "}
      <Typography variant="h3" position="center">
        Proyectos
      </Typography>
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
        {!proyectosUser ? (
          <Typography>el usuario todavía no trabajo con nosotros</Typography>
        ) : (
          proyectosUser.map((proyecto) => (
            <SwiperSlide key={proyecto.idProyecto} className="MySwyper">
              <CartaProyectos key={proyecto.name} proyecto={{ ...proyecto }} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
};

export default FilaProyectos;

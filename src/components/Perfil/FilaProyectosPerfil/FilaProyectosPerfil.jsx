import { Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import CartaProyectoPerfil from "../CartaProyectoPerfil/CartaProyectoPerfil";

const FilaProyectos = ({ proyectosUser }) => {
  return (
    <>
      <Typography
        sx={{
          mb: "50px",
          fontSize: { xs: "34px", md: "42px", lg: "50px", xl: "60px" },
        }}
        variant="h3"
        position="center"
      >
        Mis proyectos
      </Typography>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="swiper"
        spaceBetween={1}
        breakpoints={{
          1180: { slidesPerView: "1" },
          1690: { slidesPerView: "1" },
          1980: { slidesPerView: "2" },
        }}
      >
        {!proyectosUser ? (
          <Typography>el usuario todavía no trabajo con nosotros</Typography>
        ) : (
          proyectosUser.map((proyecto) => (
            <SwiperSlide key={proyecto.idProyecto} className="MySwyper">
              <CartaProyectoPerfil
                key={proyecto.name}
                proyecto={{ ...proyecto }}
              />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
};

export default FilaProyectos;

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
          m: "auto auto 50px auto",
          fontSize: { xs: "34px", md: "42px", lg: "50px", xl: "60px" },
        }}
        variant="h3"
        position="center"
      >
        Mis proyectos
      </Typography>
      {!proyectosUser ? (
        <Typography>El usuario no tiene proyectos todavía</Typography>
      ) : (
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="swiper"
          centeredSlides={true}
          spaceBetween={1}
          breakpoints={{
            1180: { slidesPerView: "2" },
            1690: { slidesPerView: "2" },
            1980: { slidesPerView: "2" },
          }}
        >
          {proyectosUser.map((proyecto) => (
            <SwiperSlide key={proyecto.idProyecto} className="MySwyper">
              <CartaProyectoPerfil
                key={proyecto.name}
                proyecto={{ ...proyecto }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default FilaProyectos;

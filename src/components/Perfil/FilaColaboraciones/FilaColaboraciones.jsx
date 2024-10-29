import { Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import CartaProyectoPerfil from "../CartaProyectoPerfil/CartaProyectoPerfil";

const FilaColaboraciones = ({ colaboraciones }) => {
  return (
    <>
      <Typography
        sx={{
          m: "auto auto 50px auto",
        }}
        variant="h3"
        position="center"
      >
        Mis colaboraciones
      </Typography>
      {colaboraciones.length === 0 ? (
        <Typography variant="h5" sx={{ margin: "auto" }}>
          El usuario no tiene colaboraciones todavía
        </Typography>
      ) : (
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="swiper"
          spaceBetween={1}
          breakpoints={{
            1180: { slidesPerView: "2" },
            1690: { slidesPerView: "2" },
            1980: { slidesPerView: "2" },
          }}
        >
          {colaboraciones.map((proyecto) => (
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

export default FilaColaboraciones;

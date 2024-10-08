import CartaHistoria from "../CartaHistoria/CartaHistoria";
import { historias } from "../../../constants/Arrays";
import { Box, CircularProgress, Typography } from "@mui/material";
import Carrusel from "../Carrusel/Carrusel";
import useHistorias from "../../../hooks/useHistorias";
import { Suspense } from "react";
import { Loader } from "../../index";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const ContenedorHistoria = () => {
  const { imgArrayCarrusel, handleChangeHistoria } = useHistorias();

  return (
    <>
      <Box
        bgcolor="bg.mediumBlue"
        borderColor="border.dark"
        sx={{
          height: "43rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid",
          borderRadius: "20px",
          width: "75%",
          margin: "15px auto",
          padding: "0",
        }}
      >
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="MySwiper"
          spaceBetween={2}
          breakpoints={{
            920: { slidesPerView: "2" },
            1300: { slidesPerView: "3" },
            1690: { slidesPerView: "4" },
          }}
        >
          {historias.map((historia) => (
            <SwiperSlide key={historia.id}>
              <Fade triggerOnce>
                <CartaHistoria
                  key={historia.posicion}
                  {...historia}
                  handleChangeHistoria={handleChangeHistoria}
                />
              </Fade>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Fade triggerOnce>
          <Carrusel arrayImagenes={imgArrayCarrusel} />
        </Fade>
      </Box>
    </>
  );
};

export default ContenedorHistoria;

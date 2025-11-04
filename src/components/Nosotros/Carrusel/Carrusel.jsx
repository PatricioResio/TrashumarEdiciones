import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { Box, Button, Container, Typography } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import useResetSwiper from "../../../hooks/useResetSwiper";
import "./Carrusel.css"; // ⬅️ agregá este import

const Carrusel = ({ arrayImagenes, handlerPopUp }) => {
  const swiperRef = useResetSwiper(arrayImagenes);

  return (
    <Box className="popup-overlay" onClick={handlerPopUp}>
      <Box
        className="popup-content"
        onClick={(e) => e.stopPropagation()} // ⬅️ evita cerrar al hacer click dentro
      >
        <Button onClick={handlerPopUp} className="close-btn">
          ✕
        </Button>

        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "95vh",
          }}
        >
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            rewind
            scrollbar
            modules={[EffectCoverflow, Scrollbar]}
            effect="coverFlow"
            slidesPerView={1}
            runCallbacksOnInit
          >
            {arrayImagenes.map((imgA) => (
              <SwiperSlide key={imgA.id}>
                <Fade delay={400} triggerOnce>
                  <Box
                    component="img"
                    src={imgA.img}
                    alt="imagen descriptiva"
                    sx={{
                      height: { xs: "70vh", md: "90vh" },
                      width: { xs: "80vw", md: "30vw" },
                      objectFit: "cover",
                      borderRadius: "15px",
                      boxShadow: "4px 4px 10px rgba(0,0,0,0.5)",
                      margin: " auto",
                    }}
                  />
                </Fade>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Box>
    </Box>
  );
};

export default Carrusel;

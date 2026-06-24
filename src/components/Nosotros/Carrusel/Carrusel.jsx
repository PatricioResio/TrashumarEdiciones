  import { Swiper, SwiperSlide } from "swiper/react";
  import { EffectCoverflow, Scrollbar } from "swiper/modules";
  import "swiper/css";
  import "swiper/css/scrollbar";
  import { Box, Button, Container} from "@mui/material";
  import useResetSwiper from "../../../hooks/useResetSwiper";
  import "./Carrusel.css"; 
  import LazyImage from "../../LazyImage/LazyImage";

  const Carrusel = ({ arrayImagenes, handlerPopUp }) => {
    const swiperRef = useResetSwiper(arrayImagenes);

    return (
      <Box className="popup-overlay" onClick={handlerPopUp}>
        <Box className="popup-content" onClick={(e) => e.stopPropagation()}>
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
              className="MySwiperHistorias"
            >
              {arrayImagenes.map((imgA) => (
                <SwiperSlide key={imgA.id}>
                    <LazyImage
                      src={imgA.img}
                      alt="imagen descriptiva"
                      height={"100%"} 
                      width={"auto"}
                      imgWidth={1920}
                      imgHeight={1080}
                      margin={"auto"}
                    />
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </Box>
      </Box>
    );
  };

  export default Carrusel;

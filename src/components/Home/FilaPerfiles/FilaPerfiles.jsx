import CartaPerfiles from "../CartaPerfiles/CartaPerfiles";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./FilaPerfiles.css";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const FilaPerfiles = ({ perfiles }) => {
  return (
    <Box sx={{height: { xs: "20rem", md: "22rem", lg:"26rem" },}}>
      <Swiper
      className="Swiper"
        spaceBetween={6}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          820: { slidesPerView: "2" },
          1180: { slidesPerView: "3" },
          1690: { slidesPerView: "3" },
          1980: { slidesPerView: "4" },
        }}
      >
        {perfiles.map((perfil) => (
          <SwiperSlide key={perfil.idPerfil} className="swiper.slide">
            <CartaPerfiles perfil={{ ...perfil }} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button component={Link} to="/comunidad"variant="contained" sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    height:"40px",
                    fontWeight: 600,
                    margin:"30px auto auto auto",
                    width:{xs:"70%", md:"50%", lg:"30%",},
                    px: 1,
                    py: 1.8,
                    fontSize: '0.8rem',
                    borderRadius: 2,
                    '&:hover': {
                      bgcolor: 'primary.dark',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 20px rgba(23, 184, 184, 0.35)',
                    },
                    transition: 'all 0.3s ease',}} >Descubrí más trashumarenses</Button>
    </Box>
  );
};

export default FilaPerfiles;

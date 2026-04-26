import { Box, Container, Typography } from "@mui/material";
import { PROGRAMAS } from "../../../constants/Textos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ContenedorPrograma = () => {
  return (
    <Container disableGutters maxWidth="xl" sx={{ mb: "150px" }}>
      <Typography variant="h2" component="h3" align="center" gutterBottom fontWeight={400}>
        Programa editorial
      </Typography>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={20}
        breakpoints={{
          0:    { slidesPerView: "1" },
          700:  { slidesPerView: "2" },
          1200: { slidesPerView: "3" },
        }}
        style={{ paddingBottom: "3rem" }}
      >
        {PROGRAMAS.map((parrafo, i) => (
          <SwiperSlide key={i}>
            <Box
              sx={{
                height:{xs:"400px",sm:"500px",md:"550px",lg:"750px"},
                overflowY: "auto",
                p: "1.5rem",
                borderRadius: "12px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                textAlign: "justify",
                bgcolor: "bg.whiteBlue",
              }}
            >
              <Typography variant="body2" sx={{
                minHeightt:"100%", whiteSpace: "pre-line" }}>
                {parrafo}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ContenedorPrograma;
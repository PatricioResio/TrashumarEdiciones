import { Box, Button, Container, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "../FilaPerfiles/FilaPerfiles.css";
import "swiper/css/navigation";
import "./CarruselHome.css";
import { homeArrays } from "../../../constants/Arrays";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMemo, useState } from "react";
import LazyImage from "../../LazyImage/LazyImage.jsx";
import {
  buildWidthSrcSet,
  HERO_FULL_BLEED_SIZES,
} from "../../../utils/responsiveImages";
import { Link } from "react-router-dom";


const CarruselHome = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideSrcSets = useMemo(
    () => homeArrays.map((item) => buildWidthSrcSet(item.responsiveSrcs)),
    [],
  );

  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        position: 'relative', 
        width: "75%",
        padding:1,
        height: {
          xs: "90vh",
          sm: "60vh",
          md: "80vh",
          lg: "75vh",
          xl: "75vh",
        },
        mb: "20px",
      }}
    >
      <IconButton className="swiper-prev-custom" >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton className="swiper-next-custom">
          <ArrowForwardIosIcon />
        </IconButton>
        <Box sx={{
    overflow: 'hidden',
    borderRadius: '30px',
    height: {
      xs: "90vh",
      sm: "60vh",
      md: "80vh",
      lg: "75vh",
      xl: "75vh",
    },
  }}>

      <Swiper
        navigation={{
          nextEl: '.swiper-next-custom',
          prevEl: '.swiper-prev-custom',
        }}
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 15000 }}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
          
        {homeArrays.map((item, index) => (
          <SwiperSlide key={item.id} className="swipper-slide">
            <Container
              maxWidth="false"
              disableGutters
              sx={{
                width: "100%",
                margin: "80px auto auto auto",
                overflow: "hidden",
                borderRadius: "30px",
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                height: {
                  xs: "90vh",
                  sm: "60vh",
                  md: "80vh",
                  lg: "65vh",
                  xl: "65vh",
                },
              }}
            >
              <LazyImage
                src={item.url}
                alt={item.h2}
                height="100%"
                imgWidth={1920}
                imgHeight={1080}
                sizes={HERO_FULL_BLEED_SIZES}
                srcSet={slideSrcSets[index]}
                priority={index === 0}
                fetchPriority={index === 0 ? "high" : "auto"}
                shouldLoad={Math.abs(index - activeIndex) <= 1}
                />
              <Container
                disableGutters
                maxWidth="false"
                sx={{
                  width: "50%",
                  height: "100%",
                  margin: "auto",
                  backgroundColor: "rgba(255, 253, 253, 0.88)",
                  border:"1px solid #09A5B0",
                  borderColor: "rgba(13, 14, 14, 0.7)",
                  borderLeft: "none", // ← saca el borde interno
                  borderRadius: "0 30px 30px 0",
                  color: "#F5FDF8",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >    <Box
              sx={{
                mt: 6,
                p: 1,          
                width:"85%",
                background:"#09A5B0",
                borderRadius:"60px",
                textAlign: 'center',
                
                color: 'secondary.white',
              }}
            >

                <Typography
                  variant="h2"
                  component="h2"
                  fontWeight={500}
                  color={"secondary.white"}
                  align={"center"}
                  sx={{ m: "auto" }}
                  key={item.h2}
                  >
                  {item.h2}
                </Typography>
                  </Box>
                <Typography
                  key={item.textP}
                  color={"#121212"}
                  variant="h4"
                  align={"center"}
                  sx={{ my: "auto", maxWidth: { sm: "80%", lg: "65%" } }}
                >
                  {item.textP}
                </Typography>
                <Button
                  component={Link}
                  to={item.buttonLink}
                  key={item.buttonLink}
                  onClick={!item.function ? null : item.function}
                  variant="contained"
                  sx={{
                    my: "auto",
                    bgcolor: "#09A5B0",
                    borderColor: "#022932",
                    border: "2px solid",
                    width:"50%",
                    borderRadius:"20px",
                    "&:hover": {
                      outline: "none",
                      bgcolor: "#09A5B0",
                    },
                  }}
                  >
                  {item.buttonText}
                </Button>
              </Container>
            </Container>
          </SwiperSlide>
        ))}

        {/* Botones fuera de los slides pero dentro del Swiper */}
      

      </Swiper>
        </Box>
    </Container>
  );
};

export default CarruselHome;
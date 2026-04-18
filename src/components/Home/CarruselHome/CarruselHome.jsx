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
        width: {xs:"70%",md:"60%", lg:"75%"},
        boxShadow:"0 0 10px rgba(0, 0, 0, 0.2)",
        borderRadius:"30px",
        height: {
          xs: "65vh",
          sm: "70vh",
          md: "70vh",
          lg: "65vh",
        },
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
      xs: "65vh",
      sm: "70vh",
      md: "70vh",
      lg: "65vh",
      xl: "65vh",
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
                margin: "auto auto auto auto",
                overflow: "hidden",
                borderRadius: "30px",
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                height: {
                  xs: "65vh",
                  sm: "70vh",
                  md: "70vh",
                  lg: "65vh",
                  xl: "65vh",
                },
              }}
            >
              <LazyImage
                src={item.url}
                alt={item.h2}
                height={{xs:"45%", lg:"100%"}} 
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
                  width: {xs:"100%",lg:"70%"},
                  height: {xs:"45vh",lg:"100%"},
                  margin: "auto",
                  backgroundColor: "rgba(255, 253, 253, 0.88)",
                  border:"none",
                  borderRight:{xs:"none",lg:"7px solid rgba(23, 184, 184, 1)"},
                  borderBottom: {xs:"7px solid rgba(23, 184, 184, 1)", lg:"none"}, // 
                  borderLeft: {xs:"30px", lg:"none"}, // 
                  borderRadius: {xs:"0 0 30px 30px",lg:"0 30px 30px 0"},
                  color: "#F5FDF8",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >    <Box
              sx={{
                mt: {xs:2,lg:6},
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
                    bgcolor: 'primary.main',
                    color: 'white',
                    fontWeight: 600,
                    margin:"auto",
                    px: 4,
                    py: 1.8,
                    fontSize: '1rem',
                    alignSelf: 'flex-start',
                    borderRadius: 2,
                    '&:hover': {
                      bgcolor: 'primary.dark',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 20px rgba(23, 184, 184, 0.35)',
                    },
                    transition: 'all 0.3s ease',
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
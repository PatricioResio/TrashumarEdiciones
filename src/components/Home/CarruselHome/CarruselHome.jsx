import { Box, Button, Container, Typography } from "@mui/material";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "../FilaPerfiles/FilaPerfiles.css";
import "swiper/css/pagination";
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
    () =>
      homeArrays.map((item) =>
        buildWidthSrcSet(item.responsiveSrcs),
      ),
    [],
  );

  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        minWidth: "100%",
        height: {
          xs: "90vh",
          sm: "60vh",
          md: "80vh",
          lg: "100vh",
          xl: "100vh",
        },
        borderRadius: "0",
        mb: "20px",
      }}
    >
      <Swiper
        pagination={true}
        modules={[Autoplay, Pagination]}
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
                margin: "auto",
                height: {
                  xs: "90vh",
                  sm: "60vh",
                  md: "80vh",
                  lg: "90vh",
                  xl: "90vh",
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
                  width: {
                    xs: "90%",
                    sm: "94%",
                    md: "95%",
                    lg: "85%",
                    xl: "85%",
                  },
                  height: {
                    xs: "75vh",
                    sm: "50vh",
                    md: "70vh",
                    lg: "70vh"
                  },
                  position: "absolute",
                  bottom: 0,
                  top: 0,
                  left: 0,
                  right: 0,
                  margin: "auto",
                  border: "1px solid black",
                  borderRadius: "50px",
                  backgroundColor: "rgba(255, 253, 253, 0.88)",
                  borderColor: "  rgba(13, 14, 14, 0.7)",
                  backdropFilter: "blur(5px)",
                  color: "#F5FDF8",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h1"
                  component="h2"
                  color={"#121212"}
                  align={"center"}
                  sx={{
                    m: "auto",
                  }}
                  key={item.h2}
                >
                  {item.h2}
                </Typography>
                <Typography
                  key={item.textP}
                  color={"#121212"}
                  variant="h4"
                  align={"center"}
                  sx={{
                    my: "auto",
                    maxWidth: {sm:"80%", lg:"65%"},
                  }}
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
                    bgcolor:"rgba(255, 255, 255, 0.876)",
                    borderColor: "#022932",
                    border:"2px solid",

    "&:hover": {
      outline: "none",
      bgcolor: "rgba(255, 255, 255, 1)",
    },

                  }}
                >
                  {item.buttonText}
                </Button>
              </Container>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default CarruselHome;

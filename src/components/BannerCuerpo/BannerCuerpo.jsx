import { Box } from "@mui/material";
import { IMG_BRAND } from "../../constants/constants";
import LazyImage from "../LazyImage/LazyImage";
import "./BannerCuerpo.css";
import { isImageCached } from "../../utils/imageCache";
import { useState } from "react";
import { useImageLoader } from "../../hooks/useImageLoader";
const BannerCuerpo = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Box className="banner-container">
      <LazyImage
        src={IMG_BRAND}
        alt="imagen de logotipo de olas"
        width={{xs:"100%",lg:"60vw"}}
        height="38vh"
        priority={true}
        onLoaded={() => setLoaded(true)} // ← recibe el callback
      />
      <Box className={`banner-text-container ${loaded ? "visible" : ""}`}>
        <Box  className="banner-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum mattis tellus eget ornare. 
          Nunc ac tellus sed erat eleifend interdum ut eget sem. Phasellus sagittis gravida lacus vitae pretium. 
          Maecenas sagittis odio porttitor, posuere eros semper, lobortis risus. Donec semper scelerisque elit, 
          non vehicula dui sagittis eu. Sed molestie odio nisl, mollis molestie nulla pretium at.
        </Box>
      </Box>
    </Box>
  );
};
export default BannerCuerpo;
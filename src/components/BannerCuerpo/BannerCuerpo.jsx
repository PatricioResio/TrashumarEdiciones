import { Box } from "@mui/material";
import { IMG_BRAND } from "../../constants/constants";
import LazyImage from "../LazyImage/LazyImage";
import "./BannerCuerpo.css";
const BannerCuerpo = () => {
  return (
    <Box className="banner-container">
      <LazyImage
        className="banner-img"
        src={IMG_BRAND}
        alt="imagen de logotipo de olas"
        width="60vw"
        loading="lazy"
        decoding="async"
      />
      <Box component="div" className="banner-text-container">
        <Box component="body" class="banner-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</Box>
      </Box>
    </Box>
  );
};

export default BannerCuerpo;
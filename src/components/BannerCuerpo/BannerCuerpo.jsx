import { IMG_BRAND } from "../../constants/constants";
import LazyImage from "../LazyImage/LazyImage";
import "./BannerCuerpo.css";
const BannerCuerpo = () => {
  return (
    <div className="banner-container">
      <LazyImage
        className="banner-img"
        src={IMG_BRAND}
        alt="imagen de logotipo de olas"
        width="100%"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default BannerCuerpo;

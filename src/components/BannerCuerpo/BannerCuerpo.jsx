import { IMG_BRAND } from "../../constants/constants";
import "./BannerCuerpo.css";
const BannerCuerpo = () => {
  return (
    <div className="banner-container">
      <img
        className="banner-img"
        src={IMG_BRAND}
        alt="imagen de logotipo de olas"
      />
    </div>
  );
};

export default BannerCuerpo;

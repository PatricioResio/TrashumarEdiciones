import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { IMG_BRAND } from "../../constants/constants";
const Brand = () => {
  return (
    <Typography
      component={Link}
      flexWrap="wrap"
      to="/"
      sx={{
        display: "flex",
        height: "100px",
        maxWidth: "100vw",
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
        backgroundImage: `url(${IMG_BRAND})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    ></Typography>
  );
};

export default Brand;

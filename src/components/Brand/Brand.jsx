import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import banner1 from "../../assets/banner1.png";

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
        backgroundImage: `url(${banner1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    ></Typography>
  );
};

export default Brand;

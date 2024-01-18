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
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
      }}
    >
      <img
        src={banner1}
        alt="Imagen banner ilustrativa con el logo Trashumar Ediciones"
      />
    </Typography>
  );
};

export default Brand;

import { Typography } from "@mui/material";
import { IMG_BRAND } from "../../constants/constants";
import { Link } from "react-router-dom";
const imgURL = IMG_BRAND;

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
        src={imgURL}
        alt="Imagen banner ilustrativa con el logo Trashumar Ediciones"
      />
    </Typography>
  );
};

export default Brand;

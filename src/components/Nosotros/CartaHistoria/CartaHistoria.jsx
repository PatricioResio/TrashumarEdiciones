import { Button, Card, CardActions, CardMedia } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import "./CartaHistoria.css";
import LazyImage from "../../LazyImage/LazyImage";

const CartaHistoria = ({
  url,
  id,
  posicion,
  handleChangeHistoria,
  handlerPopUp,
}) => {
  const handleClickHistoria = () => {
    handleChangeHistoria(posicion);
  };

  return (
      <Card
        className="carta-historia"
        sx={{
          height: { xs: "50vh", md: "30rem" },
          width: { xs: "500px", sm: "200px", md: "280px" },
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardActions
          onClick={handlerPopUp}
          sx={{
            p: "0", 
          }}
        >
          <Button onClick={handleClickHistoria} sx={{ m: "0", p: "0" }}>
            <CardMedia     sx={{
                height: { xs: "50vh", md: "80%" },
                width: { xs: "500px", sm: "230px", md: "280px" },
                m: "0",
                p: "0",
                overflow:"hidden",
                borderRadius: "20px",
              }}>
              <LazyImage
              component="img"
          
              src={url || "https://placehold.co/900x1200?text=Historia"}
              alt={`Historia ${id}`}
              loading="lazy"
              decoding="async"
              />


            </CardMedia>
          </Button>
        </CardActions>
      </Card>
  );
};

export default CartaHistoria;

import { Button, Card, CardActions, CardMedia } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import "./CartaHistoria.css";
import LazyImage from "../../LazyImage/LazyImage";

const CartaHistoria = ({ url, id, posicion, handleChangeHistoria, handlerPopUp }) => {
  const handleClickHistoria = () => {
    handleChangeHistoria(posicion);
  };

  return (
    <Card
      className="carta-historia"
      sx={{
        height: { xs: "50vh"},
        width: { xs: "280px", sm: "280px", md: "280px" }, 
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        borderRadius: "20px",
      }}
    >
      <CardActions onClick={handlerPopUp} sx={{ p: 0, height: "100%" }}>
        <Button onClick={handleClickHistoria} sx={{ m: 0, p: 0, width: "100%", height: "100%", overflow: "hidden", borderRadius: "20px", }}>
            <LazyImage
              src={url || "https://placehold.co/900x1200?text=Historia"}
              alt={`Historia ${id}`}
              imgHeight={500}	
              imgWidth={280}
              loading="lazy"
              decoding="async"
            />
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartaHistoria;

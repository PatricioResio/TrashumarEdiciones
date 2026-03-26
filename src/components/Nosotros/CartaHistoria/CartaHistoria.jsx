import { Button, Card, CardActions, CardMedia } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import "./CartaHistoria.css";

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
          height: { xs: "58vh", md: "37.5rem" },
          width: { xs: "63vw", sm: "200px", md: "280px" },
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
            <CardMedia
              component="img"
              sx={{
                height: { xs: "58vh", md: "37.5rem" },
                width: { xs: "63vw", sm: "230px", md: "280px" },
                m: "0",
                p: "0",
                borderRadius: "20px",
              }}
              src={url || "https://placehold.co/900x1200?text=Historia"}
              alt={`Historia ${id}`}
              loading="lazy"
              decoding="async"
            ></CardMedia>
          </Button>
        </CardActions>
      </Card>
  );
};

export default CartaHistoria;

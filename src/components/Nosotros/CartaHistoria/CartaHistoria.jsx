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
    <Fade triggerOnce delay={1100}>
      <Card
        className="carta-historia"
        sx={{
          borderRadius: "20px",
          height: { xs: "58vh", md: "37.5rem" },
          width: { xs: "63vw", sm: "200px", md: "280px" },
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardActions
          sx={{
            p: "0", // Duración y suavidad del efecto
          }}
        >
          <Button onClick={handleClickHistoria} sx={{ m: "0", p: "0" }}>
            <CardMedia
              sx={{
                height: { xs: "58vh", md: "37.5rem" },
                width: { xs: "63vw", sm: "230px", md: "280px" },
                m: "0",
                p: "0",
              }}
              image={url}
              src={!url ? "" : url}
              onClick={handlerPopUp}
            ></CardMedia>
          </Button>
        </CardActions>
      </Card>
    </Fade>
  );
};

export default CartaHistoria;

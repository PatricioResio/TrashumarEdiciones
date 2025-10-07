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
  const handlePopUp = () => {
    handlerPopUp();
  };

  return (
    <Fade triggerOnce delay={1100}>
      <Card
        className="carta-historia"
        sx={{
          height: { xs: "58vh", md: "600px" },
          width: { xs: "63vw", sm: "200px", md: "280px" },
        }}
      >
        <CardActions
          sx={{
            p: "0",
            transition: "transform 0.3s ease-in-out", // Duración y suavidad del efecto
          }}
        >
          <Button onClick={handleClickHistoria} sx={{ m: "0", p: "0" }}>
            <CardMedia
              sx={{
                height: { xs: "58vh", md: "600px" },
                width: { xs: "63vw", sm: "230px", md: "280px" },
                m: "0",
                p: "0",
              }}
              image={url}
              src={!url ? "" : url}
              onClick={handlePopUp}
            ></CardMedia>
          </Button>
        </CardActions>
      </Card>
    </Fade>
  );
};

export default CartaHistoria;

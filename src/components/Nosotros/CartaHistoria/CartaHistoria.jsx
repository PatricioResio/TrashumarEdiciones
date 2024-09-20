import { Button, Card, CardActions, CardMedia } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import "./CartaHistoria.css";

const CartaHistoria = ({ url, id, posicion, handleChangeHistoria }) => {
  const handleClickHistoria = () => {
    handleChangeHistoria(posicion);
  };

  return (
    <Fade triggerOnce delay={1100}>
      <Card className="carta-historia">
        <CardActions sx={{ p: "0" }}>
          <Button onClick={handleClickHistoria} sx={{ m: "0", p: "0" }}>
            <CardMedia
              sx={{ height: "600px", width: "280px", m: "0", p: "0" }}
              image={url}
              src={!url ? "" : url}
            ></CardMedia>
          </Button>
        </CardActions>
      </Card>
    </Fade>
  );
};

export default CartaHistoria;

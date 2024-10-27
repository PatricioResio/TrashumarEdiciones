import { Button, Card, CardActions, CardMedia } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import "./CartaHistoria.css";

const CartaHistoria = ({ url, id, posicion, handleChangeHistoria }) => {
  const handleClickHistoria = () => {
    handleChangeHistoria(posicion);
  };

  return (
    <Fade triggerOnce delay={1100}>
      <Card
        className="carta-historia"
        sx={{
          height: { xs: "400px", md: "600px" },
          width: { xs: "160px", sm: "200px", md: "280px" },
        }}
      >
        <CardActions
          sx={{
            p: "0",
            transition: "transform 0.3s ease-in-out", // Duración y suavidad del efecto

            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        >
          <Button onClick={handleClickHistoria} sx={{ m: "0", p: "0" }}>
            <CardMedia
              sx={{
                height: { xs: "400px", md: "600px" },
                width: {
                  xs: "180px",
                  sm: "230px",
                  md: "280px",
                },
                m: "0",
                p: "0",
              }}
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

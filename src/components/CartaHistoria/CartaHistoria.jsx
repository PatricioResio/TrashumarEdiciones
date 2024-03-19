import { Button, Card, CardActions, CardMedia } from "@mui/material";

const CartaHistoria = ({ url, id, posicion, handleChangeHistoria }) => {
  const handleClickHistoria = () => {
    handleChangeHistoria(posicion);
  };

  return (
    <Card
      sx={{
        height: "600px",
        width: "280px",
        m: "auto 20px",
        p: "0",
        border: "3px solid #3C9990",
        borderRadius: "20px",
        backgroundColor: "#A6ECE0",
      }}
    >
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
  );
};

export default CartaHistoria;

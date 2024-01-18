import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const CartaLibros = ({ libro }) => {
  return (
    <Card
      sx={{
        border: "3px solid #3C9990",
        borderRadius: "20px",
        backgroundColor: "#A6ECE0",
        width: "230px",
        height: "580px",
      }}
    >
      <CardMedia
        sx={{ width: "230px", height: "40vh" }}
        image={libro.imagen}
        src={!libro ? "" : libro.imagen}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="h4">
          {libro.titulo}
        </Typography>
        <Typography variant="body" component="p" color="text.secondary">
          {libro.autor}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/libro/${libro.id}`}>
          Ver mas detalles
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartaLibros;

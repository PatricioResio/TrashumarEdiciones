import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import LazyImage from "../LazyImage/LazyImage";

const CartaLibros = ({ libro }) => {
  return (
    <Card
      sx={{
        border: "3px solid #3C9990",
        borderRadius: "20px",
        backgroundColor: "#A6ECE0",
        width: "350px",
        height: "700px",
      }}
    >
      <LazyImage
        component="img"
        sx={{ width: "350px", height: "500px" }}
        image={libro?.imagen || "https://placehold.co/700x1000?text=Libro"}
        src={libro?.imagen || "https://placehold.co/700x1000?text=Libro"}
        alt={libro?.titulo || "Libro"}
        loading="lazy"
        decoding="async"
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
        <Button  component={Link} to={`/libro/${libro.id}`}>
          Ver mas detalles
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartaLibros;

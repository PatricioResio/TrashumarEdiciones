import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function CartaProyectos({ proyecto }) {
  return (
    <Card
      sx={{
        width: "250px",
        heigth: "400px",
        border: "3px solid #3C9990",
        borderRadius: "20px",
        backgroundColor: "#A6ECE0",
      }}
    >
      <CardMedia
        sx={{ height: "270px" }}
        image={proyecto.img}
        src={!proyecto ? "" : proyecto.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h5">
          {proyecto.titulo}
        </Typography>
        <Typography variant="body" color="text.secondary">
          {proyecto.autor}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/proyecto/${proyecto.id}`}>
          Ver mas detalles
        </Button>
      </CardActions>
    </Card>
  );
}

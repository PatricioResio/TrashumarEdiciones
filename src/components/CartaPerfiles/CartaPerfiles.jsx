import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function CartaPerfiles({ perfil }) {
  return (
    <Card
      sx={{
        width: "280px",
        height: "440px",
        border: "3px solid #3C9990",
        borderRadius: "20px",
        backgroundColor: "#A6ECE0",
      }}
    >
      <CardMedia
        sx={{ height: "290px" }}
        image={perfil.avatar}
        src={!perfil ? "" : perfil.avatar}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h5">
          {perfil.nombrePublico}
        </Typography>
        <Typography variant="body" color="text.secondary">
          {perfil.oficio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/perfil/${perfil.idPerfil}`}>
          Ver perfil
        </Button>
      </CardActions>
    </Card>
  );
}

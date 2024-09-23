import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export default function CartaProyectos({ proyecto }) {
  return (
    <Fade triggerOnce delay={1200}>
      <Card
        sx={{
          width: "20rem",
          height: "43rem",
          border: "3px solid #3C9990",
          borderRadius: "20px",
          backgroundColor: "#A6ECE0",
          position: "relative",
          margin: "5.5rem auto",

          transition: "transform 0.3s ease-in-out", // Duración y suavidad del efecto

          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        <CardMedia
          sx={{ padding: "40px", height: "30rem" }}
          image={proyecto.img}
          src={!proyecto ? "" : proyecto.img}
        />
        <CardContent sx={{ height: "300px" }}>
          <Typography gutterBottom variant="h5" component="h5">
            {proyecto.titulo}
          </Typography>
          <Typography variant="body" color="text.secondary">
            {proyecto.autor}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{ position: "absolute", bottom: "0" }}
            component={Link}
            to={`/proyecto/${proyecto.idProyecto}`}
          >
            Ver mas detalles
          </Button>
        </CardActions>
      </Card>
    </Fade>
  );
}

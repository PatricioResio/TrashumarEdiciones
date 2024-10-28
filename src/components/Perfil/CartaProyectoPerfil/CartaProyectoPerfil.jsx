import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export default function CartaProyectoPerfil({ proyecto }) {
  return (
    <Fade triggerOnce delay={1100}>
      <Card
        sx={{
          width: { xs: "180px", md: "280px" },
          height: { xs: "420px", md: "500px" },
          border: "3px solid #3C9990",
          borderRadius: "20px",
          backgroundColor: "#A6ECE0",
          position: "relative ",
          ml: "50px",
        }}
      >
        <CardMedia
          sx={{ padding: "40px", height: "100%" }}
          image={!proyecto ? "" : proyecto.img}
          src={!proyecto ? "" : proyecto.img}
        />
        <CardContent sx={{ height: "300px" }}>
          <Typography gutterBottom variant="h5" component="h5">
            {!proyecto ? "no se encontro proyecto" : proyecto.titulo}
          </Typography>
          <Typography variant="body" color="text.secondary">
            {!proyecto ? "no se encontro proyecto" : proyecto.autor}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              bottom: "0",
              m: "auto 28%",
              height: "2rem",
              opacity: "0.9",
            }}
            component={Link}
            to={`/proyecto/${!proyecto ? "" : proyecto.idProyecto}`}
          >
            Ver más
          </Button>
        </CardActions>
      </Card>
    </Fade>
  );
}

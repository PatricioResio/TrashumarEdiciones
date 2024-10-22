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
          width: "22rem",
          height: "43rem",
          border: "0.5px solid #3C9990",
          borderRadius: "3px",
          backgroundColor: "#A6ECE0",
          position: "relative",
          margin: "5.5rem auto",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        <CardMedia
          sx={{ padding: "40px", height: "100%" }}
          image={proyecto.img}
          src={!proyecto ? "" : proyecto.img}
        />
        <CardActions>
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              bottom: "0",
              m: "auto 34%",
              height: "2rem",
              opacity: "0.9",
            }}
            component={Link}
            to={`/proyecto/${proyecto.idProyecto}`}
          >
            Ver más
          </Button>
        </CardActions>
      </Card>
    </Fade>
  );
}

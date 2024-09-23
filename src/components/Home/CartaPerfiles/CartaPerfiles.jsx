import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import "./CartaPerfiles.css";
import { Fade, Zoom } from "react-awesome-reveal";
import { autoPlay } from "react-swipeable-views-utils";

export default function CartaPerfiles({ perfil }) {
  const oficiosPerfil = !perfil.oficios ? [] : [...perfil.oficios.slice(0, 2)];

  return (
    <Fade triggerOnce delay={1200}>
      <Card
        className="carta-perfiles"
        sx={{
          borderRadius: "20px",
          m: "8rem",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        <CardMedia
          sx={{ height: "290px" }}
          image={perfil.avatar}
          src={!perfil.avatar ? "" : perfil.avatar}
        />
        <CardContent className="carta-perfiles-contenido">
          <Typography gutterBottom variant="h4" component="h4">
            {perfil.nombrePublico}
          </Typography>

          <Container sx={{ gap: "0px" }}>
            {oficiosPerfil.length === 0 || !oficiosPerfil ? (
              <Typography variant="h6" component="h6" color="text.secondary">
                No hay ningun oficio registrado todavía
              </Typography>
            ) : (
              oficiosPerfil.map((oficio) => (
                <Typography
                  key={oficio.nombre}
                  variant="h6"
                  component="h6"
                  color="text.secondary"
                  sx={{ margin: "0px" }}
                >
                  {oficio.nombre}
                </Typography>
              ))
            )}
          </Container>
          <CardActions>
            <Button
              className="carta-perfiles-actions"
              component={Link}
              to={`/perfil/${perfil.idPerfil}`}
            >
              Ver perfil
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Fade>
  );
}

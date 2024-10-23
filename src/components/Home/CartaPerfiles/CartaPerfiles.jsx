import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import "./CartaPerfiles.css";
import { Fade } from "react-awesome-reveal";

export default function CartaPerfiles({ perfil }) {
  const oficiosPerfil = !perfil.oficios ? [] : [...perfil.oficios.slice(0, 2)];

  return (
    <Fade triggerOnce delay={1200}>
      <Card
        className="carta-perfiles"
        sx={{
          width: { xs: "12rem", md: "15rem" },
          height: { xs: "22rem", md: "27rem" },
          borderRadius: "5px",
          m: "8rem",
          p: 0,
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        <CardMedia
          sx={{ height: "55%" }}
          image={perfil.avatar}
          src={!perfil.avatar ? "" : perfil.avatar}
        />
        <CardContent className="carta-perfiles-contenido">
          <Typography
            gutterBottom
            component="h5"
            variant="h5"
            fontWeight="bold"
          >
            {perfil.nombrePublico}
          </Typography>

          <Container sx={{ gap: "0px" }}>
            {oficiosPerfil.length === 0 || !oficiosPerfil ? (
              <Typography color="text.secondary" variant="body">
                No hay ningun oficio registrado todavía
              </Typography>
            ) : (
              oficiosPerfil.map((oficio) => (
                <Typography
                  variant="autor"
                  color="text.secondary"
                  component="h6"
                  key={oficio.nombre}
                  sx={{ margin: "auto", width: "100%" }}
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

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

export default function CartaPerfiles({ perfil }) {
  const oficiosPerfil = !perfil.oficios ? [] : [...perfil.oficios.slice(0, 2)];

  return !perfil ? (
    <Card
      sx={{
        width: "320px",
        height: "480px",
        border: "3px solid #3C9990",
        borderRadius: "20px",
        backgroundColor: "#A6ECE0",
        position: "relative",
      }}
    >
      <CardMedia
        sx={{ height: "290px" }}
        image={perfil.avatar}
        src={!perfil.avatar ? "" : perfil.avatar}
      />
      <CardContent
        sx={{
          padding: "0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography gutterBottom variant="h4" component="h4">
          No se encontro usuario
        </Typography>

        <Container sx={{ gap: "0px" }}>
          <Typography
            variant="h6"
            component="h6"
            color="text.secondary"
            sx={{ margin: "0px" }}
          >
            no se encontro oficio
          </Typography>
        </Container>
        <CardActions>
          <Button
            sx={{
              position: "absolute",
              bottom: "0",
              left: "0",
            }}
            component={Link}
          >
            Sin perfil
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  ) : (
    <Card
      sx={{
        width: "320px",
        height: "480px",
        border: "3px solid #3C9990",
        borderRadius: "20px",
        backgroundColor: "#A6ECE0",
        position: "relative",
      }}
    >
      <CardMedia
        sx={{ height: "290px" }}
        image={perfil.avatar}
        src={!perfil.avatar ? "" : perfil.avatar}
      />
      <CardContent
        sx={{
          padding: "0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
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
                key={oficio}
                variant="h6"
                component="h6"
                color="text.secondary"
                sx={{ margin: "0px" }}
              >
                {oficio}
              </Typography>
            ))
          )}
        </Container>
        <CardActions>
          <Button
            sx={{
              position: "absolute",
              bottom: "0",
              left: "0",
            }}
            component={Link}
            to={`/perfil/${perfil.idPerfil}`}
          >
            Ver perfil
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

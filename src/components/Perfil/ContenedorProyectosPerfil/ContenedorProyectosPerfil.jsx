// src/components/Perfil/ContenedorProyectosPerfil/ContenedorProyectosPerfil.jsx
import FilaProyectosPerfil from "../FilaProyectosPerfil/FilaProyectosPerfil";
import { CircularProgress, Container } from "@mui/material";
import useProyectos from "../../../hooks/useProyectos";
import "./ContenedorProyectosPerfil.css";

const ContenedorProyectosPerfil = ({ nombrePublico }) => {
  const { proyectos, loadingProyectos } = useProyectos();
  const proyectosUser = nombrePublico
    ? proyectos.filter((proyecto) => proyecto.autor === nombrePublico)
    : [];

  return (
    <Container
      className="contenedor-fila-perfil"
      maxWidth="lg"
      sx={{
        margin: { xs: "0", md: "auto" },
        width: { xs: "85vw", md: "100%" },
        height: "30rem",
        minHeight: "30rem",
      }}
    >
      {loadingProyectos ? (
        <CircularProgress />
      ) : (
        <FilaProyectosPerfil proyectosUser={proyectosUser} />
      )}
    </Container>
  );
};

export default ContenedorProyectosPerfil;
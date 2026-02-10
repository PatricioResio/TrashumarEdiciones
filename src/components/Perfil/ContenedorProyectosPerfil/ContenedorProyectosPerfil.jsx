import FilaProyectosPerfil from "../FilaProyectosPerfil/FilaProyectosPerfil";
import { CircularProgress, Container } from "@mui/material";
import useProyectos from "../../../hooks/useProyectos";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import "./ContenedorProyectosPerfil.css";

const ContenedorProyectosPerfil = () => {
  const { proyectos, loading } = useProyectos();
  const { currentUser } = useContext(AuthContext);
  const proyectosUser = proyectos.filter(
    (proyecto) => proyecto.autor === currentUser.nombrePublico,
  );

  return (
    <Container
      className="contenedor-fila-perfil"
      maxWidth="lg"
      sx={{
        margin: { xs: "0", md: "auto" },
        width: { xs: "80vw", md: "100%" },
        height: "40rem",
        minHeight: "40rem",
      }}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <FilaProyectosPerfil proyectosUser={proyectosUser} />
      )}
    </Container>
  );
};

export default ContenedorProyectosPerfil;

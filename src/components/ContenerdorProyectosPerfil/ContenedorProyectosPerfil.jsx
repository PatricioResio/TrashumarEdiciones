import FilaProyectosPerfil from "../FilaProyectosPerfil/FilaProyectosPerfil";
import { CircularProgress, Container } from "@mui/material";
import useProyectos from "../../hooks/useProyectos";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const ContenedorProyectosPerfil = () => {
  const { proyectos, loading } = useProyectos();
  const { currentUser } = useContext(AuthContext);
  const proyectosUser = proyectos.filter(
    (proyecto) => proyecto.autor === currentUser.nombrePublico
  );

  return (
    <Container
      maxWidth="2xl"
      sx={{
        width: "500px",
        height: "53rem",
        mt: "200px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#6BBCA8",
        border: "2px solid",
        borderRadius: "15px",
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

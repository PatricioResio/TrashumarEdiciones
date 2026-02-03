import FilaColaboraciones from "../FilaColaboraciones/FilaColaboraciones";
import { CircularProgress, Container } from "@mui/material";
import "../ContenedorProyectosPerfil/ContenedorProyectosPerfil.css";
import useFilterColaboraciones from "../../../hooks/useFilterColaboraciones";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";
import useProyectos from "../../../hooks/useProyectos";

const ContenedorColaboraciones = () => {
  const { currentUser } = useContext(AuthContext);
  const { proyectos, loadingProyectos } = useProyectos();
  const colaboraciones = proyectos.filter((proyecto) =>
    !proyecto.colaboradores
      ? []
      : proyecto.colaboradores.includes(currentUser.nombrePublico),
  );
  return (
    <Container
      maxWidth="md"
      className="contenedor-fila-perfil"
      sx={{
        margin: { xs: "0", md: "auto" },
        width: { xs: "80vw", md: "100%" },
        height: "40rem",
        minHeight: "40rem",
      }}
    >
      {loadingProyectos ? (
        <CircularProgress />
      ) : (
        <FilaColaboraciones colaboraciones={colaboraciones} />
      )}
    </Container>
  );
};

export default ContenedorColaboraciones;

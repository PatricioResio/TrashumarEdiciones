// src/components/Perfil/ContenedorColaboraciones/ContenedorColaboraciones.jsx
import FilaColaboraciones from "../FilaColaboraciones/FilaColaboraciones";
import { CircularProgress, Container } from "@mui/material";
import "../ContenedorProyectosPerfil/ContenedorProyectosPerfil.css";
import useProyectos from "../../../hooks/useProyectos";

const ContenedorColaboraciones = ({ nombrePublico }) => {
  const { proyectos, loadingProyectos } = useProyectos();
  const colaboraciones = nombrePublico
    ? proyectos.filter((proyecto) =>
        proyecto.colaboradores
          ? proyecto.colaboradores.includes(nombrePublico)
          : false,
      )
    : [];
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
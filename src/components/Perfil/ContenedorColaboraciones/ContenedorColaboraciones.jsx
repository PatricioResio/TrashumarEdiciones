import FilaColaboraciones from "../FilaColaboraciones/FilaColaboraciones";
import { CircularProgress, Container } from "@mui/material";
import useProyectos from "../../../hooks/useProyectos";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import "../ContenedorProyectosPerfil/ContenedorProyectosPerfil.css";

const ContenedorColaboraciones = () => {
  const { currentUser } = useContext(AuthContext);
  const { proyectos, loadingProyectos } = useProyectos();
  const nombre = currentUser.nombre;

  const colaboracionesUser = proyectos.filter((proyecto) =>
    !proyecto.colaboradores ? [] : proyecto.colaboradores.includes(nombre)
  );

  return (
    <Container maxWidth="md" className="contenedor-fila-perfil">
      {loadingProyectos ? (
        <CircularProgress />
      ) : (
        <FilaColaboraciones colaboraciones={colaboracionesUser} />
      )}
    </Container>
  );
};

export default ContenedorColaboraciones;

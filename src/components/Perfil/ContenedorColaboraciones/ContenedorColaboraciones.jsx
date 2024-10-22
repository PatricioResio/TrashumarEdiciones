import FilaColaboraciones from "../FilaColaboraciones/FilaColaboraciones";
import { CircularProgress, Container } from "@mui/material";
import "../ContenedorProyectosPerfil/ContenedorProyectosPerfil.css";
import useFilterColaboraciones from "../../../hooks/useFilterColaboraciones";

const ContenedorColaboraciones = () => {
  const { colaboraciones, loadingColaboraciones } = useFilterColaboraciones();

  return (
    <Container maxWidth="md" className="contenedor-fila-perfil">
      {loadingColaboraciones ? (
        <CircularProgress />
      ) : (
        <FilaColaboraciones colaboraciones={colaboraciones} />
      )}
    </Container>
  );
};

export default ContenedorColaboraciones;

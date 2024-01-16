import FilaProyectos from "../FilaProyectos/FilaProyectos";
import { CircularProgress, Container } from "@mui/material";
import useLibros from "../../hooks/useLibros";
const ContenedorCartas = () => {
  const { proyectos, loading } = useLibros();

  return (
    <Container
      maxWidth="2xl"
      sx={{
        display: "flex",
        margin: "15px",
        justifyContent: "center",
      }}
    >
      {loading ? <CircularProgress /> : <FilaProyectos proyectos={proyectos} />}
    </Container>
  );
};

export default ContenedorCartas;

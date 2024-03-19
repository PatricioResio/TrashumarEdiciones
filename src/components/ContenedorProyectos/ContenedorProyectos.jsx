import FilaProyectos from "../FilaProyectos/FilaProyectos";
import { CircularProgress, Container } from "@mui/material";
import useProyectos from "../../hooks/useProyectos";
const ContenedorCartas = () => {
  const { proyectos, loading } = useProyectos();

  return (
    <Container
      maxWidth="2xl"
      sx={{
        display: "flex",
        margin: "15px",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
      }}
    >
      {loading ? <CircularProgress /> : <FilaProyectos proyectos={proyectos} />}
    </Container>
  );
};

export default ContenedorCartas;

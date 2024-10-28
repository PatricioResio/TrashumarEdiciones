import FilaProyectos from "../FilaProyectos/FilaProyectos";
import { CircularProgress, Container, Typography } from "@mui/material";
import useProyectos from "../../../hooks/useProyectos";
const ContenedorCartas = () => {
  const { proyectos, loading } = useProyectos();

  return (
    <Container
      maxWidth="2xl"
      sx={{
        margin: "auto",
        justifyContent: "center",
        width: "98%",
        padding: 6,
        alignItems: "center",
      }}
    >
      {loading ? <CircularProgress /> : <FilaProyectos proyectos={proyectos} />}
    </Container>
  );
};

export default ContenedorCartas;

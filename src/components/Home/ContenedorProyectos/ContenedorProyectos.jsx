import FilaProyectos from "../FilaProyectos/FilaProyectos";
import { CircularProgress, Container, Typography } from "@mui/material";
import useProyectos from "../../../hooks/useProyectos";
const ContenedorCartas = () => {
  const { proyectos, loading } = useProyectos();

  return (
    <Container
      maxWidth="2xl"
      sx={{
        display: "flex",
        margin: "auto",
        justifyContent: "center",
        width: "98%",
        border: "2px solid ",
        borderRadius: "20px",
        alignItems: "center",
        backgroundColor: "#BDFFF9",
      }}
    >
      {loading ? <CircularProgress /> : <FilaProyectos proyectos={proyectos} />}
    </Container>
  );
};

export default ContenedorCartas;

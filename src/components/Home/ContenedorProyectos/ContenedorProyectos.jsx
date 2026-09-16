import FilaProyectos from "../FilaProyectos/FilaProyectos";
import { CircularProgress, Container } from "@mui/material";
import { useContext } from "react";
import { ProyectsContext } from "../../../context/ProyectsContext";
const ContenedorCartas = () => {
  const { proyectos, loadingProyectos } = useContext(ProyectsContext);

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
      {loadingProyectos ? <CircularProgress /> : <FilaProyectos proyectos={proyectos} />}
    </Container>
  );
};

export default ContenedorCartas;
import { useState, useEffect } from "react";
import { getProyectos } from "../../api/api";
import FilaProyectos from "../FilaProyectos/FilaProyectos";
import { CircularProgress, Container } from "@mui/material";

const ContenedorCartas = () => {
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProyectos = async () => {
      const proyectos = await getProyectos();
      setProyectos(proyectos);
      setLoading(false);
    };
    fetchProyectos();
  }, []);

  return (
    <Container
      maxWidth="2xl"
      sx={{
        display: "flex",
        margin: "10px",
      }}
    >
      {loading ? <CircularProgress /> : <FilaProyectos proyectos={proyectos} />}
    </Container>
  );
};

export default ContenedorCartas;

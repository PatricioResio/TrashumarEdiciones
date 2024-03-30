import FilaColaboraciones from "../FilaColaboraciones/FilaColaboraciones";
import { CircularProgress, Container } from "@mui/material";
import useProyectos from "../../hooks/useProyectos";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const ContenedorColaboraciones = () => {
  const { currentUser } = useContext(AuthContext);
  const { proyectos, loading } = useProyectos();
  const nombre = currentUser.nombre;

  const colaboracionesUser = proyectos.filter((proyecto) =>
    !proyecto.colaboradores ? [] : proyecto.colaboradores.includes(nombre)
  );

  return (
    <Container
      maxWidth="2xl"
      sx={{
        width: "500px",
        height: "53rem",
        mt: "200px",
        ml: "40px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#6BBCA8",
        border: "2px solid",
        borderRadius: "15px",
      }}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <FilaColaboraciones colaboraciones={colaboracionesUser} />
      )}
    </Container>
  );
};

export default ContenedorColaboraciones;

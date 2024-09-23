import FilaPerfiles from "../FilaPerfiles/FilaPerfiles";
import { CircularProgress, Container, Fade } from "@mui/material";
import usePerfiles from "../../../hooks/usePerfiles";

const ContenedorPerfiles = () => {
  const { perfiles, loading } = usePerfiles();

  return (
    <Container
      maxWidth="2xl"
      sx={{
        margin: "auto",
        justifyContent: "center",
        minHeight: "85vh",
        width: "90%",
        border: "2px solid ",
        borderRadius: "20px",
        alignItems: "center",
        backgroundColor: "#215E61",
      }}
    >
      {loading ? <CircularProgress /> : <FilaPerfiles perfiles={perfiles} />}
    </Container>
  );
};

export default ContenedorPerfiles;

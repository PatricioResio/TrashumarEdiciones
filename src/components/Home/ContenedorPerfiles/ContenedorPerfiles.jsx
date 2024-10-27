import FilaPerfiles from "../FilaPerfiles/FilaPerfiles";
import { CircularProgress, Container, Fade } from "@mui/material";
import usePerfiles from "../../../hooks/usePerfiles";

const ContenedorPerfiles = () => {
  const { perfiles, loading } = usePerfiles();

  return (
    <Container
      maxWidth="2xl"
      sx={{
        display: "flex",
        margin: "auto",
        justifyContent: "center",
        minHeight: "40rem",
        width: "98%",
        alignItems: "center",
      }}
    >
      {loading ? <CircularProgress /> : <FilaPerfiles perfiles={perfiles} />}
    </Container>
  );
};

export default ContenedorPerfiles;

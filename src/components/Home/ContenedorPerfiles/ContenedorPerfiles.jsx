import FilaPerfiles from "../FilaPerfiles/FilaPerfiles";
import { CircularProgress, Container, Fade } from "@mui/material";
import usePerfiles from "../../../hooks/usePerfiles";

const ContenedorPerfiles = () => {
  const { perfiles, loading } = usePerfiles();

  return (
    <Container
      sx={{
        width: "100%",
        margin: "15px",
      }}
    >
      {loading ? <CircularProgress /> : <FilaPerfiles perfiles={perfiles} />}
    </Container>
  );
};

export default ContenedorPerfiles;

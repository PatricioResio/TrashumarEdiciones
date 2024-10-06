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

        width: "98%",
        border: "2px solid ",
        borderRadius: "20px",
        alignItems: "center",
        backgroundColor: "#BDFFF9",
      }}
    >
      {loading ? <CircularProgress /> : <FilaPerfiles perfiles={perfiles} />}
    </Container>
  );
};

export default ContenedorPerfiles;

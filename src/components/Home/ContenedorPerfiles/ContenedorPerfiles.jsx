import FilaPerfiles from "../FilaPerfiles/FilaPerfiles";
import { CircularProgress, Container, Fade } from "@mui/material";
import { PerfilesContext } from "../../../context/PerfilesContext";
import { useContext } from "react";

const ContenedorPerfiles = () => {
  const { perfiles, loadingPerfiles } = useContext(PerfilesContext)

  return (
    <Container
      maxWidth="2xl"
      sx={{
        margin: "auto",
        justifyContent: "center",
        width: "98%",
        alignItems: "center",
      }}
    >
      {loadingPerfiles ? <CircularProgress /> : <FilaPerfiles perfiles={perfiles} />}
    </Container>
  );
};

export default ContenedorPerfiles;

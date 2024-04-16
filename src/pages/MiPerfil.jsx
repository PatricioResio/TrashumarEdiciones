import { useContext } from "react";
import { FormRegistro } from "../components/index";
import { AuthContext } from "../context/AuthContext";
import PerfilRouter from "../components/Perfil/PerfilRouter/PerfilRouter";
import { Fade } from "react-awesome-reveal";
import { CircularProgress, Container, Typography } from "@mui/material";
import FormRegistroRouter from "../components/Perfil/FormRegistroRouter/FormRegistroRouter";

const MiPerfil = () => {
  const { newUser, loading } = useContext(AuthContext);
  return !newUser ? (
    <PerfilRouter />
  ) : (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        minWidth: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        backgroundColor: "#2D4746",
        height: "100vh",
        margin: "40px auto",
      }}
    >
      <FormRegistroRouter></FormRegistroRouter>
    </Container>
  );
};

export default MiPerfil;

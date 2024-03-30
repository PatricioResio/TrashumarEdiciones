import { useContext } from "react";
import { FormRegistro } from "../components/index";
import { AuthContext } from "../context/AuthContext";
import PerfilRouter from "../components/PerfilRouter/PerfilRouter";
import { Fade } from "react-awesome-reveal";
import { CircularProgress, Container } from "@mui/material";

const MiPerfil = () => {
  const { newUser, loading } = useContext(AuthContext);
  return newUser === false ? (
    <PerfilRouter />
  ) : (
    <Container
      sx={{
        minWidth: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Fade delay={200}>
        {loading === true ? <CircularProgress /> : <FormRegistro />}
      </Fade>
    </Container>
  );
};

export default MiPerfil;

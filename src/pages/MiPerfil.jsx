import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import PerfilRouter from "../components/Perfil/PerfilRouter/PerfilRouter";
import FormRegistroRouter from "../components/Perfil/FormRegistroRouter/FormRegistroRouter";
import { Container } from "@mui/material";

const MiPerfil = () => {
  const { newUser } = useContext(AuthContext);
  return !newUser ? (
    <PerfilRouter />
  ) : (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        minWidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#215E61",
        borderRadius: "20px",
        border: "2px solid #3C9990",
        margin: "40px auto",
      }}
    >
      <FormRegistroRouter></FormRegistroRouter>
    </Container>
  );
};

export default MiPerfil;

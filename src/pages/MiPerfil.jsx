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
        borderRadius: "20px",
        backgroundColor: "#BDFFF9",
        margin: "40px auto",
      }}
    >
      <FormRegistroRouter />
    </Container>
  );
};

export default MiPerfil;

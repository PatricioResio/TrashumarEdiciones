import { Button, Typography, Container } from "@mui/material";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";

function LoginForm() {
  const { handleGoogle } = useContext(AuthContext);
  return (
    <Container sx={{ height: "80vh", display: "flex", margin: "10% auto" }}>
      <form>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
            width: "60vw",
            boxSizing: "border-box",
            border: "solid 3px #3C9990",
            borderRadius: "30px",
            margin: "auto",
          }}
        >
          <Typography variant="h3"> Iniciar sesión </Typography>
          <Button
            variant="outlined"
            onClick={handleGoogle}
            sx={{ width: "70%", margin: "auto" }}
          >
            Ingresa con Google{" "}
          </Button>
        </Container>
      </form>
    </Container>
  );
}

export default LoginForm;

import { Button, Typography, Container } from "@mui/material";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";

function LoginForm() {
  const { handleGoogle } = useContext(AuthContext);
  return (
    <Container
      maxWidth="xxl"
      sx={{
        height: "80vh",
        width: "100vw",
        display: "flex",
        margin: "30px auto",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2D4746",
        border: "solid 3px #3C9990",
        borderRadius: "15px",
      }}
    >
      <form>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "30vh",
            width: "36vw",
            boxSizing: "border-box",
            border: "solid 3px #3C9990",
            backgroundColor: "#A9CBC8",
            borderRadius: "30px",
            margin: "auto",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.03)",
            },
          }}
        >
          <Typography sx={{ mt: "20px", color: "#0C2324" }} variant="h2">
            {" "}
            Iniciar sesión{" "}
          </Typography>
          <Button
            variant="outlined"
            onClick={handleGoogle}
            sx={{
              width: "40%",
              margin: "auto",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.04)",
                backgroundColor: "#0C2324",
                color: "#A9CBC8",
                border: "2px solid #0C2324",
              },
            }}
          >
            Ingresa con Google
          </Button>
        </Container>
      </form>
    </Container>
  );
}

export default LoginForm;

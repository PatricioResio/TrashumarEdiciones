import { Button, Typography, Container, Box } from "@mui/material";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";

function LoginForm() {
  const { handleGoogle } = useContext(AuthContext);
  return (
    <Box
      bgcolor="bg.lightBlue"
      sx={{
        height: "80vh",
        width: "90vw",
        display: "flex",
        margin: "30px auto",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "15px",
      }}
    >
      <form>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
            width: "90vw",
            margin: "auto",
          }}
        >
          <Typography sx={{ mt: "auto" }} variant="h2">
            Iniciar sesión{" "}
          </Typography>
          <Button
            variant="outlined"
            onClick={handleGoogle}
            sx={{
              width: { xs: "40%", md: "18rem" },
              margin: "auto",
              color: "#0C2324",
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
        </Box>
      </form>
    </Box>
  );
}

export default LoginForm;

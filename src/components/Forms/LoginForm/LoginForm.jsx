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
          bgcolor="bg.mediumLightBlue"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
            width: "36vw",
            boxSizing: "border-box",
            border: "solid 1px ",
            borderRadius: "15px",
            margin: "auto",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.03)",
            },
          }}
        >
          <Typography sx={{ mt: "auto" }} variant="h3">
            Iniciar sesión{" "}
          </Typography>
          <Button
            variant="outlined"
            onClick={handleGoogle}
            sx={{
              width: "40%",
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

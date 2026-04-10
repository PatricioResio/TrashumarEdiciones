import { Button, Typography, Box, Snackbar, Alert, CircularProgress, IconButton } from "@mui/material";
import { useAuth } from "../../../context/AuthContext";
import { useState } from "react";
import GoogleIcon from '@mui/icons-material/Google';

function LoginForm() {
  const { handleGoogle, authError } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleClick = async (e) => {
    setLoading(true);
    await handleGoogle(e);
    setLoading(false);
  };

  return (
    <Box
      sx={{
        height: {xs: "70vh", md: "60vh"},
        width: {xs: "80vw",sm:"45vw", md: "40vw", lg: "35vw"},
        display: "flex",
        margin: "5rem auto",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "15px",
        background: "linear-gradient(to bottom, #cbfcfcff, #acebe5ff 60%,rgb(143, 224, 220))",
      }}
    >
      <Box
        component="form"
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
          Iniciar sesión
        </Typography>

        <Button
          variant="outlined"
          onClick={handleClick}
          disabled={loading}
          sx={{
            width: { xs: "40%", md: "18rem" },
            margin: "auto",
            color: "#0C2324",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.04)",
              backgroundColor: "#0C2324",
              color: "rgb(255, 255, 255)",
              '&:hover': {
                color: 'rgb(255, 255, 255)',
              },
              border: "2px solid #0C2324",
            },
            "&.Mui-disabled": {
              opacity: 0.6,
            },
          }}
        >
          {loading ? (
            <CircularProgress size={22} sx={{ color: "#0C2324" }} />
          ) : (
            <IconButton
            sx={{
              color: 'inherit',
              marginLeft:"0"

            }}
          >
            <GoogleIcon />
          </IconButton>
          )} Ingresa con Google
        </Button>
      </Box>

      {/* Snackbar de error — se activa cuando authError tiene valor */}
      <Snackbar
        open={!!authError}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="error" variant="filled">
          {authError}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default LoginForm;
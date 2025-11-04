import { Box, Typography } from "@mui/material";
import { ContenedorPrograma } from "../components/index";
import ContenedorHistoria from "../components/Nosotros/ContenedorHistoria/ContenedorHistoria";

const Nosotros = () => {
  return (
    <>
      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          margin: "0 0 2rem 0",
          minHeight: "100vh",
          maxWidth: "100vw",
        }}
      >
        <Typography variant="h1" component="h2" sx={{ mt: "2rem" }}>
          ¿De qué se trata?
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          sx={{
            mt: "2rem",
            color: "#777777ff",
            width: { xs: "90%", md: "40%" },
            m: "20px auto 0 auto",
          }}
        >
          Cada imagen te va a mostrar una historia diferente.
        </Typography>
        <ContenedorHistoria />
      </Box>
      <Box
        component="section"
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
          margin: " auto",
          padding: "0",
          boxShadow: "inherit",
          display: "flex",
          width: "90vw",
          height: "100%",
        }}
      >
        <ContenedorPrograma />
      </Box>
    </>
  );
};
export default Nosotros;

import { Box, Typography } from "@mui/material";
import { ContenedorPrograma } from "../components/index";
import ContenedorHistoria from "../components/Nosotros/ContenedorHistoria/ContenedorHistoria";

const Nosotros = () => {
  return (
    <>
      <section>
        <Box
          bgcolor="bg.lightBlue"
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            margin: "0 0 2rem 0",
            borderRadius: "20px",
            minHeight: "200vh",
            maxWidth: "100vw",
          }}
        >
          <Typography variant="h2" component="h2" sx={{ mt: "2rem" }}>
            ¿De qué se trata?
          </Typography>
          <ContenedorHistoria />
        </Box>
      </section>
      <Box
        component="section"
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
          margin: "6rem auto",
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

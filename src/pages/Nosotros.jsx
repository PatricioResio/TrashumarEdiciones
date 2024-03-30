import { Box, Typography } from "@mui/material";
import { ContenedorPrograma } from "../components/index";
import ContenedorHistoria from "../components/ContenedorHistoria/ContenedorHistoria";
import { Fade } from "react-awesome-reveal";

const Nosotros = () => {
  return (
    <>
      <section>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            margin: "auto 0",
            background: "#2D4746",
          }}
        >
          <Fade delay={650}>
            <Typography
              component="h2"
              align="center"
              variant="h2"
              sx={{
                color: "#D8EDE9",
                margin: "3rem 0 0 0",
                padding: "0",
              }}
            >
              ¿De qué se trata?
            </Typography>
          </Fade>
          <ContenedorHistoria></ContenedorHistoria>
        </Box>
      </section>
      <Box
        component="section"
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
          margin: "6rem 0 0 0",
          padding: "0",
          boxShadow: "inherit",
          display: "flex",
        }}
      >
        <ContenedorPrograma />
      </Box>
    </>
  );
};

export default Nosotros;

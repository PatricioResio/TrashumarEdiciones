import { Box, Typography } from "@mui/material";
import { Carrusel, ContenedorPrograma } from "../components/index";

const Nosotros = () => {
  return (
    <>
      <section>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            margin: "6rem 0",
            background: "#2D4746",
          }}
        >
          <Typography
            component="h2"
            align="center"
            variant="h2"
            sx={{
              fontSize: "34px",
              color: "#B5C2C7",
              margin: "3rem 0 0 0",
              padding: "0",
            }}
          >
            ¿Porqué Trashumar?
          </Typography>
          <Box
            sx={{
              backgroundColor: "#3C9990",
              height: "30rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #3F7D92",
              borderRadius: "20px",
              width: "85%",
              margin: "15px auto",
            }}
          ></Box>
          <Carrusel />
        </Box>
      </section>
      <Box
        component="section"
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
          margin: "3rem 0 0 0",
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

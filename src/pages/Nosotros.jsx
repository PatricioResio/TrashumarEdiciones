import { Box } from "@mui/material";
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
            margin: "1.5rem 0",
            borderRadius: "20px",
            height: "200vh",
            maxWidth: "100vw",
            border: "2px solid #3C9990",
          }}
        >
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
          width: "100vw",
          height: "100%",
        }}
      >
        <ContenedorPrograma />
      </Box>
    </>
  );
};

export default Nosotros;

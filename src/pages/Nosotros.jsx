import { Box } from "@mui/material";
import { ContenedorPrograma } from "../components/index";
import ContenedorHistoria from "../components/Nosotros/ContenedorHistoria/ContenedorHistoria";

const Nosotros = () => {
  return (
    <>
      <section>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            margin: "1.5rem 0",
            borderRadius: "20px",
            height: "200vh",
            maxWidth: "100vw",
            border: "2px solid #3C9990",
            backgroundColor: "#215E61",
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
        }}
      >
        <ContenedorPrograma />
      </Box>
    </>
  );
};

export default Nosotros;

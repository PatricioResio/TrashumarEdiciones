import { Box, CircularProgress, Container, Grid } from "@mui/material";
import CartaLibros from "../CartaLibros/CartaLibros";

import useProyectos from "../../hooks/useProyectos";
import { Fade } from "react-awesome-reveal";
import CartaProyectos from "../CartaProyectos/CartaProyectos";

const SectionLibreria = () => {
  const { proyectos, loading } = useProyectos();

  return loading ? (
    <Box
      sx={{
        width: "95%",
        minHeight: "75vh",
        border: "#3C9990 solid 2px",
        borderRadius: "20px",
        backgroundColor: "#4D7A77",
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <>
      <Box
        component="article"
        sx={{
          border: "2px solid #D8EDE9",
          margin: "20px",
          borderRadius: "20px",
          backgroundColor: "#3C9990",
        }}
      >
        <Grid
          container
          columns={{ xs: 1, sm: 2, md: 3, xl: 4 }}
          sx={{
            width: "90%",
            minHeight: "75vh",
            m: "50px auto",
            gap: "70px",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {proyectos.map((proyecto, i) => (
            <Grid item key={i} xs={{ xs: 1, sm: 2, md: 3, xl: 4 }}>
              <Fade>
                <CartaProyectos key={i} proyecto={proyecto} />
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default SectionLibreria;

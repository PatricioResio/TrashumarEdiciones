import { Box, CircularProgress, Container, Grid } from "@mui/material";
import CartaLibros from "../CartaLibros/CartaLibros";
import useLibros from "../../hooks/useLibros";
import { Fade } from "react-awesome-reveal";

const SectionLibreria = () => {
  const { libros, loading } = useLibros();

  return loading ? (
    <Box
      sx={{
        width: "95%",
        minHeight: "85vh",
        border: "#3C9990 solid 2px",
        borderRadius: "20px",
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <>
      <Box
        component="section"
        sx={{
          border: "#3C9990 solid 2px",
          margin: "20px",
          borderRadius: "20px",
        }}
      >
        <Grid
          container
          columns={{ xs: 1, sm: 2, md: 3, xl: 4 }}
          sx={{
            width: "100%",
            minHeight: "90vh",
            m: "15px",
          }}
        >
          {libros.map((libro, i) => (
            <Grid item key={i} xs={1}>
              <Fade>
                <CartaLibros key={i} libro={libro} />
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default SectionLibreria;

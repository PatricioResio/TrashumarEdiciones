import { Box, CircularProgress, Container, Grid } from "@mui/material";
import CartaLibros from "../CartaLibros/CartaLibros";
import useLibros from "../../hooks/useLibros";

const SectionLibreria = () => {
  const { libros, loading } = useLibros();

  return loading ? (
    <CircularProgress />
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
              <CartaLibros key={i} libro={libro} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default SectionLibreria;

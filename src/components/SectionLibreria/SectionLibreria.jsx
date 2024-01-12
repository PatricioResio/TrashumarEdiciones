import { Box, CircularProgress, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getLibros } from "../../api/api";
import CartaLibros from "../CartaLibros/CartaLibros";

const SectionLibreria = () => {
  const [librosDB, setLibrosDB] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLibros = async () => {
      const libros = await getLibros();
      setLibrosDB(libros);
      setLoading(false);
    };
    fetchLibros();
  }, []);

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
          {librosDB.map((libro, i) => (
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

import { Box, CircularProgress, Container, Grid } from "@mui/material";

import useProyectos from "../../hooks/useProyectos";
import { Fade } from "react-awesome-reveal";
import CartaProyectos from "../Home/CartaProyectos/CartaProyectos";

const SectionLibreria = () => {
  const { proyectos, loading } = useProyectos();

  return loading ? (
    <Box
      sx={{
        minHeight: "75vh",
        border: "2px solid #215E61",
        borderRadius: "10px",
        margin: "20px",
        backgroundColor: "#38A098",
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <>
      <Box
        component="article"
        sx={{
          border: "2px solid #3C9990",
          margin: "10px",
          borderRadius: "20px",
          backgroundColor: "#38A098",
        }}
      >
        <Grid
          container
          columns={{ xs: 1, sm: 2, md: 3, xl: 4 }}
          sx={{
            minHeight: "75vh",
            m: "20px auto",
            gap: "60px",
            justifyContent: "space-around",
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

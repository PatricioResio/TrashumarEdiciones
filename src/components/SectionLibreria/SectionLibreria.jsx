import { Box, CircularProgress, Container, Grid } from "@mui/material";

import useProyectos from "../../hooks/useProyectos";
import { Fade } from "react-awesome-reveal";
import CartaProyectos from "../Home/CartaProyectos/CartaProyectos";

const SectionLibreria = () => {
  const { proyectos, loadingProyectos } = useProyectos();

  return loadingProyectos ? (
    <Box
      bgcolor="bg.mediumBlue"
      sx={{
        minHeight: "90vh",
        border: "2px solid #215E61",
        borderRadius: "10px",
        margin: "20px",
      }}
    >
      <CircularProgress sx={{ mt: "25%" }} />
    </Box>
  ) : (
    <>
      <Box
        component="article"
        bgcolor="bg.mediumBlue"
        sx={{
          border: "2px solid #3C9990",
          margin: "10px",
          borderRadius: "10px",
        }}
      >
        <Grid
          container
          columns={{ xs: 1, sm: 2, md: 3, xl: 4 }}
          sx={{
            minHeight: "75vh",
            m: "auto",
            gap: "50px",
            p: "2rem",
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

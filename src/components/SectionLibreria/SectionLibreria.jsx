import { Box, CircularProgress, Container, Grid } from "@mui/material";

import useProyectos from "../../hooks/useProyectos";
import { Fade } from "react-awesome-reveal";
import CartaProyectos from "../Home/CartaProyectos/CartaProyectos";

const SectionLibreria = () => {
  const { proyectos, loadingProyectos } = useProyectos();

  return loadingProyectos ? (
    <Box
      bgcolor="bg.lightBlue"
      sx={{
        minHeight: "90vh",

        border: "1px solid #09A5B0",
        borderRadius: "5px",
        margin: { xs: "0", md: "20px" },
      }}
    >
      <CircularProgress sx={{ mt: "25%" }} />
    </Box>
  ) : (
    <>
      <Box
        component="article"
        bgcolor="bg.semiLightBlue"
        sx={{
          minHeight: "90vh",
          borderRadius: "5px",

          border: "1px solid #09A5B0",
          margin: { xs: "0", md: "20px" },
        }}
      >
        <Grid
          container
          columns={{ xs: 1, sm: 2, md: 3, xl: 4 }}
          sx={{
            minHeight: "75vh",
            m: "auto",
            gap: "50px",
            p: 2,
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {proyectos.map((proyecto, i) => (
            <Grid item key={i} xs={{ xs: 1, sm: 2, md: 3, xl: 4 }}>
              <Fade>
                <CartaProyectos key={proyecto.id} proyecto={proyecto} />
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default SectionLibreria;

import { Box, CircularProgress, Grid } from "@mui/material";
import useProyectos from "../../hooks/useProyectos";
import { Fade } from "react-awesome-reveal";
import CartaProyectos from "../Home/CartaProyectos/CartaProyectos";

const SectionLibreria = () => {
  const { proyectos, loadingProyectos } = useProyectos();

  return loadingProyectos ? (
    <Box
      bgcolor="bg.whiteBlue"
      sx={{
        minHeight: "90vh",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "30px",
        margin: { xs: "0", md: "20px" },
      }}
    >
      <CircularProgress sx={{ mt: "25%" }} />
    </Box>
  ) : (
    <>
      <Box
        component="article"
        bgcolor="bg.whiteBlue"
        sx={{
          minHeight: "90vh",
          borderRadius: "30px",

          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",

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

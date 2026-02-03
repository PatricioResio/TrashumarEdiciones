import { Box, CircularProgress, Grid } from "@mui/material";
import CartaPerfiles from "../Home/CartaPerfiles/CartaPerfiles";
import usePerfiles from "../../hooks/usePerfiles";
import { Fade } from "react-awesome-reveal";

const SectionComunidad = () => {
  const { perfiles, loading } = usePerfiles();
  return loading ? (
    <Box
      bgcolor="bg.whiteBlue"
      sx={{
        minHeight: "90vh",
        borderRadius: "30px",
        margin: { xs: "0", md: "20px" },
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CircularProgress sx={{ mt: "25%" }} />
    </Box>
  ) : (
    <Box
      bgcolor="bg.whiteBlue"
      component="article"
      sx={{
        borderRadius: "30px",
        margin: { xs: "0", md: "20px" },
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Fade>
        <Grid
          container
          columns={{ xs: 1, sm: 2, md: 3, xl: 4 }}
          sx={{
            minHeight: "90vh",
            m: "auto",
            p: 2,
            gap: 4,
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          {perfiles.map((perfil) => (
            <Grid item key={perfil.id} xs={{ xs: 1, sm: 2, md: 3, xl: 5 }}>
              <Fade>
                <CartaPerfiles key={perfil.id} perfil={perfil} />
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Fade>
    </Box>
  );
};

export default SectionComunidad;

import { Box, CircularProgress, Grid } from "@mui/material";
import CartaPerfiles from "../Home/CartaPerfiles/CartaPerfiles";
import { PerfilesContext } from "../../context/PerfilesContext";
import { Fade } from "react-awesome-reveal";
import { useContext } from "react";

const SectionComunidad = () => {
  const { perfiles, loadingPerfiles } = useContext(PerfilesContext);
  return loadingPerfiles ? (
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
          columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
          sx={{
            minHeight: "90vh",
            m: "auto",
            p: 2,
            gap: 1,
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          {perfiles.map((perfil) => (
            <Grid item key={perfil.id} sx={{ xs: 2, sm: 3, md: 4, lg: 2, xl: 1 }}>
              <Fade triggerOnce>
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

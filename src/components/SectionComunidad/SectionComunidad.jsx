import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import CartaPerfiles from "../Home/CartaPerfiles/CartaPerfiles";
import usePerfiles from "../../hooks/usePerfiles";
import { Fade } from "react-awesome-reveal";

const SectionComunidad = () => {
  const { perfiles, loading } = usePerfiles();
  return loading ? (
    <Box
      bgcolor="bg.semiLightBlue"
      sx={{
        minHeight: "90vh",
        borderRadius: "5px",
        width: "98%",
        border: "1px solid #09A5B0",
      }}
    >
      <CircularProgress sx={{ mt: "25%" }} />
    </Box>
  ) : (
    <Box
      bgcolor="bg.semiLightBlue"
      component="article"
      sx={{
        margin: "10px",
        borderRadius: "5px",
        border: "1px solid #09A5B0",
      }}
    >
      <Fade>
        <Grid
          container
          columns={{ xs: 1, sm: 2, md: 3, xl: 4 }}
          sx={{
            minHeight: "90vh",
            m: "auto",
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

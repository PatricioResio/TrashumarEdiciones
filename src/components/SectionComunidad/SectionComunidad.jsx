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
      borderColor="border.dark"
      bgcolor="bg.dark"
      sx={{
        minHeight: "90vh",
        border: "2px solid ",
        borderRadius: "10px",
        width: "98%",
        margin: "auto",
      }}
    >
      <CircularProgress sx={{ mt: "25%" }} />
    </Box>
  ) : (
    <Box
      borderColor="border.dark"
      bgcolor="bg.dark"
      component="article"
      sx={{
        border: "2px solid ",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <Fade>
        <Grid
          container
          columns={{ xs: 1, sm: 2, md: 3, xl: 4 }}
          sx={{
            minHeight: "90vh",
            m: "50px auto",
            gap: "75px",
            justifyContent: "space-around",
            alignItems: "center",
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

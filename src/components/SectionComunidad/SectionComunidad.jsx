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
      sx={{
        minHeight: "90vh",
        border: "2px solid #3C9990",
        borderRadius: "20px",
        width: "98%",
        margin: "auto",
        backgroundColor: "#38A098",
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        minHeight: "90vh",
        width: "98%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        m: "auto",
        border: "#3C9990 solid 2px",
        borderRadius: "20px",
        backgroundColor: "#38A098",
      }}
    >
      <Fade>
        <Box
          component="section"
          sx={{
            width: "100%",
          }}
        >
          <Grid
            container
            columns={{ xs: 1, sm: 2, md: 3, xl: 4 }}
            sx={{
              minHeight: "75vh",
              m: "50px auto",
              gap: "75px",
              justifyContent: "flex-start",
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
        </Box>
      </Fade>
    </Box>
  );
};

export default SectionComunidad;

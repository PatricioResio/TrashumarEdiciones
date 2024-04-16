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
    <Container
      maxWidth="2xl"
      sx={{
        width: "83vw",
        minHeight: "75vh",
        border: "#3C9990 solid 2px",
        borderRadius: "20px",
        backgroundColor: "#3C9990",
      }}
    >
      <CircularProgress />
    </Container>
  ) : (
    <Container
      disableGutters
      maxWidth="2xl"
      sx={{
        display: "flex",
        width: "83vw",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        m: "auto",
        border: "#D8EDE9 solid 2px",
        borderRadius: "20px",
        backgroundColor: "#3C9990",
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
              width: "90%",
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
    </Container>
  );
};

export default SectionComunidad;

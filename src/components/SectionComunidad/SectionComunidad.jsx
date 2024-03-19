import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import CartaPerfiles from "../CartaPerfiles/CartaPerfiles";
import usePerfiles from "../../hooks/usePerfiles";
import { Fade } from "react-awesome-reveal";

const SectionComunidad = () => {
  const { perfiles, loading } = usePerfiles();
  return loading ? (
    <Container
      sx={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Container>
  ) : (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        display: "flex",
        width: "100vw",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        m: "auto",
      }}
    >
      <Fade>
        <Typography variant="h1" component="h2">
          Bienvenid@ a nuestra comunidad!
        </Typography>
        <Box
          component="section"
          sx={{
            border: "#3C9990 solid 2px",
            margin: "20px",
            borderRadius: "20px",
            width: "100%",
          }}
        >
          <Grid
            container
            columns={{ xs: 1, sm: 2, md: 3, xl: 4 }}
            sx={{
              width: "100%",
              minHeight: "90vh",
              m: "15px",
            }}
          >
            {perfiles.map((perfil) => (
              <Grid /* m={"auto"} */ item key={perfil.id} xs={1}>
                <CartaPerfiles key={perfil.id} perfil={perfil} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Fade>
    </Container>
  );
};

export default SectionComunidad;

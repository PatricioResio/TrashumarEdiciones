import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CartaPerfiles from "../CartaPerfiles/CartaPerfiles";
import { getPerfiles } from "../../api/api";

const SectionComunidad = () => {
  const [perfiles, setPerfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPerfiles = async () => {
      const perfiles = await getPerfiles();
      setPerfiles(perfiles);
      setLoading(false);
    };
    fetchPerfiles();
  }, []);
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
      <Typography variant="h2" component="h2">
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
          {perfiles.map((perfil, i) => (
            <Grid item key={i} xs={1}>
              <CartaPerfiles key={i} perfil={perfil} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default SectionComunidad;

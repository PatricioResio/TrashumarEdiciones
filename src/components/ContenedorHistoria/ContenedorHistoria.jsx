import CartaHistoria from "../CartaHistoria/CartaHistoria";
import { historias } from "../../constants/Arrays";
import { Box, CircularProgress, Typography } from "@mui/material";
import Carrusel from "../Carrusel/Carrusel";
import useHistorias from "../../hooks/useHistorias";
import { Suspense } from "react";
import { Loader } from "../index";
import { Fade } from "react-awesome-reveal";

const ContenedorHistoria = () => {
  const { imgArrayCarrusel, handleChangeHistoria } = useHistorias();

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#3C9990",
          height: "40rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #3F7D92",
          borderRadius: "20px",
          width: "75%",
          margin: "15px auto",
        }}
      >
        {historias.map((historia) => (
          <Fade>
            <CartaHistoria
              key={historia.posicion}
              {...historia}
              handleChangeHistoria={handleChangeHistoria}
            />
          </Fade>
        ))}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", height: "1100px" }}>
        <Fade>
          <Typography
            component="h2"
            align="center"
            variant="h2"
            sx={{
              fontSize: "34px",
              color: "#D8EDE9",
              margin: "3rem 0 0 0",
              padding: "0",
            }}
          >
            ¿Porqué Trashumar?
          </Typography>
        </Fade>
        <Fade>
          <Carrusel arrayImagenes={imgArrayCarrusel} />
        </Fade>
      </Box>
    </>
  );
};

export default ContenedorHistoria;

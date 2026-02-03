import React from "react";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Chip,
  Container,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Oficios = ({ oficios }) => {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 3,
        m: 2,
        backgroundColor: "background.paper",
        boxShadow: 1,
        width: "50%",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        {" "}
        <IconButton
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            "&:hover": { backgroundColor: "primary.dark" },
          }}
        >
          <FontAwesomeIcon icon={faHammer} />
        </IconButton>
        <Typography variant="h6" fontWeight={600}>
          Oficios
        </Typography>
      </Box>
      <Divider sx={{ mb: 2 }} />
      <Container sx={{ marginLeft: "0px", display: "flex", flexWrap: "wrap" }}>
        {!oficios || oficios.length === 0 ? (
          <Typography variant="h5" component="h5">
            No hay ningun oficio registrado todavía
          </Typography>
        ) : (
          oficios.map((oficio) =>
            oficio.valor === false ? (
              <></>
            ) : (
              <Chip
                key={oficio.nombre}
                label={oficio.nombre}
                sx={{
                  backgroundColor: "#e6f4f1",
                  color: "#1e6f64",
                  fontWeight: 700,
                  margin: "6px",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#d2ebe6",
                  },
                }}
              />
            ),
          )
        )}
      </Container>
    </Box>
  );
};

export default Oficios;

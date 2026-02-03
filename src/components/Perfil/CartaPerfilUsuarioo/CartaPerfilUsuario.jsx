import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Container, IconButton, Typography } from "@mui/material";

import React from "react";
import { useNavigate } from "react-router-dom";

const CartaPerfilUsuario = ({ currentUser }) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column" },
        justifyContent: { xs: "space-around", md: "center" },
        alignItems: "center",
        width: "30%",
        zIndex: 1,
        mt: "70px",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          gap: 4,
        }}
      >
        <Box
          component="img"
          sx={{
            height: { xs: "6rem", md: "10rem", lg: "13rem" },
            width: { xs: "6rem", md: "10rem", lg: "13rem" },
            borderRadius: "50%",
            border: "3px solid #eefffdff",
          }}
          src={!currentUser ? "No se encontro usuario" : currentUser.avatar}
          alt="foto"
        />
        <Typography variant="h4" fontWeight="bold" color="#fdffffff">
          {" "}
          {!currentUser ? "No se encontro usuario" : currentUser.nombrePublico}
        </Typography>
      </Box>
    </Container>
  );
};

export default CartaPerfilUsuario;

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
  const navigate = useNavigate("/registroPerfil");
  const handleCardButton = () => {
    navigate("/infoPerfil");
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column" },
        justifyContent: { xs: "space-around", md: "center" },
        alignItems: "center",
        borderRadius: "12px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: " rgba(233, 255, 253, 0.95)",
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
            height: { xs: "6rem", md: "10rem" },
            width: { xs: "6rem", md: "10rem" },
            borderRadius: "50%",
          }}
          src={!currentUser ? "No se encontro usuario" : currentUser.avatar}
          alt="foto"
        />
        <Typography variant="h3" className="h2-perfil-card" fontWeight="bold">
          {!currentUser ? "No se encontro usuario" : currentUser.nombrePublico}
        </Typography>

        <Box sx={{ margin: "0", gap: 6 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              my: "auto",
            }}
          >
            <IconButton
              variant="contained"
              color="tertiary"
              onClick={handleCardButton}
              sx={{ borderRadius: "50%" }}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </IconButton>
            <Typography variant="h5" fontWeight="bold">
              Datos personales
            </Typography>
          </Box>
          {!currentUser.linkedinForm ? (
            <>
              <Typography variant="h5"></Typography>
            </>
          ) : (
            <Typography variant="h5">
              <FontAwesomeIcon icon={faLinkedin} />
              {currentUser.linkedinForm}
            </Typography>
          )}
          {!currentUser.facebookForm ? (
            <>
              <Typography variant="h5"></Typography>
            </>
          ) : (
            <Typography variant="h5">
              <FontAwesomeIcon icon={faFacebook} />
              {currentUser.facebookForm}
            </Typography>
          )}
          {!currentUser.instagramForm ? (
            <Typography variant="h5"></Typography>
          ) : (
            <Typography variant="h5">
              <FontAwesomeIcon icon={faInstagram} />@{currentUser.instagramForm}
            </Typography>
          )}
          {!currentUser.xForm ? (
            <Typography variant="h5"></Typography>
          ) : (
            <Typography variant="h5">
              <FontAwesomeIcon icon={faSquareXTwitter} />@{currentUser.xForm}
            </Typography>
          )}
          {!currentUser.email ? (
            <Typography variant="h5"></Typography>
          ) : (
            <Typography variant="h5">
              <FontAwesomeIcon icon={faEnvelope} />
              {currentUser.email}
            </Typography>
          )}
          {!currentUser.telefono ? (
            <Typography variant="h5"></Typography>
          ) : (
            <Typography variant="h5">
              <FontAwesomeIcon size="24px" icon={faSquarePhone} />
              {currentUser.telefono}
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default CartaPerfilUsuario;

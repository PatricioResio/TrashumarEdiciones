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
        borderRadius: "5px",
        border: "1px solid #3C9990",
        width: "80%",
        p: 2,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          className="img-perfil-card"
          src={!currentUser ? "No se encontro usuario" : currentUser.avatar}
          alt="foto"
        />
        <Typography
          variant="h3"
          className="h2-perfil-card"
          paragraph
          fontWeight="bold"
          sx={{ mt: "13rem" }}
        >
          {!currentUser ? "No se encontro usuario" : currentUser.nombrePublico}
        </Typography>

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

        <Box sx={{ margin: "0" }}>
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
      </Container>
    </Container>
  );
};

export default CartaPerfilUsuario;

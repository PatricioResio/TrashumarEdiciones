import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "../Perfil.css";
import { faEnvelope, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const CartaPerfilPublico = ({ perfil }) => {
  const {
    nombrePublico = "",
    avatar,
    oficios = [],
    telefonoPublico,
    facebook,
    instagram,
    x,
    linkedin,
    email,
    distribuidor,
    coordenadas,
  } = perfil;
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
      <Box
        sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 4 }}
      >
        <Box
          sx={{
            height: { xs: "6rem", md: "8rem" },
            width: { xs: "6rem", md: "8rem" },
            m: "auto",
            borderRadius: "50%",
          }}
          component="img"
          src={!perfil ? "No se encontro usuario" : perfil.avatar}
          alt="foto de perfil"
        />

        <Typography variant="h3" className="h2-perfil-card" fontWeight="bold">
          {!perfil ? "No se encontro usuario" : perfil.nombrePublico}
        </Typography>
      </Box>

      <Box sx={{ margin: "0", gap: 6 }}>
        <Typography
          component="h5"
          variant="h5"
          fontWeight="bold"
          color={"primary"}
        >
          Datos personales
        </Typography>
        {!perfil.linkedinForm ? (
          <>
            <Typography variant="h5"></Typography>
          </>
        ) : (
          <Typography variant="h5">
            <FontAwesomeIcon icon={faLinkedin} />
            {perfil.linkedinForm}
          </Typography>
        )}
        {!perfil.facebookForm ? (
          <>
            <Typography variant="h5"></Typography>
          </>
        ) : (
          <Typography variant="h5">
            <FontAwesomeIcon icon={faFacebook} />
            {perfil.facebookForm}
          </Typography>
        )}
        {!perfil.instagramForm ? (
          <Typography variant="h5"></Typography>
        ) : (
          <Typography variant="h5">
            <FontAwesomeIcon icon={faInstagram} />@{perfil.instagramForm}
          </Typography>
        )}
        {!perfil.xForm ? (
          <Typography variant="h5"></Typography>
        ) : (
          <Typography variant="h5">
            <FontAwesomeIcon icon={faSquareXTwitter} />@{perfil.xForm}
          </Typography>
        )}
        {!perfil.email ? (
          <Typography variant="h5"></Typography>
        ) : (
          <Typography variant="h5">
            <FontAwesomeIcon icon={faEnvelope} />
            {perfil.email}
          </Typography>
        )}
        {!perfil.telefono ? (
          <Typography variant="h5"></Typography>
        ) : (
          <Typography variant="h5">
            <FontAwesomeIcon size="24px" icon={faSquarePhone} />
            {perfil.telefono}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default CartaPerfilPublico;

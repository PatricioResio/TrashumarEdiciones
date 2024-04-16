import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Perfil.css";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ContenedorColaboraciones from "./ContenedorColaboraciones/ContenedorColaboraciones";
import ContenedorProyectosPerfil from "./ContenedorProyectosPerfil/ContenedorProyectosPerfil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import DescripcionPerfil from "./DescripcionPerfil/DescripcionPerfil";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import Oficios from "./Oficios/Oficios";

const Perfil = () => {
  const { currentUser } = useContext(AuthContext);
  const oficios = [...currentUser.oficios];
  const navigate = useNavigate("/registroPerfil");
  const handleCardButton = () => {
    navigate("/infoPerfil");
  };

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "95%",
        m: "auto",
        mt: "40px",
        mb: "0px",
        p: "0",
        backgroundColor: "#4d7a77",
        borderRadius: "15px",
        height: { xs: "3200px", md: "2900px", lg: "2200px", xl: "1550px" },
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "column", lg: "row", xl: "row" },
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: { xs: "1800px", md: "1500px", lg: "1200px", xl: "1500px" },
          backgroundColor: "#4d7a77",
          borderRadius: "15px",
          m: "auto",
        }}
      >
        <Container
          maxWidth="2xl"
          sx={{
            width: { xs: "300px", md: "500px", lg: "800px", xl: "1200px" },
            height: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            m: "auto auto auto auto",
            mt: { xs: "20px" },
            paddingTop: "0px",
            border: "2px solid #3c9990",
            borderRadius: "4%",
            backgroundColor: "#6BBCA8",
            position: "relative",
          }}
        >
          <Box
            component="img"
            sx={{
              margin: "50px",
              marginTop: "0px",
              height: "280px",
              width: "280px",
            }}
            className="img-perfil-card"
            src={!currentUser ? "No se encontro usuario" : currentUser.avatar}
            alt="foto"
          />
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h3" paragraph fontWeight="bold">
              {!currentUser
                ? "No se encontro usuario"
                : currentUser.nombrePublico}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
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
                  <FontAwesomeIcon icon={faInstagram} />@
                  {currentUser.instagramForm}
                </Typography>
              )}
              {!currentUser.xForm ? (
                <Typography variant="h5"></Typography>
              ) : (
                <Typography variant="h5">
                  <FontAwesomeIcon icon={faSquareXTwitter} />@
                  {currentUser.xForm}
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
        <Oficios oficios={oficios} />
        <DescripcionPerfil {...currentUser} />
      </Container>

      <Container
        disableGutters
        sx={{
          height: "100%",
          m: "auto",
          minWidth: "100%",
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "column",
            lg: "column",
            xl: "row",
          },
        }}
      >
        <Box
          component="article"
          sx={{
            m: "auto",
            mt: { xs: "auto", md: "0", lg: "0", xl: "0" },
            width: { xs: "350px", md: "500px", lg: "800px" },
          }}
        >
          <ContenedorProyectosPerfil />
        </Box>
        <Box
          component="article"
          sx={{
            m: "auto",
            mt: "0",
            width: { xs: "350px", md: "500px", lg: "800px" },
          }}
        >
          <ContenedorColaboraciones />
        </Box>
      </Container>
    </Box>
  );
};

export default Perfil;

import { Box, Container, IconButton, Typography } from "@mui/material";
import "./Perfil.css";
import FilaColaboraciones from "../FilaColaboraciones/FilaColaboraciones";
import FilaProyectosPerfil from "../FilaProyectosPerfil/FilaProyectosPerfil";
import Oficios from "../Oficios/Oficios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import DescripcionPerfil from "../DescripcionPerfil/DescripcionPerfil";

const PerfilPublico = ({ proyectosUser, colaboraciones, perfil = {} }) => {
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
  } = perfil;
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        m: "auto",
        mt: "40px",
        mb: "0px",
        p: "0",
        borderRadius: "20px",
        border: "2px solid #3C9990",
        height: { xs: "3200px", md: "2900px", lg: "2200px", xxl: "2000px" },
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

          borderRadius: "20px",
          border: "2px solid #3C9990",
          m: "10px auto",
          boxShadow: "1px 1px 5px black",
        }}
      >
        <Container
          maxWidth="2xl"
          backgroundColor={"primary.main"}
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
            borderColor: "#14919B",
            borderRadius: "2%",
            position: "relative",
            color: "#02291F",
          }}
        >
          {" "}
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
              src={!perfil ? "No se encontro usuario" : perfil.avatar}
              alt="foto"
            />

            <Typography
              variant="h3"
              className="h2-perfil-card"
              paragraph
              fontWeight="bold"
              sx={{ mt: "13rem" }}
            >
              {!perfil ? "No se encontro usuario" : perfil.nombrePublico}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                my: "auto",
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                Datos personales
              </Typography>
            </Box>

            <Box sx={{ margin: "0" }}>
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
        </Container>
        <Oficios oficios={oficios} />
        <DescripcionPerfil {...perfil} />
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
            border: "solid 2px #BAE3D7",
            borderRadius: "2%",
            p: "20px",
            mt: { xs: "auto", md: "0", lg: "0", xl: "0" },
            width: { xs: "350px", md: "500px", lg: "800px" },
          }}
        >
          <FilaProyectosPerfil proyectosUser={proyectosUser} />
        </Box>
        <Box
          component="article"
          sx={{
            m: "auto",
            border: "solid 2px #BAE3D7",
            borderRadius: "2%",
            mt: { xs: "auto", md: "0", lg: "0", xl: "0" },
            p: "20px",
            width: { xs: "350px", md: "500px", lg: "800px" },
          }}
        >
          <FilaColaboraciones colaboraciones={colaboraciones} />
        </Box>
      </Container>
    </Box>
  );
};

export default PerfilPublico;

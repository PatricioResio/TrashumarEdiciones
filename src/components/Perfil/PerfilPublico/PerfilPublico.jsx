import { Box, Container, Typography } from "@mui/material";
import "./Perfil.css";
import FilaColaboraciones from "../FilaColaboraciones/FilaColaboraciones";
import FilaProyectosPerfil from "../FilaProyectosPerfil/FilaProyectosPerfil";
import Oficios from "../Oficios/Oficios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Map from "../../Map/Map";
import DescripcionPerfil from "../DescripcionPerfil/DescripcionPerfil";
import CartaPerfilPublico from "../CartaPerfilPublico/CartaPerfilPublico";

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
    distribuidor,
    zonaDistribuidor,
  } = perfil;
  const { lat, lg } = zonaDistribuidor ? !zonaDistribuidor : 0;

  return (
    <Box
      component="section"
      bgcolor={"bg.lightBlue"}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "100%", md: "95%" },
        m: "40px auto",
        borderRadius: "5px",
        p: { xs: 0, md: "4rem" },
        gap: "4rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "column", lg: "row", xl: "row" },
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "100%", md: "90%" },
          gap: "2rem",
          m: "10px auto",
        }}
      >
        <Container
          maxWidth="2xl"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            m: "auto auto 0 auto",
            mt: { xs: "20px" },
            paddingTop: "0px",
            position: "relative",
            color: "#02291F",
          }}
        >
          {" "}
          <CartaPerfilPublico perfil={perfil} />
        </Container>

        <Oficios oficios={oficios} />
        <DescripcionPerfil {...perfil} />
      </Box>
      <Container
        disableGutters
        sx={{
          height: "100%",
          m: "auto",
          minWidth: "100%",
          gap: "2rem",
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "column",
            lg: "column",
            xl: "column",
          },
        }}
      >
        <Box
          component="article"
          bgcolor={"bg.mediumBlue"}
          sx={{
            m: "auto",
            border: "solid 2px #BAE3D7",
            borderRadius: "2%",
            p: "20px",
            mt: { xs: "auto", md: "0", lg: "0", xl: "0" },
            width: { xs: "95vw", sm: "350px", md: "500px", lg: "45%" },
          }}
        >
          <FilaProyectosPerfil proyectosUser={proyectosUser} />
        </Box>
        <Box
          component="article"
          bgcolor={"bg.mediumBlue"}
          sx={{
            m: "auto",

            border: "solid 2px #BAE3D7",
            borderRadius: "2%",
            mt: { xs: "auto", md: "0", lg: "0", xl: "0" },
            p: "20px",
            width: { xs: "95vw", sm: "350px", md: "500px", lg: "45%" },
          }}
        >
          <FilaColaboraciones colaboraciones={colaboraciones} />
        </Box>

        {!perfil.distribuidor ? (
          <> </>
        ) : (
          <Box>
            <Map zonaDistribuidor={zonaDistribuidor} />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default PerfilPublico;

import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Perfil.css";
import { Box, Container } from "@mui/material";
import ContenedorColaboraciones from "./ContenedorColaboraciones/ContenedorColaboraciones";
import ContenedorProyectosPerfil from "./ContenedorProyectosPerfil/ContenedorProyectosPerfil";
import DescripcionPerfil from "./DescripcionPerfil/DescripcionPerfil";
import Oficios from "./Oficios/Oficios";
import CartaPerfilUsuario from "./CartaPerfilUsuarioo/CartaPerfilUsuario";

const Perfil = () => {
  const { currentUser } = useContext(AuthContext);
  const oficios = [...currentUser.oficios];

  return (
    <Box
      component="section"
      bgcolor={"bg.lightBlue"}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "95%",
        m: "40px auto",
        borderRadius: "5px",
        p: "4rem",
        gap: "2rem",
      }}
    >
      <Box
        bgcolor="bg.mediumLightBlue"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "column", lg: "row", xl: "row" },
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          backgroundColor: "#6CCCD9",
          borderRadius: "5px",
          border: "1px solid #3C9990",
          m: "10px auto",
          boxShadow: "1px 1px 5px black",
        }}
      >
        <CartaPerfilUsuario currentUser={currentUser} />
        <Oficios oficios={oficios} />
        <DescripcionPerfil {...currentUser} />
      </Box>

      <Container
        disableGutters
        sx={{
          height: "100%",
          gap: "4rem",
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
            width: { xs: "90%", md: "500px", lg: "45%" },
          }}
        >
          <ContenedorProyectosPerfil />
        </Box>
        <Box
          component="article"
          sx={{
            m: "auto",
            mt: "0",
            width: { xs: "90%", md: "500px", lg: "45%" },
          }}
        >
          <ContenedorColaboraciones />
        </Box>
      </Container>
    </Box>
  );
};

export default Perfil;

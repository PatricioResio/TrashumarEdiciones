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
          backgroundColor: "#215E61",
          borderRadius: "20px",
          border: "2px solid #3C9990",
          m: "10px auto",
          boxShadow: "1px 1px 5px black",
        }}
      >
        <CartaPerfilUsuario currentUser={currentUser} />
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

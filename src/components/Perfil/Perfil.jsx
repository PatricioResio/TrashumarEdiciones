import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Perfil.css";
import { Box, Container } from "@mui/material";
import ContenedorColaboraciones from "./ContenedorColaboraciones/ContenedorColaboraciones";
import ContenedorProyectosPerfil from "./ContenedorProyectosPerfil/ContenedorProyectosPerfil";
import DescripcionPerfil from "./DescripcionPerfil/DescripcionPerfil";
import Oficios from "./Oficios/Oficios";
import CartaPerfilUsuario from "./CartaPerfilUsuarioo/CartaPerfilUsuario";
import BannerCuerpo from "../BannerCuerpo/BannerCuerpo";
import SectionDistribuidor from "./SectionDistribuidor/SectionDistribuidor";

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
        width: "95%",
        m: "40px auto",
        borderRadius: "5px",
        p: { xs: 0, md: "4rem" },
        gap: "2rem",
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
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            marginBottom: { xs: "2", md: "-20rem" },
          }}
        >
          <Oficios oficios={oficios} />
          <Container
            maxWidth="2xl"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              m: "auto auto 0 auto",
              mt: { xs: "20px" },
              mb: { xs: "auto", md: "8rem" },
              paddingTop: "0px",
              position: "relative",
            }}
          >
            <CartaPerfilUsuario currentUser={currentUser} />
          </Container>
          <DescripcionPerfil {...currentUser} />
        </Box>
      </Box>

      <Box sx={{ marginTop: { xs: "0", md: "-25rem" } }}>
        <BannerCuerpo />
      </Box>
      <Container
        disableGutters
        sx={{
          height: "100%",
          m: { xs: "0", md: "auto" },
          minWidth: "90vw%",
          gap: { xs: "0", md: "2rem" },
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
            m: { xs: "0", md: "auto" },
            borderRadius: "2%",
            p: "20px",
            width: { xs: "90vw", sm: "350px", md: "500px", lg: "45%" },
          }}
        >
          <ContenedorProyectosPerfil />
        </Box>

        <Box
          component="article"
          sx={{
            m: { xs: "0", md: "auto" },
            borderRadius: "2%",
            p: "20px",
            width: { xs: "90vw", sm: "350px", md: "500px", lg: "45%" },
          }}
        >
          <ContenedorColaboraciones />
        </Box>
        {/*         {!distribuidor ? (
          <></>
        ) : (
          <Box>
            <SectionDistribuidor />
          </Box>
        )} */}
      </Container>
    </Box>
  );
};

export default Perfil;

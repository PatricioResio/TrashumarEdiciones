import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
  Box,
  Container,
  Tabs,
  Tab,
  Paper,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";

import CartaPerfilUsuario from "./CartaPerfilUsuarioo/CartaPerfilUsuario";
import Oficios from "./Oficios/Oficios";
import DescripcionPerfil from "./DescripcionPerfil/DescripcionPerfil";
import ContenedorProyectosPerfil from "./ContenedorProyectosPerfil/ContenedorProyectosPerfil";
import ContenedorColaboraciones from "./ContenedorColaboraciones/ContenedorColaboraciones";
import SectionDistribuidor from "./SectionDistribuidor/SectionDistribuidor";
import InformacionPersonal from "./InformacionPersonal/InformacionPersonal";
import {
  faBookOpen,
  faTruck,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";
import { faHandshake, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Perfil = () => {
  const { currentUser } = useContext(AuthContext);
  const [tab, setTab] = useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 10 }}>
      {/* CABECERA PERFIL */}
      <Box
        elevation={2}
        sx={{
          p: 3,
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          background:
            "linear-gradient(to bottom, #cbfcfcff, #acebe5ff 60%, #7ccac6ff)",
          textAlign: "center",
        }}
      >
        <CartaPerfilUsuario currentUser={currentUser} />
      </Box>

      {/* TABS */}
      <Paper elevation={1}>
        <Tabs
          value={tab}
          onChange={handleChange}
          centered
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab
            icon={<FontAwesomeIcon icon={faUser} />}
            label="Perfil"
            sx={{ width: "33%" }}
          />
          <Tab
            label="Proyectos"
            sx={{ width: "33%" }}
            icon={<FontAwesomeIcon icon={faBookOpen} />}
          />
          {currentUser.distribuidor && (
            <Tab
              label="Distribuidor"
              sx={{ width: "33%" }}
              icon={<FontAwesomeIcon icon={faTruck} />}
            />
          )}
        </Tabs>
      </Paper>

      {/* CONTENIDO DE CADA TAB */}

      {tab === 0 && (
        <Box sx={{ gap: 3 }}>
          <Paper sx={{ p: 3 }}>
            <Box
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <InformacionPersonal user={currentUser}></InformacionPersonal>

              <Oficios oficios={currentUser.oficios} />
            </Box>
            <Box
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <DescripcionPerfil
                {...currentUser}
                title="Sobre mí"
                icon={faUser}
              />
              <DescripcionPerfil
                {...currentUser}
                title="Cómo trabajo"
                icon={faUserGear}
              />
            </Box>
          </Paper>
        </Box>
      )}

      {tab === 1 && (
        <Paper sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              m: "auto",
              p: 3,
            }}
          >
            <Box
              sx={{
                p: 3,
                m: "15px auto",
                width: "45%",
                borderRadius: "10px",
                backgroundColor: "background.paper",
                boxShadow: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  m: 2,
                }}
              >
                {" "}
                <IconButton
                  sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    "&:hover": { backgroundColor: "primary.dark" },
                  }}
                >
                  <FontAwesomeIcon icon={faBookOpen} />
                </IconButton>
                <Typography variant="h6" fontWeight={600}>
                  Proyectos
                </Typography>
              </Box>
              <Divider />
              <ContenedorProyectosPerfil />
            </Box>

            <Box
              sx={{
                p: 3,
                m: "auto",
                width: "45%",
                borderRadius: "10px",
                backgroundColor: "background.paper",
                boxShadow: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,

                  m: 2,
                }}
              >
                {" "}
                <IconButton
                  sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    "&:hover": { backgroundColor: "primary.dark" },
                  }}
                >
                  <FontAwesomeIcon icon={faHandshake} />
                </IconButton>
                <Typography variant="h6" fontWeight={600}>
                  Colaboraciones
                </Typography>
              </Box>

              <Divider />
              <ContenedorColaboraciones />
            </Box>
          </Box>
        </Paper>
      )}

      {tab === 2 && currentUser.distribuidor && (
        <Paper sx={{ p: 3 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              maxWidth: "100%",
            }}
          >
            <Typography variant="h6">Distribución</Typography>
            <SectionDistribuidor
              address={currentUser.address}
              zonaDistribuidor={currentUser.zonaDistribuidor}
              metodoVenta={currentUser.metodoVenta}
            />
          </Box>
        </Paper>
      )}
    </Container>
  );
};

export default Perfil;

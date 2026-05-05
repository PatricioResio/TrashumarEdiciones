import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { getPerfil } from "../../api/api";
import {
  Box, Container, Tabs, Tab, Paper, Typography,
  IconButton, Divider, Button, CircularProgress,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";

import CartaPerfilUsuario from "./CartaPerfilUsuarioo/CartaPerfilUsuario";
import Oficios from "./Oficios/Oficios";
import DescripcionPerfil from "./DescripcionPerfil/DescripcionPerfil";
import ContenedorProyectosPerfil from "./ContenedorProyectosPerfil/ContenedorProyectosPerfil";
import ContenedorColaboraciones from "./ContenedorColaboraciones/ContenedorColaboraciones";
import SectionDistribuidor from "./SectionDistribuidor/SectionDistribuidor";
import InformacionPersonal from "./InformacionPersonal/InformacionPersonal";

const PerfilRender = () => {
  const { idPerfil } = useParams(); // undefined si es /miperfil
  const { currentUser } = useContext(AuthContext);
  const [tab, setTab] = useState(0);
  const [perfil, setPerfil] = useState(null);
  const [loading, setLoading] = useState(true);


  // si hay id en la URL es perfil público, sino es el propio
  const esPerfilPropio = !idPerfil || currentUser?.idPerfil === idPerfil;
  useEffect(() => {
    const cargarPerfil = async () => {
      setLoading(true);
      try {
        if (esPerfilPropio) {
          setPerfil(currentUser);
        } else {
          const data = await getPerfil({ idPerfil });
          setPerfil(data);
        }
      } catch (error) {
        console.error("Error cargando perfil:", error);
      } finally {
        setLoading(false);
      }
    };
  
    cargarPerfil();
  }, [idPerfil, currentUser]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!perfil) {
    return (
      <Box sx={{ textAlign: "center", mt: 10 }}>
        <Typography variant="h5">Perfil no encontrado</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 10 }}>
      {/* CABECERA */}
      <Box
        sx={{
          p: 3,
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          background: "linear-gradient(to bottom, #cbfcfcff, #acebe5ff 60%, #7ccac6ff)",
          textAlign: "center",
          position: "relative",
        }}
      >
        <CartaPerfilUsuario currentUser={perfil} />

        {/* botón editar — solo visible en perfil propio */}
        {esPerfilPropio && (
          <Button
            component={Link}
            to="/registro"
            variant="outlined"
            startIcon={<EditIcon />}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              bgcolor: "white",
              "&:hover": { bgcolor: "white", opacity: 0.9 },
            }}
          >
            Editar perfil
          </Button>
        )}
      </Box>

      {/* TABS */}
      <Paper elevation={1}>
        <Tabs value={tab} onChange={(e, v) => setTab(v)} centered textColor="primary" indicatorColor="primary">
          <Tab icon={<PersonOutlineIcon />} label="Perfil" sx={{ width: "33%" }} />
          <Tab icon={<MenuBookIcon />} label="Proyectos" sx={{ width: "33%" }} />
          {perfil.distribuidor && (
            <Tab icon={<LocalShippingIcon />} label="Distribuidor" sx={{ width: "33%" }} />
          )}
        </Tabs>
      </Paper>

      {/* TAB 0 - PERFIL */}
      {tab === 0 && (
        <Box sx={{ gap: 3 }}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ p: 3, display: "flex", flexDirection: "row" }}>
              <InformacionPersonal user={perfil} />
              <Oficios oficios={perfil.oficios} />
            </Box>
            <Box sx={{ p: 3, display: "flex", flexDirection: "row" }}>
              <DescripcionPerfil {...perfil} title="Sobre mí" icon={<PersonIcon />} />
              <DescripcionPerfil {...perfil} title="Sobre mi trabajo" icon={<ManageAccountsIcon />} />
            </Box>
          </Paper>
        </Box>
      )}

      {/* TAB 1 - PROYECTOS */}
      {tab === 1 && (
        <Paper sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <Box sx={{ display: "flex", flexDirection: "row", m: "auto", p: 3 }}>
            <Box sx={{ p: 3, m: "15px auto", width: "45%", borderRadius: "10px", backgroundColor: "background.paper", boxShadow: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, m: 2 }}>
                <IconButton sx={{ backgroundColor: "primary.main", color: "white", "&:hover": { backgroundColor: "primary.dark" } }}>
                  <MenuBookIcon />
                </IconButton>
                <Typography variant="h6" fontWeight={600}>Proyectos</Typography>
              </Box>
              <Divider />
              <ContenedorProyectosPerfil uid={perfil.idPerfil} />
            </Box>

            <Box sx={{ p: 3, m: "auto", width: "45%", borderRadius: "10px", backgroundColor: "background.paper", boxShadow: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, m: 2 }}>
                <IconButton sx={{ backgroundColor: "primary.main", color: "white", "&:hover": { backgroundColor: "primary.dark" } }}>
                  <HandshakeIcon />
                </IconButton>
                <Typography variant="h6" fontWeight={600}>Colaboraciones</Typography>
              </Box>
              <Divider />
              <ContenedorColaboraciones uid={perfil.idPerfil} />
            </Box>
          </Box>
        </Paper>
      )}

      {/* TAB 2 - DISTRIBUIDOR */}
      {tab === 2 && perfil.distribuidor && (
        <Paper sx={{ p: 3 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Typography variant="h6">Distribución</Typography>
            <SectionDistribuidor
            radio={perfil.radio}
              address={perfil.address}
              zonaDistribuidor={perfil.zonaDistribuidor}
              metodoVentas={perfil.metodoVentas}
            />
          </Box>
        </Paper>
      )}
    </Container>
  );
};

export default PerfilRender;
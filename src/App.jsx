import { AuthProvider } from "./context/AuthContext";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Route, Routes } from "react-router-dom";
import {
  NavBar,
  Footer,
  FormRegistro,
  PerfilPublico,
  FormRegistroPerfil,
} from "./components/index";
import {
  MiPerfil,
  Libreria,
  Login,
  Nosotros,
  Home,
  Comunidad,
  ProyectoNuevo,
} from "./pages/index";

export default function App() {
  return (
    <AuthProvider>
      <Container
        maxWidth="2xl"
        sx={{ background: "#A9CBC8", width: "100%", margin: "0", padding: "0" }}
        disableGutters
      >
        <NavBar />
        <Box sx={{ padding: "0", margin: "0" }}>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/miperfil" Component={MiPerfil} />
            <Route path="/infoPerfil" Component={FormRegistroPerfil} />
            <Route pat="/miperfil/:perfil" Component={PerfilPublico} />
            <Route path="/libreria" Component={Libreria} />
            <Route path="/nosotros" Component={Nosotros} />
            <Route path="/ingresa" Component={Login} />
            <Route path="/publicar" Component={ProyectoNuevo} />
            <Route path="/registro" Component={FormRegistro} />
            <Route path="/comunidad" Component={Comunidad} />
          </Routes>
        </Box>
        <Footer />
      </Container>
    </AuthProvider>
  );
}

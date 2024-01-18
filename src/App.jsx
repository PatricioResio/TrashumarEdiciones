import { AuthProvider } from "./context/AuthContext";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Route, Routes } from "react-router-dom";
import {
  NavBar,
  Footer,
  FormRegistro,
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
  Perfil,
} from "./pages/index";
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";

export default function App() {
  return (
    <AuthProvider>
      <Suspense fallback={CircularProgress}>
        <Container
          maxWidth="2xl"
          sx={{
            background: "#A9CBC8",
            width: "100%",
            margin: "0",
            padding: "0",
          }}
          disableGutters
        >
          <NavBar />
          <Box sx={{ padding: "0", margin: "0" }}>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/miperfil" Component={MiPerfil} />
              <Route path="/infoPerfil" Component={FormRegistroPerfil} />
              <Route path="/perfil/:idPerfil" Component={Perfil} />
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
      </Suspense>
    </AuthProvider>
  );
}

import { lazy } from "react";
import { AuthProvider } from "./context/AuthContext";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Route, Routes } from "react-router-dom";
import { NavBar, Footer, Loader } from "./components/index";
import { Libreria, Nosotros, Home, Comunidad } from "./pages/index";

const LazyLogin = lazy(() => import("./pages/Login.jsx"));
const LazyMiPerfil = lazy(() => import("./pages/MiPerfil.jsx"));
const LazyPerfil = lazy(() => import("./pages/Perfil.jsx"));
const LazyLibreria = lazy(() => import("./pages/Libreria.jsx"));
const LazyProyectoPublico = lazy(() =>
  import("./pages/PageProyectoPublico.jsx")
);
const LazyProyectoNuevo = lazy(() => import("./pages/ProyectoNuevo.jsx"));
const LazyFormRegistroPerfil = lazy(() =>
  import("./components/Forms/FormPerfilContainer/FormRegistroPerfil.jsx")
);
const LazyFormRegistro = lazy(() =>
  import("./components/Forms/FormRegistro/FormRegistro.jsx")
);

export default function App() {
  return (
    <AuthProvider>
      <Container
        maxWidth="2xl"
        sx={{
          background: "#A9CBC8",
          maxWidth: "100%",
          margin: "0",
          padding: "0",
        }}
        disableGutters
      >
        <NavBar />
        <Box component="main" sx={{ padding: "0", margin: "0", width: "100%" }}>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/miperfil" Component={LazyMiPerfil} />
            <Route path="/infoPerfil" Component={LazyFormRegistroPerfil} />
            <Route path="/perfil/:idPerfil" Component={LazyPerfil} />
            <Route path="/libreria" Component={LazyLibreria} />
            <Route path="/proyecto/:id" Component={LazyProyectoPublico} />
            <Route path="/nosotros" Component={Nosotros} />
            <Route path="/ingresa" Component={LazyLogin} />
            <Route path="/publicar" Component={LazyProyectoNuevo} />
            <Route path="/registro" Component={LazyFormRegistro} />
            <Route path="/comunidad" Component={Comunidad} />
          </Routes>
        </Box>

        <Footer />
      </Container>
    </AuthProvider>
  );
}

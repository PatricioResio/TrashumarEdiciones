import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home';
import MiPerfil from './pages/MiPerfil';
import Login from './pages/Login';
import Proyecto from './pages/Proyecto'
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Registro from './pages/Registro';
import ProyectoNuevo from './pages/ProyectoNuevo';
import Nosotros from './pages/Nosotros';

export default function App() {
  return (



    <Container sx={{backgroundColor:'#E1E5E6', margin: 0, width:'100%', padding: 0, height:'100%' }}>
      <NavBar/>
      <Box sx={{ width:'100%' }}>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/miperfil' Component={MiPerfil}/>
          <Route path='/proyecto' Component={Proyecto}/>
          <Route path='/nosotros' Component={Nosotros}/>
          <Route path='/login' Component={Login}/>
          <Route path='/proyectoNuevo' Component={ProyectoNuevo}/>
          <Route path='/registro' Component={Registro}/> 

        </Routes>
      </Box>
      <Footer/>
    </Container>

    
  );
}
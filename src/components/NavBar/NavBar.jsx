import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
  Avatar,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import { useAuth } from '../../context/AuthContext'; // ajustá el path
import { LOGO_URL } from '../../constants/constants';
import LazyImage from '../LazyImage/LazyImage';

const menuItems = [
  { label: 'NOSOTROS', path: '/nosotros' },
  { label: 'LIBRERÍA', path: '/libreria' },
  { label: 'COMUNIDAD', path: '/comunidad' },
  { label: 'QUIERO PUBLICAR', path: '/publicar' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const { currentUser, logOut } = useAuth();

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleNavigation = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleLogout = async () => {
    await logOut();
    handleMenuClose();
  };

  const drawer = (
    <Box sx={{ width: 280, bgcolor: 'primary.main', height: '100%', color: 'white' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              onClick={() => handleNavigation(item.path)}
              sx={{ py: 2, '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontWeight: 600, fontSize: '1rem' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'primary.main' }}>
        <Container maxWidth="2xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 70, md: 80 } }}>

            {/* Logo */}
            <Box
              component="a"
              onClick={() => navigate('/')}
              sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white', mr: 4, cursor: 'pointer', 
                height: { xs: 45, md: 60 }, width:{xs:45, md:60}, overflow:"hidden", borderRadius:"50%" }}
            >
              <LazyImage
                src={LOGO_URL}
                alt="Trashumar Ediciones"
              />
            </Box>

            {/* Desktop Menu */}
            {!isMobile && (
              <Box sx={{ flexGrow: 1, display: 'flex', gap: 1 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.label}
                    onClick={() => navigate(item.path)}
                    sx={{
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      px: 2.5,
                      py: 1,
                      borderRadius: 2,
                      '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.15)' },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }} />

            {/* Auth */}
            {currentUser ? (
              <>
                <IconButton
                  onClick={handleMenuOpen}
                  sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}
                >
                  {currentUser.fotoPerfil
                    ? <Avatar src={currentUser.fotoPerfil} sx={{ width: 32, height: 32 }} />
                    : <PersonIcon />
                  }
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem sx={{color:"black"}} onClick={() => { handleMenuClose(); navigate('/miperfil'); }}>
                    Mi perfil
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>
                    Cerrar sesión
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                onClick={() => navigate('/ingresa')}
                variant="outlined"
                sx={{
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.5)',
                  fontWeight: 600,
                  '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' },
                }}
              >
                Ingresar
              </Button>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton color="inherit" edge="end" onClick={handleDrawerToggle} sx={{ ml: 1 }}>
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true }}>
        {drawer}
      </Drawer>
    </>
  );
}export default Navbar;
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Brand, LogOutBtn } from "../index";

const pages = [
  {
    name: "De que se trata",
    path: "/nosotros",
  },
  {
    name: "LIBRERIA",
    path: "/libreria",
  },
  {
    name: "COMUNIDAD",
    path: "/comunidad",
  },
  {
    name: "QUIERO PUBLICAR",
    path: "/publicar",
  },
];

function ResponsiveAppBar() {
  const { currentUser } = useContext(AuthContext);
  const displayName = !currentUser ? null : currentUser.nombrePublico;
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Brand></Brand>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{ margin: "0", minWidth: "100%" }}
      >
        <Toolbar disableGutters sx={{ textAling: "justify" }}>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link
                    to={page.path}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography>{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 500,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Trashumar
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-evenly",
              maxWidth: "45%",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          {!currentUser ? (
            <Box
              sx={{
                flexGrow: 1,
                marginLeft: "2rem ",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Button
                variant="contained"
                component={Link}
                to="/ingresa"
                sx={{
                  maxWidth: "300px",
                  flexGrow: 1,
                  fontFamily: "roboto",
                  fontWeight: 900,
                  letterSpacing: ".4rem",
                  color: "inherit",
                  marginRight: "3rem",
                }}
              >
                Ingresa
              </Button>
            </Box>
          ) : (
            <Box
              sx={{
                flexGrow: 0,
                marginRight: "2rem",
                width: "50%",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Button
                variant="contained"
                component={Link}
                to="/miperfil"
                sx={{
                  my: 2,
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 500,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  maxWidth: { sm: "70px", md: "150px" },
                }}
              >
                {displayName}
              </Button>
              <LogOutBtn />
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

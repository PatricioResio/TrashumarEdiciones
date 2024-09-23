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
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Brand, LogOutBtn } from "../index";
import { Fade } from "react-awesome-reveal";
import "./NavBar.css";
import { LOGO_URL } from "../../constants/constants";
import { pages } from "../../constants/Arrays";

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
    <AppBar position="static" sx={{ maxWidth: "100%" }}>
      <Brand />
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          minWidth: "100%",
          height: "5rem",
          alignItems: "center",
        }}
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              background: { xs: "#215E61" },
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
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  sx={{
                    backgroundColor: "#215E61",
                    height: "100%",
                  }}
                  key={page.name}
                  onClick={handleCloseNavMenu}
                >
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

          <Box sx={{ flexGrow: 1, margin: "auto 1rem" }}>
            <Fade triggerOnce>
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  display: "flex",
                  height: "4.5rem",
                  width: "4rem",
                  p: "0",
                  margin: "0.3rem 2rem",

                  "& img": {
                    transition: "transform 0.3s ease-in-out", // Duración y suavidad del efecto
                  },
                  "&:hover img": {
                    transform: "scale(1.07)", // Aumenta el tamaño en 0.7
                  },
                }}
              >
                <img src={LOGO_URL} />
              </Typography>
            </Fade>
          </Box>

          <Box
            sx={{
              flexGrow: 2,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-around",
              alignItems: "center",
              maxWidth: "45%",
            }}
          >
            <Fade triggerOnce>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={Link}
                  variant="text"
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "#E4F7F7",
                    display: "block",
                    height: "100%",
                    fontSize: { lg: "14px" },
                    justifyContent: "center",
                    width: "160px",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      color: "white",
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Fade>
          </Box>

          {!currentUser ? (
            <Box
              sx={{
                flexGrow: { xs: "0", md: "1" },
                marginLeft: "2rem ",
                marginTop: "0",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                component={Link}
                to="/ingresa"
                color="primary"
                sx={{
                  maxWidth: { xs: "5rem", sm: "6rem", lg: "9rem" },
                  flexGrow: 1,
                  fontFamily: "roboto",
                  fontWeight: { xs: 600, md: 900 },
                  letterSpacing: { xs: ".1rem", md: ".2rem", lg: ".3rem" },
                  marginRight: "3rem",
                  transition: "transform 0.3s ease-in-out",

                  "&:hover": {
                    transform: "scale(1.03)",
                    color: "white",
                  },
                }}
              >
                <Fade triggerOnce>Ingresar</Fade>
              </Button>
            </Box>
          ) : (
            <Box
              sx={{
                flexGrow: { xs: "0", md: "1" },
                marginRight: { xs: ".6rem", md: "2rem" },
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                component={Link}
                to="/miperfil"
                sx={{
                  maxWidth: "150px",
                  flexGrow: 1,
                  fontFamily: "roboto",
                  fontWeight: { xs: 600, md: 900 },
                  letterSpacing: { xs: ".1rem", md: ".2rem" },
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.03)",
                    color: "white",
                  },
                }}
              >
                <Fade triggerOnce>{displayName}</Fade>
              </Button>
              <Fade triggerOnce>
                <LogOutBtn />
              </Fade>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

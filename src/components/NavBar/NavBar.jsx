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
import { DEFAULT_PERFIL_FOTO, LOGO_URL } from "../../constants/constants";
import { pages } from "../../constants/Arrays";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaUser } from "react-icons/fa6";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Divider } from "@mui/material";

function ResponsiveAppBar() {
  const { currentUser, loading } = useContext(AuthContext);
  const displayName = currentUser
    ? currentUser.nombrePublico.split(" ", 2)[0]
    : null;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [profileNav, setProfileNav] = React.useState(null);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenProfileMenu = (event) => {
    setProfileNav(event.currentTarget);
  };

  const handleCloseProfileMenu = () => {
    setProfileNav(null);
  };

  return (
    <AppBar position="static" sx={{ maxWidth: "100%" }}>
      <Fade triggerOnce delay={1}>
        <Brand />
        <Container
          disableGutters
          maxWidth="xl"
          sx={{
            minWidth: "100%",
            height: { xs: "4rem", sm: "4.3rem" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon sx={{ color: "#FFFFF8" }} />
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
                  "& .MuiPaper-root": {
                    bgcolor: "rgba(0, 0, 0, 0.9)", // Fondo oscuro del menú // Color de texto claro
                  },
                  color: "#FFFFF8",
                  display: {
                    xs: "block",
                    md: "none",
                  },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    sx={{
                      height: "100%",
                    }}
                    key={page.name}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography
                      component={Link}
                      color="secondary.white"
                      onClick={scrollToTop}
                      bgcolor="secondary"
                      to={page.path}
                      style={{ textDecoration: "none" }}
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
              <Fade triggerOnce>
                <Typography
                  variant="h6"
                  component={Link}
                  onClick={scrollToTop()}
                  to="/"
                  sx={{
                    display: "flex",
                    borderRadius: "50%",
                    height: { xs: "3rem", sm: "4rem" },
                    width: { xs: "3rem", sm: "4rem" },
                    p: "0",
                    margin: "auto 0 auto 13px",

                    "& img": {
                      transition: "transform 0.3s ease-in-out",
                    },
                    "&:hover img": {
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  <img src={LOGO_URL} />
                </Typography>
              </Fade>
            </Box>

            <Box
              sx={{
                flexGrow: { xs: 1, md: 4 },
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
                mx: "auto",
                gap: 7,
              }}
            >
              <Fade triggerOnce>
                {pages.map((page) => (
                  <Button
                    key={page.name}
                    component={Link}
                    color="secondary"
                    to={page.path}
                    onClick={scrollToTop}
                    sx={{
                      height: "100%",
                      fontWeight: "bold",
                      fontSize: { md: "12px", lg: "14px" },
                      justifyContent: "center",
                      borderRadius: "10px",
                      color: "#FFFFF8",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.02)",
                        color: "#FFFFF8",
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                ))}
              </Fade>
            </Box>

            <Box sx={{ display: "flex" }}>
              {!currentUser && !loading ? (
                <Box
                  sx={{
                    flexGrow: 1,
                    marginLeft: "2rem ",
                    marginTop: "0",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="outlined"
                    component={Link}
                    onClick={scrollToTop}
                    to="/ingresa"
                    sx={{
                      maxWidth: { xs: "5rem", sm: "6rem", lg: "9rem" },
                      flexGrow: 1,
                      color: "#FFFFF8",
                      border: "1px solid",
                      borderColor: "FFFFF8",
                      fontFamily: "roboto",
                      letterSpacing: { xs: ".1rem", md: ".2rem", lg: ".3rem" },
                      marginRight: ".5rem",
                      transition: "transform 0.3s ease-in-out",

                      "&:hover": {
                        transform: "scale(1.02)",
                        color: "#FFFFF8",
                      },
                    }}
                  >
                    <Fade triggerOnce>Ingresar</Fade>
                  </Button>
                </Box>
              ) : (
                <Fade triggerOnce>
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                    }}
                  >
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenProfileMenu}
                      color="#FFFFF8"
                    >
                      <FontAwesomeIcon icon={faUser} className="icon-profile" />
                      {/*   <Box
                        sx={{
                          heigh: "50px",
                          width: "50px",
                          m: "auto",
                          borderRadius: "50%",
                        }}
                        component="img"
                        src={
                          !currentUser
                            ? DEFAULT_PERFIL_FOTO
                            : currentUser.avatar
                        }
                      /> */}
                    </IconButton>

                    <Menu
                      id="menu-appbar"
                      anchorEl={profileNav}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                      open={Boolean(profileNav)}
                      onClose={handleCloseProfileMenu}
                      sx={{
                        "& .MuiPaper-root": {
                          bgcolor: "rgba(0, 0, 0, 0.9)", // Fondo oscuro del menú
                          color: "#FFFFF8", // Color de texto claro
                        },
                      }}
                    >
                      <MenuItem
                        sx={{
                          height: "100%",
                        }}
                        onClick={handleCloseNavMenu}
                      >
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={scrollToTop}
                          component={Link}
                          to="/miperfil"
                          sx={{
                            maxWidth: "150px",
                            flexGrow: 1,
                            fontFamily: "roboto",
                            color: "#FFFFF8",
                            fontSize: { xs: "12px", lg: "14px" },
                            letterSpacing: { xs: "0", md: ".2rem" },
                            transition: "transform 0.3s",
                            "&:hover": {
                              transform: "scale(1.03)",
                              color: "white",
                            },
                          }}
                        >
                          Mi perfil
                        </Button>
                      </MenuItem>
                      <Divider />
                      <MenuItem>
                        <LogOutBtn />
                      </MenuItem>
                    </Menu>
                  </Box>
                </Fade>
              )}
            </Box>
          </Toolbar>
        </Container>
      </Fade>
    </AppBar>
  );
}
export default ResponsiveAppBar;

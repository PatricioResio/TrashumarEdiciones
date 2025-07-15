import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../constants/constants";
import { RiInstagramFill } from "react-icons/ri";
import "./Footer.css";
import { Fade } from "react-awesome-reveal";

import { pages } from "../../constants/Arrays";

const Footer = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <AppBar
      position="bot"
      sx={{
        bgcolor: "rgba(9, 165, 176, 0.6)",
        p: "0   ",
      }}
    >
      <Fade triggerOnce>
        <Container
          maxWidth="2xl"
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: { xs: "24rem", xl: "17rem" },
            padding: { xs: "0", xl: "0" },
            bgcolor: "rgba(9, 165, 176, 0.4)",
          }}
        >
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              display: { xs: "flex", sm: "flex" },
              height: { xs: "5.5rem", md: "8.5rem" },
              width: "25%",
              marginX: { xs: "1.5rem", md: "4rem" },
              "& img": {
                transition: "transform 0.3s ease-in-out",
              },
              "&:hover img": {
                transform: "scale(1.02)",
              },
            }}
          >
            <img src={LOGO_URL} />
          </Typography>
          <Grid
            container
            columns={{ xs: 1, md: 4 }}
            spacing={{ xs: 1, md: 3 }}
            sx={{
              bottom: "0",
              width: "100%",
              position: "bottom",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              item
              xs={1}
              sx={{
                height: "50%",
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
                m: "auto",
                mt: "0px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "start",
                  m: "auto",
                }}
              >
                <Typography
                  sx={{ fontSize: "1.8rem" }}
                  color={"secondary.white"}
                >
                  Secciones
                </Typography>
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
            </Grid>
            <Grid
              item
              xs={1}
              sx={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
                textAling: "center",
                m: "auto",
                mt: "0px",
              }}
            >
              {" "}
              <Box
                sx={{
                  flexGrow: { xs: 1, md: 4 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "start",
                  m: "auto",
                }}
              >
                {" "}
                <Typography
                  sx={{ fontSize: "1.8rem" }}
                  color={"secondary.white"}
                >
                  Contacto
                </Typography>
                <Typography variant="h5" color={"secondary.white"}>
                  trashumar.contacto@gmail.com
                </Typography>
              </Box>
            </Grid>
            {/*    <Grid
              item
              sx={{
                height: "50%",
                width: "50%",
                display: "flex",
                marginTop: { xs: "0px", md: "1rem" },
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
              xs={1}
            >
              <Button
                to="https://www.instagram.com/trashumarediciones/"
                component={Link}
                color="secondary"
              >
                <FaFacebookF className="footer-icon" />
                @trashumarediciones
              </Button>
            </Grid> */}
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                m: "auto",
                mt: "0px",
              }}
            >
              {" "}
              <Box
                sx={{
                  flexGrow: { xs: 1, md: 4 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "start",
                  m: "auto",
                }}
              >
                <Typography
                  sx={{ fontSize: "1.8rem" }}
                  color={"secondary.white"}
                >
                  Seguinos
                </Typography>
                <Button
                  component={Link}
                  color="secondary"
                  to="https://www.instagram.com/trashumarediciones/"
                  sx={{
                    height: "100%",
                    fontWeight: "bold",
                    fontSize: { xs: "10px", md: "14px", lg: "16px" },
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
                  <RiInstagramFill className="footer-icon" />
                  trashumarediciones
                </Button>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography color="secondary.white" variant="p">
                Derechos de autor reservados Trashumar Ediciones©
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </AppBar>
  );
};

export default Footer;

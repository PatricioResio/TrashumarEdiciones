import { Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../constants/constants";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import "./Footer.css";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <Fade triggerOnce>
      <Container
        maxWidth="2xl"
        disableGutters
        sx={{
          display: "flex",
          mt: "20px",
          alignItems: "center",
          backgroundColor: "#3C9990",
          width: "100%",
          height: { xs: "26rem", xl: "16rem" },
          padding: { xs: "0", xl: "0" },
        }}
      >
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            display: "flex",
            height: "200px",
            width: "25%",
            marginLeft: "4rem",
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
              padding: "0",
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          ></Grid>
          <Grid
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
            <FaFacebookF className="footer-icon" />
            <Button
              to="https://www.instagram.com/trashumarediciones/"
              component={Link}
              color="secondary"
              sx={{ width: "80px", height: "80px" }}
            >
              @trashumarediciones
            </Button>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              marginTop: { xs: "0px", md: "1rem" },
            }}
            xs={1}
          >
            <FaSquareInstagram className="footer-icon" />
            <Button
              to="https://www.instagram.com/trashumarediciones/"
              component={Link}
              color="secondary"
              sx={{ width: "80px", height: "80px" }}
            >
              <Typography>@trashumarediciones</Typography>
            </Button>
          </Grid>
          <Grid
            item
            xs={1}
            sx={{
              height: "50%",
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              marginTop: { xs: "0px", md: "1rem" },
              textAling: "center",
            }}
          >
            <Button color="secondary" to="/nosotros" component={Link}>
              ALGO MAS
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: { xs: "0px", md: "1rem" },
            }}
          >
            <Typography color="secondary">
              Derechos de autor reservados Trashumar Ediciones©
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Fade>
  );
};

export default Footer;

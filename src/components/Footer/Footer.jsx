import { Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../constants/constants";
import { RiInstagramFill } from "react-icons/ri";
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
          backgroundColor: "#215E61",
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
            height: { xs: "11rem", md: "12.5rem" },
            width: "25%",
            marginX: { xs: "1.5rem", md: "4rem" },
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
            <Button
              to="https://www.instagram.com/trashumarediciones/"
              component={Link}
              color="secondary"
            >
              <FaFacebookF className="footer-icon" />
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
            <Button
              to="https://www.instagram.com/trashumarediciones/"
              component={Link}
              color="secondary"
            >
              <RiInstagramFill className="footer-icon" />
              @trashumarediciones
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
              marginTop: { xs: "10px", md: "1rem" },
            }}
          >
            <Typography color="secondary" xs={{ mt: "1rem" }}>
              Derechos de autor reservados Trashumar Ediciones©
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Fade>
  );
};

export default Footer;

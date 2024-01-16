import { Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../constants/constants";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <Container
      maxWidth="2xl"
      disableGutters
      sx={{
        display: "flex",
        mt: "20px",
        alignItems: "center",
        backgroundColor: "#3C9990",
        width: "100%",
        height: " 16rem",
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
        spacing={2}
        sx={{
          bottom: "0",
          width: "100%",
          position: "bottom",
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
            marginTop: "1rem",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
          xs={3}
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
            marginTop: "1rem",
          }}
          xs={4}
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
          xs={4}
          sx={{
            height: "50%",
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: "1rem",
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
            marginTop: "1rem",
          }}
        >
          <Typography color="secondary">
            Derechos de autor reservados Trashumar Ediciones©
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;

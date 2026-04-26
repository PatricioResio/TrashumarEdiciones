import { Box, Container, Typography, Grid, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { LOGO_URL } from '../../constants/constants';
import LazyImage from '../LazyImage/LazyImage';

function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        p: 8,
        mt: 8,
      }}
    >
      <Container maxWidth="2xl">
      <Grid container spacing={4} justifyContent="space-between"> 
          {/* Acerca de */}
          <Grid size={{ xs: 12, md: 4 }} mb={4}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Trashumar Ediciones
            </Typography>
            <Typography
                  variant="h6"
                  component={Link}
                  onClick={scrollToTop}
                  to="/"
                  sx={{
                    display: "flex",
                    borderRadius: "50%",
                    overflow:"hidden",
                    height: { xs: "6rem", sm: "5rem" },
                    width: { xs: "6rem", sm: "5rem" },
                    margin: {
                      xs: "3px 0 15px 0",
                      md: "3px 0 auto 10px",
                    },
                    "& img": {
                      transition: "transform 0.3s ease-in-out",
                    },
                    "&:hover img": {
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  <LazyImage
                    src={LOGO_URL}
                    alt="Logo de Trashumar Ediciones"
                    width="200"
                    height="200"
                     />
                </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7, opacity: 0.9, maxWidth:"50%" }}>
              Una editorial nómada, federal e independiente. Publicamos voces y proyectos que
              cruzan fronteras y culturas.
            </Typography>
          </Grid>

          {/* Enlaces Rápidos */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Enlaces Rápidos
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/" color="inherit" underline="hover" sx={{ opacity: 0.9 }}>
                Librería
              </Link>
              <Link href="/" color="inherit" underline="hover" sx={{ opacity: 0.9 }}>
                Nosotros
              </Link>
              <Link href="/" color="inherit" underline="hover" sx={{ opacity: 0.9 }}>
                Comunidad
              </Link>
              <Link href="/publicar" color="inherit" underline="hover" sx={{ opacity: 0.9 }}>
                Quiero Publicar
              </Link>
            </Box>
          </Grid>

          {/* Redes Sociales */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Síguenos
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                sx={{
                  color: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                <EmailIcon />
              </IconButton>
            </Box>
            <Typography variant="body1" sx={{ mt: 2, opacity: 0.9 }}>
              contacto@trashumarediciones.com
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            mt: 4,
            pt: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="body1" sx={{ opacity: 0.8, color:"white" }}>
            © {new Date().getFullYear()} Trashumar Ediciones. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
export default Footer;
import { Box, Container, Typography, Chip } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Fade } from "react-awesome-reveal";
import LazyImage from "../LazyImage/LazyImage";

const ProyectoPublico = ({ proyectoPublico }) => {
  const {
    fecha,
    img,
    img1,
    autor,
    descripcion,
    titulo,
    colaboradores,
  } = proyectoPublico;

  const formattedFecha =
    fecha instanceof Object
      ? new Date(fecha.seconds * 1000).toLocaleDateString()
      : fecha;

  return (
    <Container
      maxWidth="2xl"
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "60px",
        my: "1rem",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Typography
        sx={{ fontWeight: "bold", px: 2 }}
        align="center"
        variant="h2"
        component="h2"
      >
        {titulo}
      </Typography>

      {/* IMÁGENES */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: { xs: "column", lg: "row" },
          width: {xs:"100%",md:"80%"},
          m:"auto",
          px: { xs: 2, md: 6 },
        }}
      >
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center", height:{xs:"200px", md:"500px"}, width:"250px", m:"auto" }}>
          <LazyImage
            src={img}
            alt="Tapa del libro"
            imgWidth={200}
            imgHeight={500}
            maxHeight={"500px"}
            width={"350px"}
          />
        </Box>
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center", height:{xs:"200px", md:"500px"},width:"250px",m:"auto" }}>
          <LazyImage
            src={img1}
            alt="Contratapa del libro"
              maxHeight={"500px"}
              width={"350px"}
              imgWidth={200}
              imgHeight={500}
          />
        </Box>
      </Box>

      {/* DESCRIPCIÓN */}
      <Box
        sx={{
          m: "auto",
          width: { xs: "92%", md: "70%", xl: "60%" }, // ← ancho responsivo
          p: 4,
          borderRadius: "20px",
          background: "linear-gradient(to bottom, #e6ffff, #e9fffc 60%, #dafffe)",
          borderLeft: { xs: "none", lg: "6px solid #09A5B0" },
          borderTop: { xs: "6px solid #09A5B0", lg: "none" },
          borderColor: "#7AE7F5",
        }}
      >
        <Typography align="left" variant="h3" component="h3" sx={{ mb: 1 }}>
          por {autor}
        </Typography>
        <Chip
          icon={<CalendarTodayIcon sx={{ color: "primary.main" }} />}
          label={formattedFecha}
          variant="outlined"
          sx={{
            borderColor: "primary.main",
            color: "primary.main",
            fontSize: "1rem",
            py: 2.5,
            px: 1,
            mb: 3,
            fontWeight: 400,
          }}
        />
        <Typography margin={2} variant="h5">
          {descripcion}
        </Typography>
      </Box>

      {/* FOOTER EDITORIAL */}
      <Box
        sx={{
          mt: 10,
          p: 2,          
          background:"#09A5B0",
          borderRadius:"60px",
          textAlign: 'center',
          color: 'secondary.white',
        }}
      >
        <Typography variant="h6" sx={{ color: "text.primary", fontWeight: 600, mb: 1 }}>
          Trashumar Ediciones
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Una editorial nómada, federal e independiente. Publicamos voces y
          proyectos que cruzan fronteras.
        </Typography>
      </Box>
    </Container>
  );
};

export default ProyectoPublico;

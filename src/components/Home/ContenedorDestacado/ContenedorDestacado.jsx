import { Box, Button, Card, CardMedia, Chip, Container, Divider, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import {
  CONTRATAPA_HIPPIES,
  ID_PROYECTO_DESTACADO,
  TAPA_HIPPIES,
} from "../../../constants/constants";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { DESCRIPCION_ARTICULO_DESTACADO } from "../../../constants/Textos";
import "./ContenedorDestacado.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LazyImage from "../../LazyImage/LazyImage";

const ContenedorDestacado = () => {
  const Descripcion = DESCRIPCION_ARTICULO_DESTACADO.slice(0, 254);
  return (
    <Box sx={{ bgcolor: 'background.default',  py: 6 }}>
    <Paper sx={{    m:"auto",
      maxWidth:{xs:"95vw",md:"70vw"},
      height: {xs:"140vh",lg:'100vh'},
      p:4,
      borderRadius:"20px",
      background:"linear-gradient(to bottom, #e6ffff, #e9fffc 60%, #dafffe)",
      borderLeft: {
        xs: "none",
        lg: "6px solid #09A5B0",
      },
      borderTop: {
        xs: "6px solid #09A5B0",
        lg: "none",
      },
      borderColor: "#7AE7F5",}}>
   
      <Box
  sx={{
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "column",
      lg: "row",
    },
    gap: 4,
    alignItems: "stretch",
  }}
>
  <Box
  sx={{
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "column",
      lg: "row",
    },
    gap: {xs:0, md:1},
    margin:"auto",
    width: {
      xs: "65%",
      sm:"45%",
      md:"50%",
      lg: "50%",
      xl: "35%"
    },
  }}
>
  <Card
    elevation={0}
    sx={{
      width: {xs:"100%",md:"80%"},
      borderRadius: 3,
      boxShadow: "none",
      background: "transparent",
      border: "none",
      objectFit: "cover",
      p: 0,
      margin:"auto",
    }}
  >
    <LazyImage
      src={TAPA_HIPPIES}
      alt="Tapa Hippies"
      priority={false} 
      imgWidth={1920}
      imgHeight={1080}
      height={{xs:"45vh", lg:"55vh"}}
    />
  </Card>
</Box>
 
  <Box
    elevation={2}
    sx={{
      flex: 1,
      p: { xs: 3, md: 0 },
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
    }}
  > <Typography
  variant="h4"
  component="h3"
  sx={{
    lineHeight: 1.2,
  }}
>
  El día en que los hippies descubrieron los sahumerios
</Typography>
<Box>

      <Typography
      variant="h6"
      sx={{
        lineHeight: 1.8,
        my:2,
      }}
    >
      Pablo Atanasópulos    </Typography>
    <Chip
         icon={<CalendarTodayIcon sx={{ color: 'primary.main' }} />}
            label="19/3/2024"
            variant="outlined"
            sx={{
              borderColor: 'primary.main',
              color: 'primary.main',
              fontSize: '1rem',
              py: 2.5,
              px: 1,
              mb:3,
              fontWeight: 400,
            }}
          />
    </Box>
    <Divider color={"#17B8B8"}  sx={{ mb: 3, }} />
    <Typography
      variant="h4"
      component="h4"
      sx={{
        mb: 1,
      }}
    >
      Sobre este libro
    </Typography> 
    <Typography
      variant="h5"
      sx={{
        lineHeight: 1.2,
        textAlign: "justify",
        width:"90%",
        margin:"auto"
      }}
    >
    {Descripcion}
    </Typography>
    <Button component={Link}
   to={`/proyecto/${ID_PROYECTO_DESTACADO}`} variant="contained" 
   sx={{ 
    color:"white",
    width:"60%",
    fontWeight:"600",
    margin: "30px auto 0 auto ",
    '&:hover': {
      bgcolor: 'primary.dark',
      transform: 'translateY(-2px)',
      boxShadow: '0 10px 20px rgba(23, 184, 184, 0.35)',
    },
    transition: 'all 0.3s ease',
  
  }}>Leer más</Button>
  </Box>
</Box>

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
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            mb: 1,
          }}
        >
          Trashumar Ediciones
        </Typography>
        <Typography
        variant="h6"
        fontWeight={300}
          sx={{
            color: 'secondary.white',
          }}
        >
          Una editorial nómada, federal e independiente. Publicamos voces y proyectos que
          cruzan fronteras.
        </Typography>
      </Box>
    </Paper>
  </Box>
);
}

export default ContenedorDestacado;

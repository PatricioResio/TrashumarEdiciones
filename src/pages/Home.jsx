import { Box, Container, Typography } from "@mui/material";
import ContenedorProyectos from "../components/ContenedorProyectos/ContenedorProyectos";
import ContenedorPerfiles from "../components/ContenedorPerfiles/ContenedorPerfiles";
import HomeSection from "../components/HomeSection/HomeSection";

const Home = () => {
  return (
    <>
      <HomeSection />
      <section>
        <Box
          maxWidth="100%"
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            margin: "4rem 0",
            gap: 4,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#6BBCA8",
              height: "30rem",
              justifyContent: "center",
              border: "1px solid #3F7D92",
              borderRadius: "20px",
              width: "85%",
              margin: "15px auto",
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontFamily: "roboto",
                fontSize: "30px",
                fontWeight: "bold",
                color: "#00333D",
              }}
            >
              Proyectos
            </Typography>
            <ContenedorProyectos />
          </Box>
          <Box
            sx={{
              backgroundColor: "#6BBCA8",
              height: "30rem",
              justifyContent: "center",
              border: "1px solid #3F7D92",
              borderRadius: "20px",
              width: "85%",
              margin: "15px auto",
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontFamily: "roboto",
                fontSize: "30px",
                fontWeight: "bold",
                color: "#00333D",
              }}
            >
              Perfiles
            </Typography>
            <ContenedorPerfiles />
          </Box>
        </Box>
      </section>
    </>
  );
};

export default Home;

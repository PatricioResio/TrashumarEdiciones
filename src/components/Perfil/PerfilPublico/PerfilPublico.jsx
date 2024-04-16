import { Box, Container, IconButton, Typography } from "@mui/material";
import "./Perfil.css";
import ContenedorProyectosPerfil from "../ContenedorProyectosPerfil/ContenedorProyectosPerfil";
import ContenedorColaboraciones from "../ContenedorColaboraciones/ContenedorColaboraciones";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

const PerfilPublico = ({ nombrePublico, avatar, oficios }) => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        width: "95%",
        m: "auto",
        mt: "40px",
        backgroundColor: "#4d7a77",
        borderRadius: "15px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          m: "50px",
          width: "700px",
          height: "60vh",
          backgroundColor: "#4d7a77",
          borderRadius: "15px",
        }}
      >
        <Container
          maxWidth="2xl"
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "2px solid #4d7a77",
            borderRadius: "20%",
            minHeight: "25vh",
            height: "30vh",
            width: "200px",
            backgroundColor: "#3c9990",
            marginRight: "0px",
            gap: "0px",
          }}
        >
          <Typography
            gutterBottom
            variant="h4"
            sx={{ fontWeight: "bold", marginRight: "0px" }}
            component="h4"
          >
            Mis oficios
          </Typography>
          <Container sx={{ marginLeft: "0px" }}>
            {!oficios || oficios.lenght === 0 ? (
              <Typography variant="h5" component="h5">
                No hay ningun oficio registrado todavía
              </Typography>
            ) : (
              oficios.map((oficio) => (
                <Typography key={oficio} variant="h5" component="h5">
                  {oficio}
                </Typography>
              ))
            )}
          </Container>
        </Container>
        <Container
          maxWidth="2xl"
          sx={{
            width: "400px",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            m: "auto auto auto -4px",
            border: "2px solid #3c9990",
            borderRadius: "20%",
            backgroundColor: "#6BBCA8",
            position: "relative",
          }}
        >
          <Box
            component="img"
            sx={{ position: "absolute", top: "0", margin: "50px" }}
            className="img-perfil-card"
            src={!currentUser ? "No se encontro usuario" : currentUser.avatar}
            alt="foto"
          />
          <Typography variant="h3" paragraph fontWeight="bold">
            {!currentUser
              ? "No se encontro usuario"
              : currentUser.nombrePublico}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/*             <IconButton
              variant="contained"
              color="tertiary"
              onClick={handleCardButton}
              sx={{ borderRadius: "50%" }}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </IconButton> */}
            <Typography variant="h5" fontWeight="bold">
              Datos personales
            </Typography>
          </Box>
          {!currentUser.facebook ? (
            <Typography></Typography>
          ) : (
            <Typography></Typography>
          )}
          {!currentUser.instagram ? (
            <Typography></Typography>
          ) : (
            <Typography>Instagram</Typography>
          )}
          {!currentUser.x ? (
            <Typography></Typography>
          ) : (
            <Typography>X</Typography>
          )}
          {!currentUser.email ? (
            <Typography></Typography>
          ) : (
            <Typography>email</Typography>
          )}
          {!currentUser.telefonoPublico ? (
            <Typography></Typography>
          ) : (
            <Typography>TelefonoPublico</Typography>
          )}
        </Container>
      </Container>

      <Box component="article" sx={{ height: "100vh", width: "900px" }}>
        <ContenedorProyectosPerfil />
      </Box>
      <Box component="article" sx={{ height: "100vh", width: "900px" }}>
        <ContenedorColaboraciones />
      </Box>
    </Box>
  );
};

export default PerfilPublico;

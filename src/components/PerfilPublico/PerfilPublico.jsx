import { Container, Typography } from "@mui/material";
import "./Perfil.css";
const PerfilPublico = ({ nombrePublico, avatar, oficios }) => {
  return (
    <main className="perfil-main">
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid #4d7a77",
          borderRadius: "50px",
          minHeight: "25vh",
          height: "40vh",
          width: "200px",
          mr: "0",
          paddingTop: "0",
          backgroundColor: "#3c9990",
        }}
      >
        <Typography
          gutterBottom
          variant="h4"
          sx={{ fontWeight: "bold" }}
          component="h4"
        >
          Mis oficios
        </Typography>
        <Container sx={{}}>
          {oficios.length === 0 ? (
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
      <section className="perfil-card-container">
        <img
          className="img-perfil-card"
          src={!avatar ? "No se encontro usuario" : avatar}
          alt="foto"
        />
        <h2 className="h1-perfil-card">
          {!nombrePublico ? "No se encontro usuario" : nombrePublico}
        </h2>
        <Typography> </Typography>
      </section>
    </main>
  );
};

export default PerfilPublico;

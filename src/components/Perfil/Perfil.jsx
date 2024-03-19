import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Perfil.css";
import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Perfil = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate("/registroPerfil");
  const handleCardButton = () => {
    navigate("/infoPerfil");
  };
  console.log(currentUser);
  return (
    <main className="perfil-main">
      <section className="perfil-card-container">
        <img
          className="img-perfil-card"
          src={!currentUser ? "No se encontro usuario" : currentUser.avatar}
          alt="foto"
        />
        <h2 className="h1-perfil-card">
          {!currentUser ? "No se encontro usuario" : currentUser.nombrePublico}
        </h2>
        <span>
          <p>{!currentUser ? "No se encontro usuario" : currentUser.oficio}</p>
        </span>
        <p></p>
        <Box>Facebook</Box>
        <Box>Instagram</Box>
        <Box>X</Box>
        <Box>Gmail</Box>
        <Box></Box>
        <Button color="secondary" onClick={handleCardButton}>
          Editar información
        </Button>
      </section>
      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h2" component="h2">
          Oficios
        </Typography>
        {!currentUser.oficios ? (
          <Typography variant="h4" component="h4">
            No hay ningun oficio registrado todavía
          </Typography>
        ) : (
          currentUser.oficios.map(() => {
            <Typography
              key={currentUser.oficios.map}
              variant="h5"
              component="h5"
            >
              {currentUser.oficios.value}
            </Typography>;
          })
        )}
      </Container>
    </main>
  );
};

export default Perfil;

import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Perfil.css";
import SectionPerfil from "../SectionPerfil/SectionPerfil";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Perfil = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate("/registroPerfil");
  const handleCardButton = () => {
    navigate("/infoPerfil");
  };

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
        <Button color="secondary" onClick={handleCardButton}>
          {" "}
          Editar información{" "}
        </Button>
      </section>
    </main>
  );
};

export default Perfil;

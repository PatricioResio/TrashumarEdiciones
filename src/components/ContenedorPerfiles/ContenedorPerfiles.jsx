import { useState, useEffect } from "react";
import { getPerfiles } from "../../api/api";
import FilaPerfiles from "../FilaPerfiles/FilaPerfiles";
import { CircularProgress, Container } from "@mui/material";
import usePerfiles from "../../hooks/usePerfiles";

const ContenedorPerfiles = () => {
  const { perfiles, loading } = usePerfiles();

  return (
    <Container
      maxWidth="2xl"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "15px",
      }}
    >
      {loading ? <CircularProgress /> : <FilaPerfiles perfiles={perfiles} />}
    </Container>
  );
};

export default ContenedorPerfiles;

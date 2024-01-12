import { useState, useEffect } from "react";
import { getPerfiles } from "../../api/api";
import FilaPerfiles from "../FilaPerfiles/FilaPerfiles";
import { CircularProgress, Container } from "@mui/material";

const ContenedorPerfiles = () => {
  const [perfiles, setPerfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPerfiles = async () => {
      const perfiles = await getPerfiles();
      setPerfiles(perfiles);
      setLoading(false);
    };
    fetchPerfiles();
  }, []);

  return (
    <Container
      maxWidth="2xl"
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        margin: "15px",
      }}
    >
      {loading ? <CircularProgress /> : <FilaPerfiles perfiles={perfiles} />}
    </Container>
  );
};

export default ContenedorPerfiles;

import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Fade } from "react-awesome-reveal";
import { CircularProgress, Container, Typography } from "@mui/material";
import FormRegistro from "../../Forms/FormRegistro/FormRegistro";

const FormRegistroRouter = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <Container disableGutters maxWidth="2xl" sx={{ height: "100vh", m: "0" }}>
      {loading === true ? (
        <>
          <CircularProgress />
        </>
      ) : (
        <FormRegistro />
      )}
    </Container>
  );
};

export default FormRegistroRouter;

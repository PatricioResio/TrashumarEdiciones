import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const ContactForm = () => {
  const initialValue = { nombre: "", mensaje: "", email: "" };
  const [contactForm, setContactForm] = useState([initialValue]);
  const handlerChange = () => {};
  const handlerSubmit = () => {};
  return (
    <>
      <Box
        component="form"
        onSubmit={handlerSubmit}
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ margin: "7px", mt: "100px" }}
          component="h2"
          variant="h2"
        >
          Querias contactarnos?
        </Typography>
        <Typography component="h3" variant="h6">
          Acá podes hablar sin prejuicios
        </Typography>
        <TextField
          sx={{ margin: "7px" }}
          label="Nombre"
          name="nombre"
          variant="outlined"
          value={contactForm.nombre}
          onChange={handlerChange}
        />
        <TextField
          sx={{ margin: "7px" }}
          label="Email"
          name="email"
          variant="outlined"
          value={contactForm.email}
          onChange={handlerChange}
          /*           error={!!error && error.includes("Email")} // Error específico
          helperText={!!error && error.includes("Email") ? error : ""} */
        />
        <TextField
          component="textArea"
          sx={{
            width: "30rem",
            height: "15rem",
            margin: "7px",
            borderColor: "",
          }}
          label="mensaje"
          name="mensaje"
          variant="outlined"
          value={contactForm.mensaje}
          onChange={handlerChange}
          /*        error={!!error && error.includes("mensaje")} // Error específico
          helperText={!!error && error.includes("mensaje") ? error : ""} */
        />
        <Button>Enviar mensaje</Button>
      </Box>
    </>
  );
};

export default ContactForm;

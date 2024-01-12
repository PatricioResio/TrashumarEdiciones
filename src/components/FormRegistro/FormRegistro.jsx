import { Box, TextField, Typography, Button, Container } from "@mui/material";
import { DEFAULT_PERFIL_FOTO } from "../../constants/constants";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const FormRegistro = () => {
  const { currentUser, registrar, navigate } = useContext(AuthContext);

  const valorInicial = {
    nombre: "",
    nombrePublico: "",
    email: "",
    emailConfirm: "",
    telefono: "",
    registroTerminado: false,
    avatar: DEFAULT_PERFIL_FOTO,
  };

  const [formUser, setFormUser] = useState(valorInicial);
  const [error, setError] = useState("");

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setFormUser((prevUser) => ({ ...prevUser, [name]: value }));
    console.log(formUser);
  };

  const handlerForm = async (e) => {
    e.preventDefault();
    const { nombre, nombrePublico, email, telefono, emailConfirm } = formUser;
    if (!nombre || !nombrePublico || !email || !telefono || !emailConfirm) {
      setError("Por favor complete los campos");
      console.log(error);
      return;
    }
    if (email !== emailConfirm) {
      setError("emails are diferents");
      console.log(error);
      return;
    } else {
      try {
        await registrar(formUser);
        navigate("/miperfil");
      } catch (error) {
        console.error("Error durante el registro:", error.message);
        setError("Error durante el registro. Por favor, inténtalo de nuevo.");
      }
    }
  };
  return (
    <Container
      sx={{
        minHeight: "90vh",
        margin: "6rem auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{ margin: "2rem", justifyContent: "center", display: "flex" }}
        component="h1"
        variant="outlined"
      >
        Registrate!
      </Typography>

      <Box
        component="form"
        onSubmit={(e) => handlerForm(e)}
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "5px",
        }}
      >
        <TextField
          sx={{ margin: "7px" }}
          label="Nombre"
          name="nombre"
          variant="outlined"
          value={formUser.nombre}
          onChange={(e) => handlerChange(e)}
        />
        <TextField
          sx={{ margin: "7px" }}
          label="Nombre publico"
          name="nombrePublico"
          variant="outlined"
          value={formUser.nombrePublico}
          onChange={handlerChange}
        />
        <TextField
          sx={{ margin: "7px" }}
          label="Email"
          name="email"
          variant="outlined"
          value={formUser.email}
          onChange={handlerChange}
        />
        <TextField
          sx={{ margin: "7px" }}
          label="Confimacion"
          name="emailConfirm"
          variant="outlined"
          value={formUser.emailConfirm}
          onChange={handlerChange}
        />
        <TextField
          sx={{ margin: "7px" }}
          label="Telefono"
          name="telefono"
          variant="outlined"
          value={formUser.telefono}
          onChange={handlerChange}
        />
        <Button
          type="submit"
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            boxShadow: "inherit",
          }}
          variant="contained"
        >
          {" "}
          Registrarme!
        </Button>
      </Box>
    </Container>
  );
};

export default FormRegistro;

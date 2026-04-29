import {
  Box, TextField, Checkbox, Typography, Button, Container,
  FormControl, FormControlLabel, FormGroup, FormHelperText,
  LinearProgress, Snackbar, Alert,
} from "@mui/material";
import { DEFAULT_PERFIL_FOTO } from "../../../constants/constants";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Fade } from "react-awesome-reveal";
import useProfileUploader from "../../../hooks/useProfileUploader";
import AddressAutocompleteWrapper from "./AddressAutocompleteWrapper";

const FormRegistro = () => {
  const { registrar, navigate, currentUser, newUser } = useContext(AuthContext);

  const [valorInicial] = useState({
    nombre: "", nombrePublico: "", email: "", emailConfirm: "",
    telefono: "",
    oficios: [
      { nombre: "Escritor", valor: false },
      { nombre: "Editor", valor: false },
      { nombre: "Corrector", valor: false },
      { nombre: "Corrector de estilos", valor: false },
      { nombre: "Lector cero", valor: false },
      { nombre: "Traductor", valor: false },
      { nombre: "Dibujante", valor: false },
      { nombre: "Artista Grafico", valor: false },
      { nombre: "Fotografo", valor: false },
    ],
    registroTerminado: false, distribuidor: false,
    zonaDistribuidor: { lat: 0, lng: 0 }, address: "", radio: "",
    avatar: DEFAULT_PERFIL_FOTO, facebookForm: "", instagramForm: "",
    xForm: "", linkedinForm: "", explicarPerfil: "", metodosVenta: "",
  });

  const [formUser, setFormUser] = useState(valorInicial);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "error" });

  const showSnackbar = (message, severity = "error") => {
    setSnackbar({ open: true, message, severity });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  useEffect(() => {
    if (currentUser && currentUser !== formUser) {
      setFormUser({ ...currentUser });
    }
  }, [currentUser]);

  const handlerChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "distribuidor") {
      setFormUser((prev) => ({ ...prev, distribuidor: checked }));
    } else if (name === "address" && value !== "") {
      setFormUser((prev) => ({ ...prev, [name]: value }));
    } else if (type === "checkbox") {
      setFormUser((prev) => ({
        ...prev,
        oficios: prev.oficios.map((oficio, index) =>
          index.toString() === name ? { ...oficio, valor: checked } : oficio
        ),
      }));
    } else {
      setFormUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handlerForm = async (e) => {
    e.preventDefault();
    const { nombre, nombrePublico, email, telefono, emailConfirm } = formUser;

    if (!nombre || !nombrePublico || !email || !telefono || !emailConfirm) {
      showSnackbar("Por favor completá todos los campos obligatorios.");
      return;
    }
    if (email !== emailConfirm) {
      showSnackbar("Los emails no coinciden.");
      return;
    }
    try {
      await registrar(formUser);
      showSnackbar(newUser ? "¡Registro completado!" : "¡Perfil actualizado!", "success");
      setTimeout(() => navigate("/miperfil"), 1500);
    } catch (error) {
      console.error("Error durante el registro:", error.message);
      showSnackbar("Error durante el registro. Por favor, intentá de nuevo.");
    }
  };

  const { image, url, progress, handleImageChange, handleUpload } =
    useProfileUploader(formUser.userId, handlerChange);

  return (
    <Container
      maxWidth="2xl"
      sx={{
        margin: "6rem auto", display: "flex", flexDirection: "column",
        width: "80%", borderRadius: "15px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", bgcolor: "#DBFFFE",
      }}
    >
      <Fade triggerOnce>
        <Typography
          sx={{ margin: "2rem", justifyContent: "center", display: "flex" }}
          component="h1" variant="h2" fontWeight="bold"
        >
          {newUser ? "Registrate!" : "Tu perfil"}
        </Typography>
      </Fade>

      <Box
        component="form"
        onSubmit={handlerForm}
        sx={{
          borderBottom: 1, width: "80%", display: "flex", flexDirection: "column",
          margin: "auto auto 4rem auto", borderRadius: "15px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", bgcolor: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <Container sx={{ display: "flex", flexDirection: { xs: "column", md: "column", lg: "row" },justifyContent:"space-around",width: "80%" }}>
          <Container sx={{ display: "flex", flexDirection: "column", margin: "auto", alignItems: "space-between", justifyContent: "center", width: "100%" }}>
            <Typography component="h2" align="center" variant="h5" gutterBottom>
              Información Profesional
            </Typography>
            <FormHelperText>Los datos de la información profesional son obligatorios</FormHelperText>
            <TextField sx={{ margin: "7px" }} label="Nombre" name="nombre" variant="outlined" value={formUser.nombre} onChange={handlerChange} />
            <TextField sx={{ margin: "7px" }} label="Nombre público" name="nombrePublico" variant="outlined" value={formUser.nombrePublico} onChange={handlerChange} />
            <TextField sx={{ margin: "7px" }} label="Email" name="email" variant="outlined" value={formUser.email} onChange={handlerChange} />
            <TextField sx={{ margin: "7px" }} label="Confirmación email" name="emailConfirm" variant="outlined" value={formUser.emailConfirm} onChange={handlerChange} />
            <TextField sx={{ margin: "7px" }} label="Teléfono" name="telefono" variant="outlined" value={formUser.telefono} onChange={handlerChange} />
            <TextField sx={{ margin: "7px" }} name="explicarPerfil" label="Descripción de tu trabajo" variant="outlined" value={formUser.explicarPerfil} onChange={handlerChange} />
          </Container>

          <Container disableGutters sx={{ display: "flex", m: "2rem 3rem", justifyContent: "start" }}>
            <FormControl component="fieldset" variant="standard">
              <FormGroup>
                <Typography component="h5" align="left" variant="h5" gutterBottom>¿Cuál es tu oficio?</Typography>
                {formUser.oficios.map((oficio, index) => (
                  <FormControlLabel
                    key={index}
                    control={<Checkbox name={index.toString()} checked={oficio.valor} onChange={handlerChange} />}
                    label={`Soy ${oficio.nombre}`}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Container>
        </Container>

        <Container disableGutters sx={{ display: "flex", flexDirection: "column", width: "72%", justifyContent: "start", marginLeft: "auto" }}>
          <Typography component="h3" align="left" variant="h5" gutterBottom>Datos personales</Typography>
          <TextField sx={{ marginBottom: "15px" }} name="facebookForm" label="Facebook" variant="outlined" value={formUser.facebookForm} onChange={handlerChange} />
          <TextField sx={{ marginBottom: "15px" }} name="instagramForm" label="Instagram" variant="outlined" value={formUser.instagramForm} onChange={handlerChange} />
          <TextField sx={{ marginBottom: "15px" }} name="xForm" label="X" variant="outlined" value={formUser.xForm} onChange={handlerChange} />
          <TextField sx={{ marginBottom: "15px" }} name="linkedinForm" label="LinkedIn" variant="outlined" value={formUser.linkedinForm} onChange={handlerChange} />

          <Box sx={{ p: 3 }}>
            <Typography variant="h5">Subir foto de perfil</Typography>
            <label htmlFor="file-upload" style={{ display: "block", marginBottom: "8px" }}>Seleccionar archivo:</label>
            <input id="file-upload" type="file" onChange={handleImageChange} style={{ display: "block", marginBottom: "16px" }} />
            <LinearProgress variant="determinate" value={progress} sx={{ mb: 2, width:"30%" }} />
            {url && <Box component="img" src={url} sx={{ mt: 2, width: "8rem", height: "8rem", borderRadius:"50%", display:"block" }} />}
            <Button onClick={handleUpload} disabled={!image} variant="contained" sx={{ mt: 2 }}>Subir imagen</Button>
          </Box>

          <FormControlLabel
            control={<Checkbox name="distribuidor" checked={formUser.distribuidor} onChange={handlerChange} />}
            label="Soy distribuidor (personas físicas)"
          />
          <Box sx={{ display: formUser.distribuidor ? "flex" : "none", flexDirection: "column", gap: 2, marginTop: 4 }}>
            <FormHelperText>Seleccioná la zona donde trabajás, tu método de trabajo y el radio en que te manejás.</FormHelperText>
            <FormHelperText>Detallá tus métodos de venta</FormHelperText>
            <TextField label="Método de venta" name="metodosVenta" value={formUser.metodosVenta} onChange={handlerChange} fullWidth />
            <TextField label="Radio de trabajo (km)" name="radio" value={formUser.radio} onChange={handlerChange} fullWidth />
            <AddressAutocompleteWrapper handlerChange={handlerChange} />
          </Box>

          <Button type="submit"   sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    fontWeight: 600,
                    margin:"auto auto 20px auto",
                    width:"80%",
                    px: 4,
                    py: 1.8,
                    fontSize: '1rem',
                    alignSelf: 'flex-start',
                    borderRadius: 2,
                    '&:hover': {
                      bgcolor: 'primary.dark',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 20px rgba(23, 184, 184, 0.35)',
                    },
                    transition: 'all 0.3s ease',}} variant="contained">
            {newUser ? "Registrarme" : "Actualizar"}
          </Button>
        </Container>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} variant="filled">
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default FormRegistro;
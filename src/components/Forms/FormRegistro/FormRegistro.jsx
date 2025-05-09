import {
  Box,
  TextField,
  Checkbox,
  Typography,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  LinearProgress,
} from "@mui/material";
import { DEFAULT_PERFIL_FOTO } from "../../../constants/constants";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Fade } from "react-awesome-reveal";
import ProfilePictureUploader from "../ProfilePicture/ProfilePicture";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import useProfileUploader from "../../../hooks/useProfileUploader";
import AddressAutocomplete from "./AddressAutocomplete";

const FormRegistro = () => {
  const { registrar, navigate, currentUser, newUser } = useContext(AuthContext);

  const [valorInicial, setValorInicial] = useState({
    nombre: "",
    nombrePublico: "",
    email: "",
    emailConfirm: "",
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
    registroTerminado: false,
    distribuidor: false,
    zonaDistribuidor: { lat: 0, lng: 0 },
    ubicacion: "",
    radio: "",
    avatar: DEFAULT_PERFIL_FOTO,
    facebookForm: "",
    instagramForm: "",
    xForm: "",
    linkedinForm: "",
    explicarPerfil: "",
    metodosVenta: "",
  });
  const [formUser, setFormUser] = useState(valorInicial);
  const [error, setError] = useState("");

  useEffect(() => {
    if (currentUser && currentUser != formUser) {
      setFormUser({ ...currentUser });
    } else {
      return;
    }
  }, [currentUser]);

  const handlerChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "distribuidor") {
      setFormUser((prevUser) => ({
        ...prevUser,
        distribuidor: checked,
      }));
    } else if (type === "checkbox") {
      setFormUser((prevUser) => ({
        ...prevUser,
        oficios: prevUser.oficios.map((oficio, index) =>
          index.toString() === name ? { ...oficio, valor: checked } : oficio
        ),
      }));
    } else {
      setFormUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
    console.log(formUser);
  };

  const handlerForm = async (e) => {
    e.preventDefault();
    const { nombre, nombrePublico, email, telefono, emailConfirm } = formUser;
    if (!nombre || !nombrePublico || !email || !telefono || !emailConfirm) {
      setError("Por favor complete los campos");
      alert(error);
      return;
    }
    if (email !== emailConfirm) {
      setError("el email no coincide");
      alert(error);
      return;
    }
    try {
      await registrar(formUser);
      navigate("/miperfil");
    } catch (error) {
      console.error("Error durante el registro:", error.message);
      setError("Error durante el registro. Por favor, inténtalo de nuevo.");
    }
  };

  const { image, url, progress, handleImageChange, handleUpload } =
    useProfileUploader(formUser.userId, handlerChange);

  return (
    <Container
      maxWidth="2xl"
      sx={{
        margin: "6rem auto",
        display: "flex",
        flexDirection: "column",
        width: "80%",
        border: "2px solid #3C9990",
        borderRadius: "15px",
      }}
    >
      <Fade triggerOnce>
        <Typography
          sx={{ margin: "2rem", justifyContent: "center", display: "flex" }}
          component="h1"
          variant="h2"
          fontWeight="bold"
        >
          {newUser ? "Registrate!" : "Tu información"}
        </Typography>
      </Fade>
      <Box
        component="form"
        onSubmit={(e) => handlerForm(e)}
        sx={{
          borderBottom: 1,
          width: "100%",
          borderColor: "divider",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "5px",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "column", lg: "row" },
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              component="h4"
              id="outlined-basic"
              align="left"
              variant="h4"
              gutterBottom
            >
              Información Profesional
            </Typography>
            <FormHelperText>
              Los datos de la informacion profesional son obligatorios
            </FormHelperText>
            <TextField
              sx={{ margin: "7px" }}
              label="Nombre"
              name="nombre"
              variant="outlined"
              value={formUser.nombre}
              onChange={handlerChange}
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
              error={!!error && error.includes("Email")} // Error específico
              helperText={!!error && error.includes("Email") ? error : ""}
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
            <TextField
              sx={{ margin: "7px" }}
              id="explicarPerfil"
              name="explicarPerfil"
              label="Acá podes hacer una descripción de tu trabajo"
              variant="outlined"
              value={formUser.explicarPerfil}
              onChange={handlerChange}
            />
          </Container>
          <Container
            disableGutters
            sx={{ display: "flex", m: "2rem 3rem", justifyContent: "start" }}
          >
            <FormControl component="fieldset" variant="standard">
              <FormGroup>
                <Typography
                  component="h5"
                  id="outlined-basic"
                  align="left"
                  variant="h5"
                  gutterBottom
                >
                  ¿Cuál es tu oficio?
                </Typography>
                {formUser.oficios.map((oficio, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        sx={{ fontSize: "40px" }}
                        name={index.toString()}
                        checked={oficio.valor}
                        onChange={handlerChange}
                      />
                    }
                    label={`Soy ${oficio.nombre}`}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Container>
        </Container>

        <Container
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "72%",
            justifyContent: "start",
            marginLeft: "auto",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                name="distribuidor"
                checked={formUser.distribuidor}
                onChange={handlerChange}
              />
            }
            label="Soy distribuidor (personas fisicas)"
          />
          <Box
            sx={{
              display: formUser.distribuidor === true ? "flex" : "none",
              flexDirection: "column",
              gap: 2,
              marginTop: 4,
            }}
          >
            <FormHelperText>
              Selecciona la zona donde trabajas, tu metodo de trabajo y si es
              necesario el radio en que te manejas.
            </FormHelperText>
            <AddressAutocomplete />
            <FormHelperText>Detalla tus metodos de venta</FormHelperText>
            <TextField
              label="Metodo de venta"
              name="metodoVenta"
              value={formUser.radio}
              onChange={handlerChange}
              fullWidth
            />{" "}
            <TextField
              label="Radio de trabajo (km)"
              name="radio"
              value={formUser.radio}
              onChange={handlerChange}
              fullWidth
            />
          </Box>
          <Typography
            component="h4"
            id="outlined-basic"
            align="left"
            variant="h4"
            gutterBottom
          >
            Datos personales
          </Typography>
          <TextField
            id="facebookForm"
            name="facebookForm"
            label="facebook"
            variant="outlined"
            value={formUser.facebookForm}
            onChange={handlerChange}
            /*           error={
            formik.touched.facebookForm && Boolean(formik.errors.facebookForm)
          }
          helperText={formik.touched.facebookForm && formik.errors.facebookForm} */
          />
          <TextField
            id="instagramForm"
            label="Instagram"
            name="instagramForm"
            variant="outlined"
            value={formUser.instagramForm}
            onChange={handlerChange}
            /*           error={
            formik.touched.instagramForm && Boolean(formik.errors.instagramForm)
          }
          helperText={
            formik.touched.instagramForm && formik.errors.instagramForm
          } */
          />
          <TextField
            id="xForm"
            name="xForm"
            label="X"
            variant="outlined"
            value={formUser.xForm}
            onChange={handlerChange}
            /*           error={formik.touched.xForm && Boolean(formik.errors.xForm)}
          helperText={formik.touched.xForm && formik.errors.xForm} */
          />
          <TextField
            id="linkedinForm"
            name="linkedinForm"
            label="linkedinForm"
            variant="outlined"
            value={formUser.linkedinForm}
            onChange={handlerChange}
          />

          <Box sx={{ p: 3 }}>
            <Typography variant="h5">Subir foto de perfil</Typography>

            <label
              htmlFor="file-upload"
              style={{ display: "block", marginBottom: "8px" }}
            >
              Seleccionar archivo:
            </label>
            <input
              id="file-upload"
              type="file"
              onChange={handleImageChange}
              style={{ display: "block", marginBottom: "16px" }}
            />
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{ mb: 2 }}
            />
            <Button
              onClick={handleUpload}
              disabled={!image}
              variant="contained"
              sx={{ mt: 2 }}
            >
              Subir
            </Button>
            {url && (
              <Typography sx={{ mt: 2 }}>URL de la imagen: {url}</Typography>
            )}
            {url && (
              <TextField
                name="avatar"
                id="avatar"
                value={formUser.avatar}
                onChange={handlerChange}
                sx={{ mt: 2 }}
              >
                {url}
              </TextField>
            )}
          </Box>

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
            {newUser ? "Registrarme" : "Actualizar"}
          </Button>
          {error && <Typography color="error">{error}</Typography>}
        </Container>
      </Box>
    </Container>
  );
};

export default FormRegistro;

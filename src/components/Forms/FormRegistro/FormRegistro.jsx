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
} from "@mui/material";
import { DEFAULT_PERFIL_FOTO } from "../../../constants/constants";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Fade } from "react-awesome-reveal";

const FormRegistro = () => {
  const { registrar, navigate, currentUser } = useContext(AuthContext);
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
    avatar: DEFAULT_PERFIL_FOTO,
    facebookForm: "",
    instagramForm: "",
    xForm: "",
    linkedinForm: "",
    explicarPerfil: "",
    metodosVenta: "",
  });

  useEffect(() => {
    if (currentUser) {
      setFormUser({ ...currentUser });
      console.log(valorInicial);
    } else {
      return;
    }
  }, [currentUser]);

  const [formUser, setFormUser] = useState(valorInicial);
  const [error, setError] = useState("");

  const handlerChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      // Actualiza el estado del formulario para el checkbox
      setFormUser((prevUser) => ({
        ...prevUser,
        oficios: prevUser.oficios.map((oficio, index) =>
          index.toString() === name ? { ...oficio, valor: checked } : oficio
        ),
      }));
    } else {
      // Actualiza el estado del formulario para otros campos de entrada
      setFormUser((prevUser) => ({ ...prevUser, [name]: value }));
    }
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
      setError("emails are diferents");
      alert(error);
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
      maxWidth="2xl"
      sx={{
        margin: "6rem auto",
        display: "flex",
        flexDirection: "column",
        width: "80%",
        border: "2px solid #3C9990",
        borderRadius: "15px",
        background: "#A9CBC8",
      }}
    >
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
        <Fade>
          <Typography
            sx={{ margin: "2rem", justifyContent: "center", display: "flex" }}
            component="h1"
            variant="h2"
            fontWeight="bold"
          >
            Registrate!
          </Typography>
        </Fade>
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
          <Container disableGutters sx={{ m: "auto" }}>
            <FormControl component="fieldset" variant="standard">
              <FormGroup>
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
          <Typography
            component="h4"
            id="outlined-basic"
            align="left"
            variant="h4"
            gutterBottom
          >
            Completa tus datos personales
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

            /*           error={
            formik.touched.linkedinForm && Boolean(formik.errors.linkedinForm)
          }
          helperText={formik.touched.linkedinForm && formik.errors.linkedinForm} */
          />
          <Typography
            component="h5"
            id="outlined-basic"
            align="left"
            variant="h5"
            gutterBottom
          >
            {/*         <FormControlLabel
            control={
              <Switch
              id="distribuidor"
              label="distribuidor"
              variant="outlined"
                value={formik.values.distribuidor}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.distribuidor &&
                  Boolean(formik.errors.distribuidor)
                }
                helperText={
                  formik.touched.distribuidor && formik.errors.distribuidor
                  />
                  
                  
                  label=""
                /> */}
            Soy distribuidor (personas fisicas)
          </Typography>
          <FormHelperText>
            Selecciona la zona donde trabajas, y el radio en que te manejas.
            Podes seleccionar varias distintas.
          </FormHelperText>
          <FormHelperText>Detalla tus metodos de venta</FormHelperText>
          {/*         <TextField
          id="metodosVenta"
          label="metodosVenta"
          variant="outlined"
          value={formik.values.metodosVenta}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          /*           error={
            formik.touched.metodosVenta && Boolean(formik.errors.metodosVenta)
          }
          helperText={formik.touched.metodosVenta && formik.errors.metodosVenta} 
        /> */}{" "}
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
            Registrarme!
          </Button>
        </Container>
      </Box>
    </Container>
  );
};

export default FormRegistro;

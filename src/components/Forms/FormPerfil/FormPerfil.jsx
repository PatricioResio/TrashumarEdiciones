import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { validationPerfil } from "../ValidationSchemas/ValidationSchemas";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";
import ProfilePictureUploader from "../ProfilePicture/ProfilePicture";

const FormPerfil = () => {
  const { actualizarPerfil, currentUser } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: { ...currentUser },
    validationSchema: validationPerfil,

    onSubmit: async (values) => {
      alert(JSON.stringify(values));
      await actualizarPerfil(values);
    },
  });

  return (
    <Container
      sx={{
        minHeight: "80vh",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        marginTop: "20px",
        border: "1px solid",
        borderColor: "#3C9990",
        borderRadius: "20px",
      }}
    >
      <Typography
        component="h2"
        id="outlined-basic"
        align="center"
        variant="h2"
        gutterBottom
      >
        Mi información
      </Typography>

      <Box
        component="form"
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          padding: "20px 15px",
          gap: "8px",
          flexDirection: "column",
          justifyContent: "center",
        }}
        onSubmit={formik.handleSubmit}
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
        <FormControl component="fieldset" variant="standard">
          <FormGroup>
            {formik.values.oficios.map((oficio, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    name={`oficios[${index}].valor`}
                    checked={oficio.valor}
                    onChange={formik.handleChange}
                  />
                }
                label={`Soy ${oficio.nombre}`}
              />
            ))}
          </FormGroup>
        </FormControl>
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
          label="facebook"
          variant="outlined"
          value={formik.values.facebookForm}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TextField
          id="instagramForm"
          label="Instagram"
          variant="outlined"
          value={formik.values.instagramForm}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TextField
          id="xForm"
          label="X"
          variant="outlined"
          value={formik.values.xForm}
          onChange={formik.handleChange}
        />
        <TextField
          id="linkedinForm"
          label="linkedinForm"
          variant="outlined"
          value={formik.values.linkedinForm}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {/*        <Typography
          component="h5"
          id="outlined-basic"
          align="left"
          variant="h5"
          gutterBottom
        >
          Soy distribuidor (personas fisicas)
        </Typography>
        <FormHelperText>
          Selecciona la zona donde trabajas, y el radio en que te manejas. Podes
          seleccionar varias distintas.
        </FormHelperText>

        <FormHelperText>Detalla tus metodos de venta</FormHelperText> */}
        <Button variant="contained" type="submit">
          Editar mi Información
        </Button>
      </Box>
    </Container>
  );
};

export default FormPerfil;

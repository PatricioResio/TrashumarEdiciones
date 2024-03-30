import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { validationPerfil } from "../ValidationSchemas/ValidationSchemas";

const FormPerfil = () => {
  const formik = useFormik({
    initialValues: {
      facebookForm: "",
      instagramForm: "",
      xForm: "",
      linkedinForm: "",
      oficios: {},
      escritor: false,
      otroArte: false,
      editor: false,
      corrector: false,
      correctorEstilos: false,
      lectorCero: false,
      traductor: false,
      distribuidor: false,
      dibujante: false,
      artistaGrafico: false,
      fotografo: "false",
      explicarPerfil: "",
      metodosVenta: "",
    },
    validationSchema: validationPerfil,
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
      perfilData = { ...values };
      await registrar(perfilData);
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
        Registro
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
          align="start"
          variant="h4"
          gutterBottom
        >
          Información Profesional
        </Typography>
        <FormControl component="fieldset" variant="standard">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="escritor"
                  label="escritor"
                  variant="outlined"
                  value={formik.values.escritor}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.escritor && Boolean(formik.errors.escritor)
                  }
                  helperText={formik.touched.escritor && formik.errors.escritor}
                />
              }
              label="SOY ESCRITOR O ESCRITORA"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="otroArte"
                  label="otroArte"
                  variant="outlined"
                  value={formik.values.otroArte}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.otroArte && Boolean(formik.errors.otroArte)
                  }
                  helperText={formik.touched.otroArte && formik.errors.otroArte}
                />
              }
              label="ME DEDICO A OTRAS ARTES"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="editor"
                  label="editor"
                  variant="outlined"
                  value={formik.values.editor}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.editor && Boolean(formik.errors.editor)}
                  helperText={formik.touched.editor && formik.errors.editor}
                />
              }
              label="SOY EDITOR O EDITORA"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="corrector"
                  label="corrector"
                  variant="outlined"
                  value={formik.values.corrector}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.corrector && Boolean(formik.errors.corrector)
                  }
                  helperText={
                    formik.touched.corrector && formik.errors.corrector
                  }
                />
              }
              label="HAGO CORRECCIÓN GRAMATICAL"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="correctorEstilos"
                  label="correctorEstilos"
                  variant="outlined"
                  value={formik.values.correctorEstilos}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.correctorEstilos &&
                    Boolean(formik.errors.correctorEstilos)
                  }
                  helperText={
                    formik.touched.correctorEstilos &&
                    formik.errors.correctorEstilos
                  }
                />
              }
              label="HAGO CORRECCIÓN DE ESTILO"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="lectorCero"
                  label="lectorCero"
                  variant="outlined"
                  value={formik.values.lectorCero}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.lectorCero &&
                    Boolean(formik.errors.lectorCero)
                  }
                  helperText={
                    formik.touched.lectorCero && formik.errors.lectorCero
                  }
                />
              }
              label="SOY LECTORA O LECTOR CERO"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="traductor"
                  label="traductor"
                  variant="outlined"
                  value={formik.values.traductor}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.traductor && Boolean(formik.errors.traductor)
                  }
                  helperText={
                    formik.touched.traductor && formik.errors.traductor
                  }
                />
              }
              label="SOY TRADUCTOR O TRADUCTORA / Por favor, decinos que idiomas manejas y que nivel tenes de cada uno."
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="dibujante"
                  label="dibujante"
                  variant="outlined"
                  value={formik.values.dibujante}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.dibujante && Boolean(formik.errors.dibujante)
                  }
                  helperText={
                    formik.touched.dibujante && formik.errors.dibujante
                  }
                />
              }
              label="SOY DIBUJANTE O DISEÑADOR"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="artistaGrafico"
                  label="artistaGrafico"
                  variant="outlined"
                  value={formik.values.artistaGrafico}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.artistaGrafico &&
                    Boolean(formik.errors.artistaGrafico)
                  }
                  helperText={
                    formik.touched.artistaGrafico &&
                    formik.errors.artistaGrafico
                  }
                />
              }
              label="SOY ARTISTA GRAFICO"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="fotografo"
                  label="fotografo"
                  variant="outlined"
                  value={formik.values.fotografo}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.fotografo && Boolean(formik.errors.fotografo)
                  }
                  helperText={
                    formik.touched.fotografo && formik.errors.fotografo
                  }
                />
              }
              label="SOY FOTOGRAFA O FOTOGRAFO"
            />
            <FormHelperText>
              Explicanos que artes manejas y que servicios haces.
            </FormHelperText>
            <TextField
              id="explicarPerfil"
              label="Me manejo haciendo distintos..."
              variant="outlined"
              value={formik.values.explicarPerfil}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.explicarPerfil &&
                Boolean(formik.errors.explicarPerfil)
              }
              helperText={
                formik.touched.explicarPerfil && formik.errors.explicarPerfil
              }
            />
          </FormGroup>
        </FormControl>

        <Typography
          component="h4"
          id="outlined-basic"
          align="start"
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
          error={
            formik.touched.facebookForm && Boolean(formik.errors.facebookForm)
          }
          helperText={formik.touched.facebookForm && formik.errors.facebookForm}
        />
        <TextField
          id="instagramForm"
          label="Instagram"
          variant="outlined"
          value={formik.values.instagramForm}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.instagramForm && Boolean(formik.errors.instagramForm)
          }
          helperText={
            formik.touched.instagramForm && formik.errors.instagramForm
          }
        />
        <TextField
          id="xForm"
          label="X"
          variant="outlined"
          value={formik.values.xForm}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.xForm && Boolean(formik.errors.xForm)}
          helperText={formik.touched.xForm && formik.errors.xForm}
        />
        <TextField
          id="linkedinForm"
          label="linkedinForm"
          variant="outlined"
          value={formik.values.linkedinForm}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.linkedinForm && Boolean(formik.errors.linkedinForm)
          }
          helperText={formik.touched.linkedinForm && formik.errors.linkedinForm}
        />

        <Typography
          component="h5"
          id="outlined-basic"
          align="start"
          variant="h5"
          gutterBottom
        >
          <FormControlLabel
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
                }
              />
            }
            label=""
          />
          Soy distribuidor (personas fisicas)
        </Typography>
        <FormHelperText>
          Selecciona la zona donde trabajas, y el radio en que te manejas. Podes
          seleccionar varias distintas.
        </FormHelperText>
        <FormHelperText>Detalla tus metodos de venta</FormHelperText>
        <TextField
          id="metodosVenta"
          label="metodosVenta"
          variant="outlined"
          value={formik.values.metodosVenta}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.metodosVenta && Boolean(formik.errors.metodosVenta)
          }
          helperText={formik.touched.metodosVenta && formik.errors.metodosVenta}
        />
        <Button variant="contained" type="submit">
          {" "}
          Terminar mi registro
        </Button>
      </Box>
    </Container>
  );
};

export default FormPerfil;

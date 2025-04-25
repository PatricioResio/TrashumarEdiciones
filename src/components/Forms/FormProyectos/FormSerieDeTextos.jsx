import {
  TextField,
  Checkbox,
  Typography,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useFormik } from "formik";
import { Fade } from "react-awesome-reveal";
import { validationTextoUnico } from "../ValidationSchemas/ValidationSchemas";

const FormSerieDeTextos = () => {
  const formik = useFormik({
    initialValues: {
      formato: "Quiero publicar un texto unico en la pagina",
      etapaDesarrollo: "",
      textoTieneImagenes: "",
      traducir: false,
      idiomaOriginal: "",
      idiomaATraducir: "",
      contanosMas: "",
      acuerdoComercial: "",
      acuerdoComercialPorcentaje: "",
    },
    validationSchema: validationTextoUnico,
    onSubmit: (values, { resetForm }) => {
      if (
        !values.formato ||
        !values.rolEnLaObra ||
        !values.contanosMas ||
        !values.acuerdoComercial
      ) {
        alert("Debes completar todos los campos obligatorios.");
      }
      console.log("values:", values);
      /*       const templateParams = {
            formato: values.formato,
            rolEnLaObra: values.rolEnLaObra,
            contanosMas: values.contanosMas,
            acuerdoComercial: values.acuerdoComercial,
            acuerdoComercialPorcentaje:
              values.acuerdoComercialPorcentaje || "No especificado",
            manuscritoTerminado: values.manuscritoTerminado ? "Sí" : "No",
            manuscritoTerminadoCorregido: values.manuscritoTerminadoCorregido
              ? "Sí"
              : "No",
            listoPublicar: values.listoPublicar ? "Sí" : "No",
            informeDeLectura: values.informeDeLectura ? "Sí" : "No",
            correccionGramatical: values.correccionGramatical ? "Sí" : "No",
            correccionEstilos: values.correccionEstilos ? "Sí" : "No",
            traducir: values.traducir ? "Sí" : "No",
            idiomaOriginal: values.traducir ? values.idiomaOriginal : "No aplica",
            idiomaATraducir: values.traducir ? values.idiomaATraducir : "No aplica",
            distribucionLibro: values.distribucionLibro || "No especificado",
            tipoDistribucion: values.tipoDistribucion || "No especificado",
            etapaDesarrollo: values.etapaDesarrollo || "No especificado",
          }; */
      console.log("templateParams:", templateParams);
      emailjs

        .send(
          "service_5p7dbyj",
          "template_95bik24",
          templateParams,
          "jOUKbByhllu5OVumL"
        )
        .then(
          (response) => {
            alert("Formulario enviado correctamente!");
            resetForm();
          },
          (error) => {
            console.error("Error al enviar el formulario:", error);
            alert(
              "Ocurrió un error al enviar el formulario. Intenta nuevamente."
            );
          }
        );
    },
  });
  return (
    <>
      <RadioGroup sx={{ m: "10px 0" }}>
        <Typography
          component="h4"
          id="outlined-basic"
          label="AUTORES"
          variant="outlined"
        >
          ¿En qué etapa del desarrollo te encontras?
        </Typography>

        <FormControlLabel
          control={
            <Radio
              id="etapaDesarrollo"
              label="etapaDesarrollo"
              variant="outlined"
              value="Trabajando en el texto"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              /*   error={
                  formik.touched.etapaDesarrollo &&
                  Boolean(formik.errors.etapaDesarrollo)
                }
                helperText={
                  formik.touched.etapaDesarrollo && formik.errors.etapaDesarrollo
                } */
            />
          }
          label="ESTOY TRABAJANDO EN EL TEXTO."
        />
        <FormControlLabel
          control={
            <Radio
              id="etapaDesarrollo"
              label="etapaDesarrollo"
              value="manuscrito terminado"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              /*               error={
                  formik.touched.manuscritoTerminado &&
                  Boolean(formik.errors.manuscritoTerminado)
                }
                helperText={
                  formik.touched.manuscritoTerminado &&
                  formik.errors.manuscritoTerminado
                } */
            />
          }
          label="TENGO EL MANUSCRITO TERMINADO."
        />
        <FormControlLabel
          control={
            <Radio
              id="etapaDesarrollo"
              label="etapaDesarrollo"
              variant="outlined"
              value="Manuscrito terminado y corregido"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              /*   error={
                  formik.touched.manuscritoTerminadoCorregido &&
                  Boolean(formik.errors.manuscritoTerminadoCorregido)
                }
                helperText={
                  formik.touched.manuscritoTerminadoCorregido &&
                  formik.errors.manuscritoTerminadoCorregido
                } */
            />
          }
          label="TENGO EL MANUSCRITO TERMINADO Y CORREGIDO."
        />
        <FormControlLabel
          control={
            <Radio
              id="etapaDesarrollo"
              label="etapaDesarrollo"
              variant="outlined"
              value="Manuscrito listo para publicar"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              /*   error={
                  formik.touched.listoPublicar &&
                  Boolean(formik.errors.listoPublicar)
                }
                helperText={
                  formik.touched.listoPublicar && formik.errors.listoPublicar
                }*/
            />
          }
          label="TENGO TODO LISTO PARA PUBLICAR."
        />
      </RadioGroup>

      <RadioGroup sx={{ m: "10px 0" }}>
        <Typography
          component="h4"
          id="outlined-basic"
          label="AUTORES"
          variant="outlined"
        >
          {" "}
          ¿El texto esta acompañado de una o mas imagenes?
        </Typography>
        <FormControlLabel
          control={
            <Radio
              id="imagenesProyecto"
              label="imagenesProyecto"
              value="imagenes listas"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="Si, ya las tengo listas"
        />
        <FormControlLabel
          control={
            <Radio
              id="imagenesProyecto"
              label="imagenesProyecto"
              value="imagenes a crear"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="Si, no las tengo listas."
        />
        <FormControlLabel
          control={
            <Radio
              id="imagenesProyecto"
              label="imagenesProyecto"
              value="sin imagenes"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="No incluira imagenes"
        />
      </RadioGroup>

      <FormGroup sx={{ m: "10px 0" }}>
        <Typography
          component="h4"
          id="ETAPAS"
          label="ETAPAS"
          variant="outlined"
        >
          ¿Qué etapas te hace falta cubrir?
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              id="informeDeLectura"
              label="informeDeLectura"
              variant="outlined"
              value={formik.values.informeDeLectura}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              /*   error={
                formik.touched.informeDeLectura &&
                Boolean(formik.errors.informeDeLectura)
              }
              helperText={
                formik.touched.informeDeLectura &&
                formik.errors.informeDeLectura
              } */
            />
          }
          label="INFORME DE LECTURA."
        />
        <FormControlLabel
          control={
            <Checkbox
              id="correccionGramatical"
              label="correccionGramatical"
              variant="outlined"
              value={formik.values.correccionGramatical}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              /*   error={
                formik.touched.correccionGramatical &&
                Boolean(formik.errors.correccionGramatical)
              }
              helperText={
                formik.touched.correccionGramatical &&
                formik.errors.correccionGramatical
              } */
            />
          }
          label="CORRECCIÓN GRAMATICAL."
        />
        <FormControlLabel
          control={
            <Checkbox
              id="Aquí podes explayarte"
              label="Aquí podes explayarte"
              variant="outlined"
              value={formik.values.facebookForm}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              /*   error={
                    formik.touched.facebookForm &&
                    Boolean(formik.errors.facebookForm)
                  }
                  helperText={
                    formik.touched.facebookForm && formik.errors.facebookForm
                  }*/
            />
          }
          label="TENGO EL MANUSCRITO TERMINADO Y CORREGIDO."
        />
        <FormControlLabel
          control={
            <Checkbox
              id="correccionDeEstilo"
              label="correccionDeEstilo"
              variant="outlined"
              value={formik.values.correccionEstilos}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              /*   error={
                formik.touched.correccionEstilos &&
                Boolean(formik.errors.correccionEstilos)
              }
              helperText={
                formik.touched.correccionEstilos &&
                formik.errors.correccionEstilos
              } */
            />
          }
          label="CORRECCIÓN DE ESTILO."
        />
        <FormControlLabel
          control={
            <Checkbox
              id="traduccir"
              label="traduccir"
              variant="outlined"
              v
              alue={formik.values.traducir}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              /* error={formik.touched.traducir && Boolean(formik.errors.traducir)}
              helperText={formik.touched.traducir && formik.errors.traducir}*/
            />
          }
          label="TRADUCCIÓN"
        />
      </FormGroup>
      {formik.values.traducir === true ? (
        <Fade>
          <Typography component="h4" variant="outlined">
            Traducción
          </Typography>
          <Typography
            component="h4"
            id="IDIOMA"
            label="IDIOMA"
            variant="outlined"
          >
            Selecciona el idioma original
          </Typography>
          <FormControl sx={{ m: "10px 0" }} fullWidth>
            <InputLabel id="demo-simple-select-label">
              Idioma original
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Idioma"
              value={formik.values.idiomaOriginal}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.correccionEstilos &&
                Boolean(formik.errors.correccionEstilos)
              }
            >
              <MenuItem value={10}>Español (latinoamerica)</MenuItem>
              <MenuItem value={20}>Ingles</MenuItem>
              <MenuItem value={30}>Frances</MenuItem>
              <MenuItem value={40}>Aleman</MenuItem>
              <MenuItem value={50}>Portugues</MenuItem>
              <MenuItem value={60}>Japones</MenuItem>
            </Select>
          </FormControl>
          <Typography
            component="h4"
            id="IDIOMATRADUCCION"
            label="IDIOMATRADUCCION"
            variant="outlined"
          >
            A que idioma queres traducirlo?
          </Typography>
          <FormControl sx={{ m: "10px 0" }} fullWidth>
            <InputLabel id="idiomaTraduccion">Idioma a traducir</InputLabel>
            <Select
              labelId="idiomaTraduccion"
              id="idiomaTraduccion"
              label="idiomaTraduccion"
              value={formik.values.idiomaTraduccion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.correccionEstilos &&
                Boolean(formik.errors.correccionEstilos)
              }
            >
              <MenuItem value={10}>Español (latinoamerica)</MenuItem>
              <MenuItem value={20}>Ingles</MenuItem>
              <MenuItem value={30}>Frances</MenuItem>
              <MenuItem value={40}>Aleman</MenuItem>
              <MenuItem value={50}>Portugues</MenuItem>
              <MenuItem value={60}>Japones</MenuItem>
            </Select>
          </FormControl>
        </Fade>
      ) : (
        <></>
      )}
      <RadioGroup sx={{ m: "10px 0" }}>
        <Typography
          component="h4"
          id="outlined-basic"
          label="AUTORES"
          variant="outlined"
        >
          {" "}
          ¿Qué posición tendrías ante limitaciones presupuestarias?
        </Typography>
        <FormControlLabel
          control={
            <Radio
              id="acuerdoComercial"
              label="acuerdoComercial"
              value="puedo cubrir el trabajo de mis colegas aunque mi pago quede pendiente"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="PUEDO CUBRIR EL TRABAJO DE MIS COLEGAS "
        />
        <FormControlLabel
          control={
            <Radio
              id="acuerdoComercial"
              label="acuerdoComercial"
              value="prefiero que lo cubra la editorial aunque mi pago quede pendiente"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="PREFIERO QUE LO CUBRA LA EDITORIAL, AUNQUE MI PAGO QUEDE PENDIENTE"
        />
        <FormControlLabel
          control={
            <Radio
              id="acuerdoComercial"
              label="acuerdoComercial"
              value="lo quiero hacer ad honorem"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="LO QUIERO HACER AD HONOREM"
        />
        <FormControlLabel
          control={
            <Radio
              id="acuerdoComercial"
              label="acuerdoComercial"
              value="no hay trato"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="NO HAY TRATO"
        />
      </RadioGroup>
      <Typography
        bgcolor={"bg.dark"}
        fontSize={"20px"}
        color={"secondary.white"}
        sx={{
          border: "2px solid ",
          borderRadius: "10px",
          padding: "5px",
        }}
      >
        Intentaremos cubrir los gastos y pagarte, pero dependerá del presupuesto
        que dispongamos. En el caso de que no podamos hacerlo de forma
        inmediata, este quedara pendiente y sera abonado cuando la situación lo
        permita, actualizado según nuestro tarifario. Tendremos en cuenta tu
        propuesta y haremos lo posible por publicar tu texto. Tené en cuenta que
        tu aporte acelerara las cosas.
      </Typography>
    </>
  );
};
export default FormSerieDeTextos;

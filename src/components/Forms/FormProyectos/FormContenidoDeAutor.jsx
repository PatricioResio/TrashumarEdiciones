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
import { Fade } from "react-awesome-reveal";
import { useFormik } from "formik";

const FormContenidoDeAutor = () => {
  const formik = useFormik({
    initialValues: {
      formato: "",
      rolEnLaObra: "",
      contanosMas: "",
      rolEnElLibro: "",
      otroAutor: "",
      acuerdoComercial: "",
      acuerdoComercialPorcentaje: "",
      etapaDesarrollo: "",
      distribucionLibro: "",
      tipoDistribucion: "",
      manuscritoTerminado: false,
      manuscritoTerminadoCorregido: false,
      listoPublicar: false,
      informeDeLectura: false,
      correccionGramatical: false,
      correccionEstilos: false,
      disenioImagenes: false,
      traducir: false,
      idiomaOriginal: "",
      idiomaATraducir: "",
    },
    /*   validationSchema: validationProyecto, */
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
      const templateParams = {
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
      };
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
              id="disenioImagenes"
              label="disenioImagenes"
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
          label="DISEÑO E IMAGENES INTERNAS."
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
          label="ARTE DE TAPA Y CONTRATAPA."
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
          label="EDICIÓN Y MAQUETACIÓN."
        />
        <FormControlLabel
          control={
            <Checkbox
              id="traducir"
              label="traducir"
              variant="outlined"
              v
              alue={formik.values.traducir}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              /* error={formik.touched.traducir && Boolean(formik.errors.traducir)}
              helperText={formik.touched.traducir && formik.errors.traducir}*/
            />
          }
          label="TRADUCI R"
        />
      </FormGroup>
      {formik.values.traducir === true ? (
        <Fade>
          <Typography component="h4" variant="outlined">
            {" "}
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
          label="PUEDO CUBRIR EL TRABAJO DE MIS COLEGAS"
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
          label="PUEDO CUBRIR LA PRIMERA TANDA DE IMPRESIONES."
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
          label="PRECISO UNA BECA."
        />
        <Typography
          fontSize={"20px"}
          color={"secondary.white"}
          sx={{
            border: "2px solid ",
            borderRadius: "10px",
            padding: "5px",
          }}
        >
          TRASHUMAR abre becas periódicamente, en la medida en que la plataforma
          y el presupuesto lo permite. La selección de que libros publicar está
          sujeta al catálogo preexistente y a las propuestas que recibamos. Tené
          en cuenta que, si estás dispuesto a financiar alguna parte, esto se
          puede acelerar. Tu contrato tendrá en consideración estos factores.
        </Typography>
      </FormGroup>
      <RadioGroup sx={{ m: "10px 0" }}>
        <Typography
          component="h4"
          id="ETAPAS"
          label="ETAPAS"
          variant="outlined"
        >
          ¿Vas a involucrarte en la distribución del libro? / Para esto, debes
          registrarte en DISTRIBUIDORES.
        </Typography>
        <FormControlLabel
          control={
            <Radio
              id="loHareEnPersona"
              label="loHareEnPersona"
              variant="outlined"
              v
              alue="Si, lo hare en persona"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              /*  error={formik.touched.distribucion}
              helperText={
                formik.touched.distribucion && formik.errors.distribucion
              }*/
            />
          }
          label="SI, LO HARÉ YO EN PERSONA"
        />
        <FormControlLabel
          control={
            <Radio
              id="siPeroNoExclusivamente"
              label="siPeroNoExclusivamente"
              variant="outlined"
              v
              alue="Si, pero no exclusivamente"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              /*  error={formik.touched.distribucion}
              helperText={
                formik.touched.distribucion && formik.errors.distribucion
              }*/
            />
          }
          label="SI, PERO NO EXCLUSIVAMENTE."
        />

        <FormControlLabel
          control={
            <Radio
              id="noGracias"
              label="noGracias"
              variant="outlined"
              v
              alue="No, gracias"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              /*  error={formik.touched.distribucion}
              helperText={
                formik.touched.distribucion && formik.errors.distribucion
              }*/
            />
          }
          label="NO, GRACIAS."
        />
        <Typography
          fontSize={"20px"}
          color={"secondary.white"}
          bgcolor={"bg.dark"}
          sx={{
            border: "2px solid ",
            borderRadius: "10px",

            padding: "5px",
          }}
        >
          Considera que tu compromiso con la distribución facilitara la llegada
          al público.
        </Typography>
      </RadioGroup>
      <RadioGroup sx={{ m: "10px 0" }}>
        <Typography
          component="h4"
          id="ETAPAS"
          label="ETAPAS"
          variant="outlined"
        >
          ¿Qué tipo de distribución te gustaría?
        </Typography>
        <FormControlLabel
          control={
            <Radio
              id="tipoDistribucion"
              label="tipoDistribucion"
              variant="outlined"
              value="QUIERO QUE LO DISTRIBUYAN OTROS MIEMBROS DE TRASHUMAR"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              /*   error={
                formik.touched.tipoDistribucion &&
                Boolean(formik.errors.tipoDistribucion)
              }
              helperText={
                formik.touched.tipoDistribucion &&
                formik.errors.tipoDistribucion
              } */
            />
          }
          label="QUIERO QUE LO DISTRIBUYAN OTROS MIEMBROS DE TRASHUMAR"
        />
        <FormControlLabel
          control={
            <Radio
              id="tipoDistribucion"
              label="tipoDistribucion"
              variant="outlined"
              value="QUIERO QUE SE DISTRIBUYA EN LIBRERIAS"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              /*   error={
                formik.touched.tipoDistribucion &&
                Boolean(formik.errors.tipoDistribucion)
              }
              helperText={
                formik.touched.tipoDistribucion &&
                formik.errors.tipoDistribucion
              } */
            />
          }
          label="QUIERO QUE SE DISTRIBUYA EN LIBRERIAS"
        />

        <Typography
          fontSize={"20px"}
          color={"secondary.white"}
          bgcolor={"bg.dark"}
          sx={{
            border: "2px solid ",
            borderRadius: "10px",

            padding: "5px",
          }}
        >
          Ojo. La opción LIBRERIAS te permitirá un precio de venta mayor, y
          llegada a un público más “formal”. Sin embargo, pueden presentar
          exigencias difíciles de cumplir, como tiradas altas o acuerdos de
          exclusividad. De la misma manera, es probable que sean más selectivas
          a la hora de tomar un libro.
        </Typography>
      </RadioGroup>
      <FormGroup sx={{ m: "10px 0" }}>
        <Typography
          component="h4"
          id="ETAPAS"
          label="ETAPAS"
          variant="outlined"
        >
          ¿Qué reconocimiento recibirán?
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              id="informeDeLectura"
              label="informeDeLectura"
              variant="outlined"
              name="reconocimientoAutor"
              value="SU NOMBRE EN PORTADA, JUNTO AL MIO"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="SU NOMBRE EN PORTADA, JUNTO AL MIO"
        />
        <FormControlLabel
          control={
            <Checkbox
              id="CorreccionGramatical"
              label="CorreccionGramatical"
              variant="outlined"
              name="reconocimientoAutor"
              value="SU NOMBRE EN PORTADA, SIN EL MIO"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="PUEDO CUBRIR LA PRIMERA TANDA DE IMPRESIONES."
        />

        <FormControlLabel
          control={
            <Checkbox
              id="correccionDeEstilo"
              label="correccionDeEstilo"
              variant="outlined"
              name="reconocimientoAutor"
              value="SU NOMBRE JUNTO A EL O LOS TEXTOS SUYOS"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="SU NOMBRE JUNTO A EL O LOS TEXTOS SUYOS"
        />
        <FormControlLabel
          control={
            <Checkbox
              id="correccionDeEstilo"
              variant="outlined"
              name="reconocimientoAutor"
              value="SU NOMBRE EN EL INICIO DEL LIBRO"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="SU NOMBRE EN EL INICIO DEL LIBRO"
        />
      </FormGroup>
    </>
  );
};
export default FormContenidoDeAutor;

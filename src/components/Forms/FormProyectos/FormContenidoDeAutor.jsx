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
import { Form, Formik, useFormik } from "formik";
import { validationProyecto } from "../ValidationSchemas/ValidationSchemas";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";

const FormContenidoDeAutor = ({ posicionForm, posicionForm2 }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Formik
      initialValues={{
        formato: posicionForm,
        idea: posicionForm2,
        userName: currentUser ? currentUser.nombre : "No especificado",
        userEmail: currentUser ? currentUser.email : "No especificado",
        userUid: currentUser ? currentUser.uid : "No especificado",
        userTelefono: currentUser ? currentUser.telefono : "No especificado",
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
      }}
      validationSchema={validationProyecto}
      onSubmit={(values, { resetForm }) => {
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
          idiomaATraducir: values.traducir
            ? values.idiomaATraducir
            : "No aplica",
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
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        errors,
        touched,
        setFieldValue,
      }) => (
        <Form>
          <FormGroup sx={{ m: "10px 0" }}>
            <Typography component="h6" variant="outlined">
              ¿Qué etapas te hace falta cubrir?
            </Typography>
            {touched.etapaDesarrollo && errors.etapaDesarrollo && (
              <FormHelperText sx={{ color: "#F50E00", ml: "0.5rem" }}>
                {errors.etapaDesarrollo}
              </FormHelperText>
            )}
            {touched.etapasACubrir && errors.etapasACubrir && (
              <FormHelperText sx={{ color: "#F50E00", ml: "0.5rem" }}>
                {errors.etapasACubrir}
              </FormHelperText>
            )}
            <FormControlLabel
              control={
                <Checkbox
                  id="informeDeLectura"
                  label="informeDeLectura"
                  name="etapasACubrir"
                  value={values.informeDeLectura}
                  onChange={handleChange}
                  error={Boolean(errors.informeDeLectura)}
                />
              }
              label="Informe de lectura."
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="correccionGramatical"
                  name="etapasACubrir"
                  label="correccionGramatical"
                  value={values.correccionGramatical}
                  onChange={handleChange}
                  error={Boolean(errors.correccionGramatical)}
                />
              }
              label="Corrección gramatical."
            />

            <FormControlLabel
              control={
                <Checkbox
                  id="correccionDeEstilo"
                  label="correccionDeEstilo"
                  name="etapasACubrir"
                  value={values.correccionEstilos}
                  onChange={handleChange}
                  error={Boolean(errors.correccionEstilos)}
                />
              }
              label="Corrección de estilo."
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="disenioImagenes"
                  name="etapasACubrir"
                  label="disenioImagenes"
                  value={values.correccionEstilos}
                  onChange={handleChange}
                  error={Boolean(errors.correccionEstilos)}
                />
              }
              label="Diseño de imágenes."
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="correccionDeEstilo"
                  name="etapasACubrir"
                  label="correccionDeEstilo"
                  value={values.correccionEstilos}
                  onChange={handleChange}
                  error={Boolean(errors.correccionEstilos)}
                />
              }
              label="Arte de tapa y contratapa."
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="correccionDeEstilo"
                  label="correccionDeEstilo"
                  name="etapasACubrir"
                  value={values.correccionEstilos}
                  onChange={handleChange}
                  error={Boolean(errors.correccionEstilos)}
                />
              }
              label="Edición y maquetación."
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="traducir"
                  label="traducir"
                  name="etapasACubrir"
                  value={values.traducir}
                  onChange={handleChange}
                  error={Boolean(errors.traducir)}
                />
              }
              label="Traducir."
            />
          </FormGroup>
          {values.traducir === true ? (
            <Fade>
              <Typography component="h5" variant="outlined">
                Traducción
              </Typography>
              <Typography component="h5" variant="outlined">
                Selecciona el idioma original
              </Typography>
              <FormControl sx={{ m: "10px 0" }} fullWidth>
                <InputLabel>Idioma original</InputLabel>
                <Select
                  id="idiomaOriginal"
                  label="idiomaOriginal"
                  name="idiomaOriginal"
                  value={values.idiomaOriginal}
                  onChange={handleChange}
                  error={errors.correccionEstilos}
                >
                  <MenuItem value={"español (latinoamerica)"}>
                    Español (latinoamerica)
                  </MenuItem>
                  <MenuItem value={"ingles"}>Ingles</MenuItem>
                  <MenuItem value={"frances"}>Frances</MenuItem>
                  <MenuItem value={"aleman"}>Aleman</MenuItem>
                  <MenuItem value={"portugues"}>Portugues</MenuItem>
                  <MenuItem value={"japones"}>Japones</MenuItem>
                </Select>
              </FormControl>
              <Typography component="h5" variant="outlined">
                A que idioma queres traducirlo?
              </Typography>
              <FormControl sx={{ m: "10px 0" }} fullWidth>
                <InputLabel id="idiomaTraduccion">Idioma a traducir</InputLabel>
                <Select
                  labelId="idiomaATraducir"
                  id="idiomaATraducir"
                  name="idiomaATraducir"
                  label="idiomaATraducir"
                  value={values.idiomaATraducir}
                  onChange={handleChange}
                  error={errors.correccionEstilos}
                >
                  <MenuItem value={"español (latinoamerica)"}>
                    Español (latinoamerica)
                  </MenuItem>
                  <MenuItem value={"ingles"}>Ingles</MenuItem>
                  <MenuItem value={"frances"}>Frances</MenuItem>
                  <MenuItem value={"aleman"}>Aleman</MenuItem>
                  <MenuItem value={"portugues"}>Portugues</MenuItem>
                  <MenuItem value={"japones"}>Japones</MenuItem>
                </Select>
              </FormControl>
            </Fade>
          ) : (
            <></>
          )}
          <FormGroup sx={{ m: "10px 0" }}>
            <Typography component="h5" variant="outlined">
              ¿Cómo podes afrontar los gastos?
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  id="gastos"
                  label="gastos"
                  name="gastos"
                  value={values.informeDeLectura}
                  onChange={handleChange}
                  error={Boolean(errors.informeDeLectura)}
                />
              }
              label="Puedo cubrir la primera tanda de impresiones."
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="gastos"
                  label="gastos"
                  name="gastos"
                  value={values.correccionGramatical}
                  onChange={handleChange}
                  error={Boolean(errors.correccionGramatical)}
                />
              }
              label="Puedo cubrir la primera tanda de impresiones."
            />

            <FormControlLabel
              control={
                <Checkbox
                  id="gastos"
                  label="gastos"
                  name="gastos"
                  value={values.correccionEstilos}
                  onChange={handleChange}
                  error={Boolean(errors.correccionEstilos)}
                />
              }
              label="Precio una beca."
            />
            <Typography
              fontSize={"20px"}
              color={"secondary.white"}
              bgcolor={"bg.mediumBlue"}
              sx={{
                borderRadius: "10px",
                padding: "5px",
                my: "1.5rem",
              }}
            >
              TRASHUMAR abre becas periódicamente, en la medida en que la
              plataforma y el presupuesto lo permite. La selección de que libros
              publicar está sujeta al catálogo preexistente y a las propuestas
              que recibamos. Tené en cuenta que, si estás dispuesto a financiar
              alguna parte, esto se puede acelerar. Tu contrato tendrá en
              consideración estos factores.
            </Typography>
          </FormGroup>
          <RadioGroup sx={{ m: "10px 0" }}>
            <Typography component="h5" variant="outlined">
              ¿Vas a involucrarte en la distribución del libro? / Para esto,
              debes registrarte como distribuidor.
            </Typography>
            <FormControlLabel
              control={
                <Radio
                  id="loHareEnPersona"
                  label="loHareEnPersona"
                  name="distribucion"
                  value="Si, lo hare en persona"
                  onChange={handleChange}
                  error={touched.distribucion}
                />
              }
              label="Si, lo hare en persona."
            />
            <FormControlLabel
              control={
                <Radio
                  id="siPeroNoExclusivamente"
                  label="siPeroNoExclusivamente"
                  name="distribucion"
                  value="Si, pero no exclusivamente"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.distribucion}
                />
              }
              label="Si, pero no exclusivamente."
            />

            <FormControlLabel
              control={
                <Radio
                  id="noGracias"
                  label="noGracias"
                  value="No, gracias"
                  name="distribucion"
                  onChange={handleChange}
                  error={touched.distribucion}
                />
              }
              label="No, gracias."
            />
            <Typography
              fontSize={"20px"}
              color={"secondary.white"}
              bgcolor={"bg.mediumBlue"}
              sx={{
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              Considera que tu compromiso con la distribución facilitara la
              llegada al público.
            </Typography>
          </RadioGroup>
          <RadioGroup sx={{ m: "10px 0" }}>
            <Typography component="h5" variant="outlined">
              ¿Qué tipo de distribución te gustaría?
            </Typography>
            <FormControlLabel
              control={
                <Radio
                  id="tipoDistribucion"
                  label="tipoDistribucion"
                  name="tipoDistribucion"
                  value="QUIERO QUE LO DISTRIBUYAN OTROS MIEMBROS DE TRASHUMAR"
                  onChange={handleChange}
                  error={errors.tipoDistribucion}
                />
              }
              label="Quiero que lo distribuyan otros miembros de Trashumar"
            />
            <FormControlLabel
              control={
                <Radio
                  id="tipoDistribucion"
                  label="tipoDistribucion"
                  name="tipoDistribucion"
                  value="QUIERO QUE SE DISTRIBUYA EN LIBRERIAS"
                  onChange={handleChange}
                  error={errors.tipoDistribucion}
                />
              }
              label="Quiero que se distribuya en librerías"
            />

            <Typography
              fontSize={"20px"}
              color={"secondary.white"}
              bgcolor={"bg.mediumBlue"}
              sx={{
                borderRadius: "10px",
                padding: "5px",
                my: "1.5rem",
              }}
            >
              Ojo. La opción LIBRERIAS te permitirá un precio de venta mayor, y
              llegada a un público más “formal”. Sin embargo, pueden presentar
              exigencias difíciles de cumplir, como tiradas altas o acuerdos de
              exclusividad. De la misma manera, es probable que sean más
              selectivas a la hora de tomar un libro.
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
                  name="reconocimientoAutor"
                  value="SU NOMBRE EN PORTADA, JUNTO AL MIO"
                  onChange={handleChange}
                  error={errors.reconocimientoAutor}
                />
              }
              label="Su nombre en portada, junto al mío."
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="CorreccionGramatical"
                  label="CorreccionGramatical"
                  name="reconocimientoAutor"
                  value="SU NOMBRE EN PORTADA, SIN EL MIO"
                  onChange={handleChange}
                  error={errors.reconocimientoAutor}
                />
              }
              label="puedo cubrir la primera tanda de impresiones. (?)"
            />

            <FormControlLabel
              control={
                <Checkbox
                  id="correccionDeEstilo"
                  label="correccionDeEstilo"
                  name="reconocimientoAutor"
                  value="SU NOMBRE JUNTO A EL O LOS TEXTOS SUYOS"
                  onChange={handleChange}
                  error={errors.reconocimientoAutor}
                />
              }
              label="Su nombre junto a el o los textos suyos."
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="correccionDeEstilo"
                  name="reconocimientoAutor"
                  value="SU NOMBRE EN EL INICIO DEL LIBRO"
                  onChange={handleChange}
                  error={errors.reconocimientoAutor}
                />
              }
              label="Su nombre en el inicio del libro."
            />
          </FormGroup>
        </Form>
      )}
    </Formik>
  );
};
export default FormContenidoDeAutor;

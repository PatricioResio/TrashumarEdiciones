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
  Button,
  FormHelperText,
} from "@mui/material";
import { Form, Formik } from "formik";
import emailjs from "emailjs-com";
import { Fade } from "react-awesome-reveal";
import { validationTextoUnico } from "../ValidationSchemas/ValidationSchemas";

const FormTextoUnico = () => {
  return (
    <Formik
      initialValues={{
        formato: "Quiero publicar un texto unico en la pagina",
        etapaDesarrollo: "",
        imagenesProyecto: "",
        traducir: false,
        idiomaOriginal: "",
        idiomaATraducir: "",
        contanosMas: "",
        acuerdoComercial: "",
      }}
      validationSchema={validationTextoUnico}
      onSubmit={(values, { resetForm }) => {
        if (
          !values.formato ||
          !values.contanosMas ||
          !values.imagenesProyecto ||
          !values.acuerdoComercial
        ) {
          alert("Debes completar todos los campos obligatorios.");
          console.log(values);
          return;
        }
        console.log("values:", values);
        const templateParams = {
          formato: values.formato,
          contanosMas: values.contanosMas,
          acuerdoComercial: values.acuerdoComercial,
          /*          acuerdoComercialPorcentaje:
            values.acuerdoComercialPorcentaje || "No especificado", */
          traducir: values.traducir ? "Sí" : "No",
          idiomaOriginal: values.traducir ? values.idiomaOriginal : "No aplica",
          idiomaATraducir: values.traducir
            ? values.idiomaATraducir
            : "No aplica",
          etapaDesarrollo: values.etapaDesarrollo,
          imagenesProyecto: values.imagenesProyecto,
        };

        console.log("templateParams:", templateParams);

        emailjs
          .send(
            "service_5p7dbyj",
            "template_cl61jny",
            templateParams,
            "UFKZ--VbjyDkKEHnH"
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
          <RadioGroup sx={{ m: "10px 0" }}>
            <Typography
              component="h4"
              id="outlined-basic"
              label="AUTORES"
              variant="outlined"
            >
              ¿En qué etapa del desarrollo te encontras?
            </Typography>
            {touched.etapaDesarrollo && errors.etapaDesarrollo && (
              <FormHelperText sx={{ color: "#F50E00" }}>
                {errors.etapaDesarrollo}
              </FormHelperText>
            )}

            <FormControlLabel
              control={
                <Radio
                  id="etapaDesarrollo"
                  label="etapaDesarrollo"
                  name="etapaDesarrollo"
                  variant="outlined"
                  value="Trabajando en el texto"
                  onChange={handleChange}
                  error={errors.etapaDesarrollo}
                />
              }
              label="ESTOY TRABAJANDO EN EL TEXTO."
            />

            <FormControlLabel
              control={
                <Radio
                  id="etapaDesarrollo"
                  label="etapaDesarrollo"
                  name="etapaDesarrollo"
                  value="manuscrito terminado"
                  variant="outlined"
                  onChange={handleChange}
                  error={errors.manuscritoTermindo}
                />
              }
              label="TENGO EL MANUSCRITO TERMINADO."
            />
            <FormControlLabel
              control={
                <Radio
                  id="etapaDesarrollo"
                  name="etapaDesarrollo"
                  label="etapaDesarrollo"
                  variant="outlined"
                  value="Manuscrito terminado y corregido"
                  onChange={handleChange}
                  error={errors.manuscritoTermindoCorregido}
                />
              }
              label="TENGO EL MANUSCRITO TERMINADO Y CORREGIDO."
            />
            <FormControlLabel
              control={
                <Radio
                  id="etapaDesarrollo"
                  name="etapaDesarrollo"
                  label="etapaDesarrollo"
                  variant="outlined"
                  value="Manuscrito listo para publicar"
                  onChange={handleChange}
                  error={errors.listoPublicar}
                />
              }
              label="TENGO TODO LISTO PARA PUBLICAR."
            />
          </RadioGroup>

          <RadioGroup sx={{ m: "10px 0" }}>
            <Typography component="h4" variant="outlined">
              ¿El texto esta acompañado de una o mas imagenes?
            </Typography>
            {touched.imagenesProyecto && errors.imagenesProyecto && (
              <FormHelperText sx={{ color: "#F50E00" }}>
                {errors.imagenesProyecto}
              </FormHelperText>
            )}
            <FormControlLabel
              control={
                <Radio
                  id="imagenesProyecto"
                  label="imagenesProyecto"
                  name="imagenesProyecto"
                  value="imagenes listas"
                  variant="outlined"
                  onChange={handleChange}
                  error={errors.imagenesProyecto}
                />
              }
              label="Si, ya las tengo listas"
            />
            <FormControlLabel
              control={
                <Radio
                  id="imagenesProyecto"
                  label="imagenesProyecto"
                  name="imagenesProyecto"
                  value="imagenes a crear"
                  variant="outlined"
                  onChange={handleChange}
                  error={errors.imagenesProyecto}
                />
              }
              label="Si, no las tengo listas."
            />
            <FormControlLabel
              control={
                <Radio
                  id="imagenesProyecto"
                  label="imagenesProyecto"
                  name="imagenesProyecto"
                  value="sin imagenes"
                  variant="outlined"
                  onChange={handleChange}
                  error={errors.imagenesProyecto}
                />
              }
              label="No incluira imagenes"
            />
          </RadioGroup>
          <FormGroup sx={{ m: "10px 0" }}>
            <Typography component="h4" variant="outlined">
              ¿Qué etapas te hace falta cubrir?
            </Typography>
            {touched.etapaDesarrollo && errors.etapaDesarrollo && (
              <FormHelperText sx={{ color: "#F50E00" }}>
                {errors.etapaDesarrollo}
              </FormHelperText>
            )}

            <FormControlLabel
              control={
                <Checkbox
                  id="EtapaDesarrollo"
                  label="informeDeLectura"
                  name="informeDeLectura"
                  variant="outlined"
                  value={values.informeDeLectura}
                  onChange={handleChange}
                  error={Boolean(errors.informeDeLectura)}
                />
              }
              label="INFORME DE LECTURA."
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="EtapaDesarrollo"
                  label="CorreccionGramatical"
                  name="CorreccionGramatical"
                  variant="outlined"
                  value={values.correccionGramatical}
                  onChange={handleChange}
                  error={Boolean(errors.correccionGramatical)}
                />
              }
              label="CORRECCIÓN GRAMATICAL."
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="EtapaDesarrollo"
                  label="Manuscrito"
                  name="Manuscrito"
                  variant="outlined"
                  value={values.manuscrito}
                  onChange={handleChange}
                  error={Boolean(errors.manuscrito)}
                />
              }
              label="TENGO EL MANUSCRITO TERMINADO Y CORREGIDO."
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="EtapaDesarrollo"
                  label="correccionDeEstilo"
                  name="correccionDeEstilo"
                  variant="outlined"
                  value={values.correccionEstilos}
                  onChange={handleChange}
                  error={Boolean(errors.correccionEstilos)}
                />
              }
              label="CORRECCIÓN DE ESTILO."
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="EtapaDesarrollo"
                  label="traducir"
                  name="traducir"
                  variant="outlined"
                  value={values.traducir}
                  onChange={handleChange}
                  error={Boolean(errors.traducir)}
                />
              }
              label="TRADUCIR"
            />
          </FormGroup>
          {values.traducir === true ? (
            <Fade triggerOnce>
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
            {touched.acuerdoComercial && errors.acuerdoComercial && (
              <FormHelperText sx={{ color: "#F50E00" }}>
                {errors.acuerdoComercial}
              </FormHelperText>
            )}
            <FormControlLabel
              control={
                <Radio
                  id="acuerdoComercial"
                  label="acuerdoComercial"
                  name="acuerdoComercial"
                  value="puedo cubrir el trabajo de mis colegas aunque mi pago quede pendiente"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.acuerdoComercial && errors.acuerdoComercial}
                />
              }
              label="PUEDO CUBRIR EL TRABAJO DE MIS COLEGAS "
            />
            <FormControlLabel
              control={
                <Radio
                  id="acuerdoComercial"
                  label="acuerdoComercial"
                  name="acuerdoComercial"
                  value="prefiero que lo cubra la editorial aunque mi pago quede pendiente"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.acuerdoComercial && errors.acuerdoComercial}
                />
              }
              label="PREFIERO QUE LO CUBRA LA EDITORIAL, AUNQUE MI PAGO QUEDE PENDIENTE"
            />
            <FormControlLabel
              control={
                <Radio
                  id="acuerdoComercial"
                  label="acuerdoComercial"
                  name="acuerdoComercial"
                  value="lo quiero hacer ad honorem"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.acuerdoComercial && errors.acuerdoComercial}
                />
              }
              label="LO QUIERO HACER AD HONOREM"
            />
            <FormControlLabel
              control={
                <Radio
                  id="acuerdoComercial"
                  label="acuerdoComercial"
                  name="acuerdoComercial"
                  value="no hay trato"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.acuerdoComercial && errors.acuerdoComercial}
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
            Intentaremos cubrir los gastos y pagarte, pero dependerá del
            presupuesto que dispongamos. En el caso de que no podamos hacerlo de
            forma inmediata, este quedara pendiente y sera abonado cuando la
            situación lo permita, actualizado según nuestro tarifario. Tendremos
            en cuenta tu propuesta y haremos lo posible por publicar tu texto.
            Tené en cuenta que tu aporte acelerara las cosas.
          </Typography>

          <Typography component="h4" variant="outlined" sx={{ m: "6px" }}>
            Contanos más al respecto de tu proyecto
          </Typography>
          {touched.contanosMas && errors.contanosMas && (
            <FormHelperText sx={{ color: "#F50E00", ml: "0.5rem" }}>
              {errors.contanosMas}
            </FormHelperText>
          )}
          <TextField
            multiline
            sx={{ m: "6px" }}
            id="contanosMas"
            value={values.contanosMas}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Mi idea es ...."
            variant="outlined"
          />
          <Button sx={{}} type="submit" variant="contained">
            enviar formulario
          </Button>
        </Form>
      )}
    </Formik>
  );
};
export default FormTextoUnico;

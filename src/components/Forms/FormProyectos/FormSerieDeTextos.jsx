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
  FormHelperText,
  Button,
} from "@mui/material";
import { Fade } from "react-awesome-reveal";
import emailjs from "emailjs-com";
import { validationTextoUnico } from "../ValidationSchemas/ValidationSchemas";
import { Formik, Form } from "formik";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const FormSerieDeTextos = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Formik
      initialValues={{
        userName: currentUser ? currentUser.nombre : "No especificado",
        userEmail: currentUser ? currentUser.email : "No especificado",
        userUid: currentUser ? currentUser.uid : "No especificado",
        userTelefono: currentUser ? currentUser.telefono : "No especificado",
        formato: "Quiero publicar una serie de textos en la pagina",
        etapaDesarrollo: "",
        imagenesProyecto: "",
        traducir: false,
        idiomaOriginal: "",
        idiomaATraducir: "",
        contanosMas: "",
        acuerdoComercial: "",
        ideaPrincipal: "",
      }}
      validationSchema={validationTextoUnico}
      onSubmit={(values, { resetForm }) => {
        if (
          !values.formato ||
          !values.ideaPrincipal ||
          !values.imagenesProyecto ||
          !values.acuerdoComercial
        ) {
          alert("Debes completar todos los campos obligatorios.");
          console.log(values);
          return;
        }
        console.log("values:", values);
        const templateParams = {
          userName: currentUser ? currentUser.nombre : "No especificado",
          userEmail: currentUser ? currentUser.email : "No especificado",
          userUid: currentUser ? currentUser.uid : "No especificado",
          userTelefono: currentUser ? currentUser.telefono : "No especificado",
          formato: values.formato,
          ideaPrincipal: values.ideaPrincipal,
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
          <Typography component="h6" variant="outlined" sx={{ m: "6px" }}>
            Empecemos hablando al respecto de tu proyecto
          </Typography>
          {touched.ideaPrincipal && errors.ideaPrincipal && (
            <FormHelperText sx={{ color: "#F50E00", ml: "0.5rem" }}>
              {errors.ideaPrincipal}
            </FormHelperText>
          )}
          <TextField
            multiline
            sx={{
              mx: "auto",
              width: "90%",
              minHeight: "3rem",
            }}
            id="ideaPrincipal"
            name="ideaPrincipal"
            label="Acá nos vas a poder poner en contexto de tu idea..."
            value={values.ideaPrincipal}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="outlined"
          />
          <RadioGroup sx={{ m: "10px 0" }}>
            <Typography
              component="h6"
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
              label="Estoy trabajando en el texto."
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
                  error={errors.manuscritoTerminado}
                />
              }
              label="Tengo el manuscrito terminado."
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
                  onBlur={handleBlur}
                  error={errors.manuscritoTerminadoCorregido}
                />
              }
              label="Tengo el manuscrito terminado y corregido."
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
              label="Tengo el manuscrito listo para publicar."
            />
          </RadioGroup>

          <RadioGroup sx={{ m: "10px 0" }}>
            <Typography
              component="h6"
              id="outlined-basic"
              label="AUTORES"
              variant="outlined"
            >
              {" "}
              ¿El texto esta acompañado de una o mas imagenes?
            </Typography>
            {touched.imagenesProyectos && errors.imagenesProyectos && (
              <FormHelperText sx={{ color: "#F50E00" }}>
                {errors.imagenesProyectos}
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
                  onBlur={handleBlur}
                />
              }
              label="Si, ya las tengo listas"
            />
            <FormControlLabel
              control={
                <Radio
                  id="imagenesProyecto"
                  name="imagenesProyecto"
                  label="imagenesProyecto"
                  value="imagenes a crear"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              }
              label="Si, no las tengo listas."
            />
            <FormControlLabel
              control={
                <Radio
                  id="imagenesProyecto"
                  name="imagenesProyecto"
                  label="imagenesProyecto"
                  value="sin imagenes"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              }
              label="No incluira imagenes"
            />
          </RadioGroup>

          <FormGroup sx={{ m: "10px 0" }}>
            <Typography component="h6" variant="outlined">
              ¿Qué etapas te hace falta cubrir?
            </Typography>
            {touched.etapaACubrir && errors.etapaACubrir && (
              <FormHelperText sx={{ color: "#F50E00" }}>
                {errors.etapaACubrir}
              </FormHelperText>
            )}
            <FormControlLabel
              control={
                <Checkbox
                  id="informeDeLectura"
                  label="informeDeLectura"
                  name="informeDeLectura"
                  variant="outlined"
                  value={values.informeDeLectura}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.informeDeLectura)}
                />
              }
              label="Informe de lectura."
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="correccionGramatical"
                  name="informeDeLectura"
                  label="correccionGramatical"
                  variant="outlined"
                  value={values.correccionGramatical}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.correccionGramatical)}
                />
              }
              label="Corrección gramatical."
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="Aquí podes explayarte"
                  name="informeDeLectura"
                  label="Aquí podes explayarte"
                  variant="outlined"
                  value={values.facebookForm}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.facebookForm)}
                />
              }
              label="Tengo el manuscrito terminado."
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="correccionDeEstilo"
                  name="informeDeLectura"
                  label="correccionDeEstilo"
                  variant="outlined"
                  value={values.correccionEstilos}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.correccionEstilos)}
                />
              }
              label="Corrección de estilo."
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="traduccir"
                  name="informeDeLectura"
                  label="traduccir"
                  variant="outlined"
                  value={values.traducir}
                  onChange={handleChange}
                  error={Boolean(errors.traducir)}
                />
              }
              label="Traducción."
            />
          </FormGroup>
          {values.traducir === true ? (
            <Fade triggerOnce>
              <Typography component="h6" variant="outlined">
                Traducción
              </Typography>
              <Typography component="h6" variant="outlined">
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
              <Typography component="h6" variant="outlined">
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
              component="h6"
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
                  name="acuerdoComercial"
                  value="puedo cubrir el trabajo de mis colegas aunque mi pago quede pendiente"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              }
              label="Puedo cubrir el trabajo de mis colegas, aunque mi pago quede pendiente"
            />
            <FormControlLabel
              control={
                <Radio
                  id="acuerdoComercial"
                  name="acuerdoComercial"
                  label="acuerdoComercial"
                  value="prefiero que lo cubra la editorial aunque mi pago quede pendiente"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              }
              label="Prefiero que lo cubra la editorial, aunque mi pago quede pendiente"
            />
            <FormControlLabel
              control={
                <Radio
                  id="acuerdoComercial"
                  name="acuerdoComercial"
                  label="acuerdoComercial"
                  value="lo quiero hacer ad honorem"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              }
              label="Lo quiero hacer ad honorem"
            />
            <FormControlLabel
              control={
                <Radio
                  id="acuerdoComercial"
                  name="acuerdoComercial"
                  label="acuerdoComercial"
                  value="no hay trato"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              }
              label="No hay trato"
            />
          </RadioGroup>
          <Typography component="h6" variant="outlined" sx={{ m: "6px" }}>
            Contanos más al respecto de tu proyecto
          </Typography>
          {touched.contanosMas && errors.contanosMas && (
            <FormHelperText sx={{ color: "#F50E00", ml: "0.5rem" }}>
              {errors.contanosMas}
            </FormHelperText>
          )}
          <TextField
            multiline
            sx={{
              mx: "auto",
              width: "100%",
              minHeight: "3rem",
            }}
            id="contanosMas"
            value={values.contanosMas}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Mi idea es ...."
            variant="outlined"
          />
          <Typography
            fontSize={"20px"}
            color={"secondary.main"}
            sx={{
              border: "2px solid ",
              borderRadius: "10px",

              my: "1.5rem",
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
          <Button
            sx={{ m: "auto", display: "flex" }}
            type="submit"
            variant="contained"
          >
            enviar formulario
          </Button>
        </Form>
      )}
    </Formik>
  );
};
export default FormSerieDeTextos;

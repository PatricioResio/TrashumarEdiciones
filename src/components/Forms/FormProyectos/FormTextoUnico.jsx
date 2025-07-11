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
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const FormTextoUnico = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Formik
      initialValues={{
        userUid: currentUser ? currentUser.uid : "No especificado",
        userName: currentUser ? currentUser.nombre : "No especificado",
        userEmail: currentUser ? currentUser.email : "No especificado",
        userTelefono: currentUser ? currentUser.telefono : "No especificado",
        formato: "Quiero publicar un texto unico en la pagina",
        etapaDesarrollo: "",
        imagenesProyecto: "",
        traducir: false,
        idiomaOriginal: "",
        idiomaATraducir: "",
        contanosMas: "",
        ideaPrincipal: "",
        acuerdoComercial: "",
      }}
      validationSchema={validationTextoUnico}
      onSubmit={(values, { resetForm }) => {
        const templateParams = {
          userName: currentUser ? currentUser.nombre : "No especificado",
          userEmail: currentUser ? currentUser.email : "No especificado",
          userTelefono: currentUser ? currentUser.telefono : "No especificado",
          formato: values.formato,
          contanosMas: values.contanosMas,
          acuerdoComercial: values.acuerdoComercial,
          traducir: values.traducir ? "Sí" : "No",
          idiomaOriginal: values.traducir ? values.idiomaOriginal : "No aplica",
          idiomaATraducir: values.traducir
            ? values.idiomaATraducir
            : "No aplica",
          etapaDesarrollo: values.etapaDesarrollo,
          imagenesProyecto: values.imagenesProyecto,
          ideaPrincipal: values.ideaPrincipal,
        };
        emailjs
          .send(
            import.meta.env.VITE_EMAILJS_SERVICE_TEXTO_UNICO,
            import.meta.env.VITE_EMAILJS_TEMPLATE_TEXTO_UNICO,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY_TEXTO_UNICO
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
          <Typography component="h5" variant="outlined" sx={{ m: "6px" }}>
            Contanos un poco sobre tu idea
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
              mb: "10px",
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
              component="h5"
              id="outlined-basic"
              mb={1}
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
                  onChange={handleChange}
                  error={errors.manuscritoTermindo}
                />
              }
              label="Tengo manuscrito terminado"
            />
            <FormControlLabel
              control={
                <Radio
                  id="etapaDesarrollo"
                  name="etapaDesarrollo"
                  label="etapaDesarrollo"
                  value="Manuscrito terminado y corregido"
                  onChange={handleChange}
                  error={errors.manuscritoTermindoCorregido}
                />
              }
              label="Tengo el manuscrito terminado y corregido"
            />
            <FormControlLabel
              control={
                <Radio
                  id="etapaDesarrollo"
                  name="etapaDesarrollo"
                  label="etapaDesarrollo"
                  value="Manuscrito listo para publicar"
                  onChange={handleChange}
                  error={errors.listoPublicar}
                />
              }
              label="Tengo el manuscrito listo para publicar"
            />
          </RadioGroup>

          <RadioGroup sx={{ m: "10px 0" }}>
            <Typography component="h5" variant="outlined">
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
                  onChange={handleChange}
                  error={errors.imagenesProyecto}
                />
              }
              label="No incluira imagenes"
            />
          </RadioGroup>
          <FormGroup sx={{ m: "10px 0" }}>
            <Typography component="h5" variant="outlined">
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
                  id="EtapaDesarrollo"
                  label="CorreccionGramatical"
                  name="CorreccionGramatical"
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
                  id="EtapaDesarrollo"
                  label="Manuscrito"
                  name="Manuscrito"
                  value={values.manuscrito}
                  onChange={handleChange}
                  error={Boolean(errors.manuscrito)}
                />
              }
              label="Tengo el manuscrito terminado y corregido."
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="EtapaDesarrollo"
                  label="correccionDeEstilo"
                  name="correccionDeEstilo"
                  value={values.correccionEstilos}
                  onChange={handleChange}
                  error={Boolean(errors.correccionEstilos)}
                />
              }
              label="Corrección de estilos."
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="EtapaDesarrollo"
                  label="traducir"
                  name="traducir"
                  value={values.traducir}
                  onChange={handleChange}
                  error={Boolean(errors.traducir)}
                />
              }
              label="Traducir el texto."
            />
          </FormGroup>
          {values.traducir === true ? (
            <Fade triggerOnce>
              <Typography component="h5" variant="outlined">
                {" "}
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
          <RadioGroup sx={{ m: "10px 0" }}>
            <Typography component="h5" variant="outlined">
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.acuerdoComercial && errors.acuerdoComercial}
                />
              }
              label="Puedo cubrir el trabajo de mis colegas, aunque mi pago quede pendiente"
            />
            <FormControlLabel
              control={
                <Radio
                  id="acuerdoComercial"
                  label="acuerdoComercial"
                  name="acuerdoComercial"
                  value="prefiero que lo cubra la editorial aunque mi pago quede pendiente"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.acuerdoComercial && errors.acuerdoComercial}
                />
              }
              label="Prefiero que lo cubra la editorial, aunque mi pago quede pendiente"
            />
            <FormControlLabel
              control={
                <Radio
                  id="acuerdoComercial"
                  label="acuerdoComercial"
                  name="acuerdoComercial"
                  value="lo quiero hacer ad honorem"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.acuerdoComercial && errors.acuerdoComercial}
                />
              }
              label="Lo quiero hacer ad honorem"
            />
            <FormControlLabel
              control={
                <Radio
                  id="acuerdoComercial"
                  label="acuerdoComercial"
                  name="acuerdoComercial"
                  value="no hay trato"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.acuerdoComercial && errors.acuerdoComercial}
                />
              }
              label="No hay trato"
            />
          </RadioGroup>
          <Typography component="h5" variant="outlined" sx={{ m: "6px" }}>
            Contanos más al respecto de tu proyecto
          </Typography>
          {touched.contanosMas && errors.contanosMas && (
            <FormHelperText sx={{ color: "#F50E00", ml: "0.5rem" }}>
              {errors.contanosMas}
            </FormHelperText>
          )}
          <TextField
            multiline
            sx={{ m: "auto", width: "100%", minHeight: "2rem" }}
            id="contanosMas"
            value={values.contanosMas}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Mi idea es ...."
            variant="outlined"
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
            Intentaremos cubrir los gastos y pagarte, pero dependerá del
            presupuesto que dispongamos. En el caso de que no podamos hacerlo de
            forma inmediata, este quedara pendiente y sera abonado cuando la
            situación lo permita, actualizado según nuestro tarifario. Tendremos
            en cuenta tu propuesta y haremos lo posible por publicar tu texto.
            Tené en cuenta que tu aporte acelerara las cosas.
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                value={values.contrato}
                onChange={handleChange}
                error={Boolean(errors.contrato)}
                id="contrato"
                name="contrato"
                label="contrato"
              />
            }
            label="Estoy de acuerdo con los términos y condiciones"
          />
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
export default FormTextoUnico;

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
import { Fade } from "react-awesome-reveal";
import { Form, Formik } from "formik";
import emailjs from "emailjs-com";
import { validationContenidoAutor } from "../ValidationSchemas/ValidationSchemas";
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
        contanosMas: "",
        etapaDesarrollo: "",
        distribucion: "",
        tipoDistribucion: "",
        reconocimientoDistribucion: "",
        gastos: "",
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
      validationSchema={validationContenidoAutor}
      onSubmit={(values, { resetForm }) => {
        const templateParams = {
          formato: values.formato,
          idea: values.idea,
          userName: currentUser ? currentUser.nombre : "No especificado",
          userEmail: currentUser ? currentUser.email : "No especificado",
          userUid: currentUser ? currentUser.uid : "No especificado",
          userTelefono: currentUser ? currentUser.telefono : "No especificado",
          gastos: values.gastos,
          contanosMas: values.contanosMas,
          distribucion: values.distribucion,
          tipoDistribucion: values.tipoDistribucion,
          etapaDesarrollo: values.etapaDesarrollo,
          reconocimientoDistribucion: values.reconocimientoDistribucion,
          manuscritoTerminado: values.manuscritoTerminado ? "si" : "no",
          manuscritoTerminadoCorregido: values.manuscritoTerminadoCorregido
            ? "si"
            : "no",
          listoPublicar: values.listoPublicar ? "si" : "no",
          informeDeLectura: values.informeDeLectura ? "si" : "no",
          correccionGramatical: values.correccionGramatical ? "si" : "no",
          correccionEstilos: values.correccionEstilos ? "si" : "no",
          traducir: values.traducir ? "Sí" : "No",
          idiomaOriginal: values.traducir
            ? values.idiomaOriginal != "" || values.idiomaOriginal
            : "No aplica",
          idiomaATraducir: values.traducir
            ? values.idiomaATraducir != "" || values.idiomaATraducir
            : "No aplica",
        };
        emailjs

          .send(
            import.meta.env.VITE_EMAILJS_SERVICE_TEXTO_UNICO,
            import.meta.env.VITE_EMAILJS_TEMPLATE_CONTENIDO_DE_AUTOR,
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
      {({ values, handleChange, handleBlur, errors, touched }) => (
        <Form>
          <RadioGroup sx={{ m: "10px 0" }}>
            <Typography component="h5" variant="outlined">
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
                  value="Manuscrito terminado y corregido"
                  onChange={handleChange}
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
                  value="Manuscrito listo para publicar"
                  onChange={handleChange}
                  error={errors.listoPublicar}
                />
              }
              label="Tengo el manuscrito listo para publicar."
            />
          </RadioGroup>
          <FormGroup sx={{ m: "10px 0" }}>
            <Typography component="h5" variant="outlined">
              ¿Qué etapas te hace falta cubrir?
            </Typography>
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
          <RadioGroup sx={{ m: "10px 0" }}>
            <Typography component="h5" variant="outlined">
              ¿Cómo podes afrontar los gastos?
            </Typography>
            {touched.gastos && errors.gastos && (
              <FormHelperText sx={{ color: "#F50E00" }}>
                {errors.gastos}
              </FormHelperText>
            )}
            <FormControlLabel
              control={
                <Radio
                  id="gastos"
                  label="gastos"
                  name="gastos"
                  value="Puedo cubrir la primera tanda de impresiones."
                  onChange={handleChange}
                  error={errors.gastos}
                />
              }
              label="Puedo cubrir la primera tanda de impresiones."
            />
            <FormControlLabel
              control={
                <Radio
                  id="gastos"
                  label="gastos"
                  name="gastos"
                  value="Puedo afrontar los costos del libro."
                  onChange={handleChange}
                  error={errors.gastos}
                />
              }
              label="Puedo afrontar los costos del libro."
            />

            <FormControlLabel
              control={
                <Radio
                  id="gastos"
                  label="gastos"
                  name="gastos"
                  value="Preciso una beca."
                  onChange={handleChange}
                  error={errors.gastos}
                />
              }
              label="Preciso una beca."
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
          </RadioGroup>
          <RadioGroup sx={{ m: "10px 0" }}>
            <Typography component="h5" variant="outlined">
              ¿Vas a involucrarte en la distribución del libro? / Para esto,
              debes registrarte como distribuidor.
            </Typography>
            {touched.distribucion && errors.distribucion && (
              <FormHelperText sx={{ color: "#F50E00" }}>
                {errors.distribucion}
              </FormHelperText>
            )}
            <FormControlLabel
              control={
                <Radio
                  id="loHareEnPersona"
                  label="loHareEnPersona"
                  name="distribucion"
                  value="Si, lo hare en persona"
                  onChange={handleChange}
                  error={errors.distribucion}
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
                  error={errors.distribucion}
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
                  error={errors.distribucion}
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
            {touched.tipoDistribucion && errors.tipoDistribucion && (
              <FormHelperText sx={{ color: "#F50E00" }}>
                {errors.tipoDistribucion}
              </FormHelperText>
            )}
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
            <FormControlLabel
              control={
                <Radio
                  id="tipoDistribucion"
                  label="tipoDistribucion"
                  name="tipoDistribucion"
                  value="Librerias y miembros de Trashumar"
                  onChange={handleChange}
                  error={errors.tipoDistribucion}
                />
              }
              label="Librerias y miembros de Trashumar"
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
          <RadioGroup sx={{ m: "10px 0" }}>
            <Typography component="h5" variant="outlined">
              ¿Qué reconocimiento recibirán?
            </Typography>
            {touched.reconocimientoDistribucion &&
              errors.reconocimientoDistribucion && (
                <FormHelperText sx={{ color: "#F50E00" }}>
                  {errors.reconocimientoDistribucion}
                </FormHelperText>
              )}

            <FormControlLabel
              control={
                <Radio
                  id="informeDeLectura"
                  label="informeDeLectura"
                  name="reconocimientoDistribucion"
                  value="SU NOMBRE EN PORTADA, JUNTO AL MIO"
                  onChange={handleChange}
                  error={errors.reconocimientoDistribucion}
                />
              }
              label="Su nombre en portada, junto al mío."
            />
            {/*             <FormControlLabel
              control={
                <Radio
                  id="CorreccionGramatical"
                  label="CorreccionGramatical"
                  name="reconocimientoDistribucion"
                  value="SU NOMBRE EN PORTADA, SIN EL MIO"
                  onChange={handleChange}
                  error={errors.reconocimientoDistribucion}
                />
              }
              label="puedo cubrir la primera tanda de impresiones. (?)"
            /> */}

            <FormControlLabel
              control={
                <Radio
                  id="correccionDeEstilo"
                  label="correccionDeEstilo"
                  name="reconocimientoDistribucion"
                  value="SU NOMBRE JUNTO A EL O LOS TEXTOS SUYOS"
                  onChange={handleChange}
                  error={errors.reconocimientoDistribucion}
                />
              }
              label="Su nombre junto a el o los textos suyos."
            />
            <FormControlLabel
              control={
                <Radio
                  id="correccionDeEstilo"
                  name="reconocimientoDistribucion"
                  value="SU NOMBRE EN EL INICIO DEL LIBRO"
                  onChange={handleChange}
                  error={errors.reconocimientoDistribucion}
                />
              }
              label="Su nombre en el inicio del libro."
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
export default FormContenidoDeAutor;

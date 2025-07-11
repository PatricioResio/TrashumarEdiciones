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
import { Formik, Form } from "formik";
import emailjs from "emailjs-com";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { validationContenidoAjeno } from "../ValidationSchemas/ValidationSchemas";
import { initialValuesContenidoAjeno } from "../TemplatesParams/TemplateParams";

const FormEditarContenidoAjeno = ({ posicionForm, posicionForm2 }) => {
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

        ...initialValuesContenidoAjeno,
      }}
      validationSchema={validationContenidoAjeno}
      onSubmit={(values, { resetForm }) => {
        const templateParams = {
          formato: posicionForm,
          idea: posicionForm2,
          userName: currentUser ? currentUser.nombre : "No especificado",
          userEmail: currentUser ? currentUser.email : "No especificado",
          userTelefono: currentUser ? currentUser.telefono : "No especificado",
          informeDeLecturaRol: !values.informeDeLecturaRol
            ? ""
            : "Yo realizo el informe de lectura",
          correccionGramaticalRol: !values.correccionGramaticalRol
            ? ""
            : "Yo realizo la corrección gramatical",
          correccionEstilosRol: !values.correccionEstilosRol
            ? ""
            : "Yo realizo la corrección de estilos",
          edicionMaquetacionRol: !values.edicionMaquetarRol
            ? ""
            : "Yo realizo la edición y maquetación",
          disenioImagenesRol: !values.disenioImagenesRol
            ? ""
            : "Yo realizo el diseño de imágenes internas",
          traducirRol: !values.traducirRol ? "" : "Yo realizo la traducción",
          rolAutorEnLaObra: values.rolAutorEnLaObra,
          reconocimientoAutor: values.reconocimientoAutor,
          acuerdoComercialNoAutor: values.acuerdoComercialNoAutor,
          contanosMas: values.contanosMas,
          etapaDesarrollo: values.etapaDesarrollo,
          informeDeLectura: values.informeDeLectura ? "Sí" : "No",
          correccionGramatical: values.correccionGramatical ? "Sí" : "No",
          correccionEstilos: values.correccionEstilos ? "Sí" : "No",
          disenioImagenes: values.disenioImagenes ? "Sí" : "No",
          edicionMaquetacion: values.edicionMaquetacion ? "Sí" : "No",
          arteTapa: values.arteTapa ? "Sí" : "No",
          todoListo: values.todoListo ? "tenemos todo listo" : "No",
          traducir: values.traducir ? "Sí" : "No",
          idiomaOriginal: values.traducir ? values.idiomaOriginal : "No aplica",
          idiomaATraducir: values.traducir
            ? values.idiomaATraducir
            : "No aplica",
          limitacionesPresupuestarias: values.limitacionesPresupuestarias,
          distribucionLibro: values.distribucionLibro,
          tipoDistribucion: values.tipoDistribucion,
        };
        emailjs

          .send(
            import.meta.env.VITE_EMAILJS_SERVICE_CONTENIDO_AJENO,
            import.meta.env.VITE_EMAILJS_TEMPLATE_CONTENIDO_AJENO,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY_CONTENIDO_AJENO
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
          <FormGroup sx={{ m: "10px 0" }}>
            <Typography component="h5" variant="outlined">
              ¿Qué rol cumplís en el libro?
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  id="informeDeLecturaRol"
                  label="informeDeLecturaRol"
                  name="informeDeLecturaRol"
                  value={values.informeDeLecturaRol}
                  onChange={handleChange}
                  error={Boolean(errors.informeDeLecturaRol)}
                />
              }
              label="Informe de lectura"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="Editar"
                  label="Editar"
                  name="correccionGramaticalRol"
                  value={values.correccionGramaticalRol}
                  onChange={handleChange}
                  error={Boolean(errors.correccionGramaticalRol)}
                />
              }
              label="Corrección gramatical"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="correccionEstilosRol"
                  label="correccionEstilosRol"
                  name="correccionEstilosRol"
                  value={values.correccionEstilosRol}
                  onChange={handleChange}
                  error={Boolean(errors.correccionEstilosRol)}
                />
              }
              label="Corrección de estilo"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="editarYMaquetarRol"
                  label="editarYMaquetarRol"
                  name="editarYMaquetarRol"
                  value={values.editarYMaquetarRol}
                  onChange={handleChange}
                  error={Boolean(errors.editarYMaquetarRol)}
                />
              }
              label="Edición y maquetación"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="disenioImagenesRol"
                  label="disenioImagenesRol"
                  name="disenioImagenesRol"
                  value={values.disenioImagenesRol}
                  onChange={handleChange}
                  error={Boolean(errors.disenioImagenesRol)}
                />
              }
              label="Diseño de imagenes"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="traducirRol"
                  label="traducirRol"
                  name="traducirRol"
                  value={values.traducirRol}
                  onChange={handleChange}
                  error={Boolean(errors.traducirRol)}
                />
              }
              label="Traducir"
            />
          </FormGroup>

          <RadioGroup sx={{ m: "10px 0" }}>
            <Typography component="h5" variant="outlined">
              ¿Qué rol cumple el autor en la obra?
            </Typography>
            {touched.rolAutorEnLaObra && errors.rolAutorEnLaObra && (
              <FormHelperText sx={{ color: "#F50E00", ml: "0.5rem" }}>
                {errors.rolAutorEnLaObra}
              </FormHelperText>
            )}
            <FormControlLabel
              control={
                <Radio
                  id="noParticipa"
                  label="noParticipa"
                  name="rolAutorEnLaObra"
                  value="No participa"
                  onChange={handleChange}
                  error={errors.rolAutorEnLaObra}
                />
              }
              label="No participa en el armado del libro"
            />
            <FormControlLabel
              control={
                <Radio
                  id="siParticipa"
                  label="siParticipa"
                  name="rolAutorEnLaObra"
                  value="Si participa"
                  onChange={handleChange}
                  error={errors.rolAutorEnLaObra}
                />
              }
              label="Participa activamente en el armado del libro"
            />
          </RadioGroup>
          <RadioGroup sx={{ m: "10px 0" }}>
            <Typography component="h5" variant="outlined">
              ¿Qué reconocimiento recibirán?
            </Typography>
            {touched.reconocimientoAutor && errors.reconocimientoAutor && (
              <FormHelperText sx={{ color: "#F50E00", ml: "0.5rem" }}>
                {errors.reconocimientoAutor}
              </FormHelperText>
            )}
            <FormControlLabel
              control={
                <Radio
                  id="reconocimientoAutor"
                  label="reconocimientoAutor"
                  name="reconocimientoAutor"
                  value="SU NOMBRE EN PORTADA, JUNTO AL MIO"
                  onChange={handleChange}
                  error={errors.reconocimientoAutor}
                />
              }
              label="Su nombre en portada, junto al mío"
            />
            <FormControlLabel
              control={
                <Radio
                  id="reconocimientoAutor"
                  label="reconocimientoAutor"
                  name="reconocimientoAutor"
                  value="SU NOMBRE EN PORTADA, SIN EL MIO"
                  onChange={handleChange}
                  error={errors.reconocimientoAutor}
                />
              }
              label="Su nombre en portada, sin el mío"
            />

            <FormControlLabel
              control={
                <Radio
                  id="reconocimientoAutor"
                  label="reconocimientoAutor"
                  name="reconocimientoAutor"
                  value="SU NOMBRE JUNTO A EL O LOS TEXTOS SUYOS"
                  onChange={handleChange}
                  error={errors.reconocimientoAutor}
                />
              }
              label="Su nombre junto a el o los textos suyos"
            />
            <FormControlLabel
              control={
                <Radio
                  id="correccionDeEstilo"
                  label="reconocimientoAutor"
                  name="reconocimientoAutor"
                  value="SU NOMBRE EN EL INICIO DEL LIBRO"
                  onChange={handleChange}
                  error={errors.reconocimientoAutor}
                />
              }
              label="Su nombre en el inicio del libro"
            />
          </RadioGroup>
          <RadioGroup sx={{ m: "10px 0" }}>
            <Typography component="h5" variant="outlined">
              ¿Cómo es el acuerdo comercial entre ustedes?
            </Typography>
            {touched.acuerdoComercialNoAutor &&
              errors.acuerdoComercialNoAutor && (
                <FormHelperText sx={{ color: "#F50E00", ml: "0.5rem" }}>
                  {errors.acuerdoComercialNoAutor}
                </FormHelperText>
              )}
            <FormControlLabel
              control={
                <Radio
                  id="acuerdoComercialNoAutor"
                  label="acuerdoComercialNoAutor"
                  name="acuerdoComercialNoAutor"
                  value="LO ARREGLAMOS DE FORMA PRIVADA"
                  onChange={handleChange}
                  error={errors.acuerdoComercialNoAutor}
                />
              }
              label="Lo arreglamos de forma privada"
            />
            <FormControlLabel
              control={
                <Radio
                  id="acuerdoComercialNoAutor"
                  label="acuerdoComercialNoAutor"
                  name="acuerdoComercialNoAutor"
                  value="RECIBEN UN PORCENTAJE DE FORMA DIRECTA"
                  onChange={handleChange}
                  error={errors.acuerdoComercialNoAutor}
                />
              }
              label="Reciben un porcentaje de forma directa"
            />
            {values.acuerdoComercialNoAutor ===
            "RECIBEN UN PORCENTAJE DE FORMA DIRECTA" ? (
              <FormControl sx={{ m: "10px 0" }} fullWidth>
                <InputLabel>Elegi el porcentaje</InputLabel>
                <Select
                  id="porcentajeComercialNoAutor"
                  label="porcentajeComercialNoAutor"
                  name="porcentajeComercialNoAutor"
                  value={values.porcentajeComercialNoAutor}
                  onChange={handleChange}
                  error={errors.porcentajeComercialNoAutor}
                >
                  <MenuItem value={"0%"}>0%</MenuItem>
                  <MenuItem value={"5%"}>5%</MenuItem>
                  <MenuItem value={"10%"}>10%</MenuItem>
                  <MenuItem value={"15%"}>15%</MenuItem>
                  <MenuItem value={"20%"}>20%</MenuItem>
                  <MenuItem value={"25%"}>25%</MenuItem>
                  <MenuItem value={"35%"}>35%</MenuItem>
                  <MenuItem value={"40%"}>40%</MenuItem>
                  <MenuItem value={"45%"}>45%</MenuItem>
                  <MenuItem value={"50%"}>50%</MenuItem>
                  <MenuItem value={"55%"}>55%</MenuItem>
                  <MenuItem value={"60%"}>60%</MenuItem>
                  <MenuItem value={"65%"}>65%</MenuItem>
                  <MenuItem value={"70%"}>70%</MenuItem>
                  <MenuItem value={"75%"}>75%</MenuItem>
                  <MenuItem value={"80%"}>80%</MenuItem>
                  <MenuItem value={"85%"}>85%</MenuItem>
                  <MenuItem value={"90%"}>90%</MenuItem>
                  <MenuItem value={"95%"}>95%</MenuItem>
                  <MenuItem value={"100%"}>100%</MenuItem>
                </Select>
              </FormControl>
            ) : (
              <></>
            )}
          </RadioGroup>
          <RadioGroup sx={{ m: "10px 0" }}>
            <Typography component="h5" variant="outlined">
              ¿En qué etapa del desarrollo te encontras?
            </Typography>
            {touched.etapaDesarrollo && errors.etapaDesarrollo && (
              <FormHelperText sx={{ color: "#F50E00", ml: "0.5rem" }}>
                {errors.etapaDesarrollo}
              </FormHelperText>
            )}
            <FormControlLabel
              control={
                <Radio
                  id="ESTAMOS TRABAJANDO EN EL TEXTO."
                  label="ESTAMOS TRABAJANDO EN EL TEXTO."
                  name="etapaDesarrollo"
                  value="ESTAMOS TRABAJANDO EN EL TEXTO."
                  onChange={handleChange}
                  error={errors.etapaDesarrollo}
                />
              }
              label="Estamos trabajando en el texto."
            />
            <FormControlLabel
              control={
                <Radio
                  id="TENEMOS EL MANUSCRITO TERMINADO."
                  label="TENEMOS EL MANUSCRITO TERMINADO."
                  name="etapaDesarrollo"
                  value="TENEMOS EL MANUSCRITO TERMINADO."
                  onChange={handleChange}
                  error={errors.etapaDesarrollo}
                />
              }
              label="Tenemos el manuscrito terminado."
            />
            <FormControlLabel
              control={
                <Radio
                  id="TENEMOS MANUSCRITO TERMINADO Y CORREGIDO."
                  label="TENEMOS MANUSCRITO TERMINADO Y CORREGIDO."
                  name="etapaDesarrollo"
                  value="TENEMOS MANUSCRITO TERMINADO Y CORREGIDO."
                  onChange={handleChange}
                  error={errors.etapaDesarrollo}
                />
              }
              label="Tenemos el manuscrito terminado y corregido."
            />
            <FormControlLabel
              control={
                <Radio
                  id="TENEMOS TODO LISTO PARA PUBLICAR."
                  label="TENEMOS TODO LISTO PARA PUBLICAR."
                  name="etapaDesarrollo"
                  value="TENEMOS TODO LISTO PARA PUBLICAR."
                  onChange={handleChange}
                  error={errors.etapaDesarrollo}
                />
              }
              label="Tenemos todo listo para publicar."
            />
          </RadioGroup>
          <FormGroup sx={{ m: "10px 0" }}>
            <Typography component="h5" variant="outlined">
              ¿Qué etapas te hace falta cubrir?
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  id="informeDeLectura"
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
                  id="correccionGramatical"
                  label="correccionGramatical"
                  name="correccionGramatical"
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
                  id="correccionEstilos"
                  label="correccionEstilos"
                  name="correccionEstilos"
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
                  label="disenioImagenes"
                  name="disenioImagenes"
                  value={values.disenioImagenes}
                  onChange={handleChange}
                  error={Boolean(errors.disenioImagenes)}
                />
              }
              label="Diseño e imagenes internas."
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="arteTapa"
                  label="arteTapa"
                  name="arteTapa"
                  value={values.arteTapa}
                  onChange={handleChange}
                  error={Boolean(errors.arteTapa)}
                />
              }
              label="Arte de tapa y contratapa."
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="edicionMaquetacion"
                  label="edicionMaquetacion"
                  name="edicionMaquetacion"
                  value={values.edicionMaquetacion}
                  onChange={handleChange}
                  error={Boolean(errors.edicionMaquetacion)}
                />
              }
              label="Edición y maquetación."
            />

            <FormControlLabel
              control={
                <Checkbox
                  id="todoListo"
                  name="todoListo"
                  label="todoListo"
                  value={values.todoListo}
                  onChange={handleChange}
                  error={Boolean(errors.todoListo)}
                />
              }
              label="Tenemos todo listo."
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="traducir"
                  label="traducir"
                  name="traducir"
                  value={values.traducir}
                  onChange={handleChange}
                  error={Boolean(errors.traducir)}
                />
              }
              label="Traducir."
            />
          </FormGroup>
          {values.traducir === true ? (
            <>
              <Typography component="h5" variant="outlined">
                Traducción
              </Typography>
              <Typography component="h5" variant="outlined">
                Selecciona el idioma original
              </Typography>
              <FormControl sx={{ m: "10px 0" }} fullWidth>
                <InputLabel>Idioma original</InputLabel>
                <Select
                  name="idiomaOriginal"
                  id="idiomaOriginal"
                  label="idiomaOriginal"
                  value={values.idiomaOriginal}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.idiomaOriginal && errors.idiomaOriginal}
                >
                  <MenuItem value={"Español (latinoamerica)"}>
                    Español (latinoamerica)
                  </MenuItem>
                  <MenuItem value={"Ingles"}>Ingles</MenuItem>
                  <MenuItem value={"Frances"}>Frances</MenuItem>
                  <MenuItem value={"Aleman"}>Aleman</MenuItem>
                  <MenuItem value={"Portugues"}>Portugues</MenuItem>
                  <MenuItem value={"Japones"}>Japones</MenuItem>
                </Select>
              </FormControl>
              <Typography component="h5" variant="outlined">
                A que idioma queres traducirlo?
              </Typography>
              <FormControl sx={{ m: "10px 0" }} fullWidth>
                <InputLabel id="idiomaATraducir">Idioma a traducir</InputLabel>
                <Select
                  name="idiomaATraducir"
                  id="idiomaATraducir"
                  label="idiomaATraducir"
                  value={values.idiomaATraducir}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.idiomaATraducir && errors.idiomaATraducir}
                >
                  <MenuItem value={"Español (latinoamerica)"}>
                    Español (latinoamerica)
                  </MenuItem>
                  <MenuItem value={"Ingles"}>Ingles</MenuItem>
                  <MenuItem value={"Frances"}>Frances</MenuItem>
                  <MenuItem value={"Aleman"}>Aleman</MenuItem>
                  <MenuItem value={"Portugues"}>Portugues</MenuItem>
                  <MenuItem value={"Japones"}>Japones</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <></>
          )}
          <RadioGroup sx={{ m: "10px 0" }}>
            <Typography component="h5" variant="outlined">
              ¿Qué posición tendrías ante limitaciones presupuestarias?
            </Typography>
            {touched.limitacionesPresupuestarias &&
              errors.limitacionesPresupuestarias && (
                <FormHelperText sx={{ color: "#F50E00", ml: "0.5rem" }}>
                  {errors.limitacionesPresupuestarias}
                </FormHelperText>
              )}
            <FormControlLabel
              control={
                <Radio
                  id="limitacionesPresupuestarias"
                  label="limitacionesPresupuestarias"
                  name="limitacionesPresupuestarias"
                  value="puedo cubrir el trabajo de mis colegas aunque mi pago quede pendiente"
                  variant="outlined"
                  onChange={handleChange}
                  error={errors.limitacionesPresupuestarias}
                />
              }
              label="Puedo cubrir el trabajo de mis colegas, aunque mi pago quede pendiente"
            />
            <FormControlLabel
              control={
                <Radio
                  id="limitacionesPresupuestarias"
                  label="limitacionesPresupuestarias"
                  name="limitacionesPresupuestarias"
                  value="prefiero que lo cubra la editorial aunque mi pago quede pendiente"
                  onChange={handleChange}
                  error={errors.limitacionesPresupuestarias}
                />
              }
              label="Prefiero que lo cubra la editorial, aunque mi pago quede pendiente"
            />
            <FormControlLabel
              control={
                <Radio
                  id="limitacionesPresupuestarias"
                  label="limitacionesPresupuestarias"
                  name="limitacionesPresupuestarias"
                  value="lo quiero hacer ad honorem"
                  onChange={handleChange}
                  error={errors.limitacionesPresupuestarias}
                />
              }
              label="Lo quiero hacer ad honorem"
            />
            <FormControlLabel
              control={
                <Radio
                  id="limitacionesPresupuestarias"
                  label="limitacionesPresupuestarias"
                  name="limitacionesPresupuestarias"
                  value="no hay trato"
                  onChange={handleChange}
                  error={errors.limitacionesPresupuestarias}
                />
              }
              label="No hay trato"
            />
          </RadioGroup>
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
            publicar está sujeta al catálogo preexistente y a las propuestas que
            recibamos. Tené en cuenta que, si estás dispuesto a financiar alguna
            parte, esto se puede acelerar. Tu contrato tendrá en consideración
            estos factores.
          </Typography>
          <RadioGroup sx={{ m: "10px 0" }}>
            <Typography component="h5" variant="outlined">
              ¿Vas a involucrarte en la distribución del libro? / Para esto,
              debes registrarte como distribuidor.
            </Typography>
            {touched.distribucionLibro && errors.distribucionLibro && (
              <FormHelperText sx={{ color: "#F50E00", ml: "0.5rem" }}>
                {errors.distribucionLibro}
              </FormHelperText>
            )}
            <FormControlLabel
              control={
                <Radio
                  id="loHareEnPersona"
                  label="loHareEnPersona"
                  name="distribucionLibro"
                  value="Si, lo hare en persona"
                  onChange={handleChange}
                  error={errors.distribucionLibro}
                />
              }
              label="Si, lo hare en persona"
            />
            <FormControlLabel
              control={
                <Radio
                  id="siPeroNoExclusivamente"
                  label="siPeroNoExclusivamente"
                  name="distribucionLibro"
                  value="Si, pero no exclusivamente"
                  onChange={handleChange}
                  error={errors.distribucionLibro}
                />
              }
              label="Si, pero no exclusivamente"
            />

            <FormControlLabel
              control={
                <Radio
                  id="noGracias"
                  label="noGracias"
                  name="distribucionLibro"
                  value="No, gracias"
                  onChange={handleChange}
                  error={errors.distribucionLibro}
                />
              }
              label="No, gracias"
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
              Considera que tu compromiso con la distribución facilitara la
              llegada al público.
            </Typography>
          </RadioGroup>
          <RadioGroup sx={{ m: "10px 0" }}>
            <Typography component="h5" variant="outlined">
              ¿Qué tipo de distribución te gustaría?
            </Typography>
            {touched.tipoDistribucion && errors.tipoDistribucion && (
              <FormHelperText sx={{ color: "#F50E00", ml: "0.5rem" }}>
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
          <Typography component="h5" variant="outlined" sx={{ m: "6px" }}>
            Contanos sobre tu idea
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
              mb: "10px",
              width: "90%",
              minHeight: "3rem",
            }}
            id="contanosMas"
            name="contanosMas"
            label="Pensa que el contexto es importante..."
            value={values.contanosMas}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.contanosMas && errors.contanosMas}
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
export default FormEditarContenidoAjeno;

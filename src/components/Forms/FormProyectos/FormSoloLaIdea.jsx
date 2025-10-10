import {
  TextField,
  Checkbox,
  Typography,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  FormHelperText,
} from "@mui/material";
import { Form, Formik } from "formik";
import emailjs from "emailjs-com";
import { validationSoloLaIdea } from "../ValidationSchemas/ValidationSchemas";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const FormSoloLaIdea = ({ posicionForm, posicionForm2 }) => {
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
        relacionIdeaOriginal: "",
        guiareArmado: false,
        recopilarInformacion: false,
        controlarContenido: false,
        noIntervendre: false,
        textosEscritosPorMi: false,
        tengoInformacionAlRespecto: false,
        tengoIdeasYPropuestas: false,
        noTengoNadaPensado: false,
        entrevistas: false,
        escrituraIntegral: false,
        escrituraParcial: false,
        informeDeLectura: false,
        disenioImagenes: false,
        correccionGramaticalYEstilos: false,
        fotografia: false,
        arteTapa: false,
        edicionMaquetacion: false,
        limitacionesPresupuestarias: "",
      }}
      validationSchema={validationSoloLaIdea}
      onSubmit={(values, { resetForm }) => {
        const templateParams = {
          formato: values.formato,
          idea: values.idea,
          userName: currentUser ? currentUser.nombre : "No especificado",
          userEmail: currentUser ? currentUser.email : "No especificado",
          userTelefono: currentUser ? currentUser.telefono : "No especificado",
          relacionIdeaOriginal: values.relacionIdeaOriginal,
          guiareArmado: !values.guiareArmado
            ? ""
            : "Guiaré el armado del libro",
          recopilarInformacion: !values.recopilarInformacion
            ? ""
            : "Recopilaré información y haré de intermediario",
          controlarContenido: !values.controlarContenido
            ? ""
            : "Controlaré el contenido que se produce",
          noIntervendre: !values.noIntervendre
            ? ""
            : "No intervendré en absoluto",

          textosEscritosPorMi: !values.textosEscritosPorMi
            ? ""
            : "Tengo textos escritos por mi",
          tengoInformacionAlRespecto: !values.tengoInformacionAlRespecto
            ? ""
            : "Tengo información al respecto",
          tengoIdeasYPropuestas: !values.tengoIdeasYPropuestas
            ? ""
            : "Tengo ideas y propuestas",
          noTengoNadaPensado: !values.noTengoNadaPensado
            ? ""
            : "No tengo nada pensado",
          entrevistas: !values.entrevistas
            ? ""
            : "Entrevistas, estudio y bibliografía",
          escrituraIntegral: !values.escrituraIntegral
            ? ""
            : "Escritura integral del texto",
          escrituraParcial: !values.escrituraParcial
            ? ""
            : "Escritura parcial del texto",
          informeDeLectura: !values.informeDeLectura
            ? ""
            : "Informe de lectura",
          disenioImagenes: !values.disenioImagenes ? "" : "Diseño e imágenes",
          correccionGramaticalYEstilos: !values.correccionGramaticalYEstilos
            ? ""
            : "Corrección gramatical y estilos",
          fotografia: !values.fotografia ? "" : "Fotografía",
          arteTapa: !values.arteTapa ? "" : "Arte de tapa y contratapa",
          edicionMaquetacion: !values.edicionMaquetacion
            ? ""
            : "Edición y maquetación",

          limitacionesPresupuestarias: values.limitacionesPresupuestarias,
          contanosMas: values.contanosMas,
        };
        emailjs

          .send(
            import.meta.env.VITE_EMAILJS_SERVICE_CONTENIDO_AJENO,
            import.meta.env.VITE_EMAILJS_TEMPLATE_SOLO_IDEA,
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
          <RadioGroup sx={{ m: "10px 0" }}>
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
              Por decisión editorial y financiera, TRASHUMAR no otorga becas
              para libros auto bibliográficos o auto ficción. Perdonanos. Y
              ahora sí, contanos de que se trata (formato, genero, sinopsis,
              etcétera).
            </Typography>
            <Typography component="h5" variant="outlined">
              ¿Qué relación tenes vos con la idea original?
            </Typography>
            {touched.relacionIdeaOriginal && errors.relacionIdeaOriginal && (
              <FormHelperText sx={{ color: "#F50E00", ml: "0.5rem" }}>
                {errors.relacionIdeaOriginal}
              </FormHelperText>
            )}
            <FormControlLabel
              control={
                <Radio
                  id="vivenciasYAprendizajes"
                  label="vivenciasYAprendizajes"
                  name="relacionIdeaOriginal"
                  value="SON VIVENCIAS Y APRENDIZAJES DE TIPO PERSONAL"
                  onChange={handleChange}
                  error={errors.relacionIdeaOriginal}
                />
              }
              label="Son vivencias y aprendizajes de tipo personal"
            />
            <FormControlLabel
              control={
                <Radio
                  id="areaDeInteres"
                  label="areaDeInteres"
                  name="relacionIdeaOriginal"
                  value="TIENE QUE VER CON UN ÁREA DE MI INTERES"
                  error={errors.relacionIdeaOriginal}
                  onChange={handleChange}
                />
              }
              label="Tiene que ver con un área de mi interés"
            />
            <FormControlLabel
              control={
                <Radio
                  id="soyProfesional"
                  label="soyProfesional"
                  name="relacionIdeaOriginal"
                  value="SOY PROFESIONAL EN EL TEMA"
                  error={errors.relacionIdeaOriginal}
                  onChange={handleChange}
                />
              }
              label="Soy profesional en el tema"
            />
            <FormControlLabel
              control={
                <Radio
                  id="ideaFicticiaPropia"
                  label="ideaFicticiaPropia"
                  name="relacionIdeaOriginal"
                  value="ES UNA HISTORIA FICTICIA IDEADA POR MÍ"
                  onChange={handleChange}
                  error={errors.relacionIdeaOriginal}
                />
              }
              label="Es una historia ficticia ideada por mí"
            />
          </RadioGroup>
          <FormGroup sx={{ m: "10px 0" }}>
            <Typography component="h5" variant="outlined">
              ¿En qué procesos intervendrás?
            </Typography>

            <FormControlLabel
              control={
                <Checkbox
                  id="guiareArmado"
                  label="guiareArmado"
                  name="guiareArmado"
                  value={values.guiareArmado}
                  onChange={handleChange}
                  error={Boolean(errors.guiareArmado)}
                />
              }
              label="Guiaré el armado del libro"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="recopilarInformacion"
                  label="recopilarInformacion"
                  name="recopilarInformacion"
                  value={values.recopilarInformacion}
                  onChange={handleChange}
                  error={Boolean(errors.recopilarInformacion)}
                />
              }
              label="Recopilaré información y haré de intermediario"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="controlarContenido"
                  label="controlarContenido"
                  name="controlarContenido"
                  error={Boolean(errors.controlarContenido)}
                  value={values.controlarContenido}
                  onChange={handleChange}
                />
              }
              label="Controlaré el contenido que se produce"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="noIntervendre"
                  label="noIntervendre"
                  name="noIntervendre"
                  error={Boolean(errors.noIntervendre)}
                  value={values.noIntervendre}
                  onChange={handleChange}
                />
              }
              label="No intervendré en absoluto"
            />
          </FormGroup>
          <FormGroup sx={{ m: "10px 0" }}>
            <Typography component="h5" variant="outlined">
              ¿Tenes material previo?
            </Typography>

            <FormControlLabel
              control={
                <Checkbox
                  id="textosEscritosPorMi"
                  label="textosEscritosPorMi"
                  name="textosEscritosPorMi"
                  error={Boolean(errors.textosEscritosPorMi)}
                  value={values.textosEscritosPorMi}
                  onChange={handleChange}
                />
              }
              label="Tento textos escritos por mí"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="tengoInformacionAlRespecto"
                  label="tengoInformacionAlRespecto"
                  name="tengoInformacionAlRespecto"
                  error={Boolean(errors.tengoInformacionAlRespecto)}
                  value={values.tengoInformacionAlRespecto}
                  onChange={handleChange}
                />
              }
              label="Tengo información al respecto"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="tengoIdeasYPropuestas"
                  label="tengoIdeasYPropuestas"
                  name="tengoIdeasYPropuestas"
                  error={Boolean(errors.tengoIdeasYPropuestas)}
                  value={values.tengoIdeasYPropuestas}
                  onChange={handleChange}
                />
              }
              label="Tengo ideas y propuestas"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="noTengoNadaPensado"
                  label="noTengoNadaPensado"
                  name="noTengoNadaPensado"
                  error={Boolean(errors.noTengoNadaPensado)}
                  value={values.noTengoNadaPensado}
                  onChange={handleChange}
                />
              }
              label="No tengo nada pensado"
            />
          </FormGroup>

          <FormGroup sx={{ m: "10px 0" }}>
            <Typography component="h5" variant="outlined">
              ¿Qué etapas te hace falta cubrir?
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  id="entrevistasEstudioYBibliografia"
                  label="entrevistasEstudioYBibliografia"
                  name="entrevistas"
                  value={values.entrevistas}
                  error={Boolean(errors.entrevistas)}
                  onChange={handleChange}
                />
              }
              label="Entrevistas, estudio y bibliografía"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="escrituraIntegralDelTexto"
                  label="escrituraIntegralDelTexto"
                  name="escrituraIntegral"
                  value={values.escrituraIntegral}
                  error={Boolean(errors.escrituraIntegral)}
                  onChange={handleChange}
                />
              }
              label="Escritura integral del texto"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="escrituraParcialDelTexto"
                  label="escrituraParcialDelTexto"
                  name="escrituraParcial"
                  value={values.escrituraParcial}
                  error={Boolean(errors.escrituraParcial)}
                  onChange={handleChange}
                />
              }
              label="Escritura parcial del texto"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="informeLectura"
                  label="informeLectura"
                  name="informeDeLectura"
                  value={values.informeDeLectura}
                  error={Boolean(errors.informeDeLectura)}
                  onChange={handleChange}
                />
              }
              label="Informe de lectura"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="disenioEImagenes"
                  label="disenioEImagenes"
                  name="disenioImagenes"
                  value={values.disenioImagenes}
                  error={Boolean(errors.disenioImagenes)}
                  onChange={handleChange}
                />
              }
              label="Diseño e imágenes"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="correccionGramaticalYEstilos"
                  label="correccionGramaticalYEstilos"
                  name="correccionGramaticalYEstilos"
                  value={values.correccionGramaticalYEstilos}
                  error={Boolean(errors.correccionGramaticalYEstilos)}
                  onChange={handleChange}
                />
              }
              label="Corrección gramatical y estilos"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="fotografia"
                  label="fotografia"
                  name="fotografia"
                  value={values.fotografia}
                  error={Boolean(errors.fotografia)}
                  onChange={handleChange}
                />
              }
              label="Fotografía"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="arteDeTapayContratapa"
                  label="arteDeTapayContratapa"
                  name="arteTapa"
                  value={values.arteTapa}
                  error={Boolean(errors.arteTapa)}
                  onChange={handleChange}
                />
              }
              label="Arte de tapa y contratapa"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="edicionYMaquetacion"
                  label="edicionYMaquetacion"
                  name="edicionMaquetacion"
                  value={values.edicionMaquetacion}
                  error={Boolean(errors.edicionMaquetacion)}
                  onChange={handleChange}
                />
              }
              label="Edicion y maquetación"
            />
          </FormGroup>
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
                  id="puedoCubrirTrabajo"
                  label="puedoCubrirTrabajo"
                  value="puedo cubrir el trabajo de mis colegas aunque mi pago quede pendiente"
                  name="limitacionesPresupuestarias"
                  error={errors.limitacionesPresupuestarias}
                  onChange={handleChange}
                />
              }
              label="Puedo cubrir el trabajo de mis colegas, aunque mi pago quede pendiente"
            />
            <FormControlLabel
              control={
                <Radio
                  id="prefieroQueLoCubraEditorial"
                  label="prefieroQueLoCubraEditorial"
                  value="prefiero que lo cubra la editorial aunque mi pago quede pendiente"
                  name="limitacionesPresupuestarias"
                  error={errors.limitacionesPresupuestarias}
                  onChange={handleChange}
                />
              }
              label="Prefiero que lo cubra la editorial, aunque mi pago quede pendiente"
            />
            <FormControlLabel
              control={
                <Radio
                  id="loQuieroHacerAdHonorem"
                  label="loQuieroHacerAdHonorem"
                  value="lo quiero hacer ad honorem"
                  name="limitacionesPresupuestarias"
                  error={errors.limitacionesPresupuestarias}
                  onChange={handleChange}
                />
              }
              label="Lo quiero hacer ad honorem"
            />
            <FormControlLabel
              control={
                <Radio
                  id="noHayTrato"
                  label="noHayTrato"
                  value="no hay trato"
                  name="limitacionesPresupuestarias"
                  error={errors.limitacionesPresupuestarias}
                  onChange={handleChange}
                />
              }
              label="No hay trato"
            />
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
            sx={{
              mx: "auto",
              color: "white",
              my: "30px",
              display: "flex",
              bgcolor: "#0097A7",
            }}
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
export default FormSoloLaIdea;

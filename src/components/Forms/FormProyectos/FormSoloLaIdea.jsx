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
} from "@mui/material";
import { Form, Formik, useFormik } from "formik";
import { Fade } from "react-awesome-reveal";
import { validationProyecto } from "../ValidationSchemas/ValidationSchemas";
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
        console.log("values:", values);
        const templateParams = {
          formato: values.formato,
          rolEnLaObra: values.rolEnLaObra,
          contanosMas: values.contanosMas,
          relacionIdeaOriginal: values.relacionIdeaOriginal,
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
                  name="ProcesoIntervendras"
                  value={values.ProcesoIntervendras}
                  onChange={handleChange}
                  error={Boolean(errors.ProcesoIntervendras)}
                />
              }
              label="Guiaré el armado del libro"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="recopilarInformacion"
                  label="recopilarInformacion"
                  value={values.ProcesoIntervendras}
                  onChange={handleChange}
                  error={Boolean(errors.ProcesoIntervendras)}
                />
              }
              label="Recopilaré información y haré de intermediario"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="controlarContenido"
                  label="controlarContenido"
                  name="procesoIntervendras"
                  error={Boolean(errors.procesoIntervendras)}
                  value={values.procesoIntervendras}
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
                  name="procesoIntervendras"
                  error={Boolean(errors.procesoIntervendras)}
                  value={values.procesoIntervendras}
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
                  name="materialPrevio"
                  error={Boolean(errors.materialPrevio)}
                  value={values.materialPrevio}
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
                  name="materialPrevio"
                  error={Boolean(errors.materialPrevio)}
                  value={values.materialPrevio}
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
                  name="materialPrevio"
                  error={Boolean(errors.materialPrevio)}
                  value={values.materialPrevio}
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
                  name="materialPrevio"
                  error={Boolean(errors.materialPrevio)}
                  value={values.materialPrevio}
                  onChange={handleChange}
                />
              }
              label="No tengo nada pensado"
            />
          </FormGroup>
          {/* <FormGroup sx={{ m: "10px 0" }}>
            <Typography
              component="h5"
              variant="outlined"
            >
              ¿En qué procesos intervendrás?
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  id="guiareArmado"
                  label="guiareArmado"
                  variant="outlined"
                  value={values.guiareArmado}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              }
              label="GUIARÉ EL ARMADO DEL LIBRO"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="recopilarInformacion"
                  label="recopilarInformacion"
                  variant="outlined"
                  value={values.recopilarInformacion}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              }
              label="RECOPILARE INFORMACIÓN Y HARE DE INTERMEDIARIO"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="controlarContenido"
                  label="controlarContenido"
                  variant="outlined"
                  value={values.controlarContenido}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              }
              label="CONTROLARE EL CONTENIDO QUE SE PRODUCE"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="noIntervendre"
                  label="noIntervendre"
                  variant="outlined"
                  value={values.noIntervendre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              }
              label="NO INTERVENDRÉ EN ABSOLUTO"
            />
          </FormGroup>
          <FormGroup sx={{ m: "10px 0" }}>
            <Typography
              component="h5"
              id="outlined-basic"
              label="AUTORES"
              variant="outlined"
            >
              ¿Tenes material previo?
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  id="textosEscritosPorMi"
                  label="textosEscritosPorMi"
                  variant="outlined"
                  value={values.textosEscritosPorMi}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              }
              label="TENGO TEXTOS ESCRITOS POR MÍ"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="tengoInformacionAlRespecto"
                  label="tengoInformacionAlRespecto"
                  variant="outlined"
                  value={values.tengoInformacionAlRespecto}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              }
              label="TENGO INFORMACIÓN AL RESPECTO"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="tengoIdeasYPropuestas"
                  label="tengoIdeasYPropuestas"
                  variant="outlined"
                  value={values.tengoIdeasYPropuestas}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              }
              label="TENGO IDEAS Y PROPUESTAS"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="noTengoNadaPensado"
                  label="noTengoNadaPensado"
                  variant="outlined"
                  value={values.noTengoNadaPensado}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              }
              label="NO TENGO NADA PENSADO"
            />
          </FormGroup> */}
          <FormGroup sx={{ m: "10px 0" }}>
            <Typography component="h5" variant="outlined">
              ¿Qué etapas te hace falta cubrir?
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  id="entrevistasEstudioYBibliografia"
                  label="entrevistasEstudioYBibliografia"
                  name="etapaACubrir"
                  value={values.etapaACubrir}
                  error={Boolean(errors.etapaACubrir)}
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
                  name="etapaACubrir"
                  value={values.etapaACubrir}
                  error={Boolean(errors.etapaACubrir)}
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
                  name="etapaACubrir"
                  value={values.etapaACubrir}
                  error={Boolean(errors.etapaACubrir)}
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
                  name="etapaACubrir"
                  value={values.etapaACubrir}
                  error={Boolean(errors.etapaACubrir)}
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
                  name="etapaACubrir"
                  value={values.etapaACubrir}
                  error={Boolean(errors.etapaACubrir)}
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
                  name="etapaACubrir"
                  value={values.etapaACubrir}
                  error={Boolean(errors.etapaACubrir)}
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
                  name="etapaACubrir"
                  value={values.etapaACubrir}
                  error={Boolean(errors.etapaACubrir)}
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
                  name="etapaACubrir"
                  value={values.etapaACubrir}
                  error={Boolean(errors.etapaACubrir)}
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
                  name="etapaACubrir"
                  value={values.etapaACubrir}
                  error={Boolean(errors.etapaACubrir)}
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
            {touched.acuerdoComercial && errors.acuerdoComercial && (
              <FormHelperText sx={{ color: "#F50E00", ml: "0.5rem" }}>
                {errors.acuerdoComercial}
              </FormHelperText>
            )}
            <FormControlLabel
              control={
                <Radio
                  id="acuerdoComercial"
                  label="acuerdoComercial"
                  value="puedo cubrir el trabajo de mis colegas aunque mi pago quede pendiente"
                  name="posicionLimitacionesPresupuestarias"
                  error={errors.acuerdoComercial}
                  onChange={handleChange}
                />
              }
              label="Puedo cubrir el trabajo de mis colegas, aunque mi pago quede pendiente"
            />
            <FormControlLabel
              control={
                <Radio
                  id="acuerdoComercial"
                  label="acuerdoComercial"
                  value="prefiero que lo cubra la editorial aunque mi pago quede pendiente"
                  name="posicionLimitacionesPresupuestarias"
                  error={errors.acuerdoComercial}
                  onChange={handleChange}
                />
              }
              label="Prefiero que lo cubra la editorial, aunque mi pago quede pendiente"
            />
            <FormControlLabel
              control={
                <Radio
                  id="acuerdoComercial"
                  label="acuerdoComercial"
                  value="lo quiero hacer ad honorem"
                  name="posicionLimitacionesPresupuestarias"
                  error={errors.acuerdoComercial}
                  onChange={handleChange}
                />
              }
              label="Lo quiero hacer ad honorem"
            />
            <FormControlLabel
              control={
                <Radio
                  id="acuerdoComercial"
                  label="acuerdoComercial"
                  value="no hay trato"
                  name="posicionLimitacionesPresupuestarias"
                  error={errors.acuerdoComercial}
                  onChange={handleChange}
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
export default FormSoloLaIdea;

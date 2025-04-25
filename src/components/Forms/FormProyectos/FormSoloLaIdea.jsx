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

const FormSoloLaIdea = () => {
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
      <RadioGroup sx={{ m: "10px 0" }}>
        <Typography
          color={"secondary.white"}
          bgcolor={"bg.dark"}
          fontSize={"20px"}
          sx={{
            border: "2px solid ",
            borderRadius: "10px",
            padding: "5px",
          }}
        >
          Por decisión editorial y financiera, TRASHUMAR no otorga becas para
          libros auto bibliográficos o auto ficción. Perdonanos. Y ahora sí,
          contanos de que se trata (formato, genero, sinopsis, etcétera).
        </Typography>
        <Typography
          component="h4"
          id="outlined-basic"
          label="AUTORES"
          variant="outlined"
        >
          ¿Qué relación tenes vos con la idea original?
        </Typography>
        <FormControlLabel
          control={
            <Radio
              variant="outlined"
              id="vivenciasYAprendizajes"
              label="vivenciasYAprendizajes"
              name="relacionIdeaOriginal"
              value="SON VIVENCIAS Y APRENDIZAJES DE TIPO PERSONAL"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="SON VIVENCIAS Y APRENDIZAJES DE TIPO PERSONAL"
        />
        <FormControlLabel
          control={
            <Radio
              id="areaDeInteres"
              label="areaDeInteres"
              variant="outlined"
              name="relacionIdeaOriginal"
              value="TIENE QUE VER CON UN ÁREA DE MI INTERES"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="TIENE QUE VER CON UN ÁREA DE MI INTERES"
        />
        <FormControlLabel
          control={
            <Radio
              id="soyProfesional"
              label="soyProfesional"
              variant="outlined"
              name="relacionIdeaOriginal"
              value="SOY PROFESIONAL EN EL TEMA"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="SOY PROFESIONAL EN EL TEMA"
        />
        <FormControlLabel
          control={
            <Radio
              id="ideaFicticiaPropia"
              label="ideaFicticiaPropia"
              variant="outlined"
              name="relacionIdeaOriginal"
              value="ES UNA HISTORIA FICTICIA IDEADA POR MÍ"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="ES UNA HISTORIA FICTICIA IDEADA POR MÍ"
        />
      </RadioGroup>
      <FormGroup sx={{ m: "10px 0" }}>
        <Typography
          component="h4"
          id="outlined-basic"
          label="AUTORES"
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
              value={formik.values.guiareArmado}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              value={formik.values.recopilarInformacion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              value={formik.values.controlarContenido}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              value={formik.values.noIntervendre}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="NO INTERVENDRÉ EN ABSOLUTO"
        />
      </FormGroup>
      <FormGroup sx={{ m: "10px 0" }}>
        <Typography
          component="h4"
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
              value={formik.values.textosEscritosPorMi}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              value={formik.values.tengoInformacionAlRespecto}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              value={formik.values.tengoIdeasYPropuestas}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              value={formik.values.noTengoNadaPensado}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="NO TENGO NADA PENSADO"
        />
      </FormGroup>
      <FormGroup sx={{ m: "10px 0" }}>
        <Typography
          component="h4"
          id="outlined-basic"
          label="AUTORES"
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
              value={formik.values.guiareArmado}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              value={formik.values.recopilarInformacion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              value={formik.values.controlarContenido}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              value={formik.values.noIntervendre}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="NO INTERVENDRÉ EN ABSOLUTO"
        />
      </FormGroup>
      <FormGroup sx={{ m: "10px 0" }}>
        <Typography
          component="h4"
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
              value={formik.values.textosEscritosPorMi}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              value={formik.values.tengoInformacionAlRespecto}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              value={formik.values.tengoIdeasYPropuestas}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              value={formik.values.noTengoNadaPensado}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="NO TENGO NADA PENSADO"
        />
      </FormGroup>
      <FormGroup sx={{ m: "10px 0" }}>
        <Typography
          component="h4"
          id="outlined-basic"
          label="AUTORES"
          variant="outlined"
        >
          ¿Qué etapas te hace falta cubrir?
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              id="entrevistasEstudioYBibliografia"
              label="entrevistasEstudioYBibliografia"
              variant="outlined"
              value={formik.values.entrevistasEstudioYBibliografia}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="ENTREVISTAS, ESTUDIO Y BIBLIOGRAFÍA"
        />
        <FormControlLabel
          control={
            <Checkbox
              id="escrituraIntegralDelTexto"
              label="escrituraIntegralDelTexto"
              variant="outlined"
              value={formik.values.escrituraIntegralDelTexto}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="ESCRITURA INTEGRAL DEL TEXTO"
        />
        <FormControlLabel
          control={
            <Checkbox
              id="escrituraParcialDelTexto"
              label="escrituraParcialDelTexto"
              variant="outlined"
              value={formik.values.escrituraParcialDelTexto}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="ESCRITURA PARCIAL DEL TEXTO"
        />
        <FormControlLabel
          control={
            <Checkbox
              id="informeLectura"
              label="informeLectura"
              variant="outlined"
              value={formik.values.informeLectura}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="INFORME DE LECTURA"
        />
        <FormControlLabel
          control={
            <Checkbox
              id="disenioEImagenes"
              label="disenioEImagenes"
              variant="outlined"
              value={formik.values.disenioEImagenes}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="DISEÑO E IMÁGENES INTERNAS"
        />
        <FormControlLabel
          control={
            <Checkbox
              id="correccionGramaticalYEstilos"
              label="correccionGramaticalYEstilos"
              variant="outlined"
              value={formik.values.correccionGramaticalYEstilos}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="CORRECCIÓN GRAMATICAL Y DE ESTILO"
        />
        <FormControlLabel
          control={
            <Checkbox
              id="fotografia"
              label="fotografia"
              variant="outlined"
              value={formik.values.fotografia}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="FOTOGRAFÍA
                      "
        />
        <FormControlLabel
          control={
            <Checkbox
              id="arteDeTapayContratapa"
              label="arteDeTapayContratapa"
              variant="outlined"
              value={formik.values.arteDeTapayContratapa}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="ARTE DE TAPA Y CONTRATAPA"
        />
        <FormControlLabel
          control={
            <Checkbox
              id="edicionYMaquetacion"
              label="edicionYMaquetacion"
              variant="outlined"
              value={formik.values.edicionYMaquetacion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="EDICIÓN Y MAQUETACIÓN"
        />
      </FormGroup>
      <RadioGroup sx={{ m: "10px 0" }}>
        <Typography
          component="h4"
          id="outlined-basic"
          label="AUTORES"
          variant="outlined"
        >
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
        fontSize={"20px"}
        bgcolor={"bg.dark"}
        color={"secondary.white"}
        sx={{
          border: "2px solid ",
          borderRadius: "10px",

          padding: "5px",
        }}
      >
        TRASHUMAR abre becas periódicamente, en la medida en que la plataforma y
        el presupuesto lo permite. La selección de que libros publicar está
        sujeta al catálogo preexistente y a las propuestas que recibamos. Tené
        en cuenta que, si estás dispuesto a financiar alguna parte, esto se
        puede acelerar. Tu contrato tendrá en consideración estos factores.
      </Typography>
    </>
  );
};
export default FormSoloLaIdea;

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { validationProyecto } from "../ValidationSchemas/ValidationSchemas";
import { useFormik } from "formik";
import {
  FormLibroContenidoDeAutor,
  FormLibroEditarContenidoAjeno,
  FormLibroSoloLaIdea,
  FormSerieDeTextos,
  FormTextoUnico,
} from "./Forms";
import { Fade } from "react-awesome-reveal";
import emailjs from "emailjs-com";

function FormProyectos() {
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
    <Container
      maxWidth="md"
      sx={{
        minHeight: "65vh",
        fontSize: { xs: "18px", sm: "24px", md: "26px" },
        p: "30px 0",
        display: "flex",
        m: "0 auto",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid #09A5B0",
        borderRadius: "5px",
        backgroundColor: "#A4FFFE",
      }}
    >
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          flexDirection: "column",
          marginBottom: "0",
          width: { xs: "90%", md: "60%" },
          color: "#02291F",
        }}
      >
        <RadioGroup sx={{ m: "10px 0" }}>
          <Typography
            component="h4"
            id="outlined-basic"
            label="AUTORES"
            variant="outlined"
          >
            Elegí el formato a trabajar
          </Typography>
          <FormControlLabel
            control={
              <Radio
                id="textoUnico"
                name="formato"
                value="Texto unico"
                label="textoUnico"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            }
            label="QUIERO PUBLICAR UN TEXTO ÚNICO EN LA PÁGINA"
          />
          <FormControlLabel
            control={
              <Radio
                id="serieTextos"
                label="serieTextos"
                variant="outlined"
                name="formato"
                value="Serie de textos"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            }
            label="QUIERO PUBLICAR UNA SERIE DE TEXTOS EN LA PÁGINA"
          />
          <FormControlLabel
            control={
              <Radio
                id="libroDigital"
                label="libroDigital"
                variant="outlined"
                name="formato"
                value="Libro digital"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            }
            label="QUIERO PUBLICAR UN LIBRO DIGITAL"
          />
          <FormControlLabel
            control={
              <Radio
                id="libroFisico"
                label="libroFisico"
                variant="outlined"
                name="formato"
                value="Libro fisico"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            }
            label="QUIERO PUBLICAR UN LIBRO FISICO"
          />
        </RadioGroup>
        {formik.values.formato === "Texto unico" ? (
          <Fade>
            <FormTextoUnico formik={formik} />
          </Fade>
        ) : (
          <></>
        )}
        {formik.values.formato === "Serie de textos" ? (
          <Fade>
            <FormSerieDeTextos formik={formik} />
          </Fade>
        ) : (
          <></>
        )}

        {formik.values.formato === "Libro digital" ||
        formik.values.formato === "Libro fisico" ? (
          <>
            <Fade>
              <RadioGroup sx={{ m: "10px 0" }}>
                <Typography component="h4" variant="outlined">
                  Selecciona el rol que cumplís en la obra
                </Typography>
                <FormControlLabel
                  control={
                    <Radio
                      id="ContenidoMiAutoria"
                      label="ContenidoMiAutoria"
                      variant="outlined"
                      name="rolEnLaObra"
                      value="Contenido de mi autoria"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  }
                  label="EL CONTENIDO A PUBLICAR ES DE MI AUTORIA"
                />
                <FormControlLabel
                  control={
                    <Radio
                      id="Editar"
                      label="Editar"
                      variant="outlined"
                      name="rolEnLaObra"
                      value="Editar contenido ajeno"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  }
                  label="EDITARÉ CONTENIDO AJENO"
                />
                <FormControlLabel
                  control={
                    <Radio
                      id="tengoIdea"
                      label="tengoIdea"
                      variant="outlined"
                      name="rolEnLaObra"
                      value="Tengo la idea"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      /*          error={
                        formik.touched.tengoIdea && !!formik.errors.tengoIdea
                      }
                      helperText={
                        formik.touched.tengoIdea && formik.errors.tengoIdea
                      } */
                    />
                  }
                  label="TENGO LA IDEA, PERO NO LO VOY A ESCRIBIR"
                />
              </RadioGroup>
            </Fade>

            {formik.values.rolEnLaObra === "Contenido de mi autoria" ? (
              <>
                <Fade>
                  <FormLibroContenidoDeAutor formik={formik} />
                </Fade>
              </>
            ) : (
              <></>
            )}

            {formik.values.rolEnLaObra === "Editar contenido ajeno" ? (
              <Fade>
                <FormLibroEditarContenidoAjeno formik={formik} />
              </Fade>
            ) : (
              <></>
            )}

            {formik.values.rolEnLaObra === "Tengo la idea" ? (
              <Fade>
                <FormLibroSoloLaIdea formik={formik} />
              </Fade>
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}

        <Typography
          component="h4"
          id="contanosMas"
          label="contanosMas"
          variant="outlined"
          sx={{ m: "6px" }}
        >
          Contanos más al respecto de tu proyecto
        </Typography>
        <TextField
          multiline
          sx={{ m: "6px" }}
          id="contanosMas"
          value={formik.values.contanosMas}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Mi idea es ...."
          variant="outlined"
        />
        <Button sx={{}} type="submit" variant="contained">
          enviar formulario
        </Button>
      </Box>
    </Container>
  );
}

export default FormProyectos;

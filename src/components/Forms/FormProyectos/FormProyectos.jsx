import * as React from "react";
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
      manuscritoTerminado: false,
      manuscritoTerminadoCorregido: false,
      listoPublicar: false,
      informeDeLectura: false,
      correccionGramatical: false,
      correccionEstilos: false,
      traducir: false,
      idiomaOriginal: "",
      idiomaATraducir: "",
    },
    validationSchema: validationProyecto,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  /* 
  if (traducir === true || idiomaATraducir === "" || idiomaOriginal === "") {
    setError("completar idioma a traducir");
  } */

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
                      error={
                        formik.touched.tengoIdea &&
                        Boolean(formik.errors.tengoIdea)
                      }
                      helperText={
                        formik.touched.tengoIdea && formik.errors.tengoIdea
                      }
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
          id="ContanosMas"
          label="ContanosMas"
          variant="outlined"
          sx={{ m: "6px" }}
        >
          Contanos más al respecto de tu proyecto
        </Typography>
        <TextField
          multiline
          sx={{ m: "6px" }}
          id="ContanosMas"
          label="Mi idea es ...."
          variant="outlined"
        />
        <Button sx={{}} variant="contained">
          enviar formulario
        </Button>
      </Box>
    </Container>
  );
}

export default FormProyectos;

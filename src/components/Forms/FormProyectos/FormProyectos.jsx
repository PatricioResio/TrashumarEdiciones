import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  TextField,
} from "@mui/material";
import { validationProyecto } from "../ValidationSchemas/ValidationSchemas";
import { useFormik } from "formik";

function FormProyectos() {
  const formik = useFormik({
    initialValues: {
      textoUnico: false,
      serieTextos: false,
      libroDigital: false,
      libroFisico: false,
      contenidoMiAutoria: false,
      editarAgeno: false,
      tengoIdea: false,
      contanosMas: "",
      etapaDesarrollo: false,
      manuscritoTerminado: false,
      manuscritoTerminadoCorregido: false,
      listoPublicar: false,
      informeDeLectura: false,
      correccionGramatical: false,
      correccionEstilos: false,
      traducir: "",
    },
    validationSchema: validationProyecto,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "65vh",
        fontSize: "18px",
        p: "30px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid",
        borderColor: "#3C9990",
        borderRadius: "20px",
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
        }}
      >
        <FormGroup>
          <Tab label="Elegi el formato" value="1" />
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
              <Checkbox
                id="textoUnico"
                label="textoUnico"
                variant="outlined"
                value={formik.values.textoUnico}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.textoUnico && Boolean(formik.errors.textoUnico)
                }
                helperText={
                  formik.touched.textoUnico && formik.errors.textoUnico
                }
              />
            }
            label="QUIERO PUBLICAR UN TEXTO ÚNICO EN LA PÁGINA"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="serieTextos"
                label="serieTextos"
                variant="outlined"
                value={formik.values.serieTextos}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.serieTextos &&
                  Boolean(formik.errors.serieTextos)
                }
                helperText={
                  formik.touched.serieTextos && formik.errors.serieTextos
                }
              />
            }
            label="QUIERO PUBLICAR UNA SERIE DE TEXTOS EN LA PÁGINA"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="libroDigital"
                label="libroDigital"
                variant="outlined"
                value={formik.values.libroDigital}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.libroDigital &&
                  Boolean(formik.errors.libroDigital)
                }
                helperText={
                  formik.touched.libroDigital && formik.errors.libroDigital
                }
              />
            }
            label="QUIERO PUBLICAR UN LIBRO DIGITAL"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="libroFisico"
                label="libroFisico"
                variant="outlined"
                value={formik.values.libroFisico}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.libroFisico &&
                  Boolean(formik.errors.libroFisico)
                }
                helperText={
                  formik.touched.libroFisico && formik.errors.libroFisico
                }
              />
            }
            label="QUIERO PUBLICAR UN LIBRO FISICO"
          />
        </FormGroup>
        <FormGroup>
          <Typography
            component="h4"
            id="outlined-basic"
            label="AUTORES"
            variant="outlined"
          >
            Selecciona el rol que cumplís en la obra{" "}
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                id="ContenidoMiAutoria"
                label="Facebook"
                variant="outlined"
                value={formik.values.contenidoMiAutoria}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.contenidoMiAutoria &&
                  Boolean(formik.errors.contenidoMiAutoria)
                }
                helperText={
                  formik.touched.contenidoMiAutoria &&
                  formik.errors.contenidoMiAutoria
                }
              />
            }
            label="EL CONTENIDO A PUBLICAR ES DE MI AUTORIA"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="Editar"
                label="Editar"
                variant="outlined"
                value={formik.values.editarAgeno}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.editarAgeno &&
                  Boolean(formik.errors.editarAgeno)
                }
                helperText={
                  formik.touched.editarAgeno && formik.errors.editarAgeno
                }
              />
            }
            label="EDITARÉ CONTENIDO AJENO"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="tengoIdea"
                label="tengoIdea"
                variant="outlined"
                value={formik.values.tengoIdea}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.tengoIdea && Boolean(formik.errors.tengoIdea)
                }
                helperText={formik.touched.tengoIdea && formik.errors.tengoIdea}
              />
            }
            label="TENGO LA IDEA, PERO NO LO VOY A ESCRIBIR"
          />
          {/*             <FormControlLabel
              control={
                <Checkbox
                  id="libroFisico"
                  label="libroFisico"
                  variant="outlined"
                  value={formik.values.libroFisico}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.libroFisico &&
                    Boolean(formik.errors.libroFisico)
                  }
                  helperText={
                    formik.touched.libroFisico && formik.errors.libroFisico
                  }
                />
              }
              label="QUIERO PUBLICAR UN LIBRO FISICO"
            /> */}
          {/*             <FormControlLabel
              control={<Checkbox name="jason" />}
              label="QUIERO PUBLICAR UN LIBRO FISICO"
            /> */}
        </FormGroup>
        <Tab label="En que etapa esta tu proyecto?" value="2" />
        <FormGroup>
          <Typography
            component="h4"
            id="outlined-basic"
            label="AUTORES"
            variant="outlined"
          >
            {" "}
            Contanos de que se trata (formato, genero, sinopsis, etcétera).
          </Typography>
          <TextField
            id="DeQueTrata"
            label="DeQueTrata"
            variant="outlined"
            value={formik.values.contanosMas}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.contanosMas && Boolean(formik.errors.contanosMas)
            }
            helperText={formik.touched.contanosMas && formik.errors.contanosMas}
          />
          <Typography
            component="h4"
            id="outlined-basic"
            label="AUTORES"
            variant="outlined"
          >
            {" "}
            ¿En que etapa del desarrollo te encontras?
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                id="etapaDesarrollo"
                label="etapaDesarrollo"
                variant="outlined"
                value={formik.values.etapaDesarrollo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.etapaDesarrollo &&
                  Boolean(formik.errors.etapaDesarrollo)
                }
                helperText={
                  formik.touched.etapaDesarrollo &&
                  formik.errors.etapaDesarrollo
                }
              />
            }
            label="ESTOY TRABAJANDO EN EL TEXTO."
          />
          <FormControlLabel
            control={
              <Checkbox
                id="Manuscrito"
                label="Manuscrito"
                variant="outlined"
                value={formik.values.manuscritoTerminado}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.manuscritoTerminado &&
                  Boolean(formik.errors.manuscritoTerminado)
                }
                helperText={
                  formik.touched.manuscritoTerminado &&
                  formik.errors.manuscritoTerminado
                }
              />
            }
            label="TENGO EL MANUSCRITO TERMINADO."
          />
          <FormControlLabel
            control={
              <Checkbox
                id="ManuscritoTerminadoCorregido"
                label="ManuscritoTerminadoCorregido"
                variant="outlined"
                value={formik.values.manuscritoTerminadoCorregido}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.manuscritoTerminadoCorregido &&
                  Boolean(formik.errors.manuscritoTerminadoCorregido)
                }
                helperText={
                  formik.touched.manuscritoTerminadoCorregido &&
                  formik.errors.manuscritoTerminadoCorregido
                }
              />
            }
            label="TENGO EL MANUSCRITO TERMINADO Y CORREGIDO."
          />
          <FormControlLabel
            control={
              <Checkbox
                id="ListoParaPublicar"
                label="ListoParaPublicar"
                variant="outlined"
                value={formik.values.listoPublicar}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.listoPublicar &&
                  Boolean(formik.errors.listoPublicar)
                }
                helperText={
                  formik.touched.listoPublicar && formik.errors.listoPublicar
                }
              />
            }
            label="TENGO TODO LISTO PARA PUBLICAR."
          />
        </FormGroup>
        <Tab label="Qué falta?" value="3" />
        <FormGroup>
          <Typography
            component="h4"
            id="ETAPAS"
            label="ETAPAS"
            variant="outlined"
          >
            ¿Que etapas te hace falta cubrir?
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                id="informeDeLectura"
                label="informeDeLectura"
                variant="outlined"
                value={formik.values.informeDeLectura}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.informeDeLectura &&
                  Boolean(formik.errors.informeDeLectura)
                }
                helperText={
                  formik.touched.informeDeLectura &&
                  formik.errors.informeDeLectura
                }
              />
            }
            label="INFORME DE LECTURA."
          />
          <FormControlLabel
            control={
              <Checkbox
                id="CorreccionGramatical"
                label="CorreccionGramatical"
                variant="outlined"
                value={formik.values.correccionGramatical}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.correccionGramatical &&
                  Boolean(formik.errors.correccionGramatical)
                }
                helperText={
                  formik.touched.correccionGramatical &&
                  formik.errors.correccionGramatical
                }
              />
            }
            label="CORRECCIÓN GRAMATICAL."
          />
          {/*             <FormControlLabel
              control={
                <Checkbox
                  id="Aquí podes explayarte"
                  label="Aquí podes explayarte"
                  variant="outlined"
                  value={formik.values.facebookForm}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.facebookForm &&
                    Boolean(formik.errors.facebookForm)
                  }
                  helperText={
                    formik.touched.facebookForm && formik.errors.facebookForm
                  }
                />
              }
              label="TENGO EL MANUSCRITO TERMINADO Y CORREGIDO."
            /> */}
          <FormControlLabel
            control={
              <Checkbox
                id="correccionDeEstilo"
                label="correccionDeEstilo"
                variant="outlined"
                value={formik.values.correccionEstilos}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.correccionEstilos &&
                  Boolean(formik.errors.correccionEstilos)
                }
                helperText={
                  formik.touched.correccionEstilos &&
                  formik.errors.correccionEstilos
                }
              />
            }
            label="CORRECCIÓN DE ESTILO."
          />
        </FormGroup>
        <Tab label="Traducciones" value="4" />
        <Typography
          component="h4"
          id="TRADUCCION"
          label="TRADUCCION"
          variant="outlined"
        >
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
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Idioma original</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Idioma"
            value={formik.values.idiomaOriginal}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.correccionEstilos &&
              Boolean(formik.errors.correccionEstilos)
            }
          >
            <MenuItem value={10}>Español (latinoamerica)</MenuItem>
            <MenuItem value={20}>Ingles</MenuItem>
            <MenuItem value={30}>Frances</MenuItem>
            <MenuItem value={40}>Aleman</MenuItem>
            <MenuItem value={50}>Portugues</MenuItem>
            <MenuItem value={60}>Japones</MenuItem>
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
        <FormControl fullWidth>
          <InputLabel id="idiomaTraduccion">Idioma a traducir</InputLabel>
          <Select
            labelId="idiomaTraduccion"
            id="idiomaTraduccion"
            label="idiomaTraduccion"
            value={formik.values.idiomaTraduccion}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.correccionEstilos &&
              Boolean(formik.errors.correccionEstilos)
            }
          >
            <MenuItem value={10}>Español (latinoamerica)</MenuItem>
            <MenuItem value={20}>Ingles</MenuItem>
            <MenuItem value={30}>Frances</MenuItem>
            <MenuItem value={40}>Aleman</MenuItem>
            <MenuItem value={50}>Portugues</MenuItem>
            <MenuItem value={60}>Japones</MenuItem>
          </Select>
        </FormControl>
        <Typography
          component="h4"
          id="ContanosMas"
          label="ContanosMas"
          variant="outlined"
        >
          Contanos mas al respecto de tu proyecto
        </Typography>
        <TextField
          id="ContanosMas"
          label="Mi idea es ...."
          variant="outlined"
        />
        <Button variant="contained"> enviar formulario</Button>
      </Box>
    </Container>
  );
}

export default FormProyectos;

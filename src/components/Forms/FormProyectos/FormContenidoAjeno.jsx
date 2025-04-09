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
import { Fade } from "react-awesome-reveal";

const FormLibroEditarContenidoAjeno = ({ formik }) => {
  return (
    <>
      <FormGroup sx={{ m: "10px 0" }}>
        <Typography
          component="h4"
          id="outlined-basic"
          label="AUTORES"
          variant="outlined"
        >
          ¿Qué rol cumplís en el libro?
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              id="ContenidoMiAutoria"
              label="ContenidoMiAutoria"
              variant="outlined"
              name="rolEnElLibro"
              value="Contenido de mi autoria"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="INFORME DE LECTURA"
        />
        <FormControlLabel
          control={
            <Checkbox
              id="Editar"
              label="Editar"
              variant="outlined"
              name="rolEnElLibro"
              value="CORRECCIÓN GRAMATICAL"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="CORRECCIÓN GRAMATICAL"
        />
        <FormControlLabel
          control={
            <Checkbox
              id="tengoIdea"
              label="tengoIdea"
              variant="outlined"
              name="rolEnElLibro"
              value="CORRECCIÓN DE ESTILO"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="CORRECCIÓN DE ESTILO"
        />
        <FormControlLabel
          control={
            <Checkbox
              id="tengoIdea"
              label="tengoIdea"
              variant="outlined"
              name="rolEnElLibro"
              value="EDICIÓN Y MAQUETACIÓN"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="EDICIÓN Y MAQUETACIÓN"
        />
        <FormControlLabel
          control={
            <Checkbox
              id="traducir"
              label="traducir"
              variant="outlined"
              v
              alue={formik.values.traducir}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              /* error={formik.touched.traducir && Boolean(formik.errors.traducir)}
              helperText={formik.touched.traducir && formik.errors.traducir}*/
            />
          }
          label="TRADUCI R"
        />
      </FormGroup>
      {formik.values.traducir === true ? (
        <Fade>
          <Typography component="h4" variant="outlined">
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
          <FormControl sx={{ m: "10px 0" }} fullWidth>
            <InputLabel id="demo-simple-select-label">
              Idioma original
            </InputLabel>
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
          <FormControl sx={{ m: "10px 0" }} fullWidth>
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
        </Fade>
      ) : (
        <></>
      )}
      <RadioGroup sx={{ m: "10px 0" }}>
        <Typography component="h4" variant="outlined">
          ¿Qué rol cumplen?
        </Typography>
        <FormControlLabel
          control={
            <Radio
              id="noParticipa"
              label="noParticipa"
              name="otroAutor"
              variant="outlined"
              value="No participa"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="NO PARTICIPAN EN EL ARMADO DEL LIBRO"
        />
        <FormControlLabel
          control={
            <Radio
              id="siParticipa"
              label="siParticipa"
              variant="outlined"
              name="otroAutor"
              value="Si participa"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="PARTICIPAN ACTIVAMENTE EN EL ARMADO DEL LIBRO"
        />
      </RadioGroup>
      <FormGroup sx={{ m: "10px 0" }}>
        <Typography
          component="h4"
          id="ETAPAS"
          label="ETAPAS"
          variant="outlined"
        >
          ¿Qué reconocimiento recibirán?
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              id="informeDeLectura"
              label="reconocimientoAutor"
              variant="outlined"
              name="reconocimientoAutor"
              value="SU NOMBRE EN PORTADA, JUNTO AL MIO"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="SU NOMBRE EN PORTADA, JUNTO AL MIO"
        />
        <FormControlLabel
          control={
            <Checkbox
              id="CorreccionGramatical"
              label="reconocimientoAutor"
              variant="outlined"
              name="reconocimientoAutor"
              value="SU NOMBRE EN PORTADA, SIN EL MIO"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="PUEDO CUBRIR LA PRIMERA TANDA DE IMPRESIONES."
        />

        <FormControlLabel
          control={
            <Checkbox
              id="correccionDeEstilo"
              label="reconocimientoAutor"
              variant="outlined"
              name="reconocimientoAutor"
              value="SU NOMBRE JUNTO A EL O LOS TEXTOS SUYOS"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="SU NOMBRE JUNTO A EL O LOS TEXTOS SUYOS"
        />
        <FormControlLabel
          control={
            <Checkbox
              id="correccionDeEstilo"
              label="reconocimientoAutor"
              variant="outlined"
              name="reconocimientoAutor"
              value="SU NOMBRE EN EL INICIO DEL LIBRO"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="SU NOMBRE EN EL INICIO DEL LIBRO"
        />
      </FormGroup>
      <RadioGroup sx={{ m: "10px 0" }}>
        <Typography component="h4" variant="outlined">
          ¿Cómo es el acuerdo comercial entre ustedes?
        </Typography>
        <FormControlLabel
          control={
            <Radio
              id="LO ARREGLAMOS DE FORMA PRIVADA"
              label="acuerdoComercialNoAutor"
              name="acuerdoComercialNoAutor"
              variant="outlined"
              value="LO ARREGLAMOS DE FORMA PRIVADA"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="LO ARREGLAMOS DE FORMA PRIVADA"
        />
        <FormControlLabel
          control={
            <Radio
              id="RECIBEN UN PORCENTAJE DE FORMA DIRECTA"
              label="acuerdoComercialNoAutor"
              name="acuerdoComercialNoAutor"
              variant="outlined"
              value="RECIBEN UN PORCENTAJE DE FORMA DIRECTA"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="RECIBEN UN PORCENTAJE DE FORMA DIRECTA"
        />
        {formik.values.acuerdoComercialNoAutor ===
        "RECIBEN UN PORCENTAJE DE FORMA DIRECTA" ? (
          <TextField
            id="RECIBEN UN PORCENTAJE"
            name="acuerdoComercialPorcentaje"
            variant="outlined"
            label="El porcentaje que reciben es.."
            value={formik.values.acuerdoComercialPorcentaje}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        ) : (
          <></>
        )}
      </RadioGroup>
      <RadioGroup sx={{ m: "10px 0" }}>
        <Typography component="h4" variant="outlined">
          ¿En qué etapa del desarrollo te encontras?
        </Typography>
        <FormControlLabel
          control={
            <Radio
              id="ESTAMOS TRABAJANDO EN EL TEXTO."
              label="ESTAMOS TRABAJANDO EN EL TEXTO."
              name="etapaDesarrollo"
              variant="outlined"
              value="ESTAMOS TRABAJANDO EN EL TEXTO."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="ESTAMOS TRABAJANDO EN EL TEXTO."
        />
        <FormControlLabel
          control={
            <Radio
              id="TENEMOS EL MANUSCRITO TERMINADO."
              label="TENEMOS EL MANUSCRITO TERMINADO."
              name="etapaDesarrollo"
              variant="outlined"
              value="TENEMOS EL MANUSCRITO TERMINADO."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="TENEMOS EL MANUSCRITO TERMINADO."
        />
        <FormControlLabel
          control={
            <Radio
              id="TENEMOS MANUSCRITO TERMINADO Y CORREGIDO."
              label="TENEMOS MANUSCRITO TERMINADO Y CORREGIDO."
              name="etapaDesarrollo"
              variant="outlined"
              value="TENEMOS MANUSCRITO TERMINADO Y CORREGIDO."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="TENEMOS MANUSCRITO TERMINADO Y CORREGIDO."
        />
        <FormControlLabel
          control={
            <Radio
              id="TENEMOS TODO LISTO PARA PUBLICAR."
              label="TENEMOS TODO LISTO PARA PUBLICAR."
              name="etapaDesarrollo"
              variant="outlined"
              value="TENEMOS TODO LISTO PARA PUBLICAR."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="TENEMOS TODO LISTO PARA PUBLICAR."
        />
      </RadioGroup>
      <FormGroup sx={{ m: "10px 0" }}>
        <Typography
          component="h4"
          id="ETAPAS"
          label="ETAPAS"
          variant="outlined"
        >
          ¿Qué etapas te hace falta cubrir?
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
              /*   error={
                formik.touched.informeDeLectura &&
                Boolean(formik.errors.informeDeLectura)
              }
              helperText={
                formik.touched.informeDeLectura &&
                formik.errors.informeDeLectura
              } */
            />
          }
          label="INFORME DE LECTURA."
        />
        <FormControlLabel
          control={
            <Checkbox
              id="correccionGramatical"
              label="correccionGramatical"
              variant="outlined"
              value={formik.values.correccionGramatical}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              /*   error={
                formik.touched.correccionGramatical &&
                Boolean(formik.errors.correccionGramatical)
              }
              helperText={
                formik.touched.correccionGramatical &&
                formik.errors.correccionGramatical
              } */
            />
          }
          label="CORRECCIÓN GRAMATICAL."
        />

        <FormControlLabel
          control={
            <Checkbox
              id="correccionDeEstilo"
              label="correccionDeEstilo"
              variant="outlined"
              value={formik.values.correccionEstilos}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              /*   error={
                formik.touched.correccionEstilos &&
                Boolean(formik.errors.correccionEstilos)
              }
              helperText={
                formik.touched.correccionEstilos &&
                formik.errors.correccionEstilos
              } */
            />
          }
          label="CORRECCIÓN DE ESTILO."
        />
        <FormControlLabel
          control={
            <Checkbox
              id="disenioImagenes"
              label="disenioImagenes"
              variant="outlined"
              value={formik.values.correccionEstilos}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              /*   error={
                formik.touched.correccionEstilos &&
                Boolean(formik.errors.correccionEstilos)
              }
              helperText={
                formik.touched.correccionEstilos &&
                formik.errors.correccionEstilos
              } */
            />
          }
          label="DISEÑO E IMAGENES INTERNAS."
        />
        <FormControlLabel
          control={
            <Checkbox
              id="correccionDeEstilo"
              label="correccionDeEstilo"
              variant="outlined"
              value={formik.values.correccionEstilos}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              /*   error={
                formik.touched.correccionEstilos &&
                Boolean(formik.errors.correccionEstilos)
              }
              helperText={
                formik.touched.correccionEstilos &&
                formik.errors.correccionEstilos
              } */
            />
          }
          label="ARTE DE TAPA Y CONTRATAPA."
        />
        <FormControlLabel
          control={
            <Checkbox
              id="correccionDeEstilo"
              label="correccionDeEstilo"
              variant="outlined"
              value={formik.values.correccionEstilos}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              /*   error={
                formik.touched.correccionEstilos &&
                Boolean(formik.errors.correccionEstilos)
              }
              helperText={
                formik.touched.correccionEstilos &&
                formik.errors.correccionEstilos
              } */
            />
          }
          label="EDICIÓN Y MAQUETACIÓN."
        />
        <FormControlLabel
          control={
            <Checkbox
              id="traducir"
              label="traducir"
              variant="outlined"
              value={formik.values.traducir}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label="TRADUCIR"
        />
      </FormGroup>
      {formik.values.traducir === true ? (
        <>
          <Typography component="h4" variant="outlined">
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
          <FormControl sx={{ m: "10px 0" }} fullWidth>
            <InputLabel id="demo-simple-select-label">
              Idioma original
            </InputLabel>
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
          <FormControl sx={{ m: "10px 0" }} fullWidth>
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
        </>
      ) : (
        <></>
      )}
      <RadioGroup sx={{ m: "10px 0" }}>
        <Typography
          component="h4"
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
      <RadioGroup sx={{ m: "10px 0" }}>
        <Typography
          component="h4"
          id="ETAPAS"
          label="ETAPAS"
          variant="outlined"
        >
          ¿Vas a involucrarte en la distribución del libro? / Para esto, debes
          registrarte en DISTRIBUIDORES.
        </Typography>
        <FormControlLabel
          control={
            <Radio
              id="loHareEnPersona"
              label="loHareEnPersona"
              variant="outlined"
              value="Si, lo hare en persona"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              /*error={formik.touched.distribucion}
              helperText={
                formik.touched.distribucion && formik.errors.distribucion
              }*/
            />
          }
          label="SI, LO HARÉ YO EN PERSONA"
        />
        <FormControlLabel
          control={
            <Radio
              id="siPeroNoExclusivamente"
              label="siPeroNoExclusivamente"
              variant="outlined"
              value="Si, pero no exclusivamente"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              /*  error={formik.touched.distribucion}
              helperText={
                formik.touched.distribucion && formik.errors.distribucion
              }*/
            />
          }
          label="SI, PERO NO EXCLUSIVAMENTE."
        />

        <FormControlLabel
          control={
            <Radio
              id="noGracias"
              label="noGracias"
              variant="outlined"
              value="No, gracias"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              /*  error={formik.touched.distribucion}
              helperText={
                formik.touched.distribucion && formik.errors.distribucion
              }*/
            />
          }
          label="NO, GRACIAS."
        />
        <Typography
          fontSize={"20px"}
          color={"secondary.white"}
          bgcolor={"bg.dark"}
          sx={{
            border: "2px solid ",
            borderRadius: "10px",

            padding: "5px",
          }}
        >
          Considera que tu compromiso con la distribución facilitara la llegada
          al público.
        </Typography>
      </RadioGroup>
      <RadioGroup sx={{ m: "10px 0" }}>
        <Typography
          component="h4"
          id="ETAPAS"
          label="ETAPAS"
          variant="outlined"
        >
          ¿Qué tipo de distribución te gustaría?
        </Typography>
        <FormControlLabel
          control={
            <Radio
              id="tipoDistribucion"
              label="tipoDistribucion"
              variant="outlined"
              value="QUIERO QUE LO DISTRIBUYAN OTROS MIEMBROS DE TRASHUMAR"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              /*   error={
                formik.touched.tipoDistribucion &&
                Boolean(formik.errors.tipoDistribucion)
              }
              helperText={
                formik.touched.tipoDistribucion &&
                formik.errors.tipoDistribucion
              } */
            />
          }
          label="QUIERO QUE LO DISTRIBUYAN OTROS MIEMBROS DE TRASHUMAR"
        />
        <FormControlLabel
          control={
            <Radio
              id="tipoDistribucion"
              label="tipoDistribucion"
              variant="outlined"
              value="QUIERO QUE SE DISTRIBUYA EN LIBRERIAS"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              /*   error={
                formik.touched.tipoDistribucion &&
                Boolean(formik.errors.tipoDistribucion)
              }
              helperText={
                formik.touched.tipoDistribucion &&
                formik.errors.tipoDistribucion
              } */
            />
          }
          label="QUIERO QUE SE DISTRIBUYA EN LIBRERIAS"
        />

        <Typography
          fontSize={"20px"}
          color={"secondary.white"}
          bgcolor={"bg.dark"}
          sx={{
            border: "2px solid ",
            borderRadius: "10px",

            padding: "5px",
          }}
        >
          Ojo. La opción LIBRERIAS te permitirá un precio de venta mayor, y
          llegada a un público más “formal”. Sin embargo, pueden presentar
          exigencias difíciles de cumplir, como tiradas altas o acuerdos de
          exclusividad. De la misma manera, es probable que sean más selectivas
          a la hora de tomar un libro.
        </Typography>
      </RadioGroup>
    </>
  );
};
export default FormLibroEditarContenidoAjeno;

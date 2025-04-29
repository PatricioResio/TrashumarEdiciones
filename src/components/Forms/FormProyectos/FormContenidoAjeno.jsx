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
import { Formik, Form } from "formik";
import { Fade } from "react-awesome-reveal";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

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
        rolEnLaObra: "",
        contanosMas: "",
        rolEnElLibro: "",
        otroAutor: "",
        acuerdoComercial: "",
        acuerdoComercialPorcentaje: "",
        acuerdoComercialNoAutor: "",
        reconocimientoAutor: "",
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
      /*   validationSchema: validationProyecto, */
      onSubmit={(values, { resetForm }) => {
        if (
          !values.formato ||
          !values.contanosMas ||
          !values.imagenesProyecto ||
          !values.acuerdoComercial
        ) {
          alert("Debes completar todos los campos obligatorios.");
          console.log(values);
          return;
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
          <FormGroup sx={{ m: "10px 0" }}>
            <Typography
              component="h5"
              id="outlined-basic"
              label="AUTORES"
              variant="outlined"
            >
              ¿Qué rol cumplís en el libro?
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  id="informeDeLectura"
                  label="informeDeLectura"
                  variant="outlined"
                  name="rolEnElLibro"
                  value="Contenido de mi autoria"
                  onChange={handleChange}
                  error={errors.rolEnElLibro}
                />
              }
              label="Informe de lectura"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="Editar"
                  label="Editar"
                  variant="outlined"
                  name="rolEnElLibro"
                  value="CORRECCIÓN GRAMATICAL"
                  onChange={handleChange}
                  error={errors.rolEnElLibro}
                />
              }
              label="Corrección gramatical"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="rolEnElLibro"
                  label="rolEnElLibro"
                  name="rolEnElLibro"
                  value="CORRECCIÓN DE ESTILO"
                  onChange={handleChange}
                  error={errors.rolEnElLibro}
                />
              }
              label="Corrección de estilo"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="rolEnElLibro"
                  label="rolEnElLibro"
                  name="rolEnElLibro"
                  value="EDICIÓN Y MAQUETACIÓN"
                  onChange={handleChange}
                  error={errors.rolEnElLibro}
                />
              }
              label="Edición y maquetación"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="traducir"
                  label="traducir"
                  name="traducir"
                  value={values.traducir}
                  onChange={handleChange}
                  error={errors.traducir}
                />
              }
              label="Traducir"
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
                  name="idiomaOriginal"
                  id="idiomaOriginal"
                  label="idiomaOriginal"
                  value={values.idiomaOriginal}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.idiomaOriginal && Boolean(errors.idiomaOriginal)
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
              <Typography component="h5" variant="outlined">
                A que idioma queres traducirlo?
              </Typography>
              <FormControl sx={{ m: "10px 0" }} fullWidth>
                <InputLabel id="idiomaATraducir">Idioma a traducir</InputLabel>
                <Select
                  labelId="idiomaATraducir"
                  id="idiomaATraducir"
                  label="idiomaATraducir"
                  value={values.idiomaATraducir}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.idiomaATraducir && Boolean(errors.idiomaATraducir)
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
            <Typography component="h5" variant="outlined">
              ¿Qué rol cumplen?
            </Typography>
            <FormControlLabel
              control={
                <Radio
                  id="noParticipa"
                  label="noParticipa"
                  name="otroAutor"
                  value="No participa"
                  onChange={handleChange}
                />
              }
              label="No participa en el armado del libro"
            />
            <FormControlLabel
              control={
                <Radio
                  id="siParticipa"
                  label="siParticipa"
                  variant="outlined"
                  name="otroAutor"
                  value="Si participa"
                  onChange={handleChange}
                  error={errors.reconocimientoAutor}
                />
              }
              label="Participa activamente en el armado del libro"
            />
          </RadioGroup>
          <FormGroup sx={{ m: "10px 0" }}>
            <Typography component="h5" variant="outlined">
              ¿Qué reconocimiento recibirán?
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  id="reconocimientoAutor"
                  label="reconocimientoAutor"
                  name="reconocimientoAutor"
                  value="SU NOMBRE EN PORTADA, JUNTO AL MIO"
                  onChange={handleChange}
                  error={Boolean(errors.reconocimientoAutor)}
                />
              }
              label="Su nombre en portada, junto al mío"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="reconocimientoAutor"
                  label="reconocimientoAutor"
                  name="reconocimientoAutor"
                  value="SU NOMBRE EN PORTADA, SIN EL MIO"
                  onChange={handleChange}
                  error={Boolean(errors.reconocimientoAutor)}
                />
              }
              label="Su nombre en portada, sin el mío"
            />

            <FormControlLabel
              control={
                <Checkbox
                  id="reconocimientoAutor"
                  label="reconocimientoAutor"
                  name="reconocimientoAutor"
                  value="SU NOMBRE JUNTO A EL O LOS TEXTOS SUYOS"
                  onChange={handleChange}
                  error={Boolean(errors.reconocimientoAutor)}
                />
              }
              label="Su nombre junto a el o los textos suyos"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="correccionDeEstilo"
                  label="reconocimientoAutor"
                  variant="outlined"
                  name="reconocimientoAutor"
                  value="SU NOMBRE EN EL INICIO DEL LIBRO"
                  onChange={handleChange}
                  error={Boolean(errors.reconocimientoAutor)}
                />
              }
              label="Su nombre en el inicio del libro"
            />
          </FormGroup>
          <RadioGroup sx={{ m: "10px 0" }}>
            <Typography component="h5" variant="outlined">
              ¿Cómo es el acuerdo comercial entre ustedes?
            </Typography>
            <FormControlLabel
              control={
                <Radio
                  id="acuerdoComercialNoAutor"
                  label="acuerdoComercialNoAutor"
                  name="acuerdoComercialNoAutor"
                  variant="outlined"
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
                  variant="outlined"
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
            <FormControlLabel
              control={
                <Radio
                  id="ESTAMOS TRABAJANDO EN EL TEXTO."
                  label="ESTAMOS TRABAJANDO EN EL TEXTO."
                  name="etapaDesarrollo"
                  variant="outlined"
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
                  variant="outlined"
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
                  variant="outlined"
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
                  variant="outlined"
                  value="TENEMOS TODO LISTO PARA PUBLICAR."
                  onChange={handleChange}
                  error={errors.etapaDesarrollo}
                />
              }
              label="Tenemos todo listo para publicar."
            />
          </RadioGroup>
          <FormGroup sx={{ m: "10px 0" }}>
            <Typography
              component="h5"
              id="ETAPAS"
              label="ETAPAS"
              variant="outlined"
            >
              ¿Qué etapas te hace falta cubrir?
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  id="etapaACubrir"
                  label="etapaACubrir"
                  name="etapaACubrir"
                  value={values.etapaACubrir}
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
                  name="etapaACubrir"
                  value={values.etapaACubrir}
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
                  name="etapaACubrir"
                  value={values.etapaACubrir}
                  onChange={handleChange}
                  error={Boolean(errors.etapaACubrir)}
                />
              }
              label="Corrección de estilo."
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="disenioImagenes"
                  label="disenioImagenes"
                  name="etapaACubrir"
                  value={values.etapaACubrir}
                  onChange={handleChange}
                  error={Boolean(errors.etapaACubrir)}
                />
              }
              label="Diseño e imagenes internas."
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="arteDeTapaYContratapa"
                  label="arteDeTapaYContratapa"
                  name="etapaACubrir"
                  value={values.etapaACubrir}
                  onChange={handleChange}
                  error={Boolean(errors.etapaACubrir)}
                />
              }
              label="Arte de tapa y contratapa."
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="correccionDeEstilo"
                  label="correccionDeEstilo"
                  variant="outlined"
                  value={values.etapaACubrir}
                  onChange={handleChange}
                  error={Boolean(errors.etapaACubrir)}
                />
              }
              label="Edición y maquetación."
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="traducir"
                  label="traducir"
                  variant="outlined"
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
                  error={touched.correccionEstilos && errors.correccionEstilos}
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
                  error={touched.correccionEstilos && errors.correccionEstilos}
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
            <FormControlLabel
              control={
                <Radio
                  id="acuerdoComercial"
                  label="acuerdoComercial"
                  value="puedo cubrir el trabajo de mis colegas aunque mi pago quede pendiente"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
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
              debes registrarte en DISTRIBUIDORES.
            </Typography>
            <FormControlLabel
              control={
                <Radio
                  id="loHareEnPersona"
                  label="loHareEnPersona"
                  name="distribucion"
                  value="Si, lo hare en persona"
                  onChange={handleChange}
                  error={touched.distribucion}
                />
              }
              label="Si, lo hare en persona"
            />
            <FormControlLabel
              control={
                <Radio
                  id="siPeroNoExclusivamente"
                  label="siPeroNoExclusivamente"
                  name="distribucion"
                  value="Si, pero no exclusivamente"
                  onChange={handleChange}
                  error={touched.distribucion}
                />
              }
              label="Si, pero no exclusivamente"
            />

            <FormControlLabel
              control={
                <Radio
                  id="noGracias"
                  label="noGracias"
                  name="distribucion"
                  value="No, gracias"
                  onChange={handleChange}
                  error={touched.distribucion}
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
        </Form>
      )}
    </Formik>
  );
};
export default FormEditarContenidoAjeno;

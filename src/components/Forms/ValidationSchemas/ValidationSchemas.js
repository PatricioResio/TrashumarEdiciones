import * as yup from "yup";

const validationPerfil = yup.object({
  facebookForm: yup.string(),
  instragamForm: yup.string(),
  xForm: yup.string(),
  linkedinForm: yup.string(),
  oficios: yup.array().of(
    yup.object().shape({
      nombre: yup.string(),
      valor: yup.boolean(),
    })
  ),
  explicarPerfil: yup.string(),
});

/* const validationProyecto = yup.object().shape({
  formato: yup.string().required("Debes seleccionar un formato"),
  rolEnLaObra: yup.string().required("Debes seleccionar tu rol en la obra"),
  idiomaOriginal: yup.string().when("traducir", {
    is: true,
    then: yup.string().required("Es necesario indicar el idioma original"),
  }),
  idiomaATraducir: yup.string().when("traducir", {
    is: true,
    then: yup.string().required("Es necesario indicar el idioma a traducir"),
  }),

  contanosMas: yup
    .string()
    .required("Por favor, cuéntanos más sobre tu proyecto"),
});
 */
import * as Yup from "yup";

const validationProyecto = Yup.object().shape({
  formato: Yup.string().required("Selecciona un formato"),
  rolEnLaObra: Yup.string().required("Selecciona tu rol en la obra"),
  contanosMas: Yup.string()
    .min(20, "Escribe al menos 20 caracteres sobre tu proyecto")
    .required("Este campo es obligatorio"),
  acuerdoComercial: Yup.string().required(
    "Especifica si hay un acuerdo comercial"
  ),
  // Validaciones adicionales según los campos específicos de tu formulario
  manuscritoTerminado: Yup.boolean(),
  manuscritoTerminadoCorregido: Yup.boolean(),
  listoPublicar: Yup.boolean(),
  informeDeLectura: Yup.boolean(),
  correccionGramatical: Yup.boolean(),
  correccionEstilos: Yup.boolean(),
  traducir: Yup.boolean(),
  idiomaOriginal: Yup.string().when("traducir", {
    is: true,
    then: Yup.string().required("Especifica el idioma original"),
  }),
  idiomaATraducir: Yup.string().when("traducir", {
    is: true,
    then: Yup.string().required("Especifica el idioma al que traducir"),
  }),
});

export { validationPerfil, validationProyecto };

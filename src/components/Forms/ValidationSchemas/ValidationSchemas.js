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

const validationProyecto = yup.object().shape({
  formato: yup
    .string()
    .required("Debes seleccionar un formato para tu proyecto."),
  rolEnLaObra: yup.string().required("Debes seleccionar tu rol en la obra."),
  contanosMas: yup
    .string()
    .min(20, "Escribe al menos 20 caracteres para explicar tu proyecto.")
    .required("Este campo es obligatorio."),
  acuerdoComercial: yup
    .string()
    .required("Especifica si hay un acuerdo comercial."),
  manuscritoTerminado: yup.boolean().nullable(), // Acepta valores `null` o `undefined`
  manuscritoTerminadoCorregido: yup.boolean().nullable(),
  listoPublicar: yup.boolean().nullable(),
  informeDeLectura: yup.boolean().nullable(),
  correccionGramatical: yup.boolean().nullable(),
  correccionEstilos: yup.boolean().nullable(),
  traducir: yup.boolean().nullable(),
  idiomaOriginal: yup.string().when("traducir", {
    is: true,
    then: yup.string().required("Especifica el idioma original."),
    otherwise: yup.string().nullable(),
  }),
  idiomaATraducir: yup.string().when("traducir", {
    is: true,
    then: yup.string().required("Especifica el idioma al que traducir."),
    otherwise: yup.string().nullable(),
  }),
});
const validationContenidoAutor = yup.object().shape({
  formato: yup
    .string()
    .required("Debes seleccionar un formato para tu proyecto."),
  etapaDesarrollo: yup
    .string()
    .required("Debes seleccionar la etapa de desarrollo."),
  distribucion: yup.string().required("Este campo es obligatorio."),
  tipoDistribucion: yup.string().required("Este campo es obligatorio."),
  reconocimientoDistribucion: yup
    .string()
    .required("Este campo es obligatorio."),
  gastos: yup.string().required("Este campo es obligatorio."),
  contanosMas: yup
    .string()
    .min(20, "Escribe al menos 20 caracteres para explicar tu proyecto.")
    .required("Este campo es obligatorio."),
});

const validationTextoUnico = yup.object().shape({
  etapaDesarrollo: yup.string().required("El campo es obligatorio"),
  ideaPrincipal: yup.string().required("El campo es obligatorio"),
  acuerdoComercial: yup.string().required("El campo es obligatorio"),
  imagenesProyecto: yup.string().required("El campo es obligatorio"),
});

export {
  validationPerfil,
  validationProyecto,
  validationTextoUnico,
  validationContenidoAutor,
};

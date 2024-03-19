import * as yup from "yup";
const validationPerfil = yup.object({
  facebookForm: yup.string(),
  instragramForm: yup.string(),
  xForm: yup.string(),
  linkedinForm: yup.string(),
  escritor: yup.string(),
  otroArte: yup.string(),
  editor: yup.string(),
  corrector: yup.string(),
  correctorEstilos: yup.string(),
  lectorCero: yup.string(),
  traductor: yup.string(),
  dibujante: yup.string(),
  artistaGrafico: yup.string(),
  fotografo: yup.string(),
  explicarPerfil: yup.string(),
  metodosVenta: yup.string(),
});

const validationProyecto = yup.object({
  facebookForm: yup.string(),
  instragramForm: yup.string(),
  xForm: yup.string(),
  linkedinForm: yup.string(),
  escritor: yup.string(),
  otroArte: yup.string(),
  editor: yup.string(),
  corrector: yup.string(),
  correctorEstilos: yup.string(),
  lectorCero: yup.string(),
  traductor: yup.string(),
  dibujante: yup.string(),
  artistaGrafico: yup.string(),
  fotografo: yup.string(),
  explicarPerfil: yup.string(),
  metodosVenta: yup.string(),
});

export { validationPerfil, validationProyecto };

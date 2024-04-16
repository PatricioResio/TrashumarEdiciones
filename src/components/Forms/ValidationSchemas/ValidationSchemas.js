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

const validationProyecto = yup.object({
  facebookForm: yup.string(),
  instagramForm: yup.string(),
  xForm: yup.string(),
  linkedinForm: yup.string(),
  oficios: yup.array().of(yup.boolean()),
  /*   escritor: yup.string(),
  otroArte: yup.string(),
  editor: yup.string(),
  corrector: yup.string(),
  correctorEstilos: yup.string(),
  lectorCero: yup.string(),
  traductor: yup.string(),
  dibujante: yup.string(),
  artistaGrafico: yup.string(),
  fotografo: yup.string(), */
  explicarPerfil: yup.string(),
  metodosVenta: yup.string(),
});

export { validationPerfil, validationProyecto };

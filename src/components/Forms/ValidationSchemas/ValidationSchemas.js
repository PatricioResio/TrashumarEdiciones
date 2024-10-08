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

export { validationPerfil, validationProyecto };

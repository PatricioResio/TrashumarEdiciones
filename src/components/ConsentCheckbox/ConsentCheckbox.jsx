import { FormControlLabel, Checkbox, FormHelperText, Box } from "@mui/material";
import { useFormikContext } from "formik";
import { Link as RouterLink } from "react-router-dom";

/**
 * Checkbox de "leí y acepto" para usar dentro de un <Formik>. Se conecta solo
 * al contexto de Formik (useFormikContext), así que no hace falta pasarle
 * `value`/`onChange` a mano — solo el `name` del campo booleano que ya
 * agregaste al initialValues y al schema de yup (ej: .oneOf([true], "...")).
 *
 * extraText: texto adicional específico del formulario (ej: aclarar que el
 * contenido enviado puede compartirse con evaluadores), se muestra antes del
 * link a los Términos.
 */
const ConsentCheckbox = ({ name = "aceptaTerminos", extraText }) => {
  const formik = useFormikContext();
  const checked = !!formik.values[name];
  const error = formik.touched[name] && Boolean(formik.errors[name]);

  return (
    <Box sx={{ width: "100%", mt: 1 }}>
      <FormControlLabel
        control={
          <Checkbox
            name={name}
            checked={checked}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        }
        label={
          <>
            {extraText ? `${extraText} ` : ""}
            Leí y acepto los{" "}
            <RouterLink to="/terminos" target="_blank" rel="noopener noreferrer">
              Términos y Condiciones
            </RouterLink>{" "}
            y la{" "}
            <RouterLink to="/privacidad" target="_blank" rel="noopener noreferrer">
              Política de Privacidad
            </RouterLink>
            .
          </>
        }
      />
      {error && (
        <FormHelperText error>{formik.errors[name]}</FormHelperText>
      )}
    </Box>
  );
};

export default ConsentCheckbox;

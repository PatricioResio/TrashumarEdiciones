import {
  Box,
  Button,
  FormHelperText,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import "./ContactForm.css";
import emailjs from "emailjs-com";

import { validationContact } from "../ValidationSchemas/ValidationSchemas";

const ContactForm = () => {
  const getDate = () => {
    return new Date().toISOString().split("T")[0];
  };
  const initialValueContact = {
    name: "",
    message: "",
    email: "",
    date: getDate(),
    title: "",
  };

  return (
    <Formik
      initialValues={initialValueContact}
      validationSchema={validationContact}
      onSubmit={(values, { resetForm }) => {
        const templateParams = {
          name: values.name,
          email: values.email,
          title: values.title,
          date: values.date,
          message: values.message,
        };
        emailjs
          .send(
            import.meta.env.VITE_EMAILJS_SERVICE_CONTACT,
            import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY_CONTACT
          )
          .then(
            (response) => {
              resetForm();
              alert("Formulario enviado correctamente!");
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
      {({ values, handleChange, handleBlur, errors, touched }) => (
        <Form>
          <Box className="container">
            <Box className="form-box">
              <Typography
                sx={{ my: "1.5rem", color: "secondary.main" }}
                component="h3"
                variant="h3"
              >
                Querias contactarnos?
              </Typography>
              <Typography
                component="h5"
                variant="h5"
                sx={{ color: "bg.white", mb: "1.5rem" }}
              >
                Acá podes hablar sin tapujos
              </Typography>
              {touched.name && errors.name && (
                <FormHelperText sx={{ color: "#F50E00" }}>
                  {errors.name}
                </FormHelperText>
              )}
              <TextField
                className="textField"
                label="Nombre"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name && touched.name}
              />
              {touched.title && errors.title && (
                <FormHelperText sx={{ color: "#F50E00" }}>
                  {errors.title}
                </FormHelperText>
              )}
              <TextField
                className="textField"
                label="Asunto"
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.title && touched.title}
              />
              {touched.email && errors.email && (
                <FormHelperText sx={{ color: "#F50E00" }}>
                  {errors.email}
                </FormHelperText>
              )}
              <TextField
                className="textField"
                label="Email"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.email && touched.email}
              />
              {touched.message && errors.message && (
                <FormHelperText sx={{ color: "#F50E00" }}>
                  {errors.message}
                </FormHelperText>
              )}
              <TextareaAutosize
                className="textArea"
                minRows={3}
                name="message"
                value={values.message}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.message && touched.message}
                placeholder=""
              />
              <label className="mui-label">Tu mensaje</label>
              <span className="textArea-underline" />

              <Button variant="outlined" type="submit" sx={{ my: "3rem" }}>
                Enviar mensaje
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;

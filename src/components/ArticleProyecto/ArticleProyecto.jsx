import React, { useContext } from "react";
import FormProyectos from "../Forms/FormProyectos/FormProyectos";
import { Box, Button, Container, Typography } from "@mui/material";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const SectionProyecto = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Container
      sx={{
        minHeight: "60vh",
        width: "100%",
        margin: "30px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
        fontSize: "26px",
        borderRadius: "10px",
        p: "35px",
      }}
      maxWidth="2xl"
    >
      {" "}
      <Typography
        sx={{ m: "0 auto 30px auto" }}
        align="center"
        variant="h1"
        fontWeight="bold"
        component="h1"
      >
        Quiero publicar
      </Typography>
      <Box
        bgcolor="bg.mediumLightBlue"
        sx={{
          mb: "20px",
          width: "100%",
          maxWidth: "1600px",
          borderRadius: "5px",
          p: "20px",
        }}
      >
        <Typography
          variant="body"
          component="p"
          sx={{ m: "20px auto", width: "100%" }}
        >
          En TRASHUMAR apostamos por les autores noveles: queremos que todes
          tengan la posibilidad de publicar su obra, sin vender su alma al
          diablo ni conformarse con el amor al arte como sueldo. Tanto
          apostamos, que no dejamos de ser noveles como el que mas. Es nuestro
          el sueño de publicar, y esto, el humilde intento de democratizarlo:
          una editorial pequeña cargando un gran proyecto, sin mas miras que las
          de crecer. Mientras tanto, rogamos comprendas nuestras limitaciones
          logísticas y presupuestarias. A continuación te pedimos que completes
          un formulario. No todas los campos son obligatorios, pero si podes,
          intenta contestar lo mas que puedas y explayarte en las definiciones.
          Nos servira para analizar tu propuesta. Vas a poder editar la mayoria
          de los aspectos. Una vez hayamos recibido el formulario, vamos a
          contactarnos con vos; te informaremos de las opciones disponibles y,
          si nos ponemos de acuerdo, empezamos a coordinarlo. Cuando tu proyecto
          esté aprobado, podras seguir trabajando desde la pagina. ¡Gracias por
          confiar en nosotres!
        </Typography>
        {!currentUser ? (
          <Button color="secondary" component={Link} to="/ingresa">
            <Typography variant="h4">
              Para seguir adelante tenes que iniciar sesión, Seguime por aquí
            </Typography>
          </Button>
        ) : (
          <FormProyectos />
        )}
      </Box>
    </Container>
  );
};

export default SectionProyecto;

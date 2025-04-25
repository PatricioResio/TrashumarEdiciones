import { Typography, Button, Container, Box } from "@mui/material";
import FormTextoUnico from "./FormTextoUnico";
import FormContenidoDeAutor from "./FormContenidoDeAutor";
import FormContenidoAjeno from "./FormContenidoAjeno";
import FormSoloLaIdea from "./FormSoloLaIdea";
import FormSerieDeTextos from "./FormSerieDeTextos";
import { Fade } from "react-awesome-reveal";
import useFormProyectos from "../../../hooks/useFormProyectos";

function FormProyectos() {
  const { posicionForm, setPosicionForm, posicionForm2, setPosicionForm2 } =
    useFormProyectos();

  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "65vh",
        fontSize: { xs: "18px", sm: "24px", md: "26px" },
        p: "30px 0",
        display: "flex",
        m: "0 auto",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid #09A5B0",
        borderRadius: "5px",
        backgroundColor: "#A4FFFE",
      }}
    >
      {" "}
      <Typography
        component="h4"
        id="outlined-basic"
        label="AUTORES"
        variant="outlined"
      >
        Elegí el formato a trabajar
      </Typography>
      <Box
        sx={{ display: "flex", flexDirection: "row", gap: "20px", mt: "20px" }}
      >
        <Button
          variant="contained"
          sx={{ backgroundColor: "#09A5B0" }}
          onClick={() => setPosicionForm("Texto unico")}
        >
          UN TEXTO ÚNICO EN LA PÁGINA
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#09A5B0" }}
          onClick={() => setPosicionForm("Serie de textos")}
        >
          UNA SERIE DE TEXTOS EN LA PÁGINA
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#09A5B0" }}
          onClick={() => setPosicionForm("Libro digital")}
        >
          UN LIBRO DIGITAL
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#09A5B0" }}
          onClick={() => setPosicionForm("Libro fisico")}
        >
          UN LIBRO FISICO
        </Button>
      </Box>
      {posicionForm === "Libro digital" || posicionForm === "Libro fisico" ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            mt: "20px",
          }}
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: "#09A5B0" }}
            onClick={() => setPosicionForm2("Contenido de mi autoria")}
          >
            Contenido de mi autoria
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#09A5B0" }}
            onClick={() => setPosicionForm2("Editar contenido ajeno")}
          >
            Editar contenido ajeno
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#09A5B0" }}
            onClick={() => setPosicionForm2("Tengo la idea")}
          >
            Tengo la idea
          </Button>
        </Box>
      ) : (
        <></>
      )}
      {posicionForm === "Texto unico" ? (
        <Fade triggerOnce>
          <FormTextoUnico />
        </Fade>
      ) : (
        <></>
      )}
      {posicionForm === "Serie de textos" ? (
        <Fade triggerOnce>
          <FormSerieDeTextos />
        </Fade>
      ) : (
        <></>
      )}
      {posicionForm === "Libro digital" || posicionForm === "Libro fisico" ? (
        <>
          {posicionForm2 === "Contenido de mi autoria" ? (
            <>
              <Fade triggerOnce>
                <FormContenidoDeAutor />
              </Fade>
            </>
          ) : (
            <></>
          )}

          {posicionForm2 === "Editar contenido ajeno" ? (
            <Fade triggerOnce>
              <FormContenidoAjeno />
            </Fade>
          ) : (
            <></>
          )}

          {posicionForm2 === "Tengo la idea" ? (
            <Fade triggerOnce>
              <FormSoloLaIdea />
            </Fade>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </Container>
  );
}

export default FormProyectos;

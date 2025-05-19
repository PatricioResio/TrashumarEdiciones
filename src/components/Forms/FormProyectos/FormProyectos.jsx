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
      <Typography mb={3} component="h4" variant="outlined">
        Elegí el formato a trabajar
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          mb: "1rem",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            borderRadius: "0px",
            width: "25%",
            p: "0.1rem",
            backgroundColor:
              posicionForm === "Texto unico" ? "#078893" : "#00000",
            color: posicionForm === "Texto unico" ? "#fff" : "#000",
            fontWeight: posicionForm === "Texto unico" ? "bold" : "normal",
            "&:hover": {
              backgroundColor:
                posicionForm === "Texto unico" ? "#078893" : "primary.main",
            },
          }}
          onClick={() => setPosicionForm("Texto unico")}
        >
          Un texto único
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "0px",
            p: "0.1rem",
            width: "25%",
            backgroundColor:
              posicionForm === "Serie de textos" ? "#078893" : "#00000",
            color: posicionForm === "Serie de textos" ? "#fff" : "#000",
            fontWeight: posicionForm === "Serie de textos" ? "bold" : "normal",
            "&:hover": {
              backgroundColor:
                posicionForm === "Serie de textos" ? "#078893" : "primary.main",
            },
          }}
          onClick={() => setPosicionForm("Serie de textos")}
        >
          UNA SERIE DE TEXTOS
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "0px",
            p: "0.1rem",
            width: "25%",
            backgroundColor:
              posicionForm === "Libro digital" ? "#078893" : "#00000",
            color: posicionForm === "Libro digital" ? "#fff" : "#000",
            fontWeight: posicionForm === "Libro digital" ? "bold" : "normal",
            "&:hover": {
              backgroundColor:
                posicionForm === "Libro digital" ? "#078893" : "primary.main",
            },
          }}
          onClick={() => setPosicionForm("Libro digital")}
        >
          UN LIBRO DIGITAL
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "0px",
            p: "0.1rem",
            width: "25%",
            backgroundColor:
              posicionForm === "Libro fisico" ? "#078893" : "#00000",
            color: posicionForm === "Libro fisico" ? "#fff" : "#000",
            fontWeight: posicionForm === "Libro fisico" ? "bold" : "normal",
            "&:hover": {
              backgroundColor:
                posicionForm === "Libro fisico" ? "#078893" : "primary.main",
            },
          }}
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
            width: "100%",
            mb: "1rem",
            p: "auto",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              borderRadius: "0px",
              p: "0.1rem",
              width: "33%",
              backgroundColor:
                posicionForm2 === "Contenido de mi autoria"
                  ? "#078893"
                  : "#00000",
              color:
                posicionForm2 === "Contenido de mi autoria" ? "#fff" : "#000",
              fontWeight:
                posicionForm2 === "Contenido de mi autoria" ? "bold" : "normal",
              "&:hover": {
                backgroundColor:
                  posicionForm2 === "Contenido de mi autoria"
                    ? "#078893"
                    : "primary.main",
              },
            }}
            onClick={() => setPosicionForm2("Contenido de mi autoria")}
          >
            Contenido de mi autoria
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "0px",
              p: "0.1rem",
              width: "33%",
              backgroundColor:
                posicionForm2 === "Editar contenido ajeno"
                  ? "#078893"
                  : "#00000",
              color:
                posicionForm2 === "Editar contenido ajeno" ? "#fff" : "#000",
              fontWeight:
                posicionForm2 === "Editar contenido ajeno" ? "bold" : "normal",
              "&:hover": {
                backgroundColor:
                  posicionForm2 === "Editar contenido ajeno"
                    ? "#078893"
                    : "primary.main",
              },
            }}
            onClick={() => setPosicionForm2("Editar contenido ajeno")}
          >
            Editar contenido ajeno
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "0px",
              p: "0.1rem",
              width: "33%",
              backgroundColor:
                posicionForm2 === "Tengo la idea" ? "#078893" : "#00000",
              color: posicionForm2 === "Tengo la idea" ? "#fff" : "#000",
              fontWeight: posicionForm2 === "Tengo la idea" ? "bold" : "normal",
              "&:hover": {
                backgroundColor:
                  posicionForm2 === "Tengo la idea"
                    ? "#078893"
                    : "primary.main",
              },
            }}
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
                <FormContenidoDeAutor
                  posicionForm={posicionForm}
                  posicionForm2={posicionForm2}
                />
              </Fade>
            </>
          ) : (
            <></>
          )}

          {posicionForm2 === "Editar contenido ajeno" ? (
            <Fade triggerOnce>
              <FormContenidoAjeno
                posicionForm={posicionForm}
                posicionForm2={posicionForm2}
              />
            </Fade>
          ) : (
            <></>
          )}

          {posicionForm2 === "Tengo la idea" ? (
            <Fade triggerOnce>
              <FormSoloLaIdea
                posicionForm={posicionForm}
                posicionForm2={posicionForm2}
              />
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

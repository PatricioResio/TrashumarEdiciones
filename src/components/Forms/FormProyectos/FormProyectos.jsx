import { Typography, Button, Container, Box } from "@mui/material";
import FormTextoUnico from "./FormTextoUnico";
import FormContenidoDeAutor from "./FormContenidoDeAutor";
import FormContenidoAjeno from "./FormContenidoAjeno";
import FormSoloLaIdea from "./FormSoloLaIdea";
import FormSerieDeTextos from "./FormSerieDeTextos";
import { Fade } from "react-awesome-reveal";
import useFormProyectos from "../../../hooks/useFormProyectos";
import ButtonNavForm from "./ButtonNavForm";

function FormProyectos() {
  const { posicionForm, setPosicionForm, posicionForm2, setPosicionForm2 } =
    useFormProyectos();

  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "65vh",
        fontSize: { xs: "18px", sm: "24px", md: "26px" },
        color:"black",  
        p: "30px 10px",
        m: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: " rgba(255, 255, 255, 0.9)",
      }}
    >
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
          <ButtonNavForm posicionForm={posicionForm} text="Texto unico" position="texto unico" setPosicionForm={setPosicionForm}/>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "5px",
            fontSize:{xs:"0.7rem",md:"1rem",lg:"1.2rem"},
            height:{xs:"4rem",sm:"3rem", md:"3rem",lg:"4rem"},

            p: "0.1rem",
            width: "25%",
            backgroundColor:
              posicionForm === "Serie de textos" ? "#7AE7F5" : "#00000",
            color: posicionForm === "Serie de textos" ? "#000000ea" : "#000",
            fontWeight: posicionForm === "Serie de textos" ? "bold" : "normal",
            "&:hover": {
              backgroundColor:
                posicionForm === "Serie de textos" ? "#7AE7F5" : "primary.main",
            },
          }}
          onClick={() => setPosicionForm("Serie de textos")}
        >
          UNA SERIE DE TEXTOS
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "5px",
            p: "0.1rem",
            width: "25%",
              height:{xs:"4rem",sm:"3rem", md:"3rem",lg:"4rem"},
            fontSize:{xs:"0.7rem",md:"1rem",lg:"1.2rem"},
            backgroundColor:
              posicionForm === "Libro digital" ? "#7AE7F5" : "#00000",
            color: posicionForm === "Libro digital" ? "#000000ea" : "#000",
            fontWeight: posicionForm === "Libro digital" ? "bold" : "normal",
            "&:hover": {
              backgroundColor:
                posicionForm === "Libro digital" ? "#7AE7F5" : "primary.main",
            },
          }}
          onClick={() => setPosicionForm("Libro digital")}
        >
          UN LIBRO DIGITAL
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "5px",
            p: "0.1rem",
            height:{xs:"4rem",sm:"3rem", md:"3rem",lg:"4rem"}, 
            fontSize:{xs:"0.7rem",md:"1rem",lg:"1.2rem"},
            width: "25%",
            backgroundColor:
              posicionForm === "Libro fisico" ? "#7AE7F5" : "#00000",
            color: posicionForm === "Libro fisico" ? "#000000ea" : "#000",
            fontWeight: posicionForm === "Libro fisico" ? "bold" : "normal",
            "&:hover": {
              backgroundColor:
                posicionForm === "Libro fisico" ? "#7AE7F5" : "primary.main",
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
             height:"4rem",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              borderRadius: "5px",
              p: "0.1rem",
              fontSize:{xs:"0.7rem",md:"1rem",lg:"1.2rem"},
              height:{xs:"4rem",sm:"3rem", md:"3rem",lg:"4rem"},
              width: "33%",
              backgroundColor:
                posicionForm2 === "Contenido de mi autoria"
                  ? "#7AE7F5"
                  : "#00000",
              color:
                posicionForm2 === "Contenido de mi autoria"
                  ? "#000000ea"
                  : "#000",
              fontWeight:
                posicionForm2 === "Contenido de mi autoria" ? "bold" : "normal",
              "&:hover": {
                backgroundColor:
                  posicionForm2 === "Contenido de mi autoria"
                    ? "#7AE7F5"
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
              borderRadius: "5px",
              p: "0.1rem",
              fontSize:{xs:"0.7rem",md:"1rem",lg:"1.2rem"},
              width: "33%",
              height:{xs:"4rem",sm:"3rem", md:"3rem",lg:"4rem"},
              backgroundColor:
                posicionForm2 === "Editar contenido ajeno"
                  ? "#7AE7F5"
                  : "#00000",
              color:
                posicionForm2 === "Editar contenido ajeno"
                  ? "#000000ea"
                  : "#000",
              fontWeight:
                posicionForm2 === "Editar contenido ajeno" ? "bold" : "normal",
              "&:hover": {
                backgroundColor:
                  posicionForm2 === "Editar contenido ajeno"
                    ? "#7AE7F5"
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
              borderRadius: "5px",
              fontSize:{xs:"0.7rem",md:"1rem",lg:"1.2rem"},
              height:{xs:"4rem",sm:"3rem", md:"3rem",lg:"4rem"},
              p: "0.1rem",
              width: "33%",
              backgroundColor:
                posicionForm2 === "Tengo la idea" ? "#7AE7F5" : "#00000",
              color: posicionForm2 === "Tengo la idea" ? "#000000ea" : "#000",
              fontWeight: posicionForm2 === "Tengo la idea" ? "bold" : "normal",
              "&:hover": {
                backgroundColor:
                  posicionForm2 === "Tengo la idea"
                    ? "#7AE7F5"
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

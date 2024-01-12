import {
  TextField,
  Checkbox,
  Typography,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

const Forms1 = () => {
  return (
    <FormGroup>
      <Typography
        component="h4"
        id="outlined-basic"
        label="AUTORES"
        variant="outlined"
      >
        Elegí el formato a trabajar
      </Typography>
      <FormControlLabel
        control={<Checkbox name="jason" />}
        label="QUIERO PUBLICAR UN TEXTO ÚNICO EN LA PÁGINA"
      />
      <FormControlLabel
        control={<Checkbox name="jason" />}
        label="QUIERO PUBLICAR UNA SERIE DE TEXTOS EN LA PÁGINA"
      />
      <FormControlLabel
        control={<Checkbox name="jason" />}
        label="QUIERO PUBLICAR UN LIBRO DIGITAL"
      />
      <FormControlLabel
        control={<Checkbox name="jason" />}
        label="QUIERO PUBLICAR UN LIBRO FISICO"
      />
    </FormGroup>
  );
};
const Forms2 = () => {
  return (
    <FormGroup>
      <Typography
        Typography
        component="h4"
        id="outlined-basic"
        label="AUTORES"
        variant="outlined"
      >
        selecciona el rol que cumplís en la obra{" "}
      </Typography>
      <FormControlLabel
        control={<Checkbox name="jason" />}
        label="EL CONTENIDO A PUBLICAR ES DE MI AUTORIA"
      />
      <FormControlLabel
        control={<Checkbox name="jason" />}
        label="EDITARÉ CONTENIDO AJENO"
      />
      <FormControlLabel
        control={<Checkbox name="jason" />}
        label="TENGO LA IDEA, PERO NO LO VOY A ESCRIBIR"
      />
      <FormControlLabel
        control={<Checkbox name="jason" />}
        label="QUIERO PUBLICAR UN LIBRO FISICO"
      />
      <FormControlLabel
        control={<Checkbox name="jason" />}
        label="QUIERO PUBLICAR UN LIBRO FISICO"
      />
    </FormGroup>
  );
};
const Forms3 = () => {
  return (
    <FormGroup>
      <Typography
        component="h4"
        id="outlined-basic"
        label="AUTORES"
        variant="outlined"
      >
        {" "}
        Contanos de que se trata (formato, genero, sinopsis, etcétera).
      </Typography>
      <TextField
        id="Aquí podes explayarte"
        label="Aquí podes explayarte"
        variant="outlined"
      />
      <Typography
        component="h4"
        id="outlined-basic"
        label="AUTORES"
        variant="outlined"
      >
        {" "}
        ¿En que etapa del desarrollo te encontras?
      </Typography>
      <FormControlLabel
        control={<Checkbox name="jason" />}
        label="ESTOY TRABAJANDO EN EL TEXTO."
      />
      <FormControlLabel
        control={<Checkbox name="jason" />}
        label="TENGO EL MANUSCRITO TERMINADO."
      />
      <FormControlLabel
        control={<Checkbox name="jason" />}
        label="TENGO EL MANUSCRITO TERMINADO Y CORREGIDO."
      />
      <FormControlLabel
        control={<Checkbox name="jason" />}
        label="TENGO TODO LISTO PARA PUBLICAR."
      />
    </FormGroup>
  );
};
const Forms4 = () => {
  return (
    <FormGroup>
      <Typography
        component="h4"
        id="outlined-basic"
        label="AUTORES"
        variant="outlined"
      >
        {" "}
        ¿Que etapas te hace falta cubrir?{" "}
      </Typography>
      <FormControlLabel
        control={<Checkbox name="jason" />}
        label="INFORME DE LECTURA."
      />
      <FormControlLabel
        control={<Checkbox name="jason" />}
        label="CORRECCIÓN GRAMATICAL."
      />
      <FormControlLabel
        control={<Checkbox name="jason" />}
        label="TENGO EL MANUSCRITO TERMINADO Y CORREGIDO."
      />
      <FormControlLabel
        control={<Checkbox name="jason" />}
        label="CORRECCIÓN DE ESTILO."
      />
      <Typography
        component="h4"
        id="outlined-basic"
        label="AUTORES"
        variant="outlined"
      >
        {" "}
        Traducción
      </Typography>
      <Typography
        component="h4"
        id="outlined-basic"
        label="AUTORES"
        variant="outlined"
      >
        Selecciona el idioma original
      </Typography>
      <Typography
        component="h4"
        id="outlined-basic"
        label="AUTORES"
        variant="outlined"
      >
        A que idioma queres traducirlo?
      </Typography>
      <Typography id="outlined-basic" label="AUTORES" variant="outlined">
        ESTOY TRABAJANDO EN EL TEXTO.
      </Typography>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </FormGroup>
  );
};

export { Forms1, Forms2, Forms3, Forms4 };

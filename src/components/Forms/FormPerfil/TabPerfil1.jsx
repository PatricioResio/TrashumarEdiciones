import {
  TextField,
  Typography,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Switch,
} from "@mui/material";

const TabPerfil1 = () => {
  return (
    <>
      <Typography sx={{ mb: "8px" }} variant="h5" component="h5">
        Completa tus datos personales
      </Typography>
      <TextField id="FacebookForm" label="Facebook" variant="outlined" />
      <TextField id="InstagramForm" label="Instagram" variant="outlined" />
      <TextField id="XForm" label="X" variant="outlined" />
      <TextField id="LinkedInForm" label="LinkedIn" variant="outlined" />
    </>
  );
};

const TabPerfil2 = () => {
  return (
    <>
      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Switch name="gilad" />}
            label="SOY ESCRITOR O ESCRITORA"
          />
          <FormControlLabel
            control={<Switch name="jason" />}
            label="ME DEDICO A OTRAS ARTES"
          />
          <FormControlLabel
            control={<Switch name="antoine" />}
            label="SOY EDITOR O EDITORA"
          />
          <FormControlLabel
            control={<Switch name="antoine" />}
            label="HAGO CORRECCIÓN GRAMATICAL"
          />
          <FormControlLabel
            control={<Switch name="antoine" />}
            label="HAGO CORRECCIÓN DE ESTILO"
          />
          <FormControlLabel
            control={<Switch name="antoine" />}
            label="SOY LECTORA O LECTOR CERO"
          />
          <FormControlLabel
            control={<Switch name="antoine" />}
            label="SOY TRADUCTOR O TRADUCTORA / Por favor, decinos que idiomas manejas y que nivel tenes de cada uno."
          />
          <FormControlLabel
            control={<Switch name="antoine" />}
            label="SOY DIBUJANTE O DISEÑADOR"
          />
          <FormControlLabel
            control={<Switch name="antoine" />}
            label="SOY ARTISTA GRAFICO"
          />
          <FormControlLabel
            control={<Switch name="antoine" />}
            label="SOY FOTOGRAFA O FOTOGRAFO"
          />
          <FormHelperText>
            Explicanos que artes manejas y que servicios haces.
          </FormHelperText>
          <TextField
            id="ExplicarPerfil"
            label="Me manejo haciendo distintos..."
            variant="outlined"
          />
        </FormGroup>
      </FormControl>
    </>
  );
};

const TabPerfil3 = () => {
  return (
    <>
      <Typography sx={{ mb: "8px" }} variant="h5" component="h5">
        Distribuidores (personas fisicas)
      </Typography>
      <FormHelperText>
        Selecciona la zona donde trabajas, y el radio en que te manejas. Podes
        seleccionar varias distintas.
      </FormHelperText>
      <FormHelperText>Detalla tus metodos de venta</FormHelperText>
      <TextField id="MetodosVenta" label="MetodosVenta" variant="outlined" />
      <Typography sx={{ mb: "8px" }} variant="h5" component="h5">
        Distribuidores (librerias)
      </Typography>
      <TextField id="Todavia no se" label="Todavia no se" variant="outlined" />
    </>
  );
};

export { TabPerfil1, TabPerfil2, TabPerfil3 };

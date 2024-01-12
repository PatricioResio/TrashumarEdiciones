import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Switch,
} from "@mui/material";

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
        </FormGroup>
        <FormHelperText>
          Explicanos que artes manejas y que servicios haces.
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default TabPerfil2;

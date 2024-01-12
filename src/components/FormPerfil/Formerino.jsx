<>
  <TextField id="FacebookForm" label="Facebook" variant="outlined" />
  <TextField id="InstagramForm" label="Instagram" variant="outlined" />
  <TextField id="XForm" label="X" variant="outlined" />
  <TextField id="LinkedInForm" label="LinkedIn" variant="outlined" />
  <FormControl component="fieldset" variant="standard">
    <FormLabel component="legend">Assign responsibility</FormLabel>
    <FormGroup>
      <FormControlLabel
        control={
          <Switch checked={state.gilad} onChange={handleChange} name="gilad" />
        }
        label="SOY ESCRITOR O ESCRITORA"
      />
      <FormControlLabel
        control={
          <Switch checked={state.jason} onChange={handleChange} name="jason" />
        }
        label="ME DEDICO A OTRAS ARTES"
      />
      <FormControlLabel
        control={
          <Switch
            checked={state.antoine}
            onChange={handleChange}
            name="antoine"
          />
        }
        label="SOY EDITOR O EDITORA"
      />
      <FormControlLabel
        control={
          <Switch
            checked={state.antoine}
            onChange={handleChange}
            name="antoine"
          />
        }
        label="HAGO CORRECCIÓN GRAMATICAL"
      />
      <FormControlLabel
        control={
          <Switch
            checked={state.antoine}
            onChange={handleChange}
            name="antoine"
          />
        }
        label="HAGO CORRECCIÓN DE ESTILO"
      />
      <FormControlLabel
        control={
          <Switch
            checked={state.antoine}
            onChange={handleChange}
            name="antoine"
          />
        }
        label="SOY LECTORA O LECTOR CERO"
      />
      <FormControlLabel
        control={
          <Switch
            checked={state.antoine}
            onChange={handleChange}
            name="antoine"
          />
        }
        label="SOY TRADUCTOR O TRADUCTORA / Por favor, decinos que idiomas manejas y que nivel tenes de cada uno."
      />
      <FormControlLabel
        control={
          <Switch
            checked={state.antoine}
            onChange={handleChange}
            name="antoine"
          />
        }
        label="SOY DIBUJANTE O DISEÑADOR"
      />
      <FormControlLabel
        control={
          <Switch
            checked={state.antoine}
            onChange={handleChange}
            name="antoine"
          />
        }
        label="SOY ARTISTA GRAFICO"
      />
      <FormControlLabel
        control={
          <Switch
            checked={state.antoine}
            onChange={handleChange}
            name="antoine"
          />
        }
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

  <Typography
    component="h3"
    id="outlined-basic"
    label="AUTORES"
    variant="outlined"
  >
    Autores
  </Typography>
  <Typography
    component="h4"
    id="outlined-basic"
    label="AUTORES"
    variant="outlined"
  >
    Soy escritor o escritora
  </Typography>
  <Checkbox />
  <Typography
    component="h4"
    id="outlined-basic"
    label="AUTORES"
    variant="outlined"
  >
    Me dedico a otras artes
  </Typography>
  <Checkbox />
  <TextField
    id="outlined-basic"
    label="Contanos sobre tu experiencia"
    variant="outlined"
  />
  <Typography
    component="h3"
    id="outlined-basic"
    label="AUTORES"
    variant="outlined"
  >
    Editores, Correctores y Traductores
  </Typography>
  <Switch />
  <Typography
    component="h4"
    id="outlined-basic"
    label="AUTORES"
    variant="outlined"
  >
    soy editor o editora
  </Typography>
  <Checkbox />
  <Typography
    component="h4"
    id="outlined-basic"
    label="AUTORES"
    variant="outlined"
  >
    hago corrección gramatical
  </Typography>
  <Checkbox />
  <Typography
    component="h4"
    id="outlined-basic"
    label="AUTORES"
    variant="outlined"
  >
    hago corrección de estilo
  </Typography>
  <Checkbox />
  <Typography
    component="h4"
    id="outlined-basic"
    label="AUTORES"
    variant="outlined"
  >
    soy lector o lectora cero
  </Typography>
  <Checkbox />
  <Typography
    component="h4"
    id="outlined-basic"
    label="AUTORES"
    variant="outlined"
  >
    soy traductor o traductora
  </Typography>
  <Checkbox />
  <TextField
    id="outlined-basic"
    label="Contanos sobre tu experiencia"
    variant="outlined"
  />
  <Typography
    component="h4"
    id="outlined-basic"
    label="AUTORES"
    variant="outlined"
  ></Typography>
  <Checkbox />
  <Typography
    component="h3"
    id="outlined-basic"
    label="AUTORES"
    variant="outlined"
  >
    Dibujantes y diseñadores
  </Typography>
  <Switch />
  <Typography
    component="h4"
    id="outlined-basic"
    label="AUTORES"
    variant="outlined"
  >
    Soy dibujante o diseñador
  </Typography>
  <Checkbox />
  <Typography
    component="h4"
    id="outlined-basic"
    label="AUTORES"
    variant="outlined"
  >
    soy artista grafico
  </Typography>
  <Checkbox />
  <Typography
    component="h4"
    id="outlined-basic"
    label="AUTORES"
    variant="outlined"
  >
    Soy fotografo o fotografa
  </Typography>
  <Checkbox />
  <TextField
    id="outlined-basic"
    label="Contanos sobre tu experiencia"
    variant="outlined"
  />
  <Typography
    component="h3"
    id="outlined-basic"
    label="AUTORES"
    variant="outlined"
  >
    Distribuidores (personas fisicas)
  </Typography>
  <Switch />
  <Typography
    component="h4"
    id="outlined-basic"
    label="AUTORES"
    variant="outlined"
  >
    {" "}
    Soy dibujante o diseñador{" "}
  </Typography>
  <Checkbox />
  <Typography
    component="h4"
    id="outlined-basic"
    label="AUTORES"
    variant="outlined"
  >
    soy artista grafico
  </Typography>
  <Checkbox />
  <Typography
    component="h4"
    id="outlined-basic"
    label="AUTORES"
    variant="outlined"
  >
    Soy fotografo o fotografa
  </Typography>
  <Checkbox />
  <TextField
    id="outlined-basic"
    label="Contanos sobre tu experiencia"
    variant="outlined"
  />
</>;

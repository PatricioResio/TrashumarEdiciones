import { Box, TextField, Checkbox, Tab, Typography, Switch, Button } from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { useState } from "react";


const FormRegistro = () => {
  const label = "label";

  const [value, setValue ] = useState ("1");
  
  const handleChange = (value) =>{
    setValue(value);
  };


  return (
    <div>
      <Typography component="h2" id="outlined-basic" variant="outlined" > Registro </Typography>
        <form>

        <TabContext value={value}>
  <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
    <TabList onChange={(e, newValue)=>handleChange(newValue)} aria-label="lab API tabs example">
      <Tab label="Información basica" value="1" />
      <Tab label="Información profesional" value="2" />
      <Tab label="Distribuidore" value="3" />
    </TabList>
  </Box>
  <TabPanel sx={{ display:'flex', flexDirection: 'column', width:'50vh'}} value="1">
        <TextField id="outlined-basic" label="Nombre" variant="outlined" />
        <TextField id="outlined-basic" label="Nombre publico" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Confimación email" variant="outlined" />
        <TextField id="outlined-basic" label="Email de contacto" variant="outlined" />
        <TextField id="outlined-basic" label="Telefono" variant="outlined" />
        <TextField id="outlined-basic" label="Redes sociales Personales" variant="outlined" />
        <TextField id="outlined-basic" label="Redes sociales Laborales" variant="outlined" />
        <Button onClick={()=> handleChange("2")} variant="contained"> siguiente</Button>
  </TabPanel>
  <TabPanel value="2">
        <Typography component="h3" id="outlined-basic" label="AUTORES" variant="outlined" > Autores </Typography>
        <Switch {...label} />
          <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" > Soy escritor o escritora </Typography>
          <Checkbox {...label} />
          <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" > Me dedico a otras artes </Typography>
          <Checkbox {...label} />
          <TextField id="outlined-basic" label="Contanos sobre tu experiencia" variant="outlined" />
        <Typography component="h3" id="outlined-basic" label="AUTORES" variant="outlined" > Editores, Correctores y Traductores </Typography>
        <Switch {...label} />
          <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" > soy editor o editora </Typography>
          <Checkbox {...label} />
          <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" > hago corrección gramatical </Typography>
          <Checkbox {...label} />
          <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" > hago corrección de estilo  </Typography>
          <Checkbox {...label} />
          <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" > soy lector o lectora cero </Typography>
          <Checkbox {...label} />
          <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" > soy traductor o traductora </Typography>
          <Checkbox {...label} />
          <TextField id="outlined-basic" label="Contanos sobre tu experiencia" variant="outlined" />
          <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" >  </Typography>
          <Checkbox {...label} />
          <Typography component="h3" id="outlined-basic" label="AUTORES" variant="outlined" > Dibujantes y diseñadores </Typography>
        <Switch {...label} />
        <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" > Soy dibujante o diseñador </Typography>
          <Checkbox {...label} />
          <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" > soy artista grafico </Typography>
          <Checkbox {...label} />
          <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" > Soy fotografo o fotografa </Typography>
          <Checkbox {...label} />
          <TextField id="outlined-basic" label="Contanos sobre tu experiencia" variant="outlined" />
          <Button onClick={()=> handleChange("3")} variant="contained"> siguiente</Button>
  </TabPanel>
  <TabPanel value="3">
  <Typography component="h3" id="outlined-basic" label="AUTORES" variant="outlined" > Distribuidores (personas fisicas) </Typography>
        <Switch {...label} />
        <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" > Soy dibujante o diseñador </Typography>
          <Checkbox {...label} />
          <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" > soy artista grafico </Typography>
          <Checkbox {...label} />
          <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" > Soy fotografo o fotografa </Typography>
          <Checkbox {...label} />
          <TextField id="outlined-basic" label="Contanos sobre tu experiencia" variant="outlined" />
          <Button variant="contained"> enviar formulario</Button>
  </TabPanel>
</TabContext>

       {/*  <TextField id="outlined-basic" label="Telefono" variant="outlined" />
        <TextField id="outlined-basic" label="Telefono" variant="outlined" />
        <TextField id="outlined-basic" label="Telefono" variant="outlined" />
        <TextField id="outlined-basic" label="Telefono" variant="outlined" />
        <Checkbox {...label} /> */}
        </form>
    </div>
  )
}

export default FormRegistro
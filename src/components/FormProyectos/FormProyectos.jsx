import { Box, TextField, Checkbox, Tab, Typography, Switch, Button, Container } from "@mui/material"
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
        <Container sx={{height:'60vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <Typography component="h2" id="outlined-basic" variant="outlined" > Quéres trabajar con nosotrxs? </Typography>
            <Typography component="p"> En TRASHUMAR apostamos por les autores noveles: queremos que todes tengan la posibilidad de publicar su obra, sin vender su alma al diablo ni conformarse con el amor al arte como sueldo.
                        Tanto apostamos, que no dejamos de ser noveles como el que mas. Es nuestro el sueño de publicar, y esto, el humilde intento de democratizarlo: una editorial pequeña cargando un gran proyecto, sin mas miras que las de crecer. Mientras tanto, rogamos comprendas nuestras limitaciones logísticas y presupuestarias. 
                        A continuación te pedimos que completes un formulario. No todas los campos son obligatorios, pero si podes, intenta contestar lo mas que puedas y explayarte en las definiciones. Nos servira para analizar tu propuesta.
                        Vas a poder editar la mayoria de los aspectos.
                        Una vez hayamos recibido el formulario, vamos a contactarnos con vos; te informaremos de las opciones disponibles y, si nos ponemos de acuerdo, empezamos a coordinarlo.
                        Cuando tu proyecto esté aprobado, podras seguir trabajando desde la pagina.
                        ¡Gracias por confiar en nosotres!</Typography>
        </Container>
        <form>

        <TabContext value={value}>
  <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
    <TabList onChange={(e, newValue)=>handleChange(newValue)} sx={{width:'100%', display:'flex',}} aria-label="lab API tabs example">
      <Tab label="1" value="1" />
      <Tab label="2" value="2" />
      <Tab label="3" value="3" />
    </TabList>
  </Box>
  <TabPanel sx={{ display:'flex', flexDirection: 'column'}} value="1">
    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" > Elegí el formato a trabajar</Typography>
    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" > QUIERO PUBLICAR UN TEXTO ÚNICO EN LA PÁGINA</Typography>
    <Checkbox {...label} />
    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" >QUIERO PUBLICAR UNA SERIE DE TEXTOS EN LA PÁGINA </Typography>
    <Checkbox {...label} />
    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" > QUIERO PUBLICAR UN LIBRO DIGITAL </Typography>
    <Checkbox {...label} />
    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" > QUIERO PUBLICAR UN LIBRO FÍSICO </Typography>
    <Checkbox {...label} />

    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" >selecciona el rol que cumplís en la obra  </Typography>
    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" >EL CONTENIDO A PUBLICAR ES DE MI AUTORIA  </Typography>
    <Checkbox {...label} />
    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" > QEDITARÉ CONTENIDO AJENO </Typography>
    <Checkbox {...label} />
    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" > TENGO LA IDEA, PERO NO LO VOY A ESCRIBIR </Typography>
    <Checkbox {...label} />
    <Button onClick={()=> handleChange("2")} variant="contained"> siguiente</Button>
  </TabPanel>
  <TabPanel value="2">
    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" > Contanos de que se trata (formato, genero, sinopsis, etcétera).</Typography>
    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" > ¿En que etapa del desarrollo te encontras?</Typography>
    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" >ESTOY TRABAJANDO EN EL TEXTO.</Typography>
    <Checkbox {...label} />
    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" >TENGO EL MANUSCRITO TERMINADO.</Typography>
    <Checkbox {...label} />
    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" >TENGO EL MANUSCRITO TERMINADO Y CORREGIDO.</Typography>
    <Checkbox {...label} />
    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" > TENGO TODO LISTO PARA PUBLICAR.</Typography>
    <Checkbox {...label} />
    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" > ¿Que etapas te hace falta cubrir?  </Typography>
    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" >INFORME DE LECTURA</Typography>
    <Checkbox {...label} />
    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" >CORRECCIÓN GRAMATICAL</Typography>
    <Checkbox {...label} />
    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" >CORRECCIÓN DE ESTILO</Typography>
    <Checkbox {...label} />
    <Button onClick={()=> handleChange("3")} variant="contained"> siguiente</Button>
  </TabPanel>
  <TabPanel value="3">
  <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" > Traducción</Typography>
  
    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" >Selecciona el idioma original</Typography>
    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" >A que idioma queres traducirlo?</Typography>
    <Typography component="input" id="outlined-basic" label="AUTORES" variant="outlined" >ESTOY TRABAJANDO EN EL TEXTO.</Typography>
    <Checkbox {...label} />
    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" >TENGO EL MANUSCRITO TERMINADO.</Typography>
    <Checkbox {...label} />
    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" >TENGO EL MANUSCRITO TERMINADO Y CORREGIDO.</Typography>
    <Checkbox {...label} />
    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" > TENGO TODO LISTO PARA PUBLICAR.</Typography>
    <Checkbox {...label} />
    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" > ¿Que etapas te hace falta cubrir?  </Typography>
    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" >INFORME DE LECTURA</Typography>
    <Checkbox {...label} />
    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" >CORRECCIÓN GRAMATICAL</Typography>
    <Checkbox {...label} />
    <Typography component="h4" id="outlined-basic" label="AUTORES" variant="outlined" >CORRECCIÓN DE ESTILO</Typography>
    <Checkbox {...label} />
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
import { Container, Grid } from "@mui/material"

const Footer = () => {
  return (
    <Container color="secondary">
      
      <Grid container spacing={2} sx={{ padding: "20px", bottom: "0", width: "100%"}}>
  <Grid item xs={3}>
    {<p> Facebook </p>}
  </Grid>
  <Grid item xs={3}>
    
  {<p> Instagram </p>}
  </Grid>
  <Grid item xs={3}>
    {<p> Conoce más sobre nosotros </p>}
  </Grid>
  <Grid item xs={3}>
  {<p> usted se tiene que arrepentir </p>}
  </Grid>
</Grid>

    </Container>
  )
}

export default Footer
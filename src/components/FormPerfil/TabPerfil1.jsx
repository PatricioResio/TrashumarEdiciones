import { TextField, Typography } from "@mui/material";

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

export default TabPerfil1;


import { Box, Container, Paper, Typography } from "@mui/material";

const CartaPrograma = ({ texto }) => {
  return (
    <Paper
      disableGutters
      maxWidth="xl"
      sx={{
        height: { xs: "150vh", lg: "550px" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        textAlign: "center",
        borderRadius: "20px",
      }}
    >
     
            <Typography
              variant="body1"
              
              component="p"
              sx={{ width: { xs: "80vw", md: "18.75rem" } }}
            >
              {texto}
            </Typography>
          
    </Paper>
  );
};
export {CartaPrograma};
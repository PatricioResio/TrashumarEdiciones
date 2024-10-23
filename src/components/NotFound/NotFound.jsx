import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box
      component="section"
      sx={{
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography component="h3" variant="h3" color={"error"}>
        Error 404, ruta no encontrada
      </Typography>

      <Button component={Link} to="/">
        Volvé al incio
      </Button>
    </Box>
  );
};

export default NotFound;

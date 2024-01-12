import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const HomeSection = () => {
  return (
    <Box
      component="section"
      sx={{
        height: "110vh",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        backgroundColor: "#4D7A77",
        fontFamily: "roboto",
      }}
    >
      <Typography variant="h3" sx={{ fontSize: "48px", fontWeight: "bold" }}>
        Bienvenidos a trashumar
      </Typography>
      <Typography variant="p" sx={{ fontSize: "30px" }}>
        trashumar viene de la trashumancia que es la magia que maneja a los
        trashumos, si le interesa conocer mas sobre Trashumar Ediciones le
        invito a que me siga
        <Button
          color="secondary"
          component={Link}
          to="/nosotros"
          sx={{
            fontSize: "30px",
          }}
        >
          por aquí
        </Button>
      </Typography>
    </Box>
  );
};

export default HomeSection;

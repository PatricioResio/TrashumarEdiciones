import { Box, Container, Typography } from "@mui/material";
import React from "react";

const DescripcionPerfil = ({ nombrePublico, explicarPerfil }) => {
  return (
    <Container
      sx={{
        width: { xs: "350px", md: "700px", lg: "900px", xl: "1200px" },
        height: { xs: "1200px", md: "900px", lg: "500px", xl: "600px" },
        backgroundColor: "#3c9990",
        my: { xs: "30px" },
        border: "2px solid #4d7a77",
        borderRadius: "8px",
        contain: "content",
        overflowY: "scroll",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h3" sx={{ mt: "50px" }}>
          Mi descripcion
        </Typography>
        {!explicarPerfil ? (
          <Typography>
            {nombrePublico} todavía no pudo describir su trabajo!
          </Typography>
        ) : (
          <Typography variant="h4" sx={{ mt: "50px" }}>
            {explicarPerfil}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default DescripcionPerfil;

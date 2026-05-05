import { Box, Container,Typography } from "@mui/material";

import React from "react";
import LazyImage from "../../LazyImage/LazyImage";

const CartaPerfilUsuario = ({ currentUser }) => {
  const avatarSrc =
    currentUser?.avatar || "https://placehold.co/400x400?text=Avatar";

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column" },
        justifyContent: { xs: "space-around", md: "center" },
        alignItems: "center",
        width: "30%",
        zIndex: 1,
        mt: "70px",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          gap: 4,
        }}
      >
        <Box

          sx={{
            height: { xs:"10rem", lg: "13rem" },
            width: {  xs:"10rem", lg: "13rem" },
            borderRadius: "50%",
            border: "3px solid #eefffdff",
            overflow:"hidden"
          }}
          
        ><LazyImage
        src={avatarSrc}
          alt="foto"
          loading="lazy"
          decoding="async"
        />
        </Box>
        <Typography variant="h4" fontWeight="bold" color="#fdffffff">
          {" "}
          {!currentUser ? "No se encontro usuario" : currentUser.nombrePublico}
        </Typography>
      </Box>
    </Container>
  );
};

export default CartaPerfilUsuario;

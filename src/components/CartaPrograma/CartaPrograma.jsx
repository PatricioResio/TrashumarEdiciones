import React from "react";
import {
  PROGRAMA_CUARTO_1,
  PROGRAMA_CUARTO_10,
  PROGRAMA_CUARTO_11,
  PROGRAMA_CUARTO_12,
  PROGRAMA_CUARTO_13,
  PROGRAMA_CUARTO_2,
  PROGRAMA_CUARTO_3,
  PROGRAMA_CUARTO_4,
  PROGRAMA_CUARTO_5,
  PROGRAMA_CUARTO_6,
  PROGRAMA_CUARTO_7,
  PROGRAMA_CUARTO_8,
  PROGRAMA_CUARTO_9,
  PROGRAMA_PRIMERO_1,
  PROGRAMA_PRIMERO_2,
  PROGRAMA_PRIMERO_3,
  PROGRAMA_PRIMERO_4,
  PROGRAMA_PRIMERO_5,
  PROGRAMA_PRIMERO_6,
  PROGRAMA_PRIMERO_7,
  PROGRAMA_PRIMERO_8,
  PROGRAMA_PRIMERO_9,
  PROGRAMA_QUINTO_1,
  PROGRAMA_QUINTO_10,
  PROGRAMA_QUINTO_2,
  PROGRAMA_QUINTO_3,
  PROGRAMA_QUINTO_4,
  PROGRAMA_QUINTO_5,
  PROGRAMA_QUINTO_6,
  PROGRAMA_QUINTO_7,
  PROGRAMA_QUINTO_8,
  PROGRAMA_QUINTO_9,
  PROGRAMA_SEGUNDO_1,
  PROGRAMA_SEGUNDO_2,
  PROGRAMA_SEGUNDO_3,
  PROGRAMA_SEGUNDO_4,
  PROGRAMA_SEGUNDO_5,
  PROGRAMA_SEGUNDO_6,
  PROGRAMA_SEGUNDO_7,
  PROGRAMA_SEGUNDO_8,
  PROGRAMA_SEGUNDO_9,
  PROGRAMA_TERCERO_1,
  PROGRAMA_TERCERO_10,
  PROGRAMA_TERCERO_2,
  PROGRAMA_TERCERO_3,
  PROGRAMA_TERCERO_4,
  PROGRAMA_TERCERO_5,
  PROGRAMA_TERCERO_6,
  PROGRAMA_TERCERO_7,
  PROGRAMA_TERCERO_8,
  PROGRAMA_TERCERO_9,
} from "../../constants/constants";
import { Box, Container, Typography } from "@mui/material";

const CartaPrograma = () => {
  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        height: "550px",
        width: "80vw",
        m: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#F5F1ED",
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          height: "240px",
          width: "80vw",
          m: "15px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_PRIMERO_1}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_PRIMERO_2}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_PRIMERO_3}
        </Typography>
      </Box>
      <Box
        sx={{
          height: "240px",
          width: "80vw",
          m: "15px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_PRIMERO_4}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_PRIMERO_5}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_PRIMERO_6}
        </Typography>
      </Box>
      <Box
        sx={{
          height: "240px",
          width: "80vw",
          m: "15px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_PRIMERO_7}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_PRIMERO_8}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_PRIMERO_9}
        </Typography>
      </Box>
    </Container>
  );
};

const CartaPrograma2 = () => {
  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        height: "550px",
        width: "80vw",
        m: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#F5F1ED",
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          height: "240px",
          width: "80vw",
          m: "15px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_SEGUNDO_1}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_SEGUNDO_2}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_SEGUNDO_3}
        </Typography>
      </Box>
      <Box
        sx={{
          height: "240px",
          width: "80vw",
          m: "15px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_SEGUNDO_4}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_SEGUNDO_5}
        </Typography>
      </Box>
      <Box
        sx={{
          height: "240px",
          width: "80vw",
          m: "15px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_SEGUNDO_6}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_SEGUNDO_7}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_SEGUNDO_8}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_SEGUNDO_9}
        </Typography>
      </Box>
    </Container>
  );
};
const CartaPrograma3 = () => {
  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        height: "550px",
        width: "80vw",
        m: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#F5F1ED",
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          height: "240px",
          width: "80vw",
          m: "15px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_TERCERO_1}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_TERCERO_2}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_TERCERO_3}
        </Typography>
      </Box>
      <Box
        sx={{
          height: "240px",
          width: "80vw",
          m: "15px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_TERCERO_4}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_TERCERO_5}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_TERCERO_6}
        </Typography>
      </Box>
      <Box
        sx={{
          height: "240px",
          width: "80vw",
          m: "15px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_TERCERO_7}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_TERCERO_8}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_TERCERO_9}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_TERCERO_10}
        </Typography>
      </Box>
    </Container>
  );
};
const CartaPrograma4 = () => {
  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        height: "550px",
        width: "80vw",
        m: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#F5F1ED",
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          height: "240px",
          width: "80vw",
          m: "15px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_CUARTO_1}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_CUARTO_2}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_CUARTO_3}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_CUARTO_4}
        </Typography>
      </Box>
      <Box
        sx={{
          height: "240px",
          width: "80vw",
          m: "15px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_CUARTO_5}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_CUARTO_6}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_CUARTO_7}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_CUARTO_8}
        </Typography>
      </Box>
      <Box
        sx={{
          height: "240px",
          width: "80vw",
          m: "15px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_CUARTO_9}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_CUARTO_10}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_CUARTO_11}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_CUARTO_12}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_CUARTO_13}
        </Typography>
      </Box>
    </Container>
  );
};
const CartaPrograma5 = () => {
  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        height: "550px",
        width: "80vw",
        m: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#F5F1ED",
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          height: "240px",
          width: "80vw",
          m: "15px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_QUINTO_1}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_QUINTO_2}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_QUINTO_3}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_QUINTO_4}
        </Typography>
      </Box>
      <Box
        sx={{
          height: "240px",
          width: "80vw",
          m: "15px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_QUINTO_5}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_QUINTO_6}
        </Typography>
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_QUINTO_7}
        </Typography>
      </Box>
      <Box
        sx={{
          height: "240px",
          width: "80vw",
          m: "15px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="body" component="p" sx={{ width: "300px" }}>
          {PROGRAMA_QUINTO_8}
        </Typography>
        <Typography
          variant="body"
          component="p"
          sx={{ width: "300px", mt: "20px" }}
        >
          {PROGRAMA_QUINTO_9}
        </Typography>
        <Typography
          variant="body"
          component="p"
          sx={{ width: "300px", mt: "70px" }}
        >
          {PROGRAMA_QUINTO_10}
        </Typography>
      </Box>
    </Container>
  );
};

export {
  CartaPrograma,
  CartaPrograma2,
  CartaPrograma3,
  CartaPrograma4,
  CartaPrograma5,
};

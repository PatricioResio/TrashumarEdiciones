import { Box, Container, Typography } from "@mui/material";

const DescripcionPerfil = ({ nombrePublico, explicarPerfil }) => {
  return (
    <Container
      sx={{
        height: { xs: "", md: "20rem" },
        my: { xs: "30px", sm: "auto" },
        border: "1px solid #09A5B0",
        display: "flex",
        pading: "20px",
        width: { xs: "80%", md: "40%" },
        borderRadius: "10px",
        backgroundColor: "#BDFFF9",
        contain: "content",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
        }}
      >
        <Typography variant="h5" sx={{ mt: "10px", fontWeight: "bold" }}>
          Mi descripcion
        </Typography>
        {!explicarPerfil ? (
          <Typography>
            {nombrePublico} todavía no pudo describir su trabajo!
          </Typography>
        ) : (
          <Typography variant="h5" sx={{ mt: "50px" }}>
            {explicarPerfil}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default DescripcionPerfil;

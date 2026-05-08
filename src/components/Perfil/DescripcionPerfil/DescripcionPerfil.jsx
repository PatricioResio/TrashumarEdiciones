import { Box, Divider, IconButton, Typography } from "@mui/material";

const DescripcionPerfil = ({
  nombrePublico,
  explicarPerfil,
  explicarTrabajo,
  title,
  icon,
}) => {
  return (
    <Box sx={{ p: 3, borderRadius: 3, m: "auto", backgroundColor: "background.paper", boxShadow: 1, width: "95%", minHeight: "300px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "start" }}>
        <Box sx={{ display: "flex", alignItems: "start", gap: 2, mb: 2 }}>
          <IconButton sx={{ backgroundColor: "primary.main", color: "white", "&:hover": { backgroundColor: "primary.dark" } }}>
            {icon}
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
        </Box>
        <Divider />
        {!explicarPerfil ? (
          <Typography>{nombrePublico} todavía no pudo describir su trabajo!</Typography>
        ) : (
          <Typography variant="h5" mt={2} fontWeight="normal">
            {title === "Sobre mí" ? explicarPerfil : explicarTrabajo}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default DescripcionPerfil;
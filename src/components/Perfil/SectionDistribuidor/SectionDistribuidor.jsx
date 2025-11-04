import { Box, Typography } from "@mui/material";
import Map from "../../Map/Map";

const SectionDistribuidor = ({ zonaDistribuidor, address, metodoVentas }) => {
  const part = address.split(",");
  const formatedAddress = part.slice(0, 2).join(",");

  return (
    <Box
      sx={{
        m: "auto",
        p: "5px",
        borderTop: "1px solid #BAE3D7",
        width: "80vw",
      }}
    >
      <Typography component="h3" variant="h3" mb={2}>
        Acá vendo mis productos por
      </Typography>
      <Typography variant="h4" mb={1}>
        Nos podes encontrar en {formatedAddress}
      </Typography>
      <Typography mb={2}>
        Nuestro metodo de trabajo es {metodoVentas}
      </Typography>
      <Map zonaDistribuidor={zonaDistribuidor} address={address} />
    </Box>
  );
};

export default SectionDistribuidor;

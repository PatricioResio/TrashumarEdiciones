import { Box } from "@mui/material";

const SectionDistribuidor = (zonaDistribuidor, address) => {
  return (
    <Box>
      <h3>Seccion para distribuidores</h3>
      <Map zonaDistribuidor={zonaDistribuidor} address={address}></Map>
    </Box>
  );
};

export default SectionDistribuidor;

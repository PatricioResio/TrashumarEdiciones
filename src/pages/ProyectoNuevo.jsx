import { Container } from "@mui/material";
import { SectionProyecto } from "../components";
import { Fade } from "react-awesome-reveal";
const ProyectoNuevo = () => {
  return (
    <Container maxWidth="xl" disableGutters sx={{ m: "auto" }}>
      <Fade>
        <SectionProyecto />
      </Fade>
    </Container>
  );
};
export default ProyectoNuevo;

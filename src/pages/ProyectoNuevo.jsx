import { Container } from "@mui/material";
import { SectionProyecto } from "../components";
import { Fade } from "react-awesome-reveal";
const ProyectoNuevo = () => {
  return (
    <Container
      maxWidth="2xl"
      disableGutters
      sx={{ m: "0 auto", width: "100%" }}
    >
      <Fade>
        <SectionProyecto />
      </Fade>
    </Container>
  );
};
export default ProyectoNuevo;

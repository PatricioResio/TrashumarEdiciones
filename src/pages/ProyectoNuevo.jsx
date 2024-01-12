import { Container } from "@mui/material";
import { SectionProyecto } from "../components";
import { ContenedorProyectos } from "../components/index";
const ProyectoNuevo = () => {
  return (
    <Container maxWidth="xl" disableGutters sx={{ m: 0 }}>
      <SectionProyecto />
    </Container>
  );
};
export default ProyectoNuevo;

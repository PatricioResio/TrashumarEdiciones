import { CircularProgress } from "@mui/material";
import { PerfilRender } from "../components/index";
import useFilterProyectos from "../hooks/useFilterProyectos";
import useFilterColaboraciones from "../hooks/useFilterColaboraciones";
import useFilterPerfiles from "../hooks/useFilterPerfiles";

const Perfil = () => {
  const { perfil, loadingPerfil } = useFilterPerfiles();
  const { proyectosUser, loadingProyectos } = useFilterProyectos();
  const { colaboraciones, loadingColaboraciones } = useFilterColaboraciones();
  return loadingPerfil && loadingColaboraciones && loadingProyectos ? (
    <CircularProgress />
  ) : (
    <>
      <PerfilRender
        perfil={perfil}
        proyectosUser={proyectosUser}
        colaboraciones={colaboraciones}
      />
    </>
  );
};

export default Perfil;

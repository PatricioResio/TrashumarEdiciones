import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProyectsContext } from "../context/ProyectsContext";

// Busca el proyecto pedido dentro de los datos que ya están cargados en
// ProyectsContext (App.jsx), en vez de pedir la colección entera de nuevo
// cada vez que se abre la página de un proyecto.
const useProyectoPublico = () => {
  const { proyectos, loadingProyectos } = useContext(ProyectsContext);
  const { idProyecto } = useParams();

  const proyectoPublico = proyectos.find(
    (proyecto) => proyecto.idProyecto == idProyecto,
  );

  return { loadingProyectoPublico: loadingProyectos, proyectoPublico };
};

export default useProyectoPublico;
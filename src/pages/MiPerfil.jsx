import { useContext, useEffect } from "react";
import { FormRegistro, Perfil } from "../components/index";
import { AuthContext } from "../context/AuthContext";
import PerfilRouter from "../components/PerfilRouter/PerfilRouter";

const MiPerfil = () => {
  const { newUser } = useContext(AuthContext);

  return newUser === true ? <FormRegistro /> : <PerfilRouter />;
};

export default MiPerfil;

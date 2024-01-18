import { useContext } from "react";
import { FormRegistro } from "../components/index";
import { AuthContext } from "../context/AuthContext";
import PerfilRouter from "../components/PerfilRouter/PerfilRouter";

const MiPerfil = () => {
  const { newUser } = useContext(AuthContext);

  return newUser === true ? <FormRegistro /> : <PerfilRouter />;
};

export default MiPerfil;

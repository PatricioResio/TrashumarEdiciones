import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Perfil from "../Perfil/Perfil";
import { useNavigate } from "react-router-dom";
const PerfilRouter = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return currentUser ? <Perfil /> : navigate("/ingresa");
};

export default PerfilRouter;

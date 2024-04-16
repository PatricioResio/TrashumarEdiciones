import { useContext, useEffect } from "react";
import { FormRegistro } from "../components";
import LoginForm from "../components/Forms/LoginForm/LoginForm";
import { AuthContext } from "../context/AuthContext";
import { Fade } from "react-awesome-reveal";

export default function Login() {
  const { currentUser } = useContext(AuthContext);

  return (
    <Fade>
      <LoginForm />;
    </Fade>
  );
}

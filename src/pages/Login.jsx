import { useContext, useEffect } from "react";
import { FormRegistro } from "../components";
import LoginForm from "../components/LoginForm/LoginForm";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { currentUser } = useContext(AuthContext);

  return <LoginForm />;
}

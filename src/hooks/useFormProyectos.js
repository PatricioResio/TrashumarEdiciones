import { useEffect, useState } from "react";

const useFormProyectos = () => {
  const [posicionForm, setPosicionForm] = useState("");
  const [posicionForm2, setPosicionForm2] = useState("");

  return { posicionForm2, setPosicionForm2, posicionForm, setPosicionForm };
};
export default useFormProyectos;

import { useEffect, useState } from "react";
import { imgArrayHistorias } from "../constants/Arrays";

const useHistorias = () => {
  const [renderHistoria, setRenderHistoria] = useState("primero");

  const [imgArrayCarrusel, setImgArrayCarrusel] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChangeHistoria = (posicion) => {
    setRenderHistoria(posicion);
  };

  useEffect(() => {
    setLoading(true);
    const newArray = imgArrayHistorias.filter(
      (img) => img.posicion === renderHistoria
    );
    setImgArrayCarrusel(newArray);
    setLoading(false);
  }, [renderHistoria]);

  return { imgArrayCarrusel, loading, renderHistoria, handleChangeHistoria };
};

export default useHistorias;

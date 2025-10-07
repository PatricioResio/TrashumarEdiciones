import { useEffect, useState } from "react";
import { imgArrayHistorias } from "../constants/Arrays";

const useHistorias = () => {
  const [renderHistoria, setRenderHistoria] = useState("primero");

  const [imgArrayCarrusel, setImgArrayCarrusel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [popUp, setPopUp] = useState(false);

  const handleChangeHistoria = (posicion) => {
    setRenderHistoria(posicion);
  };
  const handlerPopUp = () => {
    setPopUp(!popUp);
  };

  useEffect(() => {
    setLoading(true);
    const newArray = imgArrayHistorias.filter(
      (img) => img.posicion === renderHistoria
    );
    if (newArray.length > 0) {
      setImgArrayCarrusel(newArray); // Asegúrate de que comience con el primer elemento
    } else {
      setImgArrayCarrusel([]); // Si no hay resultados, vacía el array
    }
    setLoading(false);
  }, [renderHistoria]);

  return {
    imgArrayCarrusel,
    loading,
    renderHistoria,
    handleChangeHistoria,
    handlerPopUp,
  };
};

export default useHistorias;

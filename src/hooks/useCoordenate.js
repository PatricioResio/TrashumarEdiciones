import React, { useEffect, useState } from "react";
import { obtenerCoordenadasOpenCage } from "../api/geoCodeApi";

const useCoordenate = (zonaDistribuidor) => {
  const [loadingDirecciones, setLoadingDirecciones] = useState(true);
  const [direcciones, setDirecciones] = useState([]);
  return useEffect(() => {
    const mapDirecciones = async () => {
      zonaDistribuidor.forEach((direccion) => {
        const { lat, lg } = obtenerCoordenadasOpenCage(direccion);
        setDirecciones([...{ direction: direccion, lat: lat, lg: lg }]);
      });
      setLoadingDirecciones(False);
    };
    mapDirecciones();
  }, [zonaDistribuidor]);
};
return { direcciones, loadingDirecciones };

export default useCoordenate;

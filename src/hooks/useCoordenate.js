import React, { useEffect, useState } from "react";
import { getGeocode } from "../api/geoCodeApi";

const useMapGeocodes = (zonaDistribuidor) => {
  const [loadingDirecciones, setLoadingDirecciones] = useState(true);
  const [direcciones, setDirecciones] = useState([]);
  return useEffect(() => {
    const mapDirecciones = async () => {
      zonaDistribuidor.forEach((direccion) => {
        const { lat, lg } = getGeocode(direccion);
        setDirecciones([...{ direction: direccion, lat: lat, lg: lg }]);
      });
      setLoadingDirecciones(False);
      console.log(direcciones);
    };
    mapDirecciones();
  }, [zonaDistribuidor]);
};
return { direcciones, loadingDirecciones };

export default useMapGeocodes;

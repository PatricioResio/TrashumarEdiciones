// PerfilesContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { getPerfiles, getPerfil } from "../api/api";
import { getCached, setCached } from "../api/cache";

export const PerfilesContext = createContext();

export const PerfilesProvider = ({ children }) => {
  const [perfiles, setPerfiles] = useState([]);
  const [loadingPerfiles, setLoadingPerfiles] = useState(true);
  const [perfilCache, setPerfilCache] = useState({}); // cache individual por idPerfil

  // fetch de todos los perfiles (para listados, búsqueda, etc.)
  useEffect(() => {
    const cached = getCached("perfiles");
    if (cached) {
      setPerfiles(cached);
      setLoadingPerfiles(false);
      return;
    }
    getPerfiles().then((data) => {
      setCached("perfiles", data);
      setPerfiles(data);
      setLoadingPerfiles(false);
    });
  }, []);

  // fetch individual cacheado por idPerfil
  const getOrFetchPerfil = async (idPerfil) => {
    if (perfilCache[idPerfil]) return;
    try {
      const data = await getPerfil({ idPerfil });
      setPerfilCache((prev) => ({ ...prev, [idPerfil]: data }));
    } catch (error) {
      console.error("Error cargando perfil:", error);
    }
  };

  return (
    <PerfilesContext.Provider value={{ perfiles, loadingPerfiles, perfilCache, getOrFetchPerfil }}>
      {children}
    </PerfilesContext.Provider>
  );
};

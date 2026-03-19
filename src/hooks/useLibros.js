import { useState, useEffect } from "react";
import { getLibros } from "../api/api";
import { getCached, setCached } from "../api/cache";

const useLibros = () => {
  const [libros, setlibros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = getCached("libros");
    if (cached) {
      setlibros(cached);
      setLoading(false);
      return;
    }
    const fetchLibros = async () => {
      const libros = await getLibros();
      setCached("libros", libros);
      setlibros(libros);
      setLoading(false);
    };
    fetchLibros();
  }, []);
  return { loading, libros };
};

export default useLibros;

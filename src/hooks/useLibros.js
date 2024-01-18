import { useState, useEffect } from "react";
import { getLibros } from "../api/api";

const useLibros = () => {
  const [libros, setlibros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLibros = async () => {
      const libros = await getLibros();
      setlibros(libros);
      setLoading(false);
    };
    fetchLibros();
  }, []);
  return { loading, libros };
};

export default useLibros;

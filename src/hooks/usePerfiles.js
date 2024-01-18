import { useState, useEffect } from "react";
import { getPerfiles } from "../api/api";

const usePerfiles = () => {
  const [perfiles, setPerfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPerfiles = async () => {
      const perfiles = await getPerfiles();
      setPerfiles(perfiles);
      setLoading(false);
    };
    fetchPerfiles();
  }, []);
  return { perfiles, loading };
};

export default usePerfiles;

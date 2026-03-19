import { useEffect, useState } from "react";
import { getPerfiles } from "../api/api";
import { getCached, setCached } from "../api/cache";

const usePerfiles = () => {
  const [perfiles, setPerfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = getCached("perfiles");
    if (cached) {
      setPerfiles(cached);
      setLoading(false);
      return;
    }
    const fetchPerfiles = async () => {
      const perfiles = await getPerfiles();

      setCached("perfiles", perfiles);
      setPerfiles(perfiles);
      setLoading(false);
    };
    fetchPerfiles();
  }, []);
  return { perfiles, loading };
};

export default usePerfiles;

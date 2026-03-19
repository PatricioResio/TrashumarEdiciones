import { useEffect, useState } from "react";
import { markImageAsLoaded, isImageLoaded } from "../utils/imageCache";

export const useImageLoader = (src, canLoad) => {
  const [loaded, setLoaded] = useState(isImageLoaded(src));

  useEffect(() => {
    if (!canLoad) return;
    if (isImageLoaded(src)) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [canLoad, src]);

  const onLoad = () => {
    markImageAsLoaded(src);
    setLoaded(true);
  };

  return { loaded, onLoad };
};

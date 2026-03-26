import { useCallback, useEffect, useState } from "react";
import { markImageAsLoaded, isImageLoaded } from "../utils/imageCache";

export const useImageLoader = (src, canLoad) => {
  const [loaded, setLoaded] = useState(isImageLoaded(src));

  useEffect(() => {
    if (isImageLoaded(src)) setLoaded(true);
  }, [src]);

  useEffect(() => {
    if (!canLoad) return;
    if (isImageLoaded(src)) setLoaded(true);
  }, [canLoad, src]);

  const onLoad = useCallback(() => {
    markImageAsLoaded(src);
    setLoaded(true);
  }, [src]);

  return { loaded, onLoad };
};
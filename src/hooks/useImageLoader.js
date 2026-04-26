import { useCallback, useEffect, useState } from "react";
import { markImageAsLoaded, isImageLoaded, isImageCached } from "../utils/imageCache";

export const useImageLoader = (src, canLoad) => {
  // ✅ Solo arranca en true si el browser YA tiene la imagen pintable
  const [loaded, setLoaded] = useState(() => isImageCached(src));

  useEffect(() => {
    if (isImageLoaded(src) && isImageCached(src)) setLoaded(true);
  }, [src]);

  useEffect(() => {
    if (!canLoad) return;
    if (isImageCached(src)) setLoaded(true);
  }, [canLoad, src]);

  const onLoad = useCallback(() => {
    markImageAsLoaded(src);
    setLoaded(true);
  }, [src]);

  return { loaded, onLoad };
};
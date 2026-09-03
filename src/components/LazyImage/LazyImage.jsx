import { Box, Skeleton } from "@mui/material";
import { useLazyImage } from "../../hooks/useLazyImages";
import { useImageLoader } from "../../hooks/useImageLoader";
import { useEffect } from "react";
import { autoSrcSet, autoResizedSrc } from "../../utils/responsiveImages";

const LazyImage = ({
  src,
  alt,
  height = "100%",
  width = "100%",
  objectFit = "cover",
  priority = false,
  shouldLoad,
  rootMargin = "200px",
  loading,
  decoding = "async",
  fetchPriority,
  srcSet,
  sizes,
  imgWidth,
  imgHeight,
  maxHeight,
  onLoaded, // ← nueva prop
}) => {
  const { imgRef, isVisible } = useLazyImage(rootMargin);
  const canLoad = priority || (shouldLoad !== undefined ? shouldLoad : isVisible);
  // Si no viene un srcSet explícito, lo generamos solos a partir de `src`
  // (ver utils/responsiveImages.js) en vez de bajar siempre la imagen original entera.
  const resolvedSrcSet = srcSet || autoSrcSet(src);
  const resolvedSrc = resolvedSrcSet ? autoResizedSrc(src) : src;
  const { loaded, onLoad } = useImageLoader(resolvedSrc, canLoad);
  const resolvedLoading = loading || (priority ? "eager" : "lazy");
  const resolvedFetchPriority = fetchPriority || (priority ? "high" : "auto");

  // ✅ Notifica al padre cuando la imagen cargó
  useEffect(() => {
    if (loaded && onLoaded) onLoaded();
  }, [loaded, onLoaded]);

  return (
    <Box ref={imgRef} sx={{ position: "relative", width, height }}>
      <Skeleton
        variant="rectangular"
        animation="wave"
        sx={{
          height:imgHeight,
          width:"100%",
          position: "absolute",
          top: 0,
          left: 0,
          borderRadius: "inherit",
          opacity: loaded ? 0 : 1,
          transition: "opacity 0.8s ease",
          pointerEvents: loaded ? "none" : "auto",
        }}
      />
      {canLoad && (
        <Box
          component="img"
          src={resolvedSrc}
          alt={alt}
          onLoad={onLoad}
          loading={resolvedLoading}
          decoding={decoding}
          fetchpriority={resolvedFetchPriority}
          srcSet={resolvedSrcSet}
          sizes={sizes || (resolvedSrcSet ? "100vw" : undefined)}
          sx={{
            objectFit,
            width: "100%",
            height: "100%",
            maxHeight: maxHeight ?? "none",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
        />
      )}
    </Box>
  );
};

export default LazyImage;
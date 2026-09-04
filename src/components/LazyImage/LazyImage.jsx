import { Box, Skeleton } from "@mui/material";
import { useLazyImage } from "../../hooks/useLazyImages";
import { useImageLoader } from "../../hooks/useImageLoader";
import { useEffect } from "react";

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
  const { loaded, onLoad } = useImageLoader(src, canLoad);
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
          src={src}
          alt={alt}
          onLoad={onLoad}
          loading={resolvedLoading}
          decoding={decoding}
          fetchpriority={resolvedFetchPriority}
          srcSet={srcSet}
          sizes={sizes}
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
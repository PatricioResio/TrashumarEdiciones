import { Box, Skeleton } from "@mui/material";
import { useLazyImage } from "../../hooks/useLazyImages";
import { useImageLoader } from "../../hooks/useImageLoader";

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
}) => {
  const { imgRef, isVisible } = useLazyImage(rootMargin);
  const canLoad = priority || (shouldLoad !== undefined ? shouldLoad : isVisible);
  const { loaded, onLoad } = useImageLoader(src, canLoad);
  const resolvedLoading = loading || (priority ? "eager" : "lazy");
  const resolvedFetchPriority = fetchPriority || (priority ? "high" : "auto");

  return (
    <Box ref={imgRef} sx={{ position: "relative", width, height }}>
      {!loaded && canLoad && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{ position: "absolute", top: 0, left: 0 }}
        />
      )}
      <Box
        component="img"
        src={canLoad ? src : undefined}
        alt={alt}
        onLoad={onLoad}
        loading={resolvedLoading}
        decoding={decoding}
        fetchpriority={resolvedFetchPriority}
        srcSet={canLoad ? srcSet : undefined}
        sizes={sizes}
        width={imgWidth}
        height={imgHeight}
        sx={{
          objectFit: "fit",
          width:"100%",
          height:"100%",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </Box>
  );
};

export default LazyImage;
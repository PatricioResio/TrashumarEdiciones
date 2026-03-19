import { Box, Skeleton } from "@mui/material";
import { useLazyImage } from "../../hooks/useLazyImages";
import { useImageLoader } from "../../hooks/useImageLoader";

const LazyImage = ({
  src,
  alt,
  height = "100%",
  priority = false,
  shouldLoad,
}) => {
  const { imgRef, isVisible } = useLazyImage("200px");
  const canLoad =
    priority || (shouldLoad !== undefined ? shouldLoad : isVisible);
  const { loaded, onLoad } = useImageLoader(src, canLoad);

  return (
    <Box ref={imgRef} sx={{ position: "relative", width: "100%", height }}>
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
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </Box>
  );
};

export default LazyImage;

const loadedImages = new Set();

export const markImageAsLoaded = (src) => {
  loadedImages.add(src);
};

export const isImageLoaded = (src) => {
  return loadedImages.has(src);
};

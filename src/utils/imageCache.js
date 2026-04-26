const memoryCache = new Set();
const STORAGE_KEY = "img_cache";

const getStorageCache = () => {
  try {
    return new Set(JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "[]"));
  } catch {
    return new Set();
  }
};

const saveStorageCache = (src) => {
  try {
    const existing = getStorageCache();
    existing.add(src);
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify([...existing]));
  } catch {}
};

export const markImageAsLoaded = (src) => {
  memoryCache.add(src);
  saveStorageCache(src);
};

export const isImageLoaded = (src) => {
  if (memoryCache.has(src)) return true;
  const storageCache = getStorageCache();
  if (storageCache.has(src)) {
    memoryCache.add(src);
    return true;
  }
  return false;
};
export const isImageCached = (src) => {
  // Verifica si el browser ya tiene la imagen en su cache de red
  if (typeof window === "undefined") return false;
  const img = new Image();
  img.src = src;
  return img.complete && img.naturalWidth > 0;
};
const cache = new Map();
export const getCached = (key) => cache.get(key);
export const setCached = (key, value) => cache.set(key, value);
export const clearCache = () => cache.clear();

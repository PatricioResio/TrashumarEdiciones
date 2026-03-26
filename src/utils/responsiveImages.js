/**
 * Construye el atributo srcSet a partir de un mapa ancho (px) → URL.
 * Subí versiones comprimidas por ancho a Storage y completá el objeto en Arrays.
 * Ejemplo: { 640: url640w, 960: url960w, 1280: url1280w, 1920: urlFull }
 */
export function buildWidthSrcSet(widthToUrl) {
  if (!widthToUrl || typeof widthToUrl !== "object") return undefined;
  const parts = Object.entries(widthToUrl)
    .map(([w, u]) => [Number(w), String(u).trim()])
    .filter(([w, u]) => Number.isFinite(w) && w > 0 && u.length > 0)
    .sort((a, b) => a[0] - b[0]);
  if (parts.length === 0) return undefined;
  return parts.map(([w, u]) => `${u} ${w}w`).join(", ");
}

/** Tamaño de render típico del hero a pantalla completa */
export const HERO_FULL_BLEED_SIZES = "100vw";

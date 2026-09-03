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

const AUTO_RESIZE_WIDTHS = [400, 800, 1200, 1920];

/**
 * Genera un srcSet automáticamente a partir de UNA sola URL (ej: la imagen
 * original en Firebase Storage), pasando por images.weserv.nl para redimensionar
 * al vuelo. Evita depender de subir a mano una copia por cada ancho.
 *
 * OJO: esto agrega una dependencia de un servicio de terceros para servir
 * imágenes. Es gratis y confiable, pero si en algún momento preferís no depender
 * de él, la alternativa más robusta es la extensión oficial "Resize Images" de
 * Firebase Storage (genera los archivos redimensionados en tu propio bucket).
 */
export function autoSrcSet(url, widths = AUTO_RESIZE_WIDTHS) {
  if (!url || typeof url !== "string" || !url.startsWith("http")) return undefined;
  const bare = url.replace(/^https?:\/\//, "");
  return widths
    .map(
      (w) =>
        `https://images.weserv.nl/?url=${encodeURIComponent(bare)}&w=${w}&output=webp&q=80 ${w}w`,
    )
    .join(", ");
}

/** Versión redimensionada de una URL, para usar como `src` de fallback (sin srcSet) */
export function autoResizedSrc(url, width = 1200) {
  if (!url || typeof url !== "string" || !url.startsWith("http")) return url;
  const bare = url.replace(/^https?:\/\//, "");
  return `https://images.weserv.nl/?url=${encodeURIComponent(bare)}&w=${width}&output=webp&q=80`;
}
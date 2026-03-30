/**
 * Resuelve una ruta de imagen pública agregando el base path de Astro.
 * Así los archivos .md pueden usar rutas simples como "/images/foto.jpg"
 * y funcionan tanto en local como en GitHub Pages.
 */
export function assetPath(path: string): string {
  const base = import.meta.env.BASE_URL;
  // Si la ruta ya incluye el base, no duplicar
  if (path.startsWith(base)) return path;
  // Unir base + path evitando doble slash
  return `${base.replace(/\/$/, '')}${path}`;
}

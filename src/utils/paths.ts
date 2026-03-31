import { resolveImageUrl } from './image';

/**
 * Resuelve una ruta de imagen pública.
 * - Links de Google Drive se convierten a URLs directas de imagen.
 * - URLs externas (https://) se retornan tal cual.
 * - Rutas locales se prefijan con el base path de Astro.
 */
export function assetPath(path: string): string {
  if (!path) return path;

  // Primero resolver Google Drive links
  const resolved = resolveImageUrl(path);

  // Si es una URL externa, retornar directo
  if (resolved.startsWith('http://') || resolved.startsWith('https://')) {
    return resolved;
  }

  const base = import.meta.env.BASE_URL;
  // Si la ruta ya incluye el base, no duplicar
  if (resolved.startsWith(base)) return resolved;
  // Unir base + path evitando doble slash
  return `${base.replace(/\/$/, '')}${resolved}`;
}

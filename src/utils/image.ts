/**
 * Converts a Google Drive share link to a direct image URL.
 * Accepts:
 *   - https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 *   - https://drive.google.com/open?id=FILE_ID
 *   - Already converted lh3 URLs
 *   - Regular URLs (returned as-is)
 *   - Local paths (returned as-is)
 */
export function resolveImageUrl(src: string): string {
  if (!src) return src;

  // Already a direct Google image URL
  if (src.includes('lh3.googleusercontent.com')) return src;

  // Google Drive /file/d/ID/ format
  const fileMatch = src.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (fileMatch) {
    return `https://lh3.googleusercontent.com/d/${fileMatch[1]}`;
  }

  // Google Drive open?id=ID format
  const openMatch = src.match(/drive\.google\.com\/open\?id=([^&]+)/);
  if (openMatch) {
    return `https://lh3.googleusercontent.com/d/${openMatch[1]}`;
  }

  // Local path or other URL — return as-is
  return src;
}

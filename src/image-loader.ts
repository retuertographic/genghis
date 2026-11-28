/**
 * next/image loader for the static export: every image under /sites/genghiskhan/ has pre-generated WebP copies
 * in several widths (scripts/optimize-images.mjs), so the browser downloads only the size it needs.
 */
export const IMAGE_WIDTHS = [64, 128, 256, 384, 640, 828, 1080, 1200, 1920];

const SOURCE = /^(.*\/sites\/genghiskhan)\/(.+)\.(jpe?g|png|webp)$/i;

/** Optimised URL of `src` for (at least) `width` pixels. Other URLs are returned unchanged. */
export function optimizedSrc(src: string, width: number): string {
  const m = src.match(SOURCE);
  if (!m) return src;
  const w = IMAGE_WIDTHS.find((x) => x >= width) ?? IMAGE_WIDTHS[IMAGE_WIDTHS.length - 1];
  return `${m[1]}/_img/${m[2]}-${w}.webp`;
}

export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  return optimizedSrc(src, width);
}

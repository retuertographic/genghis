// Generates WebP copies of every site image in the widths used by src/image-loader.ts, plus the social
// sharing image. Runs before `next build` / `next dev`; output goes to public/sites/genghiskhan/_img/ (not committed).
import { existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import sharp from "sharp";

const ROOT = new URL("../public/sites/genghiskhan/", import.meta.url).pathname;
const OUT = join(ROOT, "_img");
const WIDTHS = [64, 128, 256, 384, 640, 828, 1080, 1200, 1920]; // keep in sync with src/image-loader.ts
const SOURCES = ["images", "instagram", "menu", "reviews"];

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* walk(path);
    else if (/\.(jpe?g|png|webp)$/i.test(name)) yield path;
  }
}

const fresh = (out, src) => existsSync(out) && statSync(out).mtimeMs >= statSync(src).mtimeMs;

let made = 0;
for (const folder of SOURCES) {
  for (const src of walk(join(ROOT, folder))) {
    const base = relative(ROOT, src).replace(/\.[^.]+$/, "");
    const { width: original } = await sharp(src).metadata();
    for (const w of WIDTHS) {
      const out = join(OUT, `${base}-${w}.webp`);
      if (fresh(out, src)) continue;
      mkdirSync(dirname(out), { recursive: true });
      await sharp(src)
        .resize({ width: Math.min(w, original), withoutEnlargement: true })
        .webp({ quality: w <= 128 ? 80 : 72, effort: 4 })
        .toFile(out);
      made++;
    }
  }
}

// 1200×630 image for Open Graph / WhatsApp / social previews.
const og = join(OUT, "og-image.jpg");
const hero = join(ROOT, "images/hero.jpg");
if (!fresh(og, hero)) {
  mkdirSync(OUT, { recursive: true });
  await sharp(hero).resize(1200, 630, { fit: "cover", position: "centre" }).jpeg({ quality: 80, mozjpeg: true }).toFile(og);
  made++;
}

console.log(`optimize-images: ${made} file(s) written to ${relative(process.cwd(), OUT)}`);

/**
 * ============================================================================
 *  IMAGE OPTIMIZER — run after adding new photos to public/images/
 * ----------------------------------------------------------------------------
 *    node scripts/optimize-images.mjs
 *
 *  Compresses every JPG in public/images with mozjpeg (quality 72, metadata
 *  stripped) and caps width at 2400px. Same filenames, in place — nothing
 *  else to change. Keeping real files in the repo means images load directly
 *  on any host (Vercel, Netlify, cPanel) with no server-side optimizer.
 * ============================================================================
 */

import { readdir, stat, rename } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const DIR = "public/images";
const files = (await readdir(DIR)).filter((f) => /\.jpe?g$/i.test(f));

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const path = join(DIR, file);
  const tmp = path + ".tmp";
  const before = (await stat(path)).size;

  await sharp(path)
    .rotate() // respect EXIF orientation
    .resize({ width: 2400, withoutEnlargement: true })
    .jpeg({ quality: 72, mozjpeg: true, progressive: true })
    .toFile(tmp);
  await rename(tmp, path);

  const after = (await stat(path)).size;
  totalBefore += before;
  totalAfter += after;
  console.log(
    `${file.padEnd(18)} ${(before / 1024).toFixed(0).padStart(4)} KB -> ${(after / 1024).toFixed(0).padStart(4)} KB`,
  );
}

console.log(
  `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)} MB -> ${(totalAfter / 1024 / 1024).toFixed(2)} MB  (${Math.round((1 - totalAfter / totalBefore) * 100)}% smaller)`,
);

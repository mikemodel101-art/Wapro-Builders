/**
 * ============================================================================
 *  IMAGE OPTIMIZER — run after adding new photos anywhere in the repo
 * ----------------------------------------------------------------------------
 *    node scripts/optimize-images.mjs
 *
 *  Compresses every JPG in  src/assets/images/  (site photos, imported via
 *  src/assets/images.ts) and  public/images/  (the og.jpg share card) with
 *  mozjpeg quality 72, strips metadata, and caps width at 2400px.
 *  Same filenames, in place — nothing else to change.
 * ============================================================================
 */

import { readdir, stat, rename } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const DIRS = ["src/assets/images", "public/images"];

let totalBefore = 0;
let totalAfter = 0;

for (const dir of DIRS) {
  let files = [];
  try {
    files = (await readdir(dir)).filter((f) => /\.jpe?g$/i.test(f));
  } catch {
    continue;
  }

  for (const file of files) {
    const path = join(dir, file);
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
      `${dir}/${file}`.padEnd(38) +
        `${(before / 1024).toFixed(0).padStart(4)} KB -> ${(after / 1024).toFixed(0).padStart(4)} KB`,
    );
  }
}

console.log(
  `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)} MB -> ${(totalAfter / 1024 / 1024).toFixed(2)} MB  (${Math.round((1 - totalAfter / totalBefore) * 100)}% smaller)`,
);

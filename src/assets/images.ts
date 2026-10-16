/**
 * ============================================================================
 *  PHOTO ASSETS — single import point for every photo on the site.
 * ----------------------------------------------------------------------------
 *  Photos live in  src/assets/images/  and are imported here as ES modules.
 *  Because they go through the module graph, the build (Vercel or anywhere
 *  else) bundles and fingerprints them automatically — images can never be
 *  "missing" from a deployment again.
 *
 *  SOURCE / LICENSE: these are stock photos from Pexels (pexels.com) —
 *  a free, open stock-photo license; commercial use allowed, no attribution
 *  required. Replace them with real job photos any time:
 *    1. Drop your photo into  src/assets/images/  (JPG, ~1600px wide).
 *    2. Import it below and add a key.
 *    3. Reference the key anywhere the site shows photos
 *       (projects.ts, services.ts, or a page).
 *    4. Run  node scripts/optimize-images.mjs  first to compress it
 *       (the script also covers this folder now).
 *
 *  The one exception is public/images/og.jpg — the social-share card, which
 *  needs a stable public URL for OG tags and LocalBusiness schema.
 * ============================================================================
 */

import hero from "./hero.jpg";
import kitchen1 from "./kitchen-1.jpg";
import kitchen2 from "./kitchen-2.jpg";
import kitchen3 from "./kitchen-3.jpg";
import kitchen4 from "./kitchen-4.jpg";
import kitchen5 from "./kitchen-5.jpg";
import bath1 from "./bath-1.jpg";
import bath2 from "./bath-2.jpg";
import bath3 from "./bath-3.jpg";
import bath4 from "./bath-4.jpg";
import bath5 from "./bath-5.jpg";
import bath6 from "./bath-6.jpg";
import floor1 from "./floor-1.jpg";
import floor2 from "./floor-2.jpg";
import craft1 from "./craft-1.jpg";
import craft2 from "./craft-2.jpg";
import handy1 from "./handy-1.jpg";
import handy2 from "./handy-2.jpg";

export const assets = {
  hero,
  kitchen1,
  kitchen2,
  kitchen3,
  kitchen4,
  kitchen5,
  bath1,
  bath2,
  bath3,
  bath4,
  bath5,
  bath6,
  floor1,
  floor2,
  craft1,
  craft2,
  handy1,
  handy2,
} as const;

export type AssetKey = keyof typeof assets;

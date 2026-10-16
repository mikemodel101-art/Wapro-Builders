import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Photos are pre-compressed static files in public/images/ (see
    // scripts/optimize-images.mjs). Serving them directly — instead of via
    // the /_next/image optimization proxy — means they load reliably on ANY
    // host (Vercel, Netlify, a plain VPS) with zero server-side image
    // processing. Files are already resized (≤2400px) and mozjpeg-compressed.
    unoptimized: true,
  },
};

export default nextConfig;

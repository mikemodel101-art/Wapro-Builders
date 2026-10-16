import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats — all photos are local (public/images) and get
    // resized + converted on demand by next/image.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

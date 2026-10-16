import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * XML sitemap — served at /sitemap.xml and referenced in robots.txt.
 * After launch, submit it once in Google Search Console:
 * https://search.google.com/search-console
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { path: "/", priority: 1, changeFrequency: "monthly" },
    { path: "/tile-installation", priority: 0.9, changeFrequency: "monthly" },
    { path: "/bathroom-handyman", priority: 0.9, changeFrequency: "monthly" },
    { path: "/gallery", priority: 0.7, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  ];

  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}

import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * robots.txt — explicitly welcomes Google, Bing, and the major AI search
 * crawlers (OpenAI OAI-SearchBot/ChatGPT, Claude, Perplexity) so the site can
 * appear in both classic search results and AI-generated answers.
 * /api/ stays disallowed for everyone.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "GPTBot",
          "ClaudeBot",
          "PerplexityBot",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}

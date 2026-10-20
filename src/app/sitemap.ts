import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ["", 1],
    ["/apply", 0.9],
    ["/rules", 0.8],
    ["/sponsors", 0.8],
    ["/privacy", 0.5],
  ].map(([path, priority]) => ({ url: `${site.url}${path}`, changeFrequency: "weekly" as const, priority: priority as number }));
}

import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/lib/project-pages";

const siteUrl = "https://viswanth.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work", "/about", "/frames", "/contact"];
  const staticEntries = staticRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const projectEntries = getAllProjectSlugs().map((slug) => ({
    url: `${siteUrl}/project/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...projectEntries];
}

import { MetadataRoute } from "next";
import { blogRoutes } from "@/lib/blog-data";
import { indexableRoutes } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [...indexableRoutes, ...blogRoutes].map((route) => ({ url: absoluteUrl(route) }));
}

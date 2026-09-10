import { MetadataRoute } from "next";
import { routes } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `https://shamarpdv.com.br${route}`, lastModified: new Date(), changeFrequency: route === "/" ? "weekly" : "monthly", priority: route === "/" ? 1 : 0.7 }));
}

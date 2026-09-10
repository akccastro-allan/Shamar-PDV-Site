import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url, siteName: "Shamar PDV", locale: "pt_BR", type: "website" }
  };
}

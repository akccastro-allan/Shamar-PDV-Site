import type { Metadata } from "next";

const base = "https://shamarpdv.com.br";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${base}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url, siteName: "Shamar PDV", locale: "pt_BR", type: "website" }
  };
}

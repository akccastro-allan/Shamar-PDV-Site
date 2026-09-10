import type { Metadata } from "next";
import "@/styles/globals.css";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shamar PDV | PDV simples, completo e leve para vender todos os dias",
    template: "%s | Shamar PDV"
  },
  description: "Shamar PDV ajuda lojas a vender com rapidez, controlar produtos, estoque, clientes, caixa, backup e operacao local com seguranca.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Shamar PDV",
    description: "Simples para o usuario. Completo por baixo. Leve na operacao. Seguro por padrao.",
    url: siteUrl,
    siteName: "Shamar PDV",
    locale: "pt_BR",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

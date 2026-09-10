import Link from "next/link";
import Script from "next/script";
import { absoluteUrl } from "@/lib/site-url";

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Caminho da pagina">
      {items.map((item, index) => (
        <span key={item.href}>
          {index > 0 ? <span aria-hidden="true">/</span> : null}
          <Link href={item.href}>{item.name}</Link>
        </span>
      ))}
    </nav>
  );
}

export function FaqSection({ items }: { items: FaqItem[] }) {
  return (
    <section className="section">
      <p className="eyebrow">Duvidas comuns</p>
      <div className="grid cols2">
        {items.map((item) => (
          <article className="card" key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function JsonLd({ id, data }: { id: string; data: Record<string, unknown> }) {
  return <Script id={id} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href)
    }))
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Shamar PDV",
    url: absoluteUrl("/"),
    contactPoint: [{ "@type": "ContactPoint", contactType: "sales", email: "comercial@shamarpdv.com.br", availableLanguage: "Portuguese" }]
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Shamar PDV",
    url: absoluteUrl("/"),
    inLanguage: "pt-BR"
  };
}

export function softwareJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Shamar PDV",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows",
    description: "Sistema PDV para venda, caixa, produtos, estoque, clientes, compras, precos, backup e operacao local resiliente."
  };
}

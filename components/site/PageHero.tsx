import Link from "next/link";

export function PageHero({ eyebrow, title, text, ctaHref = "/contato", cta = "Quero conhecer" }: { eyebrow: string; title: string; text: string; ctaHref?: string; cta?: string }) {
  return <section className="pageHero"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{text}</p><div className="actions"><Link className="button primary" href={ctaHref}>{cta}</Link><Link className="button secondary" href="/demonstracao">Agendar demonstracao</Link></div></section>;
}

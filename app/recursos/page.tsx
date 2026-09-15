import Link from "next/link";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs, JsonLd, breadcrumbJsonLd } from "@/components/site/Seo";
import { capabilityGroups } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Recursos do Shamar PDV para venda, caixa, estoque e backup", "Recursos do Shamar PDV agrupados por necessidade da loja: venda, caixa, produtos, estoque, clientes, compras, preços, periféricos e backup.", "/recursos");

const crumbs = [{ name: "Início", href: "/" }, { name: "Recursos", href: "/recursos" }];

export default function RecursosPage(){return <main><JsonLd id="breadcrumb-recursos" data={breadcrumbJsonLd(crumbs)} /><PageHero eyebrow="Recursos" title="Completo por baixo, simples para quem opera." text="Capacidades agrupadas por necessidade do comércio, não por termos de arquitetura." cta="Quero conhecer" ctaHref="/contato?origem=recursos"/><section className="section compactTop"><Breadcrumbs items={crumbs} /><p className="lead intentText">Um resumo útil para buscas por controle de estoque, PDV offline, PDV com balança, tabelas de preço, migração e operação segura.</p></section><section className="section grid cols3">{capabilityGroups.map((g)=><article className="card" key={g.title}><h3>{g.title}</h3><p>{g.text}</p><ul>{g.items.map((i)=><li key={i}>{i}</li>)}</ul></article>)}</section><section className="section split"><div><p className="eyebrow">Leitura por necessidade</p><h2>Comece pelo fluxo que mais pesa hoje.</h2><p className="lead">Se a dor é fila, comece por venda e caixa. Se é troca de sistema, veja migração. Se é hardware, veja compatibilidade.</p></div><div className="card"><h3>Páginas relacionadas</h3><div className="routeLinks"><Link className="button secondary" href="/produto">Produto</Link><Link className="button secondary" href="/migracao">Migração</Link><Link className="button secondary" href="/compatibilidade">Compatibilidade</Link></div></div></section><CTA source="recursos" /></main>}

import Link from "next/link";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs, JsonLd, breadcrumbJsonLd } from "@/components/site/Seo";
import { capabilityGroups } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Recursos do Shamar PDV para venda, caixa, estoque e backup", "Recursos do Shamar PDV agrupados por necessidade da loja: venda, caixa, produtos, estoque, clientes, compras, precos, perifericos e backup.", "/recursos");

const crumbs = [{ name: "Inicio", href: "/" }, { name: "Recursos", href: "/recursos" }];

export default function RecursosPage(){return <main><JsonLd id="breadcrumb-recursos" data={breadcrumbJsonLd(crumbs)} /><PageHero eyebrow="Recursos" title="Completo por baixo, simples para quem opera." text="Capacidades agrupadas por necessidade do comercio, nao por termos de arquitetura."/><section className="section compactTop"><Breadcrumbs items={crumbs} /><p className="lead intentText">Um resumo util para buscas por controle de estoque, PDV offline, PDV com balanca, tabelas de preco, migracao e operacao segura.</p></section><section className="section grid cols3">{capabilityGroups.map((g)=><article className="card" key={g.title}><h3>{g.title}</h3><p>{g.text}</p><ul>{g.items.map((i)=><li key={i}>{i}</li>)}</ul></article>)}</section><section className="section split"><div><p className="eyebrow">Leitura por necessidade</p><h2>Comece pelo fluxo que mais pesa hoje.</h2><p className="lead">Se a dor e fila, comece por venda e caixa. Se e troca de sistema, veja migracao. Se e hardware, veja compatibilidade.</p></div><div className="card"><h3>Paginas relacionadas</h3><div className="routeLinks"><Link className="button secondary" href="/produto">Produto</Link><Link className="button secondary" href="/migracao">Migracao</Link><Link className="button secondary" href="/compatibilidade">Compatibilidade</Link></div></div></section><CTA source="recursos" /></main>}

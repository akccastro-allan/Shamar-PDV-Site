import Link from "next/link";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs, JsonLd, breadcrumbJsonLd } from "@/components/site/Seo";
import { segments } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("PDV por segmento: mercado, hortifruti, autopecas e varejo", "Veja como o Shamar PDV atende mercado, hortifruti, autopecas, material de construcao, varejo e atacarejo com operacao simples.", "/segmentos");

const crumbs = [{ name: "Inicio", href: "/" }, { name: "Segmentos", href: "/segmentos" }];

export default function SegmentosPage(){return <main><JsonLd id="breadcrumb-segmentos" data={breadcrumbJsonLd(crumbs)} /><PageHero eyebrow="Segmentos" title="A mesma base de PDV adaptada ao jeito de cada loja." text="Mercado, hortifruti, autopecas, material de construcao, varejo e atacarejo com linguagem direta."/><section className="section compactTop"><Breadcrumbs items={crumbs} /><p className="lead intentText">Escolha o contexto mais proximo da sua operacao: sistema PDV para mercado, PDV para hortifruti, sistema para autopecas, material de construcao, varejo ou atacado e varejo.</p></section><section className="section grid cols3">{segments.map((s)=><Link className="card" href={s.href} key={s.href}><h3>{s.title}</h3><p>{s.text}</p></Link>)}</section><CTA source="segmentos" /></main>}

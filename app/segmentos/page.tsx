import Link from "next/link";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { segments } from "@/lib/site-data";
export default function SegmentosPage(){return <main><PageHero eyebrow="Segmentos" title="A mesma base de PDV adaptada ao jeito de cada loja." text="Mercado, hortifruti, autopecas, material de construcao, varejo e atacarejo com linguagem direta."/><section className="section grid cols3">{segments.map((s)=><Link className="card" href={s.href} key={s.href}><h3>{s.title}</h3><p>{s.text}</p></Link>)}</section><CTA /></main>}

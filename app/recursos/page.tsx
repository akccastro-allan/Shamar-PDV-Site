import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { capabilityGroups } from "@/lib/site-data";
export default function RecursosPage(){return <main><PageHero eyebrow="Recursos" title="Completo por baixo, simples para quem opera." text="Capacidades agrupadas por necessidade do comercio, nao por termos de arquitetura."/><section className="section grid cols3">{capabilityGroups.map((g)=><div className="card" key={g.title}><h3>{g.title}</h3><p>{g.text}</p><ul>{g.items.map((i)=><li key={i}>{i}</li>)}</ul></div>)}</section><CTA /></main>}

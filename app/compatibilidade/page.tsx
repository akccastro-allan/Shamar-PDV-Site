import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { compatibility } from "@/lib/site-data";
export default function CompatibilidadePage(){return <main><PageHero eyebrow="Compatibilidade" title="Estados claros: Homologado, Software Ready ou Em validacao." text="Sem transformar preparacao de software em promessa de hardware homologado."/><section className="section grid cols3">{compatibility.map((c)=><div className="card" key={c.name}><span className={`status ${c.state === "Homologado" ? "ok" : c.state === "Software Ready" ? "ready" : "validation"}`}>{c.state}</span><h3>{c.name}</h3><p>{c.detail}</p></div>)}</section><CTA /></main>}

import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { compatibility } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Compatibilidade", "Estados honestos de compatibilidade do Shamar PDV para leitor, impressora, gaveta, balanca, display e PinPad.", "/compatibilidade");

export default function CompatibilidadePage(){return <main><PageHero eyebrow="Compatibilidade" title="Compatibilidade com estado claro, sem promessa falsa." text="Cada item aparece como Homologado, Smoke fisico aprovado, Software Ready, Em validacao ou Nao testado. Hardware especifico so vira homologado depois de prova fisica."/><section className="section grid cols3">{compatibility.map((c)=><div className="card" key={c.name}><span className={`status ${c.state === "Homologado" || c.state === "Smoke fisico aprovado" ? "ok" : c.state === "Software Ready" ? "ready" : "validation"}`}>{c.state}</span><h3>{c.name}</h3><p>{c.detail}</p></div>)}</section><CTA source="compatibilidade" /></main>}

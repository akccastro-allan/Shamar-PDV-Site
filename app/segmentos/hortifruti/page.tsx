import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Hortifruti", "Shamar PDV para hortifruti com KG, etiqueta de balanca, favoritos e operacao simples.", "/segmentos/hortifruti");
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";

export default function SegmentPage(){return <main><PageHero eyebrow="Segmentos" title="Shamar PDV para Hortifruti." text="Produtos por KG, etiquetas de balanca, favoritos e operacao simples para itens de alto giro."/><section className="section grid cols3"><div className="card"><h3>KG decimal</h3><p>Fluxo simples para o operador e controle seguro para a gestao.</p></div><div className="card"><h3>Etiqueta pesada por codigo de barras</h3><p>Fluxo simples para o operador e controle seguro para a gestao.</p></div><div className="card"><h3>Favoritos para produtos frequentes</h3><p>Fluxo simples para o operador e controle seguro para a gestao.</p></div></section><CTA /></main>}


import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Atacarejo", "Shamar PDV para atacarejo com tabelas de preco, embalagens e operacao local.", "/segmentos/atacarejo");
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";

export default function SegmentPage(){return <main><PageHero eyebrow="Segmentos" title="Shamar PDV para Atacarejo." text="Tabelas de preco, embalagens e operacao local para vender no varejo e no volume."/><section className="section grid cols3"><div className="card"><h3>Varejo, Atacado e Parceiro</h3><p>Fluxo simples para o operador e controle seguro para a gestao.</p></div><div className="card"><h3>CX, PCT e FARDO</h3><p>Fluxo simples para o operador e controle seguro para a gestao.</p></div><div className="card"><h3>Revisao de preco por custo</h3><p>Fluxo simples para o operador e controle seguro para a gestao.</p></div></section><CTA /></main>}


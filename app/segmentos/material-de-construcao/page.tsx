import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Material de construcao", "Shamar PDV para material de construcao com caixas, pacotes, fardos e historico.", "/segmentos/material-de-construcao");
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";

export default function SegmentPage(){return <main><PageHero eyebrow="Segmentos" title="Shamar PDV para Material de construcao." text="Venda por unidade, pacote, caixa e fardo sem duplicar o produto base."/><section className="section grid cols3"><div className="card"><h3>Apresentacoes comerciais</h3><p>Fluxo simples para o operador e controle seguro para a gestao.</p></div><div className="card"><h3>Codigos multiplos</h3><p>Fluxo simples para o operador e controle seguro para a gestao.</p></div><div className="card"><h3>Historico preservado</h3><p>Fluxo simples para o operador e controle seguro para a gestao.</p></div></section><CTA /></main>}


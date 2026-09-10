import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Autopecas", "Shamar PDV para autopecas com busca, cliente, orcamento, vendedor e estoque.", "/segmentos/autopecas");
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";

export default function SegmentPage(){return <main><PageHero eyebrow="Segmentos" title="Shamar PDV para Autopecas." text="Atendimento de balcão com busca por nome, codigo, cliente, orcamento e historico."/><section className="section grid cols3"><div className="card"><h3>Busca por nome ou codigo</h3><p>Fluxo simples para o operador e controle seguro para a gestao.</p></div><div className="card"><h3>Cliente e vendedor opcionais</h3><p>Fluxo simples para o operador e controle seguro para a gestao.</p></div><div className="card"><h3>Orcamento convertido em venda</h3><p>Fluxo simples para o operador e controle seguro para a gestao.</p></div></section><CTA /></main>}


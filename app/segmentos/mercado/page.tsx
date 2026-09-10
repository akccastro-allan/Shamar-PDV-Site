import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Mercado", "Shamar PDV para mercado com caixa rapido, produtos por codigo, estoque e resumo do dia.", "/segmentos/mercado");
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";

export default function SegmentPage(){return <main><PageHero eyebrow="Segmentos" title="Shamar PDV para Mercado." text="Venda rapida no caixa, busca por codigo, controle de estoque e resumo do dia para a rotina do mercado."/><section className="section grid cols3"><div className="card"><h3>Leitura rapida de produtos</h3><p>Fluxo simples para o operador e controle seguro para a gestao.</p></div><div className="card"><h3>Pix, dinheiro e cartao manual configuravel</h3><p>Fluxo simples para o operador e controle seguro para a gestao.</p></div><div className="card"><h3>Estoque baixo e compras</h3><p>Fluxo simples para o operador e controle seguro para a gestao.</p></div></section><CTA /></main>}


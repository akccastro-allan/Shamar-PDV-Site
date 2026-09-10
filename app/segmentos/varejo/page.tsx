import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Varejo", "Shamar PDV para varejo com venda, caixa, produtos, compras, clientes e backup.", "/segmentos/varejo");
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";

export default function SegmentPage(){return <main><PageHero eyebrow="Segmentos" title="Shamar PDV para Varejo." text="Operacao diaria para loja que precisa vender, controlar caixa, produtos, compras e clientes."/><section className="section grid cols3"><div className="card"><h3>Checkout direto</h3><p>Fluxo simples para o operador e controle seguro para a gestao.</p></div><div className="card"><h3>Resumo do dia</h3><p>Fluxo simples para o operador e controle seguro para a gestao.</p></div><div className="card"><h3>Backup protegido</h3><p>Fluxo simples para o operador e controle seguro para a gestao.</p></div></section><CTA /></main>}


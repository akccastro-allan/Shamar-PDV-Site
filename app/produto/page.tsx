import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";

export default function ProductPage(){return <main><PageHero eyebrow="Produto" title="Um PDV para vender agora e organizar a rotina por tras do caixa." text="Venda, caixa, produtos, estoque, clientes, compras, precos, backup e historico em uma experiencia simples para operador e gerente."/><section className="section grid cols3">{["Checkout rapido","Estoque confiavel","Preco autoritativo","Backup protegido","Historico e reimpressao","Operacao local"].map((x)=><div className="card" key={x}><h3>{x}</h3><p>Recurso pensado para uso diario, com linguagem de loja e sem expor complexidade tecnica.</p></div>)}</section><CTA /></main>}

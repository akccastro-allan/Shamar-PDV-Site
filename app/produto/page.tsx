import Link from "next/link";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs, JsonLd, breadcrumbJsonLd } from "@/components/site/Seo";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Sistema PDV para loja, estoque, caixa e operação local", "Conheça o Shamar PDV para vender rápido, controlar estoque, clientes, preços, compras, caixa, backup e histórico com linguagem simples.", "/produto");

const crumbs = [{ name: "Início", href: "/" }, { name: "Produto", href: "/produto" }];

const productCapabilities = [
  { title: "Checkout rápido", text: "Scanner, busca por código ou nome, quantidade UN/KG, F9 para consulta produto/preço, PageUp para pagamento e F12 para mais opções." },
  { title: "Cadastro de produto completo", text: "Cadastre o item uma vez e mantenha código interno, EAN/GTIN, marca, fabricante, categoria, NCM, CEST, origem, aplicações, fornecedores e equivalências quando disponíveis." },
  { title: "Produtos e estoque", text: "Cadastro comercial, embalagens, códigos múltiplos, estoque baixo, compras e inventário preservando a autoridade de estoque." },
  { title: "Preços e tabelas", text: "Varejo, Atacado, Parceiro, promoções com validade e revisão por custo sem reescrever vendas antigas." },
  { title: "Clientes e crediário", text: "Cliente opcional, histórico e rotinas simples de a receber quando habilitadas no PDV." },
  { title: "Backup protegido", text: "Proteção automática, verificação de backup e restauração validada como parte da rotina operacional." }
];

export default function ProductPage(){
  return <main>
    <JsonLd id="breadcrumb-produto" data={breadcrumbJsonLd(crumbs)} />
    <PageHero eyebrow="Produto" title="Um sistema PDV para vender agora e organizar a rotina por trás do caixa." text="Venda, caixa, produtos, estoque, clientes, compras, preços, backup e histórico em uma experiência simples para operador e gerente." cta="Quero conhecer" ctaHref="/contato?origem=produto"/>
    <section className="section compactTop"><Breadcrumbs items={crumbs} /><p className="lead intentText">Para quem procura sistema PDV para loja, PDV offline, controle de estoque, PDV com balança, atacado e varejo ou migração segura de sistema.</p></section>
    <section className="section grid cols3">{productCapabilities.map((item)=><article className="card" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</section>
    <section className="section split"><div><p className="eyebrow">Produto Master</p><h2>Mais informação do produto, sem virar fiscal ou ERP dentro do caixa.</h2><p className="lead">Dados como NCM, CEST e origem ajudam a manter o cadastro organizado, mas a emissão fiscal completa continua respeitando a autoridade ERP/fiscal.</p></div><div className="card"><h3>Continue</h3><div className="routeLinks"><Link className="button secondary" href="/segmentos/autopecas">PDV para autopeças</Link><Link className="button secondary" href="/recursos">Ver recursos</Link><Link className="button secondary" href="/precos">Planos e preços</Link></div></div></section>
    <CTA label="Quero conhecer o Shamar PDV" source="produto" />
  </main>
}

import Link from "next/link";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs, JsonLd, breadcrumbJsonLd } from "@/components/site/Seo";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Sistema PDV para loja, estoque, caixa e operacao local", "Conheca o Shamar PDV para vender rapido, controlar estoque, clientes, precos, compras, caixa, backup e historico com linguagem simples.", "/produto");

const crumbs = [{ name: "Inicio", href: "/" }, { name: "Produto", href: "/produto" }];

const productCapabilities = [
  { title: "Checkout rapido", text: "Scanner, busca por codigo ou nome, quantidade UN/KG e F9 para receber sem dialogos desnecessarios." },
  { title: "Produtos e estoque", text: "Cadastro comercial, embalagens, codigos multiplos, estoque baixo, compras e inventario preservando autoridade de estoque." },
  { title: "Precos e tabelas", text: "Varejo, Atacado, Parceiro, promocoes com validade e revisao por custo sem reescrever vendas antigas." },
  { title: "Clientes e crediario", text: "Cliente opcional, historico e rotinas simples de a receber quando habilitadas no PDV." },
  { title: "Backup protegido", text: "Protecao automatica, verificacao de backup e restauracao validada como parte da rotina operacional." },
  { title: "Operacao local", text: "O Single continua operando localmente; integracoes externas podem ficar pendentes sem virar sucesso falso." }
];

export default function ProductPage(){
  return <main>
    <JsonLd id="breadcrumb-produto" data={breadcrumbJsonLd(crumbs)} />
    <PageHero eyebrow="Produto" title="Um sistema PDV para vender agora e organizar a rotina por tras do caixa." text="Venda, caixa, produtos, estoque, clientes, compras, precos, backup e historico em uma experiencia simples para operador e gerente."/>
    <section className="section compactTop"><Breadcrumbs items={crumbs} /><p className="lead intentText">Para quem procura sistema PDV para loja, PDV offline, controle de estoque, PDV com balanca, atacado e varejo ou migracao segura de sistema.</p></section>
    <section className="section grid cols3">{productCapabilities.map((item)=><article className="card" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</section>
    <section className="section split"><div><p className="eyebrow">Caminho de compra</p><h2>Veja o produto pelo problema da sua loja.</h2><p className="lead">Mercado, hortifruti, autopecas, material de construcao, varejo e atacarejo usam a mesma base com operacao adequada ao contexto.</p></div><div className="card"><h3>Continue</h3><div className="routeLinks"><Link className="button secondary" href="/recursos">Ver recursos</Link><Link className="button secondary" href="/segmentos">Ver segmentos</Link><Link className="button secondary" href="/precos">Ver caminhos comerciais</Link></div></div></section>
    <CTA source="produto" />
  </main>
}

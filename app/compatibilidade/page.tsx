import Link from "next/link";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs, FaqSection, JsonLd, breadcrumbJsonLd, faqJsonLd } from "@/components/site/Seo";
import { compatibility } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Compatibilidade de PDV, balanca e perifericos", "Compatibilidade do Shamar PDV para leitor, impressora, gaveta, balanca, display do cliente e PinPad com estados honestos.", "/compatibilidade");

const crumbs = [{ name: "Inicio", href: "/" }, { name: "Compatibilidade", href: "/compatibilidade" }];
const faqs = [
  { question: "Software Ready significa homologado?", answer: "Nao. Software Ready indica que a base de software esta preparada, mas homologacao fisica exige teste real do equipamento." },
  { question: "O PDV funciona com leitor comum?", answer: "O fluxo de leitor por teclado/USB comum foi preservado. O piloto deve testar os modelos fisicos da loja." },
  { question: "Preciso escolher periferico durante a venda?", answer: "Nao. Configuracao e diagnostico ficam em gestao; o caixa segue vendendo com linguagem operacional." }
];

export default function CompatibilidadePage(){return <main><JsonLd id="breadcrumb-compatibilidade" data={breadcrumbJsonLd(crumbs)} /><JsonLd id="faq-compatibilidade" data={faqJsonLd(faqs)} /><PageHero eyebrow="Compatibilidade" title="Compatibilidade clara para reduzir incerteza de hardware." text="A pagina separa o que esta homologado, o que esta pronto em software e o que ainda precisa de validacao. Assim a loja sabe o que testar antes do piloto."/><section className="section compactTop"><Breadcrumbs items={crumbs} /><p className="lead intentText">Para quem procura PDV com balanca, leitor, impressora, gaveta, tela do cliente ou PinPad sem promessa falsa de homologacao.</p></section><section className="section grid cols3">{compatibility.map((c)=><article className="card" key={c.name}><span className={`status ${c.state === "Homologado" || c.state === "Smoke fisico aprovado" ? "ok" : c.state === "Software Ready" ? "ready" : "validation"}`}>{c.state}</span><h3>{c.name}</h3><p>{c.detail}</p></article>)}</section><section className="section split"><div><p className="eyebrow">Como usar esta pagina</p><h2>Hardware vira gate do piloto, nao promessa de vitrine.</h2><p className="lead">Se uma loja depende de um modelo especifico, esse equipamento entra no checklist de validacao antes da operacao assistida.</p></div><div className="card"><h3>Paginas relacionadas</h3><div className="routeLinks"><Link className="button secondary" href="/segmentos/hortifruti">PDV com balanca</Link><Link className="button secondary" href="/migracao">Migracao</Link><Link className="button secondary" href="/contato?origem=compatibilidade">Falar com vendas</Link></div></div></section><FaqSection items={faqs} /><CTA source="compatibilidade" /></main>}

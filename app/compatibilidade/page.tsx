import Link from "next/link";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs, FaqSection, JsonLd, breadcrumbJsonLd, faqJsonLd } from "@/components/site/Seo";
import { compatibility } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Compatibilidade de PDV, balança e periféricos", "Compatibilidade do Shamar PDV para leitor, impressora, gaveta, balança, display do cliente e PinPad com estados honestos.", "/compatibilidade");

const crumbs = [{ name: "Início", href: "/" }, { name: "Compatibilidade", href: "/compatibilidade" }];
const faqs = [
  { question: "Software Ready significa homologado?", answer: "Não. Software Ready indica que a base de software está preparada, mas homologação física exige teste real do equipamento." },
  { question: "O PDV funciona com leitor comum?", answer: "O fluxo de leitor por teclado/USB comum foi preservado. O piloto deve testar os modelos físicos da loja." },
  { question: "Impressora detectada já é smoke físico aprovado?", answer: "Não. Detecção de impressora ajuda no diagnóstico, mas impressão real, corte e reimpressão precisam de validação no ambiente do cliente." },
  { question: "Preciso escolher periférico durante a venda?", answer: "Não. Configuração e diagnóstico ficam em gestão; o caixa segue vendendo com linguagem operacional." }
];

export default function CompatibilidadePage(){return <main><JsonLd id="breadcrumb-compatibilidade" data={breadcrumbJsonLd(crumbs)} /><JsonLd id="faq-compatibilidade" data={faqJsonLd(faqs)} /><PageHero eyebrow="Compatibilidade" title="Compatibilidade clara para reduzir incerteza de hardware." text="A página separa o que está homologado, o que está pronto em software e o que ainda precisa de validação. Assim a loja sabe o que testar antes do piloto." cta="Validar meus equipamentos" ctaHref="/contato?origem=compatibilidade"/><section className="section compactTop"><Breadcrumbs items={crumbs} /><p className="lead intentText">Para quem procura PDV com balança, leitor, impressora, gaveta, tela do cliente ou PinPad sem promessa falsa de homologação.</p></section><section className="section grid cols3">{compatibility.map((c)=><article className="card" key={c.name}><span className={`status ${c.state === "Homologado" || c.state === "Smoke físico aprovado" ? "ok" : c.state === "Software Ready" ? "ready" : "validation"}`}>{c.state}</span><h3>{c.name}</h3><p>{c.detail}</p></article>)}</section><section className="section split"><div><p className="eyebrow">Como usar esta página</p><h2>Hardware vira gate do piloto, não promessa de vitrine.</h2><p className="lead">Se uma loja depende de um modelo específico, esse equipamento entra no checklist de validação antes da operação assistida.</p></div><div className="card"><h3>Páginas relacionadas</h3><div className="routeLinks"><Link className="button secondary" href="/segmentos/hortifruti?origem=compatibilidade">PDV com balança</Link><Link className="button secondary" href="/migracao?origem=compatibilidade">Migração</Link><Link className="button secondary" href="/contato?origem=compatibilidade">Falar com vendas</Link></div></div></section><FaqSection items={faqs} /><CTA source="compatibilidade" /></main>}

import Link from "next/link";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs, FaqSection, JsonLd, breadcrumbJsonLd, faqJsonLd } from "@/components/site/Seo";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Migracao de sistema PDV", "Troque de sistema PDV sem comecar do zero, com migracao analisada para produtos, clientes, fornecedores, estoque e precos quando a origem permite.", "/migracao");

const crumbs = [{ name: "Inicio", href: "/" }, { name: "Migracao", href: "/migracao" }];
const faqs = [
  { question: "Posso migrar produtos e clientes do sistema antigo?", answer: "Sim, quando a origem tem dados confiaveis. A migracao preserva identidade externa ou documento quando isso e seguro." },
  { question: "O Shamar importa qualquer sistema automaticamente?", answer: "Nao. CSV, XML e adaptadores entram por pipeline controlado; origem ambigua vai para revisao em vez de chute." },
  { question: "Nome do cliente sozinho identifica cadastro?", answer: "Nao. Nome sozinho nao e usado como identidade automatica para evitar duplicidade e erro comercial." }
];

export default function MigracaoPage(){return <main><JsonLd id="breadcrumb-migracao" data={breadcrumbJsonLd(crumbs)} /><JsonLd id="faq-migracao" data={faqJsonLd(faqs)} /><PageHero eyebrow="Migracao" title="Troque de sistema PDV sem comecar do zero." text="A migracao reaproveita dados factuais, revisa o que estiver ambiguo e evita importacao cega. O objetivo e entrar em operacao com seguranca, nao prometer magica sobre qualquer legado."/><section className="section compactTop"><Breadcrumbs items={crumbs} /><p className="lead intentText">Ideal para quem procura migrar sistema PDV, trocar cadastro de produtos, preservar clientes e reduzir medo de parada na implantacao.</p></section><section className="section grid cols3"><div className="card"><h3>Produtos, codigos e estoque</h3><p>Produtos, unidades, codigos, precos e estoque podem ser migrados quando a origem fornece dados confiaveis e rastreaveis.</p></div><div className="card"><h3>Clientes e fornecedores</h3><p>Usamos identidade externa ou documento quando a origem permite. Dados incertos ficam visiveis para revisao.</p></div><div className="card"><h3>Pipeline controlado</h3><p>CSV, XML e adaptadores especificos passam por preparacao, validacao e relatorio, sem gravar dados duvidosos em silencio.</p></div></section><section className="section split"><div><p className="eyebrow">Proximo passo</p><h2>Antes de trocar, entendemos a origem.</h2><p className="lead">A conversa comercial identifica sistema atual, volume de cadastros, necessidade de estoque, perifericos e prazo de entrada.</p></div><div className="card"><h3>Paginas relacionadas</h3><div className="routeLinks"><Link className="button secondary" href="/compatibilidade">Compatibilidade</Link><Link className="button secondary" href="/precos">Planos</Link><Link className="button secondary" href="/segmentos">Segmentos</Link></div></div></section><FaqSection items={faqs} /><CTA label="Falar com vendas" source="migracao" /></main>}

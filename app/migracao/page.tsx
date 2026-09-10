import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Migracao de dados", "Troque de sistema sem comecar do zero com migracao analisada para produtos, clientes, fornecedores e dados comerciais.", "/migracao");

export default function MigracaoPage(){return <main><PageHero eyebrow="Migracao" title="Troque de sistema sem comecar do zero." text="Analisamos a origem e adaptamos a migracao quando necessario. O objetivo e reaproveitar o que for factual, revisar o que estiver ambiguo e evitar importacao cega."/><section className="section grid cols3"><div className="card"><h3>Produtos e estoque</h3><p>Produtos, unidades, codigos, precos e estoque podem ser migrados quando a origem fornece dados confiaveis.</p></div><div className="card"><h3>Clientes e fornecedores</h3><p>Usamos identidade externa/documento quando a origem permite. Nome sozinho nao vira identidade automatica.</p></div><div className="card"><h3>Caminhos comerciais</h3><p>CSV, XML e adaptadores especificos entram por pipeline controlado, sem prometer todo legado sem analise.</p></div></section><CTA source="migracao" /></main>}

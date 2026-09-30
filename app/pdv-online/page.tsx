import Link from "next/link";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs, FaqSection, JsonLd, breadcrumbJsonLd, faqJsonLd } from "@/components/site/Seo";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("PDV online em nuvem com Passport e acesso por loja", "Entenda o Shamar PDV Online: uma plataforma SaaS compartilhada, com acesso por Passport, seleção de loja e isolamento por escopo.", "/pdv-online");

const crumbs = [{ name: "Início", href: "/" }, { name: "PDV online", href: "/pdv-online" }];
const faqs = [
  { question: "O Shamar PDV Online é um deploy por cliente?", answer: "Não. A direção do produto é um mesmo deploy compartilhado para muitos clientes, com isolamento por cliente, empresa e loja." },
  { question: "O domínio da loja autoriza o acesso?", answer: "Não. O endereço ajuda a identificar o cliente esperado, mas a autoridade continua sendo Passport, vínculo do usuário, permissão e escopo de loja." },
  { question: "Vou ver códigos técnicos na tela?", answer: "Não deve ser a experiência normal. A loja deve aparecer como nome comercial e contexto operacional resolvido pelo servidor." },
  { question: "O PDV Online substitui o PDV local?", answer: "Ele prepara a frente web/cloud para cenários conectados. O PDV local/offline continua importante quando a operação da loja precisa independência de internet." }
];

export default function PdvOnlinePage() {
  return (
    <main>
      <JsonLd id="breadcrumb-pdv-online" data={breadcrumbJsonLd(crumbs)} />
      <JsonLd id="faq-pdv-online" data={faqJsonLd(faqs)} />
      <PageHero
        eyebrow="PDV online"
        title="PDV online para operar na nuvem sem criar um sistema por cliente."
        text="O Shamar PDV Online é preparado como uma plataforma SaaS compartilhada: acesso por Passport, isolamento por cliente e seleção de loja quando necessário, sem expor códigos técnicos ao operador."
        cta="Quero conhecer o PDV Online"
        ctaHref="/contato?origem=pdv-online"
      />
      <section className="section compactTop">
        <Breadcrumbs items={crumbs} />
        <p className="lead intentText">Para buscas como PDV online, sistema PDV online, sistema de caixa online e PDV em nuvem com acesso por loja.</p>
      </section>
      <section className="section grid cols3">
        <article className="card">
          <h3>Mesmo deploy para todos</h3>
          <p>A arquitetura comercial não exige um deploy por cliente. O produto usa um Cloud compartilhado com isolamento por cliente, empresa e filial.</p>
        </article>
        <article className="card">
          <h3>Passport como autoridade</h3>
          <p>Login, vínculo do usuário, entitlement e grant de escopo definem o que a pessoa pode acessar. Hostname sozinho não concede permissão.</p>
        </article>
        <article className="card">
          <h3>Loja resolvida pelo servidor</h3>
          <p>O operador não deve lidar com códigos internos. A seleção aparece como loja e contexto de trabalho.</p>
        </article>
      </section>
      <section className="section split">
        <div>
          <p className="eyebrow">Domínio e acesso</p>
          <h2>Subdomínio do cliente e domínio customizado são alias, não autoridade de negócio.</h2>
          <p className="lead">O caminho preparado é usar endereços como cliente.pdv.dominio-oficial e, depois, domínio customizado verificado. O endereço precisa combinar com o cliente esperado; divergência deve negar acesso em vez de mostrar dados de outra loja.</p>
        </div>
        <div className="card">
          <h3>Fluxo desejado</h3>
          <ul>
            <li>Cliente acessa seu endereço comercial.</li>
            <li>Passport autentica a pessoa.</li>
            <li>Permissões definem cliente, empresa e loja.</li>
            <li>A operação abre sem IDs técnicos.</li>
          </ul>
        </div>
      </section>
      <section className="section split">
        <div className="card">
          <h3>Online e local caminham juntos</h3>
          <p>O PDV online atende aquisição e operação conectada. O PDV offline/local continua sendo diferencial para lojas que precisam vender quando a internet ou integrações externas não ajudam.</p>
          <div className="routeLinks">
            <Link className="button secondary" href="/pdv-offline?origem=pdv-online">Ver PDV offline</Link>
            <Link className="button secondary" href="/produto?origem=pdv-online">Ver produto</Link>
            <Link className="button secondary" href="/recursos?origem=pdv-online">Ver recursos</Link>
          </div>
        </div>
        <div>
          <p className="eyebrow">Promessa honesta</p>
          <h2>A página prepara demanda sem fingir validação que ainda depende de prova operacional.</h2>
          <p className="lead">Recursos em nuvem, domínio customizado e operação web devem avançar junto com provas reais. Quando uma capacidade for validada, a comunicação comercial pode ficar mais direta.</p>
        </div>
      </section>
      <FaqSection items={faqs} />
      <CTA label="Falar sobre PDV online" source="pdv-online" />
    </main>
  );
}

import Link from "next/link";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs, FaqSection, JsonLd, breadcrumbJsonLd, faqJsonLd } from "@/components/site/Seo";
import { pageMetadata } from "@/lib/metadata";

type Segment = {
  slug: "mercado" | "hortifruti" | "autopecas" | "material-de-construcao" | "varejo" | "atacarejo";
  name: string;
  title: string;
  description: string;
  intent: string;
  pains: string[];
  capabilities: Array<{ title: string; text: string }>;
  links: Array<{ href: string; label: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

const objectionLinks = [
  { href: "/migracao", label: "Consigo migrar?" },
  { href: "/compatibilidade", label: "E meus equipamentos?" },
  { href: "/precos", label: "Como começo?" }
];

export const segmentPages: Record<Segment["slug"], Segment> = {
  mercado: {
    slug: "mercado",
    name: "Mercado",
    title: "Sistema PDV para mercado que precisa vender rápido no caixa.",
    description: "Shamar PDV para mercado com scanner, caixa rápido, estoque, produtos por código, pagamentos configuráveis e resumo do dia sem complicar a operação.",
    intent: "Para quem procura sistema PDV para mercado, PDV para loja de bairro, caixa de supermercado pequeno ou controle de estoque para mercearia.",
    pains: ["Fila no caixa quando o operador precisa clicar demais", "Produto sem código claro ou estoque desatualizado", "Dificuldade para separar dinheiro físico de Pix e cartão", "Troca de sistema com medo de perder cadastro"],
    capabilities: [
      { title: "Scanner, teclado e atalhos atuais", text: "A rotina principal continua simples: passar produto, consultar com F9 quando precisar, pagar com PageUp e seguir para a próxima venda." },
      { title: "Estoque e compras", text: "Produtos, compras, entrada por XML quando aplicável e alertas de estoque baixo ajudam a loja a repor sem virar ERP." },
      { title: "Caixa com separação por meio", text: "Dinheiro físico, Pix, cartão e voucher aparecem de forma operacional, sem inflar a gaveta." }
    ],
    links: [{ href: "/produto", label: "Ver produto" }, { href: "/migracao", label: "Migrar cadastro" }, { href: "/precos", label: "Ver caminhos comerciais" }],
    faqs: [
      { question: "O Shamar PDV funciona para mercado pequeno?", answer: "Sim. O foco é vender rápido, controlar produtos, estoque, caixa e histórico com linguagem simples para a loja." },
      { question: "Preciso de internet para toda venda?", answer: "A operação local suportada continua disponível. Integrações externas podem ficar pendentes ou pedir atenção." }
    ]
  },
  hortifruti: {
    slug: "hortifruti",
    name: "Hortifruti",
    title: "PDV para hortifruti com KG, favoritos e etiqueta de balança.",
    description: "Shamar PDV para hortifruti com venda por KG, etiqueta pesada, produtos favoritos, scanner e controle de estoque em linguagem de loja.",
    intent: "Para quem busca PDV para hortifruti, PDV com balança, venda por quilo ou sacolão com produtos de alto giro.",
    pains: ["Produtos por peso travando a venda", "Operador tendo que procurar banana, tomate e folhas toda hora", "Etiqueta de balança confundida com código normal", "Preço por KG mudando sem controle"],
    capabilities: [
      { title: "KG decimal", text: "Produtos pesáveis entram com quantidade decimal e preservam a autoridade de preço do PDV." },
      { title: "Etiqueta pesada", text: "Códigos de etiqueta de balança podem identificar produto e peso quando o perfil configurado suporta o formato." },
      { title: "Favoritos", text: "Produtos frequentes ficam em acesso rápido para não depender de código em itens de alto giro." }
    ],
    links: [{ href: "/compatibilidade", label: "Ver balança e leitor" }, { href: "/recursos", label: "Recursos para estoque" }, { href: "/contato?origem=hortifruti", label: "Falar sobre hortifruti" }],
    faqs: [
      { question: "O caixa escolhe perfil de balança a cada venda?", answer: "Não. A operação normal é escanear a etiqueta; a configuração fica fora da rotina do caixa." },
      { question: "Balança direta está homologada?", answer: "Não declaramos homologação sem teste físico. A página de compatibilidade separa Software Ready, Em validação e Homologado." }
    ]
  },
  autopecas: {
    slug: "autopecas",
    name: "Autopeças",
    title: "PDV para autopeças que ajuda o balcão a encontrar a peça e fechar a venda mais rápido.",
    description: "Sistema para autopeças com Product Master, busca por código, EAN/GTIN, referência, marca, fabricante, aplicação, cliente, orçamento, preço e estoque sem assumir funções fiscais de ERP.",
    intent: "Para quem busca sistema para autopeças, PDV para autopeças, sistema de estoque para autopeças, sistema para loja de peças ou programa para autopeças.",
    pains: ["Atendimento de balcão demora para achar a peça certa", "A mesma peça aparece por código interno, EAN, referência de fabricante ou fornecedor", "Cliente pede orçamento antes de fechar", "Preço e estoque precisam estar visíveis sem depender de memória do vendedor"],
    capabilities: [
      { title: "Encontrar a peça certa", text: "O cadastro pode preservar SKU, código interno, EAN/GTIN, marca, fabricante, categoria, aplicação e equivalências quando esses dados existem." },
      { title: "Product Master para autopeças", text: "NCM, CEST e origem entram como dados de classificação do produto, sem prometer que o PDV vira motor fiscal completo." },
      { title: "Referências e fornecedores", text: "Referência de fabricante, referência de fornecedor, perfil de pneu e equivalências ajudam a organizar o balcão e a migração." },
      { title: "Orçamento e venda", text: "Orçamentos comerciais podem ser preservados e convertidos em venda pelo fluxo aprovado, sem criar pagamento antecipado." },
      { title: "Cliente, vendedor e histórico", text: "A venda pode preservar cliente e vendedor quando informados, mantendo o caixa separado do vendedor." },
      { title: "Estoque e compras", text: "Entrada de compra, estoque e revisão de preço por custo ajudam a manter a operação comercial atualizada." }
    ],
    links: [{ href: "/produto", label: "Ver Product Master" }, { href: "/blog/cadastro-autopecas-codigos-referencias", label: "Organizar cadastro de autopeças" }, { href: "/migracao?origem=autopecas", label: "Migrar produtos" }, { href: "/compatibilidade?origem=autopecas", label: "Validar periféricos" }, { href: "/demonstracao?origem=autopecas", label: "Agendar demonstração" }],
    faqs: [
      { question: "Consigo buscar por referência, marca ou aplicação?", answer: "Sim, quando esses campos estão cadastrados ou migrados de forma segura, eles ajudam a localizar a peça sem criar outro produto." },
      { question: "NCM, CEST e origem significam emissão fiscal completa?", answer: "Não. Eles são dados de classificação do produto. A autoridade fiscal completa permanece separada no ERP/provedor fiscal." },
      { question: "O Shamar PDV substitui oficina ou ordem de serviço automotiva?", answer: "Não. O PDV cobre produto, venda, pagamento, estoque e caixa. Oficina, diagnóstico e serviço pertencem a outro domínio/produto." },
      { question: "Dá para usar vendedor diferente do caixa?", answer: "Sim, quando habilitado, a atribuição comercial do vendedor pode ser preservada sem trocar o operador do caixa." }
    ]
  },
  "material-de-construcao": {
    slug: "material-de-construcao",
    name: "Material de construção",
    title: "PDV para material de construção com caixas, pacotes e fardos.",
    description: "Shamar PDV para material de construção com embalagens, múltiplos códigos de barras, estoque base e histórico preservado por apresentação vendida.",
    intent: "Para loja de material de construção que vende unidade, caixa, pacote, fardo e precisa manter estoque confiável.",
    pains: ["Mesmo produto vendido em unidade e caixa", "Código da embalagem precisa cair no preço certo", "Estoque não pode virar outro produto só por causa da caixa", "Histórico de venda precisa manter o que foi vendido"],
    capabilities: [
      { title: "Apresentações comerciais", text: "UN, CX, PCT, FARDO e KG usam a mesma base de produto quando configurados, preservando a quantidade equivalente." },
      { title: "Código identifica embalagem", text: "O código de barras pode levar o caixa direto para a apresentação correta, sem escolha técnica do operador." },
      { title: "Histórico preservado", text: "A venda guarda a apresentação e o preço aplicados, mesmo se a embalagem mudar depois." }
    ],
    links: [{ href: "/recursos", label: "Ver produtos e estoque" }, { href: "/compatibilidade", label: "Ver leitores e impressão" }, { href: "/precos", label: "Ver oferta" }],
    faqs: [
      { question: "Preciso cadastrar caixa como outro produto?", answer: "Não é a proposta do Shamar PDV. A apresentação comercial aponta para o mesmo produto base quando configurada." },
      { question: "O preço da caixa é calculado automaticamente?", answer: "Não inventamos preço por multiplicação. Preço explícito de apresentação é respeitado quando configurado." }
    ]
  },
  varejo: {
    slug: "varejo",
    name: "Varejo",
    title: "Sistema PDV para loja de varejo vender e controlar a rotina.",
    description: "Shamar PDV para varejo com venda, caixa, produtos, clientes, compras, financeiro simples, backup e histórico em operação leve.",
    intent: "Para loja de varejo que quer vender, controlar caixa, estoque e clientes sem adotar um ERP pesado no balcão.",
    pains: ["Sistema grande demais para rotina simples", "Caixa e gestão misturados com termo técnico", "Backup esquecido", "Dono precisa ver o dia sem montar relatório"],
    capabilities: [
      { title: "Venda direta", text: "A operação comum fica em poucos passos: produto, total, pagamento e próxima venda." },
      { title: "Resumo do dia", text: "O gestor enxerga vendas, caixa, pagamentos, compras recentes e alertas operacionais com números legíveis." },
      { title: "Backup protegido", text: "A proteção automática mostra status simples e preserva o último backup bom verificado." }
    ],
    links: [{ href: "/produto", label: "Conhecer o PDV" }, { href: "/recursos", label: "Ver recursos" }, { href: "/contato?origem=varejo", label: "Quero conhecer" }],
    faqs: [
      { question: "O operador precisa aprender termos técnicos?", answer: "Não. A experiência prioriza linguagem de loja como vender, receber, fechar caixa e histórico." },
      { question: "O Shamar PDV inclui financeiro simples?", answer: "Sim, para rotinas operacionais aprovadas como a receber, a pagar e despesas, sem virar contabilidade ou ERP paralelo." }
    ]
  },
  atacarejo: {
    slug: "atacarejo",
    name: "Atacarejo",
    title: "PDV para atacado e varejo com tabelas de preço e embalagens.",
    description: "Shamar PDV para atacarejo com tabelas Varejo, Atacado e Parceiro, embalagens, códigos múltiplos, revisão de preço e operação local.",
    intent: "Para atacarejo que vende no varejo e no volume, com cliente por tabela de preço e embalagens como caixa, pacote e fardo.",
    pains: ["Cliente atacado não pode depender de desconto manual", "Preço de parceiro precisa ser preservado", "Embalagem tem preço próprio", "Revisão por custo não pode alterar tudo em silêncio"],
    capabilities: [
      { title: "Tabelas de preço", text: "Varejo, Atacado, Parceiro e outras tabelas configuradas podem ser resolvidas pelo cliente ou por seleção autorizada." },
      { title: "Embalagens com preço explícito", text: "CX, PCT e FARDO podem ter preço próprio sem derivar automaticamente do preço unitário." },
      { title: "Revisão de preço segura", text: "Mudança de custo gera revisão e sugestão; preço de venda só muda após autorização e auditoria." }
    ],
    links: [{ href: "/precos", label: "Ver caminhos comerciais" }, { href: "/produto", label: "Ver precificação" }, { href: "/demonstracao?origem=atacarejo", label: "Agendar demonstração" }],
    faqs: [
      { question: "Atacado e Parceiro mudam automaticamente?", answer: "Não. Tabelas adicionais só mudam quando explicitamente selecionadas ou configuradas para revisão." },
      { question: "Cliente pode trazer a tabela automaticamente?", answer: "Sim, quando o cadastro operacional do cliente tem uma tabela atribuída, o checkout usa essa autoridade local." }
    ]
  }
};

export function SegmentSeoPage({ segment }: { segment: Segment }) {
  const path = `/segmentos/${segment.slug}`;
  const crumbs = [{ name: "Início", href: "/" }, { name: "Segmentos", href: "/segmentos" }, { name: segment.name, href: path }];
  return (
    <main>
      <JsonLd id={`breadcrumb-${segment.slug}`} data={breadcrumbJsonLd(crumbs)} />
      <JsonLd id={`faq-${segment.slug}`} data={faqJsonLd(segment.faqs)} />
      <PageHero eyebrow="Segmentos" title={segment.title} text={segment.description} cta="Quero conhecer" ctaHref={`/contato?origem=${segment.slug}`} />
      <section className="section compactTop"><Breadcrumbs items={crumbs} /><p className="lead intentText">{segment.intent}</p></section>
      <section className="section split">
        <div><p className="eyebrow">Problemas que resolvemos</p><h2>Menos atrito na rotina da loja.</h2></div>
        <div className="featureList">{segment.pains.map((pain) => <div key={pain}>{pain}</div>)}</div>
      </section>
      <section className="section grid cols3">
        {segment.capabilities.map((item) => <article className="card" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}
      </section>
      <section className="section split">
        <div><p className="eyebrow">Antes de decidir</p><h2>Respostas claras para reduzir risco.</h2><p className="lead">A loja entende migração, operação local, hardware e primeiro passo comercial sem promessa exagerada.</p></div>
        <div className="card"><h3>Objeções comuns</h3><ul><li>Dados existentes podem ser avaliados antes da troca.</li><li>A operação local suportada não depende de sucesso falso de serviços externos.</li><li>Equipamentos entram por status honesto: Homologado, Software Ready ou Em validação.</li></ul><div className="routeLinks">{objectionLinks.map((link) => <Link className="button secondary" href={`${link.href}?origem=${segment.slug}`} key={link.href}>{link.label}</Link>)}</div></div>
      </section>
      <section className="section"><p className="eyebrow">Continue explorando</p><div className="routeLinks">{segment.links.map((link) => <Link className="button secondary" href={link.href} key={link.href}>{link.label}</Link>)}</div></section>
      <FaqSection items={segment.faqs} />
      <CTA label="Quero conhecer o Shamar PDV" source={segment.slug} />
    </main>
  );
}

export function segmentMetadata(slug: Segment["slug"]) {
  const segment = segmentPages[slug];
  return pageMetadata(segment.title, segment.description, `/segmentos/${slug}`);
}

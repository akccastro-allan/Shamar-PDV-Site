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

export const segmentPages: Record<Segment["slug"], Segment> = {
  mercado: {
    slug: "mercado",
    name: "Mercado",
    title: "Sistema PDV para mercado que precisa vender rapido no caixa.",
    description: "Shamar PDV para mercado com scanner, caixa rapido, estoque, produtos por codigo, pagamentos configuraveis e resumo do dia sem complicar a operacao.",
    intent: "Para quem procura sistema PDV para mercado, caixa de supermercado pequeno ou controle de estoque para mercearia.",
    pains: ["Fila no caixa quando o operador precisa clicar demais", "Produto sem codigo claro ou estoque desatualizado", "Dificuldade para separar dinheiro fisico de Pix e cartao", "Troca de sistema com medo de perder cadastro"],
    capabilities: [
      { title: "Scanner, teclado e F9", text: "A rotina principal continua simples: passar produto, conferir total, receber e seguir para a proxima venda." },
      { title: "Estoque e compras", text: "Produtos, compras, entrada por XML quando aplicavel e alertas de estoque baixo ajudam a loja a repor sem virar ERP." },
      { title: "Caixa com separacao por meio", text: "Dinheiro fisico, Pix, cartao e voucher aparecem de forma operacional, sem inflar a gaveta." }
    ],
    links: [{ href: "/produto", label: "Ver produto" }, { href: "/migracao", label: "Migrar cadastro" }, { href: "/precos", label: "Ver caminhos comerciais" }],
    faqs: [
      { question: "O Shamar PDV funciona para mercado pequeno?", answer: "Sim. O foco e vender rapido, controlar produtos, estoque, caixa e historico com linguagem simples para a loja." },
      { question: "Preciso de internet para toda venda?", answer: "A operacao local suportada continua disponivel. Integracoes externas podem ficar pendentes ou pedir atencao." }
    ]
  },
  hortifruti: {
    slug: "hortifruti",
    name: "Hortifruti",
    title: "PDV para hortifruti com KG, favoritos e etiqueta de balanca.",
    description: "Shamar PDV para hortifruti com venda por KG, etiqueta pesada, produtos favoritos, scanner e controle de estoque em linguagem de loja.",
    intent: "Para quem busca PDV para hortifruti, PDV com balanca, venda por quilo ou sacolao com produtos de alto giro.",
    pains: ["Produtos por peso travando a venda", "Operador tendo que procurar banana, tomate e folhas toda hora", "Etiqueta de balanca confundida com codigo normal", "Preco por KG mudando sem controle"],
    capabilities: [
      { title: "KG decimal", text: "Produtos pesaveis entram com quantidade decimal e preservam a autoridade de preco do PDV." },
      { title: "Etiqueta pesada", text: "Codigos de etiqueta de balanca podem identificar produto e peso quando o perfil configurado suporta o formato." },
      { title: "Favoritos", text: "Produtos frequentes ficam em acesso rapido para nao depender de codigo em itens de alto giro." }
    ],
    links: [{ href: "/compatibilidade", label: "Ver balanca e leitor" }, { href: "/recursos", label: "Recursos para estoque" }, { href: "/contato?origem=hortifruti", label: "Falar sobre hortifruti" }],
    faqs: [
      { question: "O caixa escolhe perfil de balanca a cada venda?", answer: "Nao. A operacao normal e escanear a etiqueta; a configuracao fica fora da rotina do caixa." },
      { question: "Balanca direta esta homologada?", answer: "Nao declaramos homologacao sem teste fisico. A pagina de compatibilidade separa Software Ready, em validacao e homologado." }
    ]
  },
  autopecas: {
    slug: "autopecas",
    name: "Autopecas",
    title: "Sistema para autopecas com busca rapida, cliente e orcamento.",
    description: "Shamar PDV para autopecas com busca por codigo ou nome, cliente opcional, vendedor, orcamento e historico comercial sem assumir funcoes fiscais de ERP.",
    intent: "Para quem busca sistema para autopecas com localizacao rapida de item, cliente, orcamento e conversao em venda.",
    pains: ["Atendimento de balcao demora para achar produto", "Cliente pede orcamento antes de fechar", "Vendedor e caixa nem sempre sao a mesma pessoa", "Historico precisa ser facil de consultar"],
    capabilities: [
      { title: "Busca por codigo, nome ou parte", text: "O atendente consegue localizar produtos pelo dado que o cliente trouxe, sem depender apenas de codigo de barras." },
      { title: "Orcamento e venda", text: "Orcamentos comerciais podem ser preservados e convertidos em venda pelo fluxo aprovado, sem criar pagamento antecipado." },
      { title: "Cliente e vendedor", text: "A venda pode preservar cliente e vendedor quando informados, mantendo o caixa separado do vendedor." }
    ],
    links: [{ href: "/produto", label: "Ver fluxo de venda" }, { href: "/migracao", label: "Migrar produtos" }, { href: "/demonstracao?origem=autopecas", label: "Agendar demonstracao" }],
    faqs: [
      { question: "O Shamar PDV substitui sistema fiscal automotivo?", answer: "Nao. O PDV cuida da operacao comercial aprovada e respeita a fronteira ERP/fiscal." },
      { question: "Da para usar vendedor diferente do caixa?", answer: "Sim, quando habilitado, a atribuicao comercial do vendedor pode ser preservada sem trocar o operador do caixa." }
    ]
  },
  "material-de-construcao": {
    slug: "material-de-construcao",
    name: "Material de construcao",
    title: "PDV para material de construcao com caixas, pacotes e fardos.",
    description: "Shamar PDV para material de construcao com embalagens, multiplos codigos de barras, estoque base e historico preservado por apresentacao vendida.",
    intent: "Para loja de material de construcao que vende unidade, caixa, pacote, fardo e precisa manter estoque confiavel.",
    pains: ["Mesmo produto vendido em unidade e caixa", "Codigo da embalagem precisa cair no preco certo", "Estoque nao pode virar outro produto so por causa da caixa", "Historico de venda precisa manter o que foi vendido"],
    capabilities: [
      { title: "Apresentacoes comerciais", text: "UN, CX, PCT, FARDO e KG usam a mesma base de produto quando configurados, preservando a quantidade equivalente." },
      { title: "Codigo identifica embalagem", text: "O codigo de barras pode levar o caixa direto para a apresentacao correta, sem escolha tecnica do operador." },
      { title: "Historico preservado", text: "A venda guarda a apresentacao e o preco aplicados, mesmo se a embalagem mudar depois." }
    ],
    links: [{ href: "/recursos", label: "Ver produtos e estoque" }, { href: "/compatibilidade", label: "Ver leitores e impressao" }, { href: "/precos", label: "Ver oferta" }],
    faqs: [
      { question: "Preciso cadastrar caixa como outro produto?", answer: "Nao e a proposta do Shamar PDV. A apresentacao comercial aponta para o mesmo produto base quando configurada." },
      { question: "O preco da caixa e calculado automaticamente?", answer: "Nao inventamos preco por multiplicacao. Preco explicito de apresentacao e respeitado quando configurado." }
    ]
  },
  varejo: {
    slug: "varejo",
    name: "Varejo",
    title: "Sistema PDV para loja de varejo vender e controlar a rotina.",
    description: "Shamar PDV para varejo com venda, caixa, produtos, clientes, compras, financeiro simples, backup e historico em operacao leve.",
    intent: "Para loja de varejo que quer vender, controlar caixa, estoque e clientes sem adotar um ERP pesado no balcao.",
    pains: ["Sistema grande demais para rotina simples", "Caixa e gestao misturados com termo tecnico", "Backup esquecido", "Dono precisa ver o dia sem montar relatorio"],
    capabilities: [
      { title: "Venda direta", text: "A operacao comum fica em poucos passos: produto, total, pagamento e proxima venda." },
      { title: "Resumo do dia", text: "O gestor enxerga vendas, caixa, pagamentos, compras recentes e alertas operacionais com numeros legiveis." },
      { title: "Backup protegido", text: "A protecao automatica mostra status simples e preserva o ultimo backup bom verificado." }
    ],
    links: [{ href: "/produto", label: "Conhecer o PDV" }, { href: "/recursos", label: "Ver recursos" }, { href: "/contato?origem=varejo", label: "Quero conhecer" }],
    faqs: [
      { question: "O operador precisa aprender termos tecnicos?", answer: "Nao. A experiencia prioriza linguagem de loja como vender, receber, fechar caixa e historico." },
      { question: "O Shamar PDV inclui financeiro simples?", answer: "Sim, para rotinas operacionais aprovadas como a receber, a pagar e despesas, sem virar contabilidade ou ERP paralelo." }
    ]
  },
  atacarejo: {
    slug: "atacarejo",
    name: "Atacarejo",
    title: "PDV para atacado e varejo com tabelas de preco e embalagens.",
    description: "Shamar PDV para atacarejo com tabelas Varejo, Atacado e Parceiro, embalagens, codigos multiplos, revisao de preco e operacao local.",
    intent: "Para atacarejo que vende no varejo e no volume, com cliente por tabela de preco e embalagens como caixa, pacote e fardo.",
    pains: ["Cliente atacado nao pode depender de desconto manual", "Preco de parceiro precisa ser preservado", "Embalagem tem preco proprio", "Revisao por custo nao pode alterar tudo em silencio"],
    capabilities: [
      { title: "Tabelas de preco", text: "Varejo, Atacado, Parceiro e outras tabelas configuradas podem ser resolvidas pelo cliente ou por selecao autorizada." },
      { title: "Embalagens com preco explicito", text: "CX, PCT e FARDO podem ter preco proprio sem derivar automaticamente do preco unitario." },
      { title: "Revisao de preco segura", text: "Mudanca de custo gera revisao e sugestao; preco de venda so muda apos autorizacao e auditoria." }
    ],
    links: [{ href: "/precos", label: "Ver caminhos comerciais" }, { href: "/produto", label: "Ver precificacao" }, { href: "/demonstracao?origem=atacarejo", label: "Agendar demonstracao" }],
    faqs: [
      { question: "Atacado e Parceiro mudam automaticamente?", answer: "Nao. Tabelas adicionais so mudam quando explicitamente selecionadas ou configuradas para revisao." },
      { question: "Cliente pode trazer a tabela automaticamente?", answer: "Sim, quando o cadastro operacional do cliente tem uma tabela atribuida, o checkout usa essa autoridade local." }
    ]
  }
};

export function SegmentSeoPage({ segment }: { segment: Segment }) {
  const path = `/segmentos/${segment.slug}`;
  const crumbs = [{ name: "Inicio", href: "/" }, { name: "Segmentos", href: "/segmentos" }, { name: segment.name, href: path }];
  return (
    <main>
      <JsonLd id={`breadcrumb-${segment.slug}`} data={breadcrumbJsonLd(crumbs)} />
      <JsonLd id={`faq-${segment.slug}`} data={faqJsonLd(segment.faqs)} />
      <PageHero eyebrow="Segmentos" title={segment.title} text={segment.description} />
      <section className="section compactTop"><Breadcrumbs items={crumbs} /><p className="lead intentText">{segment.intent}</p></section>
      <section className="section split">
        <div><p className="eyebrow">Problemas que resolvemos</p><h2>Menos atrito na rotina da loja.</h2></div>
        <div className="featureList">{segment.pains.map((pain) => <div key={pain}>{pain}</div>)}</div>
      </section>
      <section className="section grid cols3">
        {segment.capabilities.map((item) => <article className="card" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}
      </section>
      <section className="section"><p className="eyebrow">Continue explorando</p><div className="routeLinks">{segment.links.map((link) => <Link className="button secondary" href={link.href} key={link.href}>{link.label}</Link>)}</div></section>
      <FaqSection items={segment.faqs} />
      <CTA source={segment.slug} />
    </main>
  );
}

export function segmentMetadata(slug: Segment["slug"]) {
  const segment = segmentPages[slug];
  return pageMetadata(segment.name, segment.description, `/segmentos/${slug}`);
}


import type { FaqItem } from "@/components/site/Seo";

export type BlogSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  published: string;
  modified?: string;
  category: "Operação" | "Migração" | "Estoque e produtos" | "Segurança dos dados" | "Escolha do PDV";
  intent: string;
  summary: string;
  commercialHref: string;
  commercialLabel: string;
  sections: BlogSection[];
  faqs: FaqItem[];
  related: Array<{ href: string; label: string }>;
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "como-funciona-pdv-offline",
    title: "Como funciona um PDV offline na rotina da loja",
    description: "Entenda o que continua funcionando em um PDV offline, o que depende de internet e como preparar venda, caixa, estoque e backup.",
    published: "2026-09-15",
    category: "Operação",
    intent: "como funciona PDV offline",
    summary: "Um guia prático para entender o que permanece local, o que fica pendente e por que PDV offline não significa prometer tudo sem internet.",
    commercialHref: "/pdv-offline",
    commercialLabel: "Ver a página de PDV offline",
    sections: [
      { title: "PDV offline não é mágica", paragraphs: ["Um sistema PDV sem internet precisa separar operação local de serviços externos. Venda local, catálogo disponível e caixa podem continuar quando o fluxo Single está preparado para isso, mas integrações e provedores podem depender de conexão."] },
      { title: "O que deve continuar funcionando", bullets: ["Abrir o PDV instalado na loja.", "Localizar produtos já disponíveis no cadastro local.", "Registrar venda local suportada.", "Receber em dinheiro e meios manuais configurados.", "Preservar histórico e dados locais para conferência posterior."] },
      { title: "O que pode depender da internet", bullets: ["Serviços externos de pagamento ou TEF.", "Integrações com ERP, fiscal ou nuvem.", "Sincronizações e consultas fora da loja.", "Validações de provedor que exigem conexão no momento."] },
      { title: "Backup e restauração importam", paragraphs: ["Operar localmente exige disciplina de proteção de dados. Backup só é confiável quando é verificado e quando a restauração foi testada em uma rotina controlada."] }
    ],
    faqs: [
      { question: "PDV offline emite nota fiscal sem internet?", answer: "Não fazemos essa promessa. Operação comercial local é diferente de emissão fiscal offline, que depende de regras e provedores específicos." },
      { question: "PDV offline dispensa backup?", answer: "Não. Quanto mais local é a operação, mais importante é ter backup verificado e rotina de restauração." }
    ],
    related: [{ href: "/pdv-offline", label: "PDV offline" }, { href: "/compatibilidade", label: "Compatibilidade" }, { href: "/blog/backup-pdv-restauracao", label: "Backup e restauração" }]
  },
  {
    slug: "migracao-sistema-pdv-checklist",
    title: "Checklist para migrar sistema PDV sem começar do zero",
    description: "Veja o que revisar antes de migrar produtos, clientes, fornecedores, estoque, códigos e preços para um novo sistema PDV.",
    published: "2026-09-15",
    category: "Migração",
    intent: "como migrar sistema PDV",
    summary: "Uma lista objetiva para trocar de PDV com menos risco, mais revisão e sem prometer migração perfeita de qualquer origem.",
    commercialHref: "/migracao",
    commercialLabel: "Ver migração do Shamar PDV",
    sections: [
      { title: "Antes de migrar", bullets: ["Liste produtos, clientes, fornecedores e estoque que realmente precisam entrar.", "Separe cadastros antigos que não são mais usados.", "Confira códigos de barras, códigos internos e unidades.", "Identifique dados obrigatórios para começar a vender com segurança."] },
      { title: "Durante a análise da origem", paragraphs: ["A origem precisa mostrar identidade confiável. Documento, código externo e referência consistente são melhores do que tentar deduzir cadastro por nome parecido."] },
      { title: "Evite duplicidade", bullets: ["Não use nome sozinho como identidade.", "Revise produtos com códigos conflitantes.", "Separe itens sem EAN/GTIN ou sem unidade clara.", "Faça amostra de vendas antes do corte definitivo."] },
      { title: "Teste antes do corte", paragraphs: ["O caminho seguro é importar em ambiente controlado, revisar amostras, validar busca, preço, estoque e backup, e só então combinar a entrada assistida na loja."] }
    ],
    faqs: [
      { question: "Dá para migrar tudo automaticamente?", answer: "Não é seguro prometer isso. O que tem identidade confiável pode ser migrado; o que é ambíguo deve ir para revisão." },
      { question: "Preciso parar a loja para testar?", answer: "O ideal é testar antes do corte, com amostras e checklist, para reduzir risco na entrada." }
    ],
    related: [{ href: "/migracao", label: "Migração" }, { href: "/produto", label: "Produto" }, { href: "/blog/backup-pdv-restauracao", label: "Backup antes da troca" }]
  },
  {
    slug: "cadastro-autopecas-codigos-referencias",
    title: "Como organizar cadastro de autopeças com códigos e referências",
    description: "Organize SKU, EAN/GTIN, marca, fabricante, referência, aplicação, fornecedor e equivalência sem transformar o PDV em conselho fiscal.",
    published: "2026-09-15",
    category: "Estoque e produtos",
    intent: "como organizar cadastro de autopeças",
    summary: "Guia educativo para deixar o balcão de autopeças mais pesquisável sem competir com a landing page comercial de PDV para autopeças.",
    commercialHref: "/segmentos/autopecas",
    commercialLabel: "Ver PDV para autopeças",
    sections: [
      { title: "Comece pelo código certo", paragraphs: ["SKU ou código interno ajuda a loja a controlar o item do jeito dela. EAN/GTIN ajuda na leitura e busca quando existe. Referência de fabricante e referência de fornecedor ajudam o balcão a conversar com compra e reposição."] },
      { title: "Campos que ajudam o balcão", bullets: ["Marca e fabricante.", "Categoria e aplicação.", "Fornecedor principal.", "Equivalência entre peças.", "Perfil de pneu quando aplicável."] },
      { title: "Classificação não é aconselhamento fiscal", paragraphs: ["NCM, CEST e origem podem ser mantidos como dados de classificação do produto. Isso não substitui a autoridade fiscal, o ERP ou a revisão contábil quando necessária."] },
      { title: "Migração de autopeças", paragraphs: ["Na troca de sistema, códigos e referências reduzem retrabalho. O que não tiver identidade segura precisa aparecer para revisão, não virar cadastro duplicado em silêncio."] }
    ],
    faqs: [
      { question: "Posso buscar peça por referência?", answer: "Sim, quando a referência está cadastrada ou migrada de forma confiável." },
      { question: "Equivalência cria outro produto?", answer: "Não necessariamente. Ela ajuda a localizar alternativas, preservando a organização do cadastro conforme a regra aprovada." }
    ],
    related: [{ href: "/segmentos/autopecas", label: "PDV para autopeças" }, { href: "/migracao", label: "Migração" }, { href: "/produto", label: "Product Master" }]
  },
  {
    slug: "backup-pdv-restauracao",
    title: "Backup de PDV só é confiável quando a restauração funciona",
    description: "Entenda uma rotina simples de backup e restauração para proteger produto, cliente, venda, caixa e configuração do PDV.",
    published: "2026-09-15",
    category: "Segurança dos dados",
    intent: "backup sistema PDV",
    summary: "Sem medo artificial: o básico para loja entender por que backup precisa ser verificado e restaurável.",
    commercialHref: "/produto",
    commercialLabel: "Ver recursos do PDV",
    sections: [
      { title: "Backup não é só arquivo gerado", paragraphs: ["Um backup pode até existir, mas a loja só ganha confiança quando ele é verificado e quando a restauração já foi testada com dados importantes."] },
      { title: "O que proteger", bullets: ["Produtos e preços.", "Clientes e histórico.", "Vendas concluídas.", "Configuração operacional.", "Evidência do último backup bom conhecido."] },
      { title: "Rotina prática", bullets: ["Definir destino de backup.", "Acompanhar status protegido ou precisa de atenção.", "Não substituir backup bom por arquivo falho.", "Testar restauração antes de depender dela em emergência."] },
      { title: "Depois de restaurar", paragraphs: ["O PDV precisa abrir, os dados de exemplo precisam aparecer e a operação local precisa continuar coerente. Backup sem teste de restauração é evidência incompleta."] }
    ],
    faqs: [
      { question: "Backup automático basta?", answer: "Ajuda muito, mas o gate importante é saber se a restauração funciona." },
      { question: "Posso apagar o último backup bom?", answer: "A prática segura é preservar o último backup verificado enquanto novos backups são criados e validados." }
    ],
    related: [{ href: "/produto", label: "Produto" }, { href: "/pdv-offline", label: "Operação offline" }, { href: "/migracao", label: "Migração segura" }]
  },
  {
    slug: "pdv-single-ou-rede",
    title: "PDV Single ou em rede: qual caminho faz sentido para sua loja?",
    description: "Compare PDV local para uma operação independente com Network para múltiplos caixas em rede local e implantação assistida.",
    published: "2026-09-15",
    category: "Escolha do PDV",
    intent: "PDV um caixa ou vários caixas",
    summary: "Explicação comercial simples sobre quando começar com Single e quando avaliar Network com assistência.",
    commercialHref: "/precos",
    commercialLabel: "Ver caminhos comerciais",
    sections: [
      { title: "Quando Single costuma bastar", paragraphs: ["Single atende a loja que precisa de operação local independente, caixa rápido, produtos, clientes, estoque e backup sem múltiplos terminais compartilhando o mesmo servidor local."] },
      { title: "Quando avaliar Network", paragraphs: ["Network faz sentido quando há mais de um caixa ou terminal compartilhando a mesma operação local. A implantação precisa ser assistida, com validação do ambiente e do PostgreSQL local."] },
      { title: "O que não muda", bullets: ["A autoridade de venda continua no PDV Core.", "Preço e estoque seguem regras aprovadas.", "Backup e recuperação continuam sendo parte da operação.", "Pagamento não vira outro motor só porque existe rede."] },
      { title: "Como decidir", paragraphs: ["Conte quantos caixas existem hoje, quantas pessoas operam ao mesmo tempo, se a loja aceita piloto assistido e quais periféricos precisam ser validados."] }
    ],
    faqs: [
      { question: "Network é obrigatório para começar?", answer: "Não. Muitas lojas começam avaliando Single quando a operação é local e independente." },
      { question: "Network dispensa implantação assistida?", answer: "Não. Rede local, banco e múltiplos terminais precisam de validação no ambiente real." }
    ],
    related: [{ href: "/precos", label: "Planos e preços" }, { href: "/produto", label: "Produto" }, { href: "/contato", label: "Falar com vendas" }]
  }
];

export function getArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}

export const blogRoutes = blogArticles.map((article) => `/blog/${article.slug}`);

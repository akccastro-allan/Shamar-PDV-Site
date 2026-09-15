export type CapabilityGroup = {
  title: string;
  text: string;
  items: string[];
};

export const navItems = [
  ["Produto", "/produto"],
  ["PDV offline", "/pdv-offline"],
  ["Recursos", "/recursos"],
  ["Segmentos", "/segmentos"],
  ["Preços", "/precos"],
  ["Migração", "/migracao"],
  ["Compatibilidade", "/compatibilidade"],
  ["Ajuda", "/ajuda"]
] as const;

export const segments = [
  { href: "/segmentos/mercado", title: "Mercado", text: "Venda rápida, caixa simples, produtos por código de barras e resumo do dia." },
  { href: "/segmentos/hortifruti", title: "Hortifruti", text: "Produtos KG, etiquetas de balança, favoritos e operação de alto giro." },
  { href: "/segmentos/autopecas", title: "Autopeças", text: "Busca por código, referência, fabricante, aplicação, cliente e estoque sem complicar o balcão." },
  { href: "/segmentos/material-de-construcao", title: "Material de construção", text: "Venda por apresentações, pacotes, caixas e histórico para atendimento recorrente." },
  { href: "/segmentos/varejo", title: "Varejo", text: "Rotina de loja com produtos, compras, caixa, clientes e backup automático." },
  { href: "/segmentos/atacarejo", title: "Atacarejo", text: "Tabelas de preço, embalagens, códigos múltiplos e operação local resiliente." }
] as const;

export const capabilityGroups: CapabilityGroup[] = [
  { title: "Venda e caixa", text: "Fluxo de venda direto para o operador.", items: ["Leitura por código de barras", "F9 consulta produto/preço", "PageUp para pagamento e F12 para mais opções", "Dinheiro, Pix manual e cartão manual quando configurados", "Histórico e reimpressão"] },
  { title: "Produtos e estoque", text: "Cadastro comercial e movimentação controlada.", items: ["Produtos UN e KG", "Embalagens e códigos múltiplos", "Product Master com marca, fabricante, NCM, CEST, origem, aplicação e equivalências quando disponíveis", "Estoque baixo e inventário", "Compras e entrada por XML NF-e"] },
  { title: "Clientes", text: "Identificação sem travar a venda.", items: ["Cliente opcional", "Crediário quando habilitado", "Histórico operacional", "Tabelas de preço por perfil"] },
  { title: "Compras", text: "Entrada simples para manter o estoque correto.", items: ["Fornecedores", "Compras", "Importação XML NF-e", "Custo operacional para revisão de preço"] },
  { title: "Preços", text: "Preço autoritativo e histórico preservado.", items: ["Varejo, Atacado e Parceiro", "Promoções com validade", "Revisão por custo e margem", "Sem alterar vendas antigas"] },
  { title: "Financeiro simples", text: "Rotina de loja, sem virar ERP paralelo.", items: ["A receber", "A pagar", "Despesas", "Resumo do dia"] },
  { title: "Segurança e backup", text: "Proteção automática para operação diária.", items: ["Login de operador", "Permissões de supervisor", "Backup verificado", "Restauração validada antes de uso"] },
  { title: "Periféricos", text: "Preparado para a loja real.", items: ["Leitor", "Impressora", "Gaveta", "Balança", "Tela do cliente", "PinPad/TEF em diagnóstico"] },
  { title: "Integrações", text: "Seguro por padrão e sem promessa falsa.", items: ["ERP/fiscal por handoff", "Provider de pagamento configurável", "Migração de dados", "Saúde e diagnósticos"] }
];

export const compatibility: ReadonlyArray<{ name: string; state: "Homologado" | "Smoke físico aprovado" | "Software Ready" | "Em validação" | "Não testado"; detail: string }> = [
  { name: "Leitor", state: "Software Ready", detail: "Entrada por teclado/USB comum preservada; modelos físicos devem ser testados no piloto." },
  { name: "Impressora", state: "Em validação", detail: "Fluxo de impressão preparado; detecção não equivale a impressão física aprovada." },
  { name: "Gaveta", state: "Em validação", detail: "Abertura por caminho de impressora/ESC-POS quando suportado; depende do conjunto físico." },
  { name: "Balança", state: "Software Ready", detail: "Etiqueta pesada suportada; balança direta depende de modelo, protocolo e teste físico." },
  { name: "Segundo monitor/display", state: "Software Ready", detail: "Interface de display do cliente preparada; validação física depende do ambiente." },
  { name: "PinPad/TEF", state: "Em validação", detail: "Diagnóstico e fronteira prontos; homologação depende de SDK/provedor e validação factual." }
] as const;

export const indexableRoutes = [
  "/",
  "/produto",
  "/pdv-offline",
  "/recursos",
  "/segmentos",
  "/segmentos/mercado",
  "/segmentos/hortifruti",
  "/segmentos/autopecas",
  "/segmentos/material-de-construcao",
  "/segmentos/varejo",
  "/segmentos/atacarejo",
  "/precos",
  "/migracao",
  "/compatibilidade",
  "/demonstracao",
  "/ajuda",
  "/blog",
  "/contato",
  "/privacidade"
] as const;

export const utilityRoutes = ["/login"] as const;
export const routes = [...indexableRoutes, ...utilityRoutes] as const;

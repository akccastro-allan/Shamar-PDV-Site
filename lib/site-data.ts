export type CapabilityGroup = {
  title: string;
  text: string;
  items: string[];
};

export const navItems = [
  ["Produto", "/produto"],
  ["Recursos", "/recursos"],
  ["Segmentos", "/segmentos"],
  ["Precos", "/precos"],
  ["Migracao", "/migracao"],
  ["Compatibilidade", "/compatibilidade"],
  ["Ajuda", "/ajuda"]
] as const;

export const segments = [
  { href: "/segmentos/mercado", title: "Mercado", text: "Venda rapida, caixa simples, produtos por codigo de barras e resumo do dia." },
  { href: "/segmentos/hortifruti", title: "Hortifruti", text: "Produtos KG, etiquetas de balanca, favoritos e operacao de alto giro." },
  { href: "/segmentos/autopecas", title: "Autopecas", text: "Busca por nome/codigo, clientes, orcamentos e controle de estoque sem complicar o balcão." },
  { href: "/segmentos/material-de-construcao", title: "Material de construcao", text: "Venda por apresentacoes, pacotes, caixas e historico para atendimento recorrente." },
  { href: "/segmentos/varejo", title: "Varejo", text: "Rotina de loja com produtos, compras, caixa, clientes e backup automatico." },
  { href: "/segmentos/atacarejo", title: "Atacarejo", text: "Tabelas de preco, embalagens, codigos multiplos e operacao local resiliente." }
] as const;

export const capabilityGroups: CapabilityGroup[] = [
  { title: "Venda e caixa", text: "Fluxo de venda direto para o operador.", items: ["Leitura por codigo de barras", "F9 para pagamento", "Dinheiro, Pix manual e cartao manual quando configurados", "Historico e reimpressao"] },
  { title: "Produtos e estoque", text: "Cadastro comercial e movimentacao controlada.", items: ["Produtos UN e KG", "Embalagens e codigos multiplos", "Estoque baixo e inventario", "Compras e entrada por XML NF-e"] },
  { title: "Clientes", text: "Identificacao sem travar a venda.", items: ["Cliente opcional", "Crediario quando habilitado", "Historico operacional", "Tabelas de preco por perfil"] },
  { title: "Compras", text: "Entrada simples para manter o estoque correto.", items: ["Fornecedores", "Compras", "Importacao XML NF-e", "Custo operacional para revisao de preco"] },
  { title: "Precos", text: "Preco autoritativo e historico preservado.", items: ["Varejo, Atacado e Parceiro", "Promocoes com validade", "Revisao por custo e margem", "Sem alterar vendas antigas"] },
  { title: "Financeiro simples", text: "Rotina de loja, sem virar ERP paralelo.", items: ["A receber", "A pagar", "Despesas", "Resumo do dia"] },
  { title: "Seguranca e backup", text: "Protecao automatica para operacao diaria.", items: ["Login de operador", "Permissoes de supervisor", "Backup verificado", "Restauracao validada antes de uso"] },
  { title: "Perifericos", text: "Preparado para a loja real.", items: ["Leitor", "Impressora", "Gaveta", "Balanca", "Tela do cliente", "PinPad/TEF em diagnostico"] },
  { title: "Integracoes", text: "Seguro por padrao e sem promessa falsa.", items: ["ERP/fiscal por handoff", "Provider de pagamento configuravel", "Migracao de dados", "Saude e diagnosticos"] }
];

export const compatibility = [
  { name: "Operacao Single local", state: "Homologado", detail: "Software validado por gates automatizados; validacao fisica segue por candidato." },
  { name: "Backup e restauracao", state: "Software Ready", detail: "Fluxo implementado; restauracao real deve ser provada no ambiente piloto." },
  { name: "Leitor por teclado", state: "Software Ready", detail: "Entrada por teclado/USB comum preservada." },
  { name: "Impressora e gaveta", state: "Em validacao", detail: "Software preparado; cada hardware exige smoke fisico." },
  { name: "Balanca e etiqueta pesada", state: "Software Ready", detail: "Etiqueta de balanca suportada; balanca direta depende do modelo." },
  { name: "PinPad/TEF", state: "Em validacao", detail: "Diagnostico e fronteira prontos; homologacao depende de SDK/provedor." }
] as const;

export const routes = ["/", "/produto", "/recursos", "/segmentos", "/segmentos/mercado", "/segmentos/hortifruti", "/segmentos/autopecas", "/segmentos/material-de-construcao", "/segmentos/varejo", "/segmentos/atacarejo", "/precos", "/migracao", "/compatibilidade", "/demonstracao", "/ajuda", "/blog", "/contato", "/login"];

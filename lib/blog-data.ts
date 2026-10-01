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
  },
  {
    slug: "pdv-online-vs-pdv-offline",
    title: "PDV online vs PDV offline: como escolher sem cair em promessa fácil",
    description: "Compare PDV online em nuvem e PDV offline/local com critérios práticos para venda, caixa, internet, loja, acesso e continuidade operacional.",
    published: "2026-09-30",
    category: "Escolha do PDV",
    intent: "PDV online vs PDV offline",
    summary: "Um guia comercial honesto para entender quando operação local importa, quando o online ajuda e por que os dois caminhos podem conviver.",
    commercialHref: "/pdv-online",
    commercialLabel: "Ver PDV online",
    sections: [
      { title: "A pergunta não é só internet ou nuvem", paragraphs: ["A decisão entre PDV local e PDV online deve começar pela rotina da loja: fila no caixa, estabilidade da internet, quantidade de operadores, necessidade de vários pontos, backup, acesso remoto e integrações externas."] },
      { title: "Quando o PDV local pesa mais", bullets: ["A loja precisa continuar vendendo quando a conexão falha.", "O caixa depende de resposta rápida no balcão.", "O catálogo principal fica disponível na própria operação.", "Backup e restauração precisam ser controlados com clareza."] },
      { title: "Quando o PDV online ajuda", bullets: ["A empresa precisa acessar lojas por endereço web.", "O usuário deve entrar com uma conta centralizada.", "A operação exige acesso por loja, empresa ou filial.", "Relatórios e gestão conectada fazem parte do plano de crescimento."] },
      { title: "O melhor desenho pode combinar os dois", paragraphs: ["O Shamar PDV preserva a importância do local/offline e prepara aquisição para o online. O ponto é não vender nuvem como solução mágica nem tratar operação local como coisa antiga: cada fluxo precisa de prova operacional."] },
      { title: "O que perguntar antes de escolher", bullets: ["Quantos caixas vendem ao mesmo tempo?", "A internet da loja é confiável no horário de pico?", "A loja precisa vender se a conexão cair?", "Quem pode acessar cada loja?", "O que será migrado do sistema atual?"] }
    ],
    faqs: [
      { question: "PDV online funciona sem internet?", answer: "Não como promessa geral. Fluxos online dependem de conexão. Para independência de internet, avalie a proposta local/offline suportada." },
      { question: "PDV local impede gestão em nuvem?", answer: "Não necessariamente. O desenho pode preservar venda local e usar capacidades conectadas quando elas estiverem validadas e disponíveis." },
      { question: "Qual é melhor para loja pequena?", answer: "Depende da rotina. Uma loja com um caixa e internet instável pode priorizar local; uma operação com necessidade de acesso por loja pode avaliar online com cuidado." }
    ],
    related: [{ href: "/pdv-online", label: "PDV online" }, { href: "/pdv-offline", label: "PDV offline" }, { href: "/precos", label: "Caminhos comerciais" }]
  },
  {
    slug: "fechamento-de-caixa-pdv",
    title: "Fechamento de caixa no PDV: o que conferir no fim do dia",
    description: "Veja uma rotina simples para conferir vendas, dinheiro, Pix, cartão, sangria, suprimento, troco e divergências no fechamento de caixa.",
    published: "2026-09-30",
    category: "Operação",
    intent: "fechamento de caixa PDV",
    summary: "Um guia prático para fechar o caixa com menos improviso, separando conferência operacional de promessa fiscal ou financeira que depende de integração.",
    commercialHref: "/produto",
    commercialLabel: "Ver venda e caixa do Shamar PDV",
    sections: [
      { title: "Fechar caixa é conferir a operação", paragraphs: ["O fechamento de caixa ajuda a loja a comparar o que foi vendido, o que foi recebido e o que ficou fisicamente na gaveta. A rotina precisa ser simples para o operador e clara para o gestor."] },
      { title: "Comece pelo caixa certo", bullets: ["Identifique operador e caixa usados no turno.", "Confira se houve abertura com troco inicial.", "Separe vendas concluídas de operações canceladas.", "Não misture conferência de gaveta com promessa de conciliação externa automática."] },
      { title: "Separe os meios de pagamento", bullets: ["Dinheiro físico precisa considerar troco, suprimento e sangria.", "Pix manual deve aparecer separado do dinheiro.", "Cartão manual precisa ser conferido com comprovantes ou relatório do provedor.", "Voucher ou outros meios devem seguir a configuração operacional da loja."] },
      { title: "Olhe divergência como evidência", paragraphs: ["Diferença no fechamento não deve virar ajuste silencioso. O caminho seguro é registrar o valor informado, mostrar a divergência e permitir revisão com histórico."] },
      { title: "O que preparar antes de implantar", bullets: ["Definir quem abre e fecha caixa.", "Combinar rotina de sangria e suprimento.", "Validar impressão ou saída do resumo quando aplicável.", "Treinar operador para não fechar venda não confirmada como concluída."] }
    ],
    faqs: [
      { question: "Fechamento de caixa substitui conciliação bancária?", answer: "Não. Fechamento operacional confere a rotina do caixa. Conciliação bancária ou de adquirente depende de integrações e regras específicas." },
      { question: "Posso fechar caixa com divergência?", answer: "A loja pode precisar registrar a divergência, mas ela deve ficar visível para revisão em vez de ser apagada por ajuste automático." },
      { question: "Sangria e suprimento entram no fechamento?", answer: "Sim. Eles ajudam a explicar por que o dinheiro físico da gaveta pode ser diferente do total de vendas em dinheiro." }
    ],
    related: [{ href: "/produto", label: "Produto" }, { href: "/pdv-offline", label: "PDV offline" }, { href: "/blog/como-funciona-pdv-offline", label: "Operação offline" }]
  },
  {
    slug: "codigo-de-barras-pdv",
    title: "Código de barras no PDV: como reduzir erro no caixa",
    description: "Entenda como código interno, EAN/GTIN, múltiplos códigos, embalagem, balança e busca por produto ajudam uma venda mais rápida no PDV.",
    published: "2026-09-30",
    category: "Estoque e produtos",
    intent: "codigo de barras PDV",
    summary: "Um guia para usar código de barras como ferramenta de operação, sem prometer que todo produto ou embalagem será resolvido por leitura automática sem cadastro correto.",
    commercialHref: "/produto",
    commercialLabel: "Ver cadastro e venda do Shamar PDV",
    sections: [
      { title: "Leitura rápida depende de cadastro bom", paragraphs: ["O leitor acelera a venda quando o produto tem código confiável, preço definido e unidade correta. Sem cadastro, o scanner só entrega uma sequência de caracteres; o PDV ainda precisa saber o que ela significa."] },
      { title: "Tipos de código que aparecem na loja", bullets: ["Código interno criado pela própria loja.", "EAN/GTIN quando o produto vem com código comercial.", "Código de embalagem, caixa, pacote ou fardo.", "Etiqueta de balança quando o segmento usa peso.", "Referência ou SKU auxiliar para busca."] },
      { title: "Preserve zeros à esquerda", paragraphs: ["Código de barras não deve ser tratado como número comum. Zeros à esquerda podem fazer parte da identidade do item; removê-los causa produto não encontrado ou colisão com outro cadastro."] },
      { title: "Múltiplos códigos precisam apontar para a regra certa", bullets: ["A unidade vendida precisa ser clara.", "Embalagem não deve virar produto duplicado por acidente.", "Preço da apresentação deve ser explícito quando a loja vende caixa ou pacote.", "Produto pesado precisa respeitar o perfil de etiqueta configurado."] },
      { title: "Busca textual continua importante", paragraphs: ["Nem todo item terá código legível. A operação precisa permitir busca por nome, código interno ou referência, principalmente em balcão, hortifruti, material de construção e autopeças."] }
    ],
    faqs: [
      { question: "Todo produto precisa ter EAN/GTIN?", answer: "Não. Muitos itens usam código interno ou referência. O importante é que o cadastro seja consistente para venda e estoque." },
      { question: "Posso cadastrar mais de um código para o mesmo produto?", answer: "Sim, quando a operação precisa localizar unidade, embalagem ou referência sem duplicar o produto indevidamente." },
      { question: "Código de balança é igual a código comum?", answer: "Não necessariamente. Etiqueta de balança pode carregar produto e peso conforme o perfil configurado." }
    ],
    related: [{ href: "/produto", label: "Produto" }, { href: "/segmentos/material-de-construcao", label: "Material de construção" }, { href: "/segmentos/hortifruti", label: "Hortifruti" }]
  },
  {
    slug: "como-escolher-sistema-pdv",
    title: "Como escolher um sistema PDV sem cair em promessa pronta",
    description: "Veja critérios práticos para escolher sistema PDV: caixa, estoque, produtos, backup, migração, periféricos, suporte e operação offline.",
    published: "2026-10-01",
    category: "Escolha do PDV",
    intent: "como escolher sistema PDV",
    summary: "Um guia para comparar sistemas PDV pela rotina real da loja, separando capacidade provada de promessa comercial ampla demais.",
    commercialHref: "/produto",
    commercialLabel: "Conhecer o Shamar PDV",
    sections: [
      { title: "Comece pelo caixa", paragraphs: ["O melhor sistema PDV para uma loja é aquele que não atrapalha a venda. Antes de olhar relatórios avançados, confira se o operador consegue abrir caixa, buscar produto, vender, receber e concluir sem improviso."] },
      { title: "Critérios que pesam na decisão", bullets: ["Venda rápida com código de barras e busca textual.", "Produtos, preços, estoque e clientes no mesmo fluxo operacional.", "Fechamento de caixa compreensível.", "Backup e restauração testáveis.", "Migração com revisão, não promessa de mágica.", "Compatibilidade de periféricos validada na implantação."] },
      { title: "Cuidado com promessa sem prova", paragraphs: ["Afirmações como produção validada, impressão física homologada, TEF real ou fiscal completo exigem evidência específica. Quando algo depende de hardware, provedor ou certificado, o site deve dizer isso claramente."] },
      { title: "Como usar uma demonstração", bullets: ["Leve exemplos de produtos reais.", "Pergunte como o PDV lida com internet instável.", "Peça para ver venda, pagamento e fechamento.", "Pergunte onde aparecem etiquetas, promoções e backup.", "Separe o que está pronto para demonstração do que depende de piloto assistido."] }
    ],
    faqs: [
      { question: "Sistema PDV mais completo é sempre melhor?", answer: "Não. Completo demais pode atrapalhar o balcão se o fluxo principal de venda não for simples." },
      { question: "Preciso escolher entre PDV online e offline?", answer: "A decisão depende da loja. Operação local ajuda na continuidade; online ajuda em acesso conectado. O importante é não confundir um com o outro." },
      { question: "Preço baixo basta para decidir?", answer: "Não. Migração, suporte, backup, periféricos e rotina real podem custar mais caro quando são ignorados." }
    ],
    related: [{ href: "/produto", label: "Produto" }, { href: "/precos", label: "Planos e preços" }, { href: "/compatibilidade", label: "Compatibilidade" }]
  },
  {
    slug: "controle-de-estoque-no-pdv",
    title: "Controle de estoque no PDV: o que a loja precisa enxergar",
    description: "Entenda como produto, compra, venda, estoque baixo, inventário e custo ajudam o controle de estoque dentro de um sistema PDV.",
    published: "2026-10-01",
    category: "Estoque e produtos",
    intent: "controle de estoque no PDV",
    summary: "Um guia operacional para estoque no PDV, sem transformar o caixa em ERP e sem esconder limites de integração.",
    commercialHref: "/recursos",
    commercialLabel: "Ver recursos do Shamar PDV",
    sections: [
      { title: "Estoque começa no cadastro", paragraphs: ["Produto com unidade errada, código duplicado ou embalagem confusa cria erro antes da venda. O PDV precisa deixar claro o que é unidade, caixa, pacote, peso ou apresentação comercial."] },
      { title: "Movimentos que precisam ficar rastreáveis", bullets: ["Venda baixando estoque quando aplicável.", "Compra ou entrada aumentando saldo.", "Inventário corrigindo diferença com registro.", "Estoque baixo chamando atenção.", "Custo alimentando revisão de preço sem contaminar histórico de venda."] },
      { title: "O que o operador precisa ver", paragraphs: ["No balcão, o operador precisa localizar produto e vender. Na gestão, a loja precisa identificar itens sem saldo, compras recentes, preços desatualizados e produtos que exigem revisão."] },
      { title: "Integração não deve mascarar divergência", paragraphs: ["Quando existe ERP, fiscal ou importação, o PDV deve preservar autoridade e evidência. Se uma origem externa está indisponível ou ambígua, a informação deve ser revisada em vez de aplicada em silêncio."] }
    ],
    faqs: [
      { question: "PDV substitui ERP de estoque?", answer: "Não necessariamente. O PDV controla a operação da loja; integrações e domínios externos precisam de contrato e autoridade própria." },
      { question: "Inventário pode corrigir qualquer coisa?", answer: "Inventário corrige saldo operacional, mas deve deixar evidência para a loja entender a diferença." },
      { question: "Custo muda venda antiga?", answer: "Não deve. Revisão de custo e margem orienta preço novo sem reescrever venda concluída." }
    ],
    related: [{ href: "/recursos", label: "Recursos" }, { href: "/produto", label: "Produto" }, { href: "/blog/codigo-de-barras-pdv", label: "Código de barras" }]
  },
  {
    slug: "etiquetas-de-preco-no-pdv",
    title: "Etiquetas de preço no PDV: produto, prateleira e mudança de preço",
    description: "Veja como etiquetas de produto, etiquetas de prateleira, fila de alteração de preço e scan-to-label ajudam a manter a loja coerente.",
    published: "2026-10-01",
    category: "Estoque e produtos",
    intent: "etiquetas de preço no PDV",
    summary: "Um guia para usar etiquetas no PDV com cuidado, deixando claro o que já foi validado em software e o que depende da impressora física.",
    commercialHref: "/recursos",
    commercialLabel: "Ver etiquetas nos recursos",
    sections: [
      { title: "Etiqueta evita divergência visível", paragraphs: ["Preço de prateleira, etiqueta de produto e preço do caixa precisam contar a mesma história. Quando o preço muda, a loja precisa saber quais etiquetas ficaram pendentes."] },
      { title: "Fluxos úteis", bullets: ["Etiqueta de produto para identificação.", "Etiqueta de prateleira para preço exposto.", "Fila após alteração de preço.", "Reimpressão ou descarte quando a etiqueta foi tratada.", "Scan-to-label para localizar item pelo código lido."] },
      { title: "Preço sempre vem da autoridade do PDV", paragraphs: ["Etiqueta não deve inventar preço. Ela deve refletir o preço autoritativo do produto, tabela ou promoção já definido pela operação."] },
      { title: "Impressora física é gate de campo", paragraphs: ["O software pode renderizar e enfileirar etiquetas em ambiente controlado. Impressora física, tamanho de mídia, driver e corte precisam de validação na implantação."] }
    ],
    faqs: [
      { question: "Etiqueta de preço já significa impressora validada?", answer: "Não. A rotina de software pode estar pronta, mas impressão física depende do equipamento real." },
      { question: "Mudança de preço cria etiqueta automaticamente?", answer: "O fluxo pode gerar pendência de etiqueta para revisão/impressão conforme regra operacional validada." },
      { question: "Scan-to-label substitui cadastro?", answer: "Não. Ele ajuda a localizar o produto pela leitura, mas depende de código cadastrado corretamente." }
    ],
    related: [{ href: "/recursos", label: "Recursos" }, { href: "/produto", label: "Produto" }, { href: "/blog/codigo-de-barras-pdv", label: "Código de barras no PDV" }]
  },
  {
    slug: "promocoes-no-pdv",
    title: "Promoções no PDV e modo vitrine sem bagunçar o preço",
    description: "Entenda como promoções, validade, preço autoritativo e modo vitrine podem divulgar ofertas sem alterar a regra de venda no caixa.",
    published: "2026-10-01",
    category: "Operação",
    intent: "promoções no PDV",
    summary: "Um guia para expor ofertas com segurança, separando comunicação visual de autoridade de preço e operação do caixa.",
    commercialHref: "/recursos",
    commercialLabel: "Ver promoções e modo vitrine",
    sections: [
      { title: "Promoção precisa de regra clara", paragraphs: ["Uma promoção útil informa produto, período, preço ou condição e status. Ativar, agendar ou encerrar deve respeitar a regra comercial, sem mudar venda antiga."] },
      { title: "Modo vitrine é comunicação, não motor de preço", paragraphs: ["O display ocioso pode mostrar oferta e reforçar campanha, mas o preço precisa vir da autoridade do PDV. A tela bonita não deve decidir preço sozinha."] },
      { title: "Primeiro bip precisa acordar e vender", bullets: ["O operador não deve escanear duas vezes.", "O código lido durante ocioso precisa ser preservado.", "O display fecha e o produto segue para busca/venda.", "Carrinho com item ou pagamento aberto não deve ativar descanso comercial."] },
      { title: "Validação honesta", paragraphs: ["Promoções e modo vitrine já têm lógica validada em ambiente controlado/headless. A prova visual de campo depende de tela real, resolução e rotina de loja."] }
    ],
    faqs: [
      { question: "Modo vitrine muda preço?", answer: "Não deve. Ele divulga ofertas; a autoridade de preço continua no PDV." },
      { question: "Promoção vencida aparece no caixa?", answer: "A regra esperada é respeitar validade e status para não vender oferta fora do período." },
      { question: "A tela ociosa aparece durante pagamento?", answer: "Não deveria. Pagamento, consulta, opções e carrinho com item são estados operacionais que bloqueiam o descanso comercial." }
    ],
    related: [{ href: "/recursos", label: "Recursos" }, { href: "/produto", label: "Produto" }, { href: "/precos", label: "Planos e preços" }]
  }
];

export function getArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}

export const blogRoutes = blogArticles.map((article) => `/blog/${article.slug}`);

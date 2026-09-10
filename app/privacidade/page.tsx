import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Privacidade", "Como o site publico do Shamar PDV trata dados enviados para contato comercial.", "/privacidade");

export default function PrivacyPage(){return <main><section className="pageHero"><p className="eyebrow">Privacidade</p><h1>Contato comercial com dados minimos.</h1><p>O site solicita apenas informacoes iniciais para responder ao interesse comercial. Nao coletamos senhas, dados de pagamento, dados fiscais ou dados de clientes da loja por este formulario.</p></section><section className="section grid cols2"><div className="card"><h3>O que voce envia</h3><p>Nome, empresa, contato, tipo de negocio, cidade/regiao e quantidade aproximada de caixas quando informado.</p></div><div className="card"><h3>Para que usamos</h3><p>Responder ao pedido de demonstracao, proposta ou conversa comercial sobre o Shamar PDV.</p></div></section></main>}

import Link from "next/link";

export default function NotFound(){return <main><section className="pageHero"><p className="eyebrow">Pagina nao encontrada</p><h1>Esse caminho nao existe.</h1><p>Volte para o site do Shamar PDV ou fale com a equipe comercial.</p><div className="actions"><Link className="button primary" href="/">Ir para o inicio</Link><Link className="button secondary" href="/contato">Falar com vendas</Link></div></section></main>}

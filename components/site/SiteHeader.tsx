import Link from "next/link";
import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <Link className="brand" href="/" aria-label="Shamar PDV inicio">
        <span className="brandMark">S</span>
        <span><strong>Shamar PDV</strong><small>Venda simples. Operacao segura.</small></span>
      </Link>
      <nav className="nav" aria-label="Navegacao principal">
        {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <div className="headerActions">
        <Link className="button ghost" href="/login">Entrar</Link>
        <Link className="button primary" href="/demonstracao">Agendar demonstracao</Link>
      </div>
    </header>
  );
}

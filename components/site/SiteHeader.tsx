"use client";

import Link from "next/link";
import { navItems } from "@/lib/site-data";
import { trackConversionEvent } from "@/lib/analytics";

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <Link className="brand" href="/" aria-label="Shamar PDV início">
        <span className="brandMark">S</span>
        <span><strong>Shamar PDV</strong><small>Venda simples. Operação segura.</small></span>
      </Link>
      <nav className="nav" aria-label="Navegação principal">
        {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <div className="headerActions">
        <Link className="button ghost" href="/login" onClick={() => trackConversionEvent("login_click", { sourcePage: "header", cta: "Entrar" })}>Entrar</Link>
        <Link className="button primary" href="/demonstracao?origem=header" onClick={() => trackConversionEvent("agendar_demo", { sourcePage: "header", cta: "Agendar demonstração" })}>Agendar demonstração</Link>
      </div>
    </header>
  );
}

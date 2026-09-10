import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div>
        <strong>Shamar PDV</strong>
        <p>Simples para o usuario. Completo por baixo. Leve na operacao. Seguro por padrao.</p>
      </div>
      <nav aria-label="Rodape">
        <Link href="/produto">Produto</Link>
        <Link href="/migracao">Migracao</Link>
        <Link href="/compatibilidade">Compatibilidade</Link>
        <Link href="/contato">Contato</Link>
      </nav>
    </footer>
  );
}

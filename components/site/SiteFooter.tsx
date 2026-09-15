import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div>
        <strong>Shamar PDV</strong>
        <p>Simples para o usuário. Completo por baixo. Leve na operação. Seguro por padrão.</p>
      </div>
      <nav aria-label="Rodapé">
        <Link href="/produto">Produto</Link>
        <Link href="/migracao">Migração</Link>
        <Link href="/compatibilidade">Compatibilidade</Link>
        <Link href="/contato">Contato</Link>
      </nav>
    </footer>
  );
}

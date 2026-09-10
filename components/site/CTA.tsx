import Link from "next/link";

export function CTA({ label = "Quero conhecer" }: { label?: string }) {
  return (
    <div className="ctaPanel">
      <p className="eyebrow">Pronto para ver na pratica?</p>
      <h2>Um PDV que acompanha o ritmo da loja, sem exigir treinamento pesado.</h2>
      <div className="actions"><Link className="button primary" href="/contato">{label}</Link><Link className="button secondary" href="/demonstracao">Agendar demonstracao</Link></div>
    </div>
  );
}

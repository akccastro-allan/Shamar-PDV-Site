import { externalFieldGates, provenOperationalClaims } from "@/lib/site-data";

export function ProofStatus({ compact = false }: { compact?: boolean }) {
  const claims = compact ? provenOperationalClaims.slice(0, 5) : provenOperationalClaims;
  const gates = compact ? externalFieldGates.slice(0, 4) : externalFieldGates;
  return (
    <section className="section grid cols2">
      <article className="card">
        <p className="eyebrow">Prova atual</p>
        <h3>Operacional em ambiente controlado</h3>
        <ul>{claims.map((item) => <li key={item}>{item}</li>)}</ul>
      </article>
      <article className="card">
        <p className="eyebrow">Ainda depende de campo</p>
        <h3>Sem promessa de produção antes da validação real</h3>
        <ul>{gates.map((item) => <li key={item}>{item}</li>)}</ul>
      </article>
    </section>
  );
}

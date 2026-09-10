"use client";

import Link from "next/link";
import { trackConversionEvent } from "@/lib/analytics";

export function CTA({ label = "Quero conhecer", source = "cta" }: { label?: string; source?: string }) {
  const eventName = label === "Agendar demonstracao" ? "agendar_demo" : label === "Falar com vendas" ? "falar_com_vendas" : "quero_conhecer";
  return (
    <div className="ctaPanel">
      <p className="eyebrow">Pronto para ver na pratica?</p>
      <h2>Um PDV que acompanha o ritmo da loja, sem exigir treinamento pesado.</h2>
      <div className="actions"><Link className="button primary" href={`/contato?origem=${encodeURIComponent(source)}`} onClick={() => trackConversionEvent(eventName, { sourcePage: source, cta: label })}>{label}</Link><Link className="button secondary" href={`/demonstracao?origem=${encodeURIComponent(source)}`} onClick={() => trackConversionEvent("agendar_demo", { sourcePage: source, cta: "Agendar demonstracao" })}>Agendar demonstracao</Link></div>
    </div>
  );
}

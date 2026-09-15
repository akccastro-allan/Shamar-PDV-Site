"use client";

import Link from "next/link";
import { trackConversionEvent } from "@/lib/analytics";

export function CTA({ label = "Quero conhecer o Shamar PDV", source = "cta" }: { label?: string; source?: string }) {
  const eventName = label === "Agendar demonstração" ? "agendar_demo" : label === "Falar com vendas" ? "falar_com_vendas" : label === "Pedir proposta" ? "pedir_proposta" : label.includes("implantar") ? "quero_implantar" : "quero_conhecer";
  return (
    <div className="ctaPanel">
      <p className="eyebrow">Pronto para ver na prática?</p>
      <h2>Comece pelo caminho seguro: demonstração, proposta ou piloto assistido.</h2>
      <div className="actions"><Link className="button primary" href={`/contato?origem=${encodeURIComponent(source)}`} onClick={() => trackConversionEvent(eventName, { sourcePage: source, cta: label })}>{label}</Link><Link className="button secondary" href={`/demonstracao?origem=${encodeURIComponent(source)}`} onClick={() => trackConversionEvent("agendar_demo", { sourcePage: source, cta: "Agendar demonstração" })}>Agendar demonstração</Link></div>
    </div>
  );
}

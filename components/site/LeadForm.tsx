"use client";

import { FormEvent, useMemo, useState } from "react";
import { trackConversionEvent } from "@/lib/analytics";

const businessTypes = ["Mercado", "Hortifruti", "Autopecas", "Material de construcao", "Varejo", "Atacarejo", "Outro"];

function currentAttribution(source: string) {
  if (typeof window === "undefined") return { sourcePage: source };
  const params = new URLSearchParams(window.location.search);
  return {
    sourcePage: source,
    cta: params.get("origem") ?? source,
    campaign: params.get("utm_campaign") ?? undefined,
    medium: params.get("utm_medium") ?? undefined,
    source: params.get("utm_source") ?? undefined
  };
}

export function LeadForm({ source = "site" }: { source?: string }) {
  const [status, setStatus] = useState<string>("");
  const subject = useMemo(() => encodeURIComponent(`Interesse Shamar PDV - ${source}`), [source]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const required = ["nome", "empresa", "contato", "tipo"];
    const missing = required.some((key) => !String(data.get(key) ?? "").trim());
    if (missing) {
      setStatus("Preencha nome, empresa, contato e tipo de negocio para continuarmos.");
      return;
    }

    const attribution = currentAttribution(source);
    const body = encodeURIComponent([
      "Quero conhecer o Shamar PDV.",
      `Origem: ${attribution.sourcePage}`,
      `CTA: ${attribution.cta ?? "Nao informado"}`,
      `Campanha: ${attribution.campaign ?? "Nao informado"}`,
      `Midia: ${attribution.medium ?? "Nao informado"}`,
      `Fonte: ${attribution.source ?? "Nao informado"}`,
      `Nome: ${data.get("nome")}`,
      `Empresa: ${data.get("empresa")}`,
      `Contato: ${data.get("contato")}`,
      `Tipo de negocio: ${data.get("tipo")}`,
      `Cidade/regiao: ${data.get("cidade") || "Nao informado"}`,
      `Caixas/unidades: ${data.get("caixas") || "Nao informado"}`
    ].join("\n"));

    trackConversionEvent("lead_submit", attribution);
    setStatus("Abrindo seu e-mail para enviar o contato comercial.");
    window.location.href = `mailto:comercial@shamarpdv.com.br?subject=${subject}&body=${body}`;
  }

  return (
    <form className="card form" onSubmit={submit} noValidate>
      <label htmlFor="nome">Nome<input required id="nome" name="nome" className="input" autoComplete="name" /></label>
      <label htmlFor="empresa">Empresa<input required id="empresa" name="empresa" className="input" autoComplete="organization" /></label>
      <label htmlFor="contato">Contato<input required id="contato" name="contato" className="input" placeholder="Telefone ou e-mail" autoComplete="email" /></label>
      <label htmlFor="tipo">Tipo de negocio<select required id="tipo" name="tipo" className="select" defaultValue=""><option value="" disabled>Selecione</option>{businessTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
      <label htmlFor="cidade">Cidade/regiao<input id="cidade" name="cidade" className="input" autoComplete="address-level2" /></label>
      <label htmlFor="caixas">Quantidade de caixas/unidades<input id="caixas" name="caixas" className="input" inputMode="numeric" /></label>
      <p className="formNotice">Usaremos estes dados apenas para responder ao seu interesse comercial. Veja a <a href="/privacidade">privacidade</a>.</p>
      <button className="button primary" type="submit">Falar com vendas</button>
      <p className="formStatus" role="status" aria-live="polite">{status}</p>
    </form>
  );
}

export type ConversionEventName =
  | "page_view"
  | "quero_conhecer"
  | "agendar_demo"
  | "falar_com_vendas"
  | "preco_view"
  | "migracao_view"
  | "compatibilidade_view"
  | "login_click"
  | "lead_submit";

export type ConversionEventPayload = {
  sourcePage?: string;
  segment?: string;
  cta?: string;
  campaign?: string;
  medium?: string;
  source?: string;
};

export const analyticsAuthority = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER ?? "adapter_pending";

export function trackConversionEvent(name: ConversionEventName, payload: ConversionEventPayload = {}) {
  if (typeof window === "undefined") return;
  const event = { name, payload, at: new Date().toISOString() };
  window.dispatchEvent(new CustomEvent("shamar:conversion", { detail: event }));

  const dataLayer = (window as Window & { dataLayer?: unknown[] }).dataLayer;
  if (Array.isArray(dataLayer)) dataLayer.push({ event: name, ...payload });
}

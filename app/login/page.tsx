import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Entrada Shamar Passport | Shamar PDV",
  description: "Rota de handoff comercial para acesso Shamar Passport.",
  alternates: { canonical: absoluteUrl("/login") },
  robots: { index: false, follow: false }
};

export default function LoginPage(){return <main className="loginShell"><section className="loginCard"><p className="eyebrow">Passport</p><h1>Entrada preparada para o Shamar Passport.</h1><p>Esta rota é apenas o limite visual e comercial de acesso. Não há autenticação falsa, usuário de demonstração ou API Passport inventada.</p><a className="button primary" href="/contato?origem=login">Solicitar acesso</a></section></main>}

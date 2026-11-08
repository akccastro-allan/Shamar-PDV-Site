import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Entrada Shamar Passport | Shamar PDV",
  description: "Rota de handoff comercial para acesso Shamar Passport.",
  alternates: { canonical: absoluteUrl("/login") },
  robots: { index: false, follow: false }
};

export default function LoginPage(){return <main className="loginShell"><section className="loginCard"><p className="eyebrow">Passport</p><h1>Acesso oficial pelo Shamar Passport.</h1><p>Use o serviço oficial de identidade da Shamar Suite. Este site não cria credenciais locais nem mantém autenticação paralela.</p><div className="actions"><a className="button primary" href="https://passport.shamarsuite.com.br/login">Entrar no Shamar Passport</a><a className="button secondary" href="/contato?origem=login">Solicitar acesso</a></div></section></main>}

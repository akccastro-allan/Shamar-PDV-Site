import { LeadForm } from "@/components/site/LeadForm";
import { PageHero } from "@/components/site/PageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Contato comercial", "Fale com vendas do Shamar PDV para conhecer o produto, agendar demonstracao ou pedir uma proposta.", "/contato");

export default function ContatoPage(){return <main><PageHero eyebrow="Contato" title="Fale com vendas." text="Conte o tamanho da loja, quantidade de caixas e se precisa migrar dados. O contato abre seu e-mail com as informacoes preenchidas; nao ha CRM fake neste site." ctaHref="mailto:comercial@shamarpdv.com.br" cta="Enviar e-mail"/><section className="section"><LeadForm source="contato" /></section></main>}

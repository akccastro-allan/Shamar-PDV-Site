import { LeadForm } from "@/components/site/LeadForm";
import { PageHero } from "@/components/site/PageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Agendar demonstração", "Agende uma demonstração comercial do Shamar PDV sem formulário longo ou promessa de integração inexistente.", "/demonstracao");

export default function DemonstracaoPage(){return <main><PageHero eyebrow="Demonstração" title="Agende uma conversa para ver o PDV no fluxo da sua loja." text="Formulário curto para iniciar o contato. Sem backend comercial conectado ainda; o handoff autorizado é por e-mail." ctaHref="/contato?origem=demonstracao" cta="Falar com vendas"/><section className="section split"><div><p className="eyebrow">Como funciona</p><h2>Uma conversa objetiva antes de qualquer implantação.</h2><p className="lead">A equipe entende tipo de loja, caixas, migração, periféricos e rotina principal. Nada de criar conta falsa ou prometer integração sem contrato real.</p></div><LeadForm source="demonstracao" /></section></main>}

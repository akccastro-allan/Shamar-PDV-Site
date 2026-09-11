import { LeadForm } from "@/components/site/LeadForm";
import { PageHero } from "@/components/site/PageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Agendar demonstracao", "Agende uma demonstracao comercial do Shamar PDV sem formulario longo ou promessa de integracao inexistente.", "/demonstracao");

export default function DemonstracaoPage(){return <main><PageHero eyebrow="Demonstracao" title="Agende uma conversa para ver o PDV no fluxo da sua loja." text="Formulario curto para iniciar o contato. Sem backend comercial conectado ainda; o handoff autorizado e por e-mail." ctaHref="/contato?origem=demonstracao" cta="Falar com vendas"/><section className="section split"><div><p className="eyebrow">Como funciona</p><h2>Uma conversa objetiva antes de qualquer implantacao.</h2><p className="lead">A equipe entende tipo de loja, caixas, migracao, perifericos e rotina principal. Nada de criar conta falsa ou prometer integracao sem contrato real.</p></div><LeadForm source="demonstracao" /></section></main>}

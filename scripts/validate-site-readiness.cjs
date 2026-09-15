const fs = require("fs");
const path = require("path");

const routes = ["/", "/produto", "/pdv-offline", "/recursos", "/segmentos", "/segmentos/mercado", "/segmentos/hortifruti", "/segmentos/autopecas", "/segmentos/material-de-construcao", "/segmentos/varejo", "/segmentos/atacarejo", "/precos", "/migracao", "/compatibilidade", "/demonstracao", "/ajuda", "/blog", "/contato", "/login", "/privacidade"];
const missing = [];
for (const route of routes) {
  const file = route === "/" ? "app/page.tsx" : `app${route}/page.tsx`;
  if (!fs.existsSync(path.join(process.cwd(), file))) missing.push(route);
}
if (missing.length) throw new Error(`Missing routes: ${missing.join(", ")}`);

const chunks = [];
function walk(p) {
  if (!fs.existsSync(p)) return;
  if (fs.statSync(p).isDirectory()) {
    for (const name of fs.readdirSync(p)) walk(path.join(p, name));
    return;
  }
  if (/\.(tsx?|md)$/.test(p)) chunks.push(fs.readFileSync(p, "utf8"));
}
for (const entry of ["app", "components", "lib", "docs", "README.md"]) walk(path.join(process.cwd(), entry));
const allText = chunks.join("\n");

const forbidden = ["href=\"#\"", "24/7", "PRODUCTION_VALIDATED", "TenantId", "CompanyId", "BranchId", "AggregateRating", "\"Offer\"", "H-T31", "H5", "P0", "PostgreSQL test", "Artigo em preparação", "Artigo em preparacao", "lastModified: new Date()", "changeFrequency", "priority:"];
const found = forbidden.filter((term) => allText.includes(term));
if (found.length) throw new Error(`Forbidden public residue/claim: ${found.join(", ")}`);

const expected = [
  "comercial@shamarpdv.com.br",
  "mailto:",
  "Software Ready",
  "Em validação",
  "Passport",
  "Sob consulta",
  "Troque de sistema sem começar do zero",
  "Você não precisa recadastrar tudo na mão",
  "shamar:conversion",
  "lead_submit",
  "PASSPORT_INTEGRATION_GAP",
  "DOMAIN = DECISION_PENDING",
  "Search Console",
  "BreadcrumbList",
  "FAQPage",
  "SoftwareApplication",
  "sistema PDV para mercado",
  "PDV para hortifruti",
  "sistema para autopeças",
  "PDV para autopeças",
  "PDV offline",
  "tabelas de preço",
  "migrar sistema PDV",
  "Product Master",
  "EAN/GTIN",
  "referência de fabricante",
  "referência de fornecedor",
  "perfil de pneu",
  "equivalências",
  "NCM, CEST e origem",
  "sem prometer que o PDV vira motor fiscal completo",
  "Oficina, diagnóstico e serviço pertencem a outro domínio/produto",
  "operação local suportada",
  "piloto assistido"
  ,"PDV offline para continuar vendendo mesmo quando a internet não ajuda"
  ,"sistema PDV sem internet"
  ,"sistema de caixa offline"
  ,"Como funciona um PDV offline"
  ,"Checklist para migrar sistema PDV"
  ,"Como organizar cadastro de autopeças"
  ,"Backup de PDV só é confiável quando a restauração funciona"
  ,"PDV Single ou em rede"
  ,"BlogPosting"
  ,"Equipe Shamar PDV"
  ,"SEARCH_CONSOLE_VERIFICATION = EXTERNAL_CONNECTION_REQUIRED"
];
for (const term of expected) {
  if (!allText.includes(term)) throw new Error(`Expected readiness text missing: ${term}`);
}
for (const term of ["Serve para loja pequena?", "Vou perder meus dados", "E meus equipamentos?", "Consigo migrar?", "Falar sobre Single", "Falar sobre Network", "Agendar demonstração", "Se ele não abrir"]) {
  if (!allText.includes(term)) throw new Error(`Expected conversion hardening text missing: ${term}`);
}
for (const route of ["/segmentos/mercado", "/segmentos/hortifruti", "/segmentos/autopecas", "/segmentos/material-de-construcao", "/segmentos/varejo", "/segmentos/atacarejo", "/migracao", "/compatibilidade", "/precos", "/produto", "/pdv-offline", "/recursos", "/blog"]) {
  const file = route === "/" ? "app/page.tsx" : `app${route}/page.tsx`;
  const text = fs.readFileSync(path.join(process.cwd(), file), "utf8");
  if (!/metadata|segmentMetadata/.test(text)) throw new Error(`Missing metadata export/reference: ${route}`);
}
for (const cta of ["contato?origem=", "demonstracao?origem=", "mailto:comercial@shamarpdv.com.br"]) {
  if (!allText.includes(cta)) throw new Error(`Expected CTA path missing: ${cta}`);
}
const sitemapSource = fs.readFileSync(path.join(process.cwd(), "app/sitemap.ts"), "utf8");
if (sitemapSource.includes("routes.map")) throw new Error("Sitemap must not include utility/noindex routes by default");
if (!sitemapSource.includes("indexableRoutes") || !sitemapSource.includes("blogRoutes")) throw new Error("Sitemap must include indexable routes and blog article routes");
const loginSource = fs.readFileSync(path.join(process.cwd(), "app/login/page.tsx"), "utf8");
if (!loginSource.includes("index: false")) throw new Error("/login must be noindex");
if (!loginSource.includes("follow: false")) throw new Error("/login must be excluded from acquisition crawling");
const blogSource = fs.readFileSync(path.join(process.cwd(), "lib/blog-data.ts"), "utf8");
for (const slug of ["como-funciona-pdv-offline", "migracao-sistema-pdv-checklist", "cadastro-autopecas-codigos-referencias", "backup-pdv-restauracao", "pdv-single-ou-rede"]) {
  if (!blogSource.includes(`slug: "${slug}"`)) throw new Error(`Missing blog article slug: ${slug}`);
}
if (!fs.existsSync(path.join(process.cwd(), "docs/SEO-KEYWORD-MAP.md"))) throw new Error("Missing SEO keyword map");
console.log("ROUTE_LINK_SEO_SMOKE: PASS");
console.log(`ROUTES: ${routes.length}`);



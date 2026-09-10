const fs = require("fs");
const path = require("path");

const routes = ["/", "/produto", "/recursos", "/segmentos", "/segmentos/mercado", "/segmentos/hortifruti", "/segmentos/autopecas", "/segmentos/material-de-construcao", "/segmentos/varejo", "/segmentos/atacarejo", "/precos", "/migracao", "/compatibilidade", "/demonstracao", "/ajuda", "/blog", "/contato", "/login", "/privacidade"];
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

const forbidden = ["href=\"#\"", "24/7", "PRODUCTION_VALIDATED", "TenantId", "CompanyId", "BranchId"];
const found = forbidden.filter((term) => allText.includes(term));
if (found.length) throw new Error(`Forbidden public residue/claim: ${found.join(", ")}`);
for (const term of ["comercial@shamarpdv.com.br", "mailto:", "Software Ready", "Em validacao", "Passport", "Sob consulta", "Troque de sistema sem comecar do zero"]) {
  if (!allText.includes(term)) throw new Error(`Expected readiness text missing: ${term}`);
}
console.log("ROUTE_LINK_SEO_SMOKE: PASS");
console.log(`ROUTES: ${routes.length}`);

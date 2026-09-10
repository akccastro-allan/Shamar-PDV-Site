# Deployment Readiness

## Build

- Install: `npm install`
- Typecheck: `npm run typecheck`
- Production build: `npm run build`
- Start after build: `npm run start`

## Environment variables

No environment variable or secret is required at build time for this public slice.

## Provider

Deployment provider is pending business/infra decision. The repository is ready for a static/server Next.js host that supports Next 16.

## Smoke paths

- `/`
- `/produto`
- `/recursos`
- `/precos`
- `/contato`
- `/demonstracao`
- `/login`
- `/sitemap.xml`
- `/robots.txt`

## Safety

The site has no fake authentication, no CRM integration, no payment provider integration, no customer data and no production secrets.

## GitHub Pages

Current deployment fallback uses GitHub Pages from main with static export in out/.

Provider URL: https://akccastro-allan.github.io/Shamar-PDV-Site/


# Go-live readiness

## Custom domain

DOMAIN = DECISION_PENDING.

To connect a final commercial domain, the project owner must provide:

- chosen hostname, for example a root domain or subdomain;
- DNS authority for the zone;
- GitHub Pages custom-domain configuration;
- DNS records required by GitHub Pages for that hostname;
- HTTPS verification after DNS propagation.

The current provider URL remains acceptable for commercial smoke until a canonical production domain is chosen.

## Analytics boundary

No measurement ID is configured in this repository.

The site exposes a lightweight browser event boundary using `shamar:conversion` and optional `window.dataLayer` when a real analytics provider is later authorized.

Prepared event names:

- `page_view`
- `quero_conhecer`
- `agendar_demo`
- `falar_com_vendas`
- `preco_view`
- `migracao_view`
- `compatibilidade_view`
- `login_click`
- `lead_submit`

No Google Analytics, CRM, pixel or tag ID is invented here.

## Lead attribution

The lead e-mail handoff preserves safe attribution where available:

- source page;
- CTA/origem;
- `utm_campaign`;
- `utm_medium`;
- `utm_source`.

The form keeps only the short commercial fields required for first contact.

## Passport

PASSPORT_INTEGRATION_GAP = real Passport URL/contract is not present in this repository.

`/login` remains a visual handoff boundary and does not create local identity, fake account authority or demo credentials.

## Search Console

SEARCH_CONSOLE = READY_FOR_VERIFICATION.

Verification is pending account/domain authority. Do not add fake verification files or meta tags without the real token.

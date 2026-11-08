# Go-live readiness

## Custom domain

DOMAIN = ACTIVE: https://pdv.shamarsuite.com.br.

The existing Coolify resource `qsdevw1spjk98ddri5bnnbjq` serves this repository as a static export from `/out` on port80 with a real health probe. The hostname and HTTPS were accepted on 2026-11-07; the temporary resource URL remains a diagnostic path, not a replacement canonical domain. The UI template is a separate preview.

Use `docs/DEPLOYMENT-READINESS.md` for the current publication and recovery contract. `npm start` previews the built static artifact locally; it must not be configured as a Next SSR process. GitHub Pages is a legacy optional target, not an unresolved infrastructure decision or the active production authority.

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

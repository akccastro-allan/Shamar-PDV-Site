# Deployment readiness

Updated 2026-11-08 after reproducing the old `npm start` failure on a successful export.

## Production authority

- Source: `akccastro-allan/Shamar-PDV-Site`, existing `main` repository.
- Canonical hostname: `https://pdv.shamarsuite.com.br`.
- Coolify resource: `qsdevw1spjk98ddri5bnnbjq`; Railpack **static** output served by NGINX.
- Install: `npm ci` (Node >=24). Publish directory: `/out`. Runtime port: `80`.
- Build: `NEXT_PUBLIC_SITE_URL=https://pdv.shamarsuite.com.br npm run build`.
- Health: enabled HTTP `GET /` on port80 with status200. Do not disable it to force acceptance.
- No Node start command is required for this production static resource.

`output: "export"` is deliberate. **Do not use `next start`**: it rejects the export and was the cause of the former restart loop. Do not switch to SSR, add credentials, or change the global proxy to work around it.

## Reproduce the published artifact locally

Run from this repository with the lock file installed:

```powershell
npm ci
$env:NEXT_PUBLIC_SITE_URL = 'https://pdv.shamarsuite.com.br'
npm run build
npm run preview:static
```

`npm run preview:static` serves the actual `out/` directory using the pinned `serve-handler` implementation. The package deliberately has no `start` script because Railpack interprets one as an application runtime and would skip the static Caddy/NGINX path. It defaults to `127.0.0.1:3000`, exposes only GET/HEAD, does not list directories, and does not turn missing URLs into a successful SPA response. Missing export or an invalid/busy port fails explicitly. It is a local/operator preview, not a new production service, login API or financial endpoint.

For another free local port, set `$env:PORT = '43001'` before starting. `HOST` accepts an explicit IP address; retain the loopback default unless a separate network exposure is authorized. Never serve the repository root. Stop only the process started for the preview.

## Verification and release

```powershell
npm run typecheck
npm run validate:site
npm test
npm audit
```

`npm test` requires `npm run build` first. It exercises the exported HTML routes, CSS/JS, private-source denial, 404s, read-only methods and the existing lead-form handler. Local tests do not prove Passport activation, mailbox delivery or store operation.

Before publication, reserve the resource; compare live revision/configuration with the recorded preimage; keep a rollback reference; preserve the configured build capacity and Passport priority. Consume an admitted deployment instead of sending it again. After deployment, confirm the exact commit, `running:healthy`, canonical pages, assets, HTTPS and 404. Record evidence in the existing handoff and Notion, not only a count of green tests.

## Recovery

Use the existing Coolify deployment history and the snapshots in `D:\moriah-systems\_code-handoffs\DEPLOY-CORRECOES-0711`. A rollback must keep the **static** settings, `/out`, port80 and health probe. Do not reintroduce `next start` or the superseded contact domain. Keep prior images/previews; do not delete volumes or alter DNS shared with other products. Revisions containing the repaired commercial contact and reviewed dependencies are preferred over older availability-only snapshots.

## Boundaries

No secret is needed for this public static build. `NEXT_PUBLIC_SITE_URL` is public canonical metadata, not a credential. The commercial form prepares e-mail to the existing published contact; it does not persist leads or confirm delivery. `/login` remains an explicit commercial handoff, not an implemented Passport login.

The separate `SHAMAR-PDV/apps/site` resource is a UI template, not the commercial production authority. GitHub Pages is a legacy optional export target selected only with `GITHUB_PAGES=true`; its workflow/URL must not be substituted for the current Coolify deployment without a new decision. Auto Local, PDV Desktop/RC1, CPlus, databases, licensing and fiscal operation remain outside this site's deployment scope.

References: https://nextjs.org/docs/app/guides/static-exports and https://github.com/vercel/serve-handler (static hosting and reusable file handler).

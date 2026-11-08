// Local/operator recovery preview of the existing Next static export.
// Production remains Coolify's static NGINX image; no Next server or API is added.
import http from 'node:http';
import { isIP } from 'node:net';
import { statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import handler from 'serve-handler';

const directory = fileURLToPath(new URL('../out/', import.meta.url));
const host = process.env.HOST || '127.0.0.1';
const rawPort = process.env.PORT || '3000';
if (!isIP(host) || !/^\d+$/.test(rawPort) || Number(rawPort) < 1 || Number(rawPort) > 65535) {
  console.error('Invalid HOST/PORT. Use an IP address and a port between 1 and 65535.');
  process.exit(1);
}
try {
  if (!statSync(new URL('../out/index.html', import.meta.url)).isFile()) throw new Error();
} catch {
  console.error('Static export not found. Run npm ci and npm run build before npm start.');
  process.exit(1);
}
const server = http.createServer(async (request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' });
    response.end();
    return;
  }
  try {
    await handler(request, response, {
      public: directory, cleanUrls: true, directoryListing: false, symlinks: false
    });
  } catch {
    if (!response.headersSent) response.writeHead(500);
    response.end();
  }
});
server.on('error', error => {
  console.error('Static preview could not start: ' + (error.code || 'SERVER_ERROR'));
  process.exitCode = 1;
});
server.listen({ host, port: Number(rawPort), exclusive: true }, () => {
  const address = server.address();
  console.log(`Shamar PDV static export: http://${isIP(host) === 6 ? `[${host}]` : host}:${address.port}`);
});
for (const signal of ['SIGINT', 'SIGTERM']) {
  process.once(signal, () => server.close());
}

// Exercise the package's real start entrypoint against its built static export.
// No mocks, production connections, network-facing bind, or customer submissions.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const net = require('node:net');
const { spawn } = require('node:child_process');
const { setTimeout: delay } = require('node:timers/promises');
const root = path.resolve(__dirname, '..');
async function unusedPort() {
  const probe = net.createServer();
  await new Promise((resolve, reject) => { probe.once('error', reject); probe.listen(0, '127.0.0.1', resolve); });
  const port = probe.address().port;
  await new Promise(resolve => probe.close(resolve));
  return port;
}
test('static recovery preview never becomes the production Railpack start command', { timeout: 25000 }, async t => {
  assert.ok(fs.existsSync(path.join(root, 'out/index.html')), 'Run npm run build before this artifact test');
  const scripts = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8')).scripts;
  assert.equal(scripts.start, undefined, 'A start script makes Railpack skip the static Caddy/NGINX path');
  assert.equal(scripts['preview:static'], 'node scripts/start-static.mjs');
  const port = await unusedPort();
  // Invoke the literal recovery preview without a shell so teardown owns one PID.
  const args = [path.join(root, 'scripts/start-static.mjs')];
  const child = spawn(process.execPath, args, { cwd: root, windowsHide: true,
    env: { ...process.env, PORT: String(port), HOST: '127.0.0.1', NO_UPDATE_CHECK: '1', NEXT_TELEMETRY_DISABLED: '1' },
    stdio: ['ignore', 'pipe', 'pipe'] });
  let output = '', exited = false, exitCode;
  child.stdout.on('data', chunk => { output = (output + chunk).slice(-12000); });
  child.stderr.on('data', chunk => { output = (output + chunk).slice(-12000); });
  const closed = new Promise(resolve => child.once('exit', code => { exited = true; exitCode = code; resolve(); }));
  child.once('error', error => { output += error.message; });
  const base = 'http://127.0.0.1:' + port;
  try {
    let home;
    const deadline = Date.now() + 15000;
    while (Date.now() < deadline && !exited) {
      try { home = await fetch(base + '/', { signal: AbortSignal.timeout(700) }); if (home.ok) break; await home.arrayBuffer(); }
      catch { /* Wait only for this newly started process to become ready. */ }
      await delay(100);
    }
    assert.ok(home?.ok && !exited, 'Static recovery preview must serve output:export; exit=' + exitCode + '\n' + output);
    const html = await home.text();
    assert.match(html, /Shamar PDV/);
    await t.test('nested exported route and contact remain available', async () => {
      for (const route of ['/contato', '/produto', '/segmentos/autopecas']) {
        const response = await fetch(base + route);
        assert.equal(response.status, 200, route);
        assert.match(await response.text(), /Shamar PDV/);
      }
    });
    await t.test('JS and CSS use actual export assets', async () => {
      const assets = [...html.matchAll(/(?:src|href)="([^"?#]+\.(?:js|css))(?:[?][^"]*)?"/g)]
        .map(m => m[1]).filter(v => v.startsWith('/_next/')).slice(0,3);
      assert.ok(assets.length > 0);
      for (const asset of assets) {
        const response = await fetch(base + asset);
        assert.equal(response.status, 200, asset);
        assert.match(response.headers.get('content-type'), /javascript|css/);
        assert.ok((await response.arrayBuffer()).byteLength > 0);
      }
    });
    await t.test('preview is read-only and supports HEAD', async () => {
      const head = await fetch(base + '/contato', { method: 'HEAD' });
      assert.equal(head.status, 200);
      assert.equal(await head.text(), '');
      const post = await fetch(base + '/', { method: 'POST', body: 'test-only' });
      assert.equal(post.status, 405);
      assert.equal(post.headers.get('allow'), 'GET, HEAD');
      await post.arrayBuffer();
    });
    await t.test('missing routes, directory listings and private source are not served', async () => {
      for (const route of ['/__not_an_exported_page__', '/package.json', '/.git/config', '/_next/']) {
        const response = await fetch(base + route, { redirect: 'manual' });
        assert.equal(response.status, 404, route);
        await response.arrayBuffer();
      }
    });
  } finally {
    if (!exited) child.kill();
    await Promise.race([closed, delay(2000)]);
    assert.ok(exited, 'Only the test-owned preview process must be shut down');
  }
});

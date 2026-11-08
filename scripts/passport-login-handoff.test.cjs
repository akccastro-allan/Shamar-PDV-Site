const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const login = fs.readFileSync(path.join(root, 'app/login/page.tsx'), 'utf8');
const readiness = fs.readFileSync(path.join(root, 'docs/GO-LIVE-READINESS.md'), 'utf8');

test('login handoff uses the real production Passport entrypoint', () => {
  assert.match(login, /https:\/\/passport\.shamarsuite\.com\.br\/login/);
  assert.match(login, /Entrar no Shamar Passport/);
  assert.match(login, /\/contato\?origem=login/);
  assert.doesNotMatch(login, /usu[aá]rio de demonstra[cç][aã]o|senha de demonstra[cç][aã]o/i);
});

test('go-live contract distinguishes active Passport login from deeper integration', () => {
  assert.match(readiness, /PASSPORT_LOGIN = ACTIVE/);
  assert.match(readiness, /https:\/\/passport\.shamarsuite\.com\.br\/login/);
  assert.match(readiness, /integra[cç][aã]o profunda.*n[aã]o est[aá] afirmada/i);
});

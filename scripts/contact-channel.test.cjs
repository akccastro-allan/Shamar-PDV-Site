// Regression for the published commercial handoff, not an inbox delivery test.
// Recipient comes from Allan's published Moriah Auto/Bridge/PDV contact material.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const recipient = 'allan@mkshalom.com.br';
for (const relative of ['app/contato/page.tsx', 'components/site/CTA.tsx', 'components/site/Seo.tsx']) {
  test(`commercial address is the existing published contact: ${relative}`, () => {
    const source = fs.readFileSync(path.join(root, relative), 'utf8');
    assert.ok(source.includes(recipient), 'Must use the approved contact, not the unresolved PDV domain');
    assert.ok(!source.includes('comercial@shamarpdv.com.br'));
  });
}
function leadFormHarness(values) {
  const source = fs.readFileSync(path.join(root, 'components/site/LeadForm.tsx'), 'utf8');
  const compiled = ts.transpileModule(source, { compilerOptions: {
    module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX
  }}).outputText;
  const status = [], events = [], exports = {};
  const window = { location: { search: '?origem=teste-contato&utm_source=teste', href: '' } };
  const jsx = (type, props) => ({ type, props });
  const requireForTest = name => {
    if (name === 'react') return { useMemo: fn => fn(), useState: () => ['', text => status.push(text)] };
    if (name === 'react/jsx-runtime') return { jsx, jsxs: jsx };
    if (name === '@/lib/analytics') return { trackConversionEvent: (name, data) => events.push({ name, data }) };
    throw new Error('Unexpected import: ' + name);
  };
  class FormDataForTest { get(name) { return values[name] ?? null; } }
  vm.runInNewContext(compiled, { exports, require: requireForTest, window,
    FormData: FormDataForTest, URLSearchParams, encodeURIComponent });
  const form = exports.LeadForm({ source: 'contato' });
  assert.equal(form.type, 'form');
  form.props.onSubmit({ preventDefault() {}, currentTarget: {} });
  return { window, status, events };
}
test('real LeadForm handler prepares the correct recipient and attribution without sending', () => {
  const h = leadFormHarness({ nome: 'Teste local', empresa: 'Validação interna', contato: 'nao-enviar@example.invalid',
    tipo: 'Autopeças', objetivo: 'Agendar demonstração', cidade: 'Rio de Janeiro', caixas: '2' });
  const mail = new URL(h.window.location.href);
  assert.equal(mail.protocol, 'mailto:');
  assert.equal(mail.pathname, recipient);
  assert.equal(mail.searchParams.get('subject'), 'Interesse Shamar PDV - contato');
  assert.match(mail.searchParams.get('body'), /CTA: teste-contato/);
  assert.match(mail.searchParams.get('body'), /Nome: Teste local/);
  assert.ok(h.status.at(-1).includes(recipient));
  assert.ok(h.events.some(e => e.name === 'lead_submit'));
});
test('missing required contact fields never open a mail handoff or claim delivery', () => {
  const h = leadFormHarness({ nome: 'Teste local', empresa: 'Validação interna' });
  assert.equal(h.window.location.href, '');
  assert.equal(h.events.length, 0);
  assert.match(h.status.at(-1), /Preencha nome, empresa, contato/);
});

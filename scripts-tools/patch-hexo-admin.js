#!/usr/bin/env node
/**
 * Patch hexo-admin for modern Node + apply the custom UI skin.
 *
 * Runs as an npm `postinstall` hook (idempotent), so everything here survives
 * a fresh `npm install`.
 *
 * 1. Compatibility: hexo-admin@2.3.0 bundles hexo-front-matter@^0.2.2 whose
 *    lib/front_matter.js does `var isDate = util.isDate`. Node >= 24 removed
 *    util.isDate, so parse() throws "TypeError: isDate is not a function" and
 *    the admin UI hangs on "Loading..." when saving/publishing. Patch it.
 *
 * 2. Theme: copy scripts-tools/admin-assets/* into www/ (CSS skin, logo,
 *    favicon, login page) and inject the skin <link> into www/index.html.
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const assets = path.join(__dirname, 'admin-assets');
const www = path.join(root, 'node_modules/hexo-admin/www');
let changed = 0;
const log = (...a) => console.log('[patch-hexo-admin]', ...a);

/* ---------------------------- 1. front-matter compat --------------------- */
const OLD = 'var isDate = util.isDate;';
const NEW =
  "var isDate = util.isDate || function (v) { return Object.prototype.toString.call(v) === '[object Date]'; };";

for (const rel of [
  'node_modules/hexo-admin/node_modules/hexo-front-matter/lib/front_matter.js',
  'node_modules/hexo-front-matter/lib/front_matter.js',
]) {
  const file = path.join(root, rel);
  if (!fs.existsSync(file)) continue;
  const src = fs.readFileSync(file, 'utf8');
  if (src.includes(NEW)) { log('compat: already patched'); continue; }
  if (!src.includes(OLD)) { log('compat: pattern not found (skip)', rel); continue; }
  fs.writeFileSync(file, src.replace(OLD, NEW));
  log('compat: patched', rel);
  changed++;
}

/* ------------------------------- 2. ui assets ---------------------------- */
// copy a file only when missing or different, so repeated installs are cheap
function syncCopy(src, dst) {
  if (!fs.existsSync(src)) return;
  const a = fs.readFileSync(src);
  if (fs.existsSync(dst) && fs.readFileSync(dst).equals(a)) return;
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.writeFileSync(dst, a);
  log('ui: wrote', path.relative(root, dst));
  changed++;
}

if (fs.existsSync(www) && fs.existsSync(assets)) {
  syncCopy(path.join(assets, 'theme-skin.css'), path.join(www, 'css/theme-skin.css'));
  syncCopy(path.join(assets, 'login.html'), path.join(www, 'login/index.html'));
  syncCopy(path.join(assets, 'logo.png'), path.join(www, 'logo.png'));
  syncCopy(path.join(assets, 'logo.png'), path.join(www, 'login/logo.png'));
  syncCopy(path.join(assets, 'favicon.ico'), path.join(www, 'favicon.ico'));

  const indexHtml = path.join(www, 'index.html');
  if (fs.existsSync(indexHtml)) {
    let html = fs.readFileSync(indexHtml, 'utf8');
    let next = html;
    if (!next.includes('theme-skin.css')) {
      next = next.replace('</head>', '  <link rel="stylesheet" href="css/theme-skin.css">\n</head>');
    }
    if (!next.includes('href="favicon.ico"')) {
      next = next.replace('href="logo.png"', 'href="favicon.ico"');
    }
    if (next !== html) {
      fs.writeFileSync(indexHtml, next);
      log('ui: updated index.html');
      changed++;
    }
  }
}

if (changed === 0) log('nothing to do');

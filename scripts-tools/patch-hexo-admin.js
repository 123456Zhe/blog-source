#!/usr/bin/env node
/**
 * Patch hexo-admin's bundled hexo-front-matter for Hexo 7 compatibility.
 *
 * hexo-admin@2.3.0 depends on hexo-front-matter@^0.2.2, whose lib/front_matter.js
 * does `var isDate = util.isDate`. Node >= 24 removed util.isDate, so calling
 * parse() throws "TypeError: isDate is not a function" and the admin UI hangs on
 * "Loading..." when saving/publishing a post.
 *
 * This script replaces that line with a fallback. It is idempotent and wired as
 * an npm postinstall hook, so it re-applies after every `npm install`.
 */
const fs = require('fs');
const path = require('path');

const targets = [
  'node_modules/hexo-admin/node_modules/hexo-front-matter/lib/front_matter.js',
  'node_modules/hexo-front-matter/lib/front_matter.js',
];

const OLD = 'var isDate = util.isDate;';
const NEW =
  "var isDate = util.isDate || function (v) { return Object.prototype.toString.call(v) === '[object Date]'; };";

let patched = 0;
for (const rel of targets) {
  const file = path.join(__dirname, '..', rel);
  if (!fs.existsSync(file)) continue;
  let src = fs.readFileSync(file, 'utf8');
  if (src.includes(NEW)) {
    console.log('[patch-hexo-admin] already patched:', rel);
    continue;
  }
  if (!src.includes(OLD)) {
    console.log('[patch-hexo-admin] pattern not found (skipping):', rel);
    continue;
  }
  src = src.replace(OLD, NEW);
  fs.writeFileSync(file, src);
  console.log('[patch-hexo-admin] patched:', rel);
  patched++;
}

if (patched === 0) console.log('[patch-hexo-admin] nothing to do');

// Derives artifact.html (Claude Artifact page: no doctype/html/head/body,
// inline CSS, flat asset paths) from index.html. Run after any index/css edit:
//   node scripts/buildArtifact.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const index = readFileSync('index.html', 'utf8');
const css = readFileSync('src/ui.css', 'utf8');

const bodyMatch = index.match(/<body>([\s\S]*)<\/body>/);
if (!bodyMatch) throw new Error('no <body> found in index.html');

let body = bodyMatch[1].replace(
  /<script src="dist\/app\.js"><\/script>/,
  '<script src="app.js"></script>'
);

const out = '<title>Same Smell</title>\n<style>\n' + css + '\n</style>\n' + body.trim() + '\n';
writeFileSync('artifact.html', out);
console.log('artifact.html written,', out.length, 'bytes');

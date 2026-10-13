import { cp, writeFile, rm } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
// Remove only known generated directories inside this checkout before copying.
// This prevents obsolete hashed bundles from accumulating on repeat builds.
for (const name of ['_next','_not-found','404','about','contact','faq','how-it-works','privacy','terms','services','projects','images']) {
  const target = resolve(root, name);
  if (dirname(target) !== resolve(root)) throw new Error('Export target escaped checkout');
  await rm(target, { recursive: true, force: true });
}
await cp(root + 'web/out', root, { recursive: true });
await writeFile(root + '.nojekyll', '');
console.log('GitHub Pages export copied to repository root.');

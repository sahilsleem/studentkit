const fs = require('fs');
const regContent = fs.readFileSync('src/data/registry.ts', 'utf8');
const idMatches = [...regContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g)];
const slugs = idMatches.map(m => m[1]);
const duplicates = slugs.filter((item, index) => slugs.indexOf(item) !== index);
console.log('Duplicate slugs:', duplicates);

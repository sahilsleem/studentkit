// Phase 10.5: Robust SEO inventory generator
// Produces machine-readable JSON audit of all registry tools

const fs = require('fs');

const registryContent = fs.readFileSync('src/data/registry.ts', 'utf8');
const toolContentFile = fs.readFileSync('src/data/toolContent.ts', 'utf8');

// Find which IDs have content in toolContent.ts
const toolContentIdsRaw = [...toolContentFile.matchAll(/"([a-z0-9-]+)":\s*\{/g)];
const toolContentIds = new Set(toolContentIdsRaw.map(m => m[1]));

// Use a more robust regex using backreferences for quotes
// Matches: id, title, description, slug, category, subcategory
const toolBlockRegex = /\{\s*id:\s*(["'])(.+?)\1,\s*title:\s*(["'])(.+?)\3,\s*description:\s*(["'])(.+?)\5,\s*slug:\s*(["'])(.+?)\7,\s*category:\s*(["'])(.+?)\9,(?:\s*subcategory:\s*(["'])(.+?)\11,)?/g;

const tools = [];
let match;
while ((match = toolBlockRegex.exec(registryContent)) !== null) {
  const id = match[2];
  const title = match[4];
  const desc = match[6];
  const slug = match[8];
  const category = match[10];
  const subcategory = match[12] || '';
  
  const context = registryContent.slice(match.index, match.index + 1200);
  
  const aliasMatch = context.match(/aliases:\s*(\[[^\]]*\])/s);
  const keywordMatch = context.match(/keywords:\s*(\[[^\]]*\])/s);
  const seoTitleMatch = context.match(/seoTitle:\s*(["'])(.+?)\1/);
  const componentMatch = context.match(/component:\s*(["'])(.+?)\1/);
  const formulaMatch = context.match(/expression:\s*(["'])(.+?)\1/);
  const relatedMatch = context.match(/related:\s*(\[[^\]]*\])/s);

  let aliases = [];
  try { if (aliasMatch) aliases = JSON.parse(aliasMatch[1]); } catch {}

  let keywords = [];
  try { if (keywordMatch) keywords = JSON.parse(keywordMatch[1]); } catch {}
  
  let related = [];
  try { if (relatedMatch) related = JSON.parse(relatedMatch[1]); } catch {}

  const hasContent = toolContentIds.has(id);
  
  const distFile = `dist/tools/${slug}/index.html`;
  let hasFormula = false;
  let hasExample = false;
  let hasFAQ = false;
  if (fs.existsSync(distFile)) {
    const html = fs.readFileSync(distFile, 'utf8');
    hasFormula = html.includes('Formula') || html.includes('formula');
    hasExample = html.includes('Worked Example') || html.includes('example');
    hasFAQ = html.includes('Frequently Asked') || html.includes('FAQ');
  }

  tools.push({
    slug,
    id,
    title,
    description: desc,
    category,
    subcategory,
    seoTitle: seoTitleMatch ? seoTitleMatch[2] : title,
    aliases,
    keywords,
    related,
    hasContent,
    hasFormula,
    hasExample,
    hasFAQ,
    component: componentMatch ? componentMatch[2] : (formulaMatch ? 'FormulaCalculator' : 'Unknown'),
    canonical: `https://studentkit.in/tools/${slug}` // Updated canonical to .in
  });
}

console.log(`Total tools parsed: ${tools.length}`);

fs.writeFileSync('scripts/phase10-inventory.json', JSON.stringify(tools, null, 2));

const summary = {
  totalTools: tools.length,
  withContent: tools.filter(t => t.hasContent).length,
  withAliases: tools.filter(t => t.aliases.length > 0).length,
  withKeywords: tools.filter(t => t.keywords.length > 0).length,
  withFormula: tools.filter(t => t.hasFormula).length,
  withFAQ: tools.filter(t => t.hasFAQ).length,
  withRelated: tools.filter(t => t.related.length > 0).length,
  byCategory: tools.reduce((acc, t) => { acc[t.category] = (acc[t.category] || 0) + 1; return acc; }, {})
};

fs.writeFileSync('scripts/phase10-summary.json', JSON.stringify(summary, null, 2));
console.log('Summary:', JSON.stringify(summary, null, 2));

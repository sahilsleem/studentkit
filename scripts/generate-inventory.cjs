// Phase 10: SEO inventory generator
// Produces machine-readable JSON audit of all registry tools

const fs = require('fs');

// Extract registry tools via text parsing (avoids ESM import issues)
const registryContent = fs.readFileSync('src/data/registry.ts', 'utf8');
const toolContentFile = fs.readFileSync('src/data/toolContent.ts', 'utf8');

// Parse tool IDs from registry 
const idMatches = [...registryContent.matchAll(/id:\s*["']([^"']+)["']/g)];
const titleMatches = [...registryContent.matchAll(/title:\s*["']([^"']+)["']/g)];
const categoryMatches = [...registryContent.matchAll(/category:\s*["']([^"']+)["']/g)];
const subcategoryMatches = [...registryContent.matchAll(/subcategory:\s*["']([^"']+)["']/g)];
const descMatches = [...registryContent.matchAll(/description:\s*["']([^"']+)["']/g)];
const aliasMatches = [...registryContent.matchAll(/aliases:\s*(\[[^\]]*\])/gs)];
const keywordMatches = [...registryContent.matchAll(/keywords:\s*(\[[^\]]*\])/gs)];
const seoTitleMatches = [...registryContent.matchAll(/seoTitle:\s*["']([^"']+)["']/g)];
const componentMatches = [...registryContent.matchAll(/component:\s*["']([^"']+)["']/g)];

// Find which IDs have content in toolContent.ts
const toolContentIdsRaw = [...toolContentFile.matchAll(/"([a-z0-9-]+)":\s*\{/g)];
const toolContentIds = new Set(toolContentIdsRaw.map(m => m[1]));

// Build inventory
// Registry entries are a mix of tool IDs and other fields - we need to isolate tool objects
// Tool objects start with id: field which also appear in the categories array
// Categories: academic, mathematics, science, engineering, etc.
const categoryIds = new Set(['academic', 'mathematics', 'science', 'engineering', 'computer-science', 'study-productivity', 'date-time', 'finance', 'converters', 'files-images', 'random-utilities']);

const allIds = idMatches.filter(m => !categoryIds.has(m[1]));

// Build title map by position
const titleMap = new Map();
titleMatches.forEach(m => {
  // Titles appear right after IDs approximately - use index proximity
  titleMap.set(m.index, m[1]);
});

// Simple sequential approach: walk tool blocks
// We know tools array is defined, extract tool-like objects by finding { id: "...", title: "..." } patterns
const toolBlockRegex = /\{\s*id:\s*["']([^"']+)["'],\s*title:\s*["']([^"']+)["'],\s*description:\s*["']([^"']+)["'],\s*slug:\s*["']([^"']+)["'],\s*category:\s*["']([^"']+)["'],(?:\s*subcategory:\s*["']([^"']+)["'],)?/g;

const tools = [];
let match;
while ((match = toolBlockRegex.exec(registryContent)) !== null) {
  const id = match[1];
  const title = match[2];
  const desc = match[3];
  const slug = match[4];
  const category = match[5];
  const subcategory = match[6] || '';
  
  // Grab the surrounding context (500 chars after match) to check for aliases, keywords, etc.
  const context = registryContent.slice(match.index, match.index + 800);
  
  const aliasMatch = context.match(/aliases:\s*(\[[^\]]*\])/s);
  const keywordMatch = context.match(/keywords:\s*(\[[^\]]*\])/s);
  const seoTitleMatch = context.match(/seoTitle:\s*["']([^"']+)["']/);
  const componentMatch = context.match(/component:\s*["']([^"']+)["']/);
  const formulaMatch = context.match(/expression:\s*["']([^"']+)["']/);
  const relatedMatch = context.match(/related:\s*(\[[^\]]*\])/s);

  let aliases = [];
  try { if (aliasMatch) aliases = JSON.parse(aliasMatch[1]); } catch {}

  let keywords = [];
  try { if (keywordMatch) keywords = JSON.parse(keywordMatch[1]); } catch {}
  
  let related = [];
  try { if (relatedMatch) related = JSON.parse(relatedMatch[1]); } catch {}

  const hasContent = toolContentIds.has(id);
  
  // Check dist HTML for content markers
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
    seoTitle: seoTitleMatch ? seoTitleMatch[1] : title,
    aliases,
    keywords,
    related,
    hasContent,
    hasFormula,
    hasExample,
    hasFAQ,
    component: componentMatch ? componentMatch[1] : (formulaMatch ? 'FormulaCalculator' : 'Unknown'),
    canonical: `https://studentkit.pages.dev/tools/${slug}`
  });
}

console.log(`Total tools parsed: ${tools.length}`);

// Write full inventory
fs.writeFileSync('scripts/phase10-inventory.json', JSON.stringify(tools, null, 2));

// Summary stats
const withContent = tools.filter(t => t.hasContent).length;
const withAliases = tools.filter(t => t.aliases.length > 0).length;
const withKeywords = tools.filter(t => t.keywords.length > 0).length;
const withFormula = tools.filter(t => t.hasFormula).length;
const withFAQ = tools.filter(t => t.hasFAQ).length;
const withRelated = tools.filter(t => t.related.length > 0).length;

const categories = {};
tools.forEach(t => {
  categories[t.category] = (categories[t.category] || 0) + 1;
});

const summary = {
  totalTools: tools.length,
  withContent,
  withAliases,
  withKeywords,
  withFormula,
  withFAQ,
  withRelated,
  byCategory: categories
};

fs.writeFileSync('scripts/phase10-summary.json', JSON.stringify(summary, null, 2));
console.log('Summary:', JSON.stringify(summary, null, 2));

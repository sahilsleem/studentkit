// Phase 10: Internal search quality test
// Tests realistic natural-language queries against the registry aliases + title/description

const fs = require('fs');

const inventory = JSON.parse(fs.readFileSync('scripts/phase10-inventory.json', 'utf8'));

function searchTools(query, topN = 3) {
  const q = query.toLowerCase();
  const results = inventory.map(tool => {
    let score = 0;
    const title = (tool.title || '').toLowerCase();
    const desc = (tool.description || '').toLowerCase();
    const cat = (tool.category || '').toLowerCase();
    const aliases = (tool.aliases || []).map(a => a.toLowerCase());
    
    // Exact title match
    if (title === q) score += 100;
    // Title contains full query
    if (title.includes(q)) score += 50;
    // Query contains title
    if (q.includes(title)) score += 30;
    // Alias exact match
    if (aliases.some(a => a === q)) score += 90;
    // Alias includes query
    if (aliases.some(a => a.includes(q) || q.includes(a))) score += 40;
    // Description match
    if (desc.includes(q)) score += 20;
    // Category match
    if (cat.includes(q)) score += 10;
    // Word-level matches
    const words = q.split(/\s+/).filter(w => w.length > 3);
    words.forEach(w => {
      if (title.includes(w)) score += 8;
      if (aliases.some(a => a.includes(w))) score += 6;
      if (desc.includes(w)) score += 3;
    });
    
    return { tool, score };
  }).filter(r => r.score > 0);
  
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, topN).map(r => ({
    title: r.tool.title,
    slug: r.tool.slug,
    score: r.score
  }));
}

const testQueries = [
  // Academic
  { query: "calculate my gpa", expectedSlug: "gpa-calculator" },
  { query: "convert cgpa to percentage", expectedSlug: "cgpa-to-percentage" },
  { query: "how many classes do i need to attend", expectedSlug: "required-attendance" },
  { query: "classes to miss safely", expectedSlug: "classes-to-miss" },
  { query: "marks needed to pass", expectedSlug: "required-marks" },
  { query: "check my attendance", expectedSlug: "attendance-calculator" },
  // Mathematics
  { query: "solve quadratic equation", expectedSlug: "quadratic-equation-solver" },
  { query: "find percentage increase", expectedSlug: "percentage-change" },
  { query: "calculate standard deviation", expectedSlug: "standard-deviation-calculator" },
  { query: "simplify fraction", expectedSlug: "fraction-calculator" },
  // Physics
  { query: "calculate force", expectedSlug: "force-calculator" },
  { query: "calculate kinetic energy", expectedSlug: "kinetic-energy-calculator" },
  { query: "ohms law", expectedSlug: "ohms-law-voltage" },
  { query: "ideal gas equation", expectedSlug: "ideal-gas-law-calculator" },
  // Chemistry
  { query: "calculate molar mass", expectedSlug: "molar-mass-calculator" },
  { query: "calculate molarity", expectedSlug: "molarity-calculator" },
  { query: "balance chemical equation", expectedSlug: "reaction-balancer" },
  { query: "calculate ph", expectedSlug: "ph-calculator" },
  // Biology
  { query: "punnett square", expectedSlug: "punnett-square" },
  { query: "dna complement", expectedSlug: "dna-complement" },
  { query: "calculate bmi", expectedSlug: "bmi-calculator" },
  // Statistics
  { query: "calculate mean average", expectedSlug: "mean-calculator" },
  { query: "normal distribution", expectedSlug: "normal-distribution-calculator" },
];

console.log('=== INTERNAL SEARCH QUALITY AUDIT ===\n');
let passed = 0;
let failed = 0;
const failedCases = [];

testQueries.forEach(({ query, expectedSlug }) => {
  const results = searchTools(query, 5);
  const topSlug = results[0]?.slug;
  const inTop3 = results.some(r => r.slug === expectedSlug);
  const status = topSlug === expectedSlug ? '✅ TOP' : (inTop3 ? '⚠️  IN_TOP3' : '❌ MISS');
  
  if (topSlug === expectedSlug || inTop3) {
    passed++;
  } else {
    failed++;
    failedCases.push({ query, expectedSlug, gotTop: topSlug });
  }
  
  console.log(`${status}  Query: "${query}"`);
  if (topSlug !== expectedSlug) {
    console.log(`       Expected: ${expectedSlug} | Got: ${results.map(r => r.slug).join(', ')}`);
  }
});

console.log(`\n--- Results: ${passed}/${testQueries.length} passed, ${failed} missed ---`);

if (failedCases.length > 0) {
  console.log('\n❌ FAILED CASES (need alias improvements):');
  failedCases.forEach(f => console.log(`  "${f.query}" → expected: ${f.expectedSlug}, got: ${f.gotTop}`));
}

fs.writeFileSync('scripts/phase10-search-test.json', JSON.stringify({
  total: testQueries.length,
  passed,
  failed,
  failedCases
}, null, 2));

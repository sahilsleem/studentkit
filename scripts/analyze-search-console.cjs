// Phase 10: Search Console readiness checker + heuristic opportunity analyzer
// 
// Usage:
//   node scripts/analyze-search-console.cjs [path-to-gsc-export.csv]
//
// Without a GSC CSV: runs heuristic-only analysis on the inventory
// With a GSC CSV:    cross-references real query data for prioritized opportunities
//
// GSC CSV format expected (standard export):
//   Query, Page, Clicks, Impressions, CTR, Position

const fs = require('fs');
const path = require('path');

// --- Load inventory ---
const inventoryPath = path.join(__dirname, 'phase10-inventory.json');
if (!fs.existsSync(inventoryPath)) {
  console.error('Inventory not found. Run generate-inventory.cjs first.');
  process.exit(1);
}
const inventory = JSON.parse(fs.readFileSync(inventoryPath, 'utf8'));
const inventoryBySlug = Object.fromEntries(inventory.map(t => [t.slug, t]));

// --- Check for GSC CSV ---
const gscFile = process.argv[2];
let gscData = null;

if (gscFile && fs.existsSync(gscFile)) {
  console.log(`\n✅ REAL SEARCH CONSOLE DATA AVAILABLE: ${gscFile}`);
  const raw = fs.readFileSync(gscFile, 'utf8');
  const lines = raw.split('\n').filter(l => l.trim());
  const headers = lines[0].toLowerCase().split(',').map(h => h.trim().replace(/^"|"$/g, ''));
  gscData = lines.slice(1).map(line => {
    const vals = line.match(/(".*?"|[^,]+)/g) || [];
    const row = {};
    headers.forEach((h, i) => {
      row[h] = (vals[i] || '').replace(/^"|"$/g, '').trim();
    });
    return row;
  }).filter(r => r.query);
  console.log(`   Loaded ${gscData.length} query rows.\n`);
} else {
  console.log('\n⚠️  NO SEARCH CONSOLE DATA AVAILABLE');
  console.log('   Running heuristic-only analysis.');
  console.log('   To use real data: node scripts/analyze-search-console.cjs gsc-export.csv\n');
  console.log('   HOW TO EXPORT FROM GOOGLE SEARCH CONSOLE:');
  console.log('   1. Go to https://search.google.com/search-console/');
  console.log('   2. Select your property (studentkit.in or studentkit.pages.dev)');
  console.log('   3. Click "Performance" → "Search results"');
  console.log('   4. Set date range (recommend: last 90 days)');
  console.log('   5. Click the Export button (top right) → Download CSV');
  console.log('   6. Place the CSV in your project root');
  console.log('   7. Run: node scripts/analyze-search-console.cjs gsc-export.csv\n');
}

// ============================================================
// HEURISTIC SCORING MODEL
// ============================================================
// Scores are HEURISTIC ESTIMATES based on:
//   - Tool category importance (student need frequency)
//   - Whether it has rich content (formula, FAQ, example)
//   - Whether aliases are populated
//   - Whether it has related-tool links
//
// These are NOT real search volumes or real rankings.
// Label: HEURISTIC

const CATEGORY_DEMAND = {
  'Academic': 95,
  'Mathematics': 85,
  'Statistics': 80,
  'Physics': 75,
  'Chemistry': 70,
  'Biology': 60,
  'Converters': 65,
  'Computer Science': 55,
  'Date & Time': 50,
  'Study & Productivity': 50,
  'Discrete Mathematics': 40,
  'Linear Algebra': 45,
  'Numerical Methods': 35,
  'Student Utilities': 45,
  'Science': 50,
  'Random & Utilities': 25
};

const HIGH_VALUE_SLUGS = new Set([
  'gpa-calculator', 'cgpa-to-percentage', 'percentage-to-cgpa', 'percentage-calculator',
  'attendance-calculator', 'required-marks', 'marks-calculator',
  'scientific-calculator', 'fraction-calculator', 'quadratic-equation', 'standard-deviation',
  'average-calculator', 'probability-calculator', 'percentage-change', 'mean-median-mode',
  'normal-distribution-calculator', 'binomial-distribution-calculator',
  'force-calculator', 'kinetic-energy', 'potential-energy', 'ohms-law-voltage',
  'momentum-calculator', 'projectile-motion', 'ideal-gas-law',
  'molar-mass', 'molarity-calculator', 'dilution-calculator', 'ph-calculator',
  'chemical-equation-balancer', 'periodic-table',
  'punnett-square', 'dna-complement', 'bmi-calculator', 'bmr-calculator',
  'population-growth', 'unit-converter', 'date-difference'
]);

function heuristicScore(tool) {
  let score = CATEGORY_DEMAND[tool.category] || 30;
  if (HIGH_VALUE_SLUGS.has(tool.slug)) score += 30;
  if (tool.hasContent) score += 15;
  if (tool.hasFormula) score += 10;
  if (tool.hasFAQ) score += 10;
  if (tool.aliases.length > 0) score += 8;
  if (tool.related.length > 0) score += 5;
  if (!tool.hasContent) score -= 5; // penalize thin pages
  return score;
}

// Score all tools
const scored = inventory.map(t => ({ ...t, heuristicScore: heuristicScore(t) }));
scored.sort((a, b) => b.heuristicScore - a.heuristicScore);

// ============================================================
// OPPORTUNITY GROUPS (Heuristic when no GSC data)
// ============================================================

const report = {
  generatedAt: new Date().toISOString(),
  dataSource: gscData ? 'REAL_SEARCH_CONSOLE' : 'HEURISTIC_ESTIMATE',
  disclaimer: gscData 
    ? 'Analysis based on actual Google Search Console data.'
    : 'All scores are HEURISTIC ESTIMATES. They reflect likely student demand based on category importance and content quality — NOT real search volumes or real rankings.',
  totalTools: inventory.length,
  withContent: inventory.filter(t => t.hasContent).length,
  withAliases: inventory.filter(t => t.aliases.length > 0).length,
  withFAQ: inventory.filter(t => t.hasFAQ).length,
  opportunities: {}
};

// GROUP 1: Top 30 by heuristic score (prioritized work targets)
report.opportunities.highPriority = scored.slice(0, 30).map(t => ({
  slug: t.slug,
  title: t.title,
  category: t.category,
  heuristicScore: t.heuristicScore,
  hasContent: t.hasContent,
  hasFormula: t.hasFormula,
  hasFAQ: t.hasFAQ,
  aliasCount: t.aliases.length,
  gaps: [
    !t.hasContent && 'NO_CONTENT',
    !t.hasFAQ && 'NO_FAQ',
    t.aliases.length === 0 && 'NO_ALIASES',
    !t.hasFormula && 'NO_FORMULA'
  ].filter(Boolean)
}));

// GROUP 2: High importance but missing content (Tier B → need upgrade)
report.opportunities.needsContent = scored
  .filter(t => !t.hasContent && (CATEGORY_DEMAND[t.category] || 0) >= 65)
  .slice(0, 30)
  .map(t => ({
    slug: t.slug,
    title: t.title,
    category: t.category,
    heuristicScore: t.heuristicScore,
    missingAliases: t.aliases.length === 0,
    missingFAQ: !t.hasFAQ
  }));

// GROUP 3: Already have content — protect/review
report.opportunities.strongPages = scored
  .filter(t => t.hasContent && t.hasFAQ)
  .map(t => ({ slug: t.slug, title: t.title, category: t.category }));

// GROUP 4: Category coverage gaps
const byCat = {};
inventory.forEach(t => {
  if (!byCat[t.category]) byCat[t.category] = { total: 0, withContent: 0, withAliases: 0 };
  byCat[t.category].total++;
  if (t.hasContent) byCat[t.category].withContent++;
  if (t.aliases.length > 0) byCat[t.category].withAliases++;
});
report.opportunities.categoryGaps = Object.entries(byCat)
  .map(([cat, stats]) => ({
    category: cat,
    total: stats.total,
    contentCoverage: `${stats.withContent}/${stats.total}`,
    aliasCoverage: `${stats.withAliases}/${stats.total}`,
    contentPct: Math.round(stats.withContent / stats.total * 100)
  }))
  .sort((a, b) => (CATEGORY_DEMAND[b.category] || 0) - (CATEGORY_DEMAND[a.category] || 0));

// GROUP 5: GSC-specific analysis (only when real data available)
if (gscData) {
  // High impressions, low CTR
  const threshold_imp = 500;
  const threshold_ctr = 0.02;
  report.opportunities.highImpressionsLowCTR = gscData
    .filter(r => parseFloat(r.impressions) >= threshold_imp && parseFloat(r.ctr) < threshold_ctr)
    .sort((a, b) => parseFloat(b.impressions) - parseFloat(a.impressions))
    .slice(0, 20)
    .map(r => ({ query: r.query, page: r.page, impressions: r.impressions, ctr: r.ctr, position: r.position }));
    
  // Striking distance (positions 4-20)
  report.opportunities.strikingDistance = gscData
    .filter(r => parseFloat(r.position) >= 4 && parseFloat(r.position) <= 20 && parseFloat(r.impressions) >= 100)
    .sort((a, b) => parseFloat(b.impressions) - parseFloat(a.impressions))
    .slice(0, 30)
    .map(r => ({ query: r.query, page: r.page, impressions: r.impressions, clicks: r.clicks, position: r.position }));
    
  // Already winning (top 3)
  report.opportunities.alreadyWinning = gscData
    .filter(r => parseFloat(r.position) <= 3 && parseFloat(r.impressions) >= 100)
    .sort((a, b) => parseFloat(b.impressions) - parseFloat(a.impressions))
    .slice(0, 20)
    .map(r => ({ query: r.query, page: r.page, impressions: r.impressions, position: r.position }));
}

// Write report
const outPath = 'scripts/phase10-opportunities.json';
fs.writeFileSync(outPath, JSON.stringify(report, null, 2));

// Human-readable summary
console.log('========================================');
console.log('PHASE 10 SEO OPPORTUNITY ANALYSIS');
console.log('========================================');
console.log(`Data source: ${report.dataSource}`);
console.log(`Total tools: ${report.totalTools}`);
console.log(`With content blocks: ${report.withContent}`);
console.log(`With aliases: ${report.withAliases}`);
console.log(`With FAQs: ${report.withFAQ}\n`);

console.log('--- TOP 10 HIGH-PRIORITY TARGETS (Heuristic) ---');
report.opportunities.highPriority.slice(0, 10).forEach((t, i) => {
  const gaps = t.gaps.length > 0 ? ` | Gaps: ${t.gaps.join(', ')}` : ' | ✓ Well-covered';
  console.log(`  ${i+1}. [${t.heuristicScore}] ${t.title} (${t.category})${gaps}`);
});

console.log('\n--- CATEGORY CONTENT GAPS ---');
report.opportunities.categoryGaps.forEach(c => {
  const bar = '█'.repeat(Math.round(c.contentPct / 10)) + '░'.repeat(10 - Math.round(c.contentPct / 10));
  console.log(`  ${c.category.padEnd(22)} ${bar} ${c.contentCoverage} pages have content`);
});

console.log(`\n✅ Full report written to: ${outPath}`);
if (!gscData) {
  console.log('\n📌 NEXT STEP: Export Google Search Console data and re-run:');
  console.log('   node scripts/analyze-search-console.cjs gsc-export.csv');
}

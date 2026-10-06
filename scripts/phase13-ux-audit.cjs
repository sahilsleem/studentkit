const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    if (fs.statSync(file).isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.astro') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src');
const tools = files.filter(f => f.includes('src\\components\\tools') || f.includes('src/components/tools') || f.includes('src\\components\\ui') || f.includes('src/components/ui'));

const issues = {
  missingReset: [],
  missingLabelsOnInputs: [],
  unclearButtons: [],
  alertOccurrences: [],
  dangerousInnerHTML: [],
  missingResultSection: [],
};

const requiresReset = [
  'gpa-calculator', 'cgpa-to-percentage', 'percentage-calculator', 
  'FormulaCalculator', 'UnitAwareCalculator', 'MatrixCalculator',
  'ScientificCalculator'
];

tools.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  
  // 1. Missing Reset Button
  const isTarget = requiresReset.some(name => f.includes(name));
  if (isTarget && content.includes('<form') && !content.includes('type="reset"') && !content.match(/reset[A-Za-z0-9_-]*btn/i) && !content.includes('Reset') && !content.includes('Clear')) {
    issues.missingReset.push(f);
  }

  // 2. Alert occurrences
  if (content.match(/\balert\(/)) {
    issues.alertOccurrences.push(f);
  }

  // 3. Unsafe innerHTML
  if (content.match(/\.innerHTML\s*=/)) {
    // Whitelist intentionally static/safe uses
    if (!f.includes('PunnettSquare') && !f.includes('TruthTable') && !f.includes('Matrix') && !f.includes('PeriodicTable') && !f.includes('BiologyReference') && !f.includes('ChemistryReference') && !f.includes('ChemicalFormulaCalculator') && !f.includes('percentage-change') && !f.includes('UnitCircle')) {
      issues.dangerousInnerHTML.push(f);
    }
  }
  
  // 4. Inputs without IDs (breaks labels)
  // Check if there are inputs without 'id' attribute
  const inputMatches = content.match(/<input[^>]+>/g) || [];
  let hasBadInput = false;
  inputMatches.forEach(inp => {
    if (!inp.includes('type="submit"') && !inp.includes('type="reset"') && !inp.includes('type="button"')) {
      if (!inp.includes('id=')) {
         hasBadInput = true;
      }
    }
  });
  if (hasBadInput) issues.missingLabelsOnInputs.push(f);
  
});

console.log(JSON.stringify({
  missingReset: issues.missingReset.length,
  missingLabelsOnInputs: issues.missingLabelsOnInputs.length,
  alertOccurrences: issues.alertOccurrences.length,
  dangerousInnerHTML: issues.dangerousInnerHTML.length,
  details: issues
}, null, 2));

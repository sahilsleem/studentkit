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

const issues = {
  dangerousEval: [],
  dangerousInnerHTML: [],
  duplicateRegistryIds: [],
  missingSubmitHandlers: [],
  missingSEO: []
};

// 1. Registry duplicate check
const regPath = 'src/data/registry.ts';
if (fs.existsSync(regPath)) {
  const regContent = fs.readFileSync(regPath, 'utf8');
  const idMatches = [...regContent.matchAll(/id:\s*['"]([^'"]+)['"]/g)];
  const ids = idMatches.map(m => m[1]);
  const duplicates = ids.filter((item, index) => ids.indexOf(item) !== index);
  if (duplicates.length > 0) {
    issues.duplicateRegistryIds = [...new Set(duplicates)];
  }
}

// 2. Scan components
const tools = files.filter(f => f.includes('src\\components\\tools') || f.includes('src/components/tools'));
tools.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  
  if (content.match(/\beval\(/)) {
    issues.dangerousEval.push(f);
  }
  
  // Checking innerHTML. (Some are safe like Punnett, Matrix, TruthTable - but let's list them to review)
  if (content.match(/\.innerHTML\s*=/)) {
    if (!f.includes('PunnettSquare') && !f.includes('TruthTable') && !f.includes('Matrix') && !f.includes('PeriodicTable') && !f.includes('BiologyReference') && !f.includes('ChemistryReference')) {
      issues.dangerousInnerHTML.push(f);
    }
  }
  
  // Check if a tool has <form> but no event listener for it (broken tool)
  if (content.includes('<form') && !content.includes('addEventListener') && !content.includes('data-config')) {
    // FormulaCalculator and UnitAwareCalculator use data-config
    issues.missingSubmitHandlers.push(f);
  }
});

console.log(JSON.stringify(issues, null, 2));

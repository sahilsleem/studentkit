// Fix 10 search miss cases via targeted alias injection
const fs = require('fs');

let reg = fs.readFileSync('src/data/registry.ts', 'utf8');

// Map slug → aliases to inject
const fixes = {
  "quadratic-equation": ["solve quadratic equation", "quadratic formula calculator", "find roots of equation"],
  "percentage-change": ["find percentage increase", "percentage increase calculator", "calculate percent change"],
  "standard-deviation": ["calculate standard deviation", "sample std dev", "population standard deviation"],
  "kinetic-energy": ["calculate kinetic energy", "ke calculator", "kinetic energy formula"],
  "ohms-law-voltage": ["ohms law", "ohm law calculator", "voltage current resistance"],
  "ideal-gas-law": ["ideal gas equation", "pv equals nrt", "gas law calculator"],
  "molar-mass": ["calculate molar mass", "molecular weight calculator", "molar mass formula"],
  "chemical-equation-balancer": ["balance chemical equation", "equation balancer", "balance reactions"],
  "bmi-calculator": ["calculate bmi", "body mass index calculator", "bmi formula"],
  "mean-median-mode": ["mean median mode calculator", "find mean median mode", "average median mode"]
};

// For each fix, find the tool block and inject aliases
Object.entries(fixes).forEach(([slug, aliases]) => {
  // Check if aliases already exist for this tool
  const blockSearch = `id: "${slug}"`;
  const idx = reg.indexOf(blockSearch);
  if (idx === -1) {
    console.log(`Slug not found: ${slug}`);
    return;
  }
  
  // Check next 400 chars for existing aliases
  const context = reg.slice(idx, idx + 500);
  if (context.includes('aliases:')) {
    console.log(`Already has aliases: ${slug}`);
    return;
  }
  
  // Find the slug: line and inject after category/subcategory
  // Strategy: find the icon: line and inject aliases before it
  const slugLine = `slug: "${slug}"`;
  const slugIdx = reg.indexOf(slugLine, idx);
  if (slugIdx === -1) return;
  
  // Find the icon: line after slug
  const iconIdx = reg.indexOf('icon:', slugIdx);
  if (iconIdx === -1) return;
  
  // Find the last newline before icon:
  const lineStart = reg.lastIndexOf('\n', iconIdx);
  
  // Get the indentation of icon line
  const iconLine = reg.slice(lineStart + 1, iconIdx);
  const indent = iconLine.match(/^(\s*)/)[1];
  
  const aliasLine = `\n${indent}aliases: ${JSON.stringify(aliases)},`;
  reg = reg.slice(0, lineStart) + aliasLine + reg.slice(lineStart);
  console.log(`✅ Fixed aliases for: ${slug}`);
});

fs.writeFileSync('src/data/registry.ts', reg);
console.log('Done.');

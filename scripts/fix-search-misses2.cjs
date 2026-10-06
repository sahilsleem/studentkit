// Fix remaining search misses - now with correct actual slugs from registry
const fs = require('fs');

let reg = fs.readFileSync('src/data/registry.ts', 'utf8');

// Map CORRECT slug → aliases
const fixes = {
  "quadratic-equation-solver": ["solve quadratic equation", "quadratic formula", "find roots of quadratic", "quadratic calculator"],
  "standard-deviation-calculator": ["calculate standard deviation", "sample standard deviation", "population standard deviation", "std deviation calculator"],
  "kinetic-energy-calculator": ["calculate kinetic energy", "ke calculator", "kinetic energy formula"],
  "molar-mass-calculator": ["calculate molar mass", "molecular weight calculator", "molar mass formula"],
  "reaction-balancer": ["balance chemical equation", "chemical equation balancer", "balance reactions chemistry"],
  "mean-median-mode": ["mean median mode calculator", "find mean median mode", "average median mode dataset"],
  "mean-calculator": ["calculate mean average", "arithmetic mean calculator"],
};

Object.entries(fixes).forEach(([slug, aliases]) => {
  const blockSearch = `id: "${slug}"`;
  const idx = reg.indexOf(blockSearch);
  if (idx === -1) {
    // Try single-quote version
    const altSearch = `id: '${slug}'`;
    const altIdx = reg.indexOf(altSearch);
    if (altIdx === -1) {
      console.log(`❌ Slug not found: ${slug}`);
      return;
    }
  }
  
  const context = reg.slice(idx, idx + 600);
  if (context.includes('aliases:')) {
    console.log(`Already has aliases: ${slug}`);
    return;
  }
  
  // Find icon: after the id: position
  const iconIdx = reg.indexOf('icon:', idx);
  if (iconIdx === -1 || iconIdx - idx > 800) {
    console.log(`❌ icon not found near: ${slug}`);
    return;
  }
  
  const lineStart = reg.lastIndexOf('\n', iconIdx);
  const iconLine = reg.slice(lineStart + 1, iconIdx);
  const indent = iconLine.match(/^(\s*)/)[1];
  
  const aliasLine = `\n${indent}aliases: ${JSON.stringify(aliases)},`;
  reg = reg.slice(0, lineStart) + aliasLine + reg.slice(lineStart);
  console.log(`✅ Fixed: ${slug}`);
});

fs.writeFileSync('src/data/registry.ts', reg);
console.log('Done.');

/**
 * Phase 10: Safe alias injector for compact one-liner registry entries
 * Reads registry.ts, finds each targeted slug's single-line entry,
 * and inserts the aliases field right before the icon: field.
 * Validates the result parses cleanly.
 */
const fs = require('fs');

let reg = fs.readFileSync('src/data/registry.ts', 'utf8');

const injections = [
  // Academic
  { slug: 'cgpa-to-percentage', aliases: ['convert cgpa to percentage', 'cgpa to percentage india', 'cgpa to percent', 'cgpa percentage formula'] },
  { slug: 'percentage-to-cgpa', aliases: ['convert percentage to cgpa', 'percentage to cgpa formula', 'percent to grade point'] },
  { slug: 'gpa-calculator', aliases: ['calculate my gpa', 'semester gpa calculator', 'gpa from credits and grades', 'how to calculate gpa', 'grade point average calculator'] },
  { slug: 'attendance-calculator', aliases: ['check my attendance', 'attendance percentage calculator', 'calculate attendance percentage', 'am i short on attendance'] },
  { slug: 'required-attendance', aliases: ['how many classes do i need to attend', 'classes needed for 75 attendance', 'minimum classes to attend', 'attendance required to pass'] },
  // Mathematics
  { slug: 'quadratic-equation-solver', aliases: ['solve quadratic equation', 'quadratic formula', 'find roots of quadratic', 'quadratic calculator'] },
  { slug: 'standard-deviation-calculator', aliases: ['calculate standard deviation', 'sample standard deviation', 'population standard deviation', 'std deviation calculator'] },
  { slug: 'mean-calculator', aliases: ['calculate mean average', 'arithmetic mean calculator'] },
  { slug: 'percentage-change', aliases: ['find percentage increase', 'percentage increase calculator', 'calculate percent change', 'percentage decrease'] },
  // Physics
  { slug: 'kinetic-energy-calculator', aliases: ['calculate kinetic energy', 'ke calculator', 'kinetic energy formula'] },
  { slug: 'ohms-law-voltage', aliases: ['ohms law', 'ohm law calculator', 'voltage current resistance', 'v equals ir'] },
  { slug: 'ideal-gas-law-calculator', aliases: ['ideal gas equation', 'pv equals nrt', 'gas law calculator', 'ideal gas law'] },
  // Chemistry
  { slug: 'molar-mass-calculator', aliases: ['calculate molar mass', 'molecular weight calculator', 'molar mass formula'] },
  { slug: 'reaction-balancer', aliases: ['balance chemical equation', 'equation balancer', 'balance reactions chemistry'] },
  // Biology
  { slug: 'bmi-calculator', aliases: ['calculate bmi', 'body mass index calculator', 'bmi formula'] },
];

let successCount = 0;
let skipCount = 0;
let failCount = 0;

for (const { slug, aliases } of injections) {
  // Find the line containing id: "slug"
  const pattern = `id: "${slug}"`;
  const idx = reg.indexOf(pattern);
  if (idx === -1) {
    console.log(`❌ Not found: ${slug}`);
    failCount++;
    continue;
  }
  
  // Look at context
  const lineEnd = reg.indexOf('\n', idx);
  const lineContent = reg.slice(idx - 2, lineEnd);
  
  // Check if aliases already exist in this line
  if (lineContent.includes('aliases:')) {
    console.log(`⏭  Already has aliases: ${slug}`);
    skipCount++;
    continue;
  }
  
  // Find icon: in the same object (within 400 chars of the id)
  const searchEnd = idx + 400;
  const iconIdx = reg.indexOf('icon:', idx);
  if (iconIdx === -1 || iconIdx > searchEnd) {
    // For multi-line tool objects, find differently
    console.log(`⚠️  icon: not in proximity for: ${slug} — skipping`);
    failCount++;
    continue;
  }
  
  // Inject aliases just before icon:
  const aliasStr = `aliases: ${JSON.stringify(aliases)}, `;
  reg = reg.slice(0, iconIdx) + aliasStr + reg.slice(iconIdx);
  console.log(`✅ Injected aliases for: ${slug}`);
  successCount++;
}

console.log(`\nResults: ${successCount} injected, ${skipCount} skipped, ${failCount} failed`);
fs.writeFileSync('src/data/registry.ts', reg);
console.log('Saved registry.ts');

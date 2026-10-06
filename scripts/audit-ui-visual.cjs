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
    } else if (file.endsWith('.astro')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src/components/tools').concat(walk('src/components/ui'));
let issues = {
  inconsistentInputs: [],
  inconsistentSelects: [],
  missingResultSection: [],
  blueRemnants: []
};

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  
  // Inputs missing the standard border/focus ring
  if (content.match(/<input[^>]*type="(text|number)"/)) {
    if (!content.includes('border-gray-300') || !content.includes('focus:ring-emerald-500') || !content.includes('rounded-')) {
      // Exclude reading-time and specialized
      if (!f.includes('reading-time') && !f.includes('pomodoro')) issues.inconsistentInputs.push(f);
    }
  }

  // Selects missing standard classes
  if (content.includes('<select')) {
    if (!content.includes('border-gray-300') || !content.includes('focus:ring-emerald-500')) {
      issues.inconsistentSelects.push(f);
    }
  }
  
  // Legacy blue remnants (except pomodoro/medical)
  if (content.match(/bg-blue-[34567]00/) && !f.includes('pomodoro') && !f.includes('Biology') && !f.includes('ChemistryReference')) {
     issues.blueRemnants.push(f);
  }
});

console.log(JSON.stringify({
  inconsistentInputs: issues.inconsistentInputs.length,
  inconsistentSelects: issues.inconsistentSelects.length,
  blueRemnants: issues.blueRemnants.length,
  details: issues
}, null, 2));

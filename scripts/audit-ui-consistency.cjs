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
  blueButtons: [],
  duplicateHeaders: [],
  unwrappedTables: [],
  inconsistentInputs: [],
  inconsistentCards: []
};

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  
  // Generic blue buttons (not semantic)
  if (content.match(/bg-blue-[567]00[^>]*>.*?<\/button>/i) && !f.includes('pomodoro')) issues.blueButtons.push(f);
  
  // Duplicate headers (internal h2/h3 with tool.title)
  if (content.match(/<h[23][^>]*>\{tool\.title\}<\/h[23]>/)) issues.duplicateHeaders.push(f);
  
  // Unwrapped tables (<table> without overflow-x-auto parent)
  if (content.includes('<table')) {
    // If it has table but no overflow-x-auto anywhere near it
    if (!content.includes('overflow-x-auto')) issues.unwrappedTables.push(f);
  }
  
  // Inconsistent inputs (missing focus:ring-emerald)
  if (content.includes('<input') && content.includes('focus:ring-') && !content.includes('focus:ring-emerald-500')) {
     issues.inconsistentInputs.push(f);
  }
  
  // Cards without the standard rounded-2xl shadow-sm border border-gray-200
  if (content.includes('bg-white rounded-') && !content.includes('rounded-2xl')) {
     issues.inconsistentCards.push(f);
  }
});
console.log(JSON.stringify({
  blueButtons: issues.blueButtons.length,
  duplicateHeaders: issues.duplicateHeaders.length,
  unwrappedTables: issues.unwrappedTables.length,
  inconsistentInputs: issues.inconsistentInputs.length,
  inconsistentCards: issues.inconsistentCards.length,
  details: issues
}, null, 2));

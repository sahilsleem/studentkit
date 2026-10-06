const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('src/components/tools')
  .map(f => path.join('src/components/tools', f))
  .filter(f => f.endsWith('.astro'))
  .concat(fs.readdirSync('src/components/ui')
    .map(f => path.join('src/components/ui', f))
    .filter(f => f.endsWith('.astro')));

let count = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  const orig = content;
  
  // Find cards that lack a max-w class
  const regex = /<div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-12">/;
  if (content.match(regex)) {
     if (f.includes('percentage-calculator') || f.includes('gpa-calculator') || f.includes('marks-calculator') || f.includes('attendance-calculator') || f.includes('required-')) {
       content = content.replace(regex, '<div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-12 max-w-3xl mx-auto">');
     } else {
       content = content.replace(regex, '<div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-12 max-w-xl mx-auto">');
     }
  }
  
  if (content !== orig) {
    fs.writeFileSync(f, content, 'utf8');
    count++;
  }
});
console.log('Constrained widths in ' + count + ' files.');

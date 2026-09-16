const fs = require('fs');
const path = require('path');

const dirs = ['src/components/tools', 'src/components/ui'];
function walk(dir) {
  let results = [];
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

const files = [];
dirs.forEach(d => files.push(...walk(d)));

let count = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  const original = content;
  
  content = content.replace(/class="flex gap-4/g, 'class="flex flex-col sm:flex-row gap-4');
  
  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    count++;
  }
});
console.log('Fixed mobile button layouts in ' + count + ' files.');

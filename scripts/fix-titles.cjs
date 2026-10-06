const fs = require('fs');
const path = require('path');
const dir = 'src/components/tools';
let count = 0;
fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.astro')) {
    const f = path.join(dir, file);
    let content = fs.readFileSync(f, 'utf8');
    const orig = content;
    
    content = content.replace(/<div class="[^"]*mb-6[^"]*border-b[^"]*"[^>]*>\s*<h[23][^>]*>\{tool\.title\}<\/h[23]>\s*(<p[^>]*>\{tool\.description\}<\/p>\s*)?<\/div>\s*/g, '');
    
    // Some might have it without border-b
    content = content.replace(/<div class="mb-6">\s*<h[23][^>]*>\{tool\.title\}<\/h[23]>\s*(<p[^>]*>\{tool\.description\}<\/p>\s*)?<\/div>\s*/g, '');
    
    if (content !== orig) {
      fs.writeFileSync(f, content, 'utf8');
      count++;
    }
  }
});
console.log('Removed duplicate title blocks in ' + count + ' files.');

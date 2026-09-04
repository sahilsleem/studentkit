const fs = require('fs');
let c = fs.readFileSync('src/pages/index.astro', 'utf8');

if (!c.includes('<AdSlot variant="horizontal" />')) {
  c = c.replace(
    '<!-- Category Discovery Section -->',
    '<AdSlot variant="horizontal" />\n\n  <!-- Category Discovery Section -->'
  );
  
  c = c.replace(
    '<!-- Why StudentKit -->',
    '<AdSlot variant="horizontal" />\n\n  <!-- Why StudentKit -->'
  );
  
  fs.writeFileSync('src/pages/index.astro', c);
}

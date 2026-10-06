const fs = require('fs');
let tpl = fs.readFileSync('src/layouts/ToolLayout.astro', 'utf8');

tpl = tpl.replace(
  '<h2 class="text-xl font-bold text-gray-900 mb-3">Variables Explained</h2>',
  '<h2 class="text-2xl font-bold text-gray-900 mb-3">Variables Explained</h2>'
);

fs.writeFileSync('src/layouts/ToolLayout.astro', tpl);

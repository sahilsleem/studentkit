const fs = require('fs');
let tpl = fs.readFileSync('src/layouts/ToolLayout.astro', 'utf8');

tpl = tpl.replace(
  'class="group block p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-500 transition-colors"',
  'class="group block p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-500 hover:shadow-sm transition-all"'
);

fs.writeFileSync('src/layouts/ToolLayout.astro', tpl);

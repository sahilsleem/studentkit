const fs = require('fs');

// INDEX.ASTRO
let idx = fs.readFileSync('src/pages/index.astro', 'utf8');
idx = idx.replace('<AdSlot variant="horizontal" />\n</Layout>', '</Layout>');
fs.writeFileSync('src/pages/index.astro', idx);

// TOOL_LAYOUT.ASTRO
let tpl = fs.readFileSync('src/layouts/ToolLayout.astro', 'utf8');
tpl = tpl.replace('<AdSlot variant="horizontal" class="mt-16" />', '');
fs.writeFileSync('src/layouts/ToolLayout.astro', tpl);

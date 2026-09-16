const fs = require('fs');

function fixFile(file, oldStr, newStr) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(oldStr, newStr);
  fs.writeFileSync(file, content);
}

// 1. index.astro
let idx = fs.readFileSync('src/pages/index.astro', 'utf8');
idx = idx.replace("import { tools, categories } from '../data/registry';", "import { tools, categories, getCategorySlug } from '../data/registry';");
idx = idx.replace("cat.name.toLowerCase().replace(/\\\\s+/g, '-')", "getCategorySlug(cat.name)");
fs.writeFileSync('src/pages/index.astro', idx);

// 2. ToolLayout.astro
let layout = fs.readFileSync('src/layouts/ToolLayout.astro', 'utf8');
layout = layout.replace("import type { Tool } from '../data/registry';", "import type { Tool } from '../data/registry';\nimport { getCategorySlug } from '../data/registry';");
layout = layout.replace("tool.category.toLowerCase().replace(/\\\\s+/g, '-')", "getCategorySlug(tool.category)");
layout = layout.replace("tool.category.toLowerCase().replace(/\\\\s+/g, '-')", "getCategorySlug(tool.category)");
fs.writeFileSync('src/layouts/ToolLayout.astro', layout);

// 3. tools/index.astro
let toolsIdx = fs.readFileSync('src/pages/tools/index.astro', 'utf8');
toolsIdx = toolsIdx.replace("import { tools } from '../../data/registry';", "import { tools, getCategorySlug } from '../../data/registry';");
toolsIdx = toolsIdx.replace("cat.name.toLowerCase().replace(/\\s+/g, '-')", "getCategorySlug(cat.name)");
fs.writeFileSync('src/pages/tools/index.astro', toolsIdx);

// 4. category/[category].astro
let catAstro = fs.readFileSync('src/pages/category/[category].astro', 'utf8');
catAstro = catAstro.replace("import { tools, categories } from '../../data/registry';", "import { tools, categories, getCategorySlug } from '../../data/registry';");
catAstro = catAstro.replace("cat.name.toLowerCase().replace(/\\s+/g, '-')", "getCategorySlug(cat.name)");
catAstro = catAstro.replace("subcat.toLowerCase().replace(/\\s+/g, '-')", "getCategorySlug(subcat)");
fs.writeFileSync('src/pages/category/[category].astro', catAstro);

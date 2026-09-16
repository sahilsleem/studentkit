const fs = require('fs');

function replaceFile(path, oldText, newText) {
  let c = fs.readFileSync(path, 'utf8');
  c = c.replace(oldText, newText);
  fs.writeFileSync(path, c);
}

replaceFile('src/pages/index.astro', 
  "import { tools, categories, getCategorySlug } from '../data/registry';", 
  "import { tools, getActiveCategories, getCategorySlug } from '../data/registry';\nconst categories = getActiveCategories();"
);

replaceFile('src/pages/category/[category].astro',
  "import { tools, categories, getCategorySlug } from '../../data/registry';",
  "import { tools, getActiveCategories, getCategorySlug } from '../../data/registry';\nconst categories = getActiveCategories();"
);

// getStaticPaths in category.astro
replaceFile('src/pages/category/[category].astro',
  "return categories.map((cat) => {",
  "return getActiveCategories().map((cat) => {"
);


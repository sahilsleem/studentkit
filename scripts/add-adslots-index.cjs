const fs = require('fs');

let c = fs.readFileSync('src/pages/index.astro', 'utf8');

if (!c.includes('import AdSlot')) {
  c = c.replace(
    "import { tools, getActiveCategories, getCategorySlug } from '../data/registry';",
    "import { tools, getActiveCategories, getCategorySlug } from '../data/registry';\nimport AdSlot from '../components/AdSlot.astro';"
  );
}

// 1. After Hero/Search
c = c.replace(
  '</section>\n\n  <!-- Category Discovery Section -->',
  '</section>\n\n  <AdSlot variant="horizontal" />\n\n  <!-- Category Discovery Section -->'
);

// 2. After Popular Tools
c = c.replace(
  '    </div>\n  </section>\n\n  <!-- Why StudentKit -->',
  '    </div>\n  </section>\n\n  <AdSlot variant="horizontal" />\n\n  <!-- Why StudentKit -->'
);

// 3. At the bottom
c = c.replace(
  '  </section>\n</Layout>',
  '  </section>\n\n  <AdSlot variant="horizontal" />\n</Layout>'
);

fs.writeFileSync('src/pages/index.astro', c);

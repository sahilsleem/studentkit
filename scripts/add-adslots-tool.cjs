const fs = require('fs');

let c = fs.readFileSync('src/layouts/ToolLayout.astro', 'utf8');

if (!c.includes('import AdSlot')) {
  c = c.replace(
    "import { toolContent } from '../data/toolContent';",
    "import { toolContent } from '../data/toolContent';\nimport AdSlot from '../components/AdSlot.astro';"
  );
}

// 1. Top Ad Slot (before `<slot />`)
c = c.replace(
  '    <!-- The actual tool component goes here -->\n    <slot />',
  '    <AdSlot variant="horizontal" class="mb-8" />\n\n    <!-- The actual tool component goes here -->\n    <slot />'
);

// 2. Middle Ad Slot (after `<slot />`, before Educational Content)
c = c.replace(
  '    <!-- Educational Content (Phase 9 SEO) -->',
  '    <AdSlot variant="rectangle" class="my-12" />\n\n    <!-- Educational Content (Phase 9 SEO) -->'
);

// 3. Bottom Ad Slot (after related tools)
c = c.replace(
  '        </div>\n      </div>\n    )}\n  </div>\n\n  <!-- Initialize Tool Logic -->',
  '        </div>\n      </div>\n    )}\n\n    <AdSlot variant="horizontal" class="mt-16" />\n  </div>\n\n  <!-- Initialize Tool Logic -->'
);

fs.writeFileSync('src/layouts/ToolLayout.astro', c);

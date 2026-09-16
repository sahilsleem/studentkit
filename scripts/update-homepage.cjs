const fs = require('fs');

let c = fs.readFileSync('src/pages/index.astro', 'utf8');

c = c.replace(
  'placeholder="Search a tool (e.g. CGPA)..."',
  'placeholder="Search for a tool"'
);

c = c.replace(
  /const popularTools = \[[\s\S]*?\];/,
  `const popularTools = [
  "CGPA to Percentage",
  "Quadratic Equation Solver",
  "Mean Calculator",
  "Molar Mass Calculator",
  "Binary Converter",
  "Age Calculator"
];`
);

fs.writeFileSync('src/pages/index.astro', c);

const fs = require('fs');

let c = fs.readFileSync('src/pages/index.astro', 'utf8');

c = c.replace(
  /const popularTools = \[[\s\S]*?\];/,
  `const popularTools = [
  "Quadratic Equation Solver",
  "Percentile Calculator",
  "Sine Calculator (sin)",
  "Derivative Calculator",
  "Speed Calculator",
  "Molar Mass Calculator",
  "Punnett Square Calculator",
  "Binary Converter",
  "Attendance Calculator",
  "Age Calculator"
];`
);

fs.writeFileSync('src/pages/index.astro', c);

const fs = require('fs');

let code = fs.readFileSync('src/data/registry.ts', 'utf8');
// Strip export and types
code = code.replace(/export interface Tool [\s\S]*?export const tools: Tool\[\] =/m, 'const tools =');
// Remove TS type annotations from inputs array etc (hacky, but esbuild is better)

// Actually, esbuild is included in vite which is in the project.
// Let's write a small script that uses Astro/Vite or just tsc to transpile and run.

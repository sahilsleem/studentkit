const fs = require('fs');
let c = fs.readFileSync('src/data/registry.ts', 'utf8');

c = c.replace(/9\.80665/g, 'g');
c = c.replace(/299792458/g, 'c');
c = c.replace(/6\.6743e-11/g, 'G');
c = c.replace(/6\.62607015e-34/g, 'h');
c = c.replace(/6\.626e-34/g, 'h');
c = c.replace(/8\.9875517923e9/g, 'k');
c = c.replace(/8\.98755e9/g, 'k');
c = c.replace(/8\.31446/g, 'R');
c = c.replace(/1\.256637e-6/g, 'mu0');
c = c.replace(/1\.67262e-27/g, 'mp');
c = c.replace(/1\.67493e-27/g, 'mn');

// Fix accidental double strings if any (e.g., if there were multiple replaces)
// None of these overlap incorrectly except maybe k, but we replaced the longer one first.

fs.writeFileSync('src/data/registry.ts', c, 'utf8');

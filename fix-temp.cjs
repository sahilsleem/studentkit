const fs = require('fs');
let c = fs.readFileSync('src/data/registry.ts', 'utf8');
c = c.replace(/\{"label":"K","factor":1\}/g, '{"label":"K","factor":1},{"label":"°C","factor":1,"offset":273.15}');
fs.writeFileSync('src/data/registry.ts', c, 'utf8');

const fs = require('fs');
let r = fs.readFileSync('src/data/registry.ts', 'utf8');
const idx = r.indexOf('export const getActiveCategories');
if (idx > -1) {
  r = r.substring(0, idx);
}
r += `
export const getActiveCategories = (): Category[] => {
  const uniqueNames = [...new Set(tools.map(t => t.category))].sort();
  return uniqueNames.map(name => {
    const existing = categories.find(c => c.name === name);
    if (existing) return existing;
    return {
      id: getCategorySlug(name),
      name: name,
      description: "Explore " + tools.filter(t => t.category === name).length + " tools and calculators for " + name + "."
    };
  });
};
`;
fs.writeFileSync('src/data/registry.ts', r);

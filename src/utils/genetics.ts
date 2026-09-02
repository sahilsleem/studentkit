export function cartesianProduct<T>(...allEntries: T[][]): T[][] {
  return allEntries.reduce<T[][]>(
    (results, entries) =>
      results
        .map(result => entries.map(entry => [...result, entry]))
        .reduce((subResults, result) => [...subResults, ...result], []),
    [[]]
  );
}

// Parent e.g., 'AaBb' -> [['A','a'], ['B','b']]
export function extractAlleles(genotype: string): string[][] {
  const alleles: string[][] = [];
  for (let i = 0; i < genotype.length; i += 2) {
    alleles.push([genotype[i], genotype[i+1]]);
  }
  return alleles;
}

export function generateGametes(genotype: string): string[] {
  if (genotype.length % 2 !== 0) throw new Error("Genotype length must be even");
  const pairs = extractAlleles(genotype);
  const combos = cartesianProduct(...pairs);
  return combos.map(c => c.join(''));
}

export function generatePunnettSquare(p1: string, p2: string) {
  if (p1.length !== p2.length) throw new Error("Parents must have same number of alleles");
  if (p1.length % 2 !== 0) throw new Error("Genotype length must be even");
  
  const g1 = generateGametes(p1);
  const g2 = generateGametes(p2);
  
  const grid: string[][] = [];
  const counts: Record<string, number> = {};
  const phenotypes: Record<string, number> = {};
  
  for (let r = 0; r < g1.length; r++) {
    grid[r] = [];
    for (let c = 0; c < g2.length; c++) {
      let combined = "";
      let phenotype = "";
      // combine allele pairs properly: AaBb
      for (let i = 0; i < g1[r].length; i++) {
        const a1 = g1[r][i];
        const a2 = g2[c][i];
        // Sort uppercase first
        const pair = [a1, a2].sort((a,b) => {
          if (a.toLowerCase() === b.toLowerCase()) return a < b ? -1 : 1;
          return 0; // retain order if different genes, though they should be same
        }).join('');
        combined += pair;
        phenotype += (pair[0] === pair[0].toUpperCase()) ? pair[0].toUpperCase() : pair[0].toLowerCase();
      }
      
      grid[r][c] = combined;
      counts[combined] = (counts[combined] || 0) + 1;
      phenotypes[phenotype] = (phenotypes[phenotype] || 0) + 1;
    }
  }
  
  const total = g1.length * g2.length;
  
  return {
    gametes1: g1,
    gametes2: g2,
    grid,
    genotypeCounts: counts,
    phenotypeCounts: phenotypes,
    total
  };
}

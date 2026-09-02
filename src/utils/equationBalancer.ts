import { parseChemicalFormula } from './chemicalParser';

// Simple fraction math
const gcd = (a: number, b: number): number => {
  a = Math.abs(a); b = Math.abs(b);
  while (b) { let t = b; b = a % b; a = t; }
  return a;
};
const lcm = (a: number, b: number): number => Math.abs(a * b) / gcd(a, b);

class Frac {
  num: number;
  den: number;
  constructor(n: number, d: number = 1) {
    const g = gcd(n, d);
    this.num = n / g;
    this.den = d / g;
    if (this.den < 0) { this.num *= -1; this.den *= -1; }
  }
  add(o: Frac) { return new Frac(this.num * o.den + o.num * this.den, this.den * o.den); }
  sub(o: Frac) { return new Frac(this.num * o.den - o.num * this.den, this.den * o.den); }
  mul(o: Frac) { return new Frac(this.num * o.num, this.den * o.den); }
  div(o: Frac) { return new Frac(this.num * o.den, this.den * o.num); }
  isZero() { return this.num === 0; }
  abs() { return new Frac(Math.abs(this.num), this.den); }
}

export function balanceEquation(equation: string): { balanced: string, coeffs: number[], isBalanced: boolean } {
  try {
    const parts = equation.split(/->|=>|=/).map(s => s.trim());
    if (parts.length !== 2) throw new Error("Invalid equation format. Use -> or =");
    
    const parseSide = (side: string) => side.split('+').map(s => s.trim()).filter(s => s.length > 0);
    const reactants = parseSide(parts[0]);
    const products = parseSide(parts[1]);
    
    const compounds = [...reactants, ...products];
    const n = compounds.length;
    
    // Parse all compounds
    const parsedCompounds = compounds.map(c => parseChemicalFormula(c));
    
    // Get all unique elements
    const elements = new Set<string>();
    parsedCompounds.forEach(comp => Object.keys(comp).forEach(e => elements.add(e)));
    const elementList = Array.from(elements);
    const m = elementList.length;
    
    // Build matrix A (m x n)
    // Reactants are positive, products are negative
    let A = elementList.map(el => {
      return compounds.map((_, j) => {
        const val = parsedCompounds[j][el] || 0;
        return new Frac(j < reactants.length ? val : -val);
      });
    });
    
    // Gauss-Jordan Elimination
    let lead = 0;
    for (let r = 0; r < m; r++) {
      if (n <= lead) break;
      let i = r;
      while (A[i][lead].isZero()) {
        i++;
        if (m === i) {
          i = r;
          lead++;
          if (n === lead) {
             lead--; // Prevent out of bounds
             break;
          }
        }
      }
      
      // Swap rows i and r
      let temp = A[i];
      A[i] = A[r];
      A[r] = temp;
      
      if (!A[r][lead].isZero()) {
        const div = A[r][lead];
        for (let j = 0; j < n; j++) A[r][j] = A[r][j].div(div);
      }
      
      for (let i = 0; i < m; i++) {
        if (i !== r) {
          const mult = A[i][lead];
          for (let j = 0; j < n; j++) {
            A[i][j] = A[i][j].sub(A[r][j].mul(mult));
          }
        }
      }
      lead++;
    }
    
    // Find independent variable (usually the last compound)
    // We assume there's exactly 1 degree of freedom for a standard reaction.
    // Set the last variable to 1, solve for others.
    const coeffs = new Array(n).fill(new Frac(0));
    coeffs[n - 1] = new Frac(1); // Free variable
    
    for (let i = 0; i < m; i++) {
      let pivotCol = -1;
      for (let j = 0; j < n - 1; j++) {
        if (!A[i][j].isZero()) { pivotCol = j; break; }
      }
      if (pivotCol !== -1) {
        coeffs[pivotCol] = A[i][n - 1].mul(new Frac(-1)); // move to rhs
      }
    }
    
    // Check if valid (all coefficients > 0)
    for (let i = 0; i < n; i++) {
       if (coeffs[i].num <= 0) {
          // It's possible the free variable needs to be negative, or reaction impossible
          throw new Error("Cannot balance: Requires negative coefficients or impossible reaction.");
       }
    }
    
    // Find LCM of all denominators to make coefficients integers
    let overallLCM = 1;
    for (let i = 0; i < n; i++) {
      overallLCM = lcm(overallLCM, coeffs[i].den);
    }
    
    const intCoeffs = coeffs.map(c => (c.num * overallLCM) / c.den);
    
    const formatSide = (comps: string[], startIdx: number) => {
       return comps.map((c, i) => {
          const coef = intCoeffs[startIdx + i];
          return (coef === 1 ? "" : coef) + c;
       }).join(" + ");
    };
    
    const balancedReactants = formatSide(reactants, 0);
    const balancedProducts = formatSide(products, reactants.length);
    
    return {
       balanced: `${balancedReactants} -> ${balancedProducts}`,
       coeffs: intCoeffs,
       isBalanced: true
    };
  } catch (err) {
     return { balanced: equation, coeffs: [], isBalanced: false };
  }
}

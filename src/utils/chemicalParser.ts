import { PERIODIC_TABLE } from '../data/periodicTable';

export function parseChemicalFormula(formula: string): Record<string, number> {
  const stack: Record<string, number>[] = [{}];
  let i = 0;
  
  while (i < formula.length) {
    const char = formula[i];
    
    if (char === '(' || char === '[') {
      stack.push({});
      i++;
    } else if (char === ')' || char === ']') {
      i++;
      let multiplierStr = '';
      while (i < formula.length && /[0-9]/.test(formula[i])) {
        multiplierStr += formula[i];
        i++;
      }
      const multiplier = multiplierStr ? parseInt(multiplierStr, 10) : 1;
      const top = stack.pop();
      if (!top || stack.length === 0) throw new Error('Mismatched parentheses in formula.');
      
      const current = stack[stack.length - 1];
      for (const [element, count] of Object.entries(top)) {
        current[element] = (current[element] || 0) + (count * multiplier);
      }
    } else if (/[A-Z]/.test(char)) {
      let element = char;
      i++;
      while (i < formula.length && /[a-z]/.test(formula[i])) {
        element += formula[i];
        i++;
      }
      let countStr = '';
      while (i < formula.length && /[0-9]/.test(formula[i])) {
        countStr += formula[i];
        i++;
      }
      const count = countStr ? parseInt(countStr, 10) : 1;
      
      const current = stack[stack.length - 1];
      current[element] = (current[element] || 0) + count;
    } else if (char === ' ' || char === '·' || char === '.') {
       // skip whitespace or dot (could handle hydrates if needed, but basic implementation skips)
       i++;
    } else {
      throw new Error(`Invalid character in formula: ${char}`);
    }
  }
  
  if (stack.length !== 1) throw new Error('Mismatched parentheses in formula.');
  return stack[0];
}

export function calculateMolarMass(formula: string): { totalMass: number, elements: Record<string, { count: number, mass: number }> } {
  const parsed = parseChemicalFormula(formula);
  let totalMass = 0;
  const elementsInfo: Record<string, { count: number, mass: number }> = {};
  
  for (const [symbol, count] of Object.entries(parsed)) {
    const element = PERIODIC_TABLE.find(e => e.symbol === symbol);
    if (!element) {
      throw new Error(`Unknown element: ${symbol}`);
    }
    const mass = element.atomicMass * count;
    totalMass += mass;
    elementsInfo[symbol] = { count, mass };
  }
  
  return { totalMass, elements: elementsInfo };
}

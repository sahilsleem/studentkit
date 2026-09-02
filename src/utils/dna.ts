import { GENETIC_CODE } from '../data/geneticCode';

export function cleanSequence(seq: string): string {
  return seq.toUpperCase().replace(/\s+/g, '');
}

export function validateDNA(seq: string): boolean {
  return /^[ATGC]*$/.test(seq);
}

export function validateRNA(seq: string): boolean {
  return /^[AUGC]*$/.test(seq);
}

export function getComplement(seq: string): string {
  const map: Record<string, string> = { A: 'T', T: 'A', C: 'G', G: 'C', U: 'A' };
  return seq.split('').map(c => map[c] || c).join('');
}

export function transcribe(dna: string): string {
  // Coding strand (5' -> 3') to mRNA (replace T with U)
  return dna.replace(/T/g, 'U');
}

export function reverseComplement(seq: string): string {
  return getComplement(seq).split('').reverse().join('');
}

export function getGC(seq: string): number {
  if (!seq) return 0;
  const gcCount = (seq.match(/[GC]/g) || []).length;
  return (gcCount / seq.length) * 100;
}

export function translate(rna: string): string {
  let protein = '';
  for (let i = 0; i < rna.length - 2; i += 3) {
    const codon = rna.substring(i, i + 3);
    protein += GENETIC_CODE[codon] || '?';
  }
  return protein;
}

export function calculateTm(seq: string): number {
  const a = (seq.match(/A/g) || []).length;
  const t = (seq.match(/T/g) || []).length;
  const g = (seq.match(/G/g) || []).length;
  const c = (seq.match(/C/g) || []).length;
  
  if (seq.length < 14) {
    return (a + t) * 2 + (g + c) * 4;
  } else {
    // Basic approximation for longer oligos
    return 64.9 + 41 * (g + c - 16.4) / seq.length;
  }
}

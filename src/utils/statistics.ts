export function parseDataset(input: string): number[] {
  return input.split(/[,\\s\\n]+/)
    .map(x => parseFloat(x))
    .filter(x => !isNaN(x));
}

export function parseTwoDatasets(input1: string, input2: string): [number[], number[]] {
  const d1 = parseDataset(input1);
  const d2 = parseDataset(input2);
  const minLen = Math.min(d1.length, d2.length);
  return [d1.slice(0, minLen), d2.slice(0, minLen)];
}

export function sum(arr: number[]): number { return arr.reduce((a, b) => a + b, 0); }

export function mean(arr: number[]): number {
  if (arr.length === 0) return 0;
  return sum(arr) / arr.length;
}

export function median(arr: number[]): number {
  if (arr.length === 0) return 0;
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

export function variance(arr: number[], population = false): number {
  if (arr.length < 2) return 0;
  const m = mean(arr);
  const sqDiff = arr.map(x => Math.pow(x - m, 2));
  return sum(sqDiff) / (arr.length - (population ? 0 : 1));
}

export function standardDeviation(arr: number[], population = false): number {
  return Math.sqrt(variance(arr, population));
}

export function standardError(arr: number[]): number {
  if (arr.length === 0) return 0;
  return standardDeviation(arr) / Math.sqrt(arr.length);
}

export function percentiles(arr: number[]): { p25: number, p50: number, p75: number, iqr: number } {
  if (arr.length === 0) return { p25: 0, p50: 0, p75: 0, iqr: 0 };
  const sorted = [...arr].sort((a, b) => a - b);
  const getP = (p: number) => {
    const i = (p / 100) * (sorted.length - 1);
    const low = Math.floor(i);
    const high = Math.ceil(i);
    const weight = i - low;
    if (low === high) return sorted[low];
    return sorted[low] * (1 - weight) + sorted[high] * weight;
  };
  const p25 = getP(25);
  const p50 = getP(50);
  const p75 = getP(75);
  return { p25, p50, p75, iqr: p75 - p25 };
}

export function fiveNumberSummary(arr: number[]) {
  if (arr.length === 0) return null;
  const sorted = [...arr].sort((a, b) => a - b);
  const { p25, p50, p75 } = percentiles(sorted);
  return {
    min: sorted[0],
    q1: p25,
    median: p50,
    q3: p75,
    max: sorted[sorted.length - 1]
  };
}

export function meanAbsoluteDeviation(arr: number[]): number {
  if (arr.length === 0) return 0;
  const m = mean(arr);
  return sum(arr.map(x => Math.abs(x - m))) / arr.length;
}

export function coefficientOfVariation(arr: number[]): number {
  const m = mean(arr);
  if (m === 0) return 0;
  return (standardDeviation(arr) / m) * 100;
}

export function geometricMean(arr: number[]): number {
  if (arr.length === 0 || arr.some(x => x <= 0)) return 0;
  const prod = arr.reduce((a, b) => a * b, 1);
  return Math.pow(prod, 1 / arr.length);
}

export function harmonicMean(arr: number[]): number {
  if (arr.length === 0 || arr.some(x => x <= 0)) return 0;
  const invSum = sum(arr.map(x => 1 / x));
  return arr.length / invSum;
}

export function covariance(arr1: number[], arr2: number[], population = false): number {
  if (arr1.length === 0 || arr1.length !== arr2.length) return 0;
  const m1 = mean(arr1);
  const m2 = mean(arr2);
  let covSum = 0;
  for (let i = 0; i < arr1.length; i++) {
    covSum += (arr1[i] - m1) * (arr2[i] - m2);
  }
  return covSum / (arr1.length - (population ? 0 : 1));
}

export function correlation(arr1: number[], arr2: number[]): number {
  const cov = covariance(arr1, arr2);
  const sd1 = standardDeviation(arr1);
  const sd2 = standardDeviation(arr2);
  if (sd1 === 0 || sd2 === 0) return 0;
  return cov / (sd1 * sd2);
}

export function linearRegression(x: number[], y: number[]) {
  if (x.length === 0 || x.length !== y.length) return null;
  const r = correlation(x, y);
  const sx = standardDeviation(x);
  const sy = standardDeviation(y);
  if (sx === 0) return null;
  const slope = r * (sy / sx);
  const intercept = mean(y) - slope * mean(x);
  const rSquared = Math.pow(r, 2);
  return { slope, intercept, rSquared, r };
}

// Normal Distribution PDF and CDF
export function normalPdf(x: number, m: number, sd: number): number {
  return (1 / (sd * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - m) / sd, 2));
}

// Approximation of CDF
export function normalCdf(x: number, m: number, sd: number): number {
  const z = (x - m) / sd;
  const b1 = 0.31938153, b2 = -0.356563782, b3 = 1.781477937, b4 = -1.821255978, b5 = 1.330274429;
  const p = 0.2316419;
  const c = 0.39894228;
  const a = Math.abs(z);
  const t = 1.0 / (1.0 + a * p);
  const b = c * Math.exp(-z * z / 2.0);
  let res = ((((b5 * t + b4) * t + b3) * t + b2) * t + b1) * t;
  res = 1.0 - b * res;
  if (z < 0.0) res = 1.0 - res;
  return res;
}

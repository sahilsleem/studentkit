/**
 * Shared number formatting and clipboard helpers for StudentKit calculators.
 */

export function formatResultNumber(num: number): string {
  if (num === null || num === undefined || typeof num !== 'number') {
    return String(num ?? 'Undefined');
  }
  if (Number.isNaN(num)) {
    return 'Undefined';
  }
  if (num === Infinity) {
    return 'Infinity';
  }
  if (num === -Infinity) {
    return '-Infinity';
  }
  if (Object.is(num, -0) || num === 0) {
    return '0';
  }

  const absNum = Math.abs(num);

  // For very large numbers (>= 1e12) or very small non-zero numbers (< 1e-5)
  // Use exponential notation while preserving up to 10 significant digits without trailing binary noise
  if (absNum >= 1e12 || (absNum < 1e-5 && absNum > 0)) {
    const preciseNum = Number(num.toPrecision(10));
    const expStr = preciseNum.toExponential();
    const [mantissa, exponent] = expStr.split('e');
    const cleanMantissa = parseFloat(mantissa).toString();
    const expNum = parseInt(exponent, 10);
    const sign = expNum >= 0 ? '+' : '';
    return `${cleanMantissa}e${sign}${expNum}`;
  }

  // For standard range (1e-5 <= absNum < 1e12), eliminate binary float inaccuracies
  // (e.g. 0.1 + 0.2 = 0.30000000000000004) by taking up to 12 significant digits
  const clean = Number(num.toPrecision(12));
  return clean.toString();
}

export async function copyToClipboard(text: string): Promise<boolean> {
  const cleanText = text.trim();
  if (!cleanText) return false;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(cleanText);
      return true;
    }
  } catch (err) {
    // Fall back to execCommand if Clipboard API is blocked
  }

  try {
    const textarea = document.createElement('textarea');
    textarea.value = cleanText;
    textarea.style.position = 'fixed';
    textarea.style.left = '-999999px';
    textarea.style.top = '-999999px';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textarea);
    return successful;
  } catch (err) {
    return false;
  }
}

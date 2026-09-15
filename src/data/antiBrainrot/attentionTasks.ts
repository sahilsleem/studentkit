export interface AttentionTask {
  id: string;
  category: 'anomaly' | 'target-match' | 'orientation' | 'alphanumeric' | 'symbols';
  prompt: string;
  targetDisplay?: string;
  gridSize: number;
  columns: 2 | 3 | 4;
  tiles: string[];
  correctIndex: number;
  tier: 'easy' | 'medium' | 'hard' | 'lightning';
  timeLimit: number;
}

export const attentionTasks: AttentionTask[] = [
  // --- TIER 1: EASY (2x2 Grid = 4 tiles, 5.0s timer) ---
  { id: 'e1', category: 'anomaly', prompt: 'Find the odd symbol', gridSize: 4, columns: 2, tiles: ['●', '●', '○', '●'], correctIndex: 2, tier: 'easy', timeLimit: 5 },
  { id: 'e2', category: 'alphanumeric', prompt: 'Find the odd letter', gridSize: 4, columns: 2, tiles: ['O', 'O', 'O', 'Q'], correctIndex: 3, tier: 'easy', timeLimit: 5 },
  { id: 'e3', category: 'orientation', prompt: 'Find the pointing arrow', targetDisplay: '↑', gridSize: 4, columns: 2, tiles: ['↓', '↑', '↓', '↓'], correctIndex: 1, tier: 'easy', timeLimit: 5 },
  { id: 'e4', category: 'symbols', prompt: 'Find the matching shape', targetDisplay: '★', gridSize: 4, columns: 2, tiles: ['▲', '■', '★', '◆'], correctIndex: 2, tier: 'easy', timeLimit: 5 },
  { id: 'e5', category: 'alphanumeric', prompt: 'Find the odd character', gridSize: 4, columns: 2, tiles: ['E', 'E', 'F', 'E'], correctIndex: 2, tier: 'easy', timeLimit: 5 },
  { id: 'e6', category: 'anomaly', prompt: 'Find the square', targetDisplay: '■', gridSize: 4, columns: 2, tiles: ['▲', '■', '●', '◆'], correctIndex: 1, tier: 'easy', timeLimit: 5 },
  { id: 'e7', category: 'orientation', prompt: 'Find the right-pointing arrow', targetDisplay: '→', gridSize: 4, columns: 2, tiles: ['←', '←', '←', '→'], correctIndex: 3, tier: 'easy', timeLimit: 5 },
  { id: 'e8', category: 'alphanumeric', prompt: 'Find the number 8', targetDisplay: '8', gridSize: 4, columns: 2, tiles: ['B', 'B', '8', 'B'], correctIndex: 2, tier: 'easy', timeLimit: 5 },
  { id: 'e9', category: 'symbols', prompt: 'Find the hollow diamond', targetDisplay: '◇', gridSize: 4, columns: 2, tiles: ['◆', '◇', '◆', '◆'], correctIndex: 1, tier: 'easy', timeLimit: 5 },
  { id: 'e10', category: 'anomaly', prompt: 'Find the odd symbol', gridSize: 4, columns: 2, tiles: ['✚', '✚', '✖', '✚'], correctIndex: 2, tier: 'easy', timeLimit: 5 },
  { id: 'e11', category: 'alphanumeric', prompt: 'Find the digit 5', targetDisplay: '5', gridSize: 4, columns: 2, tiles: ['S', '5', 'S', 'S'], correctIndex: 1, tier: 'easy', timeLimit: 5 },
  { id: 'e12', category: 'symbols', prompt: 'Find the matching symbol', targetDisplay: '♠', gridSize: 4, columns: 2, tiles: ['♣', '♥', '♦', '♠'], correctIndex: 3, tier: 'easy', timeLimit: 5 },

  // --- TIER 2: MEDIUM (3x2 or 3x3 Grid = 6 to 9 tiles, 4.0s timer) ---
  { id: 'm1', category: 'alphanumeric', prompt: 'Find the character that is different', gridSize: 6, columns: 3, tiles: ['p', 'p', 'p', 'p', 'q', 'p'], correctIndex: 4, tier: 'medium', timeLimit: 4 },
  { id: 'm2', category: 'orientation', prompt: 'Find the target direction', targetDisplay: '↗', gridSize: 6, columns: 3, tiles: ['↖', '↙', '↗', '↘', '↖', '↘'], correctIndex: 2, tier: 'medium', timeLimit: 4 },
  { id: 'm3', category: 'symbols', prompt: 'Find the 6-pointed star', targetDisplay: '✡', gridSize: 6, columns: 3, tiles: ['★', '✦', '✧', '✡', '✪', '✫'], correctIndex: 3, tier: 'medium', timeLimit: 4 },
  { id: 'm4', category: 'alphanumeric', prompt: 'Find the letter M', targetDisplay: 'M', gridSize: 6, columns: 3, tiles: ['N', 'N', 'N', 'M', 'N', 'N'], correctIndex: 3, tier: 'medium', timeLimit: 4 },
  { id: 'm5', category: 'anomaly', prompt: 'Find the hexagon', targetDisplay: '⬢', gridSize: 6, columns: 3, tiles: ['⬟', '⬟', '⬟', '⬟', '⬟', '⬢'], correctIndex: 5, tier: 'medium', timeLimit: 4 },
  { id: 'm6', category: 'alphanumeric', prompt: 'Find the number 6', targetDisplay: '6', gridSize: 6, columns: 3, tiles: ['9', '9', '6', '9', '9', '9'], correctIndex: 2, tier: 'medium', timeLimit: 4 },
  { id: 'm7', category: 'orientation', prompt: 'Find the odd orientation', gridSize: 6, columns: 3, tiles: ['▲', '▲', '▼', '▲', '▲', '▲'], correctIndex: 2, tier: 'medium', timeLimit: 4 },
  { id: 'm8', category: 'symbols', prompt: 'Find the filled triangle', targetDisplay: '▲', gridSize: 9, columns: 3, tiles: ['△', '△', '△', '△', '▲', '△', '△', '△', '△'], correctIndex: 4, tier: 'medium', timeLimit: 4 },
  { id: 'm9', category: 'alphanumeric', prompt: 'Find the odd letter', gridSize: 9, columns: 3, tiles: ['C', 'C', 'C', 'C', 'C', 'G', 'C', 'C', 'C'], correctIndex: 5, tier: 'medium', timeLimit: 4 },
  { id: 'm10', category: 'orientation', prompt: 'Find the upward arrow', targetDisplay: '↑', gridSize: 9, columns: 3, tiles: ['→', '←', '↓', '→', '↑', '←', '↓', '→', '←'], correctIndex: 4, tier: 'medium', timeLimit: 4 },
  { id: 'm11', category: 'symbols', prompt: 'Find the circle with dot', targetDisplay: '⊙', gridSize: 9, columns: 3, tiles: ['○', '○', '○', '○', '○', '○', '⊙', '○', '○'], correctIndex: 6, tier: 'medium', timeLimit: 4 },
  { id: 'm12', category: 'alphanumeric', prompt: 'Find the letter V', targetDisplay: 'V', gridSize: 9, columns: 3, tiles: ['U', 'U', 'U', 'U', 'V', 'U', 'U', 'U', 'U'], correctIndex: 4, tier: 'medium', timeLimit: 4 },

  // --- TIER 3: HARD (3x3 or 4x3 Grid = 9 to 12 tiles, 3.0s timer) ---
  { id: 'h1', category: 'alphanumeric', prompt: 'Find the single "m" among "rn"', gridSize: 9, columns: 3, tiles: ['rn', 'rn', 'rn', 'm', 'rn', 'rn', 'rn', 'rn', 'rn'], correctIndex: 3, tier: 'hard', timeLimit: 3 },
  { id: 'h2', category: 'symbols', prompt: 'Find the 8-spoke asterisk', targetDisplay: '✳', gridSize: 9, columns: 3, tiles: ['✱', '✲', '✳', '✴', '✵', '✶', '✷', '✸', '✹'], correctIndex: 2, tier: 'hard', timeLimit: 3 },
  { id: 'h3', category: 'orientation', prompt: 'Find the downward right arrow', targetDisplay: '↘', gridSize: 9, columns: 3, tiles: ['↗', '↖', '↙', '↗', '↘', '↖', '↗', '↖', '↙'], correctIndex: 4, tier: 'hard', timeLimit: 3 },
  { id: 'h4', category: 'alphanumeric', prompt: 'Find the letter I (uppercase i)', targetDisplay: 'I', gridSize: 9, columns: 3, tiles: ['l', 'l', 'l', 'l', 'l', 'l', 'l', 'I', 'l'], correctIndex: 7, tier: 'hard', timeLimit: 3 },
  { id: 'h5', category: 'symbols', prompt: 'Find the filled hexagon', targetDisplay: '⬢', gridSize: 12, columns: 4, tiles: ['⬡', '⬡', '⬡', '⬡', '⬡', '⬢', '⬡', '⬡', '⬡', '⬡', '⬡', '⬡'], correctIndex: 5, tier: 'hard', timeLimit: 3 },
  { id: 'h6', category: 'alphanumeric', prompt: 'Find the letter B among 8s', targetDisplay: 'B', gridSize: 12, columns: 4, tiles: ['8', '8', '8', '8', '8', '8', 'B', '8', '8', '8', '8', '8'], correctIndex: 6, tier: 'hard', timeLimit: 3 },
  { id: 'h7', category: 'anomaly', prompt: 'Find the single open square', gridSize: 12, columns: 4, tiles: ['■', '■', '■', '■', '■', '■', '■', '■', '□', '■', '■', '■'], correctIndex: 8, tier: 'hard', timeLimit: 3 },
  { id: 'h8', category: 'symbols', prompt: 'Find the double circle', targetDisplay: '◎', gridSize: 12, columns: 4, tiles: ['○', '○', '○', '○', '◎', '○', '○', '○', '○', '○', '○', '○'], correctIndex: 4, tier: 'hard', timeLimit: 3 },
  { id: 'h9', category: 'alphanumeric', prompt: 'Find the single letter "d"', targetDisplay: 'd', gridSize: 12, columns: 4, tiles: ['cl', 'cl', 'cl', 'cl', 'cl', 'cl', 'cl', 'cl', 'd', 'cl', 'cl', 'cl'], correctIndex: 8, tier: 'hard', timeLimit: 3 },
  { id: 'h10', category: 'orientation', prompt: 'Find the south-west arrow', targetDisplay: '↙', gridSize: 12, columns: 4, tiles: ['↖', '↗', '↘', '↖', '↗', '↙', '↘', '↖', '↗', '↘', '↖', '↗'], correctIndex: 5, tier: 'hard', timeLimit: 3 },

  // --- TIER 4: LIGHTNING (4x3 or 4x4 Grid = 12 to 16 tiles, 2.5s timer) ---
  { id: 'l1', category: 'alphanumeric', prompt: 'Find the digit 2 among Zs', targetDisplay: '2', gridSize: 12, columns: 4, tiles: ['Z', 'Z', 'Z', 'Z', 'Z', '2', 'Z', 'Z', 'Z', 'Z', 'Z', 'Z'], correctIndex: 5, tier: 'lightning', timeLimit: 2.5 },
  { id: 'l2', category: 'symbols', prompt: 'Find the hollow star', targetDisplay: '☆', gridSize: 12, columns: 4, tiles: ['★', '★', '★', '★', '★', '★', '★', '★', '★', '☆', '★', '★'], correctIndex: 9, tier: 'lightning', timeLimit: 2.5 },
  { id: 'l3', category: 'orientation', prompt: 'Find the right angle bracket', targetDisplay: '〉', gridSize: 12, columns: 4, tiles: ['〈', '〈', '〈', '〈', '〈', '〈', '〉', '〈', '〈', '〈', '〈', '〈'], correctIndex: 6, tier: 'lightning', timeLimit: 2.5 },
  { id: 'l4', category: 'alphanumeric', prompt: 'Find the digit 0 (zero) among Os', targetDisplay: '0', gridSize: 12, columns: 4, tiles: ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', '0', 'O'], correctIndex: 10, tier: 'lightning', timeLimit: 2.5 },
  { id: 'l5', category: 'symbols', prompt: 'Find the target pattern', targetDisplay: '◈', gridSize: 12, columns: 4, tiles: ['◇', '◇', '◇', '◇', '◈', '◇', '◇', '◇', '◇', '◇', '◇', '◇'], correctIndex: 4, tier: 'lightning', timeLimit: 2.5 },
  { id: 'l6', category: 'symbols', prompt: 'Find the hollow cross', targetDisplay: '✛', gridSize: 12, columns: 4, tiles: ['✚', '✚', '✚', '✚', '✚', '✚', '✚', '✛', '✚', '✚', '✚', '✚'], correctIndex: 7, tier: 'lightning', timeLimit: 2.5 },
  { id: 'l7', category: 'orientation', prompt: 'Find the left-pointing triangle', targetDisplay: '◀', gridSize: 12, columns: 4, tiles: ['▶', '▶', '▶', '▶', '▶', '▶', '▶', '▶', '◀', '▶', '▶', '▶'], correctIndex: 8, tier: 'lightning', timeLimit: 2.5 },
  { id: 'l8', category: 'alphanumeric', prompt: 'Find the letter K among Xs', targetDisplay: 'K', gridSize: 12, columns: 4, tiles: ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'K', 'X', 'X'], correctIndex: 9, tier: 'lightning', timeLimit: 2.5 }
];

export function getAttentionTaskBank(): AttentionTask[] {
  return [...attentionTasks];
}

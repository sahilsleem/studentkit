export type WMTier = 'easy' | 'medium' | 'hard' | 'lightning';

export interface WMRound {
  sequence: string[];
  question: string;
  options: string[];
  correctIndex: number;
  displayMs: number;
  gapMs: number;
}

const POOLS = {
  symbols: '▲●■◆★✦♠♣♥♦',
  letters: 'ACDEFGHJKMNPRTUVXY' // Cleaned pool, no B, I, l, 1, O, 0, S, 5, Z, 2, Q
};

function getOrdinal(n: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export function generateWorkingMemoryRound(tier: WMTier): WMRound {
  let length = 4;
  let pool = POOLS.symbols;
  let displayMs = 1000;
  const gapMs = 150;

  if (tier === 'easy') {
    length = 4;
    pool = POOLS.symbols;
    displayMs = 1000;
  } else if (tier === 'medium') {
    length = 5 + Math.floor(Math.random() * 2); // 5-6
    pool = POOLS.symbols + POOLS.letters;
    displayMs = 800;
  } else if (tier === 'hard') {
    length = 7 + Math.floor(Math.random() * 2); // 7-8
    pool = POOLS.symbols + POOLS.letters;
    displayMs = 650;
  } else if (tier === 'lightning') {
    length = 9 + Math.floor(Math.random() * 2); // 9-10
    pool = POOLS.symbols + POOLS.letters;
    displayMs = 500;
  }

  const poolArray = pool.split('').sort(() => 0.5 - Math.random());
  
  // Guarantee sequence items are strictly unique within the sequence
  const sequence = poolArray.slice(0, length);

  const targetIndex = Math.floor(Math.random() * sequence.length);
  const correctAnswer = sequence[targetIndex];
  const question = `What came ${getOrdinal(targetIndex + 1)}?`;

  const remainingPool = poolArray.slice(length).sort(() => 0.5 - Math.random());
  const distractors = new Set<string>();
  
  for (const item of remainingPool) {
    if (distractors.size < 3 && item !== correctAnswer) {
      distractors.add(item);
    }
  }

  // Fallback in case pool exhaustion occurred (impossible given lengths, but safe)
  if (distractors.size < 3) {
    const fullPool = pool.split('').sort(() => 0.5 - Math.random());
    for (const item of fullPool) {
      if (distractors.size < 3 && item !== correctAnswer) distractors.add(item);
    }
  }

  const options = [correctAnswer, ...Array.from(distractors)].sort(() => 0.5 - Math.random());
  const correctIndex = options.indexOf(correctAnswer);

  return {
    sequence,
    question,
    options,
    correctIndex,
    displayMs,
    gapMs
  };
}

export interface AttentionQuestion {
  id: string;
  type: 'spot-odd' | 'pattern-match' | 'visual-change' | 'symbol-count';
  difficulty: 'easy' | 'medium' | 'hard';
  timeLimit: number;
  prompt: string;
  stimulusSvg?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const attentionQuestions: AttentionQuestion[] = [
  {
    id: 'att-001',
    type: 'spot-odd',
    difficulty: 'easy',
    timeLimit: 6,
    prompt: 'Which grid quadrant contains the inverted triangle symbol?',
    options: ['Top-Left', 'Top-Right', 'Bottom-Left', 'Bottom-Right'],
    correctAnswer: 1,
    explanation: 'The top-right quadrant has the triangle pointing downward, while all others point upward.'
  }
];

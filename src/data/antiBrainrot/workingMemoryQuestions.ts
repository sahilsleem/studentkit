export interface WorkingMemoryTask {
  id: string;
  type: 'digit-span-forward' | 'digit-span-reverse' | 'letter-sequence';
  spanLength: number;
  studySec: number;
  stimulus: string;
  prompt: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const workingMemoryTasks: WorkingMemoryTask[] = [
  {
    id: 'wm-001',
    type: 'digit-span-reverse',
    spanLength: 4,
    studySec: 4,
    stimulus: '5 — 8 — 2 — 9',
    prompt: 'What was the sequence in REVERSE order?',
    options: ['9 — 2 — 8 — 5', '5 — 8 — 2 — 9', '9 — 8 — 2 — 5', '2 — 9 — 5 — 8'],
    correctAnswer: 0,
    explanation: 'The reverse of 5, 8, 2, 9 is 9, 2, 8, 5.'
  }
];

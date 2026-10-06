export interface MemoryTask {
  id: string;
  category: 'visual-grid' | 'symbol-pair' | 'sequence-order';
  difficulty: 'easy' | 'medium' | 'hard';
  studyDuration: number;
  stimulus: string;
  prompt: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const memoryTasks: MemoryTask[] = [
  {
    id: 'mem-001',
    category: 'visual-grid',
    difficulty: 'easy',
    studyDuration: 4,
    stimulus: '<div class="grid grid-cols-3 gap-2 w-32 mx-auto"><div class="w-8 h-8 bg-brand rounded"></div><div class="w-8 h-8 bg-slate-200 rounded"></div><div class="w-8 h-8 bg-slate-200 rounded"></div><div class="w-8 h-8 bg-slate-200 rounded"></div><div class="w-8 h-8 bg-brand rounded"></div><div class="w-8 h-8 bg-slate-200 rounded"></div><div class="w-8 h-8 bg-slate-200 rounded"></div><div class="w-8 h-8 bg-slate-200 rounded"></div><div class="w-8 h-8 bg-brand rounded"></div></div>',
    prompt: 'Which diagonal had the highlighted cells in the 3x3 grid?',
    options: ['Top-left to bottom-right', 'Top-right to bottom-left', 'Middle row only', 'Bottom row only'],
    correctAnswer: 0,
    explanation: 'The highlighted squares formed the main diagonal from top-left to bottom-right.'
  }
];

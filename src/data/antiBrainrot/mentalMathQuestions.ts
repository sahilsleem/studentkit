export interface MentalMathQuestion {
  id: string;
  category: 'percentages' | 'fractions' | 'estimation' | 'shortcuts';
  difficulty: 'easy' | 'medium' | 'hard';
  timeLimit: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const mentalMathQuestions: MentalMathQuestion[] = [
  {
    id: 'mm-001',
    category: 'percentages',
    difficulty: 'easy',
    timeLimit: 8,
    question: 'What is 15% of 60?',
    options: ['9', '8', '6', '12'],
    correctAnswer: 0,
    explanation: '10% of 60 = 6, 5% of 60 = 3. 6 + 3 = 9.'
  }
];

export interface MemoryQuestion {
  id: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  stimulus: string;
  studyDuration: number;
  question: string;
  options: string[];
  correctAnswer: number;
  correct?: number;
  explanation: string;
}

export const memoryQuestions = [
  {
    "id": "mem-001",
    "category": "Sequence Memory",
    "difficulty": "easy",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">4 — 7 — 2 — 9</span>",
    "studyDuration": 4,
    "question": "Which of the following was the exact sequence of 4 digits shown?",
    "options": [
      "4 — 7 — 9 — 2",
      "4 — 7 — 2 — 9",
      "4 — 2 — 7 — 9",
      "7 — 4 — 2 — 9"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The original sequence displayed was 4 — 7 — 2 — 9 in direct forward order."
  },
  {
    "id": "mem-002",
    "category": "Sequence Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-ink\">B — M — K — P</div>",
    "studyDuration": 4,
    "question": "Which letter immediately followed \"M\"?",
    "options": [
      "B",
      "P",
      "K",
      "T"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "In the sequence B — M — K — P, the letter following M is K."
  },
  {
    "id": "mem-003",
    "category": "Sequence Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">9 — 1 — 6 — 3 — 8</div>",
    "studyDuration": 5,
    "question": "What was the 4th digit in the 5-digit sequence?",
    "options": [
      "1",
      "6",
      "3",
      "8"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "The sequence was 9 (1st), 1 (2nd), 6 (3rd), 3 (4th), and 8 (5th)."
  },
  {
    "id": "mem-004",
    "category": "Sequence Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-brand\">7 — 2 — 9 — 4</div>",
    "studyDuration": 5,
    "question": "What is the correct sequence reversed (read backwards)?",
    "options": [
      "4 — 9 — 2 — 7",
      "4 — 2 — 9 — 7",
      "9 — 4 — 2 — 7",
      "7 — 9 — 2 — 4"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reversing the sequence 7 — 2 — 9 — 4 gives 4 — 9 — 2 — 7."
  },
  {
    "id": "mem-005",
    "category": "Sequence Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-2xl font-mono font-bold tracking-widest text-ink\">L — R — F — W — K — D</div>",
    "studyDuration": 6,
    "question": "Which of the following was the correct 6-letter sequence?",
    "options": [
      "L — R — F — K — W — D",
      "L — R — F — W — K — D",
      "L — F — R — W — K — D",
      "L — R — W — F — K — D"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The original sequence was L — R — F — W — K — D."
  },
  {
    "id": "mem-006",
    "category": "Sequence Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">5 — 9 — 2 — 8 — 1 — 7 — 4</div>",
    "studyDuration": 7,
    "question": "Which of the following was the exact 7-digit sequence shown?",
    "options": [
      "5 — 9 — 2 — 1 — 8 — 7 — 4",
      "5 — 9 — 2 — 8 — 1 — 7 — 4",
      "5 — 2 — 9 — 8 — 1 — 7 — 4",
      "5 — 9 — 8 — 2 — 1 — 7 — 4"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The full 7-digit sequence was 5 — 9 — 2 — 8 — 1 — 7 — 4."
  },
  {
    "id": "mem-007",
    "category": "Sequence Memory",
    "difficulty": "easy",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">3 — 0 — 7 — 4 — 1</span>",
    "studyDuration": 5,
    "question": "Which of the following was the exact 5-digit sequence shown?",
    "options": [
      "3 — 0 — 7 — 4 — 1",
      "3 — 1 — 7 — 4 — 1",
      "3 — 0 — 7 — 4 — 3",
      "1 — 4 — 7 — 0 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 3 — 0 — 7 — 4 — 1 in forward order."
  },
  {
    "id": "mem-008",
    "category": "Sequence Memory",
    "difficulty": "easy",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">1 — 8 — 5 — 2 — 9 — 6 — 3</span>",
    "studyDuration": 7,
    "question": "Which of the following was the exact 7-digit sequence shown?",
    "options": [
      "1 — 8 — 5 — 2 — 9 — 6 — 3",
      "1 — 9 — 5 — 2 — 9 — 6 — 3",
      "1 — 8 — 5 — 2 — 9 — 6 — 5",
      "3 — 6 — 9 — 2 — 5 — 8 — 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 1 — 8 — 5 — 2 — 9 — 6 — 3 in forward order."
  },
  {
    "id": "mem-009",
    "category": "Sequence Memory",
    "difficulty": "easy",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">9 — 6 — 3 — 0 — 7</span>",
    "studyDuration": 5,
    "question": "Which of the following was the exact 5-digit sequence shown?",
    "options": [
      "9 — 6 — 3 — 0 — 7",
      "9 — 7 — 3 — 0 — 7",
      "9 — 6 — 3 — 0 — 9",
      "7 — 0 — 3 — 6 — 9"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 9 — 6 — 3 — 0 — 7 in forward order."
  },
  {
    "id": "mem-010",
    "category": "Sequence Memory",
    "difficulty": "easy",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">7 — 4 — 1 — 8 — 5 — 2 — 9</span>",
    "studyDuration": 7,
    "question": "Which of the following was the exact 7-digit sequence shown?",
    "options": [
      "7 — 4 — 1 — 8 — 5 — 2 — 9",
      "7 — 5 — 1 — 8 — 5 — 2 — 9",
      "7 — 4 — 1 — 8 — 5 — 2 — 1",
      "9 — 2 — 5 — 8 — 1 — 4 — 7"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 7 — 4 — 1 — 8 — 5 — 2 — 9 in forward order."
  },
  {
    "id": "mem-011",
    "category": "Sequence Memory",
    "difficulty": "easy",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">5 — 2 — 9 — 6 — 3</span>",
    "studyDuration": 5,
    "question": "Which of the following was the exact 5-digit sequence shown?",
    "options": [
      "5 — 2 — 9 — 6 — 3",
      "5 — 3 — 9 — 6 — 3",
      "5 — 2 — 9 — 6 — 5",
      "3 — 6 — 9 — 2 — 5"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 5 — 2 — 9 — 6 — 3 in forward order."
  },
  {
    "id": "mem-012",
    "category": "Sequence Memory",
    "difficulty": "easy",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">3 — 0 — 7 — 4 — 1 — 8 — 5</span>",
    "studyDuration": 7,
    "question": "Which of the following was the exact 7-digit sequence shown?",
    "options": [
      "3 — 0 — 7 — 4 — 1 — 8 — 5",
      "3 — 1 — 7 — 4 — 1 — 8 — 5",
      "3 — 0 — 7 — 4 — 1 — 8 — 7",
      "5 — 8 — 1 — 4 — 7 — 0 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 3 — 0 — 7 — 4 — 1 — 8 — 5 in forward order."
  },
  {
    "id": "mem-013",
    "category": "Sequence Memory",
    "difficulty": "easy",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">1 — 8 — 5 — 2 — 9</span>",
    "studyDuration": 5,
    "question": "Which of the following was the exact 5-digit sequence shown?",
    "options": [
      "1 — 8 — 5 — 2 — 9",
      "1 — 9 — 5 — 2 — 9",
      "1 — 8 — 5 — 2 — 1",
      "9 — 2 — 5 — 8 — 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 1 — 8 — 5 — 2 — 9 in forward order."
  },
  {
    "id": "mem-014",
    "category": "Sequence Memory",
    "difficulty": "easy",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">9 — 6 — 3 — 0 — 7 — 4 — 1</span>",
    "studyDuration": 7,
    "question": "Which of the following was the exact 7-digit sequence shown?",
    "options": [
      "9 — 6 — 3 — 0 — 7 — 4 — 1",
      "9 — 7 — 3 — 0 — 7 — 4 — 1",
      "9 — 6 — 3 — 0 — 7 — 4 — 3",
      "1 — 4 — 7 — 0 — 3 — 6 — 9"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 9 — 6 — 3 — 0 — 7 — 4 — 1 in forward order."
  },
  {
    "id": "mem-015",
    "category": "Sequence Memory",
    "difficulty": "easy",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">7 — 4 — 1 — 8 — 5</span>",
    "studyDuration": 5,
    "question": "Which of the following was the exact 5-digit sequence shown?",
    "options": [
      "7 — 4 — 1 — 8 — 5",
      "7 — 5 — 1 — 8 — 5",
      "7 — 4 — 1 — 8 — 7",
      "5 — 8 — 1 — 4 — 7"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 7 — 4 — 1 — 8 — 5 in forward order."
  },
  {
    "id": "mem-016",
    "category": "Sequence Memory",
    "difficulty": "easy",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">5 — 2 — 9 — 6 — 3 — 0 — 7</span>",
    "studyDuration": 7,
    "question": "Which of the following was the exact 7-digit sequence shown?",
    "options": [
      "5 — 2 — 9 — 6 — 3 — 0 — 7",
      "5 — 3 — 9 — 6 — 3 — 0 — 7",
      "5 — 2 — 9 — 6 — 3 — 0 — 9",
      "7 — 0 — 3 — 6 — 9 — 2 — 5"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 5 — 2 — 9 — 6 — 3 — 0 — 7 in forward order."
  },
  {
    "id": "mem-017",
    "category": "Sequence Memory",
    "difficulty": "easy",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">3 — 0 — 7 — 4 — 1</span>",
    "studyDuration": 5,
    "question": "Which of the following was the exact 5-digit sequence shown?",
    "options": [
      "3 — 0 — 7 — 4 — 1",
      "3 — 1 — 7 — 4 — 1",
      "3 — 0 — 7 — 4 — 3",
      "1 — 4 — 7 — 0 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 3 — 0 — 7 — 4 — 1 in forward order."
  },
  {
    "id": "mem-018",
    "category": "Sequence Memory",
    "difficulty": "medium",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">1 — 8 — 5 — 2 — 9 — 6 — 3</span>",
    "studyDuration": 7,
    "question": "Which of the following was the exact 7-digit sequence shown?",
    "options": [
      "1 — 8 — 5 — 2 — 9 — 6 — 3",
      "1 — 9 — 5 — 2 — 9 — 6 — 3",
      "1 — 8 — 5 — 2 — 9 — 6 — 5",
      "3 — 6 — 9 — 2 — 5 — 8 — 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 1 — 8 — 5 — 2 — 9 — 6 — 3 in forward order."
  },
  {
    "id": "mem-019",
    "category": "Sequence Memory",
    "difficulty": "medium",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">9 — 6 — 3 — 0 — 7</span>",
    "studyDuration": 5,
    "question": "Which of the following was the exact 5-digit sequence shown?",
    "options": [
      "9 — 6 — 3 — 0 — 7",
      "9 — 7 — 3 — 0 — 7",
      "9 — 6 — 3 — 0 — 9",
      "7 — 0 — 3 — 6 — 9"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 9 — 6 — 3 — 0 — 7 in forward order."
  },
  {
    "id": "mem-020",
    "category": "Sequence Memory",
    "difficulty": "medium",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">7 — 4 — 1 — 8 — 5 — 2 — 9</span>",
    "studyDuration": 7,
    "question": "Which of the following was the exact 7-digit sequence shown?",
    "options": [
      "7 — 4 — 1 — 8 — 5 — 2 — 9",
      "7 — 5 — 1 — 8 — 5 — 2 — 9",
      "7 — 4 — 1 — 8 — 5 — 2 — 1",
      "9 — 2 — 5 — 8 — 1 — 4 — 7"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 7 — 4 — 1 — 8 — 5 — 2 — 9 in forward order."
  },
  {
    "id": "mem-021",
    "category": "Sequence Memory",
    "difficulty": "medium",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">5 — 2 — 9 — 6 — 3</span>",
    "studyDuration": 5,
    "question": "Which of the following was the exact 5-digit sequence shown?",
    "options": [
      "5 — 2 — 9 — 6 — 3",
      "5 — 3 — 9 — 6 — 3",
      "5 — 2 — 9 — 6 — 5",
      "3 — 6 — 9 — 2 — 5"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 5 — 2 — 9 — 6 — 3 in forward order."
  },
  {
    "id": "mem-022",
    "category": "Sequence Memory",
    "difficulty": "medium",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">3 — 0 — 7 — 4 — 1 — 8 — 5</span>",
    "studyDuration": 7,
    "question": "Which of the following was the exact 7-digit sequence shown?",
    "options": [
      "3 — 0 — 7 — 4 — 1 — 8 — 5",
      "3 — 1 — 7 — 4 — 1 — 8 — 5",
      "3 — 0 — 7 — 4 — 1 — 8 — 7",
      "5 — 8 — 1 — 4 — 7 — 0 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 3 — 0 — 7 — 4 — 1 — 8 — 5 in forward order."
  },
  {
    "id": "mem-023",
    "category": "Sequence Memory",
    "difficulty": "medium",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">1 — 8 — 5 — 2 — 9</span>",
    "studyDuration": 5,
    "question": "Which of the following was the exact 5-digit sequence shown?",
    "options": [
      "1 — 8 — 5 — 2 — 9",
      "1 — 9 — 5 — 2 — 9",
      "1 — 8 — 5 — 2 — 1",
      "9 — 2 — 5 — 8 — 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 1 — 8 — 5 — 2 — 9 in forward order."
  },
  {
    "id": "mem-024",
    "category": "Sequence Memory",
    "difficulty": "medium",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">9 — 6 — 3 — 0 — 7 — 4 — 1</span>",
    "studyDuration": 7,
    "question": "Which of the following was the exact 7-digit sequence shown?",
    "options": [
      "9 — 6 — 3 — 0 — 7 — 4 — 1",
      "9 — 7 — 3 — 0 — 7 — 4 — 1",
      "9 — 6 — 3 — 0 — 7 — 4 — 3",
      "1 — 4 — 7 — 0 — 3 — 6 — 9"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 9 — 6 — 3 — 0 — 7 — 4 — 1 in forward order."
  },
  {
    "id": "mem-025",
    "category": "Sequence Memory",
    "difficulty": "medium",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">7 — 4 — 1 — 8 — 5</span>",
    "studyDuration": 5,
    "question": "Which of the following was the exact 5-digit sequence shown?",
    "options": [
      "7 — 4 — 1 — 8 — 5",
      "7 — 5 — 1 — 8 — 5",
      "7 — 4 — 1 — 8 — 7",
      "5 — 8 — 1 — 4 — 7"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 7 — 4 — 1 — 8 — 5 in forward order."
  },
  {
    "id": "mem-026",
    "category": "Sequence Memory",
    "difficulty": "medium",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">5 — 2 — 9 — 6 — 3 — 0 — 7</span>",
    "studyDuration": 7,
    "question": "Which of the following was the exact 7-digit sequence shown?",
    "options": [
      "5 — 2 — 9 — 6 — 3 — 0 — 7",
      "5 — 3 — 9 — 6 — 3 — 0 — 7",
      "5 — 2 — 9 — 6 — 3 — 0 — 9",
      "7 — 0 — 3 — 6 — 9 — 2 — 5"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 5 — 2 — 9 — 6 — 3 — 0 — 7 in forward order."
  },
  {
    "id": "mem-027",
    "category": "Sequence Memory",
    "difficulty": "medium",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">3 — 0 — 7 — 4 — 1</span>",
    "studyDuration": 5,
    "question": "Which of the following was the exact 5-digit sequence shown?",
    "options": [
      "3 — 0 — 7 — 4 — 1",
      "3 — 1 — 7 — 4 — 1",
      "3 — 0 — 7 — 4 — 3",
      "1 — 4 — 7 — 0 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 3 — 0 — 7 — 4 — 1 in forward order."
  },
  {
    "id": "mem-028",
    "category": "Sequence Memory",
    "difficulty": "medium",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">1 — 8 — 5 — 2 — 9 — 6 — 3</span>",
    "studyDuration": 7,
    "question": "Which of the following was the exact 7-digit sequence shown?",
    "options": [
      "1 — 8 — 5 — 2 — 9 — 6 — 3",
      "1 — 9 — 5 — 2 — 9 — 6 — 3",
      "1 — 8 — 5 — 2 — 9 — 6 — 5",
      "3 — 6 — 9 — 2 — 5 — 8 — 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 1 — 8 — 5 — 2 — 9 — 6 — 3 in forward order."
  },
  {
    "id": "mem-029",
    "category": "Sequence Memory",
    "difficulty": "medium",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">9 — 6 — 3 — 0 — 7</span>",
    "studyDuration": 5,
    "question": "Which of the following was the exact 5-digit sequence shown?",
    "options": [
      "9 — 6 — 3 — 0 — 7",
      "9 — 7 — 3 — 0 — 7",
      "9 — 6 — 3 — 0 — 9",
      "7 — 0 — 3 — 6 — 9"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 9 — 6 — 3 — 0 — 7 in forward order."
  },
  {
    "id": "mem-030",
    "category": "Sequence Memory",
    "difficulty": "medium",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">7 — 4 — 1 — 8 — 5 — 2 — 9</span>",
    "studyDuration": 7,
    "question": "Which of the following was the exact 7-digit sequence shown?",
    "options": [
      "7 — 4 — 1 — 8 — 5 — 2 — 9",
      "7 — 5 — 1 — 8 — 5 — 2 — 9",
      "7 — 4 — 1 — 8 — 5 — 2 — 1",
      "9 — 2 — 5 — 8 — 1 — 4 — 7"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 7 — 4 — 1 — 8 — 5 — 2 — 9 in forward order."
  },
  {
    "id": "mem-031",
    "category": "Sequence Memory",
    "difficulty": "medium",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">5 — 2 — 9 — 6 — 3</span>",
    "studyDuration": 5,
    "question": "Which of the following was the exact 5-digit sequence shown?",
    "options": [
      "5 — 2 — 9 — 6 — 3",
      "5 — 3 — 9 — 6 — 3",
      "5 — 2 — 9 — 6 — 5",
      "3 — 6 — 9 — 2 — 5"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 5 — 2 — 9 — 6 — 3 in forward order."
  },
  {
    "id": "mem-032",
    "category": "Sequence Memory",
    "difficulty": "medium",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">3 — 0 — 7 — 4 — 1 — 8 — 5</span>",
    "studyDuration": 7,
    "question": "Which of the following was the exact 7-digit sequence shown?",
    "options": [
      "3 — 0 — 7 — 4 — 1 — 8 — 5",
      "3 — 1 — 7 — 4 — 1 — 8 — 5",
      "3 — 0 — 7 — 4 — 1 — 8 — 7",
      "5 — 8 — 1 — 4 — 7 — 0 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 3 — 0 — 7 — 4 — 1 — 8 — 5 in forward order."
  },
  {
    "id": "mem-033",
    "category": "Sequence Memory",
    "difficulty": "medium",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">1 — 8 — 5 — 2 — 9</span>",
    "studyDuration": 5,
    "question": "Which of the following was the exact 5-digit sequence shown?",
    "options": [
      "1 — 8 — 5 — 2 — 9",
      "1 — 9 — 5 — 2 — 9",
      "1 — 8 — 5 — 2 — 1",
      "9 — 2 — 5 — 8 — 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 1 — 8 — 5 — 2 — 9 in forward order."
  },
  {
    "id": "mem-034",
    "category": "Sequence Memory",
    "difficulty": "medium",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">9 — 6 — 3 — 0 — 7 — 4 — 1</span>",
    "studyDuration": 7,
    "question": "Which of the following was the exact 7-digit sequence shown?",
    "options": [
      "9 — 6 — 3 — 0 — 7 — 4 — 1",
      "9 — 7 — 3 — 0 — 7 — 4 — 1",
      "9 — 6 — 3 — 0 — 7 — 4 — 3",
      "1 — 4 — 7 — 0 — 3 — 6 — 9"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 9 — 6 — 3 — 0 — 7 — 4 — 1 in forward order."
  },
  {
    "id": "mem-035",
    "category": "Sequence Memory",
    "difficulty": "medium",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">7 — 4 — 1 — 8 — 5</span>",
    "studyDuration": 5,
    "question": "Which of the following was the exact 5-digit sequence shown?",
    "options": [
      "7 — 4 — 1 — 8 — 5",
      "7 — 5 — 1 — 8 — 5",
      "7 — 4 — 1 — 8 — 7",
      "5 — 8 — 1 — 4 — 7"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 7 — 4 — 1 — 8 — 5 in forward order."
  },
  {
    "id": "mem-036",
    "category": "Sequence Memory",
    "difficulty": "medium",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">5 — 2 — 9 — 6 — 3 — 0 — 7</span>",
    "studyDuration": 7,
    "question": "Which of the following was the exact 7-digit sequence shown?",
    "options": [
      "5 — 2 — 9 — 6 — 3 — 0 — 7",
      "5 — 3 — 9 — 6 — 3 — 0 — 7",
      "5 — 2 — 9 — 6 — 3 — 0 — 9",
      "7 — 0 — 3 — 6 — 9 — 2 — 5"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 5 — 2 — 9 — 6 — 3 — 0 — 7 in forward order."
  },
  {
    "id": "mem-037",
    "category": "Sequence Memory",
    "difficulty": "medium",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">3 — 0 — 7 — 4 — 1</span>",
    "studyDuration": 5,
    "question": "Which of the following was the exact 5-digit sequence shown?",
    "options": [
      "3 — 0 — 7 — 4 — 1",
      "3 — 1 — 7 — 4 — 1",
      "3 — 0 — 7 — 4 — 3",
      "1 — 4 — 7 — 0 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 3 — 0 — 7 — 4 — 1 in forward order."
  },
  {
    "id": "mem-038",
    "category": "Sequence Memory",
    "difficulty": "hard",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">1 — 8 — 5 — 2 — 9 — 6 — 3</span>",
    "studyDuration": 7,
    "question": "Which of the following was the exact 7-digit sequence shown?",
    "options": [
      "1 — 8 — 5 — 2 — 9 — 6 — 3",
      "1 — 9 — 5 — 2 — 9 — 6 — 3",
      "1 — 8 — 5 — 2 — 9 — 6 — 5",
      "3 — 6 — 9 — 2 — 5 — 8 — 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 1 — 8 — 5 — 2 — 9 — 6 — 3 in forward order."
  },
  {
    "id": "mem-039",
    "category": "Sequence Memory",
    "difficulty": "hard",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">9 — 6 — 3 — 0 — 7</span>",
    "studyDuration": 5,
    "question": "Which of the following was the exact 5-digit sequence shown?",
    "options": [
      "9 — 6 — 3 — 0 — 7",
      "9 — 7 — 3 — 0 — 7",
      "9 — 6 — 3 — 0 — 9",
      "7 — 0 — 3 — 6 — 9"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 9 — 6 — 3 — 0 — 7 in forward order."
  },
  {
    "id": "mem-040",
    "category": "Sequence Memory",
    "difficulty": "hard",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">7 — 4 — 1 — 8 — 5 — 2 — 9</span>",
    "studyDuration": 7,
    "question": "Which of the following was the exact 7-digit sequence shown?",
    "options": [
      "7 — 4 — 1 — 8 — 5 — 2 — 9",
      "7 — 5 — 1 — 8 — 5 — 2 — 9",
      "7 — 4 — 1 — 8 — 5 — 2 — 1",
      "9 — 2 — 5 — 8 — 1 — 4 — 7"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 7 — 4 — 1 — 8 — 5 — 2 — 9 in forward order."
  },
  {
    "id": "mem-041",
    "category": "Sequence Memory",
    "difficulty": "hard",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">5 — 2 — 9 — 6 — 3</span>",
    "studyDuration": 5,
    "question": "Which of the following was the exact 5-digit sequence shown?",
    "options": [
      "5 — 2 — 9 — 6 — 3",
      "5 — 3 — 9 — 6 — 3",
      "5 — 2 — 9 — 6 — 5",
      "3 — 6 — 9 — 2 — 5"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 5 — 2 — 9 — 6 — 3 in forward order."
  },
  {
    "id": "mem-042",
    "category": "Sequence Memory",
    "difficulty": "hard",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">3 — 0 — 7 — 4 — 1 — 8 — 5</span>",
    "studyDuration": 7,
    "question": "Which of the following was the exact 7-digit sequence shown?",
    "options": [
      "3 — 0 — 7 — 4 — 1 — 8 — 5",
      "3 — 1 — 7 — 4 — 1 — 8 — 5",
      "3 — 0 — 7 — 4 — 1 — 8 — 7",
      "5 — 8 — 1 — 4 — 7 — 0 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 3 — 0 — 7 — 4 — 1 — 8 — 5 in forward order."
  },
  {
    "id": "mem-043",
    "category": "Sequence Memory",
    "difficulty": "hard",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">1 — 8 — 5 — 2 — 9</span>",
    "studyDuration": 5,
    "question": "Which of the following was the exact 5-digit sequence shown?",
    "options": [
      "1 — 8 — 5 — 2 — 9",
      "1 — 9 — 5 — 2 — 9",
      "1 — 8 — 5 — 2 — 1",
      "9 — 2 — 5 — 8 — 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 1 — 8 — 5 — 2 — 9 in forward order."
  },
  {
    "id": "mem-044",
    "category": "Sequence Memory",
    "difficulty": "hard",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">9 — 6 — 3 — 0 — 7 — 4 — 1</span>",
    "studyDuration": 7,
    "question": "Which of the following was the exact 7-digit sequence shown?",
    "options": [
      "9 — 6 — 3 — 0 — 7 — 4 — 1",
      "9 — 7 — 3 — 0 — 7 — 4 — 1",
      "9 — 6 — 3 — 0 — 7 — 4 — 3",
      "1 — 4 — 7 — 0 — 3 — 6 — 9"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 9 — 6 — 3 — 0 — 7 — 4 — 1 in forward order."
  },
  {
    "id": "mem-045",
    "category": "Sequence Memory",
    "difficulty": "hard",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">7 — 4 — 1 — 8 — 5</span>",
    "studyDuration": 5,
    "question": "Which of the following was the exact 5-digit sequence shown?",
    "options": [
      "7 — 4 — 1 — 8 — 5",
      "7 — 5 — 1 — 8 — 5",
      "7 — 4 — 1 — 8 — 7",
      "5 — 8 — 1 — 4 — 7"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 7 — 4 — 1 — 8 — 5 in forward order."
  },
  {
    "id": "mem-046",
    "category": "Sequence Memory",
    "difficulty": "hard",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">5 — 2 — 9 — 6 — 3 — 0 — 7</span>",
    "studyDuration": 7,
    "question": "Which of the following was the exact 7-digit sequence shown?",
    "options": [
      "5 — 2 — 9 — 6 — 3 — 0 — 7",
      "5 — 3 — 9 — 6 — 3 — 0 — 7",
      "5 — 2 — 9 — 6 — 3 — 0 — 9",
      "7 — 0 — 3 — 6 — 9 — 2 — 5"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 5 — 2 — 9 — 6 — 3 — 0 — 7 in forward order."
  },
  {
    "id": "mem-047",
    "category": "Sequence Memory",
    "difficulty": "hard",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">3 — 0 — 7 — 4 — 1</span>",
    "studyDuration": 5,
    "question": "Which of the following was the exact 5-digit sequence shown?",
    "options": [
      "3 — 0 — 7 — 4 — 1",
      "3 — 1 — 7 — 4 — 1",
      "3 — 0 — 7 — 4 — 3",
      "1 — 4 — 7 — 0 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 3 — 0 — 7 — 4 — 1 in forward order."
  },
  {
    "id": "mem-048",
    "category": "Sequence Memory",
    "difficulty": "hard",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">1 — 8 — 5 — 2 — 9 — 6 — 3</span>",
    "studyDuration": 7,
    "question": "Which of the following was the exact 7-digit sequence shown?",
    "options": [
      "1 — 8 — 5 — 2 — 9 — 6 — 3",
      "1 — 9 — 5 — 2 — 9 — 6 — 3",
      "1 — 8 — 5 — 2 — 9 — 6 — 5",
      "3 — 6 — 9 — 2 — 5 — 8 — 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 1 — 8 — 5 — 2 — 9 — 6 — 3 in forward order."
  },
  {
    "id": "mem-049",
    "category": "Sequence Memory",
    "difficulty": "hard",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">9 — 6 — 3 — 0 — 7</span>",
    "studyDuration": 5,
    "question": "Which of the following was the exact 5-digit sequence shown?",
    "options": [
      "9 — 6 — 3 — 0 — 7",
      "9 — 7 — 3 — 0 — 7",
      "9 — 6 — 3 — 0 — 9",
      "7 — 0 — 3 — 6 — 9"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 9 — 6 — 3 — 0 — 7 in forward order."
  },
  {
    "id": "mem-050",
    "category": "Sequence Memory",
    "difficulty": "hard",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">7 — 4 — 1 — 8 — 5 — 2 — 9</span>",
    "studyDuration": 7,
    "question": "Which of the following was the exact 7-digit sequence shown?",
    "options": [
      "7 — 4 — 1 — 8 — 5 — 2 — 9",
      "7 — 5 — 1 — 8 — 5 — 2 — 9",
      "7 — 4 — 1 — 8 — 5 — 2 — 1",
      "9 — 2 — 5 — 8 — 1 — 4 — 7"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 7 — 4 — 1 — 8 — 5 — 2 — 9 in forward order."
  },
  {
    "id": "mem-051",
    "category": "Sequence Memory",
    "difficulty": "hard",
    "stimulus": "<span class=\"text-2xl sm:text-3xl font-mono font-bold tracking-widest text-brand\">5 — 2 — 9 — 6 — 3</span>",
    "studyDuration": 5,
    "question": "Which of the following was the exact 5-digit sequence shown?",
    "options": [
      "5 — 2 — 9 — 6 — 3",
      "5 — 3 — 9 — 6 — 3",
      "5 — 2 — 9 — 6 — 5",
      "3 — 6 — 9 — 2 — 5"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The sequence displayed was 5 — 2 — 9 — 6 — 3 in forward order."
  },
  {
    "id": "mem-052",
    "category": "Visual / Spatial Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-2 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-10 h-10 bg-brand rounded-lg\"></div><div class=\"w-10 h-10 bg-slate-300 rounded-lg\"></div><div class=\"w-10 h-10 bg-slate-300 rounded-lg\"></div><div class=\"w-10 h-10 bg-brand rounded-lg\"></div></div>",
    "studyDuration": 4,
    "question": "In the 2x2 grid, which positions were highlighted in blue?",
    "options": [
      "Top-Left and Bottom-Right",
      "Top-Left and Top-Right",
      "Top-Right and Bottom-Left",
      "Bottom-Left and Bottom-Right"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The highlighted squares formed a diagonal from Top-Left to Bottom-Right."
  },
  {
    "id": "mem-053",
    "category": "Visual / Spatial Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-3 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div></div>",
    "studyDuration": 5,
    "question": "How many total squares were colored blue in the 3x3 grid?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "There were exactly 3 blue squares, forming the main top-left to bottom-right diagonal."
  },
  {
    "id": "mem-054",
    "category": "Visual / Spatial Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"flex items-center gap-3 p-3 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 rounded-full bg-red-500\"></div><div class=\"w-8 h-8 bg-blue-500\"></div><div class=\"w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[32px] border-b-green-500\"></div></div>",
    "studyDuration": 5,
    "question": "What was the shape of the green figure?",
    "options": [
      "Circle",
      "Square",
      "Triangle",
      "Hexagon"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "The figures were a red circle, a blue square, and a green triangle."
  },
  {
    "id": "mem-055",
    "category": "Visual / Spatial Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-3 bg-slate-100 rounded-xl\"><div class=\"w-7 h-7 bg-brand rounded\"></div><div class=\"w-7 h-7 bg-slate-300 rounded\"></div><div class=\"w-7 h-7 bg-slate-300 rounded\"></div><div class=\"w-7 h-7 bg-brand rounded\"></div><div class=\"w-7 h-7 bg-slate-300 rounded\"></div><div class=\"w-7 h-7 bg-brand rounded\"></div><div class=\"w-7 h-7 bg-brand rounded\"></div><div class=\"w-7 h-7 bg-slate-300 rounded\"></div><div class=\"w-7 h-7 bg-slate-300 rounded\"></div><div class=\"w-7 h-7 bg-brand rounded\"></div><div class=\"w-7 h-7 bg-brand rounded\"></div><div class=\"w-7 h-7 bg-slate-300 rounded\"></div><div class=\"w-7 h-7 bg-brand rounded\"></div><div class=\"w-7 h-7 bg-slate-300 rounded\"></div><div class=\"w-7 h-7 bg-slate-300 rounded\"></div><div class=\"w-7 h-7 bg-brand rounded\"></div></div>",
    "studyDuration": 7,
    "question": "How many total blue squares were in the 4x4 grid?",
    "options": [
      "6",
      "7",
      "8",
      "9"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "The 4x4 grid contained 8 blue squares (4 corners + 4 center squares in a symmetric pattern)."
  },
  {
    "id": "mem-056",
    "category": "Visual / Spatial Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"flex items-center gap-3 p-3 bg-slate-100 rounded-xl\"><div class=\"px-3 py-1 bg-red-100 text-red-700 font-bold rounded border border-red-300\">Triangle: Red</div><div class=\"px-3 py-1 bg-blue-100 text-blue-700 font-bold rounded border border-blue-300\">Circle: Blue</div><div class=\"px-3 py-1 bg-yellow-100 text-yellow-700 font-bold rounded border border-yellow-300\">Square: Yellow</div><div class=\"px-3 py-1 bg-green-100 text-green-700 font-bold rounded border border-green-300\">Star: Green</div></div>",
    "studyDuration": 7,
    "question": "Which shape was paired with the color Yellow?",
    "options": [
      "Circle",
      "Triangle",
      "Square",
      "Star"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "The pairings were: Triangle = Red, Circle = Blue, Square = Yellow, Star = Green."
  },
  {
    "id": "mem-057",
    "category": "Visual / Spatial Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 1, Column 3",
      "Row 2, Column 3",
      "Row 1, Column 1",
      "Row 2, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 1, Column 3."
  },
  {
    "id": "mem-058",
    "category": "Visual / Spatial Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 3, Column 3",
      "Row 1, Column 3",
      "Row 3, Column 1",
      "Row 1, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 3, Column 3."
  },
  {
    "id": "mem-059",
    "category": "Visual / Spatial Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 2, Column 3",
      "Row 3, Column 3",
      "Row 2, Column 1",
      "Row 3, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 2, Column 3."
  },
  {
    "id": "mem-060",
    "category": "Visual / Spatial Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 1, Column 3",
      "Row 2, Column 3",
      "Row 1, Column 1",
      "Row 2, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 1, Column 3."
  },
  {
    "id": "mem-061",
    "category": "Visual / Spatial Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 3, Column 3",
      "Row 1, Column 3",
      "Row 3, Column 1",
      "Row 1, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 3, Column 3."
  },
  {
    "id": "mem-062",
    "category": "Visual / Spatial Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 2, Column 3",
      "Row 3, Column 3",
      "Row 2, Column 1",
      "Row 3, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 2, Column 3."
  },
  {
    "id": "mem-063",
    "category": "Visual / Spatial Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 1, Column 3",
      "Row 2, Column 3",
      "Row 1, Column 1",
      "Row 2, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 1, Column 3."
  },
  {
    "id": "mem-064",
    "category": "Visual / Spatial Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 3, Column 3",
      "Row 1, Column 3",
      "Row 3, Column 1",
      "Row 1, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 3, Column 3."
  },
  {
    "id": "mem-065",
    "category": "Visual / Spatial Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 2, Column 3",
      "Row 3, Column 3",
      "Row 2, Column 1",
      "Row 3, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 2, Column 3."
  },
  {
    "id": "mem-066",
    "category": "Visual / Spatial Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 1, Column 3",
      "Row 2, Column 3",
      "Row 1, Column 1",
      "Row 2, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 1, Column 3."
  },
  {
    "id": "mem-067",
    "category": "Visual / Spatial Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 3, Column 3",
      "Row 1, Column 3",
      "Row 3, Column 1",
      "Row 1, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 3, Column 3."
  },
  {
    "id": "mem-068",
    "category": "Visual / Spatial Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 2, Column 3",
      "Row 3, Column 3",
      "Row 2, Column 1",
      "Row 3, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 2, Column 3."
  },
  {
    "id": "mem-069",
    "category": "Visual / Spatial Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 1, Column 3",
      "Row 2, Column 3",
      "Row 1, Column 1",
      "Row 2, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 1, Column 3."
  },
  {
    "id": "mem-070",
    "category": "Visual / Spatial Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 3, Column 3",
      "Row 1, Column 3",
      "Row 3, Column 1",
      "Row 1, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 3, Column 3."
  },
  {
    "id": "mem-071",
    "category": "Visual / Spatial Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 2, Column 3",
      "Row 3, Column 3",
      "Row 2, Column 1",
      "Row 3, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 2, Column 3."
  },
  {
    "id": "mem-072",
    "category": "Visual / Spatial Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 1, Column 3",
      "Row 2, Column 3",
      "Row 1, Column 1",
      "Row 2, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 1, Column 3."
  },
  {
    "id": "mem-073",
    "category": "Visual / Spatial Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 3, Column 3",
      "Row 1, Column 3",
      "Row 3, Column 1",
      "Row 1, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 3, Column 3."
  },
  {
    "id": "mem-074",
    "category": "Visual / Spatial Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 2, Column 3",
      "Row 3, Column 3",
      "Row 2, Column 1",
      "Row 3, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 2, Column 3."
  },
  {
    "id": "mem-075",
    "category": "Visual / Spatial Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 1, Column 3",
      "Row 2, Column 3",
      "Row 1, Column 1",
      "Row 2, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 1, Column 3."
  },
  {
    "id": "mem-076",
    "category": "Visual / Spatial Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 3, Column 3",
      "Row 1, Column 3",
      "Row 3, Column 1",
      "Row 1, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 3, Column 3."
  },
  {
    "id": "mem-077",
    "category": "Visual / Spatial Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 2, Column 3",
      "Row 3, Column 3",
      "Row 2, Column 1",
      "Row 3, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 2, Column 3."
  },
  {
    "id": "mem-078",
    "category": "Visual / Spatial Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 1, Column 3",
      "Row 2, Column 3",
      "Row 1, Column 1",
      "Row 2, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 1, Column 3."
  },
  {
    "id": "mem-079",
    "category": "Visual / Spatial Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 3, Column 3",
      "Row 1, Column 3",
      "Row 3, Column 1",
      "Row 1, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 3, Column 3."
  },
  {
    "id": "mem-080",
    "category": "Visual / Spatial Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 2, Column 3",
      "Row 3, Column 3",
      "Row 2, Column 1",
      "Row 3, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 2, Column 3."
  },
  {
    "id": "mem-081",
    "category": "Visual / Spatial Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 1, Column 3",
      "Row 2, Column 3",
      "Row 1, Column 1",
      "Row 2, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 1, Column 3."
  },
  {
    "id": "mem-082",
    "category": "Visual / Spatial Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 3, Column 3",
      "Row 1, Column 3",
      "Row 3, Column 1",
      "Row 1, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 3, Column 3."
  },
  {
    "id": "mem-083",
    "category": "Visual / Spatial Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 2, Column 3",
      "Row 3, Column 3",
      "Row 2, Column 1",
      "Row 3, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 2, Column 3."
  },
  {
    "id": "mem-084",
    "category": "Visual / Spatial Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 1, Column 3",
      "Row 2, Column 3",
      "Row 1, Column 1",
      "Row 2, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 1, Column 3."
  },
  {
    "id": "mem-085",
    "category": "Visual / Spatial Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 3, Column 3",
      "Row 1, Column 3",
      "Row 3, Column 1",
      "Row 1, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 3, Column 3."
  },
  {
    "id": "mem-086",
    "category": "Visual / Spatial Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 2, Column 3",
      "Row 3, Column 3",
      "Row 2, Column 1",
      "Row 3, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 2, Column 3."
  },
  {
    "id": "mem-087",
    "category": "Visual / Spatial Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 1, Column 3",
      "Row 2, Column 3",
      "Row 1, Column 1",
      "Row 2, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 1, Column 3."
  },
  {
    "id": "mem-088",
    "category": "Visual / Spatial Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 3, Column 3",
      "Row 1, Column 3",
      "Row 3, Column 1",
      "Row 1, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 3, Column 3."
  },
  {
    "id": "mem-089",
    "category": "Visual / Spatial Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 2, Column 3",
      "Row 3, Column 3",
      "Row 2, Column 1",
      "Row 3, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 2, Column 3."
  },
  {
    "id": "mem-090",
    "category": "Visual / Spatial Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 1, Column 3",
      "Row 2, Column 3",
      "Row 1, Column 1",
      "Row 2, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 1, Column 3."
  },
  {
    "id": "mem-091",
    "category": "Visual / Spatial Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 3, Column 3",
      "Row 1, Column 3",
      "Row 3, Column 1",
      "Row 1, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 3, Column 3."
  },
  {
    "id": "mem-092",
    "category": "Visual / Spatial Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 2, Column 3",
      "Row 3, Column 3",
      "Row 2, Column 1",
      "Row 3, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 2, Column 3."
  },
  {
    "id": "mem-093",
    "category": "Visual / Spatial Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 1, Column 3",
      "Row 2, Column 3",
      "Row 1, Column 1",
      "Row 2, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 1, Column 3."
  },
  {
    "id": "mem-094",
    "category": "Visual / Spatial Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 3, Column 3",
      "Row 1, Column 3",
      "Row 3, Column 1",
      "Row 1, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 3, Column 3."
  },
  {
    "id": "mem-095",
    "category": "Visual / Spatial Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 2, Column 3",
      "Row 3, Column 3",
      "Row 2, Column 1",
      "Row 3, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 2, Column 3."
  },
  {
    "id": "mem-096",
    "category": "Visual / Spatial Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 1, Column 3",
      "Row 2, Column 3",
      "Row 1, Column 1",
      "Row 2, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 1, Column 3."
  },
  {
    "id": "mem-097",
    "category": "Visual / Spatial Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 3, Column 3",
      "Row 1, Column 3",
      "Row 3, Column 1",
      "Row 1, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 3, Column 3."
  },
  {
    "id": "mem-098",
    "category": "Visual / Spatial Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 2, Column 3",
      "Row 3, Column 3",
      "Row 2, Column 1",
      "Row 3, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 2, Column 3."
  },
  {
    "id": "mem-099",
    "category": "Visual / Spatial Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 1, Column 3",
      "Row 2, Column 3",
      "Row 1, Column 1",
      "Row 2, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 1, Column 3."
  },
  {
    "id": "mem-100",
    "category": "Visual / Spatial Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 3, Column 3",
      "Row 1, Column 3",
      "Row 3, Column 1",
      "Row 1, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 3, Column 3."
  },
  {
    "id": "mem-101",
    "category": "Visual / Spatial Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "In the 3x3 grid, where was the single blue square located?",
    "options": [
      "Row 2, Column 3",
      "Row 3, Column 3",
      "Row 2, Column 1",
      "Row 3, Column 1"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The blue square was placed at Row 2, Column 3."
  },
  {
    "id": "mem-102",
    "category": "Recognition Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base sm:text-lg font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Apple</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Guitar</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Bicycle</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown?",
    "options": [
      "Piano",
      "Guitar",
      "Orange",
      "Airplane"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The 3 items shown were Apple, Guitar, and Bicycle. \"Guitar\" was present."
  },
  {
    "id": "mem-103",
    "category": "Recognition Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Chair</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Table</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Lamp</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Clock</span></div>",
    "studyDuration": 5,
    "question": "Which of the following items was NOT in the list?",
    "options": [
      "Chair",
      "Sofa",
      "Lamp",
      "Clock"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The items shown were Chair, Table, Lamp, and Clock. \"Sofa\" was not on the list."
  },
  {
    "id": "mem-104",
    "category": "Recognition Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-sm sm:text-base font-semibold text-ink\"><span class=\"px-2.5 py-1 bg-white border border-border-line rounded-lg\">Falcon</span><span class=\"px-2.5 py-1 bg-white border border-border-line rounded-lg\">Harbor</span><span class=\"px-2.5 py-1 bg-white border border-border-line rounded-lg\">Castle</span><span class=\"px-2.5 py-1 bg-white border border-border-line rounded-lg\">Meadow</span><span class=\"px-2.5 py-1 bg-white border border-border-line rounded-lg\">Shield</span></div>",
    "studyDuration": 5,
    "question": "Which of the following words was present in the list?",
    "options": [
      "Tower",
      "Harbor",
      "Sword",
      "River"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The 5 words shown were Falcon, Harbor, Castle, Meadow, Shield. \"Harbor\" was on the list."
  },
  {
    "id": "mem-105",
    "category": "Recognition Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-sm sm:text-base font-semibold text-ink\"><span class=\"px-2.5 py-1 bg-white border border-border-line rounded-lg\">Jupiter</span><span class=\"px-2.5 py-1 bg-white border border-border-line rounded-lg\">Saturn</span><span class=\"px-2.5 py-1 bg-white border border-border-line rounded-lg\">Neptune</span><span class=\"px-2.5 py-1 bg-white border border-border-line rounded-lg\">Venus</span></div>",
    "studyDuration": 5,
    "question": "Which planet was NOT shown in the stimulus?",
    "options": [
      "Mars",
      "Saturn",
      "Neptune",
      "Venus"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The planets shown were Jupiter, Saturn, Neptune, and Venus. \"Mars\" was not present."
  },
  {
    "id": "mem-106",
    "category": "Recognition Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-xs sm:text-sm font-semibold text-ink\"><span class=\"px-2 py-1 bg-white border border-border-line rounded\">Cascade</span><span class=\"px-2 py-1 bg-white border border-border-line rounded\">Horizon</span><span class=\"px-2 py-1 bg-white border border-border-line rounded\">Monarch</span><span class=\"px-2 py-1 bg-white border border-border-line rounded\">Solitude</span><span class=\"px-2 py-1 bg-white border border-border-line rounded\">Velocity</span><span class=\"px-2 py-1 bg-white border border-border-line rounded\">Quasar</span></div>",
    "studyDuration": 7,
    "question": "Which of the following words was NOT in the 6-word stimulus?",
    "options": [
      "Horizon",
      "Eclipse",
      "Velocity",
      "Cascade"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The 6 words were Cascade, Horizon, Monarch, Solitude, Velocity, Quasar. \"Eclipse\" was not shown."
  },
  {
    "id": "mem-107",
    "category": "Recognition Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Pyramid</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Lantern</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Granite</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Pyramid",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Pyramid, Lantern, and Granite. \"Pyramid\" was present."
  },
  {
    "id": "mem-108",
    "category": "Recognition Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Granite</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Monarch</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Orchid</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Granite",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Granite, Monarch, and Orchid. \"Granite\" was present."
  },
  {
    "id": "mem-109",
    "category": "Recognition Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Orchid</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Telescope</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Canyon</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Orchid",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Orchid, Telescope, and Canyon. \"Orchid\" was present."
  },
  {
    "id": "mem-110",
    "category": "Recognition Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Canyon</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Velvet</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Compass</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Canyon",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Canyon, Velvet, and Compass. \"Canyon\" was present."
  },
  {
    "id": "mem-111",
    "category": "Recognition Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Compass</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Citadel</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Pyramid</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Compass",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Compass, Citadel, and Pyramid. \"Compass\" was present."
  },
  {
    "id": "mem-112",
    "category": "Recognition Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Pyramid</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Lantern</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Granite</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Pyramid",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Pyramid, Lantern, and Granite. \"Pyramid\" was present."
  },
  {
    "id": "mem-113",
    "category": "Recognition Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Granite</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Monarch</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Orchid</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Granite",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Granite, Monarch, and Orchid. \"Granite\" was present."
  },
  {
    "id": "mem-114",
    "category": "Recognition Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Orchid</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Telescope</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Canyon</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Orchid",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Orchid, Telescope, and Canyon. \"Orchid\" was present."
  },
  {
    "id": "mem-115",
    "category": "Recognition Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Canyon</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Velvet</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Compass</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Canyon",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Canyon, Velvet, and Compass. \"Canyon\" was present."
  },
  {
    "id": "mem-116",
    "category": "Recognition Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Compass</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Citadel</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Pyramid</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Compass",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Compass, Citadel, and Pyramid. \"Compass\" was present."
  },
  {
    "id": "mem-117",
    "category": "Recognition Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Pyramid</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Lantern</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Granite</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Pyramid",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Pyramid, Lantern, and Granite. \"Pyramid\" was present."
  },
  {
    "id": "mem-118",
    "category": "Recognition Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Granite</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Monarch</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Orchid</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Granite",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Granite, Monarch, and Orchid. \"Granite\" was present."
  },
  {
    "id": "mem-119",
    "category": "Recognition Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Orchid</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Telescope</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Canyon</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Orchid",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Orchid, Telescope, and Canyon. \"Orchid\" was present."
  },
  {
    "id": "mem-120",
    "category": "Recognition Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Canyon</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Velvet</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Compass</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Canyon",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Canyon, Velvet, and Compass. \"Canyon\" was present."
  },
  {
    "id": "mem-121",
    "category": "Recognition Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Compass</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Citadel</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Pyramid</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Compass",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Compass, Citadel, and Pyramid. \"Compass\" was present."
  },
  {
    "id": "mem-122",
    "category": "Recognition Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Pyramid</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Lantern</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Granite</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Pyramid",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Pyramid, Lantern, and Granite. \"Pyramid\" was present."
  },
  {
    "id": "mem-123",
    "category": "Recognition Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Granite</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Monarch</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Orchid</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Granite",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Granite, Monarch, and Orchid. \"Granite\" was present."
  },
  {
    "id": "mem-124",
    "category": "Recognition Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Orchid</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Telescope</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Canyon</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Orchid",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Orchid, Telescope, and Canyon. \"Orchid\" was present."
  },
  {
    "id": "mem-125",
    "category": "Recognition Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Canyon</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Velvet</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Compass</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Canyon",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Canyon, Velvet, and Compass. \"Canyon\" was present."
  },
  {
    "id": "mem-126",
    "category": "Recognition Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Compass</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Citadel</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Pyramid</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Compass",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Compass, Citadel, and Pyramid. \"Compass\" was present."
  },
  {
    "id": "mem-127",
    "category": "Recognition Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Pyramid</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Lantern</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Granite</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Pyramid",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Pyramid, Lantern, and Granite. \"Pyramid\" was present."
  },
  {
    "id": "mem-128",
    "category": "Recognition Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Granite</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Monarch</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Orchid</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Granite",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Granite, Monarch, and Orchid. \"Granite\" was present."
  },
  {
    "id": "mem-129",
    "category": "Recognition Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Orchid</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Telescope</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Canyon</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Orchid",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Orchid, Telescope, and Canyon. \"Orchid\" was present."
  },
  {
    "id": "mem-130",
    "category": "Recognition Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Canyon</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Velvet</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Compass</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Canyon",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Canyon, Velvet, and Compass. \"Canyon\" was present."
  },
  {
    "id": "mem-131",
    "category": "Recognition Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Compass</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Citadel</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Pyramid</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Compass",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Compass, Citadel, and Pyramid. \"Compass\" was present."
  },
  {
    "id": "mem-132",
    "category": "Recognition Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Pyramid</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Lantern</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Granite</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Pyramid",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Pyramid, Lantern, and Granite. \"Pyramid\" was present."
  },
  {
    "id": "mem-133",
    "category": "Recognition Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Granite</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Monarch</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Orchid</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Granite",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Granite, Monarch, and Orchid. \"Granite\" was present."
  },
  {
    "id": "mem-134",
    "category": "Recognition Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Orchid</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Telescope</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Canyon</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Orchid",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Orchid, Telescope, and Canyon. \"Orchid\" was present."
  },
  {
    "id": "mem-135",
    "category": "Recognition Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Canyon</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Velvet</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Compass</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Canyon",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Canyon, Velvet, and Compass. \"Canyon\" was present."
  },
  {
    "id": "mem-136",
    "category": "Recognition Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Compass</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Citadel</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Pyramid</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Compass",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Compass, Citadel, and Pyramid. \"Compass\" was present."
  },
  {
    "id": "mem-137",
    "category": "Recognition Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Pyramid</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Lantern</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Granite</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Pyramid",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Pyramid, Lantern, and Granite. \"Pyramid\" was present."
  },
  {
    "id": "mem-138",
    "category": "Recognition Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Granite</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Monarch</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Orchid</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Granite",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Granite, Monarch, and Orchid. \"Granite\" was present."
  },
  {
    "id": "mem-139",
    "category": "Recognition Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Orchid</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Telescope</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Canyon</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Orchid",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Orchid, Telescope, and Canyon. \"Orchid\" was present."
  },
  {
    "id": "mem-140",
    "category": "Recognition Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Canyon</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Velvet</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Compass</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Canyon",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Canyon, Velvet, and Compass. \"Canyon\" was present."
  },
  {
    "id": "mem-141",
    "category": "Recognition Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Compass</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Citadel</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Pyramid</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Compass",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Compass, Citadel, and Pyramid. \"Compass\" was present."
  },
  {
    "id": "mem-142",
    "category": "Recognition Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Pyramid</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Lantern</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Granite</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Pyramid",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Pyramid, Lantern, and Granite. \"Pyramid\" was present."
  },
  {
    "id": "mem-143",
    "category": "Recognition Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Granite</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Monarch</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Orchid</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Granite",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Granite, Monarch, and Orchid. \"Granite\" was present."
  },
  {
    "id": "mem-144",
    "category": "Recognition Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Orchid</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Telescope</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Canyon</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Orchid",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Orchid, Telescope, and Canyon. \"Orchid\" was present."
  },
  {
    "id": "mem-145",
    "category": "Recognition Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Canyon</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Velvet</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Compass</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Canyon",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Canyon, Velvet, and Compass. \"Canyon\" was present."
  },
  {
    "id": "mem-146",
    "category": "Recognition Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Compass</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Citadel</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Pyramid</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Compass",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Compass, Citadel, and Pyramid. \"Compass\" was present."
  },
  {
    "id": "mem-147",
    "category": "Recognition Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Pyramid</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Lantern</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Granite</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Pyramid",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Pyramid, Lantern, and Granite. \"Pyramid\" was present."
  },
  {
    "id": "mem-148",
    "category": "Recognition Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Granite</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Monarch</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Orchid</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Granite",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Granite, Monarch, and Orchid. \"Granite\" was present."
  },
  {
    "id": "mem-149",
    "category": "Recognition Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Orchid</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Telescope</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Canyon</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Orchid",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Orchid, Telescope, and Canyon. \"Orchid\" was present."
  },
  {
    "id": "mem-150",
    "category": "Recognition Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Canyon</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Velvet</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Compass</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Canyon",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Canyon, Velvet, and Compass. \"Canyon\" was present."
  },
  {
    "id": "mem-151",
    "category": "Recognition Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"flex flex-wrap justify-center gap-2 text-base font-semibold text-ink\"><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Compass</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Citadel</span><span class=\"px-3 py-1 bg-white border border-border-line rounded-lg\">Pyramid</span></div>",
    "studyDuration": 4,
    "question": "Which word was among the 3 items shown in the stimulus?",
    "options": [
      "Compass",
      "Submarine",
      "Helicopter",
      "Volcano"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The words shown were Compass, Citadel, and Pyramid. \"Compass\" was present."
  },
  {
    "id": "mem-152",
    "category": "Position Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"flex gap-3\"><div class=\"px-4 py-2 bg-white border-2 border-slate-300 rounded-lg font-bold\">Dog</div><div class=\"px-4 py-2 bg-brand text-white border-2 border-brand rounded-lg font-bold\">Cat</div><div class=\"px-4 py-2 bg-white border-2 border-slate-300 rounded-lg font-bold\">Bird</div></div>",
    "studyDuration": 4,
    "question": "Which animal was located in the middle position?",
    "options": [
      "Dog",
      "Cat",
      "Bird",
      "Horse"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "From left to right, the items were Dog, Cat, and Bird. The middle animal was Cat."
  },
  {
    "id": "mem-153",
    "category": "Position Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 4,
    "question": "In the 1x3 horizontal row, which box was blue?",
    "options": [
      "Left",
      "Center",
      "Right",
      "None"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The blue box was located in the center position (position 2)."
  },
  {
    "id": "mem-154",
    "category": "Position Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-3 gap-2 p-3 bg-slate-100 rounded-xl\"><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-brand rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div><div class=\"w-8 h-8 bg-slate-300 rounded\"></div></div>",
    "studyDuration": 5,
    "question": "Where were the two blue squares located in the 3x3 grid?",
    "options": [
      "Top-Left and Bottom-Right",
      "Top-Right and Bottom-Left",
      "Top-Center and Bottom-Center",
      "Center-Left and Center-Right"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The two blue squares were located at Top-Right (row 1, col 3) and Bottom-Left (row 3, col 1)."
  },
  {
    "id": "mem-155",
    "category": "Position Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">A</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">K</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Q</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">J</div></div>",
    "studyDuration": 5,
    "question": "Which letter was in the 3rd column from the left?",
    "options": [
      "A",
      "K",
      "Q",
      "J"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Column 1 was A, Column 2 was K, Column 3 was Q, and Column 4 was J."
  },
  {
    "id": "mem-156",
    "category": "Position Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"X\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"X\" occupied the 1st (Leftmost) position."
  },
  {
    "id": "mem-157",
    "category": "Position Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"Z\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"Z\" occupied the 3rd position."
  },
  {
    "id": "mem-158",
    "category": "Position Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"X\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"X\" occupied the 1st (Leftmost) position."
  },
  {
    "id": "mem-159",
    "category": "Position Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"Z\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"Z\" occupied the 3rd position."
  },
  {
    "id": "mem-160",
    "category": "Position Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"X\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"X\" occupied the 1st (Leftmost) position."
  },
  {
    "id": "mem-161",
    "category": "Position Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"Z\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"Z\" occupied the 3rd position."
  },
  {
    "id": "mem-162",
    "category": "Position Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"X\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"X\" occupied the 1st (Leftmost) position."
  },
  {
    "id": "mem-163",
    "category": "Position Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"Z\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"Z\" occupied the 3rd position."
  },
  {
    "id": "mem-164",
    "category": "Position Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"X\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"X\" occupied the 1st (Leftmost) position."
  },
  {
    "id": "mem-165",
    "category": "Position Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"Z\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"Z\" occupied the 3rd position."
  },
  {
    "id": "mem-166",
    "category": "Position Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"X\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"X\" occupied the 1st (Leftmost) position."
  },
  {
    "id": "mem-167",
    "category": "Position Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"Z\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"Z\" occupied the 3rd position."
  },
  {
    "id": "mem-168",
    "category": "Position Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"X\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"X\" occupied the 1st (Leftmost) position."
  },
  {
    "id": "mem-169",
    "category": "Position Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"Z\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"Z\" occupied the 3rd position."
  },
  {
    "id": "mem-170",
    "category": "Position Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"X\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"X\" occupied the 1st (Leftmost) position."
  },
  {
    "id": "mem-171",
    "category": "Position Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"Z\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"Z\" occupied the 3rd position."
  },
  {
    "id": "mem-172",
    "category": "Position Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"X\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"X\" occupied the 1st (Leftmost) position."
  },
  {
    "id": "mem-173",
    "category": "Position Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"Z\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"Z\" occupied the 3rd position."
  },
  {
    "id": "mem-174",
    "category": "Position Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"X\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"X\" occupied the 1st (Leftmost) position."
  },
  {
    "id": "mem-175",
    "category": "Position Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"Z\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"Z\" occupied the 3rd position."
  },
  {
    "id": "mem-176",
    "category": "Position Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"X\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"X\" occupied the 1st (Leftmost) position."
  },
  {
    "id": "mem-177",
    "category": "Position Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"Z\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"Z\" occupied the 3rd position."
  },
  {
    "id": "mem-178",
    "category": "Position Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"X\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"X\" occupied the 1st (Leftmost) position."
  },
  {
    "id": "mem-179",
    "category": "Position Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"Z\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"Z\" occupied the 3rd position."
  },
  {
    "id": "mem-180",
    "category": "Position Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"X\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"X\" occupied the 1st (Leftmost) position."
  },
  {
    "id": "mem-181",
    "category": "Position Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"Z\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"Z\" occupied the 3rd position."
  },
  {
    "id": "mem-182",
    "category": "Position Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"X\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"X\" occupied the 1st (Leftmost) position."
  },
  {
    "id": "mem-183",
    "category": "Position Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"Z\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"Z\" occupied the 3rd position."
  },
  {
    "id": "mem-184",
    "category": "Position Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"X\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"X\" occupied the 1st (Leftmost) position."
  },
  {
    "id": "mem-185",
    "category": "Position Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"Z\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"Z\" occupied the 3rd position."
  },
  {
    "id": "mem-186",
    "category": "Position Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"X\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"X\" occupied the 1st (Leftmost) position."
  },
  {
    "id": "mem-187",
    "category": "Position Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"Z\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"Z\" occupied the 3rd position."
  },
  {
    "id": "mem-188",
    "category": "Position Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"X\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"X\" occupied the 1st (Leftmost) position."
  },
  {
    "id": "mem-189",
    "category": "Position Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"Z\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"Z\" occupied the 3rd position."
  },
  {
    "id": "mem-190",
    "category": "Position Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"X\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"X\" occupied the 1st (Leftmost) position."
  },
  {
    "id": "mem-191",
    "category": "Position Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"Z\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"Z\" occupied the 3rd position."
  },
  {
    "id": "mem-192",
    "category": "Position Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"X\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"X\" occupied the 1st (Leftmost) position."
  },
  {
    "id": "mem-193",
    "category": "Position Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"Z\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"Z\" occupied the 3rd position."
  },
  {
    "id": "mem-194",
    "category": "Position Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"X\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"X\" occupied the 1st (Leftmost) position."
  },
  {
    "id": "mem-195",
    "category": "Position Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"Z\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"Z\" occupied the 3rd position."
  },
  {
    "id": "mem-196",
    "category": "Position Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"X\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"X\" occupied the 1st (Leftmost) position."
  },
  {
    "id": "mem-197",
    "category": "Position Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"Z\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"Z\" occupied the 3rd position."
  },
  {
    "id": "mem-198",
    "category": "Position Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"X\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"X\" occupied the 1st (Leftmost) position."
  },
  {
    "id": "mem-199",
    "category": "Position Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"Z\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"Z\" occupied the 3rd position."
  },
  {
    "id": "mem-200",
    "category": "Position Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"grid grid-cols-4 gap-2 p-2 bg-slate-100 rounded-xl\"><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">X</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Y</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">Z</div><div class=\"px-3 py-2 bg-white rounded text-center font-bold\">W</div></div>",
    "studyDuration": 5,
    "question": "Which position was occupied by the letter \"X\"?",
    "options": [
      "1st (Leftmost)",
      "2nd",
      "3rd",
      "4th (Rightmost)"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "In the 4-column horizontal arrangement (X, Y, Z, W), \"X\" occupied the 1st (Leftmost) position."
  },
  {
    "id": "mem-201",
    "category": "Order Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-xl sm:text-2xl font-bold text-ink tracking-wide\">Red → Green → Blue</div>",
    "studyDuration": 4,
    "question": "What was the first color in the sequence?",
    "options": [
      "Green",
      "Blue",
      "Red",
      "Yellow"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "The sequence started with Red, followed by Green, and ended with Blue."
  },
  {
    "id": "mem-202",
    "category": "Order Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-lg sm:text-xl font-bold text-ink tracking-wide\">Circle → Diamond → Star → Triangle</div>",
    "studyDuration": 5,
    "question": "Which shape appeared immediately before \"Triangle\"?",
    "options": [
      "Circle",
      "Diamond",
      "Star",
      "Square"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "The order was Circle, Diamond, Star, Triangle. \"Star\" directly preceded Triangle."
  },
  {
    "id": "mem-203",
    "category": "Order Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">North → East → South → West → North</div>",
    "studyDuration": 5,
    "question": "What direction was the 4th item in the order?",
    "options": [
      "East",
      "South",
      "West",
      "North"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "1st: North, 2nd: East, 3rd: South, 4th: West, 5th: North."
  },
  {
    "id": "mem-204",
    "category": "Order Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink tracking-wide\">Bronze → Silver → Gold → Platinum → Diamond → Emerald</div>",
    "studyDuration": 7,
    "question": "Which tier immediately preceded \"Diamond\"?",
    "options": [
      "Gold",
      "Platinum",
      "Silver",
      "Emerald"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence was Bronze, Silver, Gold, Platinum, Diamond, Emerald. \"Platinum\" immediately preceded Diamond."
  },
  {
    "id": "mem-205",
    "category": "Order Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 2nd item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 2nd color was Amber."
  },
  {
    "id": "mem-206",
    "category": "Order Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 4th item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 4th color was Purple."
  },
  {
    "id": "mem-207",
    "category": "Order Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 2nd item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 2nd color was Amber."
  },
  {
    "id": "mem-208",
    "category": "Order Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 4th item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 4th color was Purple."
  },
  {
    "id": "mem-209",
    "category": "Order Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 2nd item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 2nd color was Amber."
  },
  {
    "id": "mem-210",
    "category": "Order Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 4th item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 4th color was Purple."
  },
  {
    "id": "mem-211",
    "category": "Order Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 2nd item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 2nd color was Amber."
  },
  {
    "id": "mem-212",
    "category": "Order Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 4th item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 4th color was Purple."
  },
  {
    "id": "mem-213",
    "category": "Order Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 2nd item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 2nd color was Amber."
  },
  {
    "id": "mem-214",
    "category": "Order Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 4th item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 4th color was Purple."
  },
  {
    "id": "mem-215",
    "category": "Order Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 2nd item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 2nd color was Amber."
  },
  {
    "id": "mem-216",
    "category": "Order Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 4th item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 4th color was Purple."
  },
  {
    "id": "mem-217",
    "category": "Order Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 2nd item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 2nd color was Amber."
  },
  {
    "id": "mem-218",
    "category": "Order Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 4th item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 4th color was Purple."
  },
  {
    "id": "mem-219",
    "category": "Order Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 2nd item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 2nd color was Amber."
  },
  {
    "id": "mem-220",
    "category": "Order Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 4th item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 4th color was Purple."
  },
  {
    "id": "mem-221",
    "category": "Order Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 2nd item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 2nd color was Amber."
  },
  {
    "id": "mem-222",
    "category": "Order Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 4th item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 4th color was Purple."
  },
  {
    "id": "mem-223",
    "category": "Order Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 2nd item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 2nd color was Amber."
  },
  {
    "id": "mem-224",
    "category": "Order Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 4th item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 4th color was Purple."
  },
  {
    "id": "mem-225",
    "category": "Order Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 2nd item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 2nd color was Amber."
  },
  {
    "id": "mem-226",
    "category": "Order Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 4th item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 4th color was Purple."
  },
  {
    "id": "mem-227",
    "category": "Order Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 2nd item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 2nd color was Amber."
  },
  {
    "id": "mem-228",
    "category": "Order Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 4th item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 4th color was Purple."
  },
  {
    "id": "mem-229",
    "category": "Order Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 2nd item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 2nd color was Amber."
  },
  {
    "id": "mem-230",
    "category": "Order Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 4th item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 4th color was Purple."
  },
  {
    "id": "mem-231",
    "category": "Order Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 2nd item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 2nd color was Amber."
  },
  {
    "id": "mem-232",
    "category": "Order Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 4th item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 4th color was Purple."
  },
  {
    "id": "mem-233",
    "category": "Order Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 2nd item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 2nd color was Amber."
  },
  {
    "id": "mem-234",
    "category": "Order Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 4th item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 4th color was Purple."
  },
  {
    "id": "mem-235",
    "category": "Order Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 2nd item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 2nd color was Amber."
  },
  {
    "id": "mem-236",
    "category": "Order Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 4th item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 4th color was Purple."
  },
  {
    "id": "mem-237",
    "category": "Order Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 2nd item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 2nd color was Amber."
  },
  {
    "id": "mem-238",
    "category": "Order Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 4th item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 4th color was Purple."
  },
  {
    "id": "mem-239",
    "category": "Order Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 2nd item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 2nd color was Amber."
  },
  {
    "id": "mem-240",
    "category": "Order Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 4th item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 4th color was Purple."
  },
  {
    "id": "mem-241",
    "category": "Order Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 2nd item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 2nd color was Amber."
  },
  {
    "id": "mem-242",
    "category": "Order Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 4th item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 4th color was Purple."
  },
  {
    "id": "mem-243",
    "category": "Order Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 2nd item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 2nd color was Amber."
  },
  {
    "id": "mem-244",
    "category": "Order Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 4th item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 4th color was Purple."
  },
  {
    "id": "mem-245",
    "category": "Order Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 2nd item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 2nd color was Amber."
  },
  {
    "id": "mem-246",
    "category": "Order Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 4th item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 4th color was Purple."
  },
  {
    "id": "mem-247",
    "category": "Order Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 2nd item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 2nd color was Amber."
  },
  {
    "id": "mem-248",
    "category": "Order Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 4th item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 4th color was Purple."
  },
  {
    "id": "mem-249",
    "category": "Order Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"text-base sm:text-lg font-bold text-ink\">Red → Amber → Green → Purple</div>",
    "studyDuration": 4,
    "question": "What color was the 2nd item in the sequence?",
    "options": [
      "Red",
      "Amber",
      "Green",
      "Purple"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence was Red → Amber → Green → Purple. The 2nd color was Amber."
  },
  {
    "id": "mem-250",
    "category": "Working Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-2xl sm:text-3xl font-mono font-bold text-brand\">3 — 8 — 5</div>",
    "studyDuration": 4,
    "question": "What is the sequence reversed (read backwards from right to left)?",
    "options": [
      "5 — 8 — 3",
      "5 — 3 — 8",
      "8 — 5 — 3",
      "3 — 5 — 8"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reversing 3 — 8 — 5 produces 5 — 8 — 3."
  },
  {
    "id": "mem-251",
    "category": "Working Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">4 and 6</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "8",
      "9",
      "10",
      "12"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "The numbers were 4 and 6. Their sum is 4 + 6 = 10."
  },
  {
    "id": "mem-252",
    "category": "Working Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">5, 8, 3, 2</div>",
    "studyDuration": 5,
    "question": "If you sort these four numbers from LOWEST to HIGHEST, what is the sorted order?",
    "options": [
      "2, 3, 5, 8",
      "2, 5, 3, 8",
      "3, 2, 5, 8",
      "2, 3, 8, 5"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Sorting {5, 8, 3, 2} in ascending order produces 2, 3, 5, 8."
  },
  {
    "id": "mem-253",
    "category": "Working Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-brand\">3 — 9 — 1 — 6 — 8</div>",
    "studyDuration": 6,
    "question": "What is the sequence REVERSED (read backwards from last to first)?",
    "options": [
      "8 — 6 — 1 — 9 — 3",
      "8 — 1 — 6 — 9 — 3",
      "8 — 6 — 9 — 1 — 3",
      "6 — 8 — 1 — 9 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reversing 3 — 9 — 1 — 6 — 8 yields 8 — 6 — 1 — 9 — 3."
  },
  {
    "id": "mem-254",
    "category": "Working Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">4, 9, 2, 7, 5</div>",
    "studyDuration": 6,
    "question": "What is the result when you take the LARGEST number minus the SMALLEST number from this set?",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "The set was {4, 9, 2, 7, 5}. The largest number is 9 and the smallest is 2. 9 - 2 = 7."
  },
  {
    "id": "mem-255",
    "category": "Working Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-brand\">Letters: B, D, A, C</div>",
    "studyDuration": 6,
    "question": "If you sort the 4 letters into alphabetical order, what was the 3rd letter?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Sorting {B, D, A, C} alphabetically gives A, B, C, D. The 3rd letter is C."
  },
  {
    "id": "mem-256",
    "category": "Working Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-257",
    "category": "Working Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-258",
    "category": "Working Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-259",
    "category": "Working Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-260",
    "category": "Working Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-261",
    "category": "Working Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-262",
    "category": "Working Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-263",
    "category": "Working Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-264",
    "category": "Working Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-265",
    "category": "Working Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-266",
    "category": "Working Memory",
    "difficulty": "easy",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-267",
    "category": "Working Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-268",
    "category": "Working Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-269",
    "category": "Working Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-270",
    "category": "Working Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-271",
    "category": "Working Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-272",
    "category": "Working Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-273",
    "category": "Working Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-274",
    "category": "Working Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-275",
    "category": "Working Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-276",
    "category": "Working Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-277",
    "category": "Working Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-278",
    "category": "Working Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-279",
    "category": "Working Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-280",
    "category": "Working Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-281",
    "category": "Working Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-282",
    "category": "Working Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-283",
    "category": "Working Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-284",
    "category": "Working Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-285",
    "category": "Working Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-286",
    "category": "Working Memory",
    "difficulty": "medium",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-287",
    "category": "Working Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-288",
    "category": "Working Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-289",
    "category": "Working Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-290",
    "category": "Working Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-291",
    "category": "Working Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-292",
    "category": "Working Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-293",
    "category": "Working Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-294",
    "category": "Working Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-295",
    "category": "Working Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-296",
    "category": "Working Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-297",
    "category": "Working Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-298",
    "category": "Working Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-299",
    "category": "Working Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  },
  {
    "id": "mem-300",
    "category": "Working Memory",
    "difficulty": "hard",
    "stimulus": "<div class=\"text-2xl font-mono font-bold text-ink\">3 and 4</div>",
    "studyDuration": 4,
    "question": "What is the SUM of the two numbers shown?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The numbers were 3 and 4. Their sum is 3 + 4 = 7."
  }
];

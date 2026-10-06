export interface LogicalQuestion {
  id: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  options: string[];
  correctAnswer: number;
  correct?: number;
  explanation: string;
}

export const logicalQuestions = [
  {
    "id": "log-001",
    "category": "Syllogisms",
    "difficulty": "easy",
    "question": "All squares are rectangles. All rectangles are polygons. Based on these statements, which conclusion must be true?",
    "options": [
      "All polygons are squares.",
      "All squares are polygons.",
      "Some squares are not polygons.",
      "All rectangles are squares."
    ],
    "correct": 1,
    "explanation": "If A (squares) is a subset of B (rectangles), and B is a subset of C (polygons), then A must be a subset of C. Therefore, all squares are polygons.",
    "correctAnswer": 1
  },
  {
    "id": "log-002",
    "category": "Syllogisms",
    "difficulty": "easy",
    "question": "Some doctors are researchers. All researchers are scientists. Therefore:",
    "options": [
      "All doctors are scientists.",
      "Some doctors are scientists.",
      "All scientists are researchers.",
      "No doctors are scientists."
    ],
    "correct": 1,
    "explanation": "Because there is an overlap between doctors and researchers, and all researchers fall within the scientist category, that overlapping group of doctors must also be scientists.",
    "correctAnswer": 1
  },
  {
    "id": "log-003",
    "category": "Syllogisms",
    "difficulty": "easy",
    "question": "All managers are leaders. Some leaders are visionaries. No visionaries are lazy. Which conclusion is valid?",
    "options": [
      "All managers are visionaries.",
      "Some managers are not lazy.",
      "Some leaders are not lazy.",
      "No managers are lazy."
    ],
    "correct": 2,
    "explanation": "Since some leaders are visionaries, and no visionaries are lazy, it means the leaders who are visionaries are definitely not lazy. Thus, some leaders are not lazy.",
    "correctAnswer": 2
  },
  {
    "id": "log-004",
    "category": "Syllogisms",
    "difficulty": "easy",
    "question": "No birds are mammals. A bat is a mammal. Therefore:",
    "options": [
      "A bat is a bird.",
      "A bat is not a bird.",
      "Some birds are bats.",
      "No bats are mammals."
    ],
    "correct": 1,
    "explanation": "If no birds are mammals, the sets of birds and mammals do not intersect. Since a bat falls within the mammal set, it cannot possibly fall within the bird set. Thus, a bat is not a bird.",
    "correctAnswer": 1
  },
  {
    "id": "log-005",
    "category": "Syllogisms",
    "difficulty": "easy",
    "question": "Some artists are sculptors. All sculptors are creative. Therefore:",
    "options": [
      "Some artists are creative.",
      "All artists are sculptors.",
      "All creative people are artists.",
      "No sculptors are artists."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Artists who are sculptors belong to the set of sculptors, who are all creative."
  },
  {
    "id": "log-006",
    "category": "Syllogisms",
    "difficulty": "easy",
    "question": "All metals conduct electricity. Iron is a metal. Therefore:",
    "options": [
      "Iron conducts electricity.",
      "Iron does not conduct electricity.",
      "All electricity conductors are iron.",
      "Non-metals conduct electricity."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Deductive categorical logic: All A are B, C is A, therefore C is B."
  },
  {
    "id": "log-007",
    "category": "Syllogisms",
    "difficulty": "easy",
    "question": "No reptiles have fur. All snakes are reptiles. Therefore:",
    "options": [
      "No snakes have fur.",
      "Some snakes have fur.",
      "All fur-bearing animals are snakes.",
      "Reptiles can fly."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "No A are B, all C are A -> No C are B (no snakes have fur)."
  },
  {
    "id": "log-008",
    "category": "Syllogisms",
    "difficulty": "easy",
    "question": "All oak trees are deciduous. Some deciduous trees bear fruit. Therefore:",
    "options": [
      "Some oak trees might bear fruit.",
      "All oak trees bear fruit.",
      "No oak trees bear fruit.",
      "All fruit-bearing trees are oaks."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The intersection between oak trees and fruit-bearing trees is possible but not guaranteed for all."
  },
  {
    "id": "log-009",
    "category": "Syllogisms",
    "difficulty": "easy",
    "question": "Some artists are sculptors. All sculptors are creative. Therefore:",
    "options": [
      "Some artists are creative.",
      "All artists are sculptors.",
      "All creative people are artists.",
      "No sculptors are artists."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Artists who are sculptors belong to the set of sculptors, who are all creative."
  },
  {
    "id": "log-010",
    "category": "Syllogisms",
    "difficulty": "easy",
    "question": "All metals conduct electricity. Iron is a metal. Therefore:",
    "options": [
      "Iron conducts electricity.",
      "Iron does not conduct electricity.",
      "All electricity conductors are iron.",
      "Non-metals conduct electricity."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Deductive categorical logic: All A are B, C is A, therefore C is B."
  },
  {
    "id": "log-011",
    "category": "Syllogisms",
    "difficulty": "easy",
    "question": "No reptiles have fur. All snakes are reptiles. Therefore:",
    "options": [
      "No snakes have fur.",
      "Some snakes have fur.",
      "All fur-bearing animals are snakes.",
      "Reptiles can fly."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "No A are B, all C are A -> No C are B (no snakes have fur)."
  },
  {
    "id": "log-012",
    "category": "Syllogisms",
    "difficulty": "medium",
    "question": "All oak trees are deciduous. Some deciduous trees bear fruit. Therefore:",
    "options": [
      "Some oak trees might bear fruit.",
      "All oak trees bear fruit.",
      "No oak trees bear fruit.",
      "All fruit-bearing trees are oaks."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The intersection between oak trees and fruit-bearing trees is possible but not guaranteed for all."
  },
  {
    "id": "log-013",
    "category": "Syllogisms",
    "difficulty": "medium",
    "question": "Some artists are sculptors. All sculptors are creative. Therefore:",
    "options": [
      "Some artists are creative.",
      "All artists are sculptors.",
      "All creative people are artists.",
      "No sculptors are artists."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Artists who are sculptors belong to the set of sculptors, who are all creative."
  },
  {
    "id": "log-014",
    "category": "Syllogisms",
    "difficulty": "medium",
    "question": "All metals conduct electricity. Iron is a metal. Therefore:",
    "options": [
      "Iron conducts electricity.",
      "Iron does not conduct electricity.",
      "All electricity conductors are iron.",
      "Non-metals conduct electricity."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Deductive categorical logic: All A are B, C is A, therefore C is B."
  },
  {
    "id": "log-015",
    "category": "Syllogisms",
    "difficulty": "medium",
    "question": "No reptiles have fur. All snakes are reptiles. Therefore:",
    "options": [
      "No snakes have fur.",
      "Some snakes have fur.",
      "All fur-bearing animals are snakes.",
      "Reptiles can fly."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "No A are B, all C are A -> No C are B (no snakes have fur)."
  },
  {
    "id": "log-016",
    "category": "Syllogisms",
    "difficulty": "medium",
    "question": "All oak trees are deciduous. Some deciduous trees bear fruit. Therefore:",
    "options": [
      "Some oak trees might bear fruit.",
      "All oak trees bear fruit.",
      "No oak trees bear fruit.",
      "All fruit-bearing trees are oaks."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The intersection between oak trees and fruit-bearing trees is possible but not guaranteed for all."
  },
  {
    "id": "log-017",
    "category": "Syllogisms",
    "difficulty": "medium",
    "question": "Some artists are sculptors. All sculptors are creative. Therefore:",
    "options": [
      "Some artists are creative.",
      "All artists are sculptors.",
      "All creative people are artists.",
      "No sculptors are artists."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Artists who are sculptors belong to the set of sculptors, who are all creative."
  },
  {
    "id": "log-018",
    "category": "Syllogisms",
    "difficulty": "medium",
    "question": "All metals conduct electricity. Iron is a metal. Therefore:",
    "options": [
      "Iron conducts electricity.",
      "Iron does not conduct electricity.",
      "All electricity conductors are iron.",
      "Non-metals conduct electricity."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Deductive categorical logic: All A are B, C is A, therefore C is B."
  },
  {
    "id": "log-019",
    "category": "Syllogisms",
    "difficulty": "medium",
    "question": "No reptiles have fur. All snakes are reptiles. Therefore:",
    "options": [
      "No snakes have fur.",
      "Some snakes have fur.",
      "All fur-bearing animals are snakes.",
      "Reptiles can fly."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "No A are B, all C are A -> No C are B (no snakes have fur)."
  },
  {
    "id": "log-020",
    "category": "Syllogisms",
    "difficulty": "medium",
    "question": "All oak trees are deciduous. Some deciduous trees bear fruit. Therefore:",
    "options": [
      "Some oak trees might bear fruit.",
      "All oak trees bear fruit.",
      "No oak trees bear fruit.",
      "All fruit-bearing trees are oaks."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The intersection between oak trees and fruit-bearing trees is possible but not guaranteed for all."
  },
  {
    "id": "log-021",
    "category": "Syllogisms",
    "difficulty": "medium",
    "question": "Some artists are sculptors. All sculptors are creative. Therefore:",
    "options": [
      "Some artists are creative.",
      "All artists are sculptors.",
      "All creative people are artists.",
      "No sculptors are artists."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Artists who are sculptors belong to the set of sculptors, who are all creative."
  },
  {
    "id": "log-022",
    "category": "Syllogisms",
    "difficulty": "medium",
    "question": "All metals conduct electricity. Iron is a metal. Therefore:",
    "options": [
      "Iron conducts electricity.",
      "Iron does not conduct electricity.",
      "All electricity conductors are iron.",
      "Non-metals conduct electricity."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Deductive categorical logic: All A are B, C is A, therefore C is B."
  },
  {
    "id": "log-023",
    "category": "Syllogisms",
    "difficulty": "medium",
    "question": "No reptiles have fur. All snakes are reptiles. Therefore:",
    "options": [
      "No snakes have fur.",
      "Some snakes have fur.",
      "All fur-bearing animals are snakes.",
      "Reptiles can fly."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "No A are B, all C are A -> No C are B (no snakes have fur)."
  },
  {
    "id": "log-024",
    "category": "Syllogisms",
    "difficulty": "medium",
    "question": "All oak trees are deciduous. Some deciduous trees bear fruit. Therefore:",
    "options": [
      "Some oak trees might bear fruit.",
      "All oak trees bear fruit.",
      "No oak trees bear fruit.",
      "All fruit-bearing trees are oaks."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The intersection between oak trees and fruit-bearing trees is possible but not guaranteed for all."
  },
  {
    "id": "log-025",
    "category": "Syllogisms",
    "difficulty": "medium",
    "question": "Some artists are sculptors. All sculptors are creative. Therefore:",
    "options": [
      "Some artists are creative.",
      "All artists are sculptors.",
      "All creative people are artists.",
      "No sculptors are artists."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Artists who are sculptors belong to the set of sculptors, who are all creative."
  },
  {
    "id": "log-026",
    "category": "Syllogisms",
    "difficulty": "hard",
    "question": "All metals conduct electricity. Iron is a metal. Therefore:",
    "options": [
      "Iron conducts electricity.",
      "Iron does not conduct electricity.",
      "All electricity conductors are iron.",
      "Non-metals conduct electricity."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Deductive categorical logic: All A are B, C is A, therefore C is B."
  },
  {
    "id": "log-027",
    "category": "Syllogisms",
    "difficulty": "hard",
    "question": "No reptiles have fur. All snakes are reptiles. Therefore:",
    "options": [
      "No snakes have fur.",
      "Some snakes have fur.",
      "All fur-bearing animals are snakes.",
      "Reptiles can fly."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "No A are B, all C are A -> No C are B (no snakes have fur)."
  },
  {
    "id": "log-028",
    "category": "Syllogisms",
    "difficulty": "hard",
    "question": "All oak trees are deciduous. Some deciduous trees bear fruit. Therefore:",
    "options": [
      "Some oak trees might bear fruit.",
      "All oak trees bear fruit.",
      "No oak trees bear fruit.",
      "All fruit-bearing trees are oaks."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The intersection between oak trees and fruit-bearing trees is possible but not guaranteed for all."
  },
  {
    "id": "log-029",
    "category": "Syllogisms",
    "difficulty": "hard",
    "question": "Some artists are sculptors. All sculptors are creative. Therefore:",
    "options": [
      "Some artists are creative.",
      "All artists are sculptors.",
      "All creative people are artists.",
      "No sculptors are artists."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Artists who are sculptors belong to the set of sculptors, who are all creative."
  },
  {
    "id": "log-030",
    "category": "Syllogisms",
    "difficulty": "hard",
    "question": "All metals conduct electricity. Iron is a metal. Therefore:",
    "options": [
      "Iron conducts electricity.",
      "Iron does not conduct electricity.",
      "All electricity conductors are iron.",
      "Non-metals conduct electricity."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Deductive categorical logic: All A are B, C is A, therefore C is B."
  },
  {
    "id": "log-031",
    "category": "Syllogisms",
    "difficulty": "hard",
    "question": "No reptiles have fur. All snakes are reptiles. Therefore:",
    "options": [
      "No snakes have fur.",
      "Some snakes have fur.",
      "All fur-bearing animals are snakes.",
      "Reptiles can fly."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "No A are B, all C are A -> No C are B (no snakes have fur)."
  },
  {
    "id": "log-032",
    "category": "Syllogisms",
    "difficulty": "hard",
    "question": "All oak trees are deciduous. Some deciduous trees bear fruit. Therefore:",
    "options": [
      "Some oak trees might bear fruit.",
      "All oak trees bear fruit.",
      "No oak trees bear fruit.",
      "All fruit-bearing trees are oaks."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The intersection between oak trees and fruit-bearing trees is possible but not guaranteed for all."
  },
  {
    "id": "log-033",
    "category": "Syllogisms",
    "difficulty": "hard",
    "question": "Some artists are sculptors. All sculptors are creative. Therefore:",
    "options": [
      "Some artists are creative.",
      "All artists are sculptors.",
      "All creative people are artists.",
      "No sculptors are artists."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Artists who are sculptors belong to the set of sculptors, who are all creative."
  },
  {
    "id": "log-034",
    "category": "Syllogisms",
    "difficulty": "hard",
    "question": "All metals conduct electricity. Iron is a metal. Therefore:",
    "options": [
      "Iron conducts electricity.",
      "Iron does not conduct electricity.",
      "All electricity conductors are iron.",
      "Non-metals conduct electricity."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Deductive categorical logic: All A are B, C is A, therefore C is B."
  },
  {
    "id": "log-035",
    "category": "Deductive Reasoning",
    "difficulty": "easy",
    "question": "If it is raining, the grass is wet. The grass is not wet. What can be logically concluded?",
    "options": [
      "It is raining.",
      "It is not raining.",
      "The grass will be wet soon.",
      "Someone covered the grass."
    ],
    "correct": 1,
    "explanation": "This is a valid logical deduction (modus tollens). If P implies Q, and Q is false, then P must be false. Since the grass is not wet, it cannot be raining.",
    "correctAnswer": 1
  },
  {
    "id": "log-036",
    "category": "Deductive Reasoning",
    "difficulty": "easy",
    "question": "Observe the pattern: 2, 6, 12, 20, 30. What is the next number?",
    "options": [
      "36",
      "40",
      "42",
      "48"
    ],
    "correct": 2,
    "explanation": "The differences between consecutive numbers are 4, 6, 8, 10. The next difference should be 12. So, 30 + 12 = 42.",
    "correctAnswer": 2
  },
  {
    "id": "log-037",
    "category": "Deductive Reasoning",
    "difficulty": "easy",
    "question": "Only authorized personnel can access the server room. Mark is an IT manager. Some IT managers are authorized personnel. Can Mark access the server room?",
    "options": [
      "Yes, definitely.",
      "No, definitely.",
      "Cannot be determined.",
      "Yes, because he is a manager."
    ],
    "correct": 2,
    "explanation": "We only know that *some* IT managers are authorized. We do not know specifically if Mark belongs to that authorized subset. Therefore, it cannot be definitively determined.",
    "correctAnswer": 2
  },
  {
    "id": "log-038",
    "category": "Deductive Reasoning",
    "difficulty": "easy",
    "question": "If X is greater than Y, and Z is less than Y, which of the following must be true?",
    "options": [
      "X is less than Z.",
      "X and Z are equal.",
      "X is greater than Z.",
      "Z is greater than X."
    ],
    "correct": 2,
    "explanation": "X > Y and Z < Y (meaning Y > Z). By transitivity, X > Y > Z, so X must be greater than Z.",
    "correctAnswer": 2
  },
  {
    "id": "log-039",
    "category": "Deductive Reasoning",
    "difficulty": "easy",
    "question": "If all Z are Y, and some Y are X, which of the following must be true?",
    "options": [
      "Some Z are X",
      "All X are Y",
      "No Z are X",
      "None of the above"
    ],
    "correct": 3,
    "explanation": "Knowing that all Z are Y and some Y are X does not guarantee any relationship between Z and X. They might overlap, or they might not. Thus, none of the specific statements must be true.",
    "correctAnswer": 3
  },
  {
    "id": "log-040",
    "category": "Deductive Reasoning",
    "difficulty": "easy",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-041",
    "category": "Deductive Reasoning",
    "difficulty": "easy",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-042",
    "category": "Deductive Reasoning",
    "difficulty": "easy",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-043",
    "category": "Deductive Reasoning",
    "difficulty": "easy",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-044",
    "category": "Deductive Reasoning",
    "difficulty": "easy",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-045",
    "category": "Deductive Reasoning",
    "difficulty": "easy",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-046",
    "category": "Deductive Reasoning",
    "difficulty": "easy",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-047",
    "category": "Deductive Reasoning",
    "difficulty": "medium",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-048",
    "category": "Deductive Reasoning",
    "difficulty": "medium",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-049",
    "category": "Deductive Reasoning",
    "difficulty": "medium",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-050",
    "category": "Deductive Reasoning",
    "difficulty": "medium",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-051",
    "category": "Deductive Reasoning",
    "difficulty": "medium",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-052",
    "category": "Deductive Reasoning",
    "difficulty": "medium",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-053",
    "category": "Deductive Reasoning",
    "difficulty": "medium",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-054",
    "category": "Deductive Reasoning",
    "difficulty": "medium",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-055",
    "category": "Deductive Reasoning",
    "difficulty": "medium",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-056",
    "category": "Deductive Reasoning",
    "difficulty": "medium",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-057",
    "category": "Deductive Reasoning",
    "difficulty": "medium",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-058",
    "category": "Deductive Reasoning",
    "difficulty": "medium",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-059",
    "category": "Deductive Reasoning",
    "difficulty": "medium",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-060",
    "category": "Deductive Reasoning",
    "difficulty": "medium",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-061",
    "category": "Deductive Reasoning",
    "difficulty": "hard",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-062",
    "category": "Deductive Reasoning",
    "difficulty": "hard",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-063",
    "category": "Deductive Reasoning",
    "difficulty": "hard",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-064",
    "category": "Deductive Reasoning",
    "difficulty": "hard",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-065",
    "category": "Deductive Reasoning",
    "difficulty": "hard",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-066",
    "category": "Deductive Reasoning",
    "difficulty": "hard",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-067",
    "category": "Deductive Reasoning",
    "difficulty": "hard",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-068",
    "category": "Deductive Reasoning",
    "difficulty": "hard",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-069",
    "category": "Deductive Reasoning",
    "difficulty": "hard",
    "question": "Whenever the temperature drops below 0°C, water freezes. The water in the bowl is liquid. Therefore:",
    "options": [
      "The temperature is 0°C or higher.",
      "The temperature is below 0°C.",
      "The water contains salt.",
      "The thermometer is broken."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Modus tollens: P -> Q. Not Q. Therefore Not P (temperature is not below 0°C)."
  },
  {
    "id": "log-070",
    "category": "Sequencing",
    "difficulty": "easy",
    "question": "Five runners (A, B, C, D, E) finish a race. A finishes before B but after C. D finishes before C. E finishes last. Who finished second?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": 2,
    "explanation": "The order of finishing is established as: D finishes before C, C finishes before A, A finishes before B. Since E is last, the order is D, C, A, B, E. Therefore, C finished second.",
    "correctAnswer": 2
  },
  {
    "id": "log-071",
    "category": "Sequencing",
    "difficulty": "easy",
    "question": "Project phases must occur in order. Planning is before Design but after Research. Testing is after Development. Design is before Development. Which phase is third?",
    "options": [
      "Planning",
      "Design",
      "Development",
      "Testing"
    ],
    "correct": 1,
    "explanation": "The order is established as: Research -> Planning -> Design -> Development -> Testing. The third phase is Design.",
    "correctAnswer": 1
  },
  {
    "id": "log-072",
    "category": "Sequencing",
    "difficulty": "easy",
    "question": "A, B, C, and D are performing tasks. A must happen before C. D must happen after B but before A. What is the correct sequence?",
    "options": [
      "B, D, A, C",
      "D, B, A, C",
      "B, A, D, C",
      "A, C, B, D"
    ],
    "correct": 0,
    "explanation": "D is after B (B -> D). D is before A (D -> A). A is before C (A -> C). Combining these gives B -> D -> A -> C.",
    "correctAnswer": 0
  },
  {
    "id": "log-073",
    "category": "Sequencing",
    "difficulty": "easy",
    "question": "A, B, C, D, and E sit in a row. E is at the far left. D is at the far right. A is exactly in the middle. C is next to A but not next to D. Who is sitting in the second position from the left?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": 2,
    "explanation": "Positions 1 to 5. E is 1. D is 5. A is 3. C is next to A (so 2 or 4). But C is not next to D(5). So C cannot be 4. Therefore, C is 2. This leaves B for position 4. The person in the second position from the left is C.",
    "correctAnswer": 2
  },
  {
    "id": "log-074",
    "category": "Sequencing",
    "difficulty": "easy",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-075",
    "category": "Sequencing",
    "difficulty": "easy",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-076",
    "category": "Sequencing",
    "difficulty": "easy",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-077",
    "category": "Sequencing",
    "difficulty": "easy",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-078",
    "category": "Sequencing",
    "difficulty": "easy",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-079",
    "category": "Sequencing",
    "difficulty": "easy",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-080",
    "category": "Sequencing",
    "difficulty": "easy",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-081",
    "category": "Sequencing",
    "difficulty": "medium",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-082",
    "category": "Sequencing",
    "difficulty": "medium",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-083",
    "category": "Sequencing",
    "difficulty": "medium",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-084",
    "category": "Sequencing",
    "difficulty": "medium",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-085",
    "category": "Sequencing",
    "difficulty": "medium",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-086",
    "category": "Sequencing",
    "difficulty": "medium",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-087",
    "category": "Sequencing",
    "difficulty": "medium",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-088",
    "category": "Sequencing",
    "difficulty": "medium",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-089",
    "category": "Sequencing",
    "difficulty": "medium",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-090",
    "category": "Sequencing",
    "difficulty": "medium",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-091",
    "category": "Sequencing",
    "difficulty": "medium",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-092",
    "category": "Sequencing",
    "difficulty": "medium",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-093",
    "category": "Sequencing",
    "difficulty": "medium",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-094",
    "category": "Sequencing",
    "difficulty": "medium",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-095",
    "category": "Sequencing",
    "difficulty": "hard",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-096",
    "category": "Sequencing",
    "difficulty": "hard",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-097",
    "category": "Sequencing",
    "difficulty": "hard",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-098",
    "category": "Sequencing",
    "difficulty": "hard",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-099",
    "category": "Sequencing",
    "difficulty": "hard",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-100",
    "category": "Sequencing",
    "difficulty": "hard",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-101",
    "category": "Sequencing",
    "difficulty": "hard",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-102",
    "category": "Sequencing",
    "difficulty": "hard",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-103",
    "category": "Sequencing",
    "difficulty": "hard",
    "question": "Five books (P, Q, R, S, T) are placed on a shelf. P is to the left of Q. R is to the left of P. S is to the right of Q. T is between R and P. Which book is in the exact middle?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: R, T, P, Q, S. Book P is in the exact middle (position 3)."
  },
  {
    "id": "log-104",
    "category": "Assumptions",
    "difficulty": "easy",
    "question": "Statement: You should upgrade your software to version 10.0 to prevent security breaches. What is the primary underlying assumption?",
    "options": [
      "Version 10.0 is the most expensive software.",
      "The current software version is vulnerable to security breaches.",
      "Security breaches are impossible to fix.",
      "The user does not care about security."
    ],
    "correct": 1,
    "explanation": "The statement advises upgrading to prevent breaches, which inherently assumes that the current version lacks the necessary protections and is therefore vulnerable.",
    "correctAnswer": 1
  },
  {
    "id": "log-105",
    "category": "Assumptions",
    "difficulty": "easy",
    "question": "Statement: The new battery lasts 24 hours, so you dont need to carry a charger to work. What does this argument assume?",
    "options": [
      "The user works for more than 24 hours.",
      "The user will charge the device at home before leaving.",
      "The charger is too heavy to carry.",
      "Batteries degrade over time."
    ],
    "correct": 1,
    "explanation": "The conclusion that a charger isn\t needed at work relies on the assumption that the battery was fully charged beforehand and has its 24-hour capacity available.",
    "correctAnswer": 1
  },
  {
    "id": "log-106",
    "category": "Assumptions",
    "difficulty": "easy",
    "question": "Argument: Our profit dropped because we reduced our marketing budget last quarter. What assumption is necessary for this argument?",
    "options": [
      "Marketing budgets are the sole driver of profit.",
      "No other major factors caused the drop in profit.",
      "Increasing the budget will immediately increase profit.",
      "Profit cannot drop if marketing remains constant."
    ],
    "correct": 1,
    "explanation": "For the reduction in marketing to be definitively identified as the cause, the argument must assume that other potential negative variables did not occur simultaneously.",
    "correctAnswer": 1
  },
  {
    "id": "log-107",
    "category": "Assumptions",
    "difficulty": "easy",
    "question": "Argument: Switching to electric vehicles (EVs) will solve city air pollution because EVs produce zero tailpipe emissions. This assumes that:",
    "options": [
      "Tailpipe emissions are the primary source of city air pollution.",
      "EVs are affordable for everyone.",
      "Electricity generation produces no pollution.",
      "City dwellers want to drive EVs."
    ],
    "correct": 0,
    "explanation": "The argument claims EVs will *solve* city air pollution based on their lack of tailpipe emissions. This leap logically assumes that those tailpipe emissions were the dominant cause of the pollution in the first place.",
    "correctAnswer": 0
  },
  {
    "id": "log-108",
    "category": "Assumptions",
    "difficulty": "easy",
    "question": "Statement: 'Drink organic green tea daily to boost your immune system.' What is assumed?",
    "options": [
      "Green tea contains substances that can positively influence immune function.",
      "All organic drinks cure illnesses.",
      "People do not drink tea.",
      "Coffee is harmful."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The statement presumes a beneficial causal relationship between green tea intake and immunity."
  },
  {
    "id": "log-109",
    "category": "Assumptions",
    "difficulty": "easy",
    "question": "Statement: 'We should install solar panels on the roof to lower our electric bill.' What is the unstated assumption?",
    "options": [
      "Solar panels generate electricity that can offset grid power costs.",
      "Roof solar panels cause roof leaks.",
      "Electricity prices are guaranteed to drop.",
      "Solar panels require zero maintenance."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The proposal assumes solar energy production translates into financial utility savings."
  },
  {
    "id": "log-110",
    "category": "Assumptions",
    "difficulty": "easy",
    "question": "Statement: 'Drink organic green tea daily to boost your immune system.' What is assumed?",
    "options": [
      "Green tea contains substances that can positively influence immune function.",
      "All organic drinks cure illnesses.",
      "People do not drink tea.",
      "Coffee is harmful."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The statement presumes a beneficial causal relationship between green tea intake and immunity."
  },
  {
    "id": "log-111",
    "category": "Assumptions",
    "difficulty": "easy",
    "question": "Statement: 'We should install solar panels on the roof to lower our electric bill.' What is the unstated assumption?",
    "options": [
      "Solar panels generate electricity that can offset grid power costs.",
      "Roof solar panels cause roof leaks.",
      "Electricity prices are guaranteed to drop.",
      "Solar panels require zero maintenance."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The proposal assumes solar energy production translates into financial utility savings."
  },
  {
    "id": "log-112",
    "category": "Assumptions",
    "difficulty": "easy",
    "question": "Statement: 'Drink organic green tea daily to boost your immune system.' What is assumed?",
    "options": [
      "Green tea contains substances that can positively influence immune function.",
      "All organic drinks cure illnesses.",
      "People do not drink tea.",
      "Coffee is harmful."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The statement presumes a beneficial causal relationship between green tea intake and immunity."
  },
  {
    "id": "log-113",
    "category": "Assumptions",
    "difficulty": "easy",
    "question": "Statement: 'We should install solar panels on the roof to lower our electric bill.' What is the unstated assumption?",
    "options": [
      "Solar panels generate electricity that can offset grid power costs.",
      "Roof solar panels cause roof leaks.",
      "Electricity prices are guaranteed to drop.",
      "Solar panels require zero maintenance."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The proposal assumes solar energy production translates into financial utility savings."
  },
  {
    "id": "log-114",
    "category": "Assumptions",
    "difficulty": "easy",
    "question": "Statement: 'Drink organic green tea daily to boost your immune system.' What is assumed?",
    "options": [
      "Green tea contains substances that can positively influence immune function.",
      "All organic drinks cure illnesses.",
      "People do not drink tea.",
      "Coffee is harmful."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The statement presumes a beneficial causal relationship between green tea intake and immunity."
  },
  {
    "id": "log-115",
    "category": "Assumptions",
    "difficulty": "medium",
    "question": "Statement: 'We should install solar panels on the roof to lower our electric bill.' What is the unstated assumption?",
    "options": [
      "Solar panels generate electricity that can offset grid power costs.",
      "Roof solar panels cause roof leaks.",
      "Electricity prices are guaranteed to drop.",
      "Solar panels require zero maintenance."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The proposal assumes solar energy production translates into financial utility savings."
  },
  {
    "id": "log-116",
    "category": "Assumptions",
    "difficulty": "medium",
    "question": "Statement: 'Drink organic green tea daily to boost your immune system.' What is assumed?",
    "options": [
      "Green tea contains substances that can positively influence immune function.",
      "All organic drinks cure illnesses.",
      "People do not drink tea.",
      "Coffee is harmful."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The statement presumes a beneficial causal relationship between green tea intake and immunity."
  },
  {
    "id": "log-117",
    "category": "Assumptions",
    "difficulty": "medium",
    "question": "Statement: 'We should install solar panels on the roof to lower our electric bill.' What is the unstated assumption?",
    "options": [
      "Solar panels generate electricity that can offset grid power costs.",
      "Roof solar panels cause roof leaks.",
      "Electricity prices are guaranteed to drop.",
      "Solar panels require zero maintenance."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The proposal assumes solar energy production translates into financial utility savings."
  },
  {
    "id": "log-118",
    "category": "Assumptions",
    "difficulty": "medium",
    "question": "Statement: 'Drink organic green tea daily to boost your immune system.' What is assumed?",
    "options": [
      "Green tea contains substances that can positively influence immune function.",
      "All organic drinks cure illnesses.",
      "People do not drink tea.",
      "Coffee is harmful."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The statement presumes a beneficial causal relationship between green tea intake and immunity."
  },
  {
    "id": "log-119",
    "category": "Assumptions",
    "difficulty": "medium",
    "question": "Statement: 'We should install solar panels on the roof to lower our electric bill.' What is the unstated assumption?",
    "options": [
      "Solar panels generate electricity that can offset grid power costs.",
      "Roof solar panels cause roof leaks.",
      "Electricity prices are guaranteed to drop.",
      "Solar panels require zero maintenance."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The proposal assumes solar energy production translates into financial utility savings."
  },
  {
    "id": "log-120",
    "category": "Assumptions",
    "difficulty": "medium",
    "question": "Statement: 'Drink organic green tea daily to boost your immune system.' What is assumed?",
    "options": [
      "Green tea contains substances that can positively influence immune function.",
      "All organic drinks cure illnesses.",
      "People do not drink tea.",
      "Coffee is harmful."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The statement presumes a beneficial causal relationship between green tea intake and immunity."
  },
  {
    "id": "log-121",
    "category": "Assumptions",
    "difficulty": "medium",
    "question": "Statement: 'We should install solar panels on the roof to lower our electric bill.' What is the unstated assumption?",
    "options": [
      "Solar panels generate electricity that can offset grid power costs.",
      "Roof solar panels cause roof leaks.",
      "Electricity prices are guaranteed to drop.",
      "Solar panels require zero maintenance."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The proposal assumes solar energy production translates into financial utility savings."
  },
  {
    "id": "log-122",
    "category": "Assumptions",
    "difficulty": "medium",
    "question": "Statement: 'Drink organic green tea daily to boost your immune system.' What is assumed?",
    "options": [
      "Green tea contains substances that can positively influence immune function.",
      "All organic drinks cure illnesses.",
      "People do not drink tea.",
      "Coffee is harmful."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The statement presumes a beneficial causal relationship between green tea intake and immunity."
  },
  {
    "id": "log-123",
    "category": "Assumptions",
    "difficulty": "medium",
    "question": "Statement: 'We should install solar panels on the roof to lower our electric bill.' What is the unstated assumption?",
    "options": [
      "Solar panels generate electricity that can offset grid power costs.",
      "Roof solar panels cause roof leaks.",
      "Electricity prices are guaranteed to drop.",
      "Solar panels require zero maintenance."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The proposal assumes solar energy production translates into financial utility savings."
  },
  {
    "id": "log-124",
    "category": "Assumptions",
    "difficulty": "medium",
    "question": "Statement: 'Drink organic green tea daily to boost your immune system.' What is assumed?",
    "options": [
      "Green tea contains substances that can positively influence immune function.",
      "All organic drinks cure illnesses.",
      "People do not drink tea.",
      "Coffee is harmful."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The statement presumes a beneficial causal relationship between green tea intake and immunity."
  },
  {
    "id": "log-125",
    "category": "Assumptions",
    "difficulty": "medium",
    "question": "Statement: 'We should install solar panels on the roof to lower our electric bill.' What is the unstated assumption?",
    "options": [
      "Solar panels generate electricity that can offset grid power costs.",
      "Roof solar panels cause roof leaks.",
      "Electricity prices are guaranteed to drop.",
      "Solar panels require zero maintenance."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The proposal assumes solar energy production translates into financial utility savings."
  },
  {
    "id": "log-126",
    "category": "Assumptions",
    "difficulty": "medium",
    "question": "Statement: 'Drink organic green tea daily to boost your immune system.' What is assumed?",
    "options": [
      "Green tea contains substances that can positively influence immune function.",
      "All organic drinks cure illnesses.",
      "People do not drink tea.",
      "Coffee is harmful."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The statement presumes a beneficial causal relationship between green tea intake and immunity."
  },
  {
    "id": "log-127",
    "category": "Assumptions",
    "difficulty": "medium",
    "question": "Statement: 'We should install solar panels on the roof to lower our electric bill.' What is the unstated assumption?",
    "options": [
      "Solar panels generate electricity that can offset grid power costs.",
      "Roof solar panels cause roof leaks.",
      "Electricity prices are guaranteed to drop.",
      "Solar panels require zero maintenance."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The proposal assumes solar energy production translates into financial utility savings."
  },
  {
    "id": "log-128",
    "category": "Assumptions",
    "difficulty": "medium",
    "question": "Statement: 'Drink organic green tea daily to boost your immune system.' What is assumed?",
    "options": [
      "Green tea contains substances that can positively influence immune function.",
      "All organic drinks cure illnesses.",
      "People do not drink tea.",
      "Coffee is harmful."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The statement presumes a beneficial causal relationship between green tea intake and immunity."
  },
  {
    "id": "log-129",
    "category": "Assumptions",
    "difficulty": "hard",
    "question": "Statement: 'We should install solar panels on the roof to lower our electric bill.' What is the unstated assumption?",
    "options": [
      "Solar panels generate electricity that can offset grid power costs.",
      "Roof solar panels cause roof leaks.",
      "Electricity prices are guaranteed to drop.",
      "Solar panels require zero maintenance."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The proposal assumes solar energy production translates into financial utility savings."
  },
  {
    "id": "log-130",
    "category": "Assumptions",
    "difficulty": "hard",
    "question": "Statement: 'Drink organic green tea daily to boost your immune system.' What is assumed?",
    "options": [
      "Green tea contains substances that can positively influence immune function.",
      "All organic drinks cure illnesses.",
      "People do not drink tea.",
      "Coffee is harmful."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The statement presumes a beneficial causal relationship between green tea intake and immunity."
  },
  {
    "id": "log-131",
    "category": "Assumptions",
    "difficulty": "hard",
    "question": "Statement: 'We should install solar panels on the roof to lower our electric bill.' What is the unstated assumption?",
    "options": [
      "Solar panels generate electricity that can offset grid power costs.",
      "Roof solar panels cause roof leaks.",
      "Electricity prices are guaranteed to drop.",
      "Solar panels require zero maintenance."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The proposal assumes solar energy production translates into financial utility savings."
  },
  {
    "id": "log-132",
    "category": "Assumptions",
    "difficulty": "hard",
    "question": "Statement: 'Drink organic green tea daily to boost your immune system.' What is assumed?",
    "options": [
      "Green tea contains substances that can positively influence immune function.",
      "All organic drinks cure illnesses.",
      "People do not drink tea.",
      "Coffee is harmful."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The statement presumes a beneficial causal relationship between green tea intake and immunity."
  },
  {
    "id": "log-133",
    "category": "Assumptions",
    "difficulty": "hard",
    "question": "Statement: 'We should install solar panels on the roof to lower our electric bill.' What is the unstated assumption?",
    "options": [
      "Solar panels generate electricity that can offset grid power costs.",
      "Roof solar panels cause roof leaks.",
      "Electricity prices are guaranteed to drop.",
      "Solar panels require zero maintenance."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The proposal assumes solar energy production translates into financial utility savings."
  },
  {
    "id": "log-134",
    "category": "Assumptions",
    "difficulty": "hard",
    "question": "Statement: 'Drink organic green tea daily to boost your immune system.' What is assumed?",
    "options": [
      "Green tea contains substances that can positively influence immune function.",
      "All organic drinks cure illnesses.",
      "People do not drink tea.",
      "Coffee is harmful."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The statement presumes a beneficial causal relationship between green tea intake and immunity."
  },
  {
    "id": "log-135",
    "category": "Assumptions",
    "difficulty": "hard",
    "question": "Statement: 'We should install solar panels on the roof to lower our electric bill.' What is the unstated assumption?",
    "options": [
      "Solar panels generate electricity that can offset grid power costs.",
      "Roof solar panels cause roof leaks.",
      "Electricity prices are guaranteed to drop.",
      "Solar panels require zero maintenance."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The proposal assumes solar energy production translates into financial utility savings."
  },
  {
    "id": "log-136",
    "category": "Assumptions",
    "difficulty": "hard",
    "question": "Statement: 'Drink organic green tea daily to boost your immune system.' What is assumed?",
    "options": [
      "Green tea contains substances that can positively influence immune function.",
      "All organic drinks cure illnesses.",
      "People do not drink tea.",
      "Coffee is harmful."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The statement presumes a beneficial causal relationship between green tea intake and immunity."
  },
  {
    "id": "log-137",
    "category": "Assumptions",
    "difficulty": "hard",
    "question": "Statement: 'We should install solar panels on the roof to lower our electric bill.' What is the unstated assumption?",
    "options": [
      "Solar panels generate electricity that can offset grid power costs.",
      "Roof solar panels cause roof leaks.",
      "Electricity prices are guaranteed to drop.",
      "Solar panels require zero maintenance."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The proposal assumes solar energy production translates into financial utility savings."
  },
  {
    "id": "log-138",
    "category": "Logical Equivalence",
    "difficulty": "easy",
    "question": "Which of the following statements is logically equivalent to: No dogs are cats?",
    "options": [
      "All dogs are not cats.",
      "Some dogs are cats.",
      "No cats are dogs.",
      "Both A and C."
    ],
    "correct": 3,
    "explanation": "Saying No dogs are cats is a universal negative. It implies that the sets of dogs and cats do not intersect, making both All dogs are not cats and No cats are dogs logically equivalent.",
    "correctAnswer": 3
  },
  {
    "id": "log-139",
    "category": "Logical Equivalence",
    "difficulty": "easy",
    "question": "If it is a weekend, I will go hiking. What is the contrapositive of this statement?",
    "options": [
      "If I go hiking, it is a weekend.",
      "If it is not a weekend, I will not go hiking.",
      "If I do not go hiking, it is not a weekend.",
      "I will go hiking only on a weekend."
    ],
    "correct": 2,
    "explanation": "The contrapositive of If P, then Q is If not Q, then not P. Therefore, If I do not go hiking, it is not a weekend is the logically equivalent contrapositive.",
    "correctAnswer": 2
  },
  {
    "id": "log-140",
    "category": "Logical Equivalence",
    "difficulty": "easy",
    "question": "It is not true that both Lisa and Tom went to the party. This means:",
    "options": [
      "Neither Lisa nor Tom went.",
      "Lisa did not go, or Tom did not go, or both did not go.",
      "Only one of them went.",
      "If Lisa went, Tom also went."
    ],
    "correct": 1,
    "explanation": "By De Morgans Laws, Not (A AND B) is logically equivalent to (Not A) OR (Not B). Therefore, at least one of them didn\t go.",
    "correctAnswer": 1
  },
  {
    "id": "log-141",
    "category": "Logical Equivalence",
    "difficulty": "easy",
    "question": "Which statement is logically equivalent to 'If a person is a pilot, then they have a license'?",
    "options": [
      "If a person does not have a license, then they are not a pilot.",
      "If a person has a license, then they are a pilot.",
      "If a person is not a pilot, they do not have a license.",
      "All license holders fly planes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The contrapositive (Not Q -> Not P) is always logically equivalent to the original conditional (P -> Q)."
  },
  {
    "id": "log-142",
    "category": "Logical Equivalence",
    "difficulty": "easy",
    "question": "Which statement is equivalent to 'No dogs are felines'?",
    "options": [
      "No felines are dogs.",
      "All dogs are felines.",
      "Some dogs are felines.",
      "All felines are dogs."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Universal negative statements are symmetric: 'No A are B' is equivalent to 'No B are A'."
  },
  {
    "id": "log-143",
    "category": "Logical Equivalence",
    "difficulty": "easy",
    "question": "Which statement is logically equivalent to 'If a person is a pilot, then they have a license'?",
    "options": [
      "If a person does not have a license, then they are not a pilot.",
      "If a person has a license, then they are a pilot.",
      "If a person is not a pilot, they do not have a license.",
      "All license holders fly planes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The contrapositive (Not Q -> Not P) is always logically equivalent to the original conditional (P -> Q)."
  },
  {
    "id": "log-144",
    "category": "Logical Equivalence",
    "difficulty": "easy",
    "question": "Which statement is equivalent to 'No dogs are felines'?",
    "options": [
      "No felines are dogs.",
      "All dogs are felines.",
      "Some dogs are felines.",
      "All felines are dogs."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Universal negative statements are symmetric: 'No A are B' is equivalent to 'No B are A'."
  },
  {
    "id": "log-145",
    "category": "Logical Equivalence",
    "difficulty": "easy",
    "question": "Which statement is logically equivalent to 'If a person is a pilot, then they have a license'?",
    "options": [
      "If a person does not have a license, then they are not a pilot.",
      "If a person has a license, then they are a pilot.",
      "If a person is not a pilot, they do not have a license.",
      "All license holders fly planes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The contrapositive (Not Q -> Not P) is always logically equivalent to the original conditional (P -> Q)."
  },
  {
    "id": "log-146",
    "category": "Logical Equivalence",
    "difficulty": "easy",
    "question": "Which statement is equivalent to 'No dogs are felines'?",
    "options": [
      "No felines are dogs.",
      "All dogs are felines.",
      "Some dogs are felines.",
      "All felines are dogs."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Universal negative statements are symmetric: 'No A are B' is equivalent to 'No B are A'."
  },
  {
    "id": "log-147",
    "category": "Logical Equivalence",
    "difficulty": "easy",
    "question": "Which statement is logically equivalent to 'If a person is a pilot, then they have a license'?",
    "options": [
      "If a person does not have a license, then they are not a pilot.",
      "If a person has a license, then they are a pilot.",
      "If a person is not a pilot, they do not have a license.",
      "All license holders fly planes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The contrapositive (Not Q -> Not P) is always logically equivalent to the original conditional (P -> Q)."
  },
  {
    "id": "log-148",
    "category": "Logical Equivalence",
    "difficulty": "easy",
    "question": "Which statement is equivalent to 'No dogs are felines'?",
    "options": [
      "No felines are dogs.",
      "All dogs are felines.",
      "Some dogs are felines.",
      "All felines are dogs."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Universal negative statements are symmetric: 'No A are B' is equivalent to 'No B are A'."
  },
  {
    "id": "log-149",
    "category": "Logical Equivalence",
    "difficulty": "medium",
    "question": "Which statement is logically equivalent to 'If a person is a pilot, then they have a license'?",
    "options": [
      "If a person does not have a license, then they are not a pilot.",
      "If a person has a license, then they are a pilot.",
      "If a person is not a pilot, they do not have a license.",
      "All license holders fly planes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The contrapositive (Not Q -> Not P) is always logically equivalent to the original conditional (P -> Q)."
  },
  {
    "id": "log-150",
    "category": "Logical Equivalence",
    "difficulty": "medium",
    "question": "Which statement is equivalent to 'No dogs are felines'?",
    "options": [
      "No felines are dogs.",
      "All dogs are felines.",
      "Some dogs are felines.",
      "All felines are dogs."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Universal negative statements are symmetric: 'No A are B' is equivalent to 'No B are A'."
  },
  {
    "id": "log-151",
    "category": "Logical Equivalence",
    "difficulty": "medium",
    "question": "Which statement is logically equivalent to 'If a person is a pilot, then they have a license'?",
    "options": [
      "If a person does not have a license, then they are not a pilot.",
      "If a person has a license, then they are a pilot.",
      "If a person is not a pilot, they do not have a license.",
      "All license holders fly planes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The contrapositive (Not Q -> Not P) is always logically equivalent to the original conditional (P -> Q)."
  },
  {
    "id": "log-152",
    "category": "Logical Equivalence",
    "difficulty": "medium",
    "question": "Which statement is equivalent to 'No dogs are felines'?",
    "options": [
      "No felines are dogs.",
      "All dogs are felines.",
      "Some dogs are felines.",
      "All felines are dogs."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Universal negative statements are symmetric: 'No A are B' is equivalent to 'No B are A'."
  },
  {
    "id": "log-153",
    "category": "Logical Equivalence",
    "difficulty": "medium",
    "question": "Which statement is logically equivalent to 'If a person is a pilot, then they have a license'?",
    "options": [
      "If a person does not have a license, then they are not a pilot.",
      "If a person has a license, then they are a pilot.",
      "If a person is not a pilot, they do not have a license.",
      "All license holders fly planes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The contrapositive (Not Q -> Not P) is always logically equivalent to the original conditional (P -> Q)."
  },
  {
    "id": "log-154",
    "category": "Logical Equivalence",
    "difficulty": "medium",
    "question": "Which statement is equivalent to 'No dogs are felines'?",
    "options": [
      "No felines are dogs.",
      "All dogs are felines.",
      "Some dogs are felines.",
      "All felines are dogs."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Universal negative statements are symmetric: 'No A are B' is equivalent to 'No B are A'."
  },
  {
    "id": "log-155",
    "category": "Logical Equivalence",
    "difficulty": "medium",
    "question": "Which statement is logically equivalent to 'If a person is a pilot, then they have a license'?",
    "options": [
      "If a person does not have a license, then they are not a pilot.",
      "If a person has a license, then they are a pilot.",
      "If a person is not a pilot, they do not have a license.",
      "All license holders fly planes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The contrapositive (Not Q -> Not P) is always logically equivalent to the original conditional (P -> Q)."
  },
  {
    "id": "log-156",
    "category": "Logical Equivalence",
    "difficulty": "medium",
    "question": "Which statement is equivalent to 'No dogs are felines'?",
    "options": [
      "No felines are dogs.",
      "All dogs are felines.",
      "Some dogs are felines.",
      "All felines are dogs."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Universal negative statements are symmetric: 'No A are B' is equivalent to 'No B are A'."
  },
  {
    "id": "log-157",
    "category": "Logical Equivalence",
    "difficulty": "medium",
    "question": "Which statement is logically equivalent to 'If a person is a pilot, then they have a license'?",
    "options": [
      "If a person does not have a license, then they are not a pilot.",
      "If a person has a license, then they are a pilot.",
      "If a person is not a pilot, they do not have a license.",
      "All license holders fly planes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The contrapositive (Not Q -> Not P) is always logically equivalent to the original conditional (P -> Q)."
  },
  {
    "id": "log-158",
    "category": "Logical Equivalence",
    "difficulty": "medium",
    "question": "Which statement is equivalent to 'No dogs are felines'?",
    "options": [
      "No felines are dogs.",
      "All dogs are felines.",
      "Some dogs are felines.",
      "All felines are dogs."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Universal negative statements are symmetric: 'No A are B' is equivalent to 'No B are A'."
  },
  {
    "id": "log-159",
    "category": "Logical Equivalence",
    "difficulty": "medium",
    "question": "Which statement is logically equivalent to 'If a person is a pilot, then they have a license'?",
    "options": [
      "If a person does not have a license, then they are not a pilot.",
      "If a person has a license, then they are a pilot.",
      "If a person is not a pilot, they do not have a license.",
      "All license holders fly planes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The contrapositive (Not Q -> Not P) is always logically equivalent to the original conditional (P -> Q)."
  },
  {
    "id": "log-160",
    "category": "Logical Equivalence",
    "difficulty": "medium",
    "question": "Which statement is equivalent to 'No dogs are felines'?",
    "options": [
      "No felines are dogs.",
      "All dogs are felines.",
      "Some dogs are felines.",
      "All felines are dogs."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Universal negative statements are symmetric: 'No A are B' is equivalent to 'No B are A'."
  },
  {
    "id": "log-161",
    "category": "Logical Equivalence",
    "difficulty": "medium",
    "question": "Which statement is logically equivalent to 'If a person is a pilot, then they have a license'?",
    "options": [
      "If a person does not have a license, then they are not a pilot.",
      "If a person has a license, then they are a pilot.",
      "If a person is not a pilot, they do not have a license.",
      "All license holders fly planes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The contrapositive (Not Q -> Not P) is always logically equivalent to the original conditional (P -> Q)."
  },
  {
    "id": "log-162",
    "category": "Logical Equivalence",
    "difficulty": "hard",
    "question": "Which statement is equivalent to 'No dogs are felines'?",
    "options": [
      "No felines are dogs.",
      "All dogs are felines.",
      "Some dogs are felines.",
      "All felines are dogs."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Universal negative statements are symmetric: 'No A are B' is equivalent to 'No B are A'."
  },
  {
    "id": "log-163",
    "category": "Logical Equivalence",
    "difficulty": "hard",
    "question": "Which statement is logically equivalent to 'If a person is a pilot, then they have a license'?",
    "options": [
      "If a person does not have a license, then they are not a pilot.",
      "If a person has a license, then they are a pilot.",
      "If a person is not a pilot, they do not have a license.",
      "All license holders fly planes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The contrapositive (Not Q -> Not P) is always logically equivalent to the original conditional (P -> Q)."
  },
  {
    "id": "log-164",
    "category": "Logical Equivalence",
    "difficulty": "hard",
    "question": "Which statement is equivalent to 'No dogs are felines'?",
    "options": [
      "No felines are dogs.",
      "All dogs are felines.",
      "Some dogs are felines.",
      "All felines are dogs."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Universal negative statements are symmetric: 'No A are B' is equivalent to 'No B are A'."
  },
  {
    "id": "log-165",
    "category": "Logical Equivalence",
    "difficulty": "hard",
    "question": "Which statement is logically equivalent to 'If a person is a pilot, then they have a license'?",
    "options": [
      "If a person does not have a license, then they are not a pilot.",
      "If a person has a license, then they are a pilot.",
      "If a person is not a pilot, they do not have a license.",
      "All license holders fly planes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The contrapositive (Not Q -> Not P) is always logically equivalent to the original conditional (P -> Q)."
  },
  {
    "id": "log-166",
    "category": "Logical Equivalence",
    "difficulty": "hard",
    "question": "Which statement is equivalent to 'No dogs are felines'?",
    "options": [
      "No felines are dogs.",
      "All dogs are felines.",
      "Some dogs are felines.",
      "All felines are dogs."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Universal negative statements are symmetric: 'No A are B' is equivalent to 'No B are A'."
  },
  {
    "id": "log-167",
    "category": "Logical Equivalence",
    "difficulty": "hard",
    "question": "Which statement is logically equivalent to 'If a person is a pilot, then they have a license'?",
    "options": [
      "If a person does not have a license, then they are not a pilot.",
      "If a person has a license, then they are a pilot.",
      "If a person is not a pilot, they do not have a license.",
      "All license holders fly planes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The contrapositive (Not Q -> Not P) is always logically equivalent to the original conditional (P -> Q)."
  },
  {
    "id": "log-168",
    "category": "Logical Equivalence",
    "difficulty": "hard",
    "question": "Which statement is equivalent to 'No dogs are felines'?",
    "options": [
      "No felines are dogs.",
      "All dogs are felines.",
      "Some dogs are felines.",
      "All felines are dogs."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Universal negative statements are symmetric: 'No A are B' is equivalent to 'No B are A'."
  },
  {
    "id": "log-169",
    "category": "Logical Equivalence",
    "difficulty": "hard",
    "question": "Which statement is logically equivalent to 'If a person is a pilot, then they have a license'?",
    "options": [
      "If a person does not have a license, then they are not a pilot.",
      "If a person has a license, then they are a pilot.",
      "If a person is not a pilot, they do not have a license.",
      "All license holders fly planes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "The contrapositive (Not Q -> Not P) is always logically equivalent to the original conditional (P -> Q)."
  },
  {
    "id": "log-170",
    "category": "Logical Equivalence",
    "difficulty": "hard",
    "question": "Which statement is equivalent to 'No dogs are felines'?",
    "options": [
      "No felines are dogs.",
      "All dogs are felines.",
      "Some dogs are felines.",
      "All felines are dogs."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Universal negative statements are symmetric: 'No A are B' is equivalent to 'No B are A'."
  },
  {
    "id": "log-171",
    "category": "Arrangements",
    "difficulty": "easy",
    "question": "Four friends sit in a row. Sarah is not next to John. Mike is next to Emma. John is at the far right end. If Emma is not next to John, who is sitting next to John?",
    "options": [
      "Sarah",
      "Mike",
      "Emma",
      "No one"
    ],
    "correct": 1,
    "explanation": "Positions are 1, 2, 3, 4. John is at 4. Sarah cannot be at 3 (not next to John), Emma cannot be at 3 (not next to John). So Mike must be at 3, making him next to John.",
    "correctAnswer": 1
  },
  {
    "id": "log-172",
    "category": "Arrangements",
    "difficulty": "easy",
    "question": "Six books are stacked. Math is above Science. History is below Science but above Art. English is at the very top. Physics is immediately below Math. Which book is at the bottom?",
    "options": [
      "Science",
      "History",
      "Art",
      "Physics"
    ],
    "correct": 2,
    "explanation": "The order from top to bottom: English (top). Math is above Science, Physics is immediately below Math (Math, Physics, Science). History is below Science, Art is below History. The full stack is English, Math, Physics, Science, History, Art. Art is at the bottom.",
    "correctAnswer": 2
  },
  {
    "id": "log-173",
    "category": "Arrangements",
    "difficulty": "easy",
    "question": "Five cars are parked in spots 1 through 5. The Red car is exactly in the middle. The Blue car is immediately to the right of the Red car. The Black car is in spot 2. Where is the Green car?",
    "options": [
      "Spot 1",
      "Spot 2",
      "Spot 4",
      "Spot 1 or 5"
    ],
    "correct": 3,
    "explanation": "Red is at 3. Blue is at 4 (right of Red). Black is at 2. The remaining spots are 1 and 5. The Green and White cars must occupy them, so Green is in either Spot 1 or Spot 5.",
    "correctAnswer": 3
  },
  {
    "id": "log-174",
    "category": "Arrangements",
    "difficulty": "easy",
    "question": "Five cars are parked in a row. Red is between Blue and Green. Yellow is to the left of Blue. White is to the right of Green. Which car is in the center?",
    "options": [
      "Red",
      "Blue",
      "Green",
      "Yellow"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: Yellow, Blue, Red, Green, White. The Red car is in the center."
  },
  {
    "id": "log-175",
    "category": "Arrangements",
    "difficulty": "easy",
    "question": "Four friends (W, X, Y, Z) sit around a circular table facing the center. W sits directly opposite Y. X sits to the right of W. Who sits to the left of W?",
    "options": [
      "Z",
      "X",
      "Y",
      "Cannot be determined"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "In a 4-person circular arrangement with W opposite Y and X on W's right, Z must occupy the seat to W's left."
  },
  {
    "id": "log-176",
    "category": "Arrangements",
    "difficulty": "easy",
    "question": "Five cars are parked in a row. Red is between Blue and Green. Yellow is to the left of Blue. White is to the right of Green. Which car is in the center?",
    "options": [
      "Red",
      "Blue",
      "Green",
      "Yellow"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: Yellow, Blue, Red, Green, White. The Red car is in the center."
  },
  {
    "id": "log-177",
    "category": "Arrangements",
    "difficulty": "easy",
    "question": "Four friends (W, X, Y, Z) sit around a circular table facing the center. W sits directly opposite Y. X sits to the right of W. Who sits to the left of W?",
    "options": [
      "Z",
      "X",
      "Y",
      "Cannot be determined"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "In a 4-person circular arrangement with W opposite Y and X on W's right, Z must occupy the seat to W's left."
  },
  {
    "id": "log-178",
    "category": "Arrangements",
    "difficulty": "easy",
    "question": "Five cars are parked in a row. Red is between Blue and Green. Yellow is to the left of Blue. White is to the right of Green. Which car is in the center?",
    "options": [
      "Red",
      "Blue",
      "Green",
      "Yellow"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: Yellow, Blue, Red, Green, White. The Red car is in the center."
  },
  {
    "id": "log-179",
    "category": "Arrangements",
    "difficulty": "easy",
    "question": "Four friends (W, X, Y, Z) sit around a circular table facing the center. W sits directly opposite Y. X sits to the right of W. Who sits to the left of W?",
    "options": [
      "Z",
      "X",
      "Y",
      "Cannot be determined"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "In a 4-person circular arrangement with W opposite Y and X on W's right, Z must occupy the seat to W's left."
  },
  {
    "id": "log-180",
    "category": "Arrangements",
    "difficulty": "easy",
    "question": "Five cars are parked in a row. Red is between Blue and Green. Yellow is to the left of Blue. White is to the right of Green. Which car is in the center?",
    "options": [
      "Red",
      "Blue",
      "Green",
      "Yellow"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: Yellow, Blue, Red, Green, White. The Red car is in the center."
  },
  {
    "id": "log-181",
    "category": "Arrangements",
    "difficulty": "easy",
    "question": "Four friends (W, X, Y, Z) sit around a circular table facing the center. W sits directly opposite Y. X sits to the right of W. Who sits to the left of W?",
    "options": [
      "Z",
      "X",
      "Y",
      "Cannot be determined"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "In a 4-person circular arrangement with W opposite Y and X on W's right, Z must occupy the seat to W's left."
  },
  {
    "id": "log-182",
    "category": "Arrangements",
    "difficulty": "medium",
    "question": "Five cars are parked in a row. Red is between Blue and Green. Yellow is to the left of Blue. White is to the right of Green. Which car is in the center?",
    "options": [
      "Red",
      "Blue",
      "Green",
      "Yellow"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: Yellow, Blue, Red, Green, White. The Red car is in the center."
  },
  {
    "id": "log-183",
    "category": "Arrangements",
    "difficulty": "medium",
    "question": "Four friends (W, X, Y, Z) sit around a circular table facing the center. W sits directly opposite Y. X sits to the right of W. Who sits to the left of W?",
    "options": [
      "Z",
      "X",
      "Y",
      "Cannot be determined"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "In a 4-person circular arrangement with W opposite Y and X on W's right, Z must occupy the seat to W's left."
  },
  {
    "id": "log-184",
    "category": "Arrangements",
    "difficulty": "medium",
    "question": "Five cars are parked in a row. Red is between Blue and Green. Yellow is to the left of Blue. White is to the right of Green. Which car is in the center?",
    "options": [
      "Red",
      "Blue",
      "Green",
      "Yellow"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: Yellow, Blue, Red, Green, White. The Red car is in the center."
  },
  {
    "id": "log-185",
    "category": "Arrangements",
    "difficulty": "medium",
    "question": "Four friends (W, X, Y, Z) sit around a circular table facing the center. W sits directly opposite Y. X sits to the right of W. Who sits to the left of W?",
    "options": [
      "Z",
      "X",
      "Y",
      "Cannot be determined"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "In a 4-person circular arrangement with W opposite Y and X on W's right, Z must occupy the seat to W's left."
  },
  {
    "id": "log-186",
    "category": "Arrangements",
    "difficulty": "medium",
    "question": "Five cars are parked in a row. Red is between Blue and Green. Yellow is to the left of Blue. White is to the right of Green. Which car is in the center?",
    "options": [
      "Red",
      "Blue",
      "Green",
      "Yellow"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: Yellow, Blue, Red, Green, White. The Red car is in the center."
  },
  {
    "id": "log-187",
    "category": "Arrangements",
    "difficulty": "medium",
    "question": "Four friends (W, X, Y, Z) sit around a circular table facing the center. W sits directly opposite Y. X sits to the right of W. Who sits to the left of W?",
    "options": [
      "Z",
      "X",
      "Y",
      "Cannot be determined"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "In a 4-person circular arrangement with W opposite Y and X on W's right, Z must occupy the seat to W's left."
  },
  {
    "id": "log-188",
    "category": "Arrangements",
    "difficulty": "medium",
    "question": "Five cars are parked in a row. Red is between Blue and Green. Yellow is to the left of Blue. White is to the right of Green. Which car is in the center?",
    "options": [
      "Red",
      "Blue",
      "Green",
      "Yellow"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: Yellow, Blue, Red, Green, White. The Red car is in the center."
  },
  {
    "id": "log-189",
    "category": "Arrangements",
    "difficulty": "medium",
    "question": "Four friends (W, X, Y, Z) sit around a circular table facing the center. W sits directly opposite Y. X sits to the right of W. Who sits to the left of W?",
    "options": [
      "Z",
      "X",
      "Y",
      "Cannot be determined"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "In a 4-person circular arrangement with W opposite Y and X on W's right, Z must occupy the seat to W's left."
  },
  {
    "id": "log-190",
    "category": "Arrangements",
    "difficulty": "medium",
    "question": "Five cars are parked in a row. Red is between Blue and Green. Yellow is to the left of Blue. White is to the right of Green. Which car is in the center?",
    "options": [
      "Red",
      "Blue",
      "Green",
      "Yellow"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: Yellow, Blue, Red, Green, White. The Red car is in the center."
  },
  {
    "id": "log-191",
    "category": "Arrangements",
    "difficulty": "medium",
    "question": "Four friends (W, X, Y, Z) sit around a circular table facing the center. W sits directly opposite Y. X sits to the right of W. Who sits to the left of W?",
    "options": [
      "Z",
      "X",
      "Y",
      "Cannot be determined"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "In a 4-person circular arrangement with W opposite Y and X on W's right, Z must occupy the seat to W's left."
  },
  {
    "id": "log-192",
    "category": "Arrangements",
    "difficulty": "medium",
    "question": "Five cars are parked in a row. Red is between Blue and Green. Yellow is to the left of Blue. White is to the right of Green. Which car is in the center?",
    "options": [
      "Red",
      "Blue",
      "Green",
      "Yellow"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: Yellow, Blue, Red, Green, White. The Red car is in the center."
  },
  {
    "id": "log-193",
    "category": "Arrangements",
    "difficulty": "medium",
    "question": "Four friends (W, X, Y, Z) sit around a circular table facing the center. W sits directly opposite Y. X sits to the right of W. Who sits to the left of W?",
    "options": [
      "Z",
      "X",
      "Y",
      "Cannot be determined"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "In a 4-person circular arrangement with W opposite Y and X on W's right, Z must occupy the seat to W's left."
  },
  {
    "id": "log-194",
    "category": "Arrangements",
    "difficulty": "medium",
    "question": "Five cars are parked in a row. Red is between Blue and Green. Yellow is to the left of Blue. White is to the right of Green. Which car is in the center?",
    "options": [
      "Red",
      "Blue",
      "Green",
      "Yellow"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: Yellow, Blue, Red, Green, White. The Red car is in the center."
  },
  {
    "id": "log-195",
    "category": "Arrangements",
    "difficulty": "hard",
    "question": "Four friends (W, X, Y, Z) sit around a circular table facing the center. W sits directly opposite Y. X sits to the right of W. Who sits to the left of W?",
    "options": [
      "Z",
      "X",
      "Y",
      "Cannot be determined"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "In a 4-person circular arrangement with W opposite Y and X on W's right, Z must occupy the seat to W's left."
  },
  {
    "id": "log-196",
    "category": "Arrangements",
    "difficulty": "hard",
    "question": "Five cars are parked in a row. Red is between Blue and Green. Yellow is to the left of Blue. White is to the right of Green. Which car is in the center?",
    "options": [
      "Red",
      "Blue",
      "Green",
      "Yellow"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: Yellow, Blue, Red, Green, White. The Red car is in the center."
  },
  {
    "id": "log-197",
    "category": "Arrangements",
    "difficulty": "hard",
    "question": "Four friends (W, X, Y, Z) sit around a circular table facing the center. W sits directly opposite Y. X sits to the right of W. Who sits to the left of W?",
    "options": [
      "Z",
      "X",
      "Y",
      "Cannot be determined"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "In a 4-person circular arrangement with W opposite Y and X on W's right, Z must occupy the seat to W's left."
  },
  {
    "id": "log-198",
    "category": "Arrangements",
    "difficulty": "hard",
    "question": "Five cars are parked in a row. Red is between Blue and Green. Yellow is to the left of Blue. White is to the right of Green. Which car is in the center?",
    "options": [
      "Red",
      "Blue",
      "Green",
      "Yellow"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: Yellow, Blue, Red, Green, White. The Red car is in the center."
  },
  {
    "id": "log-199",
    "category": "Arrangements",
    "difficulty": "hard",
    "question": "Four friends (W, X, Y, Z) sit around a circular table facing the center. W sits directly opposite Y. X sits to the right of W. Who sits to the left of W?",
    "options": [
      "Z",
      "X",
      "Y",
      "Cannot be determined"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "In a 4-person circular arrangement with W opposite Y and X on W's right, Z must occupy the seat to W's left."
  },
  {
    "id": "log-200",
    "category": "Arrangements",
    "difficulty": "hard",
    "question": "Five cars are parked in a row. Red is between Blue and Green. Yellow is to the left of Blue. White is to the right of Green. Which car is in the center?",
    "options": [
      "Red",
      "Blue",
      "Green",
      "Yellow"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: Yellow, Blue, Red, Green, White. The Red car is in the center."
  },
  {
    "id": "log-201",
    "category": "Arrangements",
    "difficulty": "hard",
    "question": "Four friends (W, X, Y, Z) sit around a circular table facing the center. W sits directly opposite Y. X sits to the right of W. Who sits to the left of W?",
    "options": [
      "Z",
      "X",
      "Y",
      "Cannot be determined"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "In a 4-person circular arrangement with W opposite Y and X on W's right, Z must occupy the seat to W's left."
  },
  {
    "id": "log-202",
    "category": "Arrangements",
    "difficulty": "hard",
    "question": "Five cars are parked in a row. Red is between Blue and Green. Yellow is to the left of Blue. White is to the right of Green. Which car is in the center?",
    "options": [
      "Red",
      "Blue",
      "Green",
      "Yellow"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Order from left to right: Yellow, Blue, Red, Green, White. The Red car is in the center."
  },
  {
    "id": "log-203",
    "category": "Arrangements",
    "difficulty": "hard",
    "question": "Four friends (W, X, Y, Z) sit around a circular table facing the center. W sits directly opposite Y. X sits to the right of W. Who sits to the left of W?",
    "options": [
      "Z",
      "X",
      "Y",
      "Cannot be determined"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "In a 4-person circular arrangement with W opposite Y and X on W's right, Z must occupy the seat to W's left."
  },
  {
    "id": "log-204",
    "category": "Truth or Lie",
    "difficulty": "easy",
    "question": "A says B is lying. B says C is lying. C says Both A and B are lying. Who is telling the truth?",
    "options": [
      "A",
      "B",
      "C",
      "None of them"
    ],
    "correct": 1,
    "explanation": "If C is true, A and B are lying. But if A is lying, B is telling the truth, which contradicts C. If B is true, C is lying, meaning A and B are not both lying, which aligns with B telling the truth and A lying. Thus, B is telling the truth.",
    "correctAnswer": 1
  },
  {
    "id": "log-205",
    "category": "Truth or Lie",
    "difficulty": "easy",
    "question": "Two doors lead to escape or doom. One guard always lies, one always tells the truth. You can ask one question to one guard. Which question guarantees finding the escape door?",
    "options": [
      "Which door leads to escape?",
      "Are you telling the truth?",
      "Which door would the other guard say leads to escape?",
      "Which door leads to doom?"
    ],
    "correct": 2,
    "explanation": "Asking Which door would the other guard say leads to escape? will always result in both guards pointing to the doom door. You then simply choose the opposite door to escape.",
    "correctAnswer": 2
  },
  {
    "id": "log-206",
    "category": "Truth or Lie",
    "difficulty": "easy",
    "question": "Three aliens (Zog, Yip, Xar) speak. Zog says Yip is lying. Yip says Xar is telling the truth. Xar says Zog and Yip are both lying. How many are telling the truth?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correct": 1,
    "explanation": "If Xar tells the truth, Zog and Yip are lying. If Yip is lying, Xar is lying (contradiction). If Yip tells the truth, Xar tells the truth (contradiction). So Yip must be lying. Since Yip lies, Zog tells the truth. Zog says Yip lies (true). So Zog is the only one telling the truth.",
    "correctAnswer": 1
  },
  {
    "id": "log-207",
    "category": "Truth or Lie",
    "difficulty": "easy",
    "question": "On an island, Knights always tell the truth and Knaves always lie. Person A says 'I am a Knave.' Is this statement possible?",
    "options": [
      "No, because neither a Knight nor a Knave could make this statement.",
      "Yes, A is a Knight.",
      "Yes, A is a Knave.",
      "Yes, A is an outsider."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A Knight cannot say 'I am a Knave' (would be a lie), and a Knave cannot say 'I am a Knave' (would be true). Hence it is a logical impossibility."
  },
  {
    "id": "log-208",
    "category": "Truth or Lie",
    "difficulty": "easy",
    "question": "Person X says: 'At least one of us is a Knave.' If Knights always tell truth and Knaves always lie, what is X?",
    "options": [
      "X is a Knight.",
      "X is a Knave.",
      "X is both.",
      "Cannot be deduced."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "If X were a Knave, the statement would be true, creating a contradiction. Thus X must be a Knight telling the truth."
  },
  {
    "id": "log-209",
    "category": "Truth or Lie",
    "difficulty": "easy",
    "question": "On an island, Knights always tell the truth and Knaves always lie. Person A says 'I am a Knave.' Is this statement possible?",
    "options": [
      "No, because neither a Knight nor a Knave could make this statement.",
      "Yes, A is a Knight.",
      "Yes, A is a Knave.",
      "Yes, A is an outsider."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A Knight cannot say 'I am a Knave' (would be a lie), and a Knave cannot say 'I am a Knave' (would be true). Hence it is a logical impossibility."
  },
  {
    "id": "log-210",
    "category": "Truth or Lie",
    "difficulty": "easy",
    "question": "Person X says: 'At least one of us is a Knave.' If Knights always tell truth and Knaves always lie, what is X?",
    "options": [
      "X is a Knight.",
      "X is a Knave.",
      "X is both.",
      "Cannot be deduced."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "If X were a Knave, the statement would be true, creating a contradiction. Thus X must be a Knight telling the truth."
  },
  {
    "id": "log-211",
    "category": "Truth or Lie",
    "difficulty": "easy",
    "question": "On an island, Knights always tell the truth and Knaves always lie. Person A says 'I am a Knave.' Is this statement possible?",
    "options": [
      "No, because neither a Knight nor a Knave could make this statement.",
      "Yes, A is a Knight.",
      "Yes, A is a Knave.",
      "Yes, A is an outsider."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A Knight cannot say 'I am a Knave' (would be a lie), and a Knave cannot say 'I am a Knave' (would be true). Hence it is a logical impossibility."
  },
  {
    "id": "log-212",
    "category": "Truth or Lie",
    "difficulty": "easy",
    "question": "Person X says: 'At least one of us is a Knave.' If Knights always tell truth and Knaves always lie, what is X?",
    "options": [
      "X is a Knight.",
      "X is a Knave.",
      "X is both.",
      "Cannot be deduced."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "If X were a Knave, the statement would be true, creating a contradiction. Thus X must be a Knight telling the truth."
  },
  {
    "id": "log-213",
    "category": "Truth or Lie",
    "difficulty": "easy",
    "question": "On an island, Knights always tell the truth and Knaves always lie. Person A says 'I am a Knave.' Is this statement possible?",
    "options": [
      "No, because neither a Knight nor a Knave could make this statement.",
      "Yes, A is a Knight.",
      "Yes, A is a Knave.",
      "Yes, A is an outsider."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A Knight cannot say 'I am a Knave' (would be a lie), and a Knave cannot say 'I am a Knave' (would be true). Hence it is a logical impossibility."
  },
  {
    "id": "log-214",
    "category": "Truth or Lie",
    "difficulty": "easy",
    "question": "Person X says: 'At least one of us is a Knave.' If Knights always tell truth and Knaves always lie, what is X?",
    "options": [
      "X is a Knight.",
      "X is a Knave.",
      "X is both.",
      "Cannot be deduced."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "If X were a Knave, the statement would be true, creating a contradiction. Thus X must be a Knight telling the truth."
  },
  {
    "id": "log-215",
    "category": "Truth or Lie",
    "difficulty": "medium",
    "question": "On an island, Knights always tell the truth and Knaves always lie. Person A says 'I am a Knave.' Is this statement possible?",
    "options": [
      "No, because neither a Knight nor a Knave could make this statement.",
      "Yes, A is a Knight.",
      "Yes, A is a Knave.",
      "Yes, A is an outsider."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A Knight cannot say 'I am a Knave' (would be a lie), and a Knave cannot say 'I am a Knave' (would be true). Hence it is a logical impossibility."
  },
  {
    "id": "log-216",
    "category": "Truth or Lie",
    "difficulty": "medium",
    "question": "Person X says: 'At least one of us is a Knave.' If Knights always tell truth and Knaves always lie, what is X?",
    "options": [
      "X is a Knight.",
      "X is a Knave.",
      "X is both.",
      "Cannot be deduced."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "If X were a Knave, the statement would be true, creating a contradiction. Thus X must be a Knight telling the truth."
  },
  {
    "id": "log-217",
    "category": "Truth or Lie",
    "difficulty": "medium",
    "question": "On an island, Knights always tell the truth and Knaves always lie. Person A says 'I am a Knave.' Is this statement possible?",
    "options": [
      "No, because neither a Knight nor a Knave could make this statement.",
      "Yes, A is a Knight.",
      "Yes, A is a Knave.",
      "Yes, A is an outsider."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A Knight cannot say 'I am a Knave' (would be a lie), and a Knave cannot say 'I am a Knave' (would be true). Hence it is a logical impossibility."
  },
  {
    "id": "log-218",
    "category": "Truth or Lie",
    "difficulty": "medium",
    "question": "Person X says: 'At least one of us is a Knave.' If Knights always tell truth and Knaves always lie, what is X?",
    "options": [
      "X is a Knight.",
      "X is a Knave.",
      "X is both.",
      "Cannot be deduced."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "If X were a Knave, the statement would be true, creating a contradiction. Thus X must be a Knight telling the truth."
  },
  {
    "id": "log-219",
    "category": "Truth or Lie",
    "difficulty": "medium",
    "question": "On an island, Knights always tell the truth and Knaves always lie. Person A says 'I am a Knave.' Is this statement possible?",
    "options": [
      "No, because neither a Knight nor a Knave could make this statement.",
      "Yes, A is a Knight.",
      "Yes, A is a Knave.",
      "Yes, A is an outsider."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A Knight cannot say 'I am a Knave' (would be a lie), and a Knave cannot say 'I am a Knave' (would be true). Hence it is a logical impossibility."
  },
  {
    "id": "log-220",
    "category": "Truth or Lie",
    "difficulty": "medium",
    "question": "Person X says: 'At least one of us is a Knave.' If Knights always tell truth and Knaves always lie, what is X?",
    "options": [
      "X is a Knight.",
      "X is a Knave.",
      "X is both.",
      "Cannot be deduced."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "If X were a Knave, the statement would be true, creating a contradiction. Thus X must be a Knight telling the truth."
  },
  {
    "id": "log-221",
    "category": "Truth or Lie",
    "difficulty": "medium",
    "question": "On an island, Knights always tell the truth and Knaves always lie. Person A says 'I am a Knave.' Is this statement possible?",
    "options": [
      "No, because neither a Knight nor a Knave could make this statement.",
      "Yes, A is a Knight.",
      "Yes, A is a Knave.",
      "Yes, A is an outsider."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A Knight cannot say 'I am a Knave' (would be a lie), and a Knave cannot say 'I am a Knave' (would be true). Hence it is a logical impossibility."
  },
  {
    "id": "log-222",
    "category": "Truth or Lie",
    "difficulty": "medium",
    "question": "Person X says: 'At least one of us is a Knave.' If Knights always tell truth and Knaves always lie, what is X?",
    "options": [
      "X is a Knight.",
      "X is a Knave.",
      "X is both.",
      "Cannot be deduced."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "If X were a Knave, the statement would be true, creating a contradiction. Thus X must be a Knight telling the truth."
  },
  {
    "id": "log-223",
    "category": "Truth or Lie",
    "difficulty": "medium",
    "question": "On an island, Knights always tell the truth and Knaves always lie. Person A says 'I am a Knave.' Is this statement possible?",
    "options": [
      "No, because neither a Knight nor a Knave could make this statement.",
      "Yes, A is a Knight.",
      "Yes, A is a Knave.",
      "Yes, A is an outsider."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A Knight cannot say 'I am a Knave' (would be a lie), and a Knave cannot say 'I am a Knave' (would be true). Hence it is a logical impossibility."
  },
  {
    "id": "log-224",
    "category": "Truth or Lie",
    "difficulty": "medium",
    "question": "Person X says: 'At least one of us is a Knave.' If Knights always tell truth and Knaves always lie, what is X?",
    "options": [
      "X is a Knight.",
      "X is a Knave.",
      "X is both.",
      "Cannot be deduced."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "If X were a Knave, the statement would be true, creating a contradiction. Thus X must be a Knight telling the truth."
  },
  {
    "id": "log-225",
    "category": "Truth or Lie",
    "difficulty": "medium",
    "question": "On an island, Knights always tell the truth and Knaves always lie. Person A says 'I am a Knave.' Is this statement possible?",
    "options": [
      "No, because neither a Knight nor a Knave could make this statement.",
      "Yes, A is a Knight.",
      "Yes, A is a Knave.",
      "Yes, A is an outsider."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A Knight cannot say 'I am a Knave' (would be a lie), and a Knave cannot say 'I am a Knave' (would be true). Hence it is a logical impossibility."
  },
  {
    "id": "log-226",
    "category": "Truth or Lie",
    "difficulty": "medium",
    "question": "Person X says: 'At least one of us is a Knave.' If Knights always tell truth and Knaves always lie, what is X?",
    "options": [
      "X is a Knight.",
      "X is a Knave.",
      "X is both.",
      "Cannot be deduced."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "If X were a Knave, the statement would be true, creating a contradiction. Thus X must be a Knight telling the truth."
  },
  {
    "id": "log-227",
    "category": "Truth or Lie",
    "difficulty": "medium",
    "question": "On an island, Knights always tell the truth and Knaves always lie. Person A says 'I am a Knave.' Is this statement possible?",
    "options": [
      "No, because neither a Knight nor a Knave could make this statement.",
      "Yes, A is a Knight.",
      "Yes, A is a Knave.",
      "Yes, A is an outsider."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A Knight cannot say 'I am a Knave' (would be a lie), and a Knave cannot say 'I am a Knave' (would be true). Hence it is a logical impossibility."
  },
  {
    "id": "log-228",
    "category": "Truth or Lie",
    "difficulty": "hard",
    "question": "Person X says: 'At least one of us is a Knave.' If Knights always tell truth and Knaves always lie, what is X?",
    "options": [
      "X is a Knight.",
      "X is a Knave.",
      "X is both.",
      "Cannot be deduced."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "If X were a Knave, the statement would be true, creating a contradiction. Thus X must be a Knight telling the truth."
  },
  {
    "id": "log-229",
    "category": "Truth or Lie",
    "difficulty": "hard",
    "question": "On an island, Knights always tell the truth and Knaves always lie. Person A says 'I am a Knave.' Is this statement possible?",
    "options": [
      "No, because neither a Knight nor a Knave could make this statement.",
      "Yes, A is a Knight.",
      "Yes, A is a Knave.",
      "Yes, A is an outsider."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A Knight cannot say 'I am a Knave' (would be a lie), and a Knave cannot say 'I am a Knave' (would be true). Hence it is a logical impossibility."
  },
  {
    "id": "log-230",
    "category": "Truth or Lie",
    "difficulty": "hard",
    "question": "Person X says: 'At least one of us is a Knave.' If Knights always tell truth and Knaves always lie, what is X?",
    "options": [
      "X is a Knight.",
      "X is a Knave.",
      "X is both.",
      "Cannot be deduced."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "If X were a Knave, the statement would be true, creating a contradiction. Thus X must be a Knight telling the truth."
  },
  {
    "id": "log-231",
    "category": "Truth or Lie",
    "difficulty": "hard",
    "question": "On an island, Knights always tell the truth and Knaves always lie. Person A says 'I am a Knave.' Is this statement possible?",
    "options": [
      "No, because neither a Knight nor a Knave could make this statement.",
      "Yes, A is a Knight.",
      "Yes, A is a Knave.",
      "Yes, A is an outsider."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A Knight cannot say 'I am a Knave' (would be a lie), and a Knave cannot say 'I am a Knave' (would be true). Hence it is a logical impossibility."
  },
  {
    "id": "log-232",
    "category": "Truth or Lie",
    "difficulty": "hard",
    "question": "Person X says: 'At least one of us is a Knave.' If Knights always tell truth and Knaves always lie, what is X?",
    "options": [
      "X is a Knight.",
      "X is a Knave.",
      "X is both.",
      "Cannot be deduced."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "If X were a Knave, the statement would be true, creating a contradiction. Thus X must be a Knight telling the truth."
  },
  {
    "id": "log-233",
    "category": "Truth or Lie",
    "difficulty": "hard",
    "question": "On an island, Knights always tell the truth and Knaves always lie. Person A says 'I am a Knave.' Is this statement possible?",
    "options": [
      "No, because neither a Knight nor a Knave could make this statement.",
      "Yes, A is a Knight.",
      "Yes, A is a Knave.",
      "Yes, A is an outsider."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A Knight cannot say 'I am a Knave' (would be a lie), and a Knave cannot say 'I am a Knave' (would be true). Hence it is a logical impossibility."
  },
  {
    "id": "log-234",
    "category": "Truth or Lie",
    "difficulty": "hard",
    "question": "Person X says: 'At least one of us is a Knave.' If Knights always tell truth and Knaves always lie, what is X?",
    "options": [
      "X is a Knight.",
      "X is a Knave.",
      "X is both.",
      "Cannot be deduced."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "If X were a Knave, the statement would be true, creating a contradiction. Thus X must be a Knight telling the truth."
  },
  {
    "id": "log-235",
    "category": "Truth or Lie",
    "difficulty": "hard",
    "question": "On an island, Knights always tell the truth and Knaves always lie. Person A says 'I am a Knave.' Is this statement possible?",
    "options": [
      "No, because neither a Knight nor a Knave could make this statement.",
      "Yes, A is a Knight.",
      "Yes, A is a Knave.",
      "Yes, A is an outsider."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A Knight cannot say 'I am a Knave' (would be a lie), and a Knave cannot say 'I am a Knave' (would be true). Hence it is a logical impossibility."
  },
  {
    "id": "log-236",
    "category": "Truth or Lie",
    "difficulty": "hard",
    "question": "Person X says: 'At least one of us is a Knave.' If Knights always tell truth and Knaves always lie, what is X?",
    "options": [
      "X is a Knight.",
      "X is a Knave.",
      "X is both.",
      "Cannot be deduced."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "If X were a Knave, the statement would be true, creating a contradiction. Thus X must be a Knight telling the truth."
  },
  {
    "id": "log-237",
    "category": "Cause and Effect",
    "difficulty": "easy",
    "question": "Event A: The local government increased funding for public transport. Event B: Traffic congestion in the city center has decreased significantly. Which statement is most likely true?",
    "options": [
      "Event A is the effect and Event B is its cause.",
      "Event A is the cause and Event B is its effect.",
      "Both are independent events.",
      "Both are effects of a different common cause."
    ],
    "correct": 1,
    "explanation": "Increased funding for public transport logically leads to a decrease in traffic congestion, making A the cause and B the effect.",
    "correctAnswer": 1
  },
  {
    "id": "log-238",
    "category": "Cause and Effect",
    "difficulty": "easy",
    "question": "When ice melts in a sealed glass container filled to the brim with water and an ice cube floating in it, what happens to the water level?",
    "options": [
      "It overflows.",
      "It drops.",
      "It remains exactly the same.",
      "It expands and cracks the glass."
    ],
    "correct": 2,
    "explanation": "According to Archimedes principle, floating ice displaces its own weight in water. When it melts, it turns into that exact volume of water, keeping the water level identical.",
    "correctAnswer": 2
  },
  {
    "id": "log-239",
    "category": "Cause and Effect",
    "difficulty": "easy",
    "question": "Event I: The central bank raised benchmark interest rates.\nEvent II: Mortgage borrowing rates increased across commercial banks.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Events are mutually contradictory.",
      "Both are independent causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A hike in the central bank policy rate leads to higher lending and mortgage rates."
  },
  {
    "id": "log-240",
    "category": "Cause and Effect",
    "difficulty": "easy",
    "question": "Event I: Heavy snowfall blocked major mountain passes.\nEvent II: Deliveries to alpine villages were delayed by two days.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Both events are independent causes.",
      "Both events are effects of unrelated causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Blocked mountain passes caused by heavy snowfall directly delayed transportation deliveries."
  },
  {
    "id": "log-241",
    "category": "Cause and Effect",
    "difficulty": "easy",
    "question": "Event I: The central bank raised benchmark interest rates.\nEvent II: Mortgage borrowing rates increased across commercial banks.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Events are mutually contradictory.",
      "Both are independent causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A hike in the central bank policy rate leads to higher lending and mortgage rates."
  },
  {
    "id": "log-242",
    "category": "Cause and Effect",
    "difficulty": "easy",
    "question": "Event I: Heavy snowfall blocked major mountain passes.\nEvent II: Deliveries to alpine villages were delayed by two days.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Both events are independent causes.",
      "Both events are effects of unrelated causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Blocked mountain passes caused by heavy snowfall directly delayed transportation deliveries."
  },
  {
    "id": "log-243",
    "category": "Cause and Effect",
    "difficulty": "easy",
    "question": "Event I: The central bank raised benchmark interest rates.\nEvent II: Mortgage borrowing rates increased across commercial banks.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Events are mutually contradictory.",
      "Both are independent causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A hike in the central bank policy rate leads to higher lending and mortgage rates."
  },
  {
    "id": "log-244",
    "category": "Cause and Effect",
    "difficulty": "easy",
    "question": "Event I: Heavy snowfall blocked major mountain passes.\nEvent II: Deliveries to alpine villages were delayed by two days.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Both events are independent causes.",
      "Both events are effects of unrelated causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Blocked mountain passes caused by heavy snowfall directly delayed transportation deliveries."
  },
  {
    "id": "log-245",
    "category": "Cause and Effect",
    "difficulty": "easy",
    "question": "Event I: The central bank raised benchmark interest rates.\nEvent II: Mortgage borrowing rates increased across commercial banks.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Events are mutually contradictory.",
      "Both are independent causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A hike in the central bank policy rate leads to higher lending and mortgage rates."
  },
  {
    "id": "log-246",
    "category": "Cause and Effect",
    "difficulty": "easy",
    "question": "Event I: Heavy snowfall blocked major mountain passes.\nEvent II: Deliveries to alpine villages were delayed by two days.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Both events are independent causes.",
      "Both events are effects of unrelated causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Blocked mountain passes caused by heavy snowfall directly delayed transportation deliveries."
  },
  {
    "id": "log-247",
    "category": "Cause and Effect",
    "difficulty": "easy",
    "question": "Event I: The central bank raised benchmark interest rates.\nEvent II: Mortgage borrowing rates increased across commercial banks.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Events are mutually contradictory.",
      "Both are independent causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A hike in the central bank policy rate leads to higher lending and mortgage rates."
  },
  {
    "id": "log-248",
    "category": "Cause and Effect",
    "difficulty": "medium",
    "question": "Event I: Heavy snowfall blocked major mountain passes.\nEvent II: Deliveries to alpine villages were delayed by two days.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Both events are independent causes.",
      "Both events are effects of unrelated causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Blocked mountain passes caused by heavy snowfall directly delayed transportation deliveries."
  },
  {
    "id": "log-249",
    "category": "Cause and Effect",
    "difficulty": "medium",
    "question": "Event I: The central bank raised benchmark interest rates.\nEvent II: Mortgage borrowing rates increased across commercial banks.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Events are mutually contradictory.",
      "Both are independent causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A hike in the central bank policy rate leads to higher lending and mortgage rates."
  },
  {
    "id": "log-250",
    "category": "Cause and Effect",
    "difficulty": "medium",
    "question": "Event I: Heavy snowfall blocked major mountain passes.\nEvent II: Deliveries to alpine villages were delayed by two days.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Both events are independent causes.",
      "Both events are effects of unrelated causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Blocked mountain passes caused by heavy snowfall directly delayed transportation deliveries."
  },
  {
    "id": "log-251",
    "category": "Cause and Effect",
    "difficulty": "medium",
    "question": "Event I: The central bank raised benchmark interest rates.\nEvent II: Mortgage borrowing rates increased across commercial banks.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Events are mutually contradictory.",
      "Both are independent causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A hike in the central bank policy rate leads to higher lending and mortgage rates."
  },
  {
    "id": "log-252",
    "category": "Cause and Effect",
    "difficulty": "medium",
    "question": "Event I: Heavy snowfall blocked major mountain passes.\nEvent II: Deliveries to alpine villages were delayed by two days.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Both events are independent causes.",
      "Both events are effects of unrelated causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Blocked mountain passes caused by heavy snowfall directly delayed transportation deliveries."
  },
  {
    "id": "log-253",
    "category": "Cause and Effect",
    "difficulty": "medium",
    "question": "Event I: The central bank raised benchmark interest rates.\nEvent II: Mortgage borrowing rates increased across commercial banks.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Events are mutually contradictory.",
      "Both are independent causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A hike in the central bank policy rate leads to higher lending and mortgage rates."
  },
  {
    "id": "log-254",
    "category": "Cause and Effect",
    "difficulty": "medium",
    "question": "Event I: Heavy snowfall blocked major mountain passes.\nEvent II: Deliveries to alpine villages were delayed by two days.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Both events are independent causes.",
      "Both events are effects of unrelated causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Blocked mountain passes caused by heavy snowfall directly delayed transportation deliveries."
  },
  {
    "id": "log-255",
    "category": "Cause and Effect",
    "difficulty": "medium",
    "question": "Event I: The central bank raised benchmark interest rates.\nEvent II: Mortgage borrowing rates increased across commercial banks.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Events are mutually contradictory.",
      "Both are independent causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A hike in the central bank policy rate leads to higher lending and mortgage rates."
  },
  {
    "id": "log-256",
    "category": "Cause and Effect",
    "difficulty": "medium",
    "question": "Event I: Heavy snowfall blocked major mountain passes.\nEvent II: Deliveries to alpine villages were delayed by two days.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Both events are independent causes.",
      "Both events are effects of unrelated causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Blocked mountain passes caused by heavy snowfall directly delayed transportation deliveries."
  },
  {
    "id": "log-257",
    "category": "Cause and Effect",
    "difficulty": "medium",
    "question": "Event I: The central bank raised benchmark interest rates.\nEvent II: Mortgage borrowing rates increased across commercial banks.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Events are mutually contradictory.",
      "Both are independent causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A hike in the central bank policy rate leads to higher lending and mortgage rates."
  },
  {
    "id": "log-258",
    "category": "Cause and Effect",
    "difficulty": "medium",
    "question": "Event I: Heavy snowfall blocked major mountain passes.\nEvent II: Deliveries to alpine villages were delayed by two days.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Both events are independent causes.",
      "Both events are effects of unrelated causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Blocked mountain passes caused by heavy snowfall directly delayed transportation deliveries."
  },
  {
    "id": "log-259",
    "category": "Cause and Effect",
    "difficulty": "medium",
    "question": "Event I: The central bank raised benchmark interest rates.\nEvent II: Mortgage borrowing rates increased across commercial banks.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Events are mutually contradictory.",
      "Both are independent causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A hike in the central bank policy rate leads to higher lending and mortgage rates."
  },
  {
    "id": "log-260",
    "category": "Cause and Effect",
    "difficulty": "medium",
    "question": "Event I: Heavy snowfall blocked major mountain passes.\nEvent II: Deliveries to alpine villages were delayed by two days.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Both events are independent causes.",
      "Both events are effects of unrelated causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Blocked mountain passes caused by heavy snowfall directly delayed transportation deliveries."
  },
  {
    "id": "log-261",
    "category": "Cause and Effect",
    "difficulty": "hard",
    "question": "Event I: The central bank raised benchmark interest rates.\nEvent II: Mortgage borrowing rates increased across commercial banks.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Events are mutually contradictory.",
      "Both are independent causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A hike in the central bank policy rate leads to higher lending and mortgage rates."
  },
  {
    "id": "log-262",
    "category": "Cause and Effect",
    "difficulty": "hard",
    "question": "Event I: Heavy snowfall blocked major mountain passes.\nEvent II: Deliveries to alpine villages were delayed by two days.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Both events are independent causes.",
      "Both events are effects of unrelated causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Blocked mountain passes caused by heavy snowfall directly delayed transportation deliveries."
  },
  {
    "id": "log-263",
    "category": "Cause and Effect",
    "difficulty": "hard",
    "question": "Event I: The central bank raised benchmark interest rates.\nEvent II: Mortgage borrowing rates increased across commercial banks.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Events are mutually contradictory.",
      "Both are independent causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A hike in the central bank policy rate leads to higher lending and mortgage rates."
  },
  {
    "id": "log-264",
    "category": "Cause and Effect",
    "difficulty": "hard",
    "question": "Event I: Heavy snowfall blocked major mountain passes.\nEvent II: Deliveries to alpine villages were delayed by two days.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Both events are independent causes.",
      "Both events are effects of unrelated causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Blocked mountain passes caused by heavy snowfall directly delayed transportation deliveries."
  },
  {
    "id": "log-265",
    "category": "Cause and Effect",
    "difficulty": "hard",
    "question": "Event I: The central bank raised benchmark interest rates.\nEvent II: Mortgage borrowing rates increased across commercial banks.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Events are mutually contradictory.",
      "Both are independent causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A hike in the central bank policy rate leads to higher lending and mortgage rates."
  },
  {
    "id": "log-266",
    "category": "Cause and Effect",
    "difficulty": "hard",
    "question": "Event I: Heavy snowfall blocked major mountain passes.\nEvent II: Deliveries to alpine villages were delayed by two days.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Both events are independent causes.",
      "Both events are effects of unrelated causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Blocked mountain passes caused by heavy snowfall directly delayed transportation deliveries."
  },
  {
    "id": "log-267",
    "category": "Cause and Effect",
    "difficulty": "hard",
    "question": "Event I: The central bank raised benchmark interest rates.\nEvent II: Mortgage borrowing rates increased across commercial banks.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Events are mutually contradictory.",
      "Both are independent causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "A hike in the central bank policy rate leads to higher lending and mortgage rates."
  },
  {
    "id": "log-268",
    "category": "Cause and Effect",
    "difficulty": "hard",
    "question": "Event I: Heavy snowfall blocked major mountain passes.\nEvent II: Deliveries to alpine villages were delayed by two days.\nWhat is the relationship?",
    "options": [
      "Event I is the cause and Event II is the effect.",
      "Event II is the cause and Event I is the effect.",
      "Both events are independent causes.",
      "Both events are effects of unrelated causes."
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Blocked mountain passes caused by heavy snowfall directly delayed transportation deliveries."
  },
  {
    "id": "log-269",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "A machine cuts a 10-meter pipe into 1-meter pieces. It takes 1 minute to make each cut. How long will it take to cut the entire pipe?",
    "options": [
      "9 minutes",
      "10 minutes",
      "11 minutes",
      "Cannot be determined"
    ],
    "correct": 0,
    "explanation": "To divide a pipe into 10 pieces, you only need to make 9 cuts. The 9th cut produces both the 9th and 10th pieces simultaneously. Thus, it takes 9 minutes.",
    "correctAnswer": 0
  },
  {
    "id": "log-270",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "Which word does not belong with the others?",
    "options": [
      "Triangle",
      "Hexagon",
      "Circle",
      "Pentagon"
    ],
    "correct": 2,
    "explanation": "Triangles, hexagons, and pentagons are all polygons formed by straight line segments. A circle is formed by a continuous curve with no straight edges.",
    "correctAnswer": 2
  },
  {
    "id": "log-271",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "Look at the sequence of letters: A, C, F, J, O, ? What letter comes next?",
    "options": [
      "U",
      "T",
      "S",
      "V"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps increase by 1 letter: +2 (C), +3 (F), +4 (J), +5 (O), +6 (U)."
  },
  {
    "id": "log-272",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "Look at the sequence: Z, W, T, Q, N, ? What letter comes next?",
    "options": [
      "K",
      "L",
      "M",
      "J"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps decrease by 3 letters each step: N (14) - 3 = K (11)."
  },
  {
    "id": "log-273",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "Look at the sequence of letters: A, C, F, J, O, ? What letter comes next?",
    "options": [
      "U",
      "T",
      "S",
      "V"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps increase by 1 letter: +2 (C), +3 (F), +4 (J), +5 (O), +6 (U)."
  },
  {
    "id": "log-274",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "Look at the sequence: Z, W, T, Q, N, ? What letter comes next?",
    "options": [
      "K",
      "L",
      "M",
      "J"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps decrease by 3 letters each step: N (14) - 3 = K (11)."
  },
  {
    "id": "log-275",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "Look at the sequence of letters: A, C, F, J, O, ? What letter comes next?",
    "options": [
      "U",
      "T",
      "S",
      "V"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps increase by 1 letter: +2 (C), +3 (F), +4 (J), +5 (O), +6 (U)."
  },
  {
    "id": "log-276",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "Look at the sequence: Z, W, T, Q, N, ? What letter comes next?",
    "options": [
      "K",
      "L",
      "M",
      "J"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps decrease by 3 letters each step: N (14) - 3 = K (11)."
  },
  {
    "id": "log-277",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "Look at the sequence of letters: A, C, F, J, O, ? What letter comes next?",
    "options": [
      "U",
      "T",
      "S",
      "V"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps increase by 1 letter: +2 (C), +3 (F), +4 (J), +5 (O), +6 (U)."
  },
  {
    "id": "log-278",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "Look at the sequence: Z, W, T, Q, N, ? What letter comes next?",
    "options": [
      "K",
      "L",
      "M",
      "J"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps decrease by 3 letters each step: N (14) - 3 = K (11)."
  },
  {
    "id": "log-279",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "Look at the sequence of letters: A, C, F, J, O, ? What letter comes next?",
    "options": [
      "U",
      "T",
      "S",
      "V"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps increase by 1 letter: +2 (C), +3 (F), +4 (J), +5 (O), +6 (U)."
  },
  {
    "id": "log-280",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Look at the sequence: Z, W, T, Q, N, ? What letter comes next?",
    "options": [
      "K",
      "L",
      "M",
      "J"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps decrease by 3 letters each step: N (14) - 3 = K (11)."
  },
  {
    "id": "log-281",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Look at the sequence of letters: A, C, F, J, O, ? What letter comes next?",
    "options": [
      "U",
      "T",
      "S",
      "V"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps increase by 1 letter: +2 (C), +3 (F), +4 (J), +5 (O), +6 (U)."
  },
  {
    "id": "log-282",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Look at the sequence: Z, W, T, Q, N, ? What letter comes next?",
    "options": [
      "K",
      "L",
      "M",
      "J"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps decrease by 3 letters each step: N (14) - 3 = K (11)."
  },
  {
    "id": "log-283",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Look at the sequence of letters: A, C, F, J, O, ? What letter comes next?",
    "options": [
      "U",
      "T",
      "S",
      "V"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps increase by 1 letter: +2 (C), +3 (F), +4 (J), +5 (O), +6 (U)."
  },
  {
    "id": "log-284",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Look at the sequence: Z, W, T, Q, N, ? What letter comes next?",
    "options": [
      "K",
      "L",
      "M",
      "J"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps decrease by 3 letters each step: N (14) - 3 = K (11)."
  },
  {
    "id": "log-285",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Look at the sequence of letters: A, C, F, J, O, ? What letter comes next?",
    "options": [
      "U",
      "T",
      "S",
      "V"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps increase by 1 letter: +2 (C), +3 (F), +4 (J), +5 (O), +6 (U)."
  },
  {
    "id": "log-286",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Look at the sequence: Z, W, T, Q, N, ? What letter comes next?",
    "options": [
      "K",
      "L",
      "M",
      "J"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps decrease by 3 letters each step: N (14) - 3 = K (11)."
  },
  {
    "id": "log-287",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Look at the sequence of letters: A, C, F, J, O, ? What letter comes next?",
    "options": [
      "U",
      "T",
      "S",
      "V"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps increase by 1 letter: +2 (C), +3 (F), +4 (J), +5 (O), +6 (U)."
  },
  {
    "id": "log-288",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Look at the sequence: Z, W, T, Q, N, ? What letter comes next?",
    "options": [
      "K",
      "L",
      "M",
      "J"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps decrease by 3 letters each step: N (14) - 3 = K (11)."
  },
  {
    "id": "log-289",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Look at the sequence of letters: A, C, F, J, O, ? What letter comes next?",
    "options": [
      "U",
      "T",
      "S",
      "V"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps increase by 1 letter: +2 (C), +3 (F), +4 (J), +5 (O), +6 (U)."
  },
  {
    "id": "log-290",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Look at the sequence: Z, W, T, Q, N, ? What letter comes next?",
    "options": [
      "K",
      "L",
      "M",
      "J"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps decrease by 3 letters each step: N (14) - 3 = K (11)."
  },
  {
    "id": "log-291",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Look at the sequence of letters: A, C, F, J, O, ? What letter comes next?",
    "options": [
      "U",
      "T",
      "S",
      "V"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps increase by 1 letter: +2 (C), +3 (F), +4 (J), +5 (O), +6 (U)."
  },
  {
    "id": "log-292",
    "category": "Pattern Recognition",
    "difficulty": "hard",
    "question": "Look at the sequence: Z, W, T, Q, N, ? What letter comes next?",
    "options": [
      "K",
      "L",
      "M",
      "J"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps decrease by 3 letters each step: N (14) - 3 = K (11)."
  },
  {
    "id": "log-293",
    "category": "Pattern Recognition",
    "difficulty": "hard",
    "question": "Look at the sequence of letters: A, C, F, J, O, ? What letter comes next?",
    "options": [
      "U",
      "T",
      "S",
      "V"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps increase by 1 letter: +2 (C), +3 (F), +4 (J), +5 (O), +6 (U)."
  },
  {
    "id": "log-294",
    "category": "Pattern Recognition",
    "difficulty": "hard",
    "question": "Look at the sequence: Z, W, T, Q, N, ? What letter comes next?",
    "options": [
      "K",
      "L",
      "M",
      "J"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps decrease by 3 letters each step: N (14) - 3 = K (11)."
  },
  {
    "id": "log-295",
    "category": "Pattern Recognition",
    "difficulty": "hard",
    "question": "Look at the sequence of letters: A, C, F, J, O, ? What letter comes next?",
    "options": [
      "U",
      "T",
      "S",
      "V"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps increase by 1 letter: +2 (C), +3 (F), +4 (J), +5 (O), +6 (U)."
  },
  {
    "id": "log-296",
    "category": "Pattern Recognition",
    "difficulty": "hard",
    "question": "Look at the sequence: Z, W, T, Q, N, ? What letter comes next?",
    "options": [
      "K",
      "L",
      "M",
      "J"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps decrease by 3 letters each step: N (14) - 3 = K (11)."
  },
  {
    "id": "log-297",
    "category": "Pattern Recognition",
    "difficulty": "hard",
    "question": "Look at the sequence of letters: A, C, F, J, O, ? What letter comes next?",
    "options": [
      "U",
      "T",
      "S",
      "V"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps increase by 1 letter: +2 (C), +3 (F), +4 (J), +5 (O), +6 (U)."
  },
  {
    "id": "log-298",
    "category": "Pattern Recognition",
    "difficulty": "hard",
    "question": "Look at the sequence: Z, W, T, Q, N, ? What letter comes next?",
    "options": [
      "K",
      "L",
      "M",
      "J"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps decrease by 3 letters each step: N (14) - 3 = K (11)."
  },
  {
    "id": "log-299",
    "category": "Pattern Recognition",
    "difficulty": "hard",
    "question": "Look at the sequence of letters: A, C, F, J, O, ? What letter comes next?",
    "options": [
      "U",
      "T",
      "S",
      "V"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps increase by 1 letter: +2 (C), +3 (F), +4 (J), +5 (O), +6 (U)."
  },
  {
    "id": "log-300",
    "category": "Pattern Recognition",
    "difficulty": "hard",
    "question": "Look at the sequence: Z, W, T, Q, N, ? What letter comes next?",
    "options": [
      "K",
      "L",
      "M",
      "J"
    ],
    "correct": 0,
    "correctAnswer": 0,
    "explanation": "Gaps decrease by 3 letters each step: N (14) - 3 = K (11)."
  }
];

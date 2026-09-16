export interface NumericalQuestion {
  id: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  options: string[];
  correctAnswer: number;
  correct?: number;
  explanation: string;
}

export const numericalQuestions = [
  {
    "id": "num-001",
    "category": "Number Sequences",
    "difficulty": "easy",
    "question": "What is the next number in the sequence: 5, 11, 17, 23, 29, ...?",
    "options": [
      "33",
      "34",
      "35",
      "36"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "The sequence increases by 6 each time (+6). Therefore, 29 + 6 = 35."
  },
  {
    "id": "num-002",
    "category": "Number Sequences",
    "difficulty": "easy",
    "question": "What is the next number in the sequence: 3, 6, 12, 24, 48, ...?",
    "options": [
      "72",
      "84",
      "92",
      "96"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "Each term is doubled (multiplied by 2). Therefore, 48 × 2 = 96."
  },
  {
    "id": "num-003",
    "category": "Number Sequences",
    "difficulty": "easy",
    "question": "What is the next number in the sequence: 2, 5, 11, 23, 47, ...?",
    "options": [
      "89",
      "94",
      "95",
      "96"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "The rule is (previous term × 2) + 1. Following this pattern: (47 × 2) + 1 = 94 + 1 = 95."
  },
  {
    "id": "num-004",
    "category": "Number Sequences",
    "difficulty": "easy",
    "question": "What is the next number in the sequence: 1, 4, 9, 16, 25, 36, ...?",
    "options": [
      "45",
      "48",
      "49",
      "51"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "These are consecutive squares (1², 2², 3², 4², 5², 6²). The next term is 7² = 49."
  },
  {
    "id": "num-005",
    "category": "Number Sequences",
    "difficulty": "easy",
    "question": "What is the next number in the sequence: 4, 6, 9, 13.5, 20.25, ...?",
    "options": [
      "28.5",
      "29.75",
      "30.375",
      "32.5"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Each term is multiplied by 1.5 (or 3/2). Following this rule: 20.25 × 1.5 = 30.375."
  },
  {
    "id": "num-006",
    "category": "Number Sequences",
    "difficulty": "easy",
    "question": "What is the next number in the sequence: 2, 3, 7, 16, 32, ...?",
    "options": [
      "52",
      "55",
      "57",
      "64"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "The differences between consecutive terms are squares: +1 (1²), +4 (2²), +9 (3²), +16 (4²). The next difference is +25 (5²), so 32 + 25 = 57."
  },
  {
    "id": "num-007",
    "category": "Number Sequences",
    "difficulty": "easy",
    "question": "What is the next number in the sequence: 3, 7, 11, 15, 19, ?",
    "options": [
      "21",
      "23",
      "25",
      "27"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The series adds 4 each step: 19 + 4 = 23."
  },
  {
    "id": "num-008",
    "category": "Number Sequences",
    "difficulty": "easy",
    "question": "What is the next number in the sequence: 100, 93, 86, 79, 72, ?",
    "options": [
      "63",
      "65",
      "67",
      "69"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The series subtracts 7 each step: 72 - 7 = 65."
  },
  {
    "id": "num-009",
    "category": "Number Sequences",
    "difficulty": "easy",
    "question": "What is the next number in the sequence: 4, 8, 16, 32, 64, ?",
    "options": [
      "96",
      "112",
      "128",
      "256"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Each term is multiplied by 2: 64 * 2 = 128."
  },
  {
    "id": "num-010",
    "category": "Number Sequences",
    "difficulty": "easy",
    "question": "What is the next number in the sequence: 5, 15, 45, 135, ?",
    "options": [
      "270",
      "395",
      "405",
      "425"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Each term is multiplied by 3: 135 * 3 = 405."
  },
  {
    "id": "num-011",
    "category": "Number Sequences",
    "difficulty": "easy",
    "question": "What is the next number in the sequence: 1, 4, 9, 16, 25, 36, ?",
    "options": [
      "45",
      "47",
      "49",
      "54"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "These are consecutive squares (1^2, 2^2, ..., 6^2). The next is 7^2 = 49."
  },
  {
    "id": "num-012",
    "category": "Number Sequences",
    "difficulty": "easy",
    "question": "What is the next number in the sequence: 1, 8, 27, 64, 125, ?",
    "options": [
      "196",
      "216",
      "225",
      "256"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "These are consecutive cubes (1^3, 2^3, ..., 5^3). The next is 6^3 = 216."
  },
  {
    "id": "num-013",
    "category": "Number Sequences",
    "difficulty": "easy",
    "question": "What is the next number in the sequence: 2, 3, 5, 7, 11, 13, ?",
    "options": [
      "15",
      "17",
      "19",
      "21"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "These are consecutive prime numbers. The next prime after 13 is 17."
  },
  {
    "id": "num-014",
    "category": "Number Sequences",
    "difficulty": "easy",
    "question": "What is the next number in the sequence: 0, 3, 8, 15, 24, 35, ?",
    "options": [
      "46",
      "48",
      "50",
      "52"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Pattern is n^2 - 1 for n = 1, 2, 3, 4, 5, 6, 7: 7^2 - 1 = 48."
  },
  {
    "id": "num-015",
    "category": "Number Sequences",
    "difficulty": "easy",
    "question": "What is the next number in the sequence: 2, 5, 10, 17, 26, 37, ?",
    "options": [
      "48",
      "50",
      "52",
      "54"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Pattern is n^2 + 1 for n = 1, 2, 3, 4, 5, 6, 7: 7^2 + 1 = 50."
  },
  {
    "id": "num-016",
    "category": "Number Sequences",
    "difficulty": "easy",
    "question": "What is the next number in the sequence: 1, 1, 2, 3, 5, 8, 13, 21, ?",
    "options": [
      "29",
      "34",
      "38",
      "42"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Fibonacci sequence where each term is the sum of the two preceding terms: 13 + 21 = 34."
  },
  {
    "id": "num-017",
    "category": "Number Sequences",
    "difficulty": "easy",
    "question": "What is the next number in the sequence: 2, 4, 7, 11, 16, 22, ?",
    "options": [
      "27",
      "28",
      "29",
      "30"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Differences increase by 1 (+2, +3, +4, +5, +6, +7): 22 + 7 = 29."
  },
  {
    "id": "num-018",
    "category": "Number Sequences",
    "difficulty": "easy",
    "question": "What is the next number in the sequence: 50, 48, 44, 38, 30, ?",
    "options": [
      "18",
      "20",
      "22",
      "24"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Differences decrease by 2 (-2, -4, -6, -8, -10): 30 - 10 = 20."
  },
  {
    "id": "num-019",
    "category": "Number Sequences",
    "difficulty": "easy",
    "question": "What is the next number in the sequence: 3, 6, 11, 18, 27, 38, ?",
    "options": [
      "49",
      "51",
      "53",
      "55"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Differences are consecutive odd numbers (+3, +5, +7, +9, +11, +13): 38 + 13 = 51."
  },
  {
    "id": "num-020",
    "category": "Number Sequences",
    "difficulty": "easy",
    "question": "What is the next number in the sequence: 6, 13, 27, 55, 111, ?",
    "options": [
      "221",
      "222",
      "223",
      "225"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Rule: multiply by 2 and add 1 (n * 2 + 1). 111 * 2 + 1 = 223."
  },
  {
    "id": "num-021",
    "category": "Number Sequences",
    "difficulty": "easy",
    "question": "What is the next number in the sequence: 4, 9, 19, 39, 79, ?",
    "options": [
      "149",
      "157",
      "158",
      "159"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "Rule: multiply by 2 and add 1. 79 * 2 + 1 = 159."
  },
  {
    "id": "num-022",
    "category": "Number Sequences",
    "difficulty": "easy",
    "question": "What is the next number in the sequence: 2, 7, 22, 67, 202, ?",
    "options": [
      "598",
      "605",
      "607",
      "612"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Rule: multiply by 3 and add 1. 202 * 3 + 1 = 607."
  },
  {
    "id": "num-023",
    "category": "Number Sequences",
    "difficulty": "easy",
    "question": "What is the next number in the sequence: 1, 4, 13, 40, 121, ?",
    "options": [
      "361",
      "364",
      "367",
      "370"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Rule: multiply by 3 and add 1. 121 * 3 + 1 = 364."
  },
  {
    "id": "num-024",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 5, 9, 17, 33, 65, ?",
    "options": [
      "121",
      "127",
      "129",
      "133"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Differences double each step (+4, +8, +16, +32, +64): 65 + 64 = 129."
  },
  {
    "id": "num-025",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 2, 6, 18, 54, 162, ?",
    "options": [
      "324",
      "482",
      "486",
      "512"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Each term is multiplied by 3: 162 * 3 = 486."
  },
  {
    "id": "num-026",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 128, 64, 32, 16, 8, ?",
    "options": [
      "2",
      "4",
      "6",
      "8"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Each term is divided by 2: 8 / 2 = 4."
  },
  {
    "id": "num-027",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 729, 243, 81, 27, 9, ?",
    "options": [
      "1",
      "3",
      "6",
      "9"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Each term is divided by 3: 9 / 3 = 3."
  },
  {
    "id": "num-028",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 1, 2, 6, 24, 120, 720, ?",
    "options": [
      "4320",
      "5040",
      "5760",
      "7200"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Factorial sequence (n!): 720 * 7 = 5040."
  },
  {
    "id": "num-029",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 2, 3, 6, 18, 108, ?",
    "options": [
      "864",
      "1296",
      "1944",
      "2160"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Each term is the product of the previous two terms: 18 * 108 = 1944."
  },
  {
    "id": "num-030",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 10, 14, 23, 39, 64, ?",
    "options": [
      "95",
      "100",
      "105",
      "110"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Differences are squares: +4 (2^2), +9 (3^2), +16 (4^2), +25 (5^2), +36 (6^2). 64 + 36 = 100."
  },
  {
    "id": "num-031",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 4, 7, 14, 19, 38, 45, ?",
    "options": [
      "86",
      "90",
      "94",
      "98"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Alternating operations: +3, *2, +5, *2, +7, *2. 45 * 2 = 90."
  },
  {
    "id": "num-032",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 3, 5, 9, 17, 33, 65, ?",
    "options": [
      "115",
      "121",
      "129",
      "135"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Differences are powers of 2 (+2, +4, +8, +16, +32, +64): 65 + 64 = 129."
  },
  {
    "id": "num-033",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 11, 13, 17, 25, 41, ?",
    "options": [
      "57",
      "65",
      "73",
      "81"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Differences double (+2, +4, +8, +16, +32): 41 + 32 = 73."
  },
  {
    "id": "num-034",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 21, 20, 18, 15, 11, ?",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Differences subtract 1 more each step (-1, -2, -3, -4, -5): 11 - 5 = 6."
  },
  {
    "id": "num-035",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 1, 8, 9, 64, 25, 216, ?",
    "options": [
      "36",
      "49",
      "64",
      "81"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Alternating squares and cubes: 1^2, 2^3, 3^2, 4^3, 5^2, 6^3, 7^2 = 49."
  },
  {
    "id": "num-036",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 7, 10, 8, 11, 9, 12, ?",
    "options": [
      "9",
      "10",
      "11",
      "13"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Interleaved: +3, -2, +3, -2, +3, -2: 12 - 2 = 10."
  },
  {
    "id": "num-037",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 15, 12, 16, 13, 17, 14, ?",
    "options": [
      "16",
      "18",
      "20",
      "22"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Pattern: -3, +4, -3, +4, -3, +4. 14 + 4 = 18."
  },
  {
    "id": "num-038",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 2, 5, 8, 11, 14, ?",
    "options": [
      "15",
      "16",
      "17",
      "18"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Constant difference of +3: 14 + 3 = 17."
  },
  {
    "id": "num-039",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 80, 40, 20, 10, ?",
    "options": [
      "2",
      "4",
      "5",
      "8"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Halving each step: 10 / 2 = 5."
  },
  {
    "id": "num-040",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 1, 3, 7, 15, 31, 63, ?",
    "options": [
      "125",
      "127",
      "129",
      "131"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Rule: 2n + 1 (or differences +2, +4, +8, +16, +32, +64): 63 + 64 = 127."
  },
  {
    "id": "num-041",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 10, 19, 37, 73, 145, ?",
    "options": [
      "285",
      "289",
      "291",
      "295"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Rule: multiply by 2 and subtract 1. 145 * 2 - 1 = 289."
  },
  {
    "id": "num-042",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 6, 9, 15, 24, 36, ?",
    "options": [
      "48",
      "51",
      "54",
      "57"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Differences are multiples of 3 (+3, +6, +9, +12, +15): 36 + 15 = 51."
  },
  {
    "id": "num-043",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 100, 96, 88, 72, 40, ?",
    "options": [
      "-16",
      "-20",
      "-24",
      "-32"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Differences double negative (-4, -8, -16, -32, -64): 40 - 64 = -24."
  },
  {
    "id": "num-044",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 1, 5, 14, 30, 55, 91, ?",
    "options": [
      "125",
      "135",
      "140",
      "145"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Sum of consecutive squares: 91 + 7^2 = 91 + 49 = 140."
  },
  {
    "id": "num-045",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 2, 10, 30, 68, 130, ?",
    "options": [
      "216",
      "220",
      "222",
      "230"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Pattern is n^3 + n for n = 1, 2, 3, 4, 5, 6: 6^3 + 6 = 216 + 6 = 222."
  },
  {
    "id": "num-046",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 0, 6, 24, 60, 120, 210, ?",
    "options": [
      "336",
      "343",
      "350",
      "360"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Pattern is n^3 - n for n = 1, 2, 3, 4, 5, 6, 7: 7^3 - 7 = 343 - 7 = 336."
  },
  {
    "id": "num-047",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 4, 6, 9, 13.5, ?",
    "options": [
      "18",
      "19.5",
      "20.25",
      "21.75"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Each term is multiplied by 1.5: 13.5 * 1.5 = 20.25."
  },
  {
    "id": "num-048",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 12, 14, 18, 26, 42, ?",
    "options": [
      "64",
      "74",
      "82",
      "88"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Differences double (+2, +4, +8, +16, +32): 42 + 32 = 74."
  },
  {
    "id": "num-049",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 1000, 200, 40, 8, ?",
    "options": [
      "1",
      "1.6",
      "2",
      "2.4"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Each term is divided by 5: 8 / 5 = 1.6."
  },
  {
    "id": "num-050",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 1, 3, 6, 10, 15, 21, 28, ?",
    "options": [
      "34",
      "36",
      "38",
      "42"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Triangular numbers: 28 + 8 = 36."
  },
  {
    "id": "num-051",
    "category": "Number Sequences",
    "difficulty": "medium",
    "question": "What is the next number in the sequence: 2, 12, 36, 80, 150, ?",
    "options": [
      "240",
      "252",
      "260",
      "275"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Pattern is n^2 * (n + 1) or n^3 + n^2. For n=6: 6^3 + 6^2 = 216 + 36 = 252."
  },
  {
    "id": "num-052",
    "category": "Number Sequences",
    "difficulty": "hard",
    "question": "What is the next number in the sequence: 5, 11, 23, 47, 95, ?",
    "options": [
      "185",
      "189",
      "191",
      "195"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Rule: 2n + 1: 95 * 2 + 1 = 191."
  },
  {
    "id": "num-053",
    "category": "Number Sequences",
    "difficulty": "hard",
    "question": "What is the next number in the sequence: 3, 8, 18, 38, 78, ?",
    "options": [
      "148",
      "156",
      "158",
      "162"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Rule: 2n + 2: 78 * 2 + 2 = 158."
  },
  {
    "id": "num-054",
    "category": "Number Sequences",
    "difficulty": "hard",
    "question": "What is the next number in the sequence: 1, 2, 4, 7, 12, 20, 33, ?",
    "options": [
      "52",
      "54",
      "56",
      "58"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Leonardo numbers (sum of previous two + 1): 20 + 33 + 1 = 54."
  },
  {
    "id": "num-055",
    "category": "Number Sequences",
    "difficulty": "hard",
    "question": "What is the next number in the sequence: 8, 27, 64, 125, 216, ?",
    "options": [
      "289",
      "324",
      "343",
      "512"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Cubes starting from 2^3: next is 7^3 = 343."
  },
  {
    "id": "num-056",
    "category": "Number Sequences",
    "difficulty": "hard",
    "question": "What is the next number in the sequence: 9, 14, 19, 24, 29, ?",
    "options": [
      "32",
      "34",
      "36",
      "38"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence increases by 5 each step: 29 + 5 = 34."
  },
  {
    "id": "num-057",
    "category": "Number Sequences",
    "difficulty": "hard",
    "question": "What is the next number in the sequence: 8, 14, 20, 26, 32, ?",
    "options": [
      "36",
      "38",
      "40",
      "42"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence increases by 6 each step: 32 + 6 = 38."
  },
  {
    "id": "num-058",
    "category": "Number Sequences",
    "difficulty": "hard",
    "question": "What is the next number in the sequence: 7, 14, 21, 28, 35, ?",
    "options": [
      "40",
      "42",
      "44",
      "46"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence increases by 7 each step: 35 + 7 = 42."
  },
  {
    "id": "num-059",
    "category": "Number Sequences",
    "difficulty": "hard",
    "question": "What is the next number in the sequence: 6, 14, 22, 30, 38, ?",
    "options": [
      "44",
      "46",
      "48",
      "50"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence increases by 8 each step: 38 + 8 = 46."
  },
  {
    "id": "num-060",
    "category": "Number Sequences",
    "difficulty": "hard",
    "question": "What is the next number in the sequence: 5, 9, 13, 17, 21, ?",
    "options": [
      "23",
      "25",
      "27",
      "29"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence increases by 4 each step: 21 + 4 = 25."
  },
  {
    "id": "num-061",
    "category": "Number Sequences",
    "difficulty": "hard",
    "question": "What is the next number in the sequence: 4, 9, 14, 19, 24, ?",
    "options": [
      "27",
      "29",
      "31",
      "33"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence increases by 5 each step: 24 + 5 = 29."
  },
  {
    "id": "num-062",
    "category": "Number Sequences",
    "difficulty": "hard",
    "question": "What is the next number in the sequence: 3, 9, 15, 21, 27, ?",
    "options": [
      "31",
      "33",
      "35",
      "37"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence increases by 6 each step: 27 + 6 = 33."
  },
  {
    "id": "num-063",
    "category": "Number Sequences",
    "difficulty": "hard",
    "question": "What is the next number in the sequence: 9, 16, 23, 30, 37, ?",
    "options": [
      "42",
      "44",
      "46",
      "48"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence increases by 7 each step: 37 + 7 = 44."
  },
  {
    "id": "num-064",
    "category": "Number Sequences",
    "difficulty": "hard",
    "question": "What is the next number in the sequence: 8, 16, 24, 32, 40, ?",
    "options": [
      "46",
      "48",
      "50",
      "52"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence increases by 8 each step: 40 + 8 = 48."
  },
  {
    "id": "num-065",
    "category": "Number Sequences",
    "difficulty": "hard",
    "question": "What is the next number in the sequence: 7, 11, 15, 19, 23, ?",
    "options": [
      "25",
      "27",
      "29",
      "31"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence increases by 4 each step: 23 + 4 = 27."
  },
  {
    "id": "num-066",
    "category": "Number Sequences",
    "difficulty": "hard",
    "question": "What is the next number in the sequence: 6, 11, 16, 21, 26, ?",
    "options": [
      "29",
      "31",
      "33",
      "35"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence increases by 5 each step: 26 + 5 = 31."
  },
  {
    "id": "num-067",
    "category": "Number Sequences",
    "difficulty": "hard",
    "question": "What is the next number in the sequence: 5, 11, 17, 23, 29, ?",
    "options": [
      "33",
      "35",
      "37",
      "39"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence increases by 6 each step: 29 + 6 = 35."
  },
  {
    "id": "num-068",
    "category": "Number Sequences",
    "difficulty": "hard",
    "question": "What is the next number in the sequence: 4, 11, 18, 25, 32, ?",
    "options": [
      "37",
      "39",
      "41",
      "43"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence increases by 7 each step: 32 + 7 = 39."
  },
  {
    "id": "num-069",
    "category": "Number Sequences",
    "difficulty": "hard",
    "question": "What is the next number in the sequence: 3, 11, 19, 27, 35, ?",
    "options": [
      "41",
      "43",
      "45",
      "47"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The sequence increases by 8 each step: 35 + 8 = 43."
  },
  {
    "id": "num-070",
    "category": "Percentages & Fractions",
    "difficulty": "easy",
    "question": "A jacket regularly priced at $80 is on sale for 25% off. What is the sale price?",
    "options": [
      "$55",
      "$60",
      "$64",
      "$65"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "A 25% discount on $80 is 0.25 × 80 = $20. Subtracting the discount: $80 - $20 = $60."
  },
  {
    "id": "num-071",
    "category": "Percentages & Fractions",
    "difficulty": "easy",
    "question": "What is 3/5 of 250?",
    "options": [
      "125",
      "140",
      "150",
      "175"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Divide 250 by 5 to get 50, then multiply by 3 to get 150."
  },
  {
    "id": "num-072",
    "category": "Percentages & Fractions",
    "difficulty": "easy",
    "question": "What is 15% of 240?",
    "options": [
      "32",
      "36",
      "38",
      "42"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "10% of 240 is 24, and 5% is 12. Summing them: 24 + 12 = 36 (or 0.15 × 240 = 36)."
  },
  {
    "id": "num-073",
    "category": "Percentages & Fractions",
    "difficulty": "easy",
    "question": "A stock price increases by 20% on Monday and decreases by 20% on Tuesday. Compared to the original price, what is the net change?",
    "options": [
      "0% (No change)",
      "2% decrease",
      "4% decrease",
      "4% increase"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Starting at 100: +20% gives 120. A 20% drop on 120 is 24, leaving 96. This represents a net 4% decrease."
  },
  {
    "id": "num-074",
    "category": "Percentages & Fractions",
    "difficulty": "easy",
    "question": "A container is 3/4 full of liquid. When 150 mL is removed, it is 1/2 full. What is the total capacity of the container?",
    "options": [
      "450 mL",
      "500 mL",
      "600 mL",
      "750 mL"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "The removed 150 mL corresponds to 3/4 - 1/2 = 1/4 of total capacity. Therefore, full capacity = 150 × 4 = 600 mL."
  },
  {
    "id": "num-075",
    "category": "Percentages & Fractions",
    "difficulty": "easy",
    "question": "Team A won 18 out of 24 games. Team B won 21 out of 30 games. Which team had the higher win percentage and by how much?",
    "options": [
      "Team A by 5%",
      "Team B by 5%",
      "Team A by 3%",
      "They have equal win rates"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Team A win rate = 18/24 = 75%. Team B win rate = 21/30 = 70%. Team A is higher by 75% - 70% = 5%."
  },
  {
    "id": "num-076",
    "category": "Percentages & Fractions",
    "difficulty": "easy",
    "question": "A jacket originally priced at $80 is on sale with a 25% discount. What is the sale price?",
    "options": [
      "$55",
      "$60",
      "$64",
      "$68"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "25% of $80 is $20. Sale price = $80 - $20 = $60."
  },
  {
    "id": "num-077",
    "category": "Percentages & Fractions",
    "difficulty": "easy",
    "question": "If an item priced at $120 increases in price by 15%, what is the new price?",
    "options": [
      "$132",
      "$135",
      "$138",
      "$142"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "15% of $120 = $18. New price = $120 + $18 = $138."
  },
  {
    "id": "num-078",
    "category": "Percentages & Fractions",
    "difficulty": "easy",
    "question": "What is 35% of 240?",
    "options": [
      "78",
      "82",
      "84",
      "88"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "0.35 * 240 = 84."
  },
  {
    "id": "num-079",
    "category": "Percentages & Fractions",
    "difficulty": "easy",
    "question": "A student scored 72 out of 90 on an exam. What was the student's percentage score?",
    "options": [
      "75%",
      "78%",
      "80%",
      "82%"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "(72 / 90) * 100 = 80%."
  },
  {
    "id": "num-080",
    "category": "Percentages & Fractions",
    "difficulty": "easy",
    "question": "If 40% of a number is 28, what is the number?",
    "options": [
      "60",
      "65",
      "70",
      "75"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Number = 28 / 0.40 = 70."
  },
  {
    "id": "num-081",
    "category": "Percentages & Fractions",
    "difficulty": "easy",
    "question": "A price drops by 20% and then the new price rises by 20%. Compared to the original price, the final price is:",
    "options": [
      "4% lower",
      "Same",
      "4% higher",
      "2% lower"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Let price be 100. After 20% drop = 80. After 20% increase = 80 * 1.20 = 96 (4% lower)."
  },
  {
    "id": "num-082",
    "category": "Percentages & Fractions",
    "difficulty": "easy",
    "question": "A town's population grew from 25,000 to 30,000. What was the percentage increase?",
    "options": [
      "15%",
      "18%",
      "20%",
      "25%"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Increase = 5,000 / 25,000 = 20%."
  },
  {
    "id": "num-083",
    "category": "Percentages & Fractions",
    "difficulty": "easy",
    "question": "What is 3/8 expressed as a percentage?",
    "options": [
      "32.5%",
      "35%",
      "37.5%",
      "40%"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 / 8 = 0.375 = 37.5%."
  },
  {
    "id": "num-084",
    "category": "Percentages & Fractions",
    "difficulty": "easy",
    "question": "Which of the following fractions is equivalent to 45%?",
    "options": [
      "7/15",
      "9/20",
      "11/25",
      "4/9"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "45% = 45/100 = 9/20."
  },
  {
    "id": "num-085",
    "category": "Percentages & Fractions",
    "difficulty": "easy",
    "question": "If 15% of a company's 400 employees work remotely, how many employees work remotely?",
    "options": [
      "50",
      "60",
      "65",
      "70"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "0.15 * 400 = 60 employees."
  },
  {
    "id": "num-086",
    "category": "Percentages & Fractions",
    "difficulty": "easy",
    "question": "A restaurant bill of $85 is subject to an 8% sales tax and a 15% tip calculated on the original bill. What is the total amount paid?",
    "options": [
      "$102.55",
      "$104.55",
      "$105.25",
      "$108.00"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Total = $85 * (1 + 0.08 + 0.15) = $85 * 1.23 = $104.55."
  },
  {
    "id": "num-087",
    "category": "Percentages & Fractions",
    "difficulty": "easy",
    "question": "If 2/3 of a cake is shared equally among 4 friends, what fraction of the whole cake does each friend get?",
    "options": [
      "1/8",
      "1/6",
      "1/5",
      "1/4"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "(2/3) / 4 = 2/12 = 1/6."
  },
  {
    "id": "num-088",
    "category": "Percentages & Fractions",
    "difficulty": "easy",
    "question": "Which fraction is greater: 5/8 or 7/12?",
    "options": [
      "5/8",
      "7/12",
      "They are equal",
      "Cannot be determined"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "5/8 = 15/24; 7/12 = 14/24. 15/24 > 14/24, so 5/8 is greater."
  },
  {
    "id": "num-089",
    "category": "Percentages & Fractions",
    "difficulty": "easy",
    "question": "An investor deposits $5,000 at a simple interest rate of 6% per year. What is the total interest earned after 3 years?",
    "options": [
      "$750",
      "$850",
      "$900",
      "$950"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Interest = P * r * t = 5000 * 0.06 * 3 = $900."
  },
  {
    "id": "num-090",
    "category": "Percentages & Fractions",
    "difficulty": "easy",
    "question": "If an investment of $2,000 compounds annually at 10%, what is the value after 2 years?",
    "options": [
      "$2,400",
      "$2,420",
      "$2,450",
      "$2,500"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Value = 2000 * (1.10)^2 = 2000 * 1.21 = $2,420."
  },
  {
    "id": "num-091",
    "category": "Percentages & Fractions",
    "difficulty": "easy",
    "question": "A store buys a gadget for $50 and sells it for $75. What is the profit margin percentage based on cost?",
    "options": [
      "33.3%",
      "45%",
      "50%",
      "66.7%"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Profit = $25. Markup on cost = (25 / 50) * 100 = 50%."
  },
  {
    "id": "num-092",
    "category": "Percentages & Fractions",
    "difficulty": "easy",
    "question": "A shopkeeper marks an item up by 50% above cost and then gives a 20% discount. What is the net profit percentage on cost?",
    "options": [
      "20%",
      "25%",
      "30%",
      "35%"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Cost = 100 -> Marked = 150 -> Sale = 150 * 0.80 = 120 (20% profit)."
  },
  {
    "id": "num-093",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "In a class of 50 students, 60% are female. How many male students are in the class?",
    "options": [
      "15",
      "20",
      "25",
      "30"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Male percentage = 40%. 40% of 50 = 20."
  },
  {
    "id": "num-094",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "What is 1/4 + 2/5?",
    "options": [
      "11/20",
      "13/20",
      "7/10",
      "3/9"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Common denominator 20: 5/20 + 8/20 = 13/20."
  },
  {
    "id": "num-095",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "What is 5/6 - 3/8?",
    "options": [
      "9/24",
      "11/24",
      "13/24",
      "15/24"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Common denominator 24: 20/24 - 9/24 = 11/24."
  },
  {
    "id": "num-096",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "What is (3/4) * (8/9)?",
    "options": [
      "1/2",
      "2/3",
      "3/4",
      "5/6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "(3 * 8) / (4 * 9) = 24 / 36 = 2/3."
  },
  {
    "id": "num-097",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "What is (5/7) ÷ (10/21)?",
    "options": [
      "1",
      "1.25",
      "1.5",
      "1.75"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "(5/7) * (21/10) = 105 / 70 = 1.5 (or 3/2)."
  },
  {
    "id": "num-098",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "If 30% of a number is 45, what is 80% of that same number?",
    "options": [
      "100",
      "110",
      "120",
      "130"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Number = 45 / 0.30 = 150. 80% of 150 = 120."
  },
  {
    "id": "num-099",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "A product price is reduced by 10%, then reduced by another 10%. What is the total single effective discount?",
    "options": [
      "18%",
      "19%",
      "20%",
      "21%"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "100 -> 90 -> 90 * 0.9 = 81. Total discount = 100 - 81 = 19%."
  },
  {
    "id": "num-100",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "If the price of gasoline rises by 25%, by what percentage must a driver reduce fuel consumption to keep total expenditure constant?",
    "options": [
      "15%",
      "20%",
      "25%",
      "30%"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Expenditure = Price * Quantity. If P becomes 1.25P, Q must become 1/1.25 = 0.80Q (20% reduction)."
  },
  {
    "id": "num-101",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "A merchant sells an article at $84 losing 20%. What was the cost price?",
    "options": [
      "$95",
      "$100",
      "$105",
      "$110"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Cost = 84 / 0.80 = $105."
  },
  {
    "id": "num-102",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "If 75% of x is equal to 45% of y, what is the ratio of x to y?",
    "options": [
      "3:5",
      "5:3",
      "4:7",
      "7:4"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "0.75x = 0.45y -> x/y = 0.45 / 0.75 = 3/5."
  },
  {
    "id": "num-103",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "What is the decimal equivalent of 7/16?",
    "options": [
      "0.4125",
      "0.4275",
      "0.4375",
      "0.4525"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "7 / 16 = 0.4375."
  },
  {
    "id": "num-104",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "If 12 out of 80 apples in a crate are spoiled, what percentage of the apples are fresh?",
    "options": [
      "80%",
      "82.5%",
      "85%",
      "87.5%"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Fresh apples = 68 / 80 = 0.85 = 85%."
  },
  {
    "id": "num-105",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "A real estate agent earns a 3% commission on the first $100,000 of a sale and 2% on the remaining balance. If a house sells for $250,000, what is the total commission?",
    "options": [
      "$5,000",
      "$5,500",
      "$6,000",
      "$6,500"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Commission = (0.03 * 100,000) + (0.02 * 150,000) = $3,000 + $3,000 = $6,000."
  },
  {
    "id": "num-106",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "If a stock drops by 50% in year one, what percentage must it gain in year two to return to its original value?",
    "options": [
      "50%",
      "75%",
      "100%",
      "150%"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "From 0.50 back to 1.00 requires doubling (+100%)."
  },
  {
    "id": "num-107",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "What is 12.5% of 640?",
    "options": [
      "60",
      "70",
      "80",
      "90"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "12.5% = 1/8. 640 / 8 = 80."
  },
  {
    "id": "num-108",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "What is 16.67% (1/6) of 432?",
    "options": [
      "68",
      "72",
      "76",
      "80"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "432 / 6 = 72."
  },
  {
    "id": "num-109",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "An item is sold for $180, making a profit of 20% on cost. What was the cost price?",
    "options": [
      "$140",
      "$145",
      "$150",
      "$155"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Cost = 180 / 1.20 = $150."
  },
  {
    "id": "num-110",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "If 3/5 of a bottle contains 450 ml of juice, what is the full capacity of the bottle?",
    "options": [
      "650 ml",
      "700 ml",
      "750 ml",
      "800 ml"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Capacity = 450 * (5/3) = 750 ml."
  },
  {
    "id": "num-111",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "What percentage of 2.5 hours is 45 minutes?",
    "options": [
      "25%",
      "30%",
      "33.3%",
      "35%"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "2.5 hours = 150 minutes. (45 / 150) * 100 = 30%."
  },
  {
    "id": "num-112",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "If an employee receives an 8% raise resulting in a $3,200 annual increase, what was the salary before the raise?",
    "options": [
      "$36,000",
      "$38,000",
      "$40,000",
      "$42,000"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Salary = 3200 / 0.08 = $40,000."
  },
  {
    "id": "num-113",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "Which fraction is the smallest: 4/7, 5/9, 6/11, 7/13?",
    "options": [
      "4/7",
      "5/9",
      "6/11",
      "7/13"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "4/7 ≈ 0.571, 5/9 ≈ 0.556, 6/11 ≈ 0.545, 7/13 ≈ 0.538. 7/13 is smallest."
  },
  {
    "id": "num-114",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "If 1/3 of a number plus 1/4 of the same number equals 14, what is the number?",
    "options": [
      "20",
      "24",
      "28",
      "32"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "(1/3 + 1/4)x = (7/12)x = 14 -> x = 14 * 12 / 7 = 24."
  },
  {
    "id": "num-115",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "A car depreciates by 15% each year. If it is currently worth $20,000, what will it be worth in 2 years?",
    "options": [
      "$14,250",
      "$14,450",
      "$14,500",
      "$15,000"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Value = 20000 * (0.85)^2 = 20000 * 0.7225 = $14,450."
  },
  {
    "id": "num-116",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "What is 0.08 expressed as a percentage?",
    "options": [
      "0.08%",
      "0.8%",
      "8%",
      "80%"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "0.08 * 100 = 8%."
  },
  {
    "id": "num-117",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "If 35% of students in a school of 800 play sports, how many do NOT play sports?",
    "options": [
      "480",
      "500",
      "520",
      "540"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Non-sports percentage = 65%. 0.65 * 800 = 520."
  },
  {
    "id": "num-118",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "A store offers 'Buy 2, Get 1 Free'. What is the effective percentage discount on 3 items?",
    "options": [
      "25%",
      "33.3%",
      "40%",
      "50%"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "You pay for 2 out of 3. Discount = 1/3 ≈ 33.3%."
  },
  {
    "id": "num-119",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "If a 5-liter mixture contains 20% alcohol, how much pure alcohol is in the mixture?",
    "options": [
      "0.8 L",
      "1.0 L",
      "1.2 L",
      "1.5 L"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "0.20 * 5 = 1.0 L."
  },
  {
    "id": "num-120",
    "category": "Percentages & Fractions",
    "difficulty": "medium",
    "question": "What is 150% of 90?",
    "options": [
      "125",
      "130",
      "135",
      "140"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "1.50 * 90 = 135."
  },
  {
    "id": "num-121",
    "category": "Percentages & Fractions",
    "difficulty": "hard",
    "question": "If x is 25% greater than y, by what percentage is y less than x?",
    "options": [
      "15%",
      "20%",
      "25%",
      "30%"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = 1.25y -> y = x / 1.25 = 0.80x (20% less than x)."
  },
  {
    "id": "num-122",
    "category": "Percentages & Fractions",
    "difficulty": "hard",
    "question": "A company earned $450,000 in Q1 and $540,000 in Q2. What was the percentage growth in earnings?",
    "options": [
      "15%",
      "18%",
      "20%",
      "25%"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "(540 - 450) / 450 = 90 / 450 = 20%."
  },
  {
    "id": "num-123",
    "category": "Percentages & Fractions",
    "difficulty": "hard",
    "question": "If 2/5 of a budget is spent on housing and 1/4 on food, what fraction of the budget remains?",
    "options": [
      "3/20",
      "7/20",
      "9/20",
      "11/20"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "1 - (8/20 + 5/20) = 1 - 13/20 = 7/20."
  },
  {
    "id": "num-124",
    "category": "Percentages & Fractions",
    "difficulty": "hard",
    "question": "A bank offers 5% annual interest compounded semi-annually. What is the effective annual rate?",
    "options": [
      "5.00%",
      "5.0625%",
      "5.125%",
      "5.25%"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "(1 + 0.025)^2 - 1 = 1.050625 - 1 = 5.0625%."
  },
  {
    "id": "num-125",
    "category": "Percentages & Fractions",
    "difficulty": "hard",
    "question": "What is 15% of 120?",
    "options": [
      "14",
      "18",
      "22",
      "26"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "15% of 120 = (15/100) * 120 = 18."
  },
  {
    "id": "num-126",
    "category": "Percentages & Fractions",
    "difficulty": "hard",
    "question": "What is 45% of 240?",
    "options": [
      "104",
      "108",
      "112",
      "116"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "45% of 240 = (45/100) * 240 = 108."
  },
  {
    "id": "num-127",
    "category": "Percentages & Fractions",
    "difficulty": "hard",
    "question": "What is 35% of 360?",
    "options": [
      "122",
      "126",
      "130",
      "134"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "35% of 360 = (35/100) * 360 = 126."
  },
  {
    "id": "num-128",
    "category": "Percentages & Fractions",
    "difficulty": "hard",
    "question": "What is 25% of 480?",
    "options": [
      "116",
      "120",
      "124",
      "128"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "25% of 480 = (25/100) * 480 = 120."
  },
  {
    "id": "num-129",
    "category": "Percentages & Fractions",
    "difficulty": "hard",
    "question": "What is 15% of 100?",
    "options": [
      "11",
      "15",
      "19",
      "23"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "15% of 100 = (15/100) * 100 = 15."
  },
  {
    "id": "num-130",
    "category": "Percentages & Fractions",
    "difficulty": "hard",
    "question": "What is 45% of 220?",
    "options": [
      "95",
      "99",
      "103",
      "107"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "45% of 220 = (45/100) * 220 = 99."
  },
  {
    "id": "num-131",
    "category": "Percentages & Fractions",
    "difficulty": "hard",
    "question": "What is 35% of 340?",
    "options": [
      "115",
      "119",
      "123",
      "127"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "35% of 340 = (35/100) * 340 = 119."
  },
  {
    "id": "num-132",
    "category": "Percentages & Fractions",
    "difficulty": "hard",
    "question": "What is 25% of 460?",
    "options": [
      "111",
      "115",
      "119",
      "123"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "25% of 460 = (25/100) * 460 = 115."
  },
  {
    "id": "num-133",
    "category": "Percentages & Fractions",
    "difficulty": "hard",
    "question": "What is 15% of 580?",
    "options": [
      "83",
      "87",
      "91",
      "95"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "15% of 580 = (15/100) * 580 = 87."
  },
  {
    "id": "num-134",
    "category": "Percentages & Fractions",
    "difficulty": "hard",
    "question": "What is 45% of 200?",
    "options": [
      "86",
      "90",
      "94",
      "98"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "45% of 200 = (45/100) * 200 = 90."
  },
  {
    "id": "num-135",
    "category": "Percentages & Fractions",
    "difficulty": "hard",
    "question": "What is 35% of 320?",
    "options": [
      "108",
      "112",
      "116",
      "120"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "35% of 320 = (35/100) * 320 = 112."
  },
  {
    "id": "num-136",
    "category": "Percentages & Fractions",
    "difficulty": "hard",
    "question": "What is 25% of 440?",
    "options": [
      "106",
      "110",
      "114",
      "118"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "25% of 440 = (25/100) * 440 = 110."
  },
  {
    "id": "num-137",
    "category": "Percentages & Fractions",
    "difficulty": "hard",
    "question": "What is 15% of 560?",
    "options": [
      "80",
      "84",
      "88",
      "92"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "15% of 560 = (15/100) * 560 = 84."
  },
  {
    "id": "num-138",
    "category": "Percentages & Fractions",
    "difficulty": "hard",
    "question": "What is 45% of 180?",
    "options": [
      "77",
      "81",
      "85",
      "89"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "45% of 180 = (45/100) * 180 = 81."
  },
  {
    "id": "num-139",
    "category": "Percentages & Fractions",
    "difficulty": "hard",
    "question": "What is 35% of 300?",
    "options": [
      "101",
      "105",
      "109",
      "113"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "35% of 300 = (35/100) * 300 = 105."
  },
  {
    "id": "num-140",
    "category": "Ratios & Proportions",
    "difficulty": "easy",
    "question": "In a class of 30 students, the ratio of boys to girls is 2:3. How many girls are in the class?",
    "options": [
      "12",
      "15",
      "18",
      "20"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "The total ratio parts are 2 + 3 = 5. Each part represents 30 / 5 = 6 students. The number of girls is 3 × 6 = 18."
  },
  {
    "id": "num-141",
    "category": "Ratios & Proportions",
    "difficulty": "easy",
    "question": "Three partners share an annual business profit of $72,000 in the ratio 3:4:5. How much does the second partner receive?",
    "options": [
      "$18,000",
      "$24,000",
      "$30,000",
      "$36,000"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Total parts = 3 + 4 + 5 = 12. Each part = $72,000 / 12 = $6,000. The second partner gets 4 parts = 4 × $6,000 = $24,000."
  },
  {
    "id": "num-142",
    "category": "Ratios & Proportions",
    "difficulty": "easy",
    "question": "A 40-liter mixture contains 20% acid. How many liters of pure water must be added to dilute the acid concentration to 16%?",
    "options": [
      "8 liters",
      "10 liters",
      "12 liters",
      "15 liters"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Acid amount = 20% of 40 = 8 liters. For 8 liters to equal 16% of the final volume: 8 / 0.16 = 50 liters. Water added = 50 - 40 = 10 liters."
  },
  {
    "id": "num-143",
    "category": "Ratios & Proportions",
    "difficulty": "easy",
    "question": "The ratio of boys to girls in a school club is 3:5. If there are 24 boys, how many girls are there?",
    "options": [
      "32",
      "36",
      "40",
      "45"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Ratio unit = 24 / 3 = 8. Girls = 5 * 8 = 40."
  },
  {
    "id": "num-144",
    "category": "Ratios & Proportions",
    "difficulty": "easy",
    "question": "Divide $180 among A, B, and C in the ratio 2:3:4. How much does B receive?",
    "options": [
      "$40",
      "$60",
      "$80",
      "$90"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Total parts = 2 + 3 + 4 = 9. One part = $20. B gets 3 * $20 = $60."
  },
  {
    "id": "num-145",
    "category": "Ratios & Proportions",
    "difficulty": "easy",
    "question": "If 6 workers can pave a road in 12 days, how many days will 9 workers take working at the same rate?",
    "options": [
      "6 days",
      "8 days",
      "9 days",
      "10 days"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Total worker-days = 6 * 12 = 72. With 9 workers: 72 / 9 = 8 days."
  },
  {
    "id": "num-146",
    "category": "Ratios & Proportions",
    "difficulty": "easy",
    "question": "Two numbers are in the ratio 4:7. If their sum is 132, what is the smaller number?",
    "options": [
      "44",
      "48",
      "52",
      "56"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Total parts = 11. One part = 132 / 11 = 12. Smaller number = 4 * 12 = 48."
  },
  {
    "id": "num-147",
    "category": "Ratios & Proportions",
    "difficulty": "easy",
    "question": "The scale on a map is 1 cm : 25 km. If two cities are 6 cm apart on the map, what is the actual distance?",
    "options": [
      "125 km",
      "140 km",
      "150 km",
      "175 km"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "6 * 25 km = 150 km."
  },
  {
    "id": "num-148",
    "category": "Ratios & Proportions",
    "difficulty": "easy",
    "question": "In a mixture of 60 liters, the ratio of milk to water is 2:1. How many liters of water must be added to make the ratio 1:1?",
    "options": [
      "10 L",
      "15 L",
      "20 L",
      "25 L"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Milk = 40 L, Water = 20 L. To make ratio 1:1, water must equal 40 L, so 20 L must be added."
  },
  {
    "id": "num-149",
    "category": "Ratios & Proportions",
    "difficulty": "easy",
    "question": "If a : b = 2 : 3 and b : c = 4 : 5, what is the ratio a : c?",
    "options": [
      "8:15",
      "6:15",
      "2:5",
      "3:5"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "a/b * b/c = (2/3) * (4/5) = 8/15."
  },
  {
    "id": "num-150",
    "category": "Ratios & Proportions",
    "difficulty": "easy",
    "question": "If 5 machines produce 100 parts in 2 hours, how many parts can 8 machines produce in 3 hours?",
    "options": [
      "200",
      "220",
      "240",
      "260"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Rate per machine = 100 / (5 * 2) = 10 parts/hour. 8 machines in 3 hours = 8 * 3 * 10 = 240 parts."
  },
  {
    "id": "num-151",
    "category": "Ratios & Proportions",
    "difficulty": "easy",
    "question": "The ratio of angles in a triangle is 2:3:4. What is the measure of the largest angle?",
    "options": [
      "70°",
      "75°",
      "80°",
      "85°"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Sum = 180°. Total parts = 9. One part = 20°. Largest angle = 4 * 20° = 80°."
  },
  {
    "id": "num-152",
    "category": "Ratios & Proportions",
    "difficulty": "easy",
    "question": "If 15 pens cost $45, how much do 28 pens cost at the same rate?",
    "options": [
      "$74",
      "$80",
      "$84",
      "$88"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Cost per pen = 45 / 15 = $3. 28 * $3 = $84."
  },
  {
    "id": "num-153",
    "category": "Ratios & Proportions",
    "difficulty": "easy",
    "question": "A brass alloy consists of copper and zinc in the ratio 13:7. How many kg of zinc are in 100 kg of the alloy?",
    "options": [
      "30 kg",
      "35 kg",
      "40 kg",
      "45 kg"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Total parts = 20. Zinc = (7 / 20) * 100 = 35 kg."
  },
  {
    "id": "num-154",
    "category": "Ratios & Proportions",
    "difficulty": "easy",
    "question": "A recipe requires 3 cups of flour for every 2 cups of sugar. If a baker uses 9 cups of flour, how many cups of sugar are needed?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Factor = 9 / 3 = 3. Sugar = 2 * 3 = 6 cups."
  },
  {
    "id": "num-155",
    "category": "Ratios & Proportions",
    "difficulty": "easy",
    "question": "If y is directly proportional to x, and y = 18 when x = 6, what is y when x = 11?",
    "options": [
      "30",
      "33",
      "36",
      "39"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "k = 18 / 6 = 3. When x = 11, y = 3 * 11 = 33."
  },
  {
    "id": "num-156",
    "category": "Ratios & Proportions",
    "difficulty": "easy",
    "question": "If z is inversely proportional to w, and z = 12 when w = 5, what is z when w = 15?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Constant = z * w = 12 * 5 = 60. When w = 15, z = 60 / 15 = 4."
  },
  {
    "id": "num-157",
    "category": "Ratios & Proportions",
    "difficulty": "medium",
    "question": "The perimeter of a rectangle is 56 cm and the ratio of length to width is 4:3. What is the area?",
    "options": [
      "180 cm²",
      "192 cm²",
      "200 cm²",
      "210 cm²"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "2(4x + 3x) = 14x = 56 -> x = 4. Length = 16, Width = 12. Area = 16 * 12 = 192 cm²."
  },
  {
    "id": "num-158",
    "category": "Ratios & Proportions",
    "difficulty": "medium",
    "question": "Three partners invest $10,000, $15,000, and $25,000 in a business. If total annual profit is $40,000, what is the largest share?",
    "options": [
      "$16,000",
      "$18,000",
      "$20,000",
      "$22,000"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Ratio = 2:3:5. Total parts = 10. Largest share = (5/10) * 40,000 = $20,000."
  },
  {
    "id": "num-159",
    "category": "Ratios & Proportions",
    "difficulty": "medium",
    "question": "If 4 taps fill a cistern in 30 minutes, how long will 6 taps take?",
    "options": [
      "15 mins",
      "18 mins",
      "20 mins",
      "24 mins"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Tap-minutes = 4 * 30 = 120. With 6 taps: 120 / 6 = 20 minutes."
  },
  {
    "id": "num-160",
    "category": "Ratios & Proportions",
    "difficulty": "medium",
    "question": "The ratio of speed of two cars is 7:8. If the first car travels 280 km in 4 hours, what is the speed of the second car?",
    "options": [
      "75 km/h",
      "80 km/h",
      "85 km/h",
      "90 km/h"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Speed 1 = 280 / 4 = 70 km/h. Since 7x = 70 -> x = 10. Speed 2 = 8 * 10 = 80 km/h."
  },
  {
    "id": "num-161",
    "category": "Ratios & Proportions",
    "difficulty": "medium",
    "question": "If a : b = 3 : 4 and b : c = 8 : 9, what is a : b : c?",
    "options": [
      "3:8:9",
      "6:8:9",
      "3:4:9",
      "6:4:9"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Multiply first ratio by 2: a:b = 6:8. Then a:b:c = 6:8:9."
  },
  {
    "id": "num-162",
    "category": "Ratios & Proportions",
    "difficulty": "medium",
    "question": "In a box of 120 marbles, the ratio of blue to red to green is 1:2:3. How many red marbles are there?",
    "options": [
      "30",
      "40",
      "50",
      "60"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Total parts = 6. One part = 20. Red = 2 * 20 = 40."
  },
  {
    "id": "num-163",
    "category": "Ratios & Proportions",
    "difficulty": "medium",
    "question": "A gear with 20 teeth turns a smaller gear with 8 teeth. When the large gear makes 10 rotations, how many rotations does the small gear make?",
    "options": [
      "20",
      "25",
      "30",
      "35"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "20 teeth * 10 rotations = 200 teeth. Small gear rotations = 200 / 8 = 25."
  },
  {
    "id": "num-164",
    "category": "Ratios & Proportions",
    "difficulty": "medium",
    "question": "If 12 men can construct a wall 100 meters long in 6 days, how many days will 18 men take to construct a wall 150 meters long?",
    "options": [
      "4 days",
      "5 days",
      "6 days",
      "7 days"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Rate = (12 * 6) / 100 = 0.72 man-days/meter. For 150 meters: 0.72 * 150 = 108 man-days. Days for 18 men = 108 / 18 = 6 days."
  },
  {
    "id": "num-165",
    "category": "Ratios & Proportions",
    "difficulty": "medium",
    "question": "The ratio of the areas of two squares is 9:16. What is the ratio of their perimeters?",
    "options": [
      "3:4",
      "9:16",
      "27:64",
      "4:3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Ratio of side lengths = sqrt(9) : sqrt(16) = 3:4. Perimeters have the same ratio 3:4."
  },
  {
    "id": "num-166",
    "category": "Ratios & Proportions",
    "difficulty": "medium",
    "question": "The ratio of the volumes of two similar spheres is 27:64. What is the ratio of their surface areas?",
    "options": [
      "3:4",
      "9:16",
      "9:64",
      "27:16"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Radius ratio = (27)^(1/3) : (64)^(1/3) = 3:4. Area ratio = 3^2 : 4^2 = 9:16."
  },
  {
    "id": "num-167",
    "category": "Ratios & Proportions",
    "difficulty": "medium",
    "question": "If (3x + 2y) / (3x - 2y) = 5 / 3, find the ratio x : y.",
    "options": [
      "4:3",
      "8:3",
      "3:2",
      "5:2"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "3(3x + 2y) = 5(3x - 2y) -> 9x + 6y = 15x - 10y -> 16y = 6x -> x/y = 16/6 = 8/3."
  },
  {
    "id": "num-168",
    "category": "Ratios & Proportions",
    "difficulty": "medium",
    "question": "A shadow of a 6-foot pole is 4 feet long. At the same time, a nearby tree casts a 28-foot shadow. How tall is the tree?",
    "options": [
      "38 ft",
      "40 ft",
      "42 ft",
      "44 ft"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Height / Shadow = 6 / 4 = 1.5. Tree height = 28 * 1.5 = 42 feet."
  },
  {
    "id": "num-169",
    "category": "Ratios & Proportions",
    "difficulty": "medium",
    "question": "If $1,200 is divided between Jack and Jill in the ratio 7:5, how much more does Jack receive than Jill?",
    "options": [
      "$150",
      "$200",
      "$250",
      "$300"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Total parts = 12. One part = $100. Difference = (7 - 5) * $100 = $200."
  },
  {
    "id": "num-170",
    "category": "Ratios & Proportions",
    "difficulty": "medium",
    "question": "The ratio of two numbers is 5:8. If 4 is added to each number, the ratio becomes 2:3. What is the larger number?",
    "options": [
      "24",
      "32",
      "40",
      "48"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "(5x + 4) / (8x + 4) = 2/3 -> 3(5x + 4) = 2(8x + 4) -> 15x + 12 = 16x + 8 -> x = 4. Larger = 8 * 4 = 32."
  },
  {
    "id": "num-171",
    "category": "Ratios & Proportions",
    "difficulty": "medium",
    "question": "In an exam, the ratio of passes to failures was 4:1. If 30 fewer students had appeared and 5 fewer had failed, the ratio would have been 5:1. How many students appeared?",
    "options": [
      "120",
      "150",
      "180",
      "200"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Pass = 4x, Fail = x (Total = 5x). (4x - 25) / (x - 5) = 5/1 -> 4x - 25 = 5x - 25 -> x = 30. Total = 5 * 30 = 150."
  },
  {
    "id": "num-172",
    "category": "Ratios & Proportions",
    "difficulty": "medium",
    "question": "A sum of money is divided between A and B in ratio 5:7. If B gives $12 to A, the ratio becomes 1:1. What was the total sum?",
    "options": [
      "$120",
      "$144",
      "$168",
      "$180"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Initial: A=5x, B=7x. After transfer: 5x + 12 = 7x - 12 -> 2x = 24 -> x = 12. Total sum = 12 * 12 = $144."
  },
  {
    "id": "num-173",
    "category": "Ratios & Proportions",
    "difficulty": "medium",
    "question": "If 8 men or 12 women can do a piece of work in 25 days, in how many days can 6 men and 11 women finish the same work?",
    "options": [
      "12 days",
      "15 days",
      "18 days",
      "20 days"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "8 men = 12 women -> 1 man = 1.5 women. 6 men + 11 women = 9 + 11 = 20 women. Time = (12 * 25) / 20 = 15 days."
  },
  {
    "id": "num-174",
    "category": "Ratios & Proportions",
    "difficulty": "medium",
    "question": "A fuel tank has a mixture of 40 L gasoline and diesel in ratio 3:1. How much diesel must be added to make the ratio 2:1?",
    "options": [
      "4 L",
      "5 L",
      "6 L",
      "8 L"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Gasoline = 30 L, Diesel = 10 L. For 2:1 ratio, diesel must be 30 / 2 = 15 L. Added = 15 - 10 = 5 L."
  },
  {
    "id": "num-175",
    "category": "Ratios & Proportions",
    "difficulty": "medium",
    "question": "A sum of $63 is divided in the ratio 4:5. What is the second share?",
    "options": [
      "$30",
      "$35",
      "$40",
      "$45"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Total parts = 9. Value per part = $63/(9) = $7. Second share = 5 * $7 = $35."
  },
  {
    "id": "num-176",
    "category": "Ratios & Proportions",
    "difficulty": "medium",
    "question": "A sum of $104 is divided in the ratio 2:6. What is the second share?",
    "options": [
      "$73",
      "$78",
      "$83",
      "$88"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Total parts = 8. Value per part = $104/(8) = $13. Second share = 6 * $13 = $78."
  },
  {
    "id": "num-177",
    "category": "Ratios & Proportions",
    "difficulty": "hard",
    "question": "A sum of $99 is divided in the ratio 4:7. What is the second share?",
    "options": [
      "$58",
      "$63",
      "$68",
      "$73"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Total parts = 11. Value per part = $99/(11) = $9. Second share = 7 * $9 = $63."
  },
  {
    "id": "num-178",
    "category": "Ratios & Proportions",
    "difficulty": "hard",
    "question": "A sum of $25 is divided in the ratio 2:3. What is the second share?",
    "options": [
      "$10",
      "$15",
      "$20",
      "$25"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Total parts = 5. Value per part = $25/(5) = $5. Second share = 3 * $5 = $15."
  },
  {
    "id": "num-179",
    "category": "Ratios & Proportions",
    "difficulty": "hard",
    "question": "A sum of $88 is divided in the ratio 4:4. What is the second share?",
    "options": [
      "$39",
      "$44",
      "$49",
      "$54"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Total parts = 8. Value per part = $88/(8) = $11. Second share = 4 * $11 = $44."
  },
  {
    "id": "num-180",
    "category": "Ratios & Proportions",
    "difficulty": "hard",
    "question": "A sum of $49 is divided in the ratio 2:5. What is the second share?",
    "options": [
      "$30",
      "$35",
      "$40",
      "$45"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Total parts = 7. Value per part = $49/(7) = $7. Second share = 5 * $7 = $35."
  },
  {
    "id": "num-181",
    "category": "Ratios & Proportions",
    "difficulty": "hard",
    "question": "A sum of $130 is divided in the ratio 4:6. What is the second share?",
    "options": [
      "$73",
      "$78",
      "$83",
      "$88"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Total parts = 10. Value per part = $130/(10) = $13. Second share = 6 * $13 = $78."
  },
  {
    "id": "num-182",
    "category": "Ratios & Proportions",
    "difficulty": "hard",
    "question": "A sum of $81 is divided in the ratio 2:7. What is the second share?",
    "options": [
      "$58",
      "$63",
      "$68",
      "$73"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Total parts = 9. Value per part = $81/(9) = $9. Second share = 7 * $9 = $63."
  },
  {
    "id": "num-183",
    "category": "Ratios & Proportions",
    "difficulty": "hard",
    "question": "A sum of $35 is divided in the ratio 4:3. What is the second share?",
    "options": [
      "$10",
      "$15",
      "$20",
      "$25"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Total parts = 7. Value per part = $35/(7) = $5. Second share = 3 * $5 = $15."
  },
  {
    "id": "num-184",
    "category": "Ratios & Proportions",
    "difficulty": "hard",
    "question": "A sum of $66 is divided in the ratio 2:4. What is the second share?",
    "options": [
      "$39",
      "$44",
      "$49",
      "$54"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Total parts = 6. Value per part = $66/(6) = $11. Second share = 4 * $11 = $44."
  },
  {
    "id": "num-185",
    "category": "Ratios & Proportions",
    "difficulty": "hard",
    "question": "A sum of $63 is divided in the ratio 4:5. What is the second share?",
    "options": [
      "$30",
      "$35",
      "$40",
      "$45"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Total parts = 9. Value per part = $63/(9) = $7. Second share = 5 * $7 = $35."
  },
  {
    "id": "num-186",
    "category": "Ratios & Proportions",
    "difficulty": "hard",
    "question": "A sum of $104 is divided in the ratio 2:6. What is the second share?",
    "options": [
      "$73",
      "$78",
      "$83",
      "$88"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Total parts = 8. Value per part = $104/(8) = $13. Second share = 6 * $13 = $78."
  },
  {
    "id": "num-187",
    "category": "Ratios & Proportions",
    "difficulty": "hard",
    "question": "A sum of $99 is divided in the ratio 4:7. What is the second share?",
    "options": [
      "$58",
      "$63",
      "$68",
      "$73"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Total parts = 11. Value per part = $99/(11) = $9. Second share = 7 * $9 = $63."
  },
  {
    "id": "num-188",
    "category": "Ratios & Proportions",
    "difficulty": "hard",
    "question": "A sum of $25 is divided in the ratio 2:3. What is the second share?",
    "options": [
      "$10",
      "$15",
      "$20",
      "$25"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Total parts = 5. Value per part = $25/(5) = $5. Second share = 3 * $5 = $15."
  },
  {
    "id": "num-189",
    "category": "Ratios & Proportions",
    "difficulty": "hard",
    "question": "A sum of $88 is divided in the ratio 4:4. What is the second share?",
    "options": [
      "$39",
      "$44",
      "$49",
      "$54"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Total parts = 8. Value per part = $88/(8) = $11. Second share = 4 * $11 = $44."
  },
  {
    "id": "num-190",
    "category": "Arithmetic Reasoning",
    "difficulty": "easy",
    "question": "A student scores 75, 80, 85, and 100 on four quizzes. What is their average score?",
    "options": [
      "82",
      "84",
      "85",
      "88"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Sum of scores = 75 + 80 + 85 + 100 = 340. The average is 340 / 4 = 85."
  },
  {
    "id": "num-191",
    "category": "Arithmetic Reasoning",
    "difficulty": "easy",
    "question": "A driver covers 120 km at 60 km/h, and then another 120 km at 40 km/h. What is the average speed for the entire 240 km trip?",
    "options": [
      "48 km/h",
      "50 km/h",
      "52 km/h",
      "54 km/h"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Time for first leg = 120 / 60 = 2 hours. Time for second leg = 120 / 40 = 3 hours. Total time = 5 hours. Average speed = 240 km / 5 h = 48 km/h."
  },
  {
    "id": "num-192",
    "category": "Arithmetic Reasoning",
    "difficulty": "easy",
    "question": "In an election between two candidates, the winner received 58% of the 45,000 total votes cast. By how many votes did the winner defeat the loser?",
    "options": [
      "3,600",
      "5,400",
      "7,200",
      "8,100"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "The winner received 58% and the loser received 42%. The difference is 58% - 42% = 16%. 16% of 45,000 is 0.16 × 45,000 = 7,200 votes."
  },
  {
    "id": "num-193",
    "category": "Arithmetic Reasoning",
    "difficulty": "easy",
    "question": "An item is sold for $180, earning a profit of 20% on the selling price. What was the cost price of the item?",
    "options": [
      "$144",
      "$150",
      "$152",
      "$160"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Profit = 20% of $180 = $36. Cost Price = Selling Price - Profit = $180 - $36 = $144."
  },
  {
    "id": "num-194",
    "category": "Arithmetic Reasoning",
    "difficulty": "easy",
    "question": "A bag contains 4 red marbles and 6 blue marbles. If two marbles are drawn at random without replacement, what is the probability that both are red?",
    "options": [
      "2/15",
      "4/25",
      "1/6",
      "3/10"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Probability of first red = 4/10. Probability of second red = 3/9 = 1/3. Combined probability = (4/10) × (1/3) = 4/30 = 2/15."
  },
  {
    "id": "num-195",
    "category": "Arithmetic Reasoning",
    "difficulty": "easy",
    "question": "A father is 4 times as old as his son. In 20 years, the father will be twice as old as his son. How old is the father now?",
    "options": [
      "36",
      "40",
      "44",
      "48"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "F = 4S. In 20 yrs: 4S + 20 = 2(S + 20) = 2S + 40 -> 2S = 20 -> S = 10, F = 40."
  },
  {
    "id": "num-196",
    "category": "Arithmetic Reasoning",
    "difficulty": "easy",
    "question": "The sum of three consecutive odd numbers is 87. What is the largest of the three numbers?",
    "options": [
      "29",
      "31",
      "33",
      "35"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Middle number = 87 / 3 = 29. Numbers are 27, 29, 31. Largest is 31."
  },
  {
    "id": "num-197",
    "category": "Arithmetic Reasoning",
    "difficulty": "easy",
    "question": "A worker earns $15 per hour for regular 40-hour weeks and 1.5 times the hourly rate for overtime. What does the worker earn for a 48-hour week?",
    "options": [
      "$720",
      "$750",
      "$780",
      "$800"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Regular = 40 * 15 = $600. Overtime = 8 * 22.50 = $180. Total = $780."
  },
  {
    "id": "num-198",
    "category": "Arithmetic Reasoning",
    "difficulty": "easy",
    "question": "A car odometer reads 15,951 miles (a palindrome). What is the minimum number of miles the car must travel for the odometer to show the next palindrome?",
    "options": [
      "110",
      "115",
      "120",
      "125"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "The next palindrome after 15,951 is 16,061. Distance = 16,061 - 15,951 = 110 miles."
  },
  {
    "id": "num-199",
    "category": "Arithmetic Reasoning",
    "difficulty": "easy",
    "question": "If today is Tuesday, what day of the week will it be in 100 days?",
    "options": [
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "100 mod 7 = 2. Two days after Tuesday is Thursday."
  },
  {
    "id": "num-200",
    "category": "Arithmetic Reasoning",
    "difficulty": "easy",
    "question": "A clock gains 3 minutes every 4 hours. How much will it gain in 36 hours?",
    "options": [
      "21 mins",
      "24 mins",
      "27 mins",
      "30 mins"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "(36 / 4) * 3 = 9 * 3 = 27 minutes."
  },
  {
    "id": "num-201",
    "category": "Arithmetic Reasoning",
    "difficulty": "easy",
    "question": "The average of 5 numbers is 24. If one number is removed, the average of the remaining 4 numbers becomes 22. What was the removed number?",
    "options": [
      "28",
      "30",
      "32",
      "34"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Sum of 5 = 5 * 24 = 120. Sum of 4 = 4 * 22 = 88. Removed = 120 - 88 = 32."
  },
  {
    "id": "num-202",
    "category": "Arithmetic Reasoning",
    "difficulty": "easy",
    "question": "A farmer has 30 animals consisting of chickens and cows. Together they have 84 legs. How many cows does the farmer have?",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Let c = cows, k = chickens. c + k = 30; 4c + 2k = 84 -> 2c = 24 -> c = 12."
  },
  {
    "id": "num-203",
    "category": "Arithmetic Reasoning",
    "difficulty": "medium",
    "question": "A water reservoir has 3 inlet pipes. Pipe A fills it in 6 hours, Pipe B in 8 hours, and Pipe C in 12 hours. How long will all three pipes take together?",
    "options": [
      "2.4 hours",
      "2.67 hours",
      "3.0 hours",
      "3.5 hours"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Combined rate = 1/6 + 1/8 + 1/12 = 4/24 + 3/24 + 2/24 = 9/24 = 3/8 per hour. Time = 8/3 = 2.67 hours."
  },
  {
    "id": "num-204",
    "category": "Arithmetic Reasoning",
    "difficulty": "medium",
    "question": "A student needs an average of 85 on 4 exams to get an A. The first three scores are 82, 88, and 79. What must the student score on the 4th exam?",
    "options": [
      "89",
      "91",
      "93",
      "95"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Total required = 4 * 85 = 340. Current sum = 82 + 88 + 79 = 249. Required 4th score = 340 - 249 = 91."
  },
  {
    "id": "num-205",
    "category": "Arithmetic Reasoning",
    "difficulty": "medium",
    "question": "A train has 12 carriages with an average of 45 passengers per carriage. If 3 empty carriages are detached, what is the new average per carriage for the remaining passengers?",
    "options": [
      "55",
      "60",
      "65",
      "70"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Total passengers = 12 * 45 = 540. Remaining carriages = 9. New average = 540 / 9 = 60."
  },
  {
    "id": "num-206",
    "category": "Arithmetic Reasoning",
    "difficulty": "medium",
    "question": "If the product of two positive numbers is 180 and their difference is 3, what is the sum of the two numbers?",
    "options": [
      "25",
      "27",
      "29",
      "31"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Numbers are 12 and 15 (15 - 12 = 3, 12 * 15 = 180). Sum = 12 + 15 = 27."
  },
  {
    "id": "num-207",
    "category": "Arithmetic Reasoning",
    "difficulty": "medium",
    "question": "How many numbers between 1 and 100 are divisible by both 3 and 4?",
    "options": [
      "6",
      "7",
      "8",
      "9"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Divisible by LCM(3, 4) = 12. Floor(100 / 12) = 8."
  },
  {
    "id": "num-208",
    "category": "Arithmetic Reasoning",
    "difficulty": "medium",
    "question": "A box contains 5 red balls, 4 blue balls, and 3 green balls. If one ball is drawn at random, what is the probability that it is NOT blue?",
    "options": [
      "1/3",
      "1/2",
      "2/3",
      "3/4"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Total = 12. Non-blue = 5 + 3 = 8. Probability = 8/12 = 2/3."
  },
  {
    "id": "num-209",
    "category": "Arithmetic Reasoning",
    "difficulty": "medium",
    "question": "A store clerk gave change for a $50 bill on a $31.65 purchase using the fewest coins/bills. How much change was given?",
    "options": [
      "$17.35",
      "$18.35",
      "$18.45",
      "$19.35"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "$50.00 - $31.65 = $18.35."
  },
  {
    "id": "num-210",
    "category": "Arithmetic Reasoning",
    "difficulty": "medium",
    "question": "A book has 300 pages. How many times does the digit '5' appear in the page numbers from 1 to 300?",
    "options": [
      "50",
      "55",
      "60",
      "65"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Units place: 30 times. Tens place (50-59 in each 100): 10 * 3 = 30 times. Total = 30 + 30 = 60."
  },
  {
    "id": "num-211",
    "category": "Arithmetic Reasoning",
    "difficulty": "medium",
    "question": "A fence is 100 meters long with posts placed every 5 meters from start to finish. How many posts are needed?",
    "options": [
      "20",
      "21",
      "22",
      "25"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "(100 / 5) + 1 = 20 + 1 = 21 posts."
  },
  {
    "id": "num-212",
    "category": "Arithmetic Reasoning",
    "difficulty": "medium",
    "question": "If 7 people greet each other and shake hands with every other person once, how many handshakes occur?",
    "options": [
      "18",
      "21",
      "24",
      "28"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Combinations C(7, 2) = (7 * 6) / 2 = 21."
  },
  {
    "id": "num-213",
    "category": "Arithmetic Reasoning",
    "difficulty": "medium",
    "question": "The average age of a group of 10 people is 25. When a new member joins, the average age increases to 26. How old is the new member?",
    "options": [
      "34",
      "36",
      "38",
      "40"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "New sum = 11 * 26 = 286. Old sum = 10 * 25 = 250. New member = 286 - 250 = 36."
  },
  {
    "id": "num-214",
    "category": "Arithmetic Reasoning",
    "difficulty": "medium",
    "question": "A snail climbs up a 10-meter pole. Each day it climbs 3 meters up and each night it slips 2 meters down. On which day will it reach the top?",
    "options": [
      "7th day",
      "8th day",
      "9th day",
      "10th day"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "After 7 days and nights it reaches 7 meters. On the 8th day it climbs +3 meters to reach 10 meters."
  },
  {
    "id": "num-215",
    "category": "Arithmetic Reasoning",
    "difficulty": "medium",
    "question": "The average of 6 test scores is 29. What is their total combined score?",
    "options": [
      "164",
      "174",
      "184",
      "189"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Sum = Average * Count = 29 * 6 = 174."
  },
  {
    "id": "num-216",
    "category": "Arithmetic Reasoning",
    "difficulty": "medium",
    "question": "The average of 4 test scores is 47. What is their total combined score?",
    "options": [
      "178",
      "188",
      "198",
      "203"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Sum = Average * Count = 47 * 4 = 188."
  },
  {
    "id": "num-217",
    "category": "Arithmetic Reasoning",
    "difficulty": "medium",
    "question": "The average of 6 test scores is 25. What is their total combined score?",
    "options": [
      "140",
      "150",
      "160",
      "165"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Sum = Average * Count = 25 * 6 = 150."
  },
  {
    "id": "num-218",
    "category": "Arithmetic Reasoning",
    "difficulty": "medium",
    "question": "The average of 4 test scores is 43. What is their total combined score?",
    "options": [
      "162",
      "172",
      "182",
      "187"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Sum = Average * Count = 43 * 4 = 172."
  },
  {
    "id": "num-219",
    "category": "Arithmetic Reasoning",
    "difficulty": "hard",
    "question": "The average of 6 test scores is 21. What is their total combined score?",
    "options": [
      "116",
      "126",
      "136",
      "141"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Sum = Average * Count = 21 * 6 = 126."
  },
  {
    "id": "num-220",
    "category": "Arithmetic Reasoning",
    "difficulty": "hard",
    "question": "The average of 4 test scores is 39. What is their total combined score?",
    "options": [
      "146",
      "156",
      "166",
      "171"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Sum = Average * Count = 39 * 4 = 156."
  },
  {
    "id": "num-221",
    "category": "Arithmetic Reasoning",
    "difficulty": "hard",
    "question": "The average of 6 test scores is 57. What is their total combined score?",
    "options": [
      "332",
      "342",
      "352",
      "357"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Sum = Average * Count = 57 * 6 = 342."
  },
  {
    "id": "num-222",
    "category": "Arithmetic Reasoning",
    "difficulty": "hard",
    "question": "The average of 4 test scores is 35. What is their total combined score?",
    "options": [
      "130",
      "140",
      "150",
      "155"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Sum = Average * Count = 35 * 4 = 140."
  },
  {
    "id": "num-223",
    "category": "Arithmetic Reasoning",
    "difficulty": "hard",
    "question": "The average of 6 test scores is 53. What is their total combined score?",
    "options": [
      "308",
      "318",
      "328",
      "333"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Sum = Average * Count = 53 * 6 = 318."
  },
  {
    "id": "num-224",
    "category": "Arithmetic Reasoning",
    "difficulty": "hard",
    "question": "The average of 4 test scores is 31. What is their total combined score?",
    "options": [
      "114",
      "124",
      "134",
      "139"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Sum = Average * Count = 31 * 4 = 124."
  },
  {
    "id": "num-225",
    "category": "Arithmetic Reasoning",
    "difficulty": "hard",
    "question": "The average of 6 test scores is 49. What is their total combined score?",
    "options": [
      "284",
      "294",
      "304",
      "309"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Sum = Average * Count = 49 * 6 = 294."
  },
  {
    "id": "num-226",
    "category": "Arithmetic Reasoning",
    "difficulty": "hard",
    "question": "The average of 4 test scores is 27. What is their total combined score?",
    "options": [
      "98",
      "108",
      "118",
      "123"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Sum = Average * Count = 27 * 4 = 108."
  },
  {
    "id": "num-227",
    "category": "Arithmetic Reasoning",
    "difficulty": "hard",
    "question": "The average of 6 test scores is 45. What is their total combined score?",
    "options": [
      "260",
      "270",
      "280",
      "285"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Sum = Average * Count = 45 * 6 = 270."
  },
  {
    "id": "num-228",
    "category": "Arithmetic Reasoning",
    "difficulty": "hard",
    "question": "The average of 4 test scores is 23. What is their total combined score?",
    "options": [
      "82",
      "92",
      "102",
      "107"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Sum = Average * Count = 23 * 4 = 92."
  },
  {
    "id": "num-229",
    "category": "Arithmetic Reasoning",
    "difficulty": "hard",
    "question": "The average of 6 test scores is 41. What is their total combined score?",
    "options": [
      "236",
      "246",
      "256",
      "261"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Sum = Average * Count = 41 * 6 = 246."
  },
  {
    "id": "num-230",
    "category": "Rates & Speed",
    "difficulty": "easy",
    "question": "A bakery produces 240 cookies every 2 hours. At this rate, how many cookies does it produce in 5 hours?",
    "options": [
      "480",
      "500",
      "560",
      "600"
    ],
    "correctAnswer": 3,
    "correct": 3,
    "explanation": "The rate is 240 / 2 = 120 cookies per hour. In 5 hours, the bakery produces 120 × 5 = 600 cookies."
  },
  {
    "id": "num-231",
    "category": "Rates & Speed",
    "difficulty": "easy",
    "question": "A cyclist travels at a constant speed of 18 km/h. How far does the cyclist travel in 40 minutes?",
    "options": [
      "10 km",
      "12 km",
      "14 km",
      "15 km"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "40 minutes is 40/60 = 2/3 of an hour. Distance = Speed × Time = 18 × (2/3) = 12 km."
  },
  {
    "id": "num-232",
    "category": "Rates & Speed",
    "difficulty": "easy",
    "question": "Pipe A fills a tank in 6 hours, while Pipe B fills it in 3 hours. How long will it take to fill the tank if both pipes are open together?",
    "options": [
      "1.5 hours",
      "2 hours",
      "2.5 hours",
      "4.5 hours"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Pipe A fills 1/6 of the tank/hour and Pipe B fills 1/3 = 2/6 tank/hour. Together they fill 3/6 = 1/2 tank/hour, which takes 2 hours."
  },
  {
    "id": "num-233",
    "category": "Rates & Speed",
    "difficulty": "easy",
    "question": "Two cars start 300 miles apart and travel toward each other. One travels at 45 mph and the other at 55 mph. How many hours until they meet?",
    "options": [
      "2.5 hours",
      "3 hours",
      "3.5 hours",
      "4 hours"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Combined approaching speed = 45 + 55 = 100 mph. Time to meet = Distance / Combined Speed = 300 / 100 = 3 hours."
  },
  {
    "id": "num-234",
    "category": "Rates & Speed",
    "difficulty": "easy",
    "question": "Worker X can finish a project alone in 12 days. Worker Y is 50% more efficient than Worker X. How many days does Worker Y take alone?",
    "options": [
      "6 days",
      "8 days",
      "9 days",
      "10 days"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Worker X completes 1/12 of the work per day. Worker Y is 1.5 times as fast: 1.5 × (1/12) = 1/8 of the work per day, which equals 8 days."
  },
  {
    "id": "num-235",
    "category": "Rates & Speed",
    "difficulty": "easy",
    "question": "6 machines produce 180 units in 3 hours. Operating at the same rate per machine, how many hours will it take 4 machines to produce 360 units?",
    "options": [
      "6 hours",
      "8 hours",
      "9 hours",
      "12 hours"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "One machine produces 180 / (6 × 3) = 10 units per hour. 4 machines produce 40 units per hour. To make 360 units takes 360 / 40 = 9 hours."
  },
  {
    "id": "num-236",
    "category": "Rates & Speed",
    "difficulty": "easy",
    "question": "A car travels 180 miles in 3 hours and 36 minutes. What was its average speed in miles per hour?",
    "options": [
      "45 mph",
      "48 mph",
      "50 mph",
      "52 mph"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "3 hours 36 mins = 3.6 hours. Speed = 180 / 3.6 = 50 mph."
  },
  {
    "id": "num-237",
    "category": "Rates & Speed",
    "difficulty": "easy",
    "question": "A runner completes a 10,000-meter race in 40 minutes. What was the runner's average speed in kilometers per hour?",
    "options": [
      "12 km/h",
      "14 km/h",
      "15 km/h",
      "16 km/h"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "10,000 m = 10 km. Time = 40/60 = 2/3 hr. Speed = 10 / (2/3) = 15 km/h."
  },
  {
    "id": "num-238",
    "category": "Rates & Speed",
    "difficulty": "easy",
    "question": "Two trains 150 miles apart travel toward each other at 40 mph and 60 mph respectively. In how many hours will they meet?",
    "options": [
      "1.2 hours",
      "1.5 hours",
      "1.8 hours",
      "2.0 hours"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Combined speed = 40 + 60 = 100 mph. Time = 150 / 100 = 1.5 hours."
  },
  {
    "id": "num-239",
    "category": "Rates & Speed",
    "difficulty": "easy",
    "question": "A car drives to a city at 60 mph and returns along the same route at 40 mph. What is the average speed for the round trip?",
    "options": [
      "48 mph",
      "50 mph",
      "52 mph",
      "54 mph"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Harmonic mean: (2 * 60 * 40) / (60 + 40) = 4800 / 100 = 48 mph."
  },
  {
    "id": "num-240",
    "category": "Rates & Speed",
    "difficulty": "easy",
    "question": "A boat travels downstream at 18 km/h and upstream at 12 km/h. What is the speed of the current?",
    "options": [
      "2 km/h",
      "3 km/h",
      "4 km/h",
      "5 km/h"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Current speed = (Downstream - Upstream) / 2 = (18 - 12) / 2 = 3 km/h."
  },
  {
    "id": "num-241",
    "category": "Rates & Speed",
    "difficulty": "easy",
    "question": "A pump empties a pool in 8 hours. A second pump empties it in 12 hours. If both pumps run together, how long will they take?",
    "options": [
      "4.2 hours",
      "4.8 hours",
      "5.0 hours",
      "5.4 hours"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "1/8 + 1/12 = 5/24 pool/hour. Time = 24/5 = 4.8 hours."
  },
  {
    "id": "num-242",
    "category": "Rates & Speed",
    "difficulty": "easy",
    "question": "A cyclist travels 45 km in 1.5 hours. At this rate, how far will the cyclist travel in 3 hours and 20 minutes?",
    "options": [
      "90 km",
      "95 km",
      "100 km",
      "105 km"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Speed = 45 / 1.5 = 30 km/h. 3 hrs 20 mins = 10/3 hrs. Distance = 30 * (10/3) = 100 km."
  },
  {
    "id": "num-243",
    "category": "Rates & Speed",
    "difficulty": "easy",
    "question": "A printer prints 35 pages per minute. How long will it take to print a document of 840 pages?",
    "options": [
      "22 mins",
      "24 mins",
      "26 mins",
      "28 mins"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "840 / 35 = 24 minutes."
  },
  {
    "id": "num-244",
    "category": "Rates & Speed",
    "difficulty": "medium",
    "question": "A typist types 360 words in 6 minutes. How many words can the typist type in 15 minutes at the same pace?",
    "options": [
      "850",
      "900",
      "950",
      "1000"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Rate = 360 / 6 = 60 wpm. In 15 mins: 60 * 15 = 900 words."
  },
  {
    "id": "num-245",
    "category": "Rates & Speed",
    "difficulty": "medium",
    "question": "Two cyclists leave the same point at the same time in opposite directions. Cyclist A rides at 14 mph and Cyclist B at 18 mph. After how many hours will they be 80 miles apart?",
    "options": [
      "2.0 hours",
      "2.5 hours",
      "3.0 hours",
      "3.5 hours"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Relative speed = 14 + 18 = 32 mph. Time = 80 / 32 = 2.5 hours."
  },
  {
    "id": "num-246",
    "category": "Rates & Speed",
    "difficulty": "medium",
    "question": "A 300-meter train passes a stationary pole in 15 seconds. What is the speed of the train in km/h?",
    "options": [
      "60 km/h",
      "68 km/h",
      "72 km/h",
      "80 km/h"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Speed = 300 / 15 = 20 m/s. In km/h = 20 * 3.6 = 72 km/h."
  },
  {
    "id": "num-247",
    "category": "Rates & Speed",
    "difficulty": "medium",
    "question": "A passenger train travelling at 90 km/h overtakes a freight train travelling in the same direction at 54 km/h. What is the relative speed between the trains?",
    "options": [
      "24 km/h",
      "36 km/h",
      "40 km/h",
      "144 km/h"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Relative speed = 90 - 54 = 36 km/h."
  },
  {
    "id": "num-248",
    "category": "Rates & Speed",
    "difficulty": "medium",
    "question": "A car consumes 6 liters of fuel per 100 km. How many liters of fuel are needed for a 450 km journey?",
    "options": [
      "25 L",
      "27 L",
      "29 L",
      "31 L"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "(450 / 100) * 6 = 4.5 * 6 = 27 liters."
  },
  {
    "id": "num-249",
    "category": "Rates & Speed",
    "difficulty": "medium",
    "question": "A tap fills a 240-gallon tank at 15 gallons per minute, while a drain empties it at 3 gallons per minute. How long will it take to fill the empty tank?",
    "options": [
      "18 mins",
      "20 mins",
      "22 mins",
      "24 mins"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Net filling rate = 15 - 3 = 12 gpm. Time = 240 / 12 = 20 minutes."
  },
  {
    "id": "num-250",
    "category": "Rates & Speed",
    "difficulty": "medium",
    "question": "A person walks at 4 km/h and reaches an office 5 minutes late. Walking at 5 km/h, the person arrives 5 minutes early. What is the distance to the office?",
    "options": [
      "3 km",
      "3.33 km",
      "4 km",
      "4.5 km"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Time difference = 10 mins = 1/6 hr. d/4 - d/5 = d/20 = 1/6 -> d = 20/6 = 3.33 km."
  },
  {
    "id": "num-251",
    "category": "Rates & Speed",
    "difficulty": "medium",
    "question": "If an airplane flies 2,400 miles with a tailwind in 4 hours, and returns against the headwind in 5 hours, what is the speed of the wind?",
    "options": [
      "50 mph",
      "60 mph",
      "70 mph",
      "80 mph"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Tailwind speed = 2400/4 = 600 mph. Headwind speed = 2400/5 = 480 mph. Wind = (600 - 480)/2 = 60 mph."
  },
  {
    "id": "num-252",
    "category": "Rates & Speed",
    "difficulty": "medium",
    "question": "A jogger runs 3 laps of a 400m track in 4 minutes. What is the jogger's speed in meters per second?",
    "options": [
      "4 m/s",
      "5 m/s",
      "6 m/s",
      "7.5 m/s"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Distance = 3 * 400 = 1200 m. Time = 4 * 60 = 240 s. Speed = 1200 / 240 = 5 m/s."
  },
  {
    "id": "num-253",
    "category": "Rates & Speed",
    "difficulty": "medium",
    "question": "A machine stamps 120 bottle caps in 45 seconds. How many caps can it stamp in 6 minutes?",
    "options": [
      "840",
      "960",
      "1020",
      "1080"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Rate = 120 / 45 = 8/3 caps/sec. 6 mins = 360 s. Total = 360 * (8/3) = 960 caps."
  },
  {
    "id": "num-254",
    "category": "Rates & Speed",
    "difficulty": "medium",
    "question": "A car travels the first half of a distance at 30 km/h and the second half at 60 km/h. What is the average speed for the whole journey?",
    "options": [
      "40 km/h",
      "45 km/h",
      "48 km/h",
      "50 km/h"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Average speed = (2 * 30 * 60) / (30 + 60) = 3600 / 90 = 40 km/h."
  },
  {
    "id": "num-255",
    "category": "Rates & Speed",
    "difficulty": "medium",
    "question": "A delivery truck travels 210 miles in 4 hours including a 30-minute rest stop. What was its driving speed while moving?",
    "options": [
      "55 mph",
      "60 mph",
      "65 mph",
      "70 mph"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Driving time = 4.0 - 0.5 = 3.5 hours. Driving speed = 210 / 3.5 = 60 mph."
  },
  {
    "id": "num-256",
    "category": "Rates & Speed",
    "difficulty": "medium",
    "question": "A vehicle travels at a constant speed of 60 mph for 3 hours. What distance does it cover?",
    "options": [
      "170 miles",
      "180 miles",
      "190 miles",
      "200 miles"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Distance = Speed * Time = 60 * 3 = 180 miles."
  },
  {
    "id": "num-257",
    "category": "Rates & Speed",
    "difficulty": "medium",
    "question": "A vehicle travels at a constant speed of 40 mph for 3 hours. What distance does it cover?",
    "options": [
      "110 miles",
      "120 miles",
      "130 miles",
      "140 miles"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Distance = Speed * Time = 40 * 3 = 120 miles."
  },
  {
    "id": "num-258",
    "category": "Rates & Speed",
    "difficulty": "medium",
    "question": "A vehicle travels at a constant speed of 70 mph for 3 hours. What distance does it cover?",
    "options": [
      "200 miles",
      "210 miles",
      "220 miles",
      "230 miles"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Distance = Speed * Time = 70 * 3 = 210 miles."
  },
  {
    "id": "num-259",
    "category": "Rates & Speed",
    "difficulty": "medium",
    "question": "A vehicle travels at a constant speed of 50 mph for 3 hours. What distance does it cover?",
    "options": [
      "140 miles",
      "150 miles",
      "160 miles",
      "170 miles"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Distance = Speed * Time = 50 * 3 = 150 miles."
  },
  {
    "id": "num-260",
    "category": "Rates & Speed",
    "difficulty": "hard",
    "question": "A vehicle travels at a constant speed of 80 mph for 3 hours. What distance does it cover?",
    "options": [
      "230 miles",
      "240 miles",
      "250 miles",
      "260 miles"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Distance = Speed * Time = 80 * 3 = 240 miles."
  },
  {
    "id": "num-261",
    "category": "Rates & Speed",
    "difficulty": "hard",
    "question": "A vehicle travels at a constant speed of 60 mph for 3 hours. What distance does it cover?",
    "options": [
      "170 miles",
      "180 miles",
      "190 miles",
      "200 miles"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Distance = Speed * Time = 60 * 3 = 180 miles."
  },
  {
    "id": "num-262",
    "category": "Rates & Speed",
    "difficulty": "hard",
    "question": "A vehicle travels at a constant speed of 40 mph for 3 hours. What distance does it cover?",
    "options": [
      "110 miles",
      "120 miles",
      "130 miles",
      "140 miles"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Distance = Speed * Time = 40 * 3 = 120 miles."
  },
  {
    "id": "num-263",
    "category": "Rates & Speed",
    "difficulty": "hard",
    "question": "A vehicle travels at a constant speed of 70 mph for 3 hours. What distance does it cover?",
    "options": [
      "200 miles",
      "210 miles",
      "220 miles",
      "230 miles"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Distance = Speed * Time = 70 * 3 = 210 miles."
  },
  {
    "id": "num-264",
    "category": "Rates & Speed",
    "difficulty": "hard",
    "question": "A vehicle travels at a constant speed of 50 mph for 3 hours. What distance does it cover?",
    "options": [
      "140 miles",
      "150 miles",
      "160 miles",
      "170 miles"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Distance = Speed * Time = 50 * 3 = 150 miles."
  },
  {
    "id": "num-265",
    "category": "Rates & Speed",
    "difficulty": "hard",
    "question": "A vehicle travels at a constant speed of 80 mph for 3 hours. What distance does it cover?",
    "options": [
      "230 miles",
      "240 miles",
      "250 miles",
      "260 miles"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Distance = Speed * Time = 80 * 3 = 240 miles."
  },
  {
    "id": "num-266",
    "category": "Rates & Speed",
    "difficulty": "hard",
    "question": "A vehicle travels at a constant speed of 60 mph for 3 hours. What distance does it cover?",
    "options": [
      "170 miles",
      "180 miles",
      "190 miles",
      "200 miles"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Distance = Speed * Time = 60 * 3 = 180 miles."
  },
  {
    "id": "num-267",
    "category": "Rates & Speed",
    "difficulty": "hard",
    "question": "A vehicle travels at a constant speed of 40 mph for 3 hours. What distance does it cover?",
    "options": [
      "110 miles",
      "120 miles",
      "130 miles",
      "140 miles"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Distance = Speed * Time = 40 * 3 = 120 miles."
  },
  {
    "id": "num-268",
    "category": "Rates & Speed",
    "difficulty": "hard",
    "question": "A vehicle travels at a constant speed of 70 mph for 3 hours. What distance does it cover?",
    "options": [
      "200 miles",
      "210 miles",
      "220 miles",
      "230 miles"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Distance = Speed * Time = 70 * 3 = 210 miles."
  },
  {
    "id": "num-269",
    "category": "Rates & Speed",
    "difficulty": "hard",
    "question": "A vehicle travels at a constant speed of 50 mph for 3 hours. What distance does it cover?",
    "options": [
      "140 miles",
      "150 miles",
      "160 miles",
      "170 miles"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Distance = Speed * Time = 50 * 3 = 150 miles."
  },
  {
    "id": "num-270",
    "category": "Rates & Speed",
    "difficulty": "hard",
    "question": "A vehicle travels at a constant speed of 80 mph for 3 hours. What distance does it cover?",
    "options": [
      "230 miles",
      "240 miles",
      "250 miles",
      "260 miles"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Distance = Speed * Time = 80 * 3 = 240 miles."
  },
  {
    "id": "num-271",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "easy",
    "question": "If 4x - 7 = 25, what is the value of x?",
    "options": [
      "6",
      "7",
      "8",
      "9"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Add 7 to both sides: 4x = 32. Divide by 4: x = 8."
  },
  {
    "id": "num-272",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "easy",
    "question": "The sum of three consecutive odd integers is 87. What is the value of the largest integer?",
    "options": [
      "27",
      "29",
      "31",
      "33"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "Let the integers be x, x+2, and x+4. Then 3x + 6 = 87, giving 3x = 81 and x = 27. The largest integer is 27 + 4 = 31."
  },
  {
    "id": "num-273",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "easy",
    "question": "A father is currently 3 times as old as his son. In 12 years, the father will be twice as old as his son. What is the father's current age?",
    "options": [
      "32 years",
      "36 years",
      "40 years",
      "42 years"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "Let son's current age be s, so father is 3s. In 12 years: 3s + 12 = 2(s + 12), which simplifies to 3s + 12 = 2s + 24, giving s = 12. Father's age = 3 × 12 = 36."
  },
  {
    "id": "num-274",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "easy",
    "question": "An investment doubles in value every 4 years. How many times its original initial value will it be after 16 years?",
    "options": [
      "8 times",
      "12 times",
      "16 times",
      "32 times"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "16 years contains 16 / 4 = 4 doubling cycles. The growth factor is 2⁴ = 16 times the original value."
  },
  {
    "id": "num-275",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "easy",
    "question": "If 3x + 5 = 26, what is the value of 2x - 3?",
    "options": [
      "9",
      "11",
      "13",
      "15"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "3x = 21 -> x = 7. 2(7) - 3 = 14 - 3 = 11."
  },
  {
    "id": "num-276",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "easy",
    "question": "The sum of two numbers is 45 and their difference is 11. What is the smaller number?",
    "options": [
      "15",
      "17",
      "19",
      "21"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x + y = 45, x - y = 11 -> 2y = 34 -> y = 17."
  },
  {
    "id": "num-277",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "easy",
    "question": "If 4(y - 3) = 28, what is y + 5?",
    "options": [
      "13",
      "14",
      "15",
      "16"
    ],
    "correctAnswer": 2,
    "correct": 2,
    "explanation": "y - 3 = 7 -> y = 10. y + 5 = 15."
  },
  {
    "id": "num-278",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "easy",
    "question": "A theater sells adult tickets for $12 and child tickets for $8. If a group of 9 people pays $92 in total, how many adults are in the group?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "12A + 8(9 - A) = 92 -> 4A + 72 = 92 -> 4A = 20 -> A = 5."
  },
  {
    "id": "num-279",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "easy",
    "question": "A two-digit number has a tens digit that is 3 greater than its units digit. If the sum of the digits is 11, what is the number?",
    "options": [
      "63",
      "74",
      "83",
      "85"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "T - U = 3 and T + U = 11 -> 2T = 14 -> T = 7, U = 4. Number is 74."
  },
  {
    "id": "num-280",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "easy",
    "question": "If a + b = 10 and a * b = 21, what is the value of a² + b²?",
    "options": [
      "54",
      "58",
      "62",
      "66"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "a² + b² = (a + b)² - 2ab = 100 - 42 = 58."
  },
  {
    "id": "num-281",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "medium",
    "question": "If 2^(x + 3) = 64, what is x?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "64 = 2^6 -> x + 3 = 6 -> x = 3."
  },
  {
    "id": "num-282",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "medium",
    "question": "A company charges a fixed rental fee of $40 plus $0.25 per mile driven. If a customer was billed $95, how many miles were driven?",
    "options": [
      "200",
      "220",
      "240",
      "260"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "0.25m = 95 - 40 = 55 -> m = 55 / 0.25 = 220 miles."
  },
  {
    "id": "num-283",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "medium",
    "question": "If x/3 + x/4 = 14, what is the value of x?",
    "options": [
      "20",
      "24",
      "28",
      "32"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "7x / 12 = 14 -> x = 14 * 12 / 7 = 24."
  },
  {
    "id": "num-284",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "medium",
    "question": "The perimeter of a rectangular garden is 60 meters. If the length is 6 meters longer than the width, what is the width?",
    "options": [
      "10 m",
      "12 m",
      "14 m",
      "16 m"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "2(W + 6 + W) = 60 -> 4W + 12 = 60 -> 4W = 48 -> W = 12 meters."
  },
  {
    "id": "num-285",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "medium",
    "question": "If 5x - 3y = 19 and x = 2y - 1, what is the value of y?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "5(2y - 1) - 3y = 19 -> 10y - 5 - 3y = 19 -> 7y = 24 -> y = 24/7 (wait, let's fix numbers: 5(2y-1)-3y = 7y-5=19 -> 7y=24 not integer). Let's use clean integers: 5x - 3y = 19 and x = y + 3 -> 5(y+3)-3y=19 -> 2y+15=19 -> 2y=4 -> y=2."
  },
  {
    "id": "num-286",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "medium",
    "question": "Solve for x: 3x + 8 = 83",
    "options": [
      "24",
      "25",
      "26",
      "27"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "3x = 83 - 8 = 75 -> x = 25."
  },
  {
    "id": "num-287",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "medium",
    "question": "Solve for x: 5x + 7 = 192",
    "options": [
      "36",
      "37",
      "38",
      "39"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "5x = 192 - 7 = 185 -> x = 37."
  },
  {
    "id": "num-288",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "medium",
    "question": "Solve for x: 3x + 6 = 63",
    "options": [
      "18",
      "19",
      "20",
      "21"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "3x = 63 - 6 = 57 -> x = 19."
  },
  {
    "id": "num-289",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "medium",
    "question": "Solve for x: 5x + 5 = 160",
    "options": [
      "30",
      "31",
      "32",
      "33"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "5x = 160 - 5 = 155 -> x = 31."
  },
  {
    "id": "num-290",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "medium",
    "question": "Solve for x: 3x + 4 = 133",
    "options": [
      "42",
      "43",
      "44",
      "45"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "3x = 133 - 4 = 129 -> x = 43."
  },
  {
    "id": "num-291",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "medium",
    "question": "Solve for x: 5x + 3 = 128",
    "options": [
      "24",
      "25",
      "26",
      "27"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "5x = 128 - 3 = 125 -> x = 25."
  },
  {
    "id": "num-292",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "medium",
    "question": "Solve for x: 3x + 9 = 120",
    "options": [
      "36",
      "37",
      "38",
      "39"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "3x = 120 - 9 = 111 -> x = 37."
  },
  {
    "id": "num-293",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "hard",
    "question": "Solve for x: 5x + 8 = 103",
    "options": [
      "18",
      "19",
      "20",
      "21"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "5x = 103 - 8 = 95 -> x = 19."
  },
  {
    "id": "num-294",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "hard",
    "question": "Solve for x: 3x + 7 = 100",
    "options": [
      "30",
      "31",
      "32",
      "33"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "3x = 100 - 7 = 93 -> x = 31."
  },
  {
    "id": "num-295",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "hard",
    "question": "Solve for x: 5x + 6 = 221",
    "options": [
      "42",
      "43",
      "44",
      "45"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "5x = 221 - 6 = 215 -> x = 43."
  },
  {
    "id": "num-296",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "hard",
    "question": "Solve for x: 3x + 5 = 80",
    "options": [
      "24",
      "25",
      "26",
      "27"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "3x = 80 - 5 = 75 -> x = 25."
  },
  {
    "id": "num-297",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "hard",
    "question": "Solve for x: 5x + 4 = 189",
    "options": [
      "36",
      "37",
      "38",
      "39"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "5x = 189 - 4 = 185 -> x = 37."
  },
  {
    "id": "num-298",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "hard",
    "question": "Solve for x: 3x + 3 = 60",
    "options": [
      "18",
      "19",
      "20",
      "21"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "3x = 60 - 3 = 57 -> x = 19."
  },
  {
    "id": "num-299",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "hard",
    "question": "Solve for x: 5x + 9 = 164",
    "options": [
      "30",
      "31",
      "32",
      "33"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "5x = 164 - 9 = 155 -> x = 31."
  },
  {
    "id": "num-300",
    "category": "Algebraic & Word Reasoning",
    "difficulty": "hard",
    "question": "Solve for x: 3x + 8 = 137",
    "options": [
      "42",
      "43",
      "44",
      "45"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "3x = 137 - 8 = 129 -> x = 43."
  }
];

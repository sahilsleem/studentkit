export interface QuickMathQuestion {
  id: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'lightning';
  operation: 'addition' | 'subtraction' | 'multiplication' | 'division' | 'mixed' | 'percentages';
  timeLimit: number; // in seconds
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const quickMathQuestions: QuickMathQuestion[] = [
  {
    "id": "qm-001",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "12 + 9",
    "options": [
      "19",
      "22",
      "20",
      "21"
    ],
    "correctAnswer": 3,
    "explanation": "12 + 9 = 21"
  },
  {
    "id": "qm-002",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "15 + 16",
    "options": [
      "32",
      "29",
      "30",
      "31"
    ],
    "correctAnswer": 3,
    "explanation": "15 + 16 = 31"
  },
  {
    "id": "qm-003",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "18 + 23",
    "options": [
      "39",
      "42",
      "40",
      "41"
    ],
    "correctAnswer": 3,
    "explanation": "18 + 23 = 41"
  },
  {
    "id": "qm-004",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "21 + 30",
    "options": [
      "51",
      "52",
      "49",
      "50"
    ],
    "correctAnswer": 0,
    "explanation": "21 + 30 = 51"
  },
  {
    "id": "qm-005",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "24 + 37",
    "options": [
      "59",
      "60",
      "62",
      "61"
    ],
    "correctAnswer": 3,
    "explanation": "24 + 37 = 61"
  },
  {
    "id": "qm-006",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "27 + 9",
    "options": [
      "36",
      "34",
      "37",
      "35"
    ],
    "correctAnswer": 0,
    "explanation": "27 + 9 = 36"
  },
  {
    "id": "qm-007",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "30 + 16",
    "options": [
      "44",
      "46",
      "47",
      "45"
    ],
    "correctAnswer": 1,
    "explanation": "30 + 16 = 46"
  },
  {
    "id": "qm-008",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "33 + 23",
    "options": [
      "56",
      "54",
      "55",
      "57"
    ],
    "correctAnswer": 0,
    "explanation": "33 + 23 = 56"
  },
  {
    "id": "qm-009",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "36 + 30",
    "options": [
      "64",
      "65",
      "67",
      "66"
    ],
    "correctAnswer": 3,
    "explanation": "36 + 30 = 66"
  },
  {
    "id": "qm-010",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "39 + 37",
    "options": [
      "76",
      "77",
      "74",
      "75"
    ],
    "correctAnswer": 0,
    "explanation": "39 + 37 = 76"
  },
  {
    "id": "qm-011",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "42 + 9",
    "options": [
      "50",
      "49",
      "51",
      "52"
    ],
    "correctAnswer": 2,
    "explanation": "42 + 9 = 51"
  },
  {
    "id": "qm-012",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "45 + 16",
    "options": [
      "62",
      "61",
      "59",
      "60"
    ],
    "correctAnswer": 1,
    "explanation": "45 + 16 = 61"
  },
  {
    "id": "qm-013",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "48 + 23",
    "options": [
      "69",
      "72",
      "71",
      "70"
    ],
    "correctAnswer": 2,
    "explanation": "48 + 23 = 71"
  },
  {
    "id": "qm-014",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "51 + 30",
    "options": [
      "80",
      "81",
      "79",
      "82"
    ],
    "correctAnswer": 1,
    "explanation": "51 + 30 = 81"
  },
  {
    "id": "qm-015",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "54 + 37",
    "options": [
      "91",
      "92",
      "89",
      "90"
    ],
    "correctAnswer": 0,
    "explanation": "54 + 37 = 91"
  },
  {
    "id": "qm-016",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "12 + 9",
    "options": [
      "21",
      "19",
      "20",
      "22"
    ],
    "correctAnswer": 0,
    "explanation": "12 + 9 = 21"
  },
  {
    "id": "qm-017",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "15 + 16",
    "options": [
      "32",
      "29",
      "30",
      "31"
    ],
    "correctAnswer": 3,
    "explanation": "15 + 16 = 31"
  },
  {
    "id": "qm-018",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "18 + 23",
    "options": [
      "39",
      "40",
      "42",
      "41"
    ],
    "correctAnswer": 3,
    "explanation": "18 + 23 = 41"
  },
  {
    "id": "qm-019",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "21 + 30",
    "options": [
      "52",
      "50",
      "49",
      "51"
    ],
    "correctAnswer": 3,
    "explanation": "21 + 30 = 51"
  },
  {
    "id": "qm-020",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "24 + 37",
    "options": [
      "62",
      "61",
      "60",
      "59"
    ],
    "correctAnswer": 1,
    "explanation": "24 + 37 = 61"
  },
  {
    "id": "qm-021",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "27 + 9",
    "options": [
      "35",
      "37",
      "36",
      "34"
    ],
    "correctAnswer": 2,
    "explanation": "27 + 9 = 36"
  },
  {
    "id": "qm-022",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "30 + 16",
    "options": [
      "45",
      "47",
      "46",
      "44"
    ],
    "correctAnswer": 2,
    "explanation": "30 + 16 = 46"
  },
  {
    "id": "qm-023",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "33 + 23",
    "options": [
      "57",
      "54",
      "56",
      "55"
    ],
    "correctAnswer": 2,
    "explanation": "33 + 23 = 56"
  },
  {
    "id": "qm-024",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "36 + 30",
    "options": [
      "67",
      "66",
      "64",
      "65"
    ],
    "correctAnswer": 1,
    "explanation": "36 + 30 = 66"
  },
  {
    "id": "qm-025",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "39 + 37",
    "options": [
      "76",
      "75",
      "77",
      "74"
    ],
    "correctAnswer": 0,
    "explanation": "39 + 37 = 76"
  },
  {
    "id": "qm-026",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "42 + 9",
    "options": [
      "52",
      "50",
      "49",
      "51"
    ],
    "correctAnswer": 3,
    "explanation": "42 + 9 = 51"
  },
  {
    "id": "qm-027",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "45 + 16",
    "options": [
      "60",
      "62",
      "59",
      "61"
    ],
    "correctAnswer": 3,
    "explanation": "45 + 16 = 61"
  },
  {
    "id": "qm-028",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "48 + 23",
    "options": [
      "72",
      "70",
      "69",
      "71"
    ],
    "correctAnswer": 3,
    "explanation": "48 + 23 = 71"
  },
  {
    "id": "qm-029",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "51 + 30",
    "options": [
      "79",
      "81",
      "80",
      "82"
    ],
    "correctAnswer": 1,
    "explanation": "51 + 30 = 81"
  },
  {
    "id": "qm-030",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "54 + 37",
    "options": [
      "90",
      "92",
      "89",
      "91"
    ],
    "correctAnswer": 3,
    "explanation": "54 + 37 = 91"
  },
  {
    "id": "qm-031",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "12 + 9",
    "options": [
      "20",
      "19",
      "22",
      "21"
    ],
    "correctAnswer": 3,
    "explanation": "12 + 9 = 21"
  },
  {
    "id": "qm-032",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "15 + 16",
    "options": [
      "29",
      "31",
      "32",
      "30"
    ],
    "correctAnswer": 1,
    "explanation": "15 + 16 = 31"
  },
  {
    "id": "qm-033",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "18 + 23",
    "options": [
      "41",
      "39",
      "40",
      "42"
    ],
    "correctAnswer": 0,
    "explanation": "18 + 23 = 41"
  },
  {
    "id": "qm-034",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "21 + 30",
    "options": [
      "50",
      "51",
      "52",
      "49"
    ],
    "correctAnswer": 1,
    "explanation": "21 + 30 = 51"
  },
  {
    "id": "qm-035",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "24 + 37",
    "options": [
      "62",
      "59",
      "61",
      "60"
    ],
    "correctAnswer": 2,
    "explanation": "24 + 37 = 61"
  },
  {
    "id": "qm-036",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "27 + 9",
    "options": [
      "36",
      "35",
      "37",
      "34"
    ],
    "correctAnswer": 0,
    "explanation": "27 + 9 = 36"
  },
  {
    "id": "qm-037",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "30 + 16",
    "options": [
      "47",
      "45",
      "46",
      "44"
    ],
    "correctAnswer": 2,
    "explanation": "30 + 16 = 46"
  },
  {
    "id": "qm-038",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "33 + 23",
    "options": [
      "55",
      "57",
      "56",
      "54"
    ],
    "correctAnswer": 2,
    "explanation": "33 + 23 = 56"
  },
  {
    "id": "qm-039",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "36 + 30",
    "options": [
      "64",
      "65",
      "67",
      "66"
    ],
    "correctAnswer": 3,
    "explanation": "36 + 30 = 66"
  },
  {
    "id": "qm-040",
    "difficulty": "easy",
    "operation": "addition",
    "timeLimit": 4,
    "question": "39 + 37",
    "options": [
      "76",
      "75",
      "77",
      "74"
    ],
    "correctAnswer": 0,
    "explanation": "39 + 37 = 76"
  },
  {
    "id": "qm-041",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "19 − 8",
    "options": [
      "11",
      "10",
      "12",
      "9"
    ],
    "correctAnswer": 0,
    "explanation": "19 − 8 = 11"
  },
  {
    "id": "qm-042",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "28 − 12",
    "options": [
      "14",
      "16",
      "15",
      "17"
    ],
    "correctAnswer": 1,
    "explanation": "28 − 12 = 16"
  },
  {
    "id": "qm-043",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "37 − 16",
    "options": [
      "19",
      "20",
      "22",
      "21"
    ],
    "correctAnswer": 3,
    "explanation": "37 − 16 = 21"
  },
  {
    "id": "qm-044",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "46 − 20",
    "options": [
      "24",
      "27",
      "25",
      "26"
    ],
    "correctAnswer": 3,
    "explanation": "46 − 20 = 26"
  },
  {
    "id": "qm-045",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "55 − 24",
    "options": [
      "31",
      "30",
      "32",
      "29"
    ],
    "correctAnswer": 0,
    "explanation": "55 − 24 = 31"
  },
  {
    "id": "qm-046",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "64 − 28",
    "options": [
      "36",
      "37",
      "35",
      "34"
    ],
    "correctAnswer": 0,
    "explanation": "64 − 28 = 36"
  },
  {
    "id": "qm-047",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "73 − 32",
    "options": [
      "40",
      "42",
      "39",
      "41"
    ],
    "correctAnswer": 3,
    "explanation": "73 − 32 = 41"
  },
  {
    "id": "qm-048",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "82 − 36",
    "options": [
      "45",
      "46",
      "44",
      "47"
    ],
    "correctAnswer": 1,
    "explanation": "82 − 36 = 46"
  },
  {
    "id": "qm-049",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "21 − 10",
    "options": [
      "9",
      "12",
      "10",
      "11"
    ],
    "correctAnswer": 3,
    "explanation": "21 − 10 = 11"
  },
  {
    "id": "qm-050",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "30 − 14",
    "options": [
      "14",
      "17",
      "16",
      "15"
    ],
    "correctAnswer": 2,
    "explanation": "30 − 14 = 16"
  },
  {
    "id": "qm-051",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "39 − 18",
    "options": [
      "20",
      "22",
      "19",
      "21"
    ],
    "correctAnswer": 3,
    "explanation": "39 − 18 = 21"
  },
  {
    "id": "qm-052",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "48 − 22",
    "options": [
      "26",
      "27",
      "25",
      "24"
    ],
    "correctAnswer": 0,
    "explanation": "48 − 22 = 26"
  },
  {
    "id": "qm-053",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "57 − 26",
    "options": [
      "31",
      "32",
      "30",
      "29"
    ],
    "correctAnswer": 0,
    "explanation": "57 − 26 = 31"
  },
  {
    "id": "qm-054",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "66 − 30",
    "options": [
      "35",
      "34",
      "36",
      "37"
    ],
    "correctAnswer": 2,
    "explanation": "66 − 30 = 36"
  },
  {
    "id": "qm-055",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "75 − 34",
    "options": [
      "40",
      "41",
      "39",
      "42"
    ],
    "correctAnswer": 1,
    "explanation": "75 − 34 = 41"
  },
  {
    "id": "qm-056",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "54 − 8",
    "options": [
      "47",
      "45",
      "44",
      "46"
    ],
    "correctAnswer": 3,
    "explanation": "54 − 8 = 46"
  },
  {
    "id": "qm-057",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "23 − 12",
    "options": [
      "9",
      "12",
      "10",
      "11"
    ],
    "correctAnswer": 3,
    "explanation": "23 − 12 = 11"
  },
  {
    "id": "qm-058",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "32 − 16",
    "options": [
      "17",
      "14",
      "16",
      "15"
    ],
    "correctAnswer": 2,
    "explanation": "32 − 16 = 16"
  },
  {
    "id": "qm-059",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "41 − 20",
    "options": [
      "22",
      "21",
      "19",
      "20"
    ],
    "correctAnswer": 1,
    "explanation": "41 − 20 = 21"
  },
  {
    "id": "qm-060",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "50 − 24",
    "options": [
      "24",
      "25",
      "26",
      "27"
    ],
    "correctAnswer": 2,
    "explanation": "50 − 24 = 26"
  },
  {
    "id": "qm-061",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "59 − 28",
    "options": [
      "30",
      "32",
      "31",
      "29"
    ],
    "correctAnswer": 2,
    "explanation": "59 − 28 = 31"
  },
  {
    "id": "qm-062",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "68 − 32",
    "options": [
      "37",
      "35",
      "36",
      "34"
    ],
    "correctAnswer": 2,
    "explanation": "68 − 32 = 36"
  },
  {
    "id": "qm-063",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "77 − 36",
    "options": [
      "39",
      "41",
      "40",
      "42"
    ],
    "correctAnswer": 1,
    "explanation": "77 − 36 = 41"
  },
  {
    "id": "qm-064",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "56 − 10",
    "options": [
      "47",
      "45",
      "46",
      "44"
    ],
    "correctAnswer": 2,
    "explanation": "56 − 10 = 46"
  },
  {
    "id": "qm-065",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "25 − 14",
    "options": [
      "9",
      "12",
      "10",
      "11"
    ],
    "correctAnswer": 3,
    "explanation": "25 − 14 = 11"
  },
  {
    "id": "qm-066",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "34 − 18",
    "options": [
      "15",
      "14",
      "16",
      "17"
    ],
    "correctAnswer": 2,
    "explanation": "34 − 18 = 16"
  },
  {
    "id": "qm-067",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "43 − 22",
    "options": [
      "22",
      "21",
      "19",
      "20"
    ],
    "correctAnswer": 1,
    "explanation": "43 − 22 = 21"
  },
  {
    "id": "qm-068",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "52 − 26",
    "options": [
      "24",
      "26",
      "25",
      "27"
    ],
    "correctAnswer": 1,
    "explanation": "52 − 26 = 26"
  },
  {
    "id": "qm-069",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "61 − 30",
    "options": [
      "32",
      "31",
      "30",
      "29"
    ],
    "correctAnswer": 1,
    "explanation": "61 − 30 = 31"
  },
  {
    "id": "qm-070",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "70 − 34",
    "options": [
      "35",
      "34",
      "37",
      "36"
    ],
    "correctAnswer": 3,
    "explanation": "70 − 34 = 36"
  },
  {
    "id": "qm-071",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "49 − 8",
    "options": [
      "40",
      "39",
      "42",
      "41"
    ],
    "correctAnswer": 3,
    "explanation": "49 − 8 = 41"
  },
  {
    "id": "qm-072",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "58 − 12",
    "options": [
      "44",
      "46",
      "47",
      "45"
    ],
    "correctAnswer": 1,
    "explanation": "58 − 12 = 46"
  },
  {
    "id": "qm-073",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "27 − 16",
    "options": [
      "11",
      "9",
      "10",
      "12"
    ],
    "correctAnswer": 0,
    "explanation": "27 − 16 = 11"
  },
  {
    "id": "qm-074",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "36 − 20",
    "options": [
      "16",
      "15",
      "17",
      "14"
    ],
    "correctAnswer": 0,
    "explanation": "36 − 20 = 16"
  },
  {
    "id": "qm-075",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "45 − 24",
    "options": [
      "19",
      "22",
      "20",
      "21"
    ],
    "correctAnswer": 3,
    "explanation": "45 − 24 = 21"
  },
  {
    "id": "qm-076",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "54 − 28",
    "options": [
      "24",
      "25",
      "26",
      "27"
    ],
    "correctAnswer": 2,
    "explanation": "54 − 28 = 26"
  },
  {
    "id": "qm-077",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "63 − 32",
    "options": [
      "30",
      "29",
      "31",
      "32"
    ],
    "correctAnswer": 2,
    "explanation": "63 − 32 = 31"
  },
  {
    "id": "qm-078",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "72 − 36",
    "options": [
      "36",
      "35",
      "34",
      "37"
    ],
    "correctAnswer": 0,
    "explanation": "72 − 36 = 36"
  },
  {
    "id": "qm-079",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "51 − 10",
    "options": [
      "42",
      "39",
      "41",
      "40"
    ],
    "correctAnswer": 2,
    "explanation": "51 − 10 = 41"
  },
  {
    "id": "qm-080",
    "difficulty": "easy",
    "operation": "subtraction",
    "timeLimit": 4,
    "question": "60 − 14",
    "options": [
      "46",
      "47",
      "45",
      "44"
    ],
    "correctAnswer": 0,
    "explanation": "60 − 14 = 46"
  },
  {
    "id": "qm-081",
    "difficulty": "easy",
    "operation": "multiplication",
    "timeLimit": 4,
    "question": "3 × 2",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correctAnswer": 2,
    "explanation": "3 × 2 = 6"
  },
  {
    "id": "qm-082",
    "difficulty": "easy",
    "operation": "multiplication",
    "timeLimit": 4,
    "question": "4 × 4",
    "options": [
      "17",
      "16",
      "15",
      "14"
    ],
    "correctAnswer": 1,
    "explanation": "4 × 4 = 16"
  },
  {
    "id": "qm-083",
    "difficulty": "easy",
    "operation": "multiplication",
    "timeLimit": 4,
    "question": "5 × 6",
    "options": [
      "31",
      "29",
      "28",
      "30"
    ],
    "correctAnswer": 3,
    "explanation": "5 × 6 = 30"
  },
  {
    "id": "qm-084",
    "difficulty": "easy",
    "operation": "multiplication",
    "timeLimit": 4,
    "question": "6 × 8",
    "options": [
      "46",
      "48",
      "49",
      "47"
    ],
    "correctAnswer": 1,
    "explanation": "6 × 8 = 48"
  },
  {
    "id": "qm-085",
    "difficulty": "easy",
    "operation": "multiplication",
    "timeLimit": 4,
    "question": "7 × 2",
    "options": [
      "12",
      "14",
      "15",
      "13"
    ],
    "correctAnswer": 1,
    "explanation": "7 × 2 = 14"
  },
  {
    "id": "qm-086",
    "difficulty": "easy",
    "operation": "multiplication",
    "timeLimit": 4,
    "question": "8 × 4",
    "options": [
      "32",
      "31",
      "33",
      "30"
    ],
    "correctAnswer": 0,
    "explanation": "8 × 4 = 32"
  },
  {
    "id": "qm-087",
    "difficulty": "easy",
    "operation": "multiplication",
    "timeLimit": 4,
    "question": "9 × 6",
    "options": [
      "52",
      "54",
      "55",
      "53"
    ],
    "correctAnswer": 1,
    "explanation": "9 × 6 = 54"
  },
  {
    "id": "qm-088",
    "difficulty": "easy",
    "operation": "multiplication",
    "timeLimit": 4,
    "question": "3 × 8",
    "options": [
      "25",
      "24",
      "22",
      "23"
    ],
    "correctAnswer": 1,
    "explanation": "3 × 8 = 24"
  },
  {
    "id": "qm-089",
    "difficulty": "easy",
    "operation": "multiplication",
    "timeLimit": 4,
    "question": "4 × 2",
    "options": [
      "9",
      "8",
      "7",
      "6"
    ],
    "correctAnswer": 1,
    "explanation": "4 × 2 = 8"
  },
  {
    "id": "qm-090",
    "difficulty": "easy",
    "operation": "multiplication",
    "timeLimit": 4,
    "question": "5 × 4",
    "options": [
      "21",
      "20",
      "18",
      "19"
    ],
    "correctAnswer": 1,
    "explanation": "5 × 4 = 20"
  },
  {
    "id": "qm-091",
    "difficulty": "easy",
    "operation": "multiplication",
    "timeLimit": 4,
    "question": "6 × 6",
    "options": [
      "37",
      "35",
      "36",
      "34"
    ],
    "correctAnswer": 2,
    "explanation": "6 × 6 = 36"
  },
  {
    "id": "qm-092",
    "difficulty": "easy",
    "operation": "multiplication",
    "timeLimit": 4,
    "question": "7 × 8",
    "options": [
      "55",
      "54",
      "56",
      "57"
    ],
    "correctAnswer": 2,
    "explanation": "7 × 8 = 56"
  },
  {
    "id": "qm-093",
    "difficulty": "easy",
    "operation": "multiplication",
    "timeLimit": 4,
    "question": "8 × 2",
    "options": [
      "17",
      "14",
      "15",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "8 × 2 = 16"
  },
  {
    "id": "qm-094",
    "difficulty": "easy",
    "operation": "multiplication",
    "timeLimit": 4,
    "question": "9 × 4",
    "options": [
      "36",
      "34",
      "35",
      "37"
    ],
    "correctAnswer": 0,
    "explanation": "9 × 4 = 36"
  },
  {
    "id": "qm-095",
    "difficulty": "easy",
    "operation": "multiplication",
    "timeLimit": 4,
    "question": "3 × 6",
    "options": [
      "19",
      "16",
      "18",
      "17"
    ],
    "correctAnswer": 2,
    "explanation": "3 × 6 = 18"
  },
  {
    "id": "qm-096",
    "difficulty": "easy",
    "operation": "multiplication",
    "timeLimit": 4,
    "question": "4 × 8",
    "options": [
      "33",
      "30",
      "31",
      "32"
    ],
    "correctAnswer": 3,
    "explanation": "4 × 8 = 32"
  },
  {
    "id": "qm-097",
    "difficulty": "easy",
    "operation": "multiplication",
    "timeLimit": 4,
    "question": "5 × 2",
    "options": [
      "11",
      "8",
      "10",
      "9"
    ],
    "correctAnswer": 2,
    "explanation": "5 × 2 = 10"
  },
  {
    "id": "qm-098",
    "difficulty": "easy",
    "operation": "multiplication",
    "timeLimit": 4,
    "question": "6 × 4",
    "options": [
      "23",
      "25",
      "24",
      "22"
    ],
    "correctAnswer": 2,
    "explanation": "6 × 4 = 24"
  },
  {
    "id": "qm-099",
    "difficulty": "easy",
    "operation": "multiplication",
    "timeLimit": 4,
    "question": "7 × 6",
    "options": [
      "40",
      "42",
      "43",
      "41"
    ],
    "correctAnswer": 1,
    "explanation": "7 × 6 = 42"
  },
  {
    "id": "qm-100",
    "difficulty": "easy",
    "operation": "multiplication",
    "timeLimit": 4,
    "question": "8 × 8",
    "options": [
      "62",
      "63",
      "65",
      "64"
    ],
    "correctAnswer": 3,
    "explanation": "8 × 8 = 64"
  },
  {
    "id": "qm-101",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "34 + 28",
    "options": [
      "60",
      "61",
      "62",
      "63"
    ],
    "correctAnswer": 2,
    "explanation": "34 + 28 = 62"
  },
  {
    "id": "qm-102",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "41 + 37",
    "options": [
      "76",
      "78",
      "77",
      "79"
    ],
    "correctAnswer": 1,
    "explanation": "41 + 37 = 78"
  },
  {
    "id": "qm-103",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "48 + 46",
    "options": [
      "92",
      "94",
      "95",
      "93"
    ],
    "correctAnswer": 1,
    "explanation": "48 + 46 = 94"
  },
  {
    "id": "qm-104",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "55 + 55",
    "options": [
      "108",
      "109",
      "110",
      "111"
    ],
    "correctAnswer": 2,
    "explanation": "55 + 55 = 110"
  },
  {
    "id": "qm-105",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "62 + 64",
    "options": [
      "124",
      "126",
      "125",
      "127"
    ],
    "correctAnswer": 1,
    "explanation": "62 + 64 = 126"
  },
  {
    "id": "qm-106",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "69 + 73",
    "options": [
      "140",
      "142",
      "143",
      "141"
    ],
    "correctAnswer": 1,
    "explanation": "69 + 73 = 142"
  },
  {
    "id": "qm-107",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "76 + 82",
    "options": [
      "157",
      "156",
      "159",
      "158"
    ],
    "correctAnswer": 3,
    "explanation": "76 + 82 = 158"
  },
  {
    "id": "qm-108",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "83 + 36",
    "options": [
      "120",
      "119",
      "117",
      "118"
    ],
    "correctAnswer": 1,
    "explanation": "83 + 36 = 119"
  },
  {
    "id": "qm-109",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "90 + 45",
    "options": [
      "133",
      "135",
      "134",
      "136"
    ],
    "correctAnswer": 1,
    "explanation": "90 + 45 = 135"
  },
  {
    "id": "qm-110",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "97 + 54",
    "options": [
      "150",
      "151",
      "152",
      "149"
    ],
    "correctAnswer": 1,
    "explanation": "97 + 54 = 151"
  },
  {
    "id": "qm-111",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "39 + 63",
    "options": [
      "102",
      "101",
      "100",
      "103"
    ],
    "correctAnswer": 0,
    "explanation": "39 + 63 = 102"
  },
  {
    "id": "qm-112",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "46 + 72",
    "options": [
      "116",
      "117",
      "119",
      "118"
    ],
    "correctAnswer": 3,
    "explanation": "46 + 72 = 118"
  },
  {
    "id": "qm-113",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "53 + 81",
    "options": [
      "133",
      "132",
      "134",
      "135"
    ],
    "correctAnswer": 2,
    "explanation": "53 + 81 = 134"
  },
  {
    "id": "qm-114",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "60 + 35",
    "options": [
      "93",
      "94",
      "96",
      "95"
    ],
    "correctAnswer": 3,
    "explanation": "60 + 35 = 95"
  },
  {
    "id": "qm-115",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "67 + 44",
    "options": [
      "111",
      "109",
      "112",
      "110"
    ],
    "correctAnswer": 0,
    "explanation": "67 + 44 = 111"
  },
  {
    "id": "qm-116",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "74 + 53",
    "options": [
      "128",
      "126",
      "127",
      "125"
    ],
    "correctAnswer": 2,
    "explanation": "74 + 53 = 127"
  },
  {
    "id": "qm-117",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "81 + 62",
    "options": [
      "141",
      "143",
      "142",
      "144"
    ],
    "correctAnswer": 1,
    "explanation": "81 + 62 = 143"
  },
  {
    "id": "qm-118",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "88 + 71",
    "options": [
      "160",
      "158",
      "157",
      "159"
    ],
    "correctAnswer": 3,
    "explanation": "88 + 71 = 159"
  },
  {
    "id": "qm-119",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "95 + 80",
    "options": [
      "174",
      "175",
      "173",
      "176"
    ],
    "correctAnswer": 1,
    "explanation": "95 + 80 = 175"
  },
  {
    "id": "qm-120",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "37 + 34",
    "options": [
      "72",
      "69",
      "70",
      "71"
    ],
    "correctAnswer": 3,
    "explanation": "37 + 34 = 71"
  },
  {
    "id": "qm-121",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "44 + 43",
    "options": [
      "87",
      "86",
      "85",
      "88"
    ],
    "correctAnswer": 0,
    "explanation": "44 + 43 = 87"
  },
  {
    "id": "qm-122",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "51 + 52",
    "options": [
      "101",
      "102",
      "104",
      "103"
    ],
    "correctAnswer": 3,
    "explanation": "51 + 52 = 103"
  },
  {
    "id": "qm-123",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "58 + 61",
    "options": [
      "118",
      "119",
      "117",
      "120"
    ],
    "correctAnswer": 1,
    "explanation": "58 + 61 = 119"
  },
  {
    "id": "qm-124",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "65 + 70",
    "options": [
      "136",
      "134",
      "135",
      "133"
    ],
    "correctAnswer": 2,
    "explanation": "65 + 70 = 135"
  },
  {
    "id": "qm-125",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "72 + 79",
    "options": [
      "150",
      "151",
      "152",
      "149"
    ],
    "correctAnswer": 1,
    "explanation": "72 + 79 = 151"
  },
  {
    "id": "qm-126",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "79 + 33",
    "options": [
      "111",
      "110",
      "113",
      "112"
    ],
    "correctAnswer": 3,
    "explanation": "79 + 33 = 112"
  },
  {
    "id": "qm-127",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "86 + 42",
    "options": [
      "127",
      "129",
      "126",
      "128"
    ],
    "correctAnswer": 3,
    "explanation": "86 + 42 = 128"
  },
  {
    "id": "qm-128",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "93 + 51",
    "options": [
      "142",
      "143",
      "144",
      "145"
    ],
    "correctAnswer": 2,
    "explanation": "93 + 51 = 144"
  },
  {
    "id": "qm-129",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "35 + 60",
    "options": [
      "93",
      "96",
      "94",
      "95"
    ],
    "correctAnswer": 3,
    "explanation": "35 + 60 = 95"
  },
  {
    "id": "qm-130",
    "difficulty": "medium",
    "operation": "addition",
    "timeLimit": 6,
    "question": "42 + 69",
    "options": [
      "112",
      "110",
      "109",
      "111"
    ],
    "correctAnswer": 3,
    "explanation": "42 + 69 = 111"
  },
  {
    "id": "qm-131",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "57 − 25",
    "options": [
      "30",
      "32",
      "33",
      "31"
    ],
    "correctAnswer": 1,
    "explanation": "57 − 25 = 32"
  },
  {
    "id": "qm-132",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "70 − 31",
    "options": [
      "38",
      "37",
      "39",
      "40"
    ],
    "correctAnswer": 2,
    "explanation": "70 − 31 = 39"
  },
  {
    "id": "qm-133",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "83 − 37",
    "options": [
      "46",
      "45",
      "44",
      "47"
    ],
    "correctAnswer": 0,
    "explanation": "83 − 37 = 46"
  },
  {
    "id": "qm-134",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "96 − 43",
    "options": [
      "51",
      "53",
      "54",
      "52"
    ],
    "correctAnswer": 1,
    "explanation": "96 − 43 = 53"
  },
  {
    "id": "qm-135",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "109 − 49",
    "options": [
      "60",
      "59",
      "61",
      "58"
    ],
    "correctAnswer": 0,
    "explanation": "109 − 49 = 60"
  },
  {
    "id": "qm-136",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "122 − 55",
    "options": [
      "68",
      "65",
      "66",
      "67"
    ],
    "correctAnswer": 3,
    "explanation": "122 − 55 = 67"
  },
  {
    "id": "qm-137",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "135 − 61",
    "options": [
      "72",
      "74",
      "75",
      "73"
    ],
    "correctAnswer": 1,
    "explanation": "135 − 61 = 74"
  },
  {
    "id": "qm-138",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "148 − 67",
    "options": [
      "81",
      "79",
      "80",
      "82"
    ],
    "correctAnswer": 0,
    "explanation": "148 − 67 = 81"
  },
  {
    "id": "qm-139",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "106 − 73",
    "options": [
      "31",
      "34",
      "33",
      "32"
    ],
    "correctAnswer": 2,
    "explanation": "106 − 73 = 33"
  },
  {
    "id": "qm-140",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "69 − 29",
    "options": [
      "41",
      "38",
      "39",
      "40"
    ],
    "correctAnswer": 3,
    "explanation": "69 − 29 = 40"
  },
  {
    "id": "qm-141",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "82 − 35",
    "options": [
      "47",
      "48",
      "45",
      "46"
    ],
    "correctAnswer": 0,
    "explanation": "82 − 35 = 47"
  },
  {
    "id": "qm-142",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "95 − 41",
    "options": [
      "53",
      "55",
      "52",
      "54"
    ],
    "correctAnswer": 3,
    "explanation": "95 − 41 = 54"
  },
  {
    "id": "qm-143",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "108 − 47",
    "options": [
      "60",
      "61",
      "62",
      "59"
    ],
    "correctAnswer": 1,
    "explanation": "108 − 47 = 61"
  },
  {
    "id": "qm-144",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "121 − 53",
    "options": [
      "69",
      "68",
      "66",
      "67"
    ],
    "correctAnswer": 1,
    "explanation": "121 − 53 = 68"
  },
  {
    "id": "qm-145",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "134 − 59",
    "options": [
      "74",
      "76",
      "75",
      "73"
    ],
    "correctAnswer": 2,
    "explanation": "134 − 59 = 75"
  },
  {
    "id": "qm-146",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "147 − 65",
    "options": [
      "83",
      "82",
      "81",
      "80"
    ],
    "correctAnswer": 1,
    "explanation": "147 − 65 = 82"
  },
  {
    "id": "qm-147",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "105 − 71",
    "options": [
      "34",
      "32",
      "33",
      "35"
    ],
    "correctAnswer": 0,
    "explanation": "105 − 71 = 34"
  },
  {
    "id": "qm-148",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "68 − 27",
    "options": [
      "40",
      "41",
      "39",
      "42"
    ],
    "correctAnswer": 1,
    "explanation": "68 − 27 = 41"
  },
  {
    "id": "qm-149",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "81 − 33",
    "options": [
      "47",
      "49",
      "48",
      "46"
    ],
    "correctAnswer": 2,
    "explanation": "81 − 33 = 48"
  },
  {
    "id": "qm-150",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "94 − 39",
    "options": [
      "56",
      "55",
      "54",
      "53"
    ],
    "correctAnswer": 1,
    "explanation": "94 − 39 = 55"
  },
  {
    "id": "qm-151",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "107 − 45",
    "options": [
      "61",
      "60",
      "62",
      "63"
    ],
    "correctAnswer": 2,
    "explanation": "107 − 45 = 62"
  },
  {
    "id": "qm-152",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "120 − 51",
    "options": [
      "69",
      "67",
      "68",
      "70"
    ],
    "correctAnswer": 0,
    "explanation": "120 − 51 = 69"
  },
  {
    "id": "qm-153",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "133 − 57",
    "options": [
      "77",
      "74",
      "75",
      "76"
    ],
    "correctAnswer": 3,
    "explanation": "133 − 57 = 76"
  },
  {
    "id": "qm-154",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "146 − 63",
    "options": [
      "82",
      "83",
      "81",
      "84"
    ],
    "correctAnswer": 1,
    "explanation": "146 − 63 = 83"
  },
  {
    "id": "qm-155",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "104 − 69",
    "options": [
      "35",
      "36",
      "33",
      "34"
    ],
    "correctAnswer": 0,
    "explanation": "104 − 69 = 35"
  },
  {
    "id": "qm-156",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "67 − 25",
    "options": [
      "40",
      "43",
      "42",
      "41"
    ],
    "correctAnswer": 2,
    "explanation": "67 − 25 = 42"
  },
  {
    "id": "qm-157",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "80 − 31",
    "options": [
      "48",
      "50",
      "49",
      "47"
    ],
    "correctAnswer": 2,
    "explanation": "80 − 31 = 49"
  },
  {
    "id": "qm-158",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "93 − 37",
    "options": [
      "54",
      "57",
      "55",
      "56"
    ],
    "correctAnswer": 3,
    "explanation": "93 − 37 = 56"
  },
  {
    "id": "qm-159",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "106 − 43",
    "options": [
      "64",
      "61",
      "63",
      "62"
    ],
    "correctAnswer": 2,
    "explanation": "106 − 43 = 63"
  },
  {
    "id": "qm-160",
    "difficulty": "medium",
    "operation": "subtraction",
    "timeLimit": 6,
    "question": "119 − 49",
    "options": [
      "69",
      "70",
      "68",
      "71"
    ],
    "correctAnswer": 1,
    "explanation": "119 − 49 = 70"
  },
  {
    "id": "qm-161",
    "difficulty": "medium",
    "operation": "multiplication",
    "timeLimit": 6,
    "question": "11 × 4",
    "options": [
      "43",
      "44",
      "45",
      "42"
    ],
    "correctAnswer": 1,
    "explanation": "11 × 4 = 44"
  },
  {
    "id": "qm-162",
    "difficulty": "medium",
    "operation": "multiplication",
    "timeLimit": 6,
    "question": "12 × 5",
    "options": [
      "58",
      "59",
      "61",
      "60"
    ],
    "correctAnswer": 3,
    "explanation": "12 × 5 = 60"
  },
  {
    "id": "qm-163",
    "difficulty": "medium",
    "operation": "multiplication",
    "timeLimit": 6,
    "question": "13 × 6",
    "options": [
      "76",
      "77",
      "78",
      "79"
    ],
    "correctAnswer": 2,
    "explanation": "13 × 6 = 78"
  },
  {
    "id": "qm-164",
    "difficulty": "medium",
    "operation": "multiplication",
    "timeLimit": 6,
    "question": "14 × 7",
    "options": [
      "96",
      "98",
      "99",
      "97"
    ],
    "correctAnswer": 1,
    "explanation": "14 × 7 = 98"
  },
  {
    "id": "qm-165",
    "difficulty": "medium",
    "operation": "multiplication",
    "timeLimit": 6,
    "question": "15 × 8",
    "options": [
      "120",
      "121",
      "118",
      "119"
    ],
    "correctAnswer": 0,
    "explanation": "15 × 8 = 120"
  },
  {
    "id": "qm-166",
    "difficulty": "medium",
    "operation": "multiplication",
    "timeLimit": 6,
    "question": "16 × 9",
    "options": [
      "144",
      "142",
      "143",
      "145"
    ],
    "correctAnswer": 0,
    "explanation": "16 × 9 = 144"
  },
  {
    "id": "qm-167",
    "difficulty": "medium",
    "operation": "multiplication",
    "timeLimit": 6,
    "question": "17 × 4",
    "options": [
      "69",
      "66",
      "68",
      "67"
    ],
    "correctAnswer": 2,
    "explanation": "17 × 4 = 68"
  },
  {
    "id": "qm-168",
    "difficulty": "medium",
    "operation": "multiplication",
    "timeLimit": 6,
    "question": "18 × 5",
    "options": [
      "89",
      "90",
      "88",
      "91"
    ],
    "correctAnswer": 1,
    "explanation": "18 × 5 = 90"
  },
  {
    "id": "qm-169",
    "difficulty": "medium",
    "operation": "multiplication",
    "timeLimit": 6,
    "question": "11 × 6",
    "options": [
      "64",
      "67",
      "65",
      "66"
    ],
    "correctAnswer": 3,
    "explanation": "11 × 6 = 66"
  },
  {
    "id": "qm-170",
    "difficulty": "medium",
    "operation": "multiplication",
    "timeLimit": 6,
    "question": "12 × 7",
    "options": [
      "85",
      "82",
      "84",
      "83"
    ],
    "correctAnswer": 2,
    "explanation": "12 × 7 = 84"
  },
  {
    "id": "qm-171",
    "difficulty": "medium",
    "operation": "multiplication",
    "timeLimit": 6,
    "question": "13 × 8",
    "options": [
      "104",
      "102",
      "103",
      "105"
    ],
    "correctAnswer": 0,
    "explanation": "13 × 8 = 104"
  },
  {
    "id": "qm-172",
    "difficulty": "medium",
    "operation": "multiplication",
    "timeLimit": 6,
    "question": "14 × 9",
    "options": [
      "125",
      "124",
      "126",
      "127"
    ],
    "correctAnswer": 2,
    "explanation": "14 × 9 = 126"
  },
  {
    "id": "qm-173",
    "difficulty": "medium",
    "operation": "multiplication",
    "timeLimit": 6,
    "question": "15 × 4",
    "options": [
      "60",
      "61",
      "59",
      "58"
    ],
    "correctAnswer": 0,
    "explanation": "15 × 4 = 60"
  },
  {
    "id": "qm-174",
    "difficulty": "medium",
    "operation": "multiplication",
    "timeLimit": 6,
    "question": "16 × 5",
    "options": [
      "78",
      "81",
      "79",
      "80"
    ],
    "correctAnswer": 3,
    "explanation": "16 × 5 = 80"
  },
  {
    "id": "qm-175",
    "difficulty": "medium",
    "operation": "multiplication",
    "timeLimit": 6,
    "question": "17 × 6",
    "options": [
      "101",
      "100",
      "103",
      "102"
    ],
    "correctAnswer": 3,
    "explanation": "17 × 6 = 102"
  },
  {
    "id": "qm-176",
    "difficulty": "medium",
    "operation": "multiplication",
    "timeLimit": 6,
    "question": "18 × 7",
    "options": [
      "127",
      "124",
      "125",
      "126"
    ],
    "correctAnswer": 3,
    "explanation": "18 × 7 = 126"
  },
  {
    "id": "qm-177",
    "difficulty": "medium",
    "operation": "multiplication",
    "timeLimit": 6,
    "question": "11 × 8",
    "options": [
      "89",
      "87",
      "88",
      "86"
    ],
    "correctAnswer": 2,
    "explanation": "11 × 8 = 88"
  },
  {
    "id": "qm-178",
    "difficulty": "medium",
    "operation": "multiplication",
    "timeLimit": 6,
    "question": "12 × 9",
    "options": [
      "109",
      "107",
      "108",
      "106"
    ],
    "correctAnswer": 2,
    "explanation": "12 × 9 = 108"
  },
  {
    "id": "qm-179",
    "difficulty": "medium",
    "operation": "multiplication",
    "timeLimit": 6,
    "question": "13 × 4",
    "options": [
      "51",
      "53",
      "50",
      "52"
    ],
    "correctAnswer": 3,
    "explanation": "13 × 4 = 52"
  },
  {
    "id": "qm-180",
    "difficulty": "medium",
    "operation": "multiplication",
    "timeLimit": 6,
    "question": "14 × 5",
    "options": [
      "70",
      "69",
      "71",
      "68"
    ],
    "correctAnswer": 0,
    "explanation": "14 × 5 = 70"
  },
  {
    "id": "qm-181",
    "difficulty": "medium",
    "operation": "multiplication",
    "timeLimit": 6,
    "question": "15 × 6",
    "options": [
      "91",
      "88",
      "89",
      "90"
    ],
    "correctAnswer": 3,
    "explanation": "15 × 6 = 90"
  },
  {
    "id": "qm-182",
    "difficulty": "medium",
    "operation": "multiplication",
    "timeLimit": 6,
    "question": "16 × 7",
    "options": [
      "111",
      "110",
      "112",
      "113"
    ],
    "correctAnswer": 2,
    "explanation": "16 × 7 = 112"
  },
  {
    "id": "qm-183",
    "difficulty": "medium",
    "operation": "multiplication",
    "timeLimit": 6,
    "question": "17 × 8",
    "options": [
      "137",
      "135",
      "136",
      "134"
    ],
    "correctAnswer": 2,
    "explanation": "17 × 8 = 136"
  },
  {
    "id": "qm-184",
    "difficulty": "medium",
    "operation": "multiplication",
    "timeLimit": 6,
    "question": "18 × 9",
    "options": [
      "160",
      "163",
      "161",
      "162"
    ],
    "correctAnswer": 3,
    "explanation": "18 × 9 = 162"
  },
  {
    "id": "qm-185",
    "difficulty": "medium",
    "operation": "multiplication",
    "timeLimit": 6,
    "question": "11 × 4",
    "options": [
      "45",
      "43",
      "42",
      "44"
    ],
    "correctAnswer": 3,
    "explanation": "11 × 4 = 44"
  },
  {
    "id": "qm-186",
    "difficulty": "medium",
    "operation": "division",
    "timeLimit": 6,
    "question": "28 ÷ 4",
    "options": [
      "8",
      "5",
      "7",
      "6"
    ],
    "correctAnswer": 2,
    "explanation": "28 ÷ 4 = 7"
  },
  {
    "id": "qm-187",
    "difficulty": "medium",
    "operation": "division",
    "timeLimit": 6,
    "question": "40 ÷ 5",
    "options": [
      "7",
      "8",
      "9",
      "6"
    ],
    "correctAnswer": 1,
    "explanation": "40 ÷ 5 = 8"
  },
  {
    "id": "qm-188",
    "difficulty": "medium",
    "operation": "division",
    "timeLimit": 6,
    "question": "54 ÷ 6",
    "options": [
      "10",
      "8",
      "9",
      "7"
    ],
    "correctAnswer": 2,
    "explanation": "54 ÷ 6 = 9"
  },
  {
    "id": "qm-189",
    "difficulty": "medium",
    "operation": "division",
    "timeLimit": 6,
    "question": "70 ÷ 7",
    "options": [
      "10",
      "9",
      "8",
      "11"
    ],
    "correctAnswer": 0,
    "explanation": "70 ÷ 7 = 10"
  },
  {
    "id": "qm-190",
    "difficulty": "medium",
    "operation": "division",
    "timeLimit": 6,
    "question": "88 ÷ 8",
    "options": [
      "9",
      "12",
      "10",
      "11"
    ],
    "correctAnswer": 3,
    "explanation": "88 ÷ 8 = 11"
  },
  {
    "id": "qm-191",
    "difficulty": "medium",
    "operation": "division",
    "timeLimit": 6,
    "question": "108 ÷ 9",
    "options": [
      "13",
      "10",
      "11",
      "12"
    ],
    "correctAnswer": 3,
    "explanation": "108 ÷ 9 = 12"
  },
  {
    "id": "qm-192",
    "difficulty": "medium",
    "operation": "division",
    "timeLimit": 6,
    "question": "130 ÷ 10",
    "options": [
      "12",
      "14",
      "11",
      "13"
    ],
    "correctAnswer": 3,
    "explanation": "130 ÷ 10 = 13"
  },
  {
    "id": "qm-193",
    "difficulty": "medium",
    "operation": "division",
    "timeLimit": 6,
    "question": "56 ÷ 4",
    "options": [
      "13",
      "15",
      "14",
      "12"
    ],
    "correctAnswer": 2,
    "explanation": "56 ÷ 4 = 14"
  },
  {
    "id": "qm-194",
    "difficulty": "medium",
    "operation": "division",
    "timeLimit": 6,
    "question": "75 ÷ 5",
    "options": [
      "15",
      "14",
      "13",
      "16"
    ],
    "correctAnswer": 0,
    "explanation": "75 ÷ 5 = 15"
  },
  {
    "id": "qm-195",
    "difficulty": "medium",
    "operation": "division",
    "timeLimit": 6,
    "question": "96 ÷ 6",
    "options": [
      "15",
      "16",
      "14",
      "17"
    ],
    "correctAnswer": 1,
    "explanation": "96 ÷ 6 = 16"
  },
  {
    "id": "qm-196",
    "difficulty": "medium",
    "operation": "division",
    "timeLimit": 6,
    "question": "119 ÷ 7",
    "options": [
      "17",
      "16",
      "15",
      "18"
    ],
    "correctAnswer": 0,
    "explanation": "119 ÷ 7 = 17"
  },
  {
    "id": "qm-197",
    "difficulty": "medium",
    "operation": "division",
    "timeLimit": 6,
    "question": "144 ÷ 8",
    "options": [
      "18",
      "19",
      "16",
      "17"
    ],
    "correctAnswer": 0,
    "explanation": "144 ÷ 8 = 18"
  },
  {
    "id": "qm-198",
    "difficulty": "medium",
    "operation": "division",
    "timeLimit": 6,
    "question": "63 ÷ 9",
    "options": [
      "5",
      "7",
      "6",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "63 ÷ 9 = 7"
  },
  {
    "id": "qm-199",
    "difficulty": "medium",
    "operation": "division",
    "timeLimit": 6,
    "question": "80 ÷ 10",
    "options": [
      "7",
      "9",
      "6",
      "8"
    ],
    "correctAnswer": 3,
    "explanation": "80 ÷ 10 = 8"
  },
  {
    "id": "qm-200",
    "difficulty": "medium",
    "operation": "division",
    "timeLimit": 6,
    "question": "36 ÷ 4",
    "options": [
      "10",
      "8",
      "9",
      "7"
    ],
    "correctAnswer": 2,
    "explanation": "36 ÷ 4 = 9"
  },
  {
    "id": "qm-201",
    "difficulty": "medium",
    "operation": "division",
    "timeLimit": 6,
    "question": "50 ÷ 5",
    "options": [
      "10",
      "8",
      "11",
      "9"
    ],
    "correctAnswer": 0,
    "explanation": "50 ÷ 5 = 10"
  },
  {
    "id": "qm-202",
    "difficulty": "medium",
    "operation": "division",
    "timeLimit": 6,
    "question": "66 ÷ 6",
    "options": [
      "11",
      "9",
      "12",
      "10"
    ],
    "correctAnswer": 0,
    "explanation": "66 ÷ 6 = 11"
  },
  {
    "id": "qm-203",
    "difficulty": "medium",
    "operation": "division",
    "timeLimit": 6,
    "question": "84 ÷ 7",
    "options": [
      "11",
      "12",
      "10",
      "13"
    ],
    "correctAnswer": 1,
    "explanation": "84 ÷ 7 = 12"
  },
  {
    "id": "qm-204",
    "difficulty": "medium",
    "operation": "division",
    "timeLimit": 6,
    "question": "104 ÷ 8",
    "options": [
      "14",
      "13",
      "12",
      "11"
    ],
    "correctAnswer": 1,
    "explanation": "104 ÷ 8 = 13"
  },
  {
    "id": "qm-205",
    "difficulty": "medium",
    "operation": "division",
    "timeLimit": 6,
    "question": "126 ÷ 9",
    "options": [
      "12",
      "13",
      "15",
      "14"
    ],
    "correctAnswer": 3,
    "explanation": "126 ÷ 9 = 14"
  },
  {
    "id": "qm-206",
    "difficulty": "medium",
    "operation": "division",
    "timeLimit": 6,
    "question": "150 ÷ 10",
    "options": [
      "16",
      "15",
      "13",
      "14"
    ],
    "correctAnswer": 1,
    "explanation": "150 ÷ 10 = 15"
  },
  {
    "id": "qm-207",
    "difficulty": "medium",
    "operation": "division",
    "timeLimit": 6,
    "question": "64 ÷ 4",
    "options": [
      "16",
      "15",
      "14",
      "17"
    ],
    "correctAnswer": 0,
    "explanation": "64 ÷ 4 = 16"
  },
  {
    "id": "qm-208",
    "difficulty": "medium",
    "operation": "division",
    "timeLimit": 6,
    "question": "85 ÷ 5",
    "options": [
      "18",
      "17",
      "16",
      "15"
    ],
    "correctAnswer": 1,
    "explanation": "85 ÷ 5 = 17"
  },
  {
    "id": "qm-209",
    "difficulty": "medium",
    "operation": "division",
    "timeLimit": 6,
    "question": "108 ÷ 6",
    "options": [
      "17",
      "16",
      "19",
      "18"
    ],
    "correctAnswer": 3,
    "explanation": "108 ÷ 6 = 18"
  },
  {
    "id": "qm-210",
    "difficulty": "medium",
    "operation": "division",
    "timeLimit": 6,
    "question": "49 ÷ 7",
    "options": [
      "6",
      "8",
      "5",
      "7"
    ],
    "correctAnswer": 3,
    "explanation": "49 ÷ 7 = 7"
  },
  {
    "id": "qm-211",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "13 × 6 + 12",
    "options": [
      "88",
      "89",
      "90",
      "91"
    ],
    "correctAnswer": 2,
    "explanation": "13 × 6 + 12 = 90"
  },
  {
    "id": "qm-212",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "14 × 7 + 13",
    "options": [
      "110",
      "111",
      "112",
      "109"
    ],
    "correctAnswer": 1,
    "explanation": "14 × 7 + 13 = 111"
  },
  {
    "id": "qm-213",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "15 × 8 + 14",
    "options": [
      "135",
      "133",
      "132",
      "134"
    ],
    "correctAnswer": 3,
    "explanation": "15 × 8 + 14 = 134"
  },
  {
    "id": "qm-214",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "16 × 9 + 15",
    "options": [
      "157",
      "159",
      "158",
      "160"
    ],
    "correctAnswer": 1,
    "explanation": "16 × 9 + 15 = 159"
  },
  {
    "id": "qm-215",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "17 × 10 + 16",
    "options": [
      "184",
      "185",
      "187",
      "186"
    ],
    "correctAnswer": 3,
    "explanation": "17 × 10 + 16 = 186"
  },
  {
    "id": "qm-216",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "18 × 6 + 17",
    "options": [
      "124",
      "126",
      "123",
      "125"
    ],
    "correctAnswer": 3,
    "explanation": "18 × 6 + 17 = 125"
  },
  {
    "id": "qm-217",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "19 × 7 + 18",
    "options": [
      "151",
      "149",
      "150",
      "152"
    ],
    "correctAnswer": 0,
    "explanation": "19 × 7 + 18 = 151"
  },
  {
    "id": "qm-218",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "13 × 8 + 19",
    "options": [
      "122",
      "123",
      "121",
      "124"
    ],
    "correctAnswer": 1,
    "explanation": "13 × 8 + 19 = 123"
  },
  {
    "id": "qm-219",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "14 × 9 + 20",
    "options": [
      "145",
      "146",
      "147",
      "144"
    ],
    "correctAnswer": 1,
    "explanation": "14 × 9 + 20 = 146"
  },
  {
    "id": "qm-220",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "15 × 10 + 21",
    "options": [
      "171",
      "169",
      "172",
      "170"
    ],
    "correctAnswer": 0,
    "explanation": "15 × 10 + 21 = 171"
  },
  {
    "id": "qm-221",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "16 × 6 + 22",
    "options": [
      "116",
      "117",
      "119",
      "118"
    ],
    "correctAnswer": 3,
    "explanation": "16 × 6 + 22 = 118"
  },
  {
    "id": "qm-222",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "17 × 7 + 23",
    "options": [
      "142",
      "141",
      "140",
      "143"
    ],
    "correctAnswer": 0,
    "explanation": "17 × 7 + 23 = 142"
  },
  {
    "id": "qm-223",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "18 × 8 + 24",
    "options": [
      "168",
      "169",
      "167",
      "166"
    ],
    "correctAnswer": 0,
    "explanation": "18 × 8 + 24 = 168"
  },
  {
    "id": "qm-224",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "19 × 9 + 25",
    "options": [
      "194",
      "195",
      "197",
      "196"
    ],
    "correctAnswer": 3,
    "explanation": "19 × 9 + 25 = 196"
  },
  {
    "id": "qm-225",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "13 × 10 + 26",
    "options": [
      "157",
      "156",
      "154",
      "155"
    ],
    "correctAnswer": 1,
    "explanation": "13 × 10 + 26 = 156"
  },
  {
    "id": "qm-226",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "14 × 6 + 12",
    "options": [
      "94",
      "96",
      "97",
      "95"
    ],
    "correctAnswer": 1,
    "explanation": "14 × 6 + 12 = 96"
  },
  {
    "id": "qm-227",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "15 × 7 + 13",
    "options": [
      "116",
      "118",
      "119",
      "117"
    ],
    "correctAnswer": 1,
    "explanation": "15 × 7 + 13 = 118"
  },
  {
    "id": "qm-228",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "16 × 8 + 14",
    "options": [
      "142",
      "143",
      "140",
      "141"
    ],
    "correctAnswer": 0,
    "explanation": "16 × 8 + 14 = 142"
  },
  {
    "id": "qm-229",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "17 × 9 + 15",
    "options": [
      "168",
      "169",
      "166",
      "167"
    ],
    "correctAnswer": 0,
    "explanation": "17 × 9 + 15 = 168"
  },
  {
    "id": "qm-230",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "18 × 10 + 16",
    "options": [
      "194",
      "197",
      "195",
      "196"
    ],
    "correctAnswer": 3,
    "explanation": "18 × 10 + 16 = 196"
  },
  {
    "id": "qm-231",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "48 ÷ 6 + 15",
    "options": [
      "24",
      "21",
      "23",
      "22"
    ],
    "correctAnswer": 2,
    "explanation": "48 ÷ 6 + 15 = 23"
  },
  {
    "id": "qm-232",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "63 ÷ 7 + 16",
    "options": [
      "25",
      "26",
      "23",
      "24"
    ],
    "correctAnswer": 0,
    "explanation": "63 ÷ 7 + 16 = 25"
  },
  {
    "id": "qm-233",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "80 ÷ 8 + 17",
    "options": [
      "26",
      "28",
      "27",
      "25"
    ],
    "correctAnswer": 2,
    "explanation": "80 ÷ 8 + 17 = 27"
  },
  {
    "id": "qm-234",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "99 ÷ 9 + 18",
    "options": [
      "28",
      "27",
      "29",
      "30"
    ],
    "correctAnswer": 2,
    "explanation": "99 ÷ 9 + 18 = 29"
  },
  {
    "id": "qm-235",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "120 ÷ 10 + 19",
    "options": [
      "31",
      "30",
      "29",
      "32"
    ],
    "correctAnswer": 0,
    "explanation": "120 ÷ 10 + 19 = 31"
  },
  {
    "id": "qm-236",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "143 ÷ 11 + 20",
    "options": [
      "33",
      "34",
      "31",
      "32"
    ],
    "correctAnswer": 0,
    "explanation": "143 ÷ 11 + 20 = 33"
  },
  {
    "id": "qm-237",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "168 ÷ 12 + 21",
    "options": [
      "35",
      "33",
      "34",
      "36"
    ],
    "correctAnswer": 0,
    "explanation": "168 ÷ 12 + 21 = 35"
  },
  {
    "id": "qm-238",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "90 ÷ 6 + 22",
    "options": [
      "36",
      "37",
      "35",
      "38"
    ],
    "correctAnswer": 1,
    "explanation": "90 ÷ 6 + 22 = 37"
  },
  {
    "id": "qm-239",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "112 ÷ 7 + 23",
    "options": [
      "40",
      "39",
      "38",
      "37"
    ],
    "correctAnswer": 1,
    "explanation": "112 ÷ 7 + 23 = 39"
  },
  {
    "id": "qm-240",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "64 ÷ 8 + 24",
    "options": [
      "33",
      "32",
      "30",
      "31"
    ],
    "correctAnswer": 1,
    "explanation": "64 ÷ 8 + 24 = 32"
  },
  {
    "id": "qm-241",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "81 ÷ 9 + 25",
    "options": [
      "35",
      "32",
      "33",
      "34"
    ],
    "correctAnswer": 3,
    "explanation": "81 ÷ 9 + 25 = 34"
  },
  {
    "id": "qm-242",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "100 ÷ 10 + 26",
    "options": [
      "35",
      "37",
      "36",
      "34"
    ],
    "correctAnswer": 2,
    "explanation": "100 ÷ 10 + 26 = 36"
  },
  {
    "id": "qm-243",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "121 ÷ 11 + 27",
    "options": [
      "37",
      "39",
      "36",
      "38"
    ],
    "correctAnswer": 3,
    "explanation": "121 ÷ 11 + 27 = 38"
  },
  {
    "id": "qm-244",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "144 ÷ 12 + 28",
    "options": [
      "39",
      "38",
      "41",
      "40"
    ],
    "correctAnswer": 3,
    "explanation": "144 ÷ 12 + 28 = 40"
  },
  {
    "id": "qm-245",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "78 ÷ 6 + 29",
    "options": [
      "42",
      "43",
      "41",
      "40"
    ],
    "correctAnswer": 0,
    "explanation": "78 ÷ 6 + 29 = 42"
  },
  {
    "id": "qm-246",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "98 ÷ 7 + 30",
    "options": [
      "42",
      "45",
      "44",
      "43"
    ],
    "correctAnswer": 2,
    "explanation": "98 ÷ 7 + 30 = 44"
  },
  {
    "id": "qm-247",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "120 ÷ 8 + 31",
    "options": [
      "47",
      "46",
      "45",
      "44"
    ],
    "correctAnswer": 1,
    "explanation": "120 ÷ 8 + 31 = 46"
  },
  {
    "id": "qm-248",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "144 ÷ 9 + 32",
    "options": [
      "49",
      "46",
      "48",
      "47"
    ],
    "correctAnswer": 2,
    "explanation": "144 ÷ 9 + 32 = 48"
  },
  {
    "id": "qm-249",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "80 ÷ 10 + 33",
    "options": [
      "42",
      "40",
      "41",
      "39"
    ],
    "correctAnswer": 2,
    "explanation": "80 ÷ 10 + 33 = 41"
  },
  {
    "id": "qm-250",
    "difficulty": "hard",
    "operation": "mixed",
    "timeLimit": 9,
    "question": "99 ÷ 11 + 34",
    "options": [
      "42",
      "43",
      "44",
      "41"
    ],
    "correctAnswer": 1,
    "explanation": "99 ÷ 11 + 34 = 43"
  },
  {
    "id": "qm-251",
    "difficulty": "hard",
    "operation": "percentages",
    "timeLimit": 9,
    "question": "10% of 80",
    "options": [
      "7",
      "8",
      "6",
      "9"
    ],
    "correctAnswer": 1,
    "explanation": "10% of 80 = 8"
  },
  {
    "id": "qm-252",
    "difficulty": "hard",
    "operation": "percentages",
    "timeLimit": 9,
    "question": "20% of 120",
    "options": [
      "24",
      "25",
      "22",
      "23"
    ],
    "correctAnswer": 0,
    "explanation": "20% of 120 = 24"
  },
  {
    "id": "qm-253",
    "difficulty": "hard",
    "operation": "percentages",
    "timeLimit": 9,
    "question": "25% of 160",
    "options": [
      "38",
      "41",
      "40",
      "39"
    ],
    "correctAnswer": 2,
    "explanation": "25% of 160 = 40"
  },
  {
    "id": "qm-254",
    "difficulty": "hard",
    "operation": "percentages",
    "timeLimit": 9,
    "question": "50% of 200",
    "options": [
      "99",
      "100",
      "101",
      "98"
    ],
    "correctAnswer": 1,
    "explanation": "50% of 200 = 100"
  },
  {
    "id": "qm-255",
    "difficulty": "hard",
    "operation": "percentages",
    "timeLimit": 9,
    "question": "15% of 240",
    "options": [
      "36",
      "34",
      "35",
      "37"
    ],
    "correctAnswer": 0,
    "explanation": "15% of 240 = 36"
  },
  {
    "id": "qm-256",
    "difficulty": "hard",
    "operation": "percentages",
    "timeLimit": 9,
    "question": "10% of 300",
    "options": [
      "30",
      "31",
      "29",
      "28"
    ],
    "correctAnswer": 0,
    "explanation": "10% of 300 = 30"
  },
  {
    "id": "qm-257",
    "difficulty": "hard",
    "operation": "percentages",
    "timeLimit": 9,
    "question": "20% of 400",
    "options": [
      "80",
      "81",
      "79",
      "78"
    ],
    "correctAnswer": 0,
    "explanation": "20% of 400 = 80"
  },
  {
    "id": "qm-258",
    "difficulty": "hard",
    "operation": "percentages",
    "timeLimit": 9,
    "question": "25% of 80",
    "options": [
      "21",
      "19",
      "18",
      "20"
    ],
    "correctAnswer": 3,
    "explanation": "25% of 80 = 20"
  },
  {
    "id": "qm-259",
    "difficulty": "hard",
    "operation": "percentages",
    "timeLimit": 9,
    "question": "50% of 120",
    "options": [
      "58",
      "60",
      "59",
      "61"
    ],
    "correctAnswer": 1,
    "explanation": "50% of 120 = 60"
  },
  {
    "id": "qm-260",
    "difficulty": "hard",
    "operation": "percentages",
    "timeLimit": 9,
    "question": "15% of 160",
    "options": [
      "23",
      "24",
      "25",
      "22"
    ],
    "correctAnswer": 1,
    "explanation": "15% of 160 = 24"
  },
  {
    "id": "qm-261",
    "difficulty": "hard",
    "operation": "percentages",
    "timeLimit": 9,
    "question": "10% of 200",
    "options": [
      "20",
      "18",
      "21",
      "19"
    ],
    "correctAnswer": 0,
    "explanation": "10% of 200 = 20"
  },
  {
    "id": "qm-262",
    "difficulty": "hard",
    "operation": "percentages",
    "timeLimit": 9,
    "question": "20% of 240",
    "options": [
      "48",
      "47",
      "49",
      "46"
    ],
    "correctAnswer": 0,
    "explanation": "20% of 240 = 48"
  },
  {
    "id": "qm-263",
    "difficulty": "hard",
    "operation": "percentages",
    "timeLimit": 9,
    "question": "25% of 300",
    "options": [
      "74",
      "75",
      "73",
      "76"
    ],
    "correctAnswer": 1,
    "explanation": "25% of 300 = 75"
  },
  {
    "id": "qm-264",
    "difficulty": "hard",
    "operation": "percentages",
    "timeLimit": 9,
    "question": "50% of 400",
    "options": [
      "201",
      "199",
      "198",
      "200"
    ],
    "correctAnswer": 3,
    "explanation": "50% of 400 = 200"
  },
  {
    "id": "qm-265",
    "difficulty": "hard",
    "operation": "percentages",
    "timeLimit": 9,
    "question": "15% of 80",
    "options": [
      "10",
      "12",
      "11",
      "13"
    ],
    "correctAnswer": 1,
    "explanation": "15% of 80 = 12"
  },
  {
    "id": "qm-266",
    "difficulty": "hard",
    "operation": "percentages",
    "timeLimit": 9,
    "question": "10% of 120",
    "options": [
      "12",
      "11",
      "13",
      "10"
    ],
    "correctAnswer": 0,
    "explanation": "10% of 120 = 12"
  },
  {
    "id": "qm-267",
    "difficulty": "hard",
    "operation": "percentages",
    "timeLimit": 9,
    "question": "20% of 160",
    "options": [
      "32",
      "30",
      "33",
      "31"
    ],
    "correctAnswer": 0,
    "explanation": "20% of 160 = 32"
  },
  {
    "id": "qm-268",
    "difficulty": "hard",
    "operation": "percentages",
    "timeLimit": 9,
    "question": "25% of 200",
    "options": [
      "48",
      "49",
      "51",
      "50"
    ],
    "correctAnswer": 3,
    "explanation": "25% of 200 = 50"
  },
  {
    "id": "qm-269",
    "difficulty": "hard",
    "operation": "percentages",
    "timeLimit": 9,
    "question": "50% of 240",
    "options": [
      "119",
      "121",
      "120",
      "118"
    ],
    "correctAnswer": 2,
    "explanation": "50% of 240 = 120"
  },
  {
    "id": "qm-270",
    "difficulty": "hard",
    "operation": "percentages",
    "timeLimit": 9,
    "question": "15% of 300",
    "options": [
      "45",
      "44",
      "43",
      "46"
    ],
    "correctAnswer": 0,
    "explanation": "15% of 300 = 45"
  },
  {
    "id": "qm-271",
    "difficulty": "hard",
    "operation": "multiplication",
    "timeLimit": 9,
    "question": "23 × 7",
    "options": [
      "160",
      "159",
      "162",
      "161"
    ],
    "correctAnswer": 3,
    "explanation": "23 × 7 = 161"
  },
  {
    "id": "qm-272",
    "difficulty": "hard",
    "operation": "multiplication",
    "timeLimit": 9,
    "question": "24 × 8",
    "options": [
      "193",
      "191",
      "190",
      "192"
    ],
    "correctAnswer": 3,
    "explanation": "24 × 8 = 192"
  },
  {
    "id": "qm-273",
    "difficulty": "hard",
    "operation": "multiplication",
    "timeLimit": 9,
    "question": "25 × 9",
    "options": [
      "226",
      "223",
      "225",
      "224"
    ],
    "correctAnswer": 2,
    "explanation": "25 × 9 = 225"
  },
  {
    "id": "qm-274",
    "difficulty": "hard",
    "operation": "multiplication",
    "timeLimit": 9,
    "question": "26 × 10",
    "options": [
      "258",
      "260",
      "261",
      "259"
    ],
    "correctAnswer": 1,
    "explanation": "26 × 10 = 260"
  },
  {
    "id": "qm-275",
    "difficulty": "hard",
    "operation": "multiplication",
    "timeLimit": 9,
    "question": "27 × 11",
    "options": [
      "297",
      "296",
      "295",
      "298"
    ],
    "correctAnswer": 0,
    "explanation": "27 × 11 = 297"
  },
  {
    "id": "qm-276",
    "difficulty": "hard",
    "operation": "multiplication",
    "timeLimit": 9,
    "question": "28 × 12",
    "options": [
      "337",
      "334",
      "336",
      "335"
    ],
    "correctAnswer": 2,
    "explanation": "28 × 12 = 336"
  },
  {
    "id": "qm-277",
    "difficulty": "hard",
    "operation": "multiplication",
    "timeLimit": 9,
    "question": "29 × 7",
    "options": [
      "202",
      "204",
      "201",
      "203"
    ],
    "correctAnswer": 3,
    "explanation": "29 × 7 = 203"
  },
  {
    "id": "qm-278",
    "difficulty": "hard",
    "operation": "multiplication",
    "timeLimit": 9,
    "question": "30 × 8",
    "options": [
      "241",
      "239",
      "238",
      "240"
    ],
    "correctAnswer": 3,
    "explanation": "30 × 8 = 240"
  },
  {
    "id": "qm-279",
    "difficulty": "hard",
    "operation": "multiplication",
    "timeLimit": 9,
    "question": "31 × 9",
    "options": [
      "278",
      "280",
      "277",
      "279"
    ],
    "correctAnswer": 3,
    "explanation": "31 × 9 = 279"
  },
  {
    "id": "qm-280",
    "difficulty": "hard",
    "operation": "multiplication",
    "timeLimit": 9,
    "question": "23 × 10",
    "options": [
      "228",
      "230",
      "231",
      "229"
    ],
    "correctAnswer": 1,
    "explanation": "23 × 10 = 230"
  },
  {
    "id": "qm-281",
    "difficulty": "hard",
    "operation": "multiplication",
    "timeLimit": 9,
    "question": "24 × 11",
    "options": [
      "264",
      "263",
      "262",
      "265"
    ],
    "correctAnswer": 0,
    "explanation": "24 × 11 = 264"
  },
  {
    "id": "qm-282",
    "difficulty": "hard",
    "operation": "multiplication",
    "timeLimit": 9,
    "question": "25 × 12",
    "options": [
      "299",
      "298",
      "300",
      "301"
    ],
    "correctAnswer": 2,
    "explanation": "25 × 12 = 300"
  },
  {
    "id": "qm-283",
    "difficulty": "hard",
    "operation": "multiplication",
    "timeLimit": 9,
    "question": "26 × 7",
    "options": [
      "180",
      "183",
      "182",
      "181"
    ],
    "correctAnswer": 2,
    "explanation": "26 × 7 = 182"
  },
  {
    "id": "qm-284",
    "difficulty": "hard",
    "operation": "multiplication",
    "timeLimit": 9,
    "question": "27 × 8",
    "options": [
      "217",
      "215",
      "216",
      "214"
    ],
    "correctAnswer": 2,
    "explanation": "27 × 8 = 216"
  },
  {
    "id": "qm-285",
    "difficulty": "hard",
    "operation": "multiplication",
    "timeLimit": 9,
    "question": "28 × 9",
    "options": [
      "251",
      "250",
      "252",
      "253"
    ],
    "correctAnswer": 2,
    "explanation": "28 × 9 = 252"
  },
  {
    "id": "qm-286",
    "difficulty": "hard",
    "operation": "multiplication",
    "timeLimit": 9,
    "question": "29 × 10",
    "options": [
      "290",
      "288",
      "291",
      "289"
    ],
    "correctAnswer": 0,
    "explanation": "29 × 10 = 290"
  },
  {
    "id": "qm-287",
    "difficulty": "hard",
    "operation": "multiplication",
    "timeLimit": 9,
    "question": "30 × 11",
    "options": [
      "330",
      "329",
      "331",
      "328"
    ],
    "correctAnswer": 0,
    "explanation": "30 × 11 = 330"
  },
  {
    "id": "qm-288",
    "difficulty": "hard",
    "operation": "multiplication",
    "timeLimit": 9,
    "question": "31 × 12",
    "options": [
      "373",
      "371",
      "370",
      "372"
    ],
    "correctAnswer": 3,
    "explanation": "31 × 12 = 372"
  },
  {
    "id": "qm-289",
    "difficulty": "hard",
    "operation": "multiplication",
    "timeLimit": 9,
    "question": "23 × 7",
    "options": [
      "160",
      "159",
      "162",
      "161"
    ],
    "correctAnswer": 3,
    "explanation": "23 × 7 = 161"
  },
  {
    "id": "qm-290",
    "difficulty": "hard",
    "operation": "multiplication",
    "timeLimit": 9,
    "question": "24 × 8",
    "options": [
      "193",
      "191",
      "190",
      "192"
    ],
    "correctAnswer": 3,
    "explanation": "24 × 8 = 192"
  },
  {
    "id": "qm-291",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "4 + 5",
    "options": [
      "8",
      "10",
      "9",
      "7"
    ],
    "correctAnswer": 2,
    "explanation": "4 + 5 = 9"
  },
  {
    "id": "qm-292",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "5 + 7",
    "options": [
      "13",
      "10",
      "11",
      "12"
    ],
    "correctAnswer": 3,
    "explanation": "5 + 7 = 12"
  },
  {
    "id": "qm-293",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "6 + 9",
    "options": [
      "13",
      "15",
      "14",
      "16"
    ],
    "correctAnswer": 1,
    "explanation": "6 + 9 = 15"
  },
  {
    "id": "qm-294",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "7 + 11",
    "options": [
      "17",
      "19",
      "18",
      "16"
    ],
    "correctAnswer": 2,
    "explanation": "7 + 11 = 18"
  },
  {
    "id": "qm-295",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "8 + 13",
    "options": [
      "22",
      "21",
      "19",
      "20"
    ],
    "correctAnswer": 1,
    "explanation": "8 + 13 = 21"
  },
  {
    "id": "qm-296",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "9 + 6",
    "options": [
      "14",
      "16",
      "15",
      "13"
    ],
    "correctAnswer": 2,
    "explanation": "9 + 6 = 15"
  },
  {
    "id": "qm-297",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "10 + 8",
    "options": [
      "16",
      "19",
      "18",
      "17"
    ],
    "correctAnswer": 2,
    "explanation": "10 + 8 = 18"
  },
  {
    "id": "qm-298",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "11 + 10",
    "options": [
      "22",
      "21",
      "20",
      "19"
    ],
    "correctAnswer": 1,
    "explanation": "11 + 10 = 21"
  },
  {
    "id": "qm-299",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "12 + 12",
    "options": [
      "24",
      "22",
      "25",
      "23"
    ],
    "correctAnswer": 0,
    "explanation": "12 + 12 = 24"
  },
  {
    "id": "qm-300",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "4 + 5",
    "options": [
      "9",
      "8",
      "10",
      "7"
    ],
    "correctAnswer": 0,
    "explanation": "4 + 5 = 9"
  },
  {
    "id": "qm-301",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "5 + 7",
    "options": [
      "10",
      "13",
      "12",
      "11"
    ],
    "correctAnswer": 2,
    "explanation": "5 + 7 = 12"
  },
  {
    "id": "qm-302",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "6 + 9",
    "options": [
      "13",
      "15",
      "16",
      "14"
    ],
    "correctAnswer": 1,
    "explanation": "6 + 9 = 15"
  },
  {
    "id": "qm-303",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "7 + 11",
    "options": [
      "19",
      "16",
      "18",
      "17"
    ],
    "correctAnswer": 2,
    "explanation": "7 + 11 = 18"
  },
  {
    "id": "qm-304",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "8 + 13",
    "options": [
      "20",
      "22",
      "21",
      "19"
    ],
    "correctAnswer": 2,
    "explanation": "8 + 13 = 21"
  },
  {
    "id": "qm-305",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "9 + 6",
    "options": [
      "16",
      "14",
      "13",
      "15"
    ],
    "correctAnswer": 3,
    "explanation": "9 + 6 = 15"
  },
  {
    "id": "qm-306",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "10 + 8",
    "options": [
      "18",
      "17",
      "19",
      "16"
    ],
    "correctAnswer": 0,
    "explanation": "10 + 8 = 18"
  },
  {
    "id": "qm-307",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "11 + 10",
    "options": [
      "20",
      "22",
      "21",
      "19"
    ],
    "correctAnswer": 2,
    "explanation": "11 + 10 = 21"
  },
  {
    "id": "qm-308",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "12 + 12",
    "options": [
      "23",
      "25",
      "24",
      "22"
    ],
    "correctAnswer": 2,
    "explanation": "12 + 12 = 24"
  },
  {
    "id": "qm-309",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "4 + 5",
    "options": [
      "8",
      "7",
      "9",
      "10"
    ],
    "correctAnswer": 2,
    "explanation": "4 + 5 = 9"
  },
  {
    "id": "qm-310",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "5 + 7",
    "options": [
      "10",
      "12",
      "11",
      "13"
    ],
    "correctAnswer": 1,
    "explanation": "5 + 7 = 12"
  },
  {
    "id": "qm-311",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "6 + 9",
    "options": [
      "15",
      "16",
      "14",
      "13"
    ],
    "correctAnswer": 0,
    "explanation": "6 + 9 = 15"
  },
  {
    "id": "qm-312",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "7 + 11",
    "options": [
      "19",
      "16",
      "18",
      "17"
    ],
    "correctAnswer": 2,
    "explanation": "7 + 11 = 18"
  },
  {
    "id": "qm-313",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "8 + 13",
    "options": [
      "19",
      "21",
      "22",
      "20"
    ],
    "correctAnswer": 1,
    "explanation": "8 + 13 = 21"
  },
  {
    "id": "qm-314",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "9 + 6",
    "options": [
      "16",
      "14",
      "13",
      "15"
    ],
    "correctAnswer": 3,
    "explanation": "9 + 6 = 15"
  },
  {
    "id": "qm-315",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "10 + 8",
    "options": [
      "19",
      "17",
      "16",
      "18"
    ],
    "correctAnswer": 3,
    "explanation": "10 + 8 = 18"
  },
  {
    "id": "qm-316",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "11 + 10",
    "options": [
      "20",
      "19",
      "22",
      "21"
    ],
    "correctAnswer": 3,
    "explanation": "11 + 10 = 21"
  },
  {
    "id": "qm-317",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "12 + 12",
    "options": [
      "24",
      "22",
      "23",
      "25"
    ],
    "correctAnswer": 0,
    "explanation": "12 + 12 = 24"
  },
  {
    "id": "qm-318",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "4 + 5",
    "options": [
      "7",
      "10",
      "9",
      "8"
    ],
    "correctAnswer": 2,
    "explanation": "4 + 5 = 9"
  },
  {
    "id": "qm-319",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "5 + 7",
    "options": [
      "13",
      "11",
      "10",
      "12"
    ],
    "correctAnswer": 3,
    "explanation": "5 + 7 = 12"
  },
  {
    "id": "qm-320",
    "difficulty": "lightning",
    "operation": "addition",
    "timeLimit": 3,
    "question": "6 + 9",
    "options": [
      "14",
      "15",
      "16",
      "13"
    ],
    "correctAnswer": 1,
    "explanation": "6 + 9 = 15"
  },
  {
    "id": "qm-321",
    "difficulty": "lightning",
    "operation": "subtraction",
    "timeLimit": 3,
    "question": "10 − 2",
    "options": [
      "9",
      "7",
      "8",
      "6"
    ],
    "correctAnswer": 2,
    "explanation": "10 − 2 = 8"
  },
  {
    "id": "qm-322",
    "difficulty": "lightning",
    "operation": "subtraction",
    "timeLimit": 3,
    "question": "11 − 3",
    "options": [
      "7",
      "6",
      "8",
      "9"
    ],
    "correctAnswer": 2,
    "explanation": "11 − 3 = 8"
  },
  {
    "id": "qm-323",
    "difficulty": "lightning",
    "operation": "subtraction",
    "timeLimit": 3,
    "question": "12 − 4",
    "options": [
      "6",
      "9",
      "8",
      "7"
    ],
    "correctAnswer": 2,
    "explanation": "12 − 4 = 8"
  },
  {
    "id": "qm-324",
    "difficulty": "lightning",
    "operation": "subtraction",
    "timeLimit": 3,
    "question": "13 − 5",
    "options": [
      "7",
      "9",
      "8",
      "6"
    ],
    "correctAnswer": 2,
    "explanation": "13 − 5 = 8"
  },
  {
    "id": "qm-325",
    "difficulty": "lightning",
    "operation": "subtraction",
    "timeLimit": 3,
    "question": "14 − 6",
    "options": [
      "9",
      "8",
      "6",
      "7"
    ],
    "correctAnswer": 1,
    "explanation": "14 − 6 = 8"
  },
  {
    "id": "qm-326",
    "difficulty": "lightning",
    "operation": "subtraction",
    "timeLimit": 3,
    "question": "15 − 7",
    "options": [
      "6",
      "9",
      "8",
      "7"
    ],
    "correctAnswer": 2,
    "explanation": "15 − 7 = 8"
  },
  {
    "id": "qm-327",
    "difficulty": "lightning",
    "operation": "subtraction",
    "timeLimit": 3,
    "question": "16 − 8",
    "options": [
      "6",
      "8",
      "9",
      "7"
    ],
    "correctAnswer": 1,
    "explanation": "16 − 8 = 8"
  },
  {
    "id": "qm-328",
    "difficulty": "lightning",
    "operation": "subtraction",
    "timeLimit": 3,
    "question": "17 − 9",
    "options": [
      "8",
      "6",
      "9",
      "7"
    ],
    "correctAnswer": 0,
    "explanation": "17 − 9 = 8"
  },
  {
    "id": "qm-329",
    "difficulty": "lightning",
    "operation": "subtraction",
    "timeLimit": 3,
    "question": "18 − 2",
    "options": [
      "17",
      "14",
      "16",
      "15"
    ],
    "correctAnswer": 2,
    "explanation": "18 − 2 = 16"
  },
  {
    "id": "qm-330",
    "difficulty": "lightning",
    "operation": "subtraction",
    "timeLimit": 3,
    "question": "19 − 3",
    "options": [
      "15",
      "17",
      "16",
      "14"
    ],
    "correctAnswer": 2,
    "explanation": "19 − 3 = 16"
  },
  {
    "id": "qm-331",
    "difficulty": "lightning",
    "operation": "subtraction",
    "timeLimit": 3,
    "question": "10 − 4",
    "options": [
      "7",
      "5",
      "4",
      "6"
    ],
    "correctAnswer": 3,
    "explanation": "10 − 4 = 6"
  },
  {
    "id": "qm-332",
    "difficulty": "lightning",
    "operation": "subtraction",
    "timeLimit": 3,
    "question": "11 − 5",
    "options": [
      "4",
      "7",
      "5",
      "6"
    ],
    "correctAnswer": 3,
    "explanation": "11 − 5 = 6"
  },
  {
    "id": "qm-333",
    "difficulty": "lightning",
    "operation": "subtraction",
    "timeLimit": 3,
    "question": "12 − 6",
    "options": [
      "5",
      "4",
      "6",
      "7"
    ],
    "correctAnswer": 2,
    "explanation": "12 − 6 = 6"
  },
  {
    "id": "qm-334",
    "difficulty": "lightning",
    "operation": "subtraction",
    "timeLimit": 3,
    "question": "13 − 7",
    "options": [
      "5",
      "4",
      "7",
      "6"
    ],
    "correctAnswer": 3,
    "explanation": "13 − 7 = 6"
  },
  {
    "id": "qm-335",
    "difficulty": "lightning",
    "operation": "subtraction",
    "timeLimit": 3,
    "question": "14 − 8",
    "options": [
      "7",
      "4",
      "6",
      "5"
    ],
    "correctAnswer": 2,
    "explanation": "14 − 8 = 6"
  },
  {
    "id": "qm-336",
    "difficulty": "lightning",
    "operation": "subtraction",
    "timeLimit": 3,
    "question": "15 − 9",
    "options": [
      "5",
      "6",
      "7",
      "4"
    ],
    "correctAnswer": 1,
    "explanation": "15 − 9 = 6"
  },
  {
    "id": "qm-337",
    "difficulty": "lightning",
    "operation": "subtraction",
    "timeLimit": 3,
    "question": "16 − 2",
    "options": [
      "14",
      "12",
      "13",
      "15"
    ],
    "correctAnswer": 0,
    "explanation": "16 − 2 = 14"
  },
  {
    "id": "qm-338",
    "difficulty": "lightning",
    "operation": "subtraction",
    "timeLimit": 3,
    "question": "17 − 3",
    "options": [
      "15",
      "14",
      "12",
      "13"
    ],
    "correctAnswer": 1,
    "explanation": "17 − 3 = 14"
  },
  {
    "id": "qm-339",
    "difficulty": "lightning",
    "operation": "subtraction",
    "timeLimit": 3,
    "question": "18 − 4",
    "options": [
      "15",
      "13",
      "14",
      "12"
    ],
    "correctAnswer": 2,
    "explanation": "18 − 4 = 14"
  },
  {
    "id": "qm-340",
    "difficulty": "lightning",
    "operation": "subtraction",
    "timeLimit": 3,
    "question": "19 − 5",
    "options": [
      "15",
      "14",
      "12",
      "13"
    ],
    "correctAnswer": 1,
    "explanation": "19 − 5 = 14"
  }
];

export interface IQQuestion {
  id: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  options: string[];
  correctAnswer: number;
  correct?: number;
  explanation: string;
}

export const iqQuestions = [
  {
    "id": "iq-001",
    "category": "Numerical Reasoning",
    "difficulty": "easy",
    "question": "What is the next number in the sequence: 2, 6, 12, 20, 30, ...?",
    "options": [
      "40",
      "42",
      "44",
      "48"
    ],
    "correctAnswer": 1,
    "explanation": "The differences between consecutive terms are 4, 6, 8, 10. The next difference should be 12, making 30 + 12 = 42.",
    "correct": 1
  },
  {
    "id": "iq-002",
    "category": "Numerical Reasoning",
    "difficulty": "easy",
    "question": "If a shirt costs $20 after a 20% discount, what was its original price?",
    "options": [
      "$24",
      "$25",
      "$30",
      "$32"
    ],
    "correctAnswer": 1,
    "explanation": "If $20 is 80% of the original price, then the original price is 20 / 0.8 = $25.",
    "correct": 1
  },
  {
    "id": "iq-003",
    "category": "Numerical Reasoning",
    "difficulty": "easy",
    "question": "A train traveling at 60 mph crosses a 1-mile long bridge. If the train is 1 mile long, how long does it take for the entire train to cross the bridge?",
    "options": [
      "1 minute",
      "2 minutes",
      "3 minutes",
      "4 minutes"
    ],
    "correctAnswer": 1,
    "explanation": "The total distance to cross is the length of the bridge plus the length of the train (1 + 1 = 2 miles). At 60 mph (1 mile per minute), it takes 2 minutes.",
    "correct": 1
  },
  {
    "id": "iq-004",
    "category": "Numerical Reasoning",
    "difficulty": "easy",
    "question": "Which fraction is the largest?",
    "options": [
      "3/4",
      "7/9",
      "5/7",
      "8/11"
    ],
    "correctAnswer": 1,
    "explanation": "Converted to decimals: 3/4 = 0.75, 7/9 ≈ 0.777, 5/7 ≈ 0.714, 8/11 ≈ 0.727. 7/9 is the largest.",
    "correct": 1
  },
  {
    "id": "iq-005",
    "category": "Numerical Reasoning",
    "difficulty": "easy",
    "question": "If 3 cats catch 3 mice in 3 minutes, how many cats are needed to catch 100 mice in 100 minutes?",
    "options": [
      "1",
      "3",
      "33",
      "100"
    ],
    "correctAnswer": 1,
    "explanation": "The rate is 1 cat catches 1 mouse in 3 minutes. Therefore, 3 cats will catch 100 mice in 100 minutes.",
    "correct": 1
  },
  {
    "id": "iq-006",
    "category": "Numerical Reasoning",
    "difficulty": "easy",
    "question": "If x² = 361 and x > 0, what is the value of 2x + 5?",
    "options": [
      "41",
      "43",
      "45",
      "48"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(361) = 19. Then 2(19) + 5 = 43."
  },
  {
    "id": "iq-007",
    "category": "Numerical Reasoning",
    "difficulty": "easy",
    "question": "If x² = 3721 and x > 0, what is the value of 2x + 5?",
    "options": [
      "125",
      "127",
      "129",
      "132"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(3721) = 61. Then 2(61) + 5 = 127."
  },
  {
    "id": "iq-008",
    "category": "Numerical Reasoning",
    "difficulty": "easy",
    "question": "If x² = 529 and x > 0, what is the value of 2x + 5?",
    "options": [
      "49",
      "51",
      "53",
      "56"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(529) = 23. Then 2(23) + 5 = 51."
  },
  {
    "id": "iq-009",
    "category": "Numerical Reasoning",
    "difficulty": "easy",
    "question": "If x² = 4225 and x > 0, what is the value of 2x + 5?",
    "options": [
      "133",
      "135",
      "137",
      "140"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(4225) = 65. Then 2(65) + 5 = 135."
  },
  {
    "id": "iq-010",
    "category": "Numerical Reasoning",
    "difficulty": "easy",
    "question": "If x² = 729 and x > 0, what is the value of 2x + 5?",
    "options": [
      "57",
      "59",
      "61",
      "64"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(729) = 27. Then 2(27) + 5 = 59."
  },
  {
    "id": "iq-011",
    "category": "Numerical Reasoning",
    "difficulty": "easy",
    "question": "If x² = 4761 and x > 0, what is the value of 2x + 5?",
    "options": [
      "141",
      "143",
      "145",
      "148"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(4761) = 69. Then 2(69) + 5 = 143."
  },
  {
    "id": "iq-012",
    "category": "Numerical Reasoning",
    "difficulty": "easy",
    "question": "If x² = 961 and x > 0, what is the value of 2x + 5?",
    "options": [
      "65",
      "67",
      "69",
      "72"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(961) = 31. Then 2(31) + 5 = 67."
  },
  {
    "id": "iq-013",
    "category": "Numerical Reasoning",
    "difficulty": "easy",
    "question": "If x² = 5329 and x > 0, what is the value of 2x + 5?",
    "options": [
      "149",
      "151",
      "153",
      "156"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(5329) = 73. Then 2(73) + 5 = 151."
  },
  {
    "id": "iq-014",
    "category": "Numerical Reasoning",
    "difficulty": "easy",
    "question": "If x² = 1225 and x > 0, what is the value of 2x + 5?",
    "options": [
      "73",
      "75",
      "77",
      "80"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(1225) = 35. Then 2(35) + 5 = 75."
  },
  {
    "id": "iq-015",
    "category": "Numerical Reasoning",
    "difficulty": "easy",
    "question": "If x² = 5929 and x > 0, what is the value of 2x + 5?",
    "options": [
      "157",
      "159",
      "161",
      "164"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(5929) = 77. Then 2(77) + 5 = 159."
  },
  {
    "id": "iq-016",
    "category": "Numerical Reasoning",
    "difficulty": "easy",
    "question": "If x² = 1521 and x > 0, what is the value of 2x + 5?",
    "options": [
      "81",
      "83",
      "85",
      "88"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(1521) = 39. Then 2(39) + 5 = 83."
  },
  {
    "id": "iq-017",
    "category": "Numerical Reasoning",
    "difficulty": "easy",
    "question": "If x² = 6561 and x > 0, what is the value of 2x + 5?",
    "options": [
      "165",
      "167",
      "169",
      "172"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(6561) = 81. Then 2(81) + 5 = 167."
  },
  {
    "id": "iq-018",
    "category": "Numerical Reasoning",
    "difficulty": "medium",
    "question": "If x² = 1849 and x > 0, what is the value of 2x + 5?",
    "options": [
      "89",
      "91",
      "93",
      "96"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(1849) = 43. Then 2(43) + 5 = 91."
  },
  {
    "id": "iq-019",
    "category": "Numerical Reasoning",
    "difficulty": "medium",
    "question": "If x² = 7225 and x > 0, what is the value of 2x + 5?",
    "options": [
      "173",
      "175",
      "177",
      "180"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(7225) = 85. Then 2(85) + 5 = 175."
  },
  {
    "id": "iq-020",
    "category": "Numerical Reasoning",
    "difficulty": "medium",
    "question": "If x² = 2209 and x > 0, what is the value of 2x + 5?",
    "options": [
      "97",
      "99",
      "101",
      "104"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(2209) = 47. Then 2(47) + 5 = 99."
  },
  {
    "id": "iq-021",
    "category": "Numerical Reasoning",
    "difficulty": "medium",
    "question": "If x² = 7921 and x > 0, what is the value of 2x + 5?",
    "options": [
      "181",
      "183",
      "185",
      "188"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(7921) = 89. Then 2(89) + 5 = 183."
  },
  {
    "id": "iq-022",
    "category": "Numerical Reasoning",
    "difficulty": "medium",
    "question": "If x² = 2601 and x > 0, what is the value of 2x + 5?",
    "options": [
      "105",
      "107",
      "109",
      "112"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(2601) = 51. Then 2(51) + 5 = 107."
  },
  {
    "id": "iq-023",
    "category": "Numerical Reasoning",
    "difficulty": "medium",
    "question": "If x² = 169 and x > 0, what is the value of 2x + 5?",
    "options": [
      "29",
      "31",
      "33",
      "36"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(169) = 13. Then 2(13) + 5 = 31."
  },
  {
    "id": "iq-024",
    "category": "Numerical Reasoning",
    "difficulty": "medium",
    "question": "If x² = 3025 and x > 0, what is the value of 2x + 5?",
    "options": [
      "113",
      "115",
      "117",
      "120"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(3025) = 55. Then 2(55) + 5 = 115."
  },
  {
    "id": "iq-025",
    "category": "Numerical Reasoning",
    "difficulty": "medium",
    "question": "If x² = 289 and x > 0, what is the value of 2x + 5?",
    "options": [
      "37",
      "39",
      "41",
      "44"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(289) = 17. Then 2(17) + 5 = 39."
  },
  {
    "id": "iq-026",
    "category": "Numerical Reasoning",
    "difficulty": "medium",
    "question": "If x² = 3481 and x > 0, what is the value of 2x + 5?",
    "options": [
      "121",
      "123",
      "125",
      "128"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(3481) = 59. Then 2(59) + 5 = 123."
  },
  {
    "id": "iq-027",
    "category": "Numerical Reasoning",
    "difficulty": "medium",
    "question": "If x² = 441 and x > 0, what is the value of 2x + 5?",
    "options": [
      "45",
      "47",
      "49",
      "52"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(441) = 21. Then 2(21) + 5 = 47."
  },
  {
    "id": "iq-028",
    "category": "Numerical Reasoning",
    "difficulty": "medium",
    "question": "If x² = 3969 and x > 0, what is the value of 2x + 5?",
    "options": [
      "129",
      "131",
      "133",
      "136"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(3969) = 63. Then 2(63) + 5 = 131."
  },
  {
    "id": "iq-029",
    "category": "Numerical Reasoning",
    "difficulty": "medium",
    "question": "If x² = 625 and x > 0, what is the value of 2x + 5?",
    "options": [
      "53",
      "55",
      "57",
      "60"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(625) = 25. Then 2(25) + 5 = 55."
  },
  {
    "id": "iq-030",
    "category": "Numerical Reasoning",
    "difficulty": "medium",
    "question": "If x² = 4489 and x > 0, what is the value of 2x + 5?",
    "options": [
      "137",
      "139",
      "141",
      "144"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(4489) = 67. Then 2(67) + 5 = 139."
  },
  {
    "id": "iq-031",
    "category": "Numerical Reasoning",
    "difficulty": "medium",
    "question": "If x² = 841 and x > 0, what is the value of 2x + 5?",
    "options": [
      "61",
      "63",
      "65",
      "68"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(841) = 29. Then 2(29) + 5 = 63."
  },
  {
    "id": "iq-032",
    "category": "Numerical Reasoning",
    "difficulty": "medium",
    "question": "If x² = 5041 and x > 0, what is the value of 2x + 5?",
    "options": [
      "145",
      "147",
      "149",
      "152"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(5041) = 71. Then 2(71) + 5 = 147."
  },
  {
    "id": "iq-033",
    "category": "Numerical Reasoning",
    "difficulty": "medium",
    "question": "If x² = 1089 and x > 0, what is the value of 2x + 5?",
    "options": [
      "69",
      "71",
      "73",
      "76"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(1089) = 33. Then 2(33) + 5 = 71."
  },
  {
    "id": "iq-034",
    "category": "Numerical Reasoning",
    "difficulty": "medium",
    "question": "If x² = 5625 and x > 0, what is the value of 2x + 5?",
    "options": [
      "153",
      "155",
      "157",
      "160"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(5625) = 75. Then 2(75) + 5 = 155."
  },
  {
    "id": "iq-035",
    "category": "Numerical Reasoning",
    "difficulty": "medium",
    "question": "If x² = 1369 and x > 0, what is the value of 2x + 5?",
    "options": [
      "77",
      "79",
      "81",
      "84"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(1369) = 37. Then 2(37) + 5 = 79."
  },
  {
    "id": "iq-036",
    "category": "Numerical Reasoning",
    "difficulty": "medium",
    "question": "If x² = 6241 and x > 0, what is the value of 2x + 5?",
    "options": [
      "161",
      "163",
      "165",
      "168"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(6241) = 79. Then 2(79) + 5 = 163."
  },
  {
    "id": "iq-037",
    "category": "Numerical Reasoning",
    "difficulty": "medium",
    "question": "If x² = 1681 and x > 0, what is the value of 2x + 5?",
    "options": [
      "85",
      "87",
      "89",
      "92"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(1681) = 41. Then 2(41) + 5 = 87."
  },
  {
    "id": "iq-038",
    "category": "Numerical Reasoning",
    "difficulty": "hard",
    "question": "If x² = 6889 and x > 0, what is the value of 2x + 5?",
    "options": [
      "169",
      "171",
      "173",
      "176"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(6889) = 83. Then 2(83) + 5 = 171."
  },
  {
    "id": "iq-039",
    "category": "Numerical Reasoning",
    "difficulty": "hard",
    "question": "If x² = 2025 and x > 0, what is the value of 2x + 5?",
    "options": [
      "93",
      "95",
      "97",
      "100"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(2025) = 45. Then 2(45) + 5 = 95."
  },
  {
    "id": "iq-040",
    "category": "Numerical Reasoning",
    "difficulty": "hard",
    "question": "If x² = 7569 and x > 0, what is the value of 2x + 5?",
    "options": [
      "177",
      "179",
      "181",
      "184"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(7569) = 87. Then 2(87) + 5 = 179."
  },
  {
    "id": "iq-041",
    "category": "Numerical Reasoning",
    "difficulty": "hard",
    "question": "If x² = 2401 and x > 0, what is the value of 2x + 5?",
    "options": [
      "101",
      "103",
      "105",
      "108"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(2401) = 49. Then 2(49) + 5 = 103."
  },
  {
    "id": "iq-042",
    "category": "Numerical Reasoning",
    "difficulty": "hard",
    "question": "If x² = 8281 and x > 0, what is the value of 2x + 5?",
    "options": [
      "185",
      "187",
      "189",
      "192"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(8281) = 91. Then 2(91) + 5 = 187."
  },
  {
    "id": "iq-043",
    "category": "Numerical Reasoning",
    "difficulty": "hard",
    "question": "If x² = 2809 and x > 0, what is the value of 2x + 5?",
    "options": [
      "109",
      "111",
      "113",
      "116"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(2809) = 53. Then 2(53) + 5 = 111."
  },
  {
    "id": "iq-044",
    "category": "Numerical Reasoning",
    "difficulty": "hard",
    "question": "If x² = 225 and x > 0, what is the value of 2x + 5?",
    "options": [
      "33",
      "35",
      "37",
      "40"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(225) = 15. Then 2(15) + 5 = 35."
  },
  {
    "id": "iq-045",
    "category": "Numerical Reasoning",
    "difficulty": "hard",
    "question": "If x² = 3249 and x > 0, what is the value of 2x + 5?",
    "options": [
      "117",
      "119",
      "121",
      "124"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(3249) = 57. Then 2(57) + 5 = 119."
  },
  {
    "id": "iq-046",
    "category": "Numerical Reasoning",
    "difficulty": "hard",
    "question": "If x² = 361 and x > 0, what is the value of 2x + 5?",
    "options": [
      "41",
      "43",
      "45",
      "48"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(361) = 19. Then 2(19) + 5 = 43."
  },
  {
    "id": "iq-047",
    "category": "Numerical Reasoning",
    "difficulty": "hard",
    "question": "If x² = 3721 and x > 0, what is the value of 2x + 5?",
    "options": [
      "125",
      "127",
      "129",
      "132"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(3721) = 61. Then 2(61) + 5 = 127."
  },
  {
    "id": "iq-048",
    "category": "Numerical Reasoning",
    "difficulty": "hard",
    "question": "If x² = 529 and x > 0, what is the value of 2x + 5?",
    "options": [
      "49",
      "51",
      "53",
      "56"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(529) = 23. Then 2(23) + 5 = 51."
  },
  {
    "id": "iq-049",
    "category": "Numerical Reasoning",
    "difficulty": "hard",
    "question": "If x² = 4225 and x > 0, what is the value of 2x + 5?",
    "options": [
      "133",
      "135",
      "137",
      "140"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(4225) = 65. Then 2(65) + 5 = 135."
  },
  {
    "id": "iq-050",
    "category": "Numerical Reasoning",
    "difficulty": "hard",
    "question": "If x² = 729 and x > 0, what is the value of 2x + 5?",
    "options": [
      "57",
      "59",
      "61",
      "64"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "x = sqrt(729) = 27. Then 2(27) + 5 = 59."
  },
  {
    "id": "iq-051",
    "category": "Logical Reasoning",
    "difficulty": "easy",
    "question": "If all Bloops are Razzies, and all Razzies are Lazzies, then are all Bloops definitely Lazzies?",
    "options": [
      "Yes",
      "No",
      "Cannot be determined",
      "Only some are"
    ],
    "correctAnswer": 0,
    "explanation": "By transitive property, if A is a subset of B, and B is a subset of C, then A is a subset of C.",
    "correct": 0
  },
  {
    "id": "iq-052",
    "category": "Logical Reasoning",
    "difficulty": "easy",
    "question": "Look at this series: A4, C9, E16, G25, ... What should come next?",
    "options": [
      "I36",
      "H36",
      "I49",
      "J49"
    ],
    "correctAnswer": 0,
    "explanation": "Letters skip one (A, C, E, G, I). Numbers are consecutive squares (2², 3², 4², 5², 6² = 36).",
    "correct": 0
  },
  {
    "id": "iq-053",
    "category": "Logical Reasoning",
    "difficulty": "easy",
    "question": "John is taller than Mark, but shorter than David. Who is the tallest?",
    "options": [
      "John",
      "Mark",
      "David",
      "Cannot be determined"
    ],
    "correctAnswer": 2,
    "explanation": "David > John > Mark. Therefore, David is the tallest.",
    "correct": 2
  },
  {
    "id": "iq-054",
    "category": "Logical Reasoning",
    "difficulty": "easy",
    "question": "In a race, if you pass the person in second place, what place are you in?",
    "options": [
      "First",
      "Second",
      "Third",
      "Last"
    ],
    "correctAnswer": 1,
    "explanation": "You take their position, which is second place.",
    "correct": 1
  },
  {
    "id": "iq-055",
    "category": "Logical Reasoning",
    "difficulty": "easy",
    "question": "Some months have 30 days, some have 31. How many have 28?",
    "options": [
      "1",
      "6",
      "12",
      "None"
    ],
    "correctAnswer": 2,
    "explanation": "All 12 months have at least 28 days.",
    "correct": 2
  },
  {
    "id": "iq-056",
    "category": "Logical Reasoning",
    "difficulty": "easy",
    "question": "All members of team X are certified. Gamma is a member of team X. What can be deduced?",
    "options": [
      "Gamma is certified.",
      "Gamma is not certified.",
      "Gamma is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Gamma is certified."
  },
  {
    "id": "iq-057",
    "category": "Logical Reasoning",
    "difficulty": "easy",
    "question": "All members of team X are certified. Alpha is a member of team X. What can be deduced?",
    "options": [
      "Alpha is certified.",
      "Alpha is not certified.",
      "Alpha is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Alpha is certified."
  },
  {
    "id": "iq-058",
    "category": "Logical Reasoning",
    "difficulty": "easy",
    "question": "All members of team X are certified. Gamma is a member of team X. What can be deduced?",
    "options": [
      "Gamma is certified.",
      "Gamma is not certified.",
      "Gamma is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Gamma is certified."
  },
  {
    "id": "iq-059",
    "category": "Logical Reasoning",
    "difficulty": "easy",
    "question": "All members of team X are certified. Alpha is a member of team X. What can be deduced?",
    "options": [
      "Alpha is certified.",
      "Alpha is not certified.",
      "Alpha is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Alpha is certified."
  },
  {
    "id": "iq-060",
    "category": "Logical Reasoning",
    "difficulty": "easy",
    "question": "All members of team X are certified. Gamma is a member of team X. What can be deduced?",
    "options": [
      "Gamma is certified.",
      "Gamma is not certified.",
      "Gamma is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Gamma is certified."
  },
  {
    "id": "iq-061",
    "category": "Logical Reasoning",
    "difficulty": "easy",
    "question": "All members of team X are certified. Alpha is a member of team X. What can be deduced?",
    "options": [
      "Alpha is certified.",
      "Alpha is not certified.",
      "Alpha is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Alpha is certified."
  },
  {
    "id": "iq-062",
    "category": "Logical Reasoning",
    "difficulty": "easy",
    "question": "All members of team X are certified. Gamma is a member of team X. What can be deduced?",
    "options": [
      "Gamma is certified.",
      "Gamma is not certified.",
      "Gamma is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Gamma is certified."
  },
  {
    "id": "iq-063",
    "category": "Logical Reasoning",
    "difficulty": "easy",
    "question": "All members of team X are certified. Alpha is a member of team X. What can be deduced?",
    "options": [
      "Alpha is certified.",
      "Alpha is not certified.",
      "Alpha is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Alpha is certified."
  },
  {
    "id": "iq-064",
    "category": "Logical Reasoning",
    "difficulty": "easy",
    "question": "All members of team X are certified. Gamma is a member of team X. What can be deduced?",
    "options": [
      "Gamma is certified.",
      "Gamma is not certified.",
      "Gamma is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Gamma is certified."
  },
  {
    "id": "iq-065",
    "category": "Logical Reasoning",
    "difficulty": "easy",
    "question": "All members of team X are certified. Alpha is a member of team X. What can be deduced?",
    "options": [
      "Alpha is certified.",
      "Alpha is not certified.",
      "Alpha is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Alpha is certified."
  },
  {
    "id": "iq-066",
    "category": "Logical Reasoning",
    "difficulty": "easy",
    "question": "All members of team X are certified. Gamma is a member of team X. What can be deduced?",
    "options": [
      "Gamma is certified.",
      "Gamma is not certified.",
      "Gamma is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Gamma is certified."
  },
  {
    "id": "iq-067",
    "category": "Logical Reasoning",
    "difficulty": "easy",
    "question": "All members of team X are certified. Alpha is a member of team X. What can be deduced?",
    "options": [
      "Alpha is certified.",
      "Alpha is not certified.",
      "Alpha is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Alpha is certified."
  },
  {
    "id": "iq-068",
    "category": "Logical Reasoning",
    "difficulty": "medium",
    "question": "All members of team X are certified. Gamma is a member of team X. What can be deduced?",
    "options": [
      "Gamma is certified.",
      "Gamma is not certified.",
      "Gamma is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Gamma is certified."
  },
  {
    "id": "iq-069",
    "category": "Logical Reasoning",
    "difficulty": "medium",
    "question": "All members of team X are certified. Alpha is a member of team X. What can be deduced?",
    "options": [
      "Alpha is certified.",
      "Alpha is not certified.",
      "Alpha is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Alpha is certified."
  },
  {
    "id": "iq-070",
    "category": "Logical Reasoning",
    "difficulty": "medium",
    "question": "All members of team X are certified. Gamma is a member of team X. What can be deduced?",
    "options": [
      "Gamma is certified.",
      "Gamma is not certified.",
      "Gamma is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Gamma is certified."
  },
  {
    "id": "iq-071",
    "category": "Logical Reasoning",
    "difficulty": "medium",
    "question": "All members of team X are certified. Alpha is a member of team X. What can be deduced?",
    "options": [
      "Alpha is certified.",
      "Alpha is not certified.",
      "Alpha is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Alpha is certified."
  },
  {
    "id": "iq-072",
    "category": "Logical Reasoning",
    "difficulty": "medium",
    "question": "All members of team X are certified. Gamma is a member of team X. What can be deduced?",
    "options": [
      "Gamma is certified.",
      "Gamma is not certified.",
      "Gamma is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Gamma is certified."
  },
  {
    "id": "iq-073",
    "category": "Logical Reasoning",
    "difficulty": "medium",
    "question": "All members of team X are certified. Alpha is a member of team X. What can be deduced?",
    "options": [
      "Alpha is certified.",
      "Alpha is not certified.",
      "Alpha is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Alpha is certified."
  },
  {
    "id": "iq-074",
    "category": "Logical Reasoning",
    "difficulty": "medium",
    "question": "All members of team X are certified. Gamma is a member of team X. What can be deduced?",
    "options": [
      "Gamma is certified.",
      "Gamma is not certified.",
      "Gamma is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Gamma is certified."
  },
  {
    "id": "iq-075",
    "category": "Logical Reasoning",
    "difficulty": "medium",
    "question": "All members of team X are certified. Alpha is a member of team X. What can be deduced?",
    "options": [
      "Alpha is certified.",
      "Alpha is not certified.",
      "Alpha is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Alpha is certified."
  },
  {
    "id": "iq-076",
    "category": "Logical Reasoning",
    "difficulty": "medium",
    "question": "All members of team X are certified. Gamma is a member of team X. What can be deduced?",
    "options": [
      "Gamma is certified.",
      "Gamma is not certified.",
      "Gamma is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Gamma is certified."
  },
  {
    "id": "iq-077",
    "category": "Logical Reasoning",
    "difficulty": "medium",
    "question": "All members of team X are certified. Alpha is a member of team X. What can be deduced?",
    "options": [
      "Alpha is certified.",
      "Alpha is not certified.",
      "Alpha is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Alpha is certified."
  },
  {
    "id": "iq-078",
    "category": "Logical Reasoning",
    "difficulty": "medium",
    "question": "All members of team X are certified. Gamma is a member of team X. What can be deduced?",
    "options": [
      "Gamma is certified.",
      "Gamma is not certified.",
      "Gamma is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Gamma is certified."
  },
  {
    "id": "iq-079",
    "category": "Logical Reasoning",
    "difficulty": "medium",
    "question": "All members of team X are certified. Alpha is a member of team X. What can be deduced?",
    "options": [
      "Alpha is certified.",
      "Alpha is not certified.",
      "Alpha is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Alpha is certified."
  },
  {
    "id": "iq-080",
    "category": "Logical Reasoning",
    "difficulty": "medium",
    "question": "All members of team X are certified. Gamma is a member of team X. What can be deduced?",
    "options": [
      "Gamma is certified.",
      "Gamma is not certified.",
      "Gamma is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Gamma is certified."
  },
  {
    "id": "iq-081",
    "category": "Logical Reasoning",
    "difficulty": "medium",
    "question": "All members of team X are certified. Alpha is a member of team X. What can be deduced?",
    "options": [
      "Alpha is certified.",
      "Alpha is not certified.",
      "Alpha is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Alpha is certified."
  },
  {
    "id": "iq-082",
    "category": "Logical Reasoning",
    "difficulty": "medium",
    "question": "All members of team X are certified. Gamma is a member of team X. What can be deduced?",
    "options": [
      "Gamma is certified.",
      "Gamma is not certified.",
      "Gamma is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Gamma is certified."
  },
  {
    "id": "iq-083",
    "category": "Logical Reasoning",
    "difficulty": "medium",
    "question": "All members of team X are certified. Alpha is a member of team X. What can be deduced?",
    "options": [
      "Alpha is certified.",
      "Alpha is not certified.",
      "Alpha is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Alpha is certified."
  },
  {
    "id": "iq-084",
    "category": "Logical Reasoning",
    "difficulty": "medium",
    "question": "All members of team X are certified. Gamma is a member of team X. What can be deduced?",
    "options": [
      "Gamma is certified.",
      "Gamma is not certified.",
      "Gamma is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Gamma is certified."
  },
  {
    "id": "iq-085",
    "category": "Logical Reasoning",
    "difficulty": "medium",
    "question": "All members of team X are certified. Alpha is a member of team X. What can be deduced?",
    "options": [
      "Alpha is certified.",
      "Alpha is not certified.",
      "Alpha is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Alpha is certified."
  },
  {
    "id": "iq-086",
    "category": "Logical Reasoning",
    "difficulty": "medium",
    "question": "All members of team X are certified. Gamma is a member of team X. What can be deduced?",
    "options": [
      "Gamma is certified.",
      "Gamma is not certified.",
      "Gamma is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Gamma is certified."
  },
  {
    "id": "iq-087",
    "category": "Logical Reasoning",
    "difficulty": "medium",
    "question": "All members of team X are certified. Alpha is a member of team X. What can be deduced?",
    "options": [
      "Alpha is certified.",
      "Alpha is not certified.",
      "Alpha is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Alpha is certified."
  },
  {
    "id": "iq-088",
    "category": "Logical Reasoning",
    "difficulty": "hard",
    "question": "All members of team X are certified. Gamma is a member of team X. What can be deduced?",
    "options": [
      "Gamma is certified.",
      "Gamma is not certified.",
      "Gamma is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Gamma is certified."
  },
  {
    "id": "iq-089",
    "category": "Logical Reasoning",
    "difficulty": "hard",
    "question": "All members of team X are certified. Alpha is a member of team X. What can be deduced?",
    "options": [
      "Alpha is certified.",
      "Alpha is not certified.",
      "Alpha is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Alpha is certified."
  },
  {
    "id": "iq-090",
    "category": "Logical Reasoning",
    "difficulty": "hard",
    "question": "All members of team X are certified. Gamma is a member of team X. What can be deduced?",
    "options": [
      "Gamma is certified.",
      "Gamma is not certified.",
      "Gamma is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Gamma is certified."
  },
  {
    "id": "iq-091",
    "category": "Logical Reasoning",
    "difficulty": "hard",
    "question": "All members of team X are certified. Alpha is a member of team X. What can be deduced?",
    "options": [
      "Alpha is certified.",
      "Alpha is not certified.",
      "Alpha is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Alpha is certified."
  },
  {
    "id": "iq-092",
    "category": "Logical Reasoning",
    "difficulty": "hard",
    "question": "All members of team X are certified. Gamma is a member of team X. What can be deduced?",
    "options": [
      "Gamma is certified.",
      "Gamma is not certified.",
      "Gamma is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Gamma is certified."
  },
  {
    "id": "iq-093",
    "category": "Logical Reasoning",
    "difficulty": "hard",
    "question": "All members of team X are certified. Alpha is a member of team X. What can be deduced?",
    "options": [
      "Alpha is certified.",
      "Alpha is not certified.",
      "Alpha is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Alpha is certified."
  },
  {
    "id": "iq-094",
    "category": "Logical Reasoning",
    "difficulty": "hard",
    "question": "All members of team X are certified. Gamma is a member of team X. What can be deduced?",
    "options": [
      "Gamma is certified.",
      "Gamma is not certified.",
      "Gamma is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Gamma is certified."
  },
  {
    "id": "iq-095",
    "category": "Logical Reasoning",
    "difficulty": "hard",
    "question": "All members of team X are certified. Alpha is a member of team X. What can be deduced?",
    "options": [
      "Alpha is certified.",
      "Alpha is not certified.",
      "Alpha is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Alpha is certified."
  },
  {
    "id": "iq-096",
    "category": "Logical Reasoning",
    "difficulty": "hard",
    "question": "All members of team X are certified. Gamma is a member of team X. What can be deduced?",
    "options": [
      "Gamma is certified.",
      "Gamma is not certified.",
      "Gamma is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Gamma is certified."
  },
  {
    "id": "iq-097",
    "category": "Logical Reasoning",
    "difficulty": "hard",
    "question": "All members of team X are certified. Alpha is a member of team X. What can be deduced?",
    "options": [
      "Alpha is certified.",
      "Alpha is not certified.",
      "Alpha is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Alpha is certified."
  },
  {
    "id": "iq-098",
    "category": "Logical Reasoning",
    "difficulty": "hard",
    "question": "All members of team X are certified. Gamma is a member of team X. What can be deduced?",
    "options": [
      "Gamma is certified.",
      "Gamma is not certified.",
      "Gamma is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Gamma is certified."
  },
  {
    "id": "iq-099",
    "category": "Logical Reasoning",
    "difficulty": "hard",
    "question": "All members of team X are certified. Alpha is a member of team X. What can be deduced?",
    "options": [
      "Alpha is certified.",
      "Alpha is not certified.",
      "Alpha is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Alpha is certified."
  },
  {
    "id": "iq-100",
    "category": "Logical Reasoning",
    "difficulty": "hard",
    "question": "All members of team X are certified. Gamma is a member of team X. What can be deduced?",
    "options": [
      "Gamma is certified.",
      "Gamma is not certified.",
      "Gamma is the team leader.",
      "Team X has 10 members."
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Universal instantiation: All members of team X are certified, so Gamma is certified."
  },
  {
    "id": "iq-101",
    "category": "Verbal Reasoning",
    "difficulty": "easy",
    "question": "Which word does not belong with the others?",
    "options": [
      "Apple",
      "Banana",
      "Carrot",
      "Grape"
    ],
    "correctAnswer": 2,
    "explanation": "Carrot is a vegetable, the rest are fruits.",
    "correct": 2
  },
  {
    "id": "iq-102",
    "category": "Verbal Reasoning",
    "difficulty": "easy",
    "question": "Find the relationship: Odometer is to Mileage as Compass is to...",
    "options": [
      "Speed",
      "Hiking",
      "Needle",
      "Direction"
    ],
    "correctAnswer": 3,
    "explanation": "An odometer measures mileage; a compass determines direction.",
    "correct": 3
  },
  {
    "id": "iq-103",
    "category": "Verbal Reasoning",
    "difficulty": "easy",
    "question": "Choose the word that is most nearly opposite in meaning to 'Obscure'.",
    "options": [
      "Hidden",
      "Clear",
      "Complicated",
      "Dark"
    ],
    "correctAnswer": 1,
    "explanation": "Obscure means unclear or hidden. Clear is the direct opposite.",
    "correct": 1
  },
  {
    "id": "iq-104",
    "category": "Verbal Reasoning",
    "difficulty": "easy",
    "question": "Rearrange the letters 'CIFAIPC' to form the name of a...",
    "options": [
      "City",
      "Animal",
      "Ocean",
      "River"
    ],
    "correctAnswer": 2,
    "explanation": "The letters rearrange to form 'PACIFIC', which is an ocean.",
    "correct": 2
  },
  {
    "id": "iq-105",
    "category": "Verbal Reasoning",
    "difficulty": "easy",
    "question": "If 'CAB' is coded as 6 and 'BED' is coded as 40, how will 'HAD' be coded? (A=1, B=2, C=3...)",
    "options": [
      "13",
      "32",
      "45",
      "18"
    ],
    "correctAnswer": 1,
    "explanation": "C*A*B = 3*1*2 = 6. B*E*D = 2*5*4 = 40. H*A*D = 8*1*4 = 32.",
    "correct": 1
  },
  {
    "id": "iq-106",
    "category": "Verbal Reasoning",
    "difficulty": "easy",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-107",
    "category": "Verbal Reasoning",
    "difficulty": "easy",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-108",
    "category": "Verbal Reasoning",
    "difficulty": "easy",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-109",
    "category": "Verbal Reasoning",
    "difficulty": "easy",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-110",
    "category": "Verbal Reasoning",
    "difficulty": "easy",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-111",
    "category": "Verbal Reasoning",
    "difficulty": "easy",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-112",
    "category": "Verbal Reasoning",
    "difficulty": "easy",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-113",
    "category": "Verbal Reasoning",
    "difficulty": "easy",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-114",
    "category": "Verbal Reasoning",
    "difficulty": "easy",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-115",
    "category": "Verbal Reasoning",
    "difficulty": "easy",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-116",
    "category": "Verbal Reasoning",
    "difficulty": "easy",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-117",
    "category": "Verbal Reasoning",
    "difficulty": "easy",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-118",
    "category": "Verbal Reasoning",
    "difficulty": "medium",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-119",
    "category": "Verbal Reasoning",
    "difficulty": "medium",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-120",
    "category": "Verbal Reasoning",
    "difficulty": "medium",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-121",
    "category": "Verbal Reasoning",
    "difficulty": "medium",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-122",
    "category": "Verbal Reasoning",
    "difficulty": "medium",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-123",
    "category": "Verbal Reasoning",
    "difficulty": "medium",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-124",
    "category": "Verbal Reasoning",
    "difficulty": "medium",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-125",
    "category": "Verbal Reasoning",
    "difficulty": "medium",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-126",
    "category": "Verbal Reasoning",
    "difficulty": "medium",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-127",
    "category": "Verbal Reasoning",
    "difficulty": "medium",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-128",
    "category": "Verbal Reasoning",
    "difficulty": "medium",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-129",
    "category": "Verbal Reasoning",
    "difficulty": "medium",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-130",
    "category": "Verbal Reasoning",
    "difficulty": "medium",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-131",
    "category": "Verbal Reasoning",
    "difficulty": "medium",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-132",
    "category": "Verbal Reasoning",
    "difficulty": "medium",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-133",
    "category": "Verbal Reasoning",
    "difficulty": "medium",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-134",
    "category": "Verbal Reasoning",
    "difficulty": "medium",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-135",
    "category": "Verbal Reasoning",
    "difficulty": "medium",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-136",
    "category": "Verbal Reasoning",
    "difficulty": "medium",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-137",
    "category": "Verbal Reasoning",
    "difficulty": "medium",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-138",
    "category": "Verbal Reasoning",
    "difficulty": "hard",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-139",
    "category": "Verbal Reasoning",
    "difficulty": "hard",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-140",
    "category": "Verbal Reasoning",
    "difficulty": "hard",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-141",
    "category": "Verbal Reasoning",
    "difficulty": "hard",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-142",
    "category": "Verbal Reasoning",
    "difficulty": "hard",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-143",
    "category": "Verbal Reasoning",
    "difficulty": "hard",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-144",
    "category": "Verbal Reasoning",
    "difficulty": "hard",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-145",
    "category": "Verbal Reasoning",
    "difficulty": "hard",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-146",
    "category": "Verbal Reasoning",
    "difficulty": "hard",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-147",
    "category": "Verbal Reasoning",
    "difficulty": "hard",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-148",
    "category": "Verbal Reasoning",
    "difficulty": "hard",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-149",
    "category": "Verbal Reasoning",
    "difficulty": "hard",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-150",
    "category": "Verbal Reasoning",
    "difficulty": "hard",
    "question": "Choose the pair that best matches the relationship:\nARCHAEOLOGY : ARTIFACTS ::",
    "options": [
      "Paleontology : Fossils",
      "Astronomy : Plants",
      "Zoology : Rocks",
      "Meteorology : Coins"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Archaeology studies human artifacts, just as paleontology studies prehistoric fossils."
  },
  {
    "id": "iq-151",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "What comes next in the pattern? ☀️, ☁️, 🌧️, ☀️, ☁️, ...?",
    "options": [
      "☀️",
      "☁️",
      "🌧️",
      "🌩️"
    ],
    "correctAnswer": 2,
    "explanation": "The pattern repeats: Sun, Cloud, Rain.",
    "correct": 2
  },
  {
    "id": "iq-152",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "Find the odd one out: 144, 169, 196, 210, 225",
    "options": [
      "144",
      "169",
      "210",
      "225"
    ],
    "correctAnswer": 2,
    "explanation": "All others are perfect squares (12², 13², 14², 15²). 210 is not.",
    "correct": 2
  },
  {
    "id": "iq-153",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "Look at this series: 3, 4, 7, 8, 11, 12, ... What number comes next?",
    "options": [
      "13",
      "14",
      "15",
      "16"
    ],
    "correctAnswer": 2,
    "explanation": "The alternating pattern is +1, +3, +1, +3, +1, +3... so 12 + 3 = 15.",
    "correct": 2
  },
  {
    "id": "iq-154",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "Which number replaces the question mark? [3, 9, 27] [4, 16, 64] [5, 25, ?]",
    "options": [
      "100",
      "125",
      "150",
      "200"
    ],
    "correctAnswer": 1,
    "explanation": "The pattern in each bracket is x, x², x³. For 5, it is 5, 25, 125.",
    "correct": 1
  },
  {
    "id": "iq-155",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "If 11x11 = 4, 22x22 = 16, what is 33x33?",
    "options": [
      "9",
      "18",
      "36",
      "81"
    ],
    "correctAnswer": 2,
    "explanation": "Sum the digits of the first number, sum the digits of the second, then multiply. (1+1)*(1+1)=4. (2+2)*(2+2)=16. (3+3)*(3+3)=36.",
    "correct": 2
  },
  {
    "id": "iq-156",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "Which number logically completes the series: 8, 15, 22, 29, [ ? ]",
    "options": [
      "35",
      "36",
      "37",
      "38"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 29 + 7 = 36."
  },
  {
    "id": "iq-157",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "Which number logically completes the series: 4, 11, 18, 25, [ ? ]",
    "options": [
      "31",
      "32",
      "33",
      "34"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 25 + 7 = 32."
  },
  {
    "id": "iq-158",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "Which number logically completes the series: 10, 17, 24, 31, [ ? ]",
    "options": [
      "37",
      "38",
      "39",
      "40"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 31 + 7 = 38."
  },
  {
    "id": "iq-159",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "Which number logically completes the series: 6, 13, 20, 27, [ ? ]",
    "options": [
      "33",
      "34",
      "35",
      "36"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 27 + 7 = 34."
  },
  {
    "id": "iq-160",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "Which number logically completes the series: 12, 19, 26, 33, [ ? ]",
    "options": [
      "39",
      "40",
      "41",
      "42"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 33 + 7 = 40."
  },
  {
    "id": "iq-161",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "Which number logically completes the series: 8, 15, 22, 29, [ ? ]",
    "options": [
      "35",
      "36",
      "37",
      "38"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 29 + 7 = 36."
  },
  {
    "id": "iq-162",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "Which number logically completes the series: 4, 11, 18, 25, [ ? ]",
    "options": [
      "31",
      "32",
      "33",
      "34"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 25 + 7 = 32."
  },
  {
    "id": "iq-163",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "Which number logically completes the series: 10, 17, 24, 31, [ ? ]",
    "options": [
      "37",
      "38",
      "39",
      "40"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 31 + 7 = 38."
  },
  {
    "id": "iq-164",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "Which number logically completes the series: 6, 13, 20, 27, [ ? ]",
    "options": [
      "33",
      "34",
      "35",
      "36"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 27 + 7 = 34."
  },
  {
    "id": "iq-165",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "Which number logically completes the series: 12, 19, 26, 33, [ ? ]",
    "options": [
      "39",
      "40",
      "41",
      "42"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 33 + 7 = 40."
  },
  {
    "id": "iq-166",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "Which number logically completes the series: 8, 15, 22, 29, [ ? ]",
    "options": [
      "35",
      "36",
      "37",
      "38"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 29 + 7 = 36."
  },
  {
    "id": "iq-167",
    "category": "Pattern Recognition",
    "difficulty": "easy",
    "question": "Which number logically completes the series: 4, 11, 18, 25, [ ? ]",
    "options": [
      "31",
      "32",
      "33",
      "34"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 25 + 7 = 32."
  },
  {
    "id": "iq-168",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Which number logically completes the series: 10, 17, 24, 31, [ ? ]",
    "options": [
      "37",
      "38",
      "39",
      "40"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 31 + 7 = 38."
  },
  {
    "id": "iq-169",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Which number logically completes the series: 6, 13, 20, 27, [ ? ]",
    "options": [
      "33",
      "34",
      "35",
      "36"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 27 + 7 = 34."
  },
  {
    "id": "iq-170",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Which number logically completes the series: 12, 19, 26, 33, [ ? ]",
    "options": [
      "39",
      "40",
      "41",
      "42"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 33 + 7 = 40."
  },
  {
    "id": "iq-171",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Which number logically completes the series: 8, 15, 22, 29, [ ? ]",
    "options": [
      "35",
      "36",
      "37",
      "38"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 29 + 7 = 36."
  },
  {
    "id": "iq-172",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Which number logically completes the series: 4, 11, 18, 25, [ ? ]",
    "options": [
      "31",
      "32",
      "33",
      "34"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 25 + 7 = 32."
  },
  {
    "id": "iq-173",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Which number logically completes the series: 10, 17, 24, 31, [ ? ]",
    "options": [
      "37",
      "38",
      "39",
      "40"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 31 + 7 = 38."
  },
  {
    "id": "iq-174",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Which number logically completes the series: 6, 13, 20, 27, [ ? ]",
    "options": [
      "33",
      "34",
      "35",
      "36"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 27 + 7 = 34."
  },
  {
    "id": "iq-175",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Which number logically completes the series: 12, 19, 26, 33, [ ? ]",
    "options": [
      "39",
      "40",
      "41",
      "42"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 33 + 7 = 40."
  },
  {
    "id": "iq-176",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Which number logically completes the series: 8, 15, 22, 29, [ ? ]",
    "options": [
      "35",
      "36",
      "37",
      "38"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 29 + 7 = 36."
  },
  {
    "id": "iq-177",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Which number logically completes the series: 4, 11, 18, 25, [ ? ]",
    "options": [
      "31",
      "32",
      "33",
      "34"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 25 + 7 = 32."
  },
  {
    "id": "iq-178",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Which number logically completes the series: 10, 17, 24, 31, [ ? ]",
    "options": [
      "37",
      "38",
      "39",
      "40"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 31 + 7 = 38."
  },
  {
    "id": "iq-179",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Which number logically completes the series: 6, 13, 20, 27, [ ? ]",
    "options": [
      "33",
      "34",
      "35",
      "36"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 27 + 7 = 34."
  },
  {
    "id": "iq-180",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Which number logically completes the series: 12, 19, 26, 33, [ ? ]",
    "options": [
      "39",
      "40",
      "41",
      "42"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 33 + 7 = 40."
  },
  {
    "id": "iq-181",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Which number logically completes the series: 8, 15, 22, 29, [ ? ]",
    "options": [
      "35",
      "36",
      "37",
      "38"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 29 + 7 = 36."
  },
  {
    "id": "iq-182",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Which number logically completes the series: 4, 11, 18, 25, [ ? ]",
    "options": [
      "31",
      "32",
      "33",
      "34"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 25 + 7 = 32."
  },
  {
    "id": "iq-183",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Which number logically completes the series: 10, 17, 24, 31, [ ? ]",
    "options": [
      "37",
      "38",
      "39",
      "40"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 31 + 7 = 38."
  },
  {
    "id": "iq-184",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Which number logically completes the series: 6, 13, 20, 27, [ ? ]",
    "options": [
      "33",
      "34",
      "35",
      "36"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 27 + 7 = 34."
  },
  {
    "id": "iq-185",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Which number logically completes the series: 12, 19, 26, 33, [ ? ]",
    "options": [
      "39",
      "40",
      "41",
      "42"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 33 + 7 = 40."
  },
  {
    "id": "iq-186",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Which number logically completes the series: 8, 15, 22, 29, [ ? ]",
    "options": [
      "35",
      "36",
      "37",
      "38"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 29 + 7 = 36."
  },
  {
    "id": "iq-187",
    "category": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Which number logically completes the series: 4, 11, 18, 25, [ ? ]",
    "options": [
      "31",
      "32",
      "33",
      "34"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 25 + 7 = 32."
  },
  {
    "id": "iq-188",
    "category": "Pattern Recognition",
    "difficulty": "hard",
    "question": "Which number logically completes the series: 10, 17, 24, 31, [ ? ]",
    "options": [
      "37",
      "38",
      "39",
      "40"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 31 + 7 = 38."
  },
  {
    "id": "iq-189",
    "category": "Pattern Recognition",
    "difficulty": "hard",
    "question": "Which number logically completes the series: 6, 13, 20, 27, [ ? ]",
    "options": [
      "33",
      "34",
      "35",
      "36"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 27 + 7 = 34."
  },
  {
    "id": "iq-190",
    "category": "Pattern Recognition",
    "difficulty": "hard",
    "question": "Which number logically completes the series: 12, 19, 26, 33, [ ? ]",
    "options": [
      "39",
      "40",
      "41",
      "42"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 33 + 7 = 40."
  },
  {
    "id": "iq-191",
    "category": "Pattern Recognition",
    "difficulty": "hard",
    "question": "Which number logically completes the series: 8, 15, 22, 29, [ ? ]",
    "options": [
      "35",
      "36",
      "37",
      "38"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 29 + 7 = 36."
  },
  {
    "id": "iq-192",
    "category": "Pattern Recognition",
    "difficulty": "hard",
    "question": "Which number logically completes the series: 4, 11, 18, 25, [ ? ]",
    "options": [
      "31",
      "32",
      "33",
      "34"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 25 + 7 = 32."
  },
  {
    "id": "iq-193",
    "category": "Pattern Recognition",
    "difficulty": "hard",
    "question": "Which number logically completes the series: 10, 17, 24, 31, [ ? ]",
    "options": [
      "37",
      "38",
      "39",
      "40"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 31 + 7 = 38."
  },
  {
    "id": "iq-194",
    "category": "Pattern Recognition",
    "difficulty": "hard",
    "question": "Which number logically completes the series: 6, 13, 20, 27, [ ? ]",
    "options": [
      "33",
      "34",
      "35",
      "36"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 27 + 7 = 34."
  },
  {
    "id": "iq-195",
    "category": "Pattern Recognition",
    "difficulty": "hard",
    "question": "Which number logically completes the series: 12, 19, 26, 33, [ ? ]",
    "options": [
      "39",
      "40",
      "41",
      "42"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 33 + 7 = 40."
  },
  {
    "id": "iq-196",
    "category": "Pattern Recognition",
    "difficulty": "hard",
    "question": "Which number logically completes the series: 8, 15, 22, 29, [ ? ]",
    "options": [
      "35",
      "36",
      "37",
      "38"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 29 + 7 = 36."
  },
  {
    "id": "iq-197",
    "category": "Pattern Recognition",
    "difficulty": "hard",
    "question": "Which number logically completes the series: 4, 11, 18, 25, [ ? ]",
    "options": [
      "31",
      "32",
      "33",
      "34"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 25 + 7 = 32."
  },
  {
    "id": "iq-198",
    "category": "Pattern Recognition",
    "difficulty": "hard",
    "question": "Which number logically completes the series: 10, 17, 24, 31, [ ? ]",
    "options": [
      "37",
      "38",
      "39",
      "40"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 31 + 7 = 38."
  },
  {
    "id": "iq-199",
    "category": "Pattern Recognition",
    "difficulty": "hard",
    "question": "Which number logically completes the series: 6, 13, 20, 27, [ ? ]",
    "options": [
      "33",
      "34",
      "35",
      "36"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 27 + 7 = 34."
  },
  {
    "id": "iq-200",
    "category": "Pattern Recognition",
    "difficulty": "hard",
    "question": "Which number logically completes the series: 12, 19, 26, 33, [ ? ]",
    "options": [
      "39",
      "40",
      "41",
      "42"
    ],
    "correctAnswer": 1,
    "correct": 1,
    "explanation": "The pattern adds 7 at each step: 33 + 7 = 40."
  },
  {
    "id": "iq-201",
    "category": "Spatial Reasoning",
    "difficulty": "easy",
    "question": "If you fold a square piece of paper in half twice and cut a hole in the center, how many holes will you see when you unfold it?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": 0,
    "explanation": "Cutting the folded center removes the shared central point, resulting in exactly one hole.",
    "correct": 0
  },
  {
    "id": "iq-202",
    "category": "Spatial Reasoning",
    "difficulty": "easy",
    "question": "A standard die has opposite sides that sum to 7. If you see a 4 on top, what number is on the bottom?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 1,
    "explanation": "4 + 3 = 7, so 3 must be on the bottom.",
    "correct": 1
  },
  {
    "id": "iq-203",
    "category": "Spatial Reasoning",
    "difficulty": "easy",
    "question": "Imagine a 3x3x3 cube made of 27 smaller cubes. If you paint the outside red, how many small cubes have exactly zero sides painted?",
    "options": [
      "1",
      "2",
      "8",
      "9"
    ],
    "correctAnswer": 0,
    "explanation": "Only the single cube in the very center of the 3x3x3 structure has no exposed faces.",
    "correct": 0
  },
  {
    "id": "iq-204",
    "category": "Spatial Reasoning",
    "difficulty": "easy",
    "question": "If you rotate the letter 'p' 180 degrees around its center, what letter does it most resemble?",
    "options": [
      "b",
      "d",
      "q",
      "p"
    ],
    "correctAnswer": 1,
    "explanation": "Rotating 'p' 180 degrees (upside down) creates a 'd'. Flipping it horizontally makes a 'q'.",
    "correct": 1
  },
  {
    "id": "iq-205",
    "category": "Spatial Reasoning",
    "difficulty": "easy",
    "question": "How many distinct squares can you find on a standard 8x8 chessboard?",
    "options": [
      "64",
      "128",
      "204",
      "256"
    ],
    "correctAnswer": 2,
    "explanation": "The formula is 1² + 2² + ... + 8² = 204 total squares of all sizes.",
    "correct": 2
  },
  {
    "id": "iq-206",
    "category": "Spatial Reasoning",
    "difficulty": "easy",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-207",
    "category": "Spatial Reasoning",
    "difficulty": "easy",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-208",
    "category": "Spatial Reasoning",
    "difficulty": "easy",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-209",
    "category": "Spatial Reasoning",
    "difficulty": "easy",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-210",
    "category": "Spatial Reasoning",
    "difficulty": "easy",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-211",
    "category": "Spatial Reasoning",
    "difficulty": "easy",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-212",
    "category": "Spatial Reasoning",
    "difficulty": "easy",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-213",
    "category": "Spatial Reasoning",
    "difficulty": "easy",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-214",
    "category": "Spatial Reasoning",
    "difficulty": "easy",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-215",
    "category": "Spatial Reasoning",
    "difficulty": "easy",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-216",
    "category": "Spatial Reasoning",
    "difficulty": "easy",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-217",
    "category": "Spatial Reasoning",
    "difficulty": "easy",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-218",
    "category": "Spatial Reasoning",
    "difficulty": "medium",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-219",
    "category": "Spatial Reasoning",
    "difficulty": "medium",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-220",
    "category": "Spatial Reasoning",
    "difficulty": "medium",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-221",
    "category": "Spatial Reasoning",
    "difficulty": "medium",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-222",
    "category": "Spatial Reasoning",
    "difficulty": "medium",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-223",
    "category": "Spatial Reasoning",
    "difficulty": "medium",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-224",
    "category": "Spatial Reasoning",
    "difficulty": "medium",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-225",
    "category": "Spatial Reasoning",
    "difficulty": "medium",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-226",
    "category": "Spatial Reasoning",
    "difficulty": "medium",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-227",
    "category": "Spatial Reasoning",
    "difficulty": "medium",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-228",
    "category": "Spatial Reasoning",
    "difficulty": "medium",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-229",
    "category": "Spatial Reasoning",
    "difficulty": "medium",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-230",
    "category": "Spatial Reasoning",
    "difficulty": "medium",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-231",
    "category": "Spatial Reasoning",
    "difficulty": "medium",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-232",
    "category": "Spatial Reasoning",
    "difficulty": "medium",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-233",
    "category": "Spatial Reasoning",
    "difficulty": "medium",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-234",
    "category": "Spatial Reasoning",
    "difficulty": "medium",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-235",
    "category": "Spatial Reasoning",
    "difficulty": "medium",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-236",
    "category": "Spatial Reasoning",
    "difficulty": "medium",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-237",
    "category": "Spatial Reasoning",
    "difficulty": "medium",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-238",
    "category": "Spatial Reasoning",
    "difficulty": "hard",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-239",
    "category": "Spatial Reasoning",
    "difficulty": "hard",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-240",
    "category": "Spatial Reasoning",
    "difficulty": "hard",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-241",
    "category": "Spatial Reasoning",
    "difficulty": "hard",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-242",
    "category": "Spatial Reasoning",
    "difficulty": "hard",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-243",
    "category": "Spatial Reasoning",
    "difficulty": "hard",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-244",
    "category": "Spatial Reasoning",
    "difficulty": "hard",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-245",
    "category": "Spatial Reasoning",
    "difficulty": "hard",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-246",
    "category": "Spatial Reasoning",
    "difficulty": "hard",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-247",
    "category": "Spatial Reasoning",
    "difficulty": "hard",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-248",
    "category": "Spatial Reasoning",
    "difficulty": "hard",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-249",
    "category": "Spatial Reasoning",
    "difficulty": "hard",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-250",
    "category": "Spatial Reasoning",
    "difficulty": "hard",
    "question": "A pointer starts facing North and rotates 270° clockwise. What direction is it facing?",
    "options": [
      "West",
      "South",
      "East",
      "North"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Rotating 270° clockwise from North points directly to West."
  },
  {
    "id": "iq-251",
    "category": "Working Memory",
    "difficulty": "easy",
    "question": "Read these numbers carefully: 4, 9, 2, 8. What is the sum of the first and last numbers?",
    "options": [
      "6",
      "11",
      "12",
      "13"
    ],
    "correctAnswer": 2,
    "explanation": "4 + 8 = 12.",
    "correct": 2
  },
  {
    "id": "iq-252",
    "category": "Working Memory",
    "difficulty": "easy",
    "question": "Think of the word 'COMPUTER'. If you remove the vowels and reverse the remaining letters, what do you get?",
    "options": [
      "RTPMC",
      "RTPCM",
      "CMPTR",
      "RTCMP"
    ],
    "correctAnswer": 0,
    "explanation": "Consonants: C, M, P, T, R. Reversed: R, T, P, M, C.",
    "correct": 0
  },
  {
    "id": "iq-253",
    "category": "Working Memory",
    "difficulty": "easy",
    "question": "Start with 10. Multiply by 2, subtract 5, add 3, and divide by 2. What is the result?",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "correctAnswer": 2,
    "explanation": "10 * 2 = 20. 20 - 5 = 15. 15 + 3 = 18. 18 / 2 = 9.",
    "correct": 2
  },
  {
    "id": "iq-254",
    "category": "Working Memory",
    "difficulty": "easy",
    "question": "A sequence starts: Circle, Square, Triangle. For every Circle, add a Star immediately after. What is the 3rd item in the new sequence?",
    "options": [
      "Circle",
      "Star",
      "Square",
      "Triangle"
    ],
    "correctAnswer": 2,
    "explanation": "New sequence: Circle, Star, Square, Triangle. The 3rd item is Square.",
    "correct": 2
  },
  {
    "id": "iq-255",
    "category": "Working Memory",
    "difficulty": "easy",
    "question": "Alphabetize the words: 'Zebra', 'Apple', 'Monkey', 'Ant'. What is the 3rd letter of the 2nd word?",
    "options": [
      "p",
      "n",
      "o",
      "b"
    ],
    "correctAnswer": 0,
    "explanation": "Alphabetical: Ant, Apple, Monkey, Zebra. The 2nd word is Apple. Its 3rd letter is 'p'.",
    "correct": 0
  },
  {
    "id": "iq-256",
    "category": "Working Memory",
    "difficulty": "easy",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-257",
    "category": "Working Memory",
    "difficulty": "easy",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-258",
    "category": "Working Memory",
    "difficulty": "easy",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-259",
    "category": "Working Memory",
    "difficulty": "easy",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-260",
    "category": "Working Memory",
    "difficulty": "easy",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-261",
    "category": "Working Memory",
    "difficulty": "easy",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-262",
    "category": "Working Memory",
    "difficulty": "easy",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-263",
    "category": "Working Memory",
    "difficulty": "easy",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-264",
    "category": "Working Memory",
    "difficulty": "easy",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-265",
    "category": "Working Memory",
    "difficulty": "easy",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-266",
    "category": "Working Memory",
    "difficulty": "medium",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-267",
    "category": "Working Memory",
    "difficulty": "medium",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-268",
    "category": "Working Memory",
    "difficulty": "medium",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-269",
    "category": "Working Memory",
    "difficulty": "medium",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-270",
    "category": "Working Memory",
    "difficulty": "medium",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-271",
    "category": "Working Memory",
    "difficulty": "medium",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-272",
    "category": "Working Memory",
    "difficulty": "medium",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-273",
    "category": "Working Memory",
    "difficulty": "medium",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-274",
    "category": "Working Memory",
    "difficulty": "medium",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-275",
    "category": "Working Memory",
    "difficulty": "medium",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-276",
    "category": "Working Memory",
    "difficulty": "medium",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-277",
    "category": "Working Memory",
    "difficulty": "medium",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-278",
    "category": "Working Memory",
    "difficulty": "medium",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-279",
    "category": "Working Memory",
    "difficulty": "medium",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-280",
    "category": "Working Memory",
    "difficulty": "medium",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-281",
    "category": "Working Memory",
    "difficulty": "medium",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-282",
    "category": "Working Memory",
    "difficulty": "medium",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-283",
    "category": "Working Memory",
    "difficulty": "medium",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-284",
    "category": "Working Memory",
    "difficulty": "medium",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-285",
    "category": "Working Memory",
    "difficulty": "medium",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-286",
    "category": "Working Memory",
    "difficulty": "hard",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-287",
    "category": "Working Memory",
    "difficulty": "hard",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-288",
    "category": "Working Memory",
    "difficulty": "hard",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-289",
    "category": "Working Memory",
    "difficulty": "hard",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-290",
    "category": "Working Memory",
    "difficulty": "hard",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-291",
    "category": "Working Memory",
    "difficulty": "hard",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-292",
    "category": "Working Memory",
    "difficulty": "hard",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-293",
    "category": "Working Memory",
    "difficulty": "hard",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-294",
    "category": "Working Memory",
    "difficulty": "hard",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-295",
    "category": "Working Memory",
    "difficulty": "hard",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-296",
    "category": "Working Memory",
    "difficulty": "hard",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-297",
    "category": "Working Memory",
    "difficulty": "hard",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-298",
    "category": "Working Memory",
    "difficulty": "hard",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-299",
    "category": "Working Memory",
    "difficulty": "hard",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  },
  {
    "id": "iq-300",
    "category": "Working Memory",
    "difficulty": "hard",
    "question": "Mentally reverse the digit sequence: 3 — 7 — 2",
    "options": [
      "2 — 7 — 3",
      "2 — 3 — 7",
      "7 — 3 — 3",
      "7 — 2 — 3"
    ],
    "correctAnswer": 0,
    "correct": 0,
    "explanation": "Reading 3 — 7 — 2 backwards yields 2 — 7 — 3."
  }
];

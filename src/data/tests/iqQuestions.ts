export interface IQQuestion {
  id: string;
  category: 'Numerical Reasoning' | 'Logical Reasoning' | 'Verbal Reasoning' | 'Pattern Recognition' | 'Spatial Reasoning' | 'Working Memory';
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const iqQuestions: IQQuestion[] = [
  // NUMERICAL REASONING
  {
    id: "nr-1",
    category: "Numerical Reasoning",
    difficulty: "easy",
    question: "What is the next number in the sequence: 2, 6, 12, 20, 30, ...?",
    options: ["40", "42", "44", "48"],
    correctAnswer: 1, // 42
    explanation: "The differences between consecutive terms are 4, 6, 8, 10. The next difference should be 12, making 30 + 12 = 42."
  },
  {
    id: "nr-2",
    category: "Numerical Reasoning",
    difficulty: "medium",
    question: "If a shirt costs $20 after a 20% discount, what was its original price?",
    options: ["$24", "$25", "$30", "$32"],
    correctAnswer: 1, // $25
    explanation: "If $20 is 80% of the original price, then the original price is 20 / 0.8 = $25."
  },
  {
    id: "nr-3",
    category: "Numerical Reasoning",
    difficulty: "hard",
    question: "A train traveling at 60 mph crosses a 1-mile long bridge. If the train is 1 mile long, how long does it take for the entire train to cross the bridge?",
    options: ["1 minute", "2 minutes", "3 minutes", "4 minutes"],
    correctAnswer: 1, // 2 minutes
    explanation: "The total distance to cross is the length of the bridge plus the length of the train (1 + 1 = 2 miles). At 60 mph (1 mile per minute), it takes 2 minutes."
  },
  {
    id: "nr-4",
    category: "Numerical Reasoning",
    difficulty: "medium",
    question: "Which fraction is the largest?",
    options: ["3/4", "7/9", "5/7", "8/11"],
    correctAnswer: 1, // 7/9
    explanation: "Converted to decimals: 3/4 = 0.75, 7/9 ≈ 0.777, 5/7 ≈ 0.714, 8/11 ≈ 0.727. 7/9 is the largest."
  },
  {
    id: "nr-5",
    category: "Numerical Reasoning",
    difficulty: "hard",
    question: "If 3 cats catch 3 mice in 3 minutes, how many cats are needed to catch 100 mice in 100 minutes?",
    options: ["1", "3", "33", "100"],
    correctAnswer: 1, // 3
    explanation: "The rate is 1 cat catches 1 mouse in 3 minutes. Therefore, 3 cats will catch 100 mice in 100 minutes."
  },
  
  // LOGICAL REASONING
  {
    id: "lr-1",
    category: "Logical Reasoning",
    difficulty: "easy",
    question: "If all Bloops are Razzies, and all Razzies are Lazzies, then are all Bloops definitely Lazzies?",
    options: ["Yes", "No", "Cannot be determined", "Only some are"],
    correctAnswer: 0, // Yes
    explanation: "By transitive property, if A is a subset of B, and B is a subset of C, then A is a subset of C."
  },
  {
    id: "lr-2",
    category: "Logical Reasoning",
    difficulty: "medium",
    question: "Look at this series: A4, C9, E16, G25, ... What should come next?",
    options: ["I36", "H36", "I49", "J49"],
    correctAnswer: 0, // I36
    explanation: "Letters skip one (A, C, E, G, I). Numbers are consecutive squares (2², 3², 4², 5², 6² = 36)."
  },
  {
    id: "lr-3",
    category: "Logical Reasoning",
    difficulty: "medium",
    question: "John is taller than Mark, but shorter than David. Who is the tallest?",
    options: ["John", "Mark", "David", "Cannot be determined"],
    correctAnswer: 2, // David
    explanation: "David > John > Mark. Therefore, David is the tallest."
  },
  {
    id: "lr-4",
    category: "Logical Reasoning",
    difficulty: "hard",
    question: "In a race, if you pass the person in second place, what place are you in?",
    options: ["First", "Second", "Third", "Last"],
    correctAnswer: 1, // Second
    explanation: "You take their position, which is second place."
  },
  {
    id: "lr-5",
    category: "Logical Reasoning",
    difficulty: "hard",
    question: "Some months have 30 days, some have 31. How many have 28?",
    options: ["1", "6", "12", "None"],
    correctAnswer: 2, // 12
    explanation: "All 12 months have at least 28 days."
  },

  // VERBAL REASONING
  {
    id: "vr-1",
    category: "Verbal Reasoning",
    difficulty: "easy",
    question: "Which word does not belong with the others?",
    options: ["Apple", "Banana", "Carrot", "Grape"],
    correctAnswer: 2, // Carrot
    explanation: "Carrot is a vegetable, the rest are fruits."
  },
  {
    id: "vr-2",
    category: "Verbal Reasoning",
    difficulty: "medium",
    question: "Find the relationship: Odometer is to Mileage as Compass is to...",
    options: ["Speed", "Hiking", "Needle", "Direction"],
    correctAnswer: 3, // Direction
    explanation: "An odometer measures mileage; a compass determines direction."
  },
  {
    id: "vr-3",
    category: "Verbal Reasoning",
    difficulty: "medium",
    question: "Choose the word that is most nearly opposite in meaning to 'Obscure'.",
    options: ["Hidden", "Clear", "Complicated", "Dark"],
    correctAnswer: 1, // Clear
    explanation: "Obscure means unclear or hidden. Clear is the direct opposite."
  },
  {
    id: "vr-4",
    category: "Verbal Reasoning",
    difficulty: "hard",
    question: "Rearrange the letters 'CIFAIPC' to form the name of a...",
    options: ["City", "Animal", "Ocean", "River"],
    correctAnswer: 2, // Ocean
    explanation: "The letters rearrange to form 'PACIFIC', which is an ocean."
  },
  {
    id: "vr-5",
    category: "Verbal Reasoning",
    difficulty: "hard",
    question: "If 'CAB' is coded as 6 and 'BED' is coded as 40, how will 'HAD' be coded? (A=1, B=2, C=3...)",
    options: ["13", "32", "45", "18"],
    correctAnswer: 1, // 32
    explanation: "C*A*B = 3*1*2 = 6. B*E*D = 2*5*4 = 40. H*A*D = 8*1*4 = 32."
  },

  // PATTERN RECOGNITION
  {
    id: "pr-1",
    category: "Pattern Recognition",
    difficulty: "easy",
    question: "What comes next in the pattern? ☀️, ☁️, 🌧️, ☀️, ☁️, ...?",
    options: ["☀️", "☁️", "🌧️", "🌩️"],
    correctAnswer: 2, // 🌧️
    explanation: "The pattern repeats: Sun, Cloud, Rain."
  },
  {
    id: "pr-2",
    category: "Pattern Recognition",
    difficulty: "medium",
    question: "Find the odd one out: 144, 169, 196, 210, 225",
    options: ["144", "169", "210", "225"],
    correctAnswer: 2, // 210
    explanation: "All others are perfect squares (12², 13², 14², 15²). 210 is not."
  },
  {
    id: "pr-3",
    category: "Pattern Recognition",
    difficulty: "medium",
    question: "Look at this series: 3, 4, 7, 8, 11, 12, ... What number comes next?",
    options: ["13", "14", "15", "16"],
    correctAnswer: 2, // 15
    explanation: "The alternating pattern is +1, +3, +1, +3, +1, +3... so 12 + 3 = 15."
  },
  {
    id: "pr-4",
    category: "Pattern Recognition",
    difficulty: "hard",
    question: "Which number replaces the question mark? [3, 9, 27] [4, 16, 64] [5, 25, ?]",
    options: ["100", "125", "150", "200"],
    correctAnswer: 1, // 125
    explanation: "The pattern in each bracket is x, x², x³. For 5, it is 5, 25, 125."
  },
  {
    id: "pr-5",
    category: "Pattern Recognition",
    difficulty: "hard",
    question: "If 11x11 = 4, 22x22 = 16, what is 33x33?",
    options: ["9", "18", "36", "81"],
    correctAnswer: 2, // 36
    explanation: "Sum the digits of the first number, sum the digits of the second, then multiply. (1+1)*(1+1)=4. (2+2)*(2+2)=16. (3+3)*(3+3)=36."
  },

  // SPATIAL REASONING
  {
    id: "sr-1",
    category: "Spatial Reasoning",
    difficulty: "easy",
    question: "If you fold a square piece of paper in half twice and cut a hole in the center, how many holes will you see when you unfold it?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 0, // 1
    explanation: "Cutting the folded center removes the shared central point, resulting in exactly one hole."
  },
  {
    id: "sr-2",
    category: "Spatial Reasoning",
    difficulty: "medium",
    question: "A standard die has opposite sides that sum to 7. If you see a 4 on top, what number is on the bottom?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1, // 3
    explanation: "4 + 3 = 7, so 3 must be on the bottom."
  },
  {
    id: "sr-3",
    category: "Spatial Reasoning",
    difficulty: "medium",
    question: "Imagine a 3x3x3 cube made of 27 smaller cubes. If you paint the outside red, how many small cubes have exactly zero sides painted?",
    options: ["1", "2", "8", "9"],
    correctAnswer: 0, // 1
    explanation: "Only the single cube in the very center of the 3x3x3 structure has no exposed faces."
  },
  {
    id: "sr-4",
    category: "Spatial Reasoning",
    difficulty: "hard",
    question: "If you rotate the letter 'p' 180 degrees around its center, what letter does it most resemble?",
    options: ["b", "d", "q", "p"],
    correctAnswer: 1, // d
    explanation: "Rotating 'p' 180 degrees (upside down) creates a 'd'. Flipping it horizontally makes a 'q'."
  },
  {
    id: "sr-5",
    category: "Spatial Reasoning",
    difficulty: "hard",
    question: "How many distinct squares can you find on a standard 8x8 chessboard?",
    options: ["64", "128", "204", "256"],
    correctAnswer: 2, // 204
    explanation: "The formula is 1² + 2² + ... + 8² = 204 total squares of all sizes."
  },

  // WORKING MEMORY
  {
    id: "wm-1",
    category: "Working Memory",
    difficulty: "easy",
    question: "Read these numbers carefully: 4, 9, 2, 8. What is the sum of the first and last numbers?",
    options: ["6", "11", "12", "13"],
    correctAnswer: 2, // 12
    explanation: "4 + 8 = 12."
  },
  {
    id: "wm-2",
    category: "Working Memory",
    difficulty: "medium",
    question: "Think of the word 'COMPUTER'. If you remove the vowels and reverse the remaining letters, what do you get?",
    options: ["RTPMC", "RTPCM", "CMPTR", "RTCMP"],
    correctAnswer: 0, // RTPMC
    explanation: "Consonants: C, M, P, T, R. Reversed: R, T, P, M, C."
  },
  {
    id: "wm-3",
    category: "Working Memory",
    difficulty: "medium",
    question: "Start with 10. Multiply by 2, subtract 5, add 3, and divide by 2. What is the result?",
    options: ["7", "8", "9", "10"],
    correctAnswer: 2, // 9
    explanation: "10 * 2 = 20. 20 - 5 = 15. 15 + 3 = 18. 18 / 2 = 9."
  },
  {
    id: "wm-4",
    category: "Working Memory",
    difficulty: "hard",
    question: "A sequence starts: Circle, Square, Triangle. For every Circle, add a Star immediately after. What is the 3rd item in the new sequence?",
    options: ["Circle", "Star", "Square", "Triangle"],
    correctAnswer: 2, // Square
    explanation: "New sequence: Circle, Star, Square, Triangle. The 3rd item is Square."
  },
  {
    id: "wm-5",
    category: "Working Memory",
    difficulty: "hard",
    question: "Alphabetize the words: 'Zebra', 'Apple', 'Monkey', 'Ant'. What is the 3rd letter of the 2nd word?",
    options: ["p", "n", "o", "b"],
    correctAnswer: 0, // p
    explanation: "Alphabetical: Ant, Apple, Monkey, Zebra. The 2nd word is Apple. Its 3rd letter is 'p'."
  }
];

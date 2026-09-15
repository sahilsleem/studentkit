export const logicalQuestions = [
  {
    "id": "lr-01",
    "category": "Syllogisms",
    "difficulty": 1,
    "question": "All squares are rectangles. All rectangles are polygons. Based on these statements, which conclusion must be true?",
    "options": [
      "All polygons are squares.",
      "All squares are polygons.",
      "Some squares are not polygons.",
      "All rectangles are squares."
    ],
    "correct": 1,
    "explanation": "If A (squares) is a subset of B (rectangles), and B is a subset of C (polygons), then A must be a subset of C. Therefore, all squares are polygons."
  },
  {
    "id": "lr-02",
    "category": "Deductive Reasoning",
    "difficulty": 1,
    "question": "If it is raining, the grass is wet. The grass is not wet. What can be logically concluded?",
    "options": [
      "It is raining.",
      "It is not raining.",
      "The grass will be wet soon.",
      "Someone covered the grass."
    ],
    "correct": 1,
    "explanation": "This is a valid logical deduction (modus tollens). If P implies Q, and Q is false, then P must be false. Since the grass is not wet, it cannot be raining."
  },
  {
    "id": "lr-03",
    "category": "Sequencing",
    "difficulty": 2,
    "question": "Five runners (A, B, C, D, E) finish a race. A finishes before B but after C. D finishes before C. E finishes last. Who finished second?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": 2,
    "explanation": "The order of finishing is established as: D finishes before C, C finishes before A, A finishes before B. Since E is last, the order is D, C, A, B, E. Therefore, C finished second."
  },
  {
    "id": "lr-04",
    "category": "Assumptions",
    "difficulty": 2,
    "question": "Statement: You should upgrade your software to version 10.0 to prevent security breaches. What is the primary underlying assumption?",
    "options": [
      "Version 10.0 is the most expensive software.",
      "The current software version is vulnerable to security breaches.",
      "Security breaches are impossible to fix.",
      "The user does not care about security."
    ],
    "correct": 1,
    "explanation": "The statement advises upgrading to prevent breaches, which inherently assumes that the current version lacks the necessary protections and is therefore vulnerable."
  },
  {
    "id": "lr-05",
    "category": "Logical Equivalence",
    "difficulty": 2,
    "question": "Which of the following statements is logically equivalent to: No dogs are cats?",
    "options": [
      "All dogs are not cats.",
      "Some dogs are cats.",
      "No cats are dogs.",
      "Both A and C."
    ],
    "correct": 3,
    "explanation": "Saying No dogs are cats is a universal negative. It implies that the sets of dogs and cats do not intersect, making both All dogs are not cats and No cats are dogs logically equivalent."
  },
  {
    "id": "lr-06",
    "category": "Inductive Reasoning",
    "difficulty": 2,
    "question": "Observe the pattern: 2, 6, 12, 20, 30. What is the next number?",
    "options": [
      "36",
      "40",
      "42",
      "48"
    ],
    "correct": 2,
    "explanation": "The differences between consecutive numbers are 4, 6, 8, 10. The next difference should be 12. So, 30 + 12 = 42."
  },
  {
    "id": "lr-07",
    "category": "Arrangements",
    "difficulty": 3,
    "question": "Four friends sit in a row. Sarah is not next to John. Mike is next to Emma. John is at the far right end. If Emma is not next to John, who is sitting next to John?",
    "options": [
      "Sarah",
      "Mike",
      "Emma",
      "No one"
    ],
    "correct": 1,
    "explanation": "Positions are 1, 2, 3, 4. John is at 4. Sarah cannot be at 3 (not next to John), Emma cannot be at 3 (not next to John). So Mike must be at 3, making him next to John."
  },
  {
    "id": "lr-08",
    "category": "Truth or Lie",
    "difficulty": 3,
    "question": "A says B is lying. B says C is lying. C says Both A and B are lying. Who is telling the truth?",
    "options": [
      "A",
      "B",
      "C",
      "None of them"
    ],
    "correct": 1,
    "explanation": "If C is true, A and B are lying. But if A is lying, B is telling the truth, which contradicts C. If B is true, C is lying, meaning A and B are not both lying, which aligns with B telling the truth and A lying. Thus, B is telling the truth."
  },
  {
    "id": "lr-09",
    "category": "Syllogisms",
    "difficulty": 2,
    "question": "Some doctors are researchers. All researchers are scientists. Therefore:",
    "options": [
      "All doctors are scientists.",
      "Some doctors are scientists.",
      "All scientists are researchers.",
      "No doctors are scientists."
    ],
    "correct": 1,
    "explanation": "Because there is an overlap between doctors and researchers, and all researchers fall within the scientist category, that overlapping group of doctors must also be scientists."
  },
  {
    "id": "lr-10",
    "category": "Cause and Effect",
    "difficulty": 3,
    "question": "Event A: The local government increased funding for public transport. Event B: Traffic congestion in the city center has decreased significantly. Which statement is most likely true?",
    "options": [
      "Event A is the effect and Event B is its cause.",
      "Event A is the cause and Event B is its effect.",
      "Both are independent events.",
      "Both are effects of a different common cause."
    ],
    "correct": 1,
    "explanation": "Increased funding for public transport logically leads to a decrease in traffic congestion, making A the cause and B the effect."
  },
  {
    "id": "lr-11",
    "category": "Sequencing",
    "difficulty": 3,
    "question": "Project phases must occur in order. Planning is before Design but after Research. Testing is after Development. Design is before Development. Which phase is third?",
    "options": [
      "Planning",
      "Design",
      "Development",
      "Testing"
    ],
    "correct": 1,
    "explanation": "The order is established as: Research -> Planning -> Design -> Development -> Testing. The third phase is Design."
  },
  {
    "id": "lr-12",
    "category": "Assumptions",
    "difficulty": 3,
    "question": "Statement: The new battery lasts 24 hours, so you dont need to carry a charger to work. What does this argument assume?",
    "options": [
      "The user works for more than 24 hours.",
      "The user will charge the device at home before leaving.",
      "The charger is too heavy to carry.",
      "Batteries degrade over time."
    ],
    "correct": 1,
    "explanation": "The conclusion that a charger isn\t needed at work relies on the assumption that the battery was fully charged beforehand and has its 24-hour capacity available."
  },
  {
    "id": "lr-13",
    "category": "Deductive Reasoning",
    "difficulty": 3,
    "question": "Only authorized personnel can access the server room. Mark is an IT manager. Some IT managers are authorized personnel. Can Mark access the server room?",
    "options": [
      "Yes, definitely.",
      "No, definitely.",
      "Cannot be determined.",
      "Yes, because he is a manager."
    ],
    "correct": 2,
    "explanation": "We only know that *some* IT managers are authorized. We do not know specifically if Mark belongs to that authorized subset. Therefore, it cannot be definitively determined."
  },
  {
    "id": "lr-14",
    "category": "Logical Equivalence",
    "difficulty": 4,
    "question": "If it is a weekend, I will go hiking. What is the contrapositive of this statement?",
    "options": [
      "If I go hiking, it is a weekend.",
      "If it is not a weekend, I will not go hiking.",
      "If I do not go hiking, it is not a weekend.",
      "I will go hiking only on a weekend."
    ],
    "correct": 2,
    "explanation": "The contrapositive of If P, then Q is If not Q, then not P. Therefore, If I do not go hiking, it is not a weekend is the logically equivalent contrapositive."
  },
  {
    "id": "lr-15",
    "category": "Arrangements",
    "difficulty": 4,
    "question": "Six books are stacked. Math is above Science. History is below Science but above Art. English is at the very top. Physics is immediately below Math. Which book is at the bottom?",
    "options": [
      "Science",
      "History",
      "Art",
      "Physics"
    ],
    "correct": 2,
    "explanation": "The order from top to bottom: English (top). Math is above Science, Physics is immediately below Math (Math, Physics, Science). History is below Science, Art is below History. The full stack is English, Math, Physics, Science, History, Art. Art is at the bottom."
  },
  {
    "id": "lr-16",
    "category": "Syllogisms",
    "difficulty": 4,
    "question": "All managers are leaders. Some leaders are visionaries. No visionaries are lazy. Which conclusion is valid?",
    "options": [
      "All managers are visionaries.",
      "Some managers are not lazy.",
      "Some leaders are not lazy.",
      "No managers are lazy."
    ],
    "correct": 2,
    "explanation": "Since some leaders are visionaries, and no visionaries are lazy, it means the leaders who are visionaries are definitely not lazy. Thus, some leaders are not lazy."
  },
  {
    "id": "lr-17",
    "category": "Truth or Lie",
    "difficulty": 4,
    "question": "Two doors lead to escape or doom. One guard always lies, one always tells the truth. You can ask one question to one guard. Which question guarantees finding the escape door?",
    "options": [
      "Which door leads to escape?",
      "Are you telling the truth?",
      "Which door would the other guard say leads to escape?",
      "Which door leads to doom?"
    ],
    "correct": 2,
    "explanation": "Asking Which door would the other guard say leads to escape? will always result in both guards pointing to the doom door. You then simply choose the opposite door to escape."
  },
  {
    "id": "lr-18",
    "category": "Pattern Recognition",
    "difficulty": 3,
    "question": "A machine cuts a 10-meter pipe into 1-meter pieces. It takes 1 minute to make each cut. How long will it take to cut the entire pipe?",
    "options": [
      "9 minutes",
      "10 minutes",
      "11 minutes",
      "Cannot be determined"
    ],
    "correct": 0,
    "explanation": "To divide a pipe into 10 pieces, you only need to make 9 cuts. The 9th cut produces both the 9th and 10th pieces simultaneously. Thus, it takes 9 minutes."
  },
  {
    "id": "lr-19",
    "category": "Deductive Reasoning",
    "difficulty": 3,
    "question": "If X is greater than Y, and Z is less than Y, which of the following must be true?",
    "options": [
      "X is less than Z.",
      "X and Z are equal.",
      "X is greater than Z.",
      "Z is greater than X."
    ],
    "correct": 2,
    "explanation": "X > Y and Z < Y (meaning Y > Z). By transitivity, X > Y > Z, so X must be greater than Z."
  },
  {
    "id": "lr-20",
    "category": "Assumptions",
    "difficulty": 4,
    "question": "Argument: Our profit dropped because we reduced our marketing budget last quarter. What assumption is necessary for this argument?",
    "options": [
      "Marketing budgets are the sole driver of profit.",
      "No other major factors caused the drop in profit.",
      "Increasing the budget will immediately increase profit.",
      "Profit cannot drop if marketing remains constant."
    ],
    "correct": 1,
    "explanation": "For the reduction in marketing to be definitively identified as the cause, the argument must assume that other potential negative variables did not occur simultaneously."
  },
  {
    "id": "lr-21",
    "category": "Sequencing",
    "difficulty": 4,
    "question": "A, B, C, and D are performing tasks. A must happen before C. D must happen after B but before A. What is the correct sequence?",
    "options": [
      "B, D, A, C",
      "D, B, A, C",
      "B, A, D, C",
      "A, C, B, D"
    ],
    "correct": 0,
    "explanation": "D is after B (B -> D). D is before A (D -> A). A is before C (A -> C). Combining these gives B -> D -> A -> C."
  },
  {
    "id": "lr-22",
    "category": "Logical Equivalence",
    "difficulty": 4,
    "question": "It is not true that both Lisa and Tom went to the party. This means:",
    "options": [
      "Neither Lisa nor Tom went.",
      "Lisa did not go, or Tom did not go, or both did not go.",
      "Only one of them went.",
      "If Lisa went, Tom also went."
    ],
    "correct": 1,
    "explanation": "By De Morgans Laws, Not (A AND B) is logically equivalent to (Not A) OR (Not B). Therefore, at least one of them didn\t go."
  },
  {
    "id": "lr-23",
    "category": "Cause and Effect",
    "difficulty": 4,
    "question": "When ice melts in a sealed glass container filled to the brim with water and an ice cube floating in it, what happens to the water level?",
    "options": [
      "It overflows.",
      "It drops.",
      "It remains exactly the same.",
      "It expands and cracks the glass."
    ],
    "correct": 2,
    "explanation": "According to Archimedes principle, floating ice displaces its own weight in water. When it melts, it turns into that exact volume of water, keeping the water level identical."
  },
  {
    "id": "lr-24",
    "category": "Arrangements",
    "difficulty": 5,
    "question": "Five cars are parked in spots 1 through 5. The Red car is exactly in the middle. The Blue car is immediately to the right of the Red car. The Black car is in spot 2. Where is the Green car?",
    "options": [
      "Spot 1",
      "Spot 2",
      "Spot 4",
      "Spot 1 or 5"
    ],
    "correct": 3,
    "explanation": "Red is at 3. Blue is at 4 (right of Red). Black is at 2. The remaining spots are 1 and 5. The Green and White cars must occupy them, so Green is in either Spot 1 or Spot 5."
  },
  {
    "id": "lr-25",
    "category": "Syllogisms",
    "difficulty": 5,
    "question": "No birds are mammals. A bat is a mammal. Therefore:",
    "options": [
      "A bat is a bird.",
      "A bat is not a bird.",
      "Some birds are bats.",
      "No bats are mammals."
    ],
    "correct": 1,
    "explanation": "If no birds are mammals, the sets of birds and mammals do not intersect. Since a bat falls within the mammal set, it cannot possibly fall within the bird set. Thus, a bat is not a bird."
  },
  {
    "id": "lr-26",
    "category": "Assumptions",
    "difficulty": 5,
    "question": "Argument: Switching to electric vehicles (EVs) will solve city air pollution because EVs produce zero tailpipe emissions. This assumes that:",
    "options": [
      "Tailpipe emissions are the primary source of city air pollution.",
      "EVs are affordable for everyone.",
      "Electricity generation produces no pollution.",
      "City dwellers want to drive EVs."
    ],
    "correct": 0,
    "explanation": "The argument claims EVs will *solve* city air pollution based on their lack of tailpipe emissions. This leap logically assumes that those tailpipe emissions were the dominant cause of the pollution in the first place."
  },
  {
    "id": "lr-27",
    "category": "Truth or Lie",
    "difficulty": 5,
    "question": "Three aliens (Zog, Yip, Xar) speak. Zog says Yip is lying. Yip says Xar is telling the truth. Xar says Zog and Yip are both lying. How many are telling the truth?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correct": 1,
    "explanation": "If Xar tells the truth, Zog and Yip are lying. If Yip is lying, Xar is lying (contradiction). If Yip tells the truth, Xar tells the truth (contradiction). So Yip must be lying. Since Yip lies, Zog tells the truth. Zog says Yip lies (true). So Zog is the only one telling the truth."
  },
  {
    "id": "lr-28",
    "category": "Sequencing",
    "difficulty": 5,
    "question": "A, B, C, D, and E sit in a row. E is at the far left. D is at the far right. A is exactly in the middle. C is next to A but not next to D. Who is sitting in the second position from the left?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": 2,
    "explanation": "Positions 1 to 5. E is 1. D is 5. A is 3. C is next to A (so 2 or 4). But C is not next to D(5). So C cannot be 4. Therefore, C is 2. This leaves B for position 4. The person in the second position from the left is C."
  },
  {
    "id": "lr-29",
    "category": "Pattern Recognition",
    "difficulty": 5,
    "question": "Which word does not belong with the others?",
    "options": [
      "Triangle",
      "Hexagon",
      "Circle",
      "Pentagon"
    ],
    "correct": 2,
    "explanation": "Triangles, hexagons, and pentagons are all polygons formed by straight line segments. A circle is formed by a continuous curve with no straight edges."
  },
  {
    "id": "lr-30",
    "category": "Deductive Reasoning",
    "difficulty": 5,
    "question": "If all Z are Y, and some Y are X, which of the following must be true?",
    "options": [
      "Some Z are X",
      "All X are Y",
      "No Z are X",
      "None of the above"
    ],
    "correct": 3,
    "explanation": "Knowing that all Z are Y and some Y are X does not guarantee any relationship between Z and X. They might overlap, or they might not. Thus, none of the specific statements must be true."
  }
];
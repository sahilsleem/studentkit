export interface Category {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export interface Tool {
  id: string; // Unique identifier (usually same as slug)
  title: string;
  description: string;
  slug: string; // e.g., 'cgpa-to-percentage'
  category: string;
  subcategory?: string;
  icon: string;
  keywords?: string[];
  popular?: boolean;
  featured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  component?: string;
  formulaConfig?: {
    inputs: { id: string; label: string; placeholder?: string; type?: string }[];
    expression: string; // JavaScript math expression, variables match input ids
    outputLabel: string;
    outputUnit?: string;
  };
  medicalDisclaimer?: boolean;
  aliases?: string[];
  related?: string[];
}

export const getCategorySlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const categories: Category[] = [
  {
    "id": "academic-grades",
    "name": "Academic & Grades",
    "description": "GPA, CGPA, grades, attendance, and exam target calculators."
  },
  {
    "id": "study-writing",
    "name": "Study & Writing",
    "description": "Pomodoro timers, word counters, reading speed, and writing utilities."
  },
  {
    "id": "mathematics",
    "name": "Mathematics",
    "description": "Algebra, calculus, trigonometry, geometry, matrices, and number theory."
  },
  {
    "id": "physics",
    "name": "Physics",
    "description": "Kinematics, forces, energy, optics, electromagnetism, and thermodynamics."
  },
  {
    "id": "chemistry",
    "name": "Chemistry",
    "description": "Molarity, stoichiometry, gas laws, periodic table, and chemical reactions."
  },
  {
    "id": "biology-health",
    "name": "Biology & Health",
    "description": "Genetics, cellular biology, anatomy, BMI, and health metrics."
  },
  {
    "id": "statistics",
    "name": "Statistics",
    "description": "Descriptive statistics, probability distributions, regression, and z-scores."
  },
  {
    "id": "computer-science",
    "name": "Computer Science",
    "description": "Bitwise operations, binary conversion, subnetting, and logic."
  },
  {
    "id": "converters",
    "name": "Converters",
    "description": "Unit, scientific notation, and base conversion tools."
  },
  {
    "id": "everyday-utilities",
    "name": "Everyday Utilities",
    "description": "Date differences, age calculations, countdowns, and random number generators."
  }
];

export const tools: Tool[] = [
  {
    id: "cgpa-to-percentage",
    title: "CGPA to Percentage & Percentage to CGPA Converter",
    description: "Convert between 10-point CGPA and percentage scores using standard or custom university formulas.",
    slug: "cgpa-to-percentage",
    category: "Academic & Grades",
    aliases: ["convert cgpa to percentage","cgpa to percentage india","cgpa to percent","cgpa percentage formula","percentage to cgpa","convert percentage to cgpa","percentage to cgpa formula","percent to grade point","cgpa converter","grade point to percentage","percentage to grade point average"],
    icon: "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z\"></path></svg>"
  },
  {
    id: "gpa-calculator",
    title: "GPA Calculator (Grade Point Average)",
    description: "Calculate your semester GPA based on subject credits and grades.",
    slug: "gpa-calculator",
    category: "Academic & Grades",
    aliases: ["calculate my gpa","semester gpa calculator","gpa from credits and grades","how to calculate gpa","grade point average calculator"],
    icon: "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 14l9-5-9-5-9 5 9 5z\"></path><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z\"></path></svg>"
  },
  {
    id: "percentage-calculator",
    title: "Percentage Calculator",
    description: "Find out your total percentage from multiple subjects.",
    slug: "percentage-calculator",
    category: "Academic & Grades",
    icon: "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z\"></path><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z\"></path></svg>"
  },
  {
    id: "attendance-calculator",
    title: "Attendance Calculator",
    description: "Calculate current attendance percentage, safe classes to skip, and classes needed to reach target goal.",
    slug: "attendance-calculator",
    category: "Academic & Grades",
    subcategory: "Attendance",
    aliases: ["check my attendance","attendance percentage calculator","calculate attendance percentage","am i short on attendance","classes you can miss","classes to miss","how many classes can i miss","how many classes do i need to attend","classes needed for 75 attendance","minimum classes to attend","required attendance","attendance required to pass"],
    icon: "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"></path></svg>"
  },
  {
    id: "study-hours",
    title: "Study Hours Calculator",
    description: "Distribute your available time across subjects realistically.",
    slug: "study-hours",
    category: "Study & Writing",
    subcategory: "Study Tools",
    icon: "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z\"></path></svg>"
  },
  {
    id: "pomodoro-timer",
    title: "Pomodoro Timer",
    description: "Stay focused with a minimal study and break timer.",
    slug: "pomodoro-timer",
    category: "Study & Writing",
    subcategory: "Study Tools",
    icon: "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z\"></path></svg>"
  },
  {
    id: "word-counter",
    title: "Word Counter",
    description: "Count words, characters, sentences, paragraphs, and estimated reading time instantly.",
    slug: "word-counter",
    category: "Study & Writing",
    subcategory: "Study Tools",
    aliases: ["character counter","character count","chars counter","letter counter","reading time calculator","reading time","sentence counter","paragraph counter","text counter","word count calculator","words count"],
    icon: "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z\"></path></svg>"
  },
  {
    id: "age-calculator",
    title: "Age Calculator",
    description: "Calculate your exact age in years, months, and days.",
    slug: "age-calculator",
    category: "Everyday Utilities",
    icon: "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z\"></path></svg>"
  },
  {
    id: "date-difference",
    title: "Date Difference",
    description: "Calculate the exact difference between two dates in days, weeks, months, and years.",
    slug: "date-difference",
    category: "Everyday Utilities",
    aliases: ["days between dates","weeks between dates","days difference","duration between dates","how many days between dates"],
    icon: "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"></path></svg>"
  },
  {
    id: "exam-countdown",
    title: "Exam Countdown",
    description: "Track the exact remaining time until your upcoming exams with a live countdown timer.",
    slug: "exam-countdown",
    category: "Everyday Utilities",
    icon: "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z\"></path></svg>"
  },
  {
    id: "unit-converter",
    title: "Unit Converter",
    description: "Convert between common units of length, mass, temperature, area, volume, speed, time, and more with this unit converter.",
    slug: "unit-converter",
    category: "Converters",
    aliases: ["convert km to miles","temperature converter","length converter","weight converter","metric to imperial","convert kg to lbs"],
    icon: "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4\"></path></svg>"
  },
  {
    id: "percentage-change",
    title: "Percentage Change",
    description: "Calculate the percentage increase or decrease between numbers.",
    slug: "percentage-change",
    category: "Academic & Grades",
    subcategory: "Basic Math",
    aliases: ["find percentage increase","percentage increase calculator","calculate percent change","percentage decrease"],
    icon: "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6\"></path></svg>"
  },
  {
    id: "random-number",
    title: "Random Number Generator",
    description: "Generate random numbers within a chosen range with optional minimum and maximum values.",
    slug: "random-number",
    category: "Everyday Utilities",
    icon: "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2-1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5\"></path></svg>"
  },
  {
    id: "rectangle-area-calculator",
    title: "Rectangle Area Calculator",
    description: "Calculate the area and perimeter of a rectangle from length and width measurements.",
    slug: "rectangle-area-calculator",
    category: "Mathematics",
    subcategory: "Geometry",
    formulaConfig: {
          "inputs": [
                {
                      "id": "l",
                      "label": "Length"
                },
                {
                      "id": "w",
                      "label": "Width"
                }
          ],
          "expression": "l * w",
          "outputLabel": "Area"
    },
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>"
  },
  {
    id: "exponent-calculator",
    title: "Exponent Calculator",
    description: "Calculate powers and exponentiation for any base raised to a power.",
    slug: "exponent-calculator",
    category: "Mathematics",
    subcategory: "Basic Math",
    formulaConfig: {
          "inputs": [
                {
                      "id": "b",
                      "label": "Base"
                },
                {
                      "id": "e",
                      "label": "Exponent"
                }
          ],
          "expression": "Math.pow(b, e)",
          "outputLabel": "Result"
    },
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 10V3L4 14h7v7l9-11h-7z'></path></svg>"
  },
  {
    id: "logarithm-calculator",
    title: "Logarithm Calculator",
    description: "Calculate logarithms for any positive number with arbitrary base or natural base.",
    slug: "logarithm-calculator",
    category: "Mathematics",
    subcategory: "Basic Math",
    formulaConfig: {
          "inputs": [
                {
                      "id": "n",
                      "label": "Number"
                },
                {
                      "id": "b",
                      "label": "Base"
                }
          ],
          "expression": "Math.log(n) / Math.log(b)",
          "outputLabel": "Logarithm"
    },
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>"
  },
  {
    id: "lcm-calculator",
    title: "LCM Calculator",
    description: "Calculate the least common multiple (LCM) of two or more integer numbers.",
    slug: "lcm-calculator",
    category: "Mathematics",
    subcategory: "Basic Math",
    formulaConfig: {
          "inputs": [
                {
                      "id": "a",
                      "label": "First Number"
                },
                {
                      "id": "b",
                      "label": "Second Number"
                }
          ],
          "expression": "(function(a,b){ let oA=Math.abs(a), oB=Math.abs(b); while(b){ let t=b; b=a%b; a=t; } return (oA*oB)/a; })(a,b)",
          "outputLabel": "LCM"
    },
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M12 6v6m0 0v6m-6-6h12'></path></svg>"
  },
  {
    id: "pythagorean-theorem-calculator",
    title: "Pythagorean Theorem Calculator",
    description: "Calculate the hypotenuse or missing leg of a right-angled triangle using a² + b² = c².",
    slug: "pythagorean-theorem-calculator",
    category: "Mathematics",
    subcategory: "Geometry",
    formulaConfig: {
          "inputs": [
                {
                      "id": "a",
                      "label": "Leg A"
                },
                {
                      "id": "b",
                      "label": "Leg B"
                }
          ],
          "expression": "Math.sqrt(a*a + b*b)",
          "outputLabel": "Hypotenuse (c)"
    },
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M3 21h18L12 3z'></path></svg>"
  },
  {
    id: "circle-area-calculator",
    title: "Circle Area Calculator",
    description: "Calculate the surface area of a circle from its radius or diameter using πr².",
    slug: "circle-area-calculator",
    category: "Mathematics",
    subcategory: "Geometry",
    formulaConfig: {
          "inputs": [
                {
                      "id": "r",
                      "label": "Radius"
                }
          ],
          "expression": "Math.PI * r * r",
          "outputLabel": "Area"
    },
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z'></path></svg>"
  },
  {
    id: "cube-volume-calculator",
    title: "Cube Volume Calculator",
    description: "Calculate the volume of a cube from the length of its side edge.",
    slug: "cube-volume-calculator",
    category: "Mathematics",
    subcategory: "Geometry",
    formulaConfig: {
          "inputs": [
                {
                      "id": "s",
                      "label": "Side Length"
                }
          ],
          "expression": "s * s * s",
          "outputLabel": "Volume"
    },
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'></path></svg>"
  },
  {
    id: "sphere-volume-calculator",
    title: "Sphere Volume Calculator",
    description: "Calculate the volume and capacity of a sphere from its radius using 4/3 πr³.",
    slug: "sphere-volume-calculator",
    category: "Mathematics",
    subcategory: "Geometry",
    formulaConfig: {
          "inputs": [
                {
                      "id": "r",
                      "label": "Radius"
                }
          ],
          "expression": "(4/3) * Math.PI * Math.pow(r, 3)",
          "outputLabel": "Volume"
    },
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z'></path></svg>"
  },
  {
    id: "cylinder-volume-calculator",
    title: "Cylinder Volume Calculator",
    description: "Calculate the volume and capacity of a cylinder from radius and height.",
    slug: "cylinder-volume-calculator",
    category: "Mathematics",
    subcategory: "Geometry",
    formulaConfig: {
          "inputs": [
                {
                      "id": "r",
                      "label": "Radius"
                },
                {
                      "id": "h",
                      "label": "Height"
                }
          ],
          "expression": "Math.PI * r * r * h",
          "outputLabel": "Volume"
    },
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z'></path></svg>"
  },
  {
    id: "cone-volume-calculator",
    title: "Cone Volume Calculator",
    description: "Calculate the volume of a right circular cone from base radius and height.",
    slug: "cone-volume-calculator",
    category: "Mathematics",
    subcategory: "Geometry",
    formulaConfig: {
          "inputs": [
                {
                      "id": "r",
                      "label": "Radius"
                },
                {
                      "id": "h",
                      "label": "Height"
                }
          ],
          "expression": "(1/3) * Math.PI * r * r * h",
          "outputLabel": "Volume"
    },
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M3 21h18L12 3z'></path></svg>"
  },
  {
    id: "arithmetic-sequence-calculator",
    title: "Arithmetic Sequence Calculator",
    description: "Find the nth term of an arithmetic sequence.",
    slug: "arithmetic-sequence-calculator",
    category: "Mathematics",
    subcategory: "Algebra",
    formulaConfig: {
          "inputs": [
                {
                      "id": "a",
                      "label": "First Term (a)"
                },
                {
                      "id": "d",
                      "label": "Common Difference (d)"
                },
                {
                      "id": "n",
                      "label": "Term Number (n)"
                }
          ],
          "expression": "a + (n - 1) * d",
          "outputLabel": "Nth Term"
    },
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>"
  },
  {
    id: "geometric-sequence-calculator",
    title: "Geometric Sequence Calculator",
    description: "Find the nth term of a geometric sequence.",
    slug: "geometric-sequence-calculator",
    category: "Mathematics",
    subcategory: "Algebra",
    formulaConfig: {
          "inputs": [
                {
                      "id": "a",
                      "label": "First Term (a)"
                },
                {
                      "id": "r",
                      "label": "Common Ratio (r)"
                },
                {
                      "id": "n",
                      "label": "Term Number (n)"
                }
          ],
          "expression": "a * Math.pow(r, n - 1)",
          "outputLabel": "Nth Term"
    },
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>"
  },
  {
    id: "fraction-calculator",
    title: "Fraction Calculator",
    description: "Add, subtract, multiply, and divide fractions.",
    slug: "fraction-calculator",
    category: "Mathematics",
    subcategory: "Basic Math",
    component: "FractionCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>"
  },
  {
    id: "right-triangle-calculator",
    title: "Right Triangle Calculator",
    description: "Solve unknown angles and sides of right triangles using trigonometric ratios.",
    slug: "right-triangle-calculator",
    category: "Mathematics",
    subcategory: "Trigonometry",
    component: "TriangleCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M3 21h18L12 3z'></path></svg>"
  },
  {
    id: "triangle-calculator",
    title: "Triangle Calculator",
    description: "Solve oblique and right triangles using the laws of sines and cosines.",
    slug: "triangle-calculator",
    category: "Mathematics",
    subcategory: "Trigonometry",
    component: "TriangleCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M3 21h18L12 3z'></path></svg>"
  },
  {
    id: "law-of-sines-calculator",
    title: "Law of Sines Calculator",
    description: "Solve missing sides and angles of triangles using the Law of Sines ratio.",
    slug: "law-of-sines-calculator",
    category: "Mathematics",
    subcategory: "Trigonometry",
    component: "TriangleCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M3 21h18L12 3z'></path></svg>"
  },
  {
    id: "law-of-cosines-calculator",
    title: "Law of Cosines Calculator",
    description: "Calculate unknown sides or angles of triangles using the Law of Cosines.",
    slug: "law-of-cosines-calculator",
    category: "Mathematics",
    subcategory: "Trigonometry",
    component: "TriangleCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M3 21h18L12 3z'></path></svg>"
  },
  {
    id: "triangle-area-calculator",
    title: "Triangle Area Calculator",
    description: "Calculate the area of a triangle given its base and perpendicular height.",
    slug: "triangle-area-calculator",
    category: "Mathematics",
    subcategory: "Geometry",
    formulaConfig: {
          "inputs": [
                {
                      "id": "b",
                      "label": "Base"
                },
                {
                      "id": "h",
                      "label": "Height"
                }
          ],
          "expression": "0.5 * b * h",
          "outputLabel": "Area"
    },
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M3 21h18L12 3z'></path></svg>"
  },
  {
    id: "unit-circle",
    title: "Unit Circle",
    description: "Interactive unit circle reference displaying exact angle radians, degrees, and coordinates.",
    slug: "unit-circle",
    category: "Mathematics",
    subcategory: "Trigonometry",
    component: "UnitCircle",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z'></path></svg>"
  },
  {
    id: "limit-calculator",
    title: "Limit Calculator",
    description: "Evaluate one-sided, two-sided, and infinite limits of mathematical functions.",
    slug: "limit-calculator",
    category: "Mathematics",
    subcategory: "Calculus",
    component: "LimitCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 10V3L4 14h7v7l9-11h-7z'></path></svg>"
  },
  {
    id: "one-sided-limit-calculator",
    title: "One-Sided Limit Calculator",
    description: "Compute left-hand (x→a⁻) and right-hand (x→a⁺) limits of piecewise and rational functions.",
    slug: "one-sided-limit-calculator",
    category: "Mathematics",
    subcategory: "Calculus",
    component: "LimitCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 10V3L4 14h7v7l9-11h-7z'></path></svg>"
  },
  {
    id: "infinite-limit-calculator",
    title: "Infinite Limit Calculator",
    description: "Evaluate function limits where values approach positive or negative infinity.",
    slug: "infinite-limit-calculator",
    category: "Mathematics",
    subcategory: "Calculus",
    component: "LimitCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 10V3L4 14h7v7l9-11h-7z'></path></svg>"
  },
  {
    id: "derivative-calculator",
    title: "Derivative Calculator",
    description: "Compute symbolic first derivatives of polynomial, trigonometric, and exponential functions.",
    slug: "derivative-calculator",
    category: "Mathematics",
    subcategory: "Calculus",
    component: "DerivativeCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z'></path></svg>"
  },
  {
    id: "second-derivative-calculator",
    title: "Second Derivative Calculator",
    description: "Compute symbolic second derivatives to analyze concavity and inflection points.",
    slug: "second-derivative-calculator",
    category: "Mathematics",
    subcategory: "Calculus",
    component: "DerivativeCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z'></path></svg>"
  },
  {
    id: "partial-derivative-calculator",
    title: "Partial Derivative Calculator",
    description: "Calculate partial derivatives with respect to specified multivariable functions.",
    slug: "partial-derivative-calculator",
    category: "Mathematics",
    subcategory: "Calculus",
    component: "DerivativeCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z'></path></svg>"
  },
  {
    id: "integral-calculator",
    title: "Integral Calculator",
    description: "Evaluate definite and indefinite integrals numerically and symbolically.",
    slug: "integral-calculator",
    category: "Mathematics",
    subcategory: "Calculus",
    component: "IntegralCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'></path></svg>"
  },
  {
    id: "definite-integral-calculator",
    title: "Definite Integral Calculator",
    description: "Calculate exact and numerical definite integrals across specified lower and upper bounds.",
    slug: "definite-integral-calculator",
    category: "Mathematics",
    subcategory: "Calculus",
    component: "IntegralCalculator",
    related: ["indefinite-integral-calculator","derivative-calculator","limit-calculator"],
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'></path></svg>"
  },
  {
    id: "indefinite-integral-calculator",
    title: "Indefinite Integral Calculator",
    description: "Find antiderivatives and indefinite integrals with arbitrary integration constants.",
    slug: "indefinite-integral-calculator",
    category: "Mathematics",
    subcategory: "Calculus",
    component: "IntegralCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'></path></svg>"
  },
  {
    id: "free-fall-calculator",
    title: "Free Fall Calculator",
    description: "Calculate velocity and drop distance for free-falling objects under gravitational acceleration.",
    slug: "free-fall-calculator",
    category: "Physics",
    subcategory: "Mechanics",
    component: "UnitAwareCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 10V3L4 14h7v7l9-11h-7z'></path></svg>"
  },
  {
    id: "projectile-motion-calculator",
    title: "Projectile Range",
    description: "Calculate projectile range, maximum height, and flight time from launch velocity and angle.",
    slug: "projectile-motion-calculator",
    category: "Physics",
    subcategory: "Mechanics",
    component: "UnitAwareCalculator",
    related: ["free-fall-calculator"],
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 10V3L4 14h7v7l9-11h-7z'></path></svg>"
  },
  {
    id: "centripetal-acceleration-calculator",
    title: "Centripetal Acceleration",
    description: "Calculate inward radial acceleration for circular paths from speed and radius.",
    slug: "centripetal-acceleration-calculator",
    category: "Physics",
    subcategory: "Mechanics",
    component: "UnitAwareCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 10V3L4 14h7v7l9-11h-7z'></path></svg>"
  },
  {
    id: "friction-calculator",
    title: "Friction Calculator",
    description: "Calculate static and kinetic frictional resistance forces from normal force and friction coefficients.",
    slug: "friction-calculator",
    category: "Physics",
    subcategory: "Mechanics",
    component: "UnitAwareCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 10V3L4 14h7v7l9-11h-7z'></path></svg>"
  },
  {
    id: "gravitational-force-calculator",
    title: "Gravitational Force",
    description: "Calculate gravitational attraction between two masses using Newton's universal gravity law.",
    slug: "gravitational-force-calculator",
    category: "Physics",
    subcategory: "Gravity",
    component: "UnitAwareCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 10V3L4 14h7v7l9-11h-7z'></path></svg>"
  },
  {
    id: "thermal-expansion-calculator",
    title: "Thermal Expansion",
    description: "Calculate linear thermal expansion and length changes resulting from temperature shifts.",
    slug: "thermal-expansion-calculator",
    category: "Physics",
    subcategory: "Thermodynamics",
    component: "UnitAwareCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 10V3L4 14h7v7l9-11h-7z'></path></svg>"
  },
  {
    id: "ohms-law-calculator",
    title: "Ohm's Law Calculator",
    description: "Calculate voltage, electric current, or resistance using Ohm's law (V = IR).",
    slug: "ohms-law-calculator",
    category: "Physics",
    subcategory: "Electricity",
    component: "UnitAwareCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 10V3L4 14h7v7l9-11h-7z'></path></svg>"
  },
  {
    id: "coulombs-law-calculator",
    title: "Coulomb's Law",
    description: "Calculate Electric Force (F = k|q1q2|/r²).",
    slug: "coulombs-law-calculator",
    category: "Physics",
    subcategory: "Electricity",
    component: "UnitAwareCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 10V3L4 14h7v7l9-11h-7z'></path></svg>"
  },
  {
    id: "capacitance-calculator",
    title: "Capacitance Calculator",
    description: "Calculate capacitance in farads from stored electric charge and applied voltage.",
    slug: "capacitance-calculator",
    category: "Physics",
    subcategory: "Electricity",
    component: "UnitAwareCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 10V3L4 14h7v7l9-11h-7z'></path></svg>"
  },
  {
    id: "magnetic-force-calculator",
    title: "Magnetic Force",
    description: "Calculate magnetic Lorentz force acting on moving charges inside magnetic fields.",
    slug: "magnetic-force-calculator",
    category: "Physics",
    subcategory: "Magnetism",
    component: "UnitAwareCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 10V3L4 14h7v7l9-11h-7z'></path></svg>"
  },
  {
    id: "snells-law-calculator",
    title: "Snell's Law Calculator",
    description: "Calculate refraction angles and light bending across optical boundaries using Snell's law.",
    slug: "snells-law-calculator",
    category: "Physics",
    subcategory: "Optics",
    component: "UnitAwareCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 10V3L4 14h7v7l9-11h-7z'></path></svg>"
  },
  {
    id: "lens-equation-calculator",
    title: "Lens Equation",
    description: "Calculate image position, object distance, or focal length using the thin lens equation.",
    slug: "lens-equation-calculator",
    category: "Physics",
    subcategory: "Optics",
    component: "UnitAwareCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 10V3L4 14h7v7l9-11h-7z'></path></svg>"
  },
  {
    id: "molar-mass-calculator",
    title: "Molar Mass Calculator",
    description: "Calculate molar mass, formula weight, and element percent composition from any chemical formula.",
    slug: "molar-mass-calculator",
    category: "Chemistry",
    subcategory: "General Chemistry",
    aliases: ["calculate molar mass","molecular weight calculator","molar mass formula","percent composition calculator","percent composition","mass percent calculator","chemical formula calculator","chemical formula mass","formula mass calculator","empirical formula calculator","molecular formula calculator","moles calculator","atoms calculator","molecules calculator","ions calculator"],
    component: "ChemicalFormulaCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "periodic-table",
    title: "Interactive Periodic Table",
    description: "View elements, electron configurations, oxidation states, and atomic properties.",
    slug: "periodic-table",
    category: "Chemistry",
    subcategory: "Periodic Table",
    aliases: ["electron configuration","electron configuration calculator","valence electrons","valence electron calculator","oxidation states","oxidation state calculator","isotope calculator","isotope abundance","element lookup","chemistry periodic table"],
    component: "PeriodicTable",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "ideal-gas-law",
    title: "Ideal Gas Law",
    description: "Calculate Pressure (P = nRT/V).",
    slug: "ideal-gas-law",
    category: "Chemistry",
    subcategory: "Gas Laws",
    component: "UnitAwareCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "molarity-calculator",
    title: "Molarity Calculator",
    description: "Calculate molar concentration (M = mol/L) from solute moles and solution volume.",
    slug: "molarity-calculator",
    category: "Chemistry",
    subcategory: "Solutions",
    component: "UnitAwareCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "dilution-calculator",
    title: "Dilution Calculator",
    description: "Calculate final volume or concentration for solution dilutions using M₁V₁ = M₂V₂.",
    slug: "dilution-calculator",
    category: "Chemistry",
    subcategory: "Solutions",
    component: "UnitAwareCalculator",
    related: ["molarity-calculator","molar-mass-calculator","ph-calculator"],
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "ph-calculator",
    title: "pH Calculator",
    description: "Calculate solution pH and hydronium ion concentration [H⁺] for acid solutions.",
    slug: "ph-calculator",
    category: "Chemistry",
    subcategory: "Acids & Bases",
    component: "UnitAwareCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "henderson-hasselbalch",
    title: "Henderson-Hasselbalch",
    description: "pH = pKa + log([A-]/[HA]).",
    slug: "henderson-hasselbalch",
    category: "Chemistry",
    subcategory: "Acids & Bases",
    component: "UnitAwareCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "percent-yield-calculator",
    title: "Percent Yield Calculator",
    description: "Calculate percentage reaction yield from actual laboratory and theoretical yields.",
    slug: "percent-yield-calculator",
    category: "Chemistry",
    subcategory: "Stoichiometry",
    component: "UnitAwareCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "standard-cell-potential",
    title: "Standard Cell Potential",
    description: "Calculate standard electrochemical cell potential from cathode and anode reduction potentials.",
    slug: "standard-cell-potential",
    category: "Chemistry",
    subcategory: "Electrochemistry",
    component: "UnitAwareCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "nernst-equation",
    title: "Nernst Equation",
    description: "E = E° - (RT/nF)ln(Q).",
    slug: "nernst-equation",
    category: "Chemistry",
    subcategory: "Electrochemistry",
    component: "UnitAwareCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "half-life-first-order",
    title: "First-Order Half-Life",
    description: "Calculate decomposition half-life for first-order radioactive and chemical kinetics.",
    slug: "half-life-first-order",
    category: "Chemistry",
    subcategory: "Kinetics",
    component: "UnitAwareCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "solubility-rules",
    title: "Solubility Rules",
    description: "Reference guide of general aqueous solubility rules for ionic salts and precipitates.",
    slug: "solubility-rules",
    category: "Chemistry",
    subcategory: "Reference",
    component: "ChemistryReference",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "q-mc-delta-t",
    title: "Q = mcΔT Calculator",
    description: "Calculate thermochemical heat transfer from mass, specific heat, and temperature change.",
    slug: "q-mc-delta-t",
    category: "Chemistry",
    subcategory: "Thermochemistry",
    component: "UnitAwareCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "calorimetry-calculator",
    title: "Calorimetry Calculator",
    description: "Calculate enthalpy and heat exchange in constant-pressure calorimeter experiments.",
    slug: "calorimetry-calculator",
    category: "Chemistry",
    subcategory: "Thermochemistry",
    component: "UnitAwareCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "cell-potential-calculator",
    title: "Cell Potential Calculator",
    description: "Calculate electrochemical galvanic cell potential voltage from half-cell potentials.",
    slug: "cell-potential-calculator",
    category: "Chemistry",
    subcategory: "Electrochemistry",
    component: "UnitAwareCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "half-life-calculator",
    title: "Half-Life (1st Order)",
    description: "Calculate first-order kinetic reaction half-life from rate constants.",
    slug: "half-life-calculator",
    category: "Chemistry",
    subcategory: "Kinetics",
    component: "UnitAwareCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "organic-functional-groups",
    title: "Organic Functional Groups",
    description: "Interactive reference guide for identifying common organic chemical functional groups.",
    slug: "organic-functional-groups",
    category: "Chemistry",
    subcategory: "Organic Chemistry",
    component: "ChemistryReference",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "half-life-nuclear",
    title: "Nuclear Half-Life",
    description: "Calculate radioisotope decay half-life and remaining activity over elapsed duration.",
    slug: "half-life-nuclear",
    category: "Chemistry",
    subcategory: "Nuclear Chemistry",
    component: "UnitAwareCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "bmi-calculator",
    title: "BMI Calculator (Body Mass Index)",
    description: "Calculate Body Mass Index (BMI) and health category classification from height and weight.",
    slug: "bmi-calculator",
    category: "Biology & Health",
    subcategory: "Calculators",
    aliases: ["calculate bmi","body mass index calculator","bmi formula"],
    component: "UnitAwareCalculator",
    medicalDisclaimer: true,
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "heart-rate-zones",
    title: "Max Heart Rate",
    description: "Calculate cardiovascular training heart rate zones based on age and resting heart rate.",
    slug: "heart-rate-zones",
    category: "Biology & Health",
    subcategory: "Calculators",
    component: "UnitAwareCalculator",
    medicalDisclaimer: true,
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "animal-cell",
    title: "Animal Cell Organelles",
    description: "Interactive anatomical reference diagram of animal cell organelles and internal structures.",
    slug: "animal-cell",
    category: "Biology & Health",
    subcategory: "Cell Biology",
    component: "BiologyReference",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "plant-cell",
    title: "Plant Cell Organelles",
    description: "Interactive diagram of plant cell organelles including chloroplasts, vacuoles, and cell walls.",
    slug: "plant-cell",
    category: "Biology & Health",
    subcategory: "Cell Biology",
    component: "BiologyReference",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "mitosis-stages",
    title: "Mitosis Stages",
    description: "Step-by-step visual reference of mitotic cell division phases from prophase to telophase.",
    slug: "mitosis-stages",
    category: "Biology & Health",
    subcategory: "Cell Biology",
    component: "BiologyReference",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "punnett-square",
    title: "Punnett Square Calculator",
    description: "Generate Monohybrid and Dihybrid crosses.",
    slug: "punnett-square",
    category: "Biology & Health",
    subcategory: "Genetics",
    aliases: ["monohybrid cross","dihybrid cross","test cross","genetics calculator","blood type inheritance","sex linked inheritance","allele cross calculator","phenotype ratio calculator","genotype ratio calculator"],
    component: "PunnettSquare",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "hardy-weinberg-calculator",
    title: "Hardy-Weinberg (q² to p)",
    description: "Calculate allele and genotype frequencies in populations assuming Hardy-Weinberg equilibrium.",
    slug: "hardy-weinberg-calculator",
    category: "Biology & Health",
    subcategory: "Genetics",
    component: "UnitAwareCalculator",
    related: ["punnett-square"],
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "dna-sequence-analyzer",
    title: "DNA & RNA Sequence Analyzer",
    description: "Analyze nucleotide sequences: complement, reverse complement, transcription, translation, GC content, and Tm.",
    slug: "dna-sequence-analyzer",
    category: "Biology & Health",
    subcategory: "DNA & RNA",
    aliases: ["dna complement","reverse complement","reverse complement calculator","dna to rna","rna transcription","codon translator","dna translation","rna to protein","gc content calculator","dna melting temperature","oligonucleotide tm calculator","peptide mass calculator","molecular biology calculator","bioinformatics sequence analyzer"],
    component: "DNASequenceCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "central-dogma",
    title: "Central Dogma",
    description: "Visual overview of molecular biology central dogma from DNA transcription to translation.",
    slug: "central-dogma",
    category: "Biology & Health",
    subcategory: "Molecular Biology",
    component: "BiologyReference",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "amino-acid-reference",
    title: "Amino Acid Reference",
    description: "Reference table of standard amino acid structures, polarities, and molecular weights.",
    slug: "amino-acid-reference",
    category: "Biology & Health",
    subcategory: "Molecular Biology",
    component: "BiologyReference",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "bmr-calculator",
    title: "BMR Calculator (Mifflin-St Jeor)",
    description: "Calculate Basal Metabolic Rate (BMR) and daily caloric expenditure using Mifflin-St Jeor formulas.",
    slug: "bmr-calculator",
    category: "Biology & Health",
    subcategory: "Calculators",
    component: "UnitAwareCalculator",
    medicalDisclaimer: true,
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "ideal-body-weight",
    title: "Ideal Body Weight (Devine, Male)",
    description: "Calculate ideal body weight (IBW) ranges based on gender and height formulas.",
    slug: "ideal-body-weight",
    category: "Biology & Health",
    subcategory: "Calculators",
    component: "UnitAwareCalculator",
    medicalDisclaimer: true,
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "protein-structure",
    title: "Protein Structure",
    description: "Reference guide explaining primary, secondary, tertiary, and quaternary protein structures.",
    slug: "protein-structure",
    category: "Biology & Health",
    subcategory: "Molecular Biology",
    component: "BiologyReference",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "photosynthesis-equation",
    title: "Photosynthesis Equation",
    description: "Reference guide detailing light-dependent and Calvin cycle photosynthetic reactions.",
    slug: "photosynthesis-equation",
    category: "Biology & Health",
    subcategory: "Photosynthesis",
    component: "BiologyReference",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "cellular-respiration",
    title: "Cellular Respiration",
    description: "Reference guide detailing glycolysis, Krebs cycle, and oxidative phosphorylation pathways.",
    slug: "cellular-respiration",
    category: "Biology & Health",
    subcategory: "Cellular Respiration",
    component: "BiologyReference",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "human-skeleton",
    title: "Human Skeleton",
    description: "Anatomical reference diagram of the human skeletal system and major bone structures.",
    slug: "human-skeleton",
    category: "Biology & Health",
    subcategory: "Human Anatomy",
    component: "BiologyReference",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "circulatory-system",
    title: "Circulatory System",
    description: "Anatomical reference of systemic circulation, heart chambers, and blood flow pathways.",
    slug: "circulatory-system",
    category: "Biology & Health",
    subcategory: "Human Anatomy",
    component: "BiologyReference",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "nervous-system",
    title: "Nervous System",
    description: "Overview of the human nervous system covering central and peripheral neural pathways.",
    slug: "nervous-system",
    category: "Biology & Health",
    subcategory: "Human Anatomy",
    component: "BiologyReference",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "digestive-system",
    title: "Digestive System",
    description: "Diagram of the human gastrointestinal tract and digestive organ functions.",
    slug: "digestive-system",
    category: "Biology & Health",
    subcategory: "Human Anatomy",
    component: "BiologyReference",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "endocrine-system",
    title: "Endocrine System",
    description: "Reference map of hormone-producing endocrine glands and metabolic signaling pathways.",
    slug: "endocrine-system",
    category: "Biology & Health",
    subcategory: "Human Anatomy",
    component: "BiologyReference",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "percentile-calculator",
    title: "Percentile Calculator",
    description: "Calculate specific percentile values and rank rankings for numeric data distributions.",
    slug: "percentile-calculator",
    category: "Statistics",
    subcategory: "Descriptive Statistics",
    aliases: ["percentiles"],
    component: "DatasetCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "five-number-summary",
    title: "Five Number Summary",
    description: "Calculate minimum, Q1, median, Q3, and maximum five-number summary statistics.",
    slug: "five-number-summary",
    category: "Statistics",
    subcategory: "Descriptive Statistics",
    aliases: ["boxplot data"],
    component: "DatasetCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "mean-absolute-deviation",
    title: "Mean Absolute Deviation",
    description: "Calculate mean absolute deviation (MAD) to evaluate variability around sample means.",
    slug: "mean-absolute-deviation",
    category: "Statistics",
    subcategory: "Descriptive Statistics",
    aliases: ["mad"],
    component: "DatasetCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "linear-regression-calculator",
    title: "Linear Regression Calculator",
    description: "Fit linear regression trendline models to paired datasets and evaluate fit.",
    slug: "linear-regression-calculator",
    category: "Statistics",
    subcategory: "Regression",
    aliases: ["line of best fit"],
    component: "DatasetCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "normal-distribution-calculator",
    title: "Normal Distribution (Z-Score) Calculator",
    description: "Calculate cumulative normal distribution probabilities and z-score areas.",
    slug: "normal-distribution-calculator",
    category: "Statistics",
    subcategory: "Distributions",
    aliases: ["z distribution"],
    component: "DistributionCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "binomial-distribution-calculator",
    title: "Binomial Distribution",
    description: "Calculate discrete binomial probabilities for independent Bernoulli trial experiments.",
    slug: "binomial-distribution-calculator",
    category: "Statistics",
    subcategory: "Distributions",
    aliases: ["bernoulli"],
    component: "DistributionCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "poisson-distribution-calculator",
    title: "Poisson Distribution",
    description: "Calculate discrete Poisson probabilities for event counts occurring in fixed intervals.",
    slug: "poisson-distribution-calculator",
    category: "Statistics",
    subcategory: "Distributions",
    aliases: ["poisson"],
    component: "DistributionCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "truth-table-generator",
    title: "Truth Table Generator",
    description: "Generate complete truth tables for complex compound propositional logic expressions.",
    slug: "truth-table-generator",
    category: "Computer Science",
    subcategory: "Logic",
    aliases: ["boolean logic table"],
    component: "TruthTableGenerator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "set-calculator",
    title: "Set Operations Calculator",
    description: "Calculate set union, intersection, difference, symmetric difference, and Cartesian product.",
    slug: "set-calculator",
    category: "Computer Science",
    subcategory: "Sets",
    aliases: ["set union calculator","set intersection calculator","set difference calculator","union of sets","intersection of sets","symmetric difference","relative complement","venn diagram sets","set theory calculator","disjoint sets calculator"],
    component: "SetCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "rref-calculator",
    title: "RREF Calculator (Reduced Row Echelon Form)",
    description: "Compute Reduced Row Echelon Form (RREF) for matrices using Gauss-Jordan elimination.",
    slug: "rref-calculator",
    category: "Mathematics",
    subcategory: "Matrices",
    aliases: ["row reduce","gauss jordan"],
    component: "MatrixCalculator",
    related: ["eigenvalue-calculator"],
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "eigenvalue-calculator",
    title: "Eigenvalue Calculator",
    description: "Calculate eigenvalues and characteristic polynomial roots for square matrices.",
    slug: "eigenvalue-calculator",
    category: "Mathematics",
    subcategory: "Matrices",
    aliases: ["eigenvalues"],
    component: "MatrixCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "final-grade-calculator",
    title: "Final Grade Calculator",
    description: "Calculate required final exam scores needed to achieve target course grades.",
    slug: "final-grade-calculator",
    category: "Academic & Grades",
    subcategory: "Grades",
    component: "UnitAwareCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'></path></svg>"
  },
  {
    id: "base-conversion-calculator",
    title: "Base Conversion Calculator",
    description: "Convert numbers between binary, octal, decimal, and hexadecimal numeral systems with steps.",
    slug: "base-conversion-calculator",
    category: "Converters",
    subcategory: "Number Systems",
    aliases: ["binary converter","hexadecimal converter","hex converter","octal converter","decimal converter","binary to decimal","decimal to binary","hex to binary","binary to hex","decimal to hex","hex to decimal","base 2","base 8","base 10","base 16","radix converter","number systems calculator"],
    component: "BaseConverter",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'></path></svg>"
  },
  {
    id: "weighted-grade-calculator",
    title: "Weighted Grade Calculator",
    description: "Calculate weighted grade averages from assignment scores and category weight percentages.",
    slug: "weighted-grade-calculator",
    category: "Academic & Grades",
    subcategory: "Grades",
    component: "UnitAwareCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'></path></svg>"
  },
  {
    id: "words-to-pages",
    title: "Words to Pages Converter",
    description: "Convert word count to pages based on font family, font size, margins, and line spacing.",
    slug: "words-to-pages",
    category: "Study & Writing",
    subcategory: "Writing & Reading",
    aliases: ["words to pages","word to page converter","how many pages is 1000 words","words to pages calculator","page count calculator","convert words to pages","single spaced words to pages","double spaced words to pages","essay page calculator","words to pages times new roman"],
    component: "WordsToPages",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'></path></svg>"
  },
  {
    id: "compound-interest-calculator",
    title: "Compound Interest Calculator",
    description: "Calculate compound interest with regular monthly deposits, annual growth breakdowns, and customizable compounding frequencies.",
    slug: "compound-interest-calculator",
    category: "Everyday Utilities",
    subcategory: "Interest & Investments",
    aliases: ["compound interest calculator","calculate compound interest","compound interest with contributions","investment compound interest","monthly compound interest","annual compound interest","compound interest formula","savings compound interest","compound interest formula calculator"],
    component: "CompoundInterestCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path></svg>"
  },
  {
    id: "simple-interest-calculator",
    title: "Simple Interest Calculator",
    description: "Calculate simple interest (P × R × T / 100), total amount, or solve for principal, rate, and time.",
    slug: "simple-interest-calculator",
    category: "Everyday Utilities",
    subcategory: "Interest & Loans",
    aliases: ["simple interest calculator","calculate simple interest","simple interest formula","SI calculator","simple interest loan calculator","principal rate time calculator","simple interest solver","simple interest step by step"],
    component: "SimpleInterestCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z'></path></svg>"
  },
  {
    id: "z-score-calculator",
    title: "Z-Score Calculator & Normal Distribution Probability",
    description: "Calculate Z-score, left-tail, right-tail, two-tail P-values, and normal distribution percentiles.",
    slug: "z-score-calculator",
    category: "Statistics",
    subcategory: "Distributions",
    aliases: ["z score calculator","calculate z score","z score to p value","z score percentile","standard normal z score","p value from z score","z value calculator","z score probability calculator"],
    component: "ZScoreCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z'></path></svg>"
  },
  {
    id: "permutations-and-combinations",
    title: "Permutations & Combinations Calculator (nPr & nCr)",
    description: "Calculate permutations (nPr) and combinations (nCr) with or without repetition, including step-by-step factorial expansions.",
    slug: "permutations-and-combinations",
    category: "Computer Science",
    subcategory: "Discrete Mathematics",
    aliases: ["permutations and combinations calculator","npr calculator","ncr calculator","permutation calculator","combination calculator","n choose r calculator","npr and ncr","permutations with repetition"],
    component: "PermutationsAndCombinations",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16M4 12h16M4 18h7'></path></svg>"
  },
  {
    id: "prime-factorization-calculator",
    title: "Prime Factorization Calculator",
    description: "Find prime factors, canonical exponential form, divisor count, and step-by-step factor division tree for any number.",
    slug: "prime-factorization-calculator",
    category: "Mathematics",
    subcategory: "Number Theory",
    aliases: ["prime factorization calculator","prime factors calculator","factor tree calculator","prime decomposition","find prime factors","prime factor finder","canonical prime factorization"],
    component: "PrimeFactorization",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M7 20l4-16m2 16l4-16M6 9h14M4 15h14'></path></svg>"
  },
  {
    id: "bitwise-calculator",
    title: "Bitwise Calculator (AND, OR, XOR, NOT, Shifts)",
    description: "Perform bitwise operations (AND, OR, XOR, NOT, left/right shifts) across 8-bit, 16-bit, 32-bit, and 64-bit integer widths with binary and hex views.",
    slug: "bitwise-calculator",
    category: "Computer Science",
    subcategory: "Binary & Logic",
    aliases: ["bitwise calculator","bitwise operations calculator","and or xor not calculator","bit shift calculator","binary bitwise calculator","bit mask calculator"],
    component: "BitwiseCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'></path></svg>"
  },
  {
    id: "scientific-notation-calculator",
    title: "Scientific Notation Calculator & Converter",
    description: "Convert numbers between standard decimal, scientific notation (a × 10^b), and engineering notation, with support for arithmetic calculations.",
    slug: "scientific-notation-calculator",
    category: "Converters",
    subcategory: "Scientific Notation",
    aliases: ["scientific notation calculator","standard form calculator","engineering notation calculator","exponential notation calculator","scientific notation converter"],
    component: "ScientificNotationCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'></path></svg>"
  },
  {
    id: "confidence-interval-calculator",
    title: "Confidence Interval Calculator (Mean & Proportion)",
    description: "Compute two-sided confidence intervals for population means (Z-interval and T-interval) and population proportions with critical value calculations.",
    slug: "confidence-interval-calculator",
    category: "Statistics",
    subcategory: "Inferential Statistics",
    aliases: ["confidence interval calculator","margin of error calculator","confidence interval for mean","proportion confidence interval","z interval calculator","t interval calculator"],
    component: "ConfidenceIntervalCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'></path></svg>"
  },
  {
    id: "case-converter",
    title: "Case Converter (UPPERCASE, lowercase, Title, camelCase, snake_case)",
    description: "Transform text between 10 different casing styles including Sentence case, Title Case, camelCase, snake_case, kebab-case, and alternating case.",
    slug: "case-converter",
    category: "Study & Writing",
    subcategory: "Writing & Reading",
    aliases: ["case converter","text case converter","uppercase lowercase converter","camelcase converter","title case converter","snake case converter","kebab case converter"],
    component: "CaseConverter",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M3 5h12M9 5v14m6-8h6m-3 0v8'></path></svg>"
  },
  {
    id: "subnet-calculator",
    title: "IPv4 Subnet Calculator (CIDR & IP Network Planner)",
    description: "Calculate network address, broadcast address, usable IP range, subnet mask, wildcard mask, and total usable hosts for any IPv4 CIDR block.",
    slug: "subnet-calculator",
    category: "Computer Science",
    subcategory: "Networking",
    aliases: ["subnet calculator","ipv4 subnet calculator","cidr calculator","ip range calculator","network mask calculator","subnet mask calculator","usable ip calculator"],
    component: "SubnetCalculator",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'></path></svg>"
  }
];

export const getActiveCategories = (): Category[] => {
  const uniqueNames = [...new Set(tools.map(t => t.category))].sort();
  return uniqueNames.map(name => {
    const existing = categories.find(c => c.name === name);
    if (existing) return existing;
    return {
      id: getCategorySlug(name),
      name: name,
      description: "Explore " + tools.filter(t => t.category === name).length + " tools and calculators for " + name + "."
    };
  });
};

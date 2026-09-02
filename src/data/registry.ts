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
}

export const categories: Category[] = [
  { id: "academic", name: "Academic", description: "CGPA, GPA, Marks, Grades, and Attendance calculators." },
  { id: "mathematics", name: "Mathematics", description: "Basic Math, Algebra, Geometry, Statistics, and Calculus." },
  { id: "science", name: "Science", description: "Physics, Chemistry, and Biology calculators." },
  { id: "engineering", name: "Engineering", description: "Electrical, Mechanical, and Civil Engineering tools." },
  { id: "computer-science", name: "Computer Science", description: "Number Systems, Programming, and Developer Tools." },
  { id: "study-productivity", name: "Study & Productivity", description: "Study Planners, Timers, and Writing tools." },
  { id: "date-time", name: "Date & Time", description: "Calculators for dates, times, and countdowns." },
  { id: "finance", name: "Finance", description: "Student Finance, Budgets, and Loans." },
  { id: "converters", name: "Converters", description: "Unit, Data, and Scientific Conversions." },
  { id: "files-images", name: "Files & Images", description: "Image manipulation, PDF tools, and generators." },
  { id: "random-utilities", name: "Random & Utilities", description: "Random Generators, Decision Tools, and General Utilities." }
];

export const tools: Tool[] = [
  // Academic
  {
    id: "cgpa-to-percentage",
    title: "CGPA to Percentage",
    description: "Convert your CGPA to a percentage using standard or custom formulas.",
    slug: "cgpa-to-percentage",
    category: "Academic",
    icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>`
  },
  {
    id: "percentage-to-cgpa",
    title: "Percentage to CGPA",
    description: "Estimate your CGPA from your total percentage.",
    slug: "percentage-to-cgpa",
    category: "Academic",
    icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>`
  },
  {
    id: "gpa-calculator",
    title: "GPA Calculator",
    description: "Calculate your semester GPA based on subject credits and grades.",
    slug: "gpa-calculator",
    category: "Academic",
    icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>`
  },
  {
    id: "percentage-calculator",
    title: "Percentage Calculator",
    description: "Find out your total percentage from multiple subjects.",
    slug: "percentage-calculator",
    category: "Academic",
    icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>`
  },
  {
    id: "marks-calculator",
    title: "Marks Calculator",
    description: "Calculate total, average, and highest/lowest marks.",
    slug: "marks-calculator",
    category: "Academic",
    icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>`
  },
  {
    id: "required-marks",
    title: "Required Marks Calculator",
    description: "Find out how many marks you need to reach a target percentage.",
    slug: "required-marks",
    category: "Academic",
    icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>`
  },
  
  // Attendance
  {
    id: "attendance-calculator",
    title: "Attendance Calculator",
    description: "Calculate current attendance and forecast future attendance.",
    slug: "attendance-calculator",
    category: "Academic",
    subcategory: "Attendance",
    icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>`
  },
  {
    id: "required-attendance",
    title: "Required Attendance",
    description: "Find out how many classes you need to attend to reach your goal.",
    slug: "required-attendance",
    category: "Academic",
    subcategory: "Attendance",
    icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
  },
  {
    id: "classes-to-miss",
    title: "Classes You Can Miss",
    description: "Calculate how many classes you can afford to miss safely.",
    slug: "classes-to-miss",
    category: "Academic",
    subcategory: "Attendance",
    icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
  },

  // Study
  {
    id: "study-hours",
    title: "Study Hours Calculator",
    description: "Distribute your available time across subjects realistically.",
    slug: "study-hours",
    category: "Study & Productivity",
    subcategory: "Study Tools",
    icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
  },
  {
    id: "pomodoro-timer",
    title: "Pomodoro Timer",
    description: "Stay focused with a minimal study and break timer.",
    slug: "pomodoro-timer",
    category: "Study & Productivity",
    subcategory: "Study Tools",
    icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
  },
  {
    id: "word-counter",
    title: "Word Counter",
    description: "Count words, characters, and sentences instantly.",
    slug: "word-counter",
    category: "Study & Productivity",
    subcategory: "Study Tools",
    icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>`
  },
  {
    id: "character-counter",
    title: "Character Counter",
    description: "Count characters with or without spaces.",
    slug: "character-counter",
    category: "Study & Productivity",
    subcategory: "Study Tools",
    icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7"></path></svg>`
  },
  {
    id: "reading-time",
    title: "Reading Time",
    description: "Calculate how long it takes to read a passage of text.",
    slug: "reading-time",
    category: "Study & Productivity",
    subcategory: "Study Tools",
    icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`
  },

  // Date & Time
  {
    id: "age-calculator",
    title: "Age Calculator",
    description: "Calculate your exact age in years, months, and days.",
    slug: "age-calculator",
    category: "Date & Time",
    icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path></svg>`
  },
  {
    id: "date-difference",
    title: "Date Difference",
    description: "Calculate the exact difference between two dates.",
    slug: "date-difference",
    category: "Date & Time",
    icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>`
  },
  {
    id: "days-between-dates",
    title: "Days Between Dates",
    description: "Find out exactly how many days are between two dates.",
    slug: "days-between-dates",
    category: "Date & Time",
    icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>`
  },
  {
    id: "weeks-between-dates",
    title: "Weeks Between Dates",
    description: "Calculate the number of weeks between two dates.",
    slug: "weeks-between-dates",
    category: "Date & Time",
    icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>`
  },
  {
    id: "exam-countdown",
    title: "Exam Countdown",
    description: "Create a live countdown to your upcoming exam.",
    slug: "exam-countdown",
    category: "Date & Time",
    icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
  },

  // Everyday
  {
    id: "unit-converter",
    title: "Unit Converter",
    description: "Convert length, weight, temperature, and more.",
    slug: "unit-converter",
    category: "Converters",
    icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>`
  },
  {
    id: "percentage-change",
    title: "Percentage Change",
    description: "Calculate the percentage increase or decrease between numbers.",
    slug: "percentage-change",
    category: "Mathematics",
    subcategory: "Basic Math",
    icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>`
  },
  {
    id: "average-calculator",
    title: "Average Calculator",
    description: "Find the mean average of a set of numbers.",
    slug: "average-calculator",
    category: "Mathematics",
    subcategory: "Basic Math",
    icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>`
  },
  {
    id: "ratio-calculator",
    title: "Ratio Calculator",
    description: "Simplify and calculate ratios easily.",
    slug: "ratio-calculator",
    category: "Mathematics",
    subcategory: "Basic Math",
    icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path></svg>`
  },
  {
    id: "random-number",
    title: "Random Number",
    description: "Generate a random number within a specific range.",
    slug: "random-number",
    category: "Random & Utilities",
    icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2-1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>`
  },
  {
    id: "square-calculator",
    title: "Square Calculator",
    description: "Calculate the square of any number.",
    slug: "square-calculator",
    category: "Mathematics",
    subcategory: "Basic Math",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 4h16v16H4V4z'></path></svg>",
    formulaConfig: {
      inputs: [{ id: "n", label: "Number" }],
      expression: "n * n",
      outputLabel: "Square"
    }
  },
  {
    id: "rectangle-area-calculator",
    title: "Rectangle Area Calculator",
    description: "Calculate the area of a rectangle.",
    slug: "rectangle-area-calculator",
    category: "Mathematics",
    subcategory: "Geometry",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>",
    formulaConfig: {
      inputs: [{ id: "l", label: "Length" }, { id: "w", label: "Width" }],
      expression: "l * w",
      outputLabel: "Area"
    }
  },
  {
    id: "kinetic-energy-calculator",
    title: "Kinetic Energy Calculator",
    description: "Calculate the kinetic energy of an object in motion.",
    slug: "kinetic-energy-calculator",
    category: "Science",
    subcategory: "Physics",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 10V3L4 14h7v7l9-11h-7z'></path></svg>",
    formulaConfig: {
      inputs: [{ id: "m", label: "Mass (kg)" }, { id: "v", label: "Velocity (m/s)" }],
      expression: "0.5 * m * (v * v)",
      outputLabel: "Kinetic Energy",
      outputUnit: "Joules"
    }
  },
  {
    id: "ohms-law-voltage",
    title: "Voltage Calculator (Ohm's Law)",
    description: "Calculate voltage given current and resistance.",
    slug: "ohms-law-voltage",
    category: "Engineering",
    subcategory: "Electrical Engineering",
    icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 10V3L4 14h7v7l9-11h-7z'></path></svg>",
    formulaConfig: {
      inputs: [{ id: "i", label: "Current (Amps)" }, { id: "r", label: "Resistance (Ohms)" }],
      expression: "i * r",
      outputLabel: "Voltage",
      outputUnit: "Volts"
    }
  },
  { id: "square-root-calculator", title: "Square Root Calculator", description: "Calculate the square root of a number.", slug: "square-root-calculator", category: "Mathematics", subcategory: "Basic Math", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M5 13l4 4L19 7'></path></svg>", formulaConfig: { inputs: [{ id: "n", label: "Number" }], expression: "Math.sqrt(n)", outputLabel: "Square Root" } },
  { id: "cube-calculator", title: "Cube Calculator", description: "Calculate the cube of any number.", slug: "cube-calculator", category: "Mathematics", subcategory: "Basic Math", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 4h16v16H4V4z'></path></svg>", formulaConfig: { inputs: [{ id: "n", label: "Number" }], expression: "n * n * n", outputLabel: "Cube" } },
  { id: "cube-root-calculator", title: "Cube Root Calculator", description: "Calculate the cube root of a number.", slug: "cube-root-calculator", category: "Mathematics", subcategory: "Basic Math", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M5 13l4 4L19 7'></path></svg>", formulaConfig: { inputs: [{ id: "n", label: "Number" }], expression: "Math.cbrt(n)", outputLabel: "Cube Root" } },
  { id: "exponent-calculator", title: "Exponent Calculator", description: "Calculate the power of a base number.", slug: "exponent-calculator", category: "Mathematics", subcategory: "Basic Math", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 10V3L4 14h7v7l9-11h-7z'></path></svg>", formulaConfig: { inputs: [{ id: "b", label: "Base" }, { id: "e", label: "Exponent" }], expression: "Math.pow(b, e)", outputLabel: "Result" } },
  { id: "logarithm-calculator", title: "Logarithm Calculator", description: "Calculate the logarithm of a number.", slug: "logarithm-calculator", category: "Mathematics", subcategory: "Basic Math", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", formulaConfig: { inputs: [{ id: "n", label: "Number" }, { id: "b", label: "Base" }], expression: "Math.log(n) / Math.log(b)", outputLabel: "Logarithm" } },
  { id: "absolute-value-calculator", title: "Absolute Value Calculator", description: "Find the absolute value of a number.", slug: "absolute-value-calculator", category: "Mathematics", subcategory: "Basic Math", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", formulaConfig: { inputs: [{ id: "n", label: "Number" }], expression: "Math.abs(n)", outputLabel: "Absolute Value" } },
  { id: "percentage-difference-calculator", title: "Percentage Difference Calculator", description: "Calculate the percentage difference between two numbers.", slug: "percentage-difference-calculator", category: "Mathematics", subcategory: "Basic Math", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", formulaConfig: { inputs: [{ id: "a", label: "First Value" }, { id: "b", label: "Second Value" }], expression: "Math.abs(a - b) / ((a + b) / 2) * 100", outputLabel: "Percentage Difference", outputUnit: "%" } },
  { id: "percentage-error-calculator", title: "Percentage Error Calculator", description: "Calculate the percentage error between an approximate and exact value.", slug: "percentage-error-calculator", category: "Mathematics", subcategory: "Basic Math", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", formulaConfig: { inputs: [{ id: "approx", label: "Approximate Value" }, { id: "exact", label: "Exact Value" }], expression: "Math.abs((approx - exact) / exact) * 100", outputLabel: "Percentage Error", outputUnit: "%" } },
  { id: "remainder-calculator", title: "Remainder Calculator", description: "Find the remainder when dividing two numbers.", slug: "remainder-calculator", category: "Mathematics", subcategory: "Basic Math", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", formulaConfig: { inputs: [{ id: "dividend", label: "Dividend" }, { id: "divisor", label: "Divisor" }], expression: "dividend % divisor", outputLabel: "Remainder" } },
  { id: "factorial-calculator", title: "Factorial Calculator", description: "Calculate the factorial of a positive integer.", slug: "factorial-calculator", category: "Mathematics", subcategory: "Algebra", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M12 6v6m0 0v6m0-6h6m-6 0H6'></path></svg>", formulaConfig: { inputs: [{ id: "n", label: "Number (Integer)" }], expression: "(function(n){ if(!Number.isInteger(n) || n<0) return 'Invalid'; let f=1; for(let i=2;i<=n;i++) f*=i; return f; })(n)", outputLabel: "Factorial" } },
  { id: "gcd-calculator", title: "GCD Calculator", description: "Find the Greatest Common Divisor (HCF).", slug: "gcd-calculator", category: "Mathematics", subcategory: "Basic Math", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M12 6v6m0 0v6m-6-6h12'></path></svg>", formulaConfig: { inputs: [{ id: "a", label: "First Number" }, { id: "b", label: "Second Number" }], expression: "(function(a,b){ a=Math.abs(a); b=Math.abs(b); while(b){ let t=b; b=a%b; a=t; } return a; })(a,b)", outputLabel: "GCD" } },
  { id: "lcm-calculator", title: "LCM Calculator", description: "Find the Lowest Common Multiple.", slug: "lcm-calculator", category: "Mathematics", subcategory: "Basic Math", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M12 6v6m0 0v6m-6-6h12'></path></svg>", formulaConfig: { inputs: [{ id: "a", label: "First Number" }, { id: "b", label: "Second Number" }], expression: "(function(a,b){ let oA=Math.abs(a), oB=Math.abs(b); while(b){ let t=b; b=a%b; a=t; } return (oA*oB)/a; })(a,b)", outputLabel: "LCM" } },
  { id: "prime-checker", title: "Prime Number Checker", description: "Check if a number is prime.", slug: "prime-checker", category: "Mathematics", subcategory: "Basic Math", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M5 13l4 4L19 7'></path></svg>", formulaConfig: { inputs: [{ id: "n", label: "Number" }], expression: "(function(n){ if(!Number.isInteger(n)) return 'Invalid'; if(n<=1) return 'No'; if(n===2) return 'Yes'; if(n%2===0) return 'No'; for(let i=3;i<=Math.sqrt(n);i+=2) if(n%i===0) return 'No'; return 'Yes'; })(n)", outputLabel: "Is Prime?" } },
  { id: "quadratic-equation-solver", title: "Quadratic Equation Solver", description: "Solve quadratic equations.", slug: "quadratic-equation-solver", category: "Mathematics", subcategory: "Algebra", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M12 6v6m0 0v6m-6-6h12'></path></svg>", formulaConfig: { inputs: [{ id: "a", label: "Coefficient a" }, { id: "b", label: "Coefficient b" }, { id: "c", label: "Constant c" }], expression: "(function(a,b,c){ if(a===0) return 'Not a quadratic'; let d = b*b - 4*a*c; if(d>0) return 'x1 = ' + ((-b+Math.sqrt(d))/(2*a)).toFixed(4) + ', x2 = ' + ((-b-Math.sqrt(d))/(2*a)).toFixed(4); else if (d===0) return 'x = ' + (-b/(2*a)).toFixed(4); else return 'Complex roots'; })(a,b,c)", outputLabel: "Roots" } },
  { id: "linear-equation-solver", title: "Linear Equation Solver", description: "Solve a linear equation ax + b = 0.", slug: "linear-equation-solver", category: "Mathematics", subcategory: "Algebra", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M12 6v6m0 0v6m-6-6h12'></path></svg>", formulaConfig: { inputs: [{ id: "a", label: "Coefficient a" }, { id: "b", label: "Constant b" }], expression: "(function(a,b){ if(a===0) return 'No solution'; return 'x = ' + (-b/a).toFixed(4); })(a,b)", outputLabel: "Root" } },
  { id: "pythagorean-theorem-calculator", title: "Pythagorean Theorem Calculator", description: "Find the hypotenuse of a right-angled triangle.", slug: "pythagorean-theorem-calculator", category: "Mathematics", subcategory: "Geometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M3 21h18L12 3z'></path></svg>", formulaConfig: { inputs: [{ id: "a", label: "Leg A" }, { id: "b", label: "Leg B" }], expression: "Math.sqrt(a*a + b*b)", outputLabel: "Hypotenuse (c)" } },
  { id: "circle-area-calculator", title: "Circle Area Calculator", description: "Calculate the area of a circle.", slug: "circle-area-calculator", category: "Mathematics", subcategory: "Geometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z'></path></svg>", formulaConfig: { inputs: [{ id: "r", label: "Radius" }], expression: "Math.PI * r * r", outputLabel: "Area" } },
  { id: "circle-circumference-calculator", title: "Circle Circumference Calculator", description: "Calculate the perimeter (circumference) of a circle.", slug: "circle-circumference-calculator", category: "Mathematics", subcategory: "Geometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z'></path></svg>", formulaConfig: { inputs: [{ id: "r", label: "Radius" }], expression: "2 * Math.PI * r", outputLabel: "Circumference" } },
  { id: "square-perimeter-calculator", title: "Square Perimeter Calculator", description: "Calculate the perimeter of a square.", slug: "square-perimeter-calculator", category: "Mathematics", subcategory: "Geometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 4h16v16H4V4z'></path></svg>", formulaConfig: { inputs: [{ id: "s", label: "Side Length" }], expression: "4 * s", outputLabel: "Perimeter" } },
  { id: "rectangle-perimeter-calculator", title: "Rectangle Perimeter Calculator", description: "Calculate the perimeter of a rectangle.", slug: "rectangle-perimeter-calculator", category: "Mathematics", subcategory: "Geometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", formulaConfig: { inputs: [{ id: "l", label: "Length" }, { id: "w", label: "Width" }], expression: "2 * (l + w)", outputLabel: "Perimeter" } },
  { id: "cube-volume-calculator", title: "Cube Volume Calculator", description: "Calculate the volume of a cube.", slug: "cube-volume-calculator", category: "Mathematics", subcategory: "Geometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'></path></svg>", formulaConfig: { inputs: [{ id: "s", label: "Side Length" }], expression: "s * s * s", outputLabel: "Volume" } },
  { id: "sphere-volume-calculator", title: "Sphere Volume Calculator", description: "Calculate the volume of a sphere.", slug: "sphere-volume-calculator", category: "Mathematics", subcategory: "Geometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z'></path></svg>", formulaConfig: { inputs: [{ id: "r", label: "Radius" }], expression: "(4/3) * Math.PI * Math.pow(r, 3)", outputLabel: "Volume" } },
  { id: "cylinder-volume-calculator", title: "Cylinder Volume Calculator", description: "Calculate the volume of a cylinder.", slug: "cylinder-volume-calculator", category: "Mathematics", subcategory: "Geometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z'></path></svg>", formulaConfig: { inputs: [{ id: "r", label: "Radius" }, { id: "h", label: "Height" }], expression: "Math.PI * r * r * h", outputLabel: "Volume" } },
  { id: "cone-volume-calculator", title: "Cone Volume Calculator", description: "Calculate the volume of a cone.", slug: "cone-volume-calculator", category: "Mathematics", subcategory: "Geometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M3 21h18L12 3z'></path></svg>", formulaConfig: { inputs: [{ id: "r", label: "Radius" }, { id: "h", label: "Height" }], expression: "(1/3) * Math.PI * r * r * h", outputLabel: "Volume" } },
  { id: "arithmetic-sequence-calculator", title: "Arithmetic Sequence Calculator", description: "Find the nth term of an arithmetic sequence.", slug: "arithmetic-sequence-calculator", category: "Mathematics", subcategory: "Algebra", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", formulaConfig: { inputs: [{ id: "a", label: "First Term (a)" }, { id: "d", label: "Common Difference (d)" }, { id: "n", label: "Term Number (n)" }], expression: "a + (n - 1) * d", outputLabel: "Nth Term" } },
  { id: "geometric-sequence-calculator", title: "Geometric Sequence Calculator", description: "Find the nth term of a geometric sequence.", slug: "geometric-sequence-calculator", category: "Mathematics", subcategory: "Algebra", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", formulaConfig: { inputs: [{ id: "a", label: "First Term (a)" }, { id: "r", label: "Common Ratio (r)" }, { id: "n", label: "Term Number (n)" }], expression: "a * Math.pow(r, n - 1)", outputLabel: "Nth Term" } },
  { id: "mean-calculator", title: "Mean Calculator", description: "Calculate the average (mean) of a dataset.", slug: "mean-calculator", category: "Mathematics", subcategory: "Statistics", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "StatisticsCalculator" },
  { id: "median-calculator", title: "Median Calculator", description: "Calculate the median of a dataset.", slug: "median-calculator", category: "Mathematics", subcategory: "Statistics", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "StatisticsCalculator" },
  { id: "mode-calculator", title: "Mode Calculator", description: "Find the mode of a dataset.", slug: "mode-calculator", category: "Mathematics", subcategory: "Statistics", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "StatisticsCalculator" },
  { id: "range-calculator", title: "Range Calculator", description: "Calculate the range of a dataset.", slug: "range-calculator", category: "Mathematics", subcategory: "Statistics", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "StatisticsCalculator" },
  { id: "variance-calculator", title: "Variance Calculator", description: "Calculate population and sample variance.", slug: "variance-calculator", category: "Mathematics", subcategory: "Statistics", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "StatisticsCalculator" },
  { id: "standard-deviation-calculator", title: "Standard Deviation Calculator", description: "Calculate population and sample standard deviation.", slug: "standard-deviation-calculator", category: "Mathematics", subcategory: "Statistics", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "StatisticsCalculator" },
  { id: "fraction-to-decimal", title: "Fraction to Decimal", description: "Convert a fraction to a decimal.", slug: "fraction-to-decimal", category: "Mathematics", subcategory: "Basic Math", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", formulaConfig: { inputs: [{ id: "n", label: "Numerator" }, { id: "d", label: "Denominator" }], expression: "n / d", outputLabel: "Decimal" } },
  { id: "decimal-to-fraction", title: "Decimal to Fraction Converter", description: "Convert a decimal to a fraction.", slug: "decimal-to-fraction", category: "Mathematics", subcategory: "Basic Math", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", formulaConfig: { inputs: [{ id: "d", label: "Decimal Number" }], expression: "(function(d){ if(!isFinite(d)) return 'Invalid'; let len = (d.toString().split('.')[1] || '').length; let den = Math.pow(10, len); let num = Math.round(d * den); let gcd = function(a,b){return b?gcd(b,a%b):a;}; let hcf = Math.abs(gcd(num,den)); return (num/hcf) + '/' + (den/hcf); })(d)", outputLabel: "Fraction" } },
  { id: "ratio-simplifier", title: "Ratio Simplifier", description: "Simplify a ratio.", slug: "ratio-simplifier", category: "Mathematics", subcategory: "Basic Math", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", formulaConfig: { inputs: [{ id: "a", label: "Part A" }, { id: "b", label: "Part B" }], expression: "(function(a,b){ if(!Number.isInteger(a) || !Number.isInteger(b)) return 'Integers only'; let gcd = function(x,y){return y?gcd(y,x%y):x;}; let hcf = Math.abs(gcd(a,b)); return (a/hcf) + ':' + (b/hcf); })(a,b)", outputLabel: "Simplified Ratio" } },
  { id: "proportion-calculator", title: "Proportion Calculator", description: "Solve for x in a proportion A:B = C:X", slug: "proportion-calculator", category: "Mathematics", subcategory: "Basic Math", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", formulaConfig: { inputs: [{ id: "a", label: "A" }, { id: "b", label: "B" }, { id: "c", label: "C" }], expression: "(b * c) / a", outputLabel: "X" } },
  { id: "number-to-words", title: "Number to Words Converter", description: "Convert a number to english words.", slug: "number-to-words", category: "Mathematics", subcategory: "Basic Math", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", formulaConfig: { inputs: [{ id: "n", label: "Number" }], expression: "(function(n){ if(!Number.isInteger(n)) return 'Integers only (up to 9999)'; if(n===0) return 'zero'; let ones=['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']; let tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']; let numString = n.toString(); if (numString.length > 4) return 'Number too large'; let res=''; let len=numString.length; if(len===4){ res+=ones[parseInt(numString[0])]+' thousand '; numString=numString.substring(1); len--; } if(len===3){ if(numString[0]!=='0') res+=ones[parseInt(numString[0])]+' hundred '; numString=numString.substring(1); len--; } let lastTwo=parseInt(numString); if(lastTwo>0){ if(res!=='') res+='and '; if(lastTwo<20) res+=ones[lastTwo]; else { res+=tens[parseInt(numString[0])]; if(numString[1]!=='0') res+='-'+ones[parseInt(numString[1])]; } } return res.trim(); })(n)", outputLabel: "Words" } },
  { id: "roman-numeral-converter", title: "Roman Numeral Converter", description: "Convert a number to Roman Numerals.", slug: "roman-numeral-converter", category: "Mathematics", subcategory: "Basic Math", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", formulaConfig: { inputs: [{ id: "n", label: "Number (1-3999)" }], expression: "(function(num){ if(!Number.isInteger(num) || num<1 || num>3999) return '1 to 3999 only'; const roman = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}; let str=''; for (let i of Object.keys(roman)) { let q = Math.floor(num / roman[i]); num -= q * roman[i]; str += i.repeat(q); } return str; })(n)", outputLabel: "Roman Numeral" } },
  { id: "scientific-calculator", title: "Scientific Calculator", description: "Advanced scientific calculator with history and trigonometric functions.", slug: "scientific-calculator", category: "Mathematics", subcategory: "Basic Math", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'></path></svg>", component: "ScientificCalculator" },
  { id: "simultaneous-equations", title: "Simultaneous Equation Solver", description: "Solve systems of linear equations with 2 or 3 variables.", slug: "simultaneous-equations", category: "Mathematics", subcategory: "Algebra", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M12 6v6m0 0v6m-6-6h12'></path></svg>", component: "SimultaneousEquations" },
  { id: "matrix-calculator", title: "Matrix Calculator", description: "Add, subtract, multiply, transpose, and invert matrices.", slug: "matrix-calculator", category: "Mathematics", subcategory: "Algebra", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "MatrixCalculator" },
  { id: "fraction-calculator", title: "Fraction Calculator", description: "Add, subtract, multiply, and divide fractions.", slug: "fraction-calculator", category: "Mathematics", subcategory: "Basic Math", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "FractionCalculator" },
  { id: "permutation-calculator", title: "Permutation Calculator (nPr)", description: "Calculate permutations.", slug: "permutation-calculator", category: "Mathematics", subcategory: "Statistics", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", formulaConfig: { inputs: [{ id: "n", label: "Total Objects (n)" }, { id: "r", label: "Selected Objects (r)" }], expression: "(function(n,r){ if(!Number.isInteger(n) || !Number.isInteger(r) || n<0 || r<0 || r>n) return 'Invalid'; let f=function(x){let r=1; for(let i=2;i<=x;i++) r*=i; return r;}; return f(n)/f(n-r); })(n,r)", outputLabel: "Permutations (nPr)" } },
  { id: "combination-calculator", title: "Combination Calculator (nCr)", description: "Calculate combinations.", slug: "combination-calculator", category: "Mathematics", subcategory: "Statistics", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", formulaConfig: { inputs: [{ id: "n", label: "Total Objects (n)" }, { id: "r", label: "Selected Objects (r)" }], expression: "(function(n,r){ if(!Number.isInteger(n) || !Number.isInteger(r) || n<0 || r<0 || r>n) return 'Invalid'; let f=function(x){let r=1; for(let i=2;i<=x;i++) r*=i; return r;}; return f(n)/(f(r)*f(n-r)); })(n,r)", outputLabel: "Combinations (nCr)" } },
  { id: "probability-calculator", title: "Probability Calculator", description: "Calculate the probability of events.", slug: "probability-calculator", category: "Mathematics", subcategory: "Statistics", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "ProbabilityCalculator" },
  { id: "polynomial-calculator", title: "Polynomial Calculator", description: "Evaluate polynomial expressions.", slug: "polynomial-calculator", category: "Mathematics", subcategory: "Algebra", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M12 6v6m0 0v6m-6-6h12'></path></svg>", component: "PolynomialCalculator" },
  { id: "sin-calculator", title: "Sine Calculator (sin)", description: "Calculate the sine of an angle.", slug: "sin-calculator", category: "Mathematics", subcategory: "Trigonometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "TrigFunctionCalculator" },
  { id: "cos-calculator", title: "Cosine Calculator (cos)", description: "Calculate the cosine of an angle.", slug: "cos-calculator", category: "Mathematics", subcategory: "Trigonometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "TrigFunctionCalculator" },
  { id: "tan-calculator", title: "Tangent Calculator (tan)", description: "Calculate the tangent of an angle.", slug: "tan-calculator", category: "Mathematics", subcategory: "Trigonometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "TrigFunctionCalculator" },
  { id: "cosecant-calculator", title: "Cosecant Calculator (csc)", description: "Calculate the cosecant of an angle.", slug: "cosecant-calculator", category: "Mathematics", subcategory: "Trigonometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "TrigFunctionCalculator" },
  { id: "secant-calculator", title: "Secant Calculator (sec)", description: "Calculate the secant of an angle.", slug: "secant-calculator", category: "Mathematics", subcategory: "Trigonometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "TrigFunctionCalculator" },
  { id: "cotangent-calculator", title: "Cotangent Calculator (cot)", description: "Calculate the cotangent of an angle.", slug: "cotangent-calculator", category: "Mathematics", subcategory: "Trigonometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "TrigFunctionCalculator" },
  { id: "arcsin-calculator", title: "Arcsine Calculator (arcsin)", description: "Calculate the inverse sine.", slug: "arcsin-calculator", category: "Mathematics", subcategory: "Trigonometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "TrigFunctionCalculator" },
  { id: "arccos-calculator", title: "Arccosine Calculator (arccos)", description: "Calculate the inverse cosine.", slug: "arccos-calculator", category: "Mathematics", subcategory: "Trigonometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "TrigFunctionCalculator" },
  { id: "arctan-calculator", title: "Arctangent Calculator (arctan)", description: "Calculate the inverse tangent.", slug: "arctan-calculator", category: "Mathematics", subcategory: "Trigonometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "TrigFunctionCalculator" },
  { id: "arccsc-calculator", title: "Arccosecant Calculator (arccsc)", description: "Calculate the inverse cosecant.", slug: "arccsc-calculator", category: "Mathematics", subcategory: "Trigonometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "TrigFunctionCalculator" },
  { id: "arcsec-calculator", title: "Arcsecant Calculator (arcsec)", description: "Calculate the inverse secant.", slug: "arcsec-calculator", category: "Mathematics", subcategory: "Trigonometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "TrigFunctionCalculator" },
  { id: "arccot-calculator", title: "Arccotangent Calculator (arccot)", description: "Calculate the inverse cotangent.", slug: "arccot-calculator", category: "Mathematics", subcategory: "Trigonometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "TrigFunctionCalculator" },
  { id: "right-triangle-calculator", title: "Right Triangle Calculator", description: "Solve a right-angled triangle given 2 values.", slug: "right-triangle-calculator", category: "Mathematics", subcategory: "Trigonometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M3 21h18L12 3z'></path></svg>", component: "TriangleCalculator" },
  { id: "triangle-calculator", title: "Triangle Calculator", description: "Solve any triangle using trigonometry.", slug: "triangle-calculator", category: "Mathematics", subcategory: "Trigonometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M3 21h18L12 3z'></path></svg>", component: "TriangleCalculator" },
  { id: "law-of-sines-calculator", title: "Law of Sines Calculator", description: "Solve a triangle using the Law of Sines.", slug: "law-of-sines-calculator", category: "Mathematics", subcategory: "Trigonometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M3 21h18L12 3z'></path></svg>", component: "TriangleCalculator" },
  { id: "law-of-cosines-calculator", title: "Law of Cosines Calculator", description: "Solve a triangle using the Law of Cosines.", slug: "law-of-cosines-calculator", category: "Mathematics", subcategory: "Trigonometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M3 21h18L12 3z'></path></svg>", component: "TriangleCalculator" },
  { id: "missing-angle-calculator", title: "Missing Angle Calculator", description: "Find the missing angle of a triangle.", slug: "missing-angle-calculator", category: "Mathematics", subcategory: "Geometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M3 21h18L12 3z'></path></svg>", component: "TriangleCalculator" },
  { id: "herons-formula-calculator", title: "Heron's Formula Calculator", description: "Calculate the area of a triangle given three sides.", slug: "herons-formula-calculator", category: "Mathematics", subcategory: "Geometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M3 21h18L12 3z'></path></svg>", formulaConfig: { inputs: [{ id: "a", label: "Side a" }, { id: "b", label: "Side b" }, { id: "c", label: "Side c" }], expression: "(function(a,b,c){ let s = (a+b+c)/2; let v = s*(s-a)*(s-b)*(s-c); if(v<=0) return 'Invalid Triangle'; return Math.sqrt(v); })(a,b,c)", outputLabel: "Area" } },
  { id: "triangle-area-calculator", title: "Triangle Area Calculator", description: "Calculate the area of a triangle (Base & Height).", slug: "triangle-area-calculator", category: "Mathematics", subcategory: "Geometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M3 21h18L12 3z'></path></svg>", formulaConfig: { inputs: [{ id: "b", label: "Base" }, { id: "h", label: "Height" }], expression: "0.5 * b * h", outputLabel: "Area" } },
  { id: "triangle-perimeter-calculator", title: "Triangle Perimeter Calculator", description: "Calculate the perimeter of a triangle.", slug: "triangle-perimeter-calculator", category: "Mathematics", subcategory: "Geometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M3 21h18L12 3z'></path></svg>", formulaConfig: { inputs: [{ id: "a", label: "Side a" }, { id: "b", label: "Side b" }, { id: "c", label: "Side c" }], expression: "a + b + c", outputLabel: "Perimeter" } },
  { id: "hypotenuse-calculator", title: "Hypotenuse Calculator", description: "Calculate the hypotenuse of a right triangle.", slug: "hypotenuse-calculator", category: "Mathematics", subcategory: "Geometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M3 21h18L12 3z'></path></svg>", formulaConfig: { inputs: [{ id: "a", label: "Leg a" }, { id: "b", label: "Leg b" }], expression: "Math.sqrt(a*a + b*b)", outputLabel: "Hypotenuse" } },
  { id: "opposite-side-calculator", title: "Opposite Side Calculator", description: "Calculate the opposite side using Sine.", slug: "opposite-side-calculator", category: "Mathematics", subcategory: "Trigonometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M3 21h18L12 3z'></path></svg>", formulaConfig: { inputs: [{ id: "hyp", label: "Hypotenuse" }, { id: "ang", label: "Angle (Degrees)" }], expression: "hyp * Math.sin(ang * Math.PI / 180)", outputLabel: "Opposite Side" } },
  { id: "adjacent-side-calculator", title: "Adjacent Side Calculator", description: "Calculate the adjacent side using Cosine.", slug: "adjacent-side-calculator", category: "Mathematics", subcategory: "Trigonometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M3 21h18L12 3z'></path></svg>", formulaConfig: { inputs: [{ id: "hyp", label: "Hypotenuse" }, { id: "ang", label: "Angle (Degrees)" }], expression: "hyp * Math.cos(ang * Math.PI / 180)", outputLabel: "Adjacent Side" } },
  { id: "degrees-to-radians", title: "Degrees to Radians", description: "Convert an angle from degrees to radians.", slug: "degrees-to-radians", category: "Mathematics", subcategory: "Trigonometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 4h16v16H4V4z'></path></svg>", formulaConfig: { inputs: [{ id: "d", label: "Degrees" }], expression: "d * Math.PI / 180", outputLabel: "Radians" } },
  { id: "radians-to-degrees", title: "Radians to Degrees", description: "Convert an angle from radians to degrees.", slug: "radians-to-degrees", category: "Mathematics", subcategory: "Trigonometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 4h16v16H4V4z'></path></svg>", formulaConfig: { inputs: [{ id: "r", label: "Radians" }], expression: "r * 180 / Math.PI", outputLabel: "Degrees" } },
  { id: "dms-to-decimal-degrees", title: "DMS to Decimal Degrees", description: "Convert Degrees, Minutes, Seconds to Decimal Degrees.", slug: "dms-to-decimal-degrees", category: "Mathematics", subcategory: "Trigonometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 4h16v16H4V4z'></path></svg>", formulaConfig: { inputs: [{ id: "d", label: "Degrees" }, { id: "m", label: "Minutes" }, { id: "s", label: "Seconds" }], expression: "d + (m/60) + (s/3600)", outputLabel: "Decimal Degrees", outputUnit: "°" } },
  { id: "decimal-degrees-to-dms", title: "Decimal Degrees to DMS", description: "Convert Decimal Degrees to Degrees, Minutes, Seconds.", slug: "decimal-degrees-to-dms", category: "Mathematics", subcategory: "Trigonometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 4h16v16H4V4z'></path></svg>", formulaConfig: { inputs: [{ id: "deg", label: "Decimal Degrees" }], expression: "(function(deg){ let d = Math.floor(deg); let mFloat = (deg - d) * 60; let m = Math.floor(mFloat); let s = (mFloat - m) * 60; return d + '° ' + m + '\' ' + s.toFixed(2) + '\"'; })(deg)", outputLabel: "DMS" } },
  { id: "trig-identities", title: "Trigonometric Identities", description: "Interactive reference for trigonometric identities.", slug: "trig-identities", category: "Mathematics", subcategory: "Trigonometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "TrigIdentities" },
  { id: "unit-circle", title: "Unit Circle", description: "Interactive unit circle reference.", slug: "unit-circle", category: "Mathematics", subcategory: "Trigonometry", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z'></path></svg>", component: "UnitCircle" },
  // ---------------- PHASE 3: CALCULUS ----------------
  
  // Limits
  { id: "limit-calculator", title: "Limit Calculator", description: "Evaluate the limit of a function.", slug: "limit-calculator", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 10V3L4 14h7v7l9-11h-7z'></path></svg>", component: "LimitCalculator" },
  { id: "one-sided-limit-calculator", title: "One-Sided Limit Calculator", description: "Evaluate left-hand and right-hand limits.", slug: "one-sided-limit-calculator", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 10V3L4 14h7v7l9-11h-7z'></path></svg>", component: "LimitCalculator" },
  { id: "infinite-limit-calculator", title: "Infinite Limit Calculator", description: "Evaluate limits resulting in infinity.", slug: "infinite-limit-calculator", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 10V3L4 14h7v7l9-11h-7z'></path></svg>", component: "LimitCalculator" },
  { id: "limit-at-infinity-calculator", title: "Limit at Infinity", description: "Evaluate limits as x approaches infinity.", slug: "limit-at-infinity-calculator", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 10V3L4 14h7v7l9-11h-7z'></path></svg>", component: "LimitCalculator" },

  // Derivatives
  { id: "derivative-calculator", title: "Derivative Calculator", description: "Find the symbolic derivative of a function.", slug: "derivative-calculator", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z'></path></svg>", component: "DerivativeCalculator" },
  { id: "second-derivative-calculator", title: "Second Derivative Calculator", description: "Find the second derivative of a function.", slug: "second-derivative-calculator", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z'></path></svg>", component: "DerivativeCalculator" },
  { id: "partial-derivative-calculator", title: "Partial Derivative Calculator", description: "Calculate partial derivatives with respect to a variable.", slug: "partial-derivative-calculator", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z'></path></svg>", component: "DerivativeCalculator" },
  { id: "implicit-differentiation-calculator", title: "Implicit Differentiation", description: "Find dy/dx for implicit equations F(x,y)=0.", slug: "implicit-differentiation-calculator", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z'></path></svg>", component: "DerivativeCalculator" },
  { id: "logarithmic-differentiation-calculator", title: "Logarithmic Differentiation", description: "Calculate derivatives using logarithms.", slug: "logarithmic-differentiation-calculator", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z'></path></svg>", component: "DerivativeCalculator" },

  // Integrals
  { id: "integral-calculator", title: "Integral Calculator", description: "Evaluate definite and indefinite integrals numerically.", slug: "integral-calculator", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'></path></svg>", component: "IntegralCalculator" },
  { id: "definite-integral-calculator", title: "Definite Integral Calculator", description: "Evaluate integrals with bounds.", slug: "definite-integral-calculator", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'></path></svg>", component: "IntegralCalculator" },
  { id: "indefinite-integral-calculator", title: "Indefinite Integral Calculator", description: "Antiderivatives and integration rules.", slug: "indefinite-integral-calculator", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'></path></svg>", component: "IntegralCalculator" },
  { id: "numerical-integration-calculator", title: "Numerical Integration", description: "Approximate integrals using numerical methods.", slug: "numerical-integration-calculator", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'></path></svg>", component: "IntegralCalculator" },

  // Basic Calculus / Tangents
  { id: "tangent-line-calculator", title: "Tangent Line Calculator", description: "Find the equation of a tangent line.", slug: "tangent-line-calculator", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'></path></svg>", component: "DerivativeCalculator" },
  { id: "normal-line-calculator", title: "Normal Line Calculator", description: "Find the equation of a normal line.", slug: "normal-line-calculator", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'></path></svg>", component: "DerivativeCalculator" },
  { id: "average-rate-of-change", title: "Average Rate of Change", description: "Calculate the average rate of change [f(b)-f(a)]/(b-a).", slug: "average-rate-of-change", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'></path></svg>", formulaConfig: { inputs: [{ id: "f", label: "Function f(x) (string)", type: "string" }, { id: "a", label: "Start a" }, { id: "b", label: "End b" }], expression: "(function(f,a,b){ if(a===b) return 'Undefined'; let math = window.math || require('mathjs'); let fn = math.compile(f); let fa = fn.evaluate({x:a}); let fb = fn.evaluate({x:b}); return (fb - fa) / (b - a); })(f,a,b)", outputLabel: "Average Rate of Change" } },
  { id: "instantaneous-rate-of-change", title: "Instantaneous Rate of Change", description: "Calculate the derivative at a point.", slug: "instantaneous-rate-of-change", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'></path></svg>", component: "DerivativeCalculator" },
  { id: "critical-point-calculator", title: "Critical Point Calculator", description: "Find where the derivative is zero.", slug: "critical-point-calculator", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'></path></svg>", component: "DerivativeCalculator" },
  { id: "inflection-point-calculator", title: "Inflection Point Calculator", description: "Find where the second derivative is zero.", slug: "inflection-point-calculator", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'></path></svg>", component: "DerivativeCalculator" },
  { id: "function-increasing-decreasing", title: "Increasing/Decreasing Calculator", description: "Analyze the first derivative.", slug: "function-increasing-decreasing", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'></path></svg>", component: "DerivativeCalculator" },
  { id: "concavity-calculator", title: "Concavity Calculator", description: "Analyze the second derivative.", slug: "concavity-calculator", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'></path></svg>", component: "DerivativeCalculator" },
  { id: "extrema-calculator", title: "Extrema Calculator", description: "Find local minimums and maximums.", slug: "extrema-calculator", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'></path></svg>", component: "DerivativeCalculator" },

  // Applications
  { id: "related-rates-calculator", title: "Related Rates Calculator", description: "Calculate related rates using derivatives.", slug: "related-rates-calculator", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'></path></svg>", component: "DerivativeCalculator" },
  { id: "optimization-calculator", title: "Optimization Calculator", description: "Find maximum and minimum models.", slug: "optimization-calculator", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'></path></svg>", component: "DerivativeCalculator" },
  { id: "marginal-cost-calculator", title: "Marginal Cost Calculator", description: "Calculate marginal cost C'(x).", slug: "marginal-cost-calculator", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'></path></svg>", component: "DerivativeCalculator" },
  { id: "marginal-revenue-calculator", title: "Marginal Revenue Calculator", description: "Calculate marginal revenue R'(x).", slug: "marginal-revenue-calculator", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'></path></svg>", component: "DerivativeCalculator" },
  { id: "marginal-profit-calculator", title: "Marginal Profit Calculator", description: "Calculate marginal profit P'(x).", slug: "marginal-profit-calculator", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'></path></svg>", component: "DerivativeCalculator" },

  // Sequences and Series
  { id: "arithmetic-series-calculator", title: "Arithmetic Series Calculator", description: "Evaluate arithmetic series.", slug: "arithmetic-series-calculator", category: "Mathematics", subcategory: "Sequences", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "SequenceSeriesCalculator" },
  { id: "geometric-series-calculator", title: "Geometric Series Calculator", description: "Evaluate geometric series.", slug: "geometric-series-calculator", category: "Mathematics", subcategory: "Sequences", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "SequenceSeriesCalculator" },
  { id: "geometric-series-sum", title: "Geometric Series Sum", description: "Sum geometric series easily.", slug: "geometric-series-sum", category: "Mathematics", subcategory: "Sequences", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "SequenceSeriesCalculator" },
  { id: "infinite-geometric-series", title: "Infinite Geometric Series", description: "Evaluate infinite geometric series.", slug: "infinite-geometric-series", category: "Mathematics", subcategory: "Sequences", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "SequenceSeriesCalculator" },
  { id: "sequence-calculator", title: "Sequence Calculator", description: "Evaluate mathematical sequences.", slug: "sequence-calculator", category: "Mathematics", subcategory: "Sequences", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "SequenceSeriesCalculator" },
  { id: "sigma-summation-calculator", title: "Sigma Summation Calculator", description: "Evaluate sigma notation sums.", slug: "sigma-summation-calculator", category: "Mathematics", subcategory: "Sequences", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16v12H4V6z'></path></svg>", component: "SequenceSeriesCalculator" },

  // Calculus Reference Tools
  { id: "calculus-formulas", title: "Calculus Formulas", description: "Reference sheet for calculus formulas.", slug: "calculus-formulas", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'></path></svg>", component: "CalculusReference" },
  { id: "derivative-rules", title: "Derivative Rules", description: "Interactive reference for derivative rules.", slug: "derivative-rules", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'></path></svg>", component: "CalculusReference" },
  { id: "integration-rules", title: "Integration Rules", description: "Interactive reference for integration rules.", slug: "integration-rules", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'></path></svg>", component: "CalculusReference" },
  { id: "common-limits", title: "Common Limits", description: "Interactive reference for common limits.", slug: "common-limits", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'></path></svg>", component: "CalculusReference" },
  { id: "calculus-identities", title: "Calculus Identities", description: "Key identities used in calculus.", slug: "calculus-identities", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'></path></svg>", component: "CalculusReference" },

  // Taylor / Maclaurin
  { id: "taylor-series-calculator", title: "Taylor Series Calculator", description: "Calculate the Taylor series expansion.", slug: "taylor-series-calculator", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'></path></svg>", component: "TaylorSeriesCalculator" },
  { id: "maclaurin-series-calculator", title: "Maclaurin Series Calculator", description: "Calculate the Maclaurin series expansion.", slug: "maclaurin-series-calculator", category: "Mathematics", subcategory: "Calculus", icon: "<svg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'></path></svg>", component: "TaylorSeriesCalculator" }
];

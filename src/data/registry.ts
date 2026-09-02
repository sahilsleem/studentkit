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
  }
];

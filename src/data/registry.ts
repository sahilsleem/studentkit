export interface Category {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export interface Tool {
  id: string;
  title: string;
  description: string;
  slug: string;
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
    expression: string;
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
    "description": "GPA, CGPA, target marks, attendance forecasting, and exam grade calculations."
  },
  {
    "id": "everyday-finance",
    "name": "Everyday & Student Finance",
    "description": "Student loans, EMI repayment, interest, discounts, budgeting, and shared roommate expenses."
  },
  {
    "id": "mathematics",
    "name": "Mathematics",
    "description": "Quadratic equations, linear systems, polynomials, fractions, percentages, and number theory."
  },
  {
    "id": "geometry-trigonometry-matrices",
    "name": "Geometry, Trigonometry & Matrices",
    "description": "Triangles, circles, polygon area, 3D volume, trigonometry, vectors, and matrix operations."
  },
  {
    "id": "calculus-advanced-math",
    "name": "Calculus & Advanced Math",
    "description": "Differentiation, integration, limits, power series, and differential equations."
  },
  {
    "id": "statistics-probability",
    "name": "Statistics & Probability",
    "description": "Descriptive statistics, normal curves, confidence intervals, regressions, and distributions."
  },
  {
    "id": "physics",
    "name": "Physics",
    "description": "Kinematics, forces, energy, momentum, circuits, optics, wave mechanics, and fluids."
  },
  {
    "id": "chemistry",
    "name": "Chemistry",
    "description": "Molar mass, stoichiometry, gas laws, pH, buffers, half-life, and electrochemistry."
  },
  {
    "id": "biology-health",
    "name": "Biology & Health Metrics",
    "description": "Genetics crosses, DNA analysis, population genetics, BMI, BMR, and hydration metrics."
  },
  {
    "id": "computer-science-logic",
    "name": "Computer Science & Digital Logic",
    "description": "Base conversions, subnetting, bitwise operations, truth tables, and binary arithmetic."
  },
  {
    "id": "study-productivity-writing",
    "name": "Study Productivity & Writing",
    "description": "Word counts, reading speeds, words-to-pages, case conversion, study timers, and date diffs."
  },
  {
    "id": "universal-converters",
    "name": "Universal Measurement Converters",
    "description": "Length, weight, temperature, duration, velocity, area, and fluid volume converters."
  }
];

export const tools: Tool[] = [
  {
    "id": "gpa-calculator",
    "title": "GPA Calculator (Semester & Cumulative)",
    "description": "Calculate your semester and cumulative GPA on the standard 4.0 scale with custom credit hours and target projections.",
    "slug": "gpa-calculator",
    "category": "Academic & Grades",
    "subcategory": "GPA & CGPA",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342\" /></svg>",
    "keywords": [
      "gpa",
      "grade point average",
      "college gpa",
      "semester gpa",
      "cumulative gpa",
      "4.0 scale"
    ],
    "popular": true
  },
  {
    "id": "cgpa-percentage-calculator",
    "title": "CGPA & Percentage Converter",
    "description": "Convert between 10-point CGPA and equivalent percentage scores with CBSE (9.5), direct (10.0), and custom multipliers.",
    "slug": "cgpa-percentage-calculator",
    "category": "Academic & Grades",
    "subcategory": "GPA & CGPA",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342\" /></svg>",
    "keywords": [
      "cgpa to percentage",
      "percentage to cgpa",
      "cbse cgpa converter",
      "aicte multiplier",
      "10 point cgpa"
    ],
    "popular": true
  },
  {
    "id": "final-grade-calculator",
    "title": "Final Grade Calculator",
    "description": "Find the exact grade or score you need on your final exam to achieve your target overall course letter grade.",
    "slug": "final-grade-calculator",
    "category": "Academic & Grades",
    "subcategory": "Exam Planning",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342\" /></svg>",
    "keywords": [
      "final exam calculator",
      "what do i need on final",
      "target grade",
      "exam grade requirement"
    ],
    "popular": true
  },
  {
    "id": "weighted-grade-calculator",
    "title": "Weighted Grade Calculator",
    "description": "Calculate your overall weighted class average based on homework, quiz, lab, midterm, and final exam percentage weights.",
    "slug": "weighted-grade-calculator",
    "category": "Academic & Grades",
    "subcategory": "Grade Weighting",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342\" /></svg>",
    "keywords": [
      "weighted grade",
      "class average",
      "syllabus weighting",
      "percentage grade",
      "grade breakdown"
    ]
  },
  {
    "id": "attendance-calculator",
    "title": "Attendance Calculator & Bunk Planner",
    "description": "Calculate your current attendance percentage, check if you meet 75%/85% criteria, and plan safe lecture skips.",
    "slug": "attendance-calculator",
    "category": "Academic & Grades",
    "subcategory": "Attendance",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342\" /></svg>",
    "keywords": [
      "attendance tracker",
      "bunk planner",
      "75 attendance criteria",
      "classes to attend",
      "safe skips"
    ],
    "popular": true
  },
  {
    "id": "target-marks-calculator",
    "title": "Target Marks Calculator",
    "description": "Determine the exact marks needed in upcoming internal exams, assignments, and finals to reach your target semester score.",
    "slug": "target-marks-calculator",
    "category": "Academic & Grades",
    "subcategory": "Exam Planning",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342\" /></svg>",
    "keywords": [
      "required marks",
      "target score",
      "internal marks calculator",
      "exam target"
    ]
  },
  {
    "id": "grade-converter",
    "title": "Grade & Letter Scale Converter",
    "description": "Convert seamlessly between letter grades (A+, A, B), percentage intervals, and 4.0 grade point averages.",
    "slug": "grade-converter",
    "category": "Academic & Grades",
    "subcategory": "Grade Weighting",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342\" /></svg>",
    "keywords": [
      "letter grade converter",
      "gpa scale",
      "percentage to letter grade",
      "grade point chart"
    ]
  },
  {
    "id": "marks-percentage-calculator",
    "title": "Marks & Percentage Total Calculator",
    "description": "Calculate your total marks, overall percentage, class rank score, and highest/lowest subject performance.",
    "slug": "marks-percentage-calculator",
    "category": "Academic & Grades",
    "subcategory": "Grade Weighting",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342\" /></svg>",
    "keywords": [
      "marks calculator",
      "total marks to percentage",
      "subject marks average",
      "student score calculator"
    ]
  },
  {
    "id": "student-loan-calculator",
    "title": "Student Loan & EMI Calculator",
    "description": "Calculate monthly student loan installments (EMI), total interest charges, and accelerated payoff schedules.",
    "slug": "student-loan-calculator",
    "category": "Everyday & Student Finance",
    "subcategory": "Loans & Debt",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z\" /></svg>",
    "keywords": [
      "student loan emi",
      "loan repayment",
      "tuition loan interest",
      "monthly loan payment",
      "amortization schedule"
    ],
    "popular": true
  },
  {
    "id": "simple-interest-calculator",
    "title": "Simple Interest Calculator",
    "description": "Compute simple interest, principal, annual interest rate, and term duration with the classic I = Prt formula.",
    "slug": "simple-interest-calculator",
    "category": "Everyday & Student Finance",
    "subcategory": "Interest & Savings",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z\" /></svg>",
    "keywords": [
      "simple interest",
      "prt formula",
      "interest calculation",
      "principal interest rate"
    ]
  },
  {
    "id": "compound-interest-calculator",
    "title": "Compound Interest Calculator",
    "description": "Calculate compound growth on savings and student investments with annual, monthly, or daily compounding frequencies.",
    "slug": "compound-interest-calculator",
    "category": "Everyday & Student Finance",
    "subcategory": "Interest & Savings",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z\" /></svg>",
    "keywords": [
      "compound interest",
      "future value",
      "compounding growth",
      "savings growth",
      "annual yield"
    ],
    "popular": true
  },
  {
    "id": "discount-calculator",
    "title": "Discount & Sale Price Calculator",
    "description": "Calculate final sale prices, dollar savings, and stacked student percentage discounts on shopping and textbooks.",
    "slug": "discount-calculator",
    "category": "Everyday & Student Finance",
    "subcategory": "Shopping & Budget",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z\" /></svg>",
    "keywords": [
      "discount calculator",
      "sale price",
      "percent off",
      "student discount",
      "price reduction"
    ],
    "popular": true
  },
  {
    "id": "sales-tax-calculator",
    "title": "Sales Tax & GST Calculator",
    "description": "Calculate net price, gross total, and sales tax or GST amounts for any customizable tax percentage rate.",
    "slug": "sales-tax-calculator",
    "category": "Everyday & Student Finance",
    "subcategory": "Shopping & Budget",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z\" /></svg>",
    "keywords": [
      "sales tax",
      "gst calculator",
      "vat calculator",
      "tax amount",
      "gross price net price"
    ]
  },
  {
    "id": "tip-bill-split-calculator",
    "title": "Tip & Bill Split Calculator",
    "description": "Calculate standard restaurant tips and split the final bill evenly among friends or roommates with zero friction.",
    "slug": "tip-bill-split-calculator",
    "category": "Everyday & Student Finance",
    "subcategory": "Shopping & Budget",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z\" /></svg>",
    "keywords": [
      "tip calculator",
      "bill splitter",
      "split the bill",
      "group dining calculator",
      "restaurant tip"
    ]
  },
  {
    "id": "student-budget-calculator",
    "title": "College Student Budget & Savings Planner",
    "description": "Plan monthly student stipends, rent, groceries, study supplies, and estimate emergency savings funds.",
    "slug": "student-budget-calculator",
    "category": "Everyday & Student Finance",
    "subcategory": "Shopping & Budget",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z\" /></svg>",
    "keywords": [
      "student budget",
      "college spending",
      "monthly expense planner",
      "dorm budget",
      "savings tracker"
    ]
  },
  {
    "id": "inflation-calculator",
    "title": "Inflation & Purchasing Power Calculator",
    "description": "Estimate the future buying power of money and equivalent costs over time based on custom inflation rates.",
    "slug": "inflation-calculator",
    "category": "Everyday & Student Finance",
    "subcategory": "Interest & Savings",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z\" /></svg>",
    "keywords": [
      "inflation calculator",
      "purchasing power",
      "future cost of money",
      "cpi inflation",
      "real value"
    ]
  },
  {
    "id": "margin-markup-calculator",
    "title": "Margin & Markup Calculator",
    "description": "Calculate gross profit margins, markup percentages, cost of goods, and selling prices for student projects.",
    "slug": "margin-markup-calculator",
    "category": "Everyday & Student Finance",
    "subcategory": "Shopping & Budget",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z\" /></svg>",
    "keywords": [
      "profit margin",
      "markup calculator",
      "cost of goods",
      "gross margin",
      "selling price"
    ]
  },
  {
    "id": "hourly-to-salary-calculator",
    "title": "Hourly Wage to Salary Calculator",
    "description": "Convert part-time student hourly wages into equivalent weekly, monthly, and annual gross earnings.",
    "slug": "hourly-to-salary-calculator",
    "category": "Everyday & Student Finance",
    "subcategory": "Income & Work",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z\" /></svg>",
    "keywords": [
      "hourly to salary",
      "wage converter",
      "student job pay",
      "weekly wage to annual salary"
    ]
  },
  {
    "id": "rent-split-calculator",
    "title": "Rent Split & Roommate Expense Calculator",
    "description": "Fairly split apartment rent, utility bills, and shared household subscriptions based on room dimensions or equal shares.",
    "slug": "rent-split-calculator",
    "category": "Everyday & Student Finance",
    "subcategory": "Shopping & Budget",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z\" /></svg>",
    "keywords": [
      "rent split",
      "roommate calculator",
      "split utilities",
      "apartment expense share",
      "shared rent"
    ]
  },
  {
    "id": "quadratic-formula-calculator",
    "title": "Quadratic Formula & Equation Solver",
    "description": "Solve quadratic equations (ax² + bx + c = 0) with discriminant, real/complex roots, and parabola vertex.",
    "slug": "quadratic-formula-calculator",
    "category": "Mathematics",
    "subcategory": "Algebra",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.75 15.75V18a2.25 2.25 0 0 1-2.25 2.25h-6A2.25 2.25 0 0 1 5.25 18v-6A2.25 2.25 0 0 1 7.5 9.75h2.25m4.5 0a2.25 2.25 0 0 0-2.25-2.25h-6A2.25 2.25 0 0 0 3.75 9.75v6A2.25 2.25 0 0 0 6 18h2.25\" /></svg>",
    "keywords": [
      "quadratic formula",
      "solve quadratic equation",
      "discriminant",
      "parabola vertex",
      "roots of polynomial"
    ],
    "popular": true
  },
  {
    "id": "simultaneous-equations-solver",
    "title": "Simultaneous Equations Solver (2x2 & 3x3)",
    "description": "Solve systems of 2-variable and 3-variable linear equations using matrix elimination with clear solutions.",
    "slug": "simultaneous-equations-solver",
    "category": "Mathematics",
    "subcategory": "Algebra",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.75 15.75V18a2.25 2.25 0 0 1-2.25 2.25h-6A2.25 2.25 0 0 1 5.25 18v-6A2.25 2.25 0 0 1 7.5 9.75h2.25m4.5 0a2.25 2.25 0 0 0-2.25-2.25h-6A2.25 2.25 0 0 0 3.75 9.75v6A2.25 2.25 0 0 0 6 18h2.25\" /></svg>",
    "keywords": [
      "simultaneous equations",
      "system of linear equations",
      "2x2 solver",
      "3x3 solver",
      "cramers rule"
    ]
  },
  {
    "id": "polynomial-calculator",
    "title": "Polynomial Calculator & Root Finder",
    "description": "Evaluate polynomial functions, calculate degrees, leading coefficients, and solve quadratic and cubic roots.",
    "slug": "polynomial-calculator",
    "category": "Mathematics",
    "subcategory": "Algebra",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.75 15.75V18a2.25 2.25 0 0 1-2.25 2.25h-6A2.25 2.25 0 0 1 5.25 18v-6A2.25 2.25 0 0 1 7.5 9.75h2.25m4.5 0a2.25 2.25 0 0 0-2.25-2.25h-6A2.25 2.25 0 0 0 3.75 9.75v6A2.25 2.25 0 0 0 6 18h2.25\" /></svg>",
    "keywords": [
      "polynomial solver",
      "polynomial roots",
      "synthetic division",
      "degree of polynomial",
      "cubic solver"
    ]
  },
  {
    "id": "fraction-calculator",
    "title": "Fraction Calculator & Simplifier",
    "description": "Add, subtract, multiply, divide, and reduce proper, improper, and mixed fractions with step-by-step simplification.",
    "slug": "fraction-calculator",
    "category": "Mathematics",
    "subcategory": "Arithmetic",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.75 15.75V18a2.25 2.25 0 0 1-2.25 2.25h-6A2.25 2.25 0 0 1 5.25 18v-6A2.25 2.25 0 0 1 7.5 9.75h2.25m4.5 0a2.25 2.25 0 0 0-2.25-2.25h-6A2.25 2.25 0 0 0 3.75 9.75v6A2.25 2.25 0 0 0 6 18h2.25\" /></svg>",
    "keywords": [
      "fraction calculator",
      "simplify fractions",
      "mixed numbers",
      "add fractions",
      "fraction arithmetic"
    ],
    "popular": true
  },
  {
    "id": "ratio-calculator",
    "title": "Ratio & Proportion Calculator",
    "description": "Solve direct and inverse proportions (A : B = C : D), scale dimensions, and simplify multi-term ratios.",
    "slug": "ratio-calculator",
    "category": "Mathematics",
    "subcategory": "Arithmetic",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.75 15.75V18a2.25 2.25 0 0 1-2.25 2.25h-6A2.25 2.25 0 0 1 5.25 18v-6A2.25 2.25 0 0 1 7.5 9.75h2.25m4.5 0a2.25 2.25 0 0 0-2.25-2.25h-6A2.25 2.25 0 0 0 3.75 9.75v6A2.25 2.25 0 0 0 6 18h2.25\" /></svg>",
    "keywords": [
      "ratio solver",
      "proportion calculator",
      "cross multiplication",
      "simplify ratio",
      "aspect ratio"
    ]
  },
  {
    "id": "percentage-calculator",
    "title": "Percentage Calculator",
    "description": "Solve all standard percentage problems: what is X% of Y, X is what % of Y, and percentage shares.",
    "slug": "percentage-calculator",
    "category": "Mathematics",
    "subcategory": "Arithmetic",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.75 15.75V18a2.25 2.25 0 0 1-2.25 2.25h-6A2.25 2.25 0 0 1 5.25 18v-6A2.25 2.25 0 0 1 7.5 9.75h2.25m4.5 0a2.25 2.25 0 0 0-2.25-2.25h-6A2.25 2.25 0 0 0 3.75 9.75v6A2.25 2.25 0 0 0 6 18h2.25\" /></svg>",
    "keywords": [
      "percentage calculator",
      "percent of number",
      "calculate percentage",
      "percentage formula"
    ],
    "popular": true
  },
  {
    "id": "percentage-change-calculator",
    "title": "Percentage Change Calculator",
    "description": "Calculate percentage increase, percentage decrease, and relative percentage difference between initial and final values.",
    "slug": "percentage-change-calculator",
    "category": "Mathematics",
    "subcategory": "Arithmetic",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.75 15.75V18a2.25 2.25 0 0 1-2.25 2.25h-6A2.25 2.25 0 0 1 5.25 18v-6A2.25 2.25 0 0 1 7.5 9.75h2.25m4.5 0a2.25 2.25 0 0 0-2.25-2.25h-6A2.25 2.25 0 0 0 3.75 9.75v6A2.25 2.25 0 0 0 6 18h2.25\" /></svg>",
    "keywords": [
      "percentage change",
      "percent increase",
      "percent decrease",
      "relative change",
      "percentage difference"
    ],
    "popular": true
  },
  {
    "id": "prime-factorization-calculator",
    "title": "Prime Factorization Calculator",
    "description": "Decompose any positive integer into prime factor trees, find exponential forms, and check primality.",
    "slug": "prime-factorization-calculator",
    "category": "Mathematics",
    "subcategory": "Number Theory",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.75 15.75V18a2.25 2.25 0 0 1-2.25 2.25h-6A2.25 2.25 0 0 1 5.25 18v-6A2.25 2.25 0 0 1 7.5 9.75h2.25m4.5 0a2.25 2.25 0 0 0-2.25-2.25h-6A2.25 2.25 0 0 0 3.75 9.75v6A2.25 2.25 0 0 0 6 18h2.25\" /></svg>",
    "keywords": [
      "prime factorization",
      "prime numbers",
      "factor tree",
      "prime factors",
      "composite number"
    ]
  },
  {
    "id": "lcm-gcd-calculator",
    "title": "LCM and GCD / GCF Calculator",
    "description": "Calculate the Least Common Multiple (LCM) and Greatest Common Divisor (GCD/GCF) for multiple integers.",
    "slug": "lcm-gcd-calculator",
    "category": "Mathematics",
    "subcategory": "Number Theory",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.75 15.75V18a2.25 2.25 0 0 1-2.25 2.25h-6A2.25 2.25 0 0 1 5.25 18v-6A2.25 2.25 0 0 1 7.5 9.75h2.25m4.5 0a2.25 2.25 0 0 0-2.25-2.25h-6A2.25 2.25 0 0 0 3.75 9.75v6A2.25 2.25 0 0 0 6 18h2.25\" /></svg>",
    "keywords": [
      "lcm calculator",
      "gcd calculator",
      "greatest common factor",
      "least common multiple",
      "gcf"
    ]
  },
  {
    "id": "significant-figures-calculator",
    "title": "Significant Figures Calculator",
    "description": "Count significant digits, convert to proper scientific rounding, and perform sig-fig arithmetic.",
    "slug": "significant-figures-calculator",
    "category": "Mathematics",
    "subcategory": "Arithmetic",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.75 15.75V18a2.25 2.25 0 0 1-2.25 2.25h-6A2.25 2.25 0 0 1 5.25 18v-6A2.25 2.25 0 0 1 7.5 9.75h2.25m4.5 0a2.25 2.25 0 0 0-2.25-2.25h-6A2.25 2.25 0 0 0 3.75 9.75v6A2.25 2.25 0 0 0 6 18h2.25\" /></svg>",
    "keywords": [
      "significant figures",
      "sig fig calculator",
      "sig fig counter",
      "sig fig rounding",
      "scientific precision"
    ],
    "popular": true
  },
  {
    "id": "scientific-notation-calculator",
    "title": "Scientific Notation Calculator",
    "description": "Convert numbers into standard scientific notation (a × 10^b) and perform multiplication and division.",
    "slug": "scientific-notation-calculator",
    "category": "Mathematics",
    "subcategory": "Arithmetic",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.75 15.75V18a2.25 2.25 0 0 1-2.25 2.25h-6A2.25 2.25 0 0 1 5.25 18v-6A2.25 2.25 0 0 1 7.5 9.75h2.25m4.5 0a2.25 2.25 0 0 0-2.25-2.25h-6A2.25 2.25 0 0 0 3.75 9.75v6A2.25 2.25 0 0 0 6 18h2.25\" /></svg>",
    "keywords": [
      "scientific notation",
      "standard form",
      "exponential notation",
      "powers of 10",
      "e notation"
    ]
  },
  {
    "id": "exponent-calculator",
    "title": "Exponent & Power Calculator",
    "description": "Calculate integer, fractional, negative, and decimal exponents (x^y) with radical equivalents.",
    "slug": "exponent-calculator",
    "category": "Mathematics",
    "subcategory": "Arithmetic",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.75 15.75V18a2.25 2.25 0 0 1-2.25 2.25h-6A2.25 2.25 0 0 1 5.25 18v-6A2.25 2.25 0 0 1 7.5 9.75h2.25m4.5 0a2.25 2.25 0 0 0-2.25-2.25h-6A2.25 2.25 0 0 0 3.75 9.75v6A2.25 2.25 0 0 0 6 18h2.25\" /></svg>",
    "keywords": [
      "exponent calculator",
      "power calculator",
      "fractional powers",
      "negative exponents",
      "exponential solver"
    ]
  },
  {
    "id": "logarithm-calculator",
    "title": "Logarithm Calculator (log & ln)",
    "description": "Compute common log (base 10), natural log (ln, base e), and arbitrary custom base logarithms (log_b x).",
    "slug": "logarithm-calculator",
    "category": "Mathematics",
    "subcategory": "Algebra",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.75 15.75V18a2.25 2.25 0 0 1-2.25 2.25h-6A2.25 2.25 0 0 1 5.25 18v-6A2.25 2.25 0 0 1 7.5 9.75h2.25m4.5 0a2.25 2.25 0 0 0-2.25-2.25h-6A2.25 2.25 0 0 0 3.75 9.75v6A2.25 2.25 0 0 0 6 18h2.25\" /></svg>",
    "keywords": [
      "logarithm calculator",
      "natural log ln",
      "log base 10",
      "log base 2",
      "change of base"
    ]
  },
  {
    "id": "sequence-series-calculator",
    "title": "Sequence & Series Calculator",
    "description": "Find the n-th term, common difference/ratio, and sum of arithmetic and geometric sequences.",
    "slug": "sequence-series-calculator",
    "category": "Mathematics",
    "subcategory": "Algebra",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.75 15.75V18a2.25 2.25 0 0 1-2.25 2.25h-6A2.25 2.25 0 0 1 5.25 18v-6A2.25 2.25 0 0 1 7.5 9.75h2.25m4.5 0a2.25 2.25 0 0 0-2.25-2.25h-6A2.25 2.25 0 0 0 3.75 9.75v6A2.25 2.25 0 0 0 6 18h2.25\" /></svg>",
    "keywords": [
      "arithmetic sequence",
      "geometric sequence",
      "sum of series",
      "nth term",
      "series formula"
    ]
  },
  {
    "id": "set-calculator",
    "title": "Set Theory & Venn Operations Calculator",
    "description": "Perform set union (A ∪ B), intersection (A ∩ B), relative difference (A \\ B), and symmetric difference.",
    "slug": "set-calculator",
    "category": "Mathematics",
    "subcategory": "Discrete Math",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.75 15.75V18a2.25 2.25 0 0 1-2.25 2.25h-6A2.25 2.25 0 0 1 5.25 18v-6A2.25 2.25 0 0 1 7.5 9.75h2.25m4.5 0a2.25 2.25 0 0 0-2.25-2.25h-6A2.25 2.25 0 0 0 3.75 9.75v6A2.25 2.25 0 0 0 6 18h2.25\" /></svg>",
    "keywords": [
      "set theory",
      "union and intersection",
      "venn diagram operations",
      "set difference",
      "complement of set"
    ]
  },
  {
    "id": "permutations-combinations-calculator",
    "title": "Permutations & Combinations Calculator",
    "description": "Calculate permutations (nPr) and combinations (nCr) with step-by-step factorial breakdowns.",
    "slug": "permutations-combinations-calculator",
    "category": "Mathematics",
    "subcategory": "Discrete Math",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.75 15.75V18a2.25 2.25 0 0 1-2.25 2.25h-6A2.25 2.25 0 0 1 5.25 18v-6A2.25 2.25 0 0 1 7.5 9.75h2.25m4.5 0a2.25 2.25 0 0 0-2.25-2.25h-6A2.25 2.25 0 0 0 3.75 9.75v6A2.25 2.25 0 0 0 6 18h2.25\" /></svg>",
    "keywords": [
      "npr calculator",
      "ncr calculator",
      "permutations and combinations",
      "combinatorics",
      "factorials"
    ],
    "popular": true
  },
  {
    "id": "triangle-calculator",
    "title": "Right Triangle & Pythagorean Solver",
    "description": "Solve right triangle sides, hypotenuse, and acute angles using the Pythagorean theorem and trigonometry.",
    "slug": "triangle-calculator",
    "category": "Geometry, Trigonometry & Matrices",
    "subcategory": "Geometry",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z\" /></svg>",
    "keywords": [
      "right triangle solver",
      "pythagorean theorem",
      "hypotenuse calculator",
      "sohcahtoa",
      "right angle trigonometry"
    ],
    "popular": true
  },
  {
    "id": "triangle-area-calculator",
    "title": "Triangle Area & Geometry Calculator",
    "description": "Calculate general triangle area and perimeter using Heron's formula (SSS), SAS, base & height, and AAS.",
    "slug": "triangle-area-calculator",
    "category": "Geometry, Trigonometry & Matrices",
    "subcategory": "Geometry",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z\" /></svg>",
    "keywords": [
      "triangle area",
      "herons formula",
      "sas triangle",
      "area of triangle",
      "perimeter of triangle"
    ]
  },
  {
    "id": "circle-calculator",
    "title": "Circle & Sector Calculator",
    "description": "Calculate circle radius, diameter, circumference, area, arc length, and sector area given any dimension.",
    "slug": "circle-calculator",
    "category": "Geometry, Trigonometry & Matrices",
    "subcategory": "Geometry",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z\" /></svg>",
    "keywords": [
      "circle area",
      "circumference calculator",
      "arc length",
      "sector area",
      "radius diameter"
    ]
  },
  {
    "id": "area-calculator",
    "title": "2D Polygon Area Calculator",
    "description": "Calculate area and perimeter for rectangles, parallelograms, trapezoids, rhombuses, and regular polygons.",
    "slug": "area-calculator",
    "category": "Geometry, Trigonometry & Matrices",
    "subcategory": "Geometry",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z\" /></svg>",
    "keywords": [
      "area of polygon",
      "rectangle area",
      "trapezoid area",
      "parallelogram area",
      "perimeter calculator"
    ]
  },
  {
    "id": "volume-surface-area-calculator",
    "title": "3D Volume & Surface Area Calculator",
    "description": "Calculate volume and surface area for spheres, cylinders, cones, pyramids, and rectangular prisms.",
    "slug": "volume-surface-area-calculator",
    "category": "Geometry, Trigonometry & Matrices",
    "subcategory": "Geometry",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z\" /></svg>",
    "keywords": [
      "volume calculator",
      "surface area",
      "sphere volume",
      "cylinder volume",
      "cone volume"
    ]
  },
  {
    "id": "trigonometric-calculator",
    "title": "Trigonometric & Inverse Functions Calculator",
    "description": "Evaluate sin, cos, tan, csc, sec, cot, and inverse functions (arcsin, arccos, arctan) in degrees and radians.",
    "slug": "trigonometric-calculator",
    "category": "Geometry, Trigonometry & Matrices",
    "subcategory": "Trigonometry",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z\" /></svg>",
    "keywords": [
      "trig calculator",
      "sin cos tan",
      "inverse trig",
      "arcsin arccos arctan",
      "radians to degrees"
    ],
    "popular": true
  },
  {
    "id": "unit-circle-calculator",
    "title": "Unit Circle Interactive Calculator",
    "description": "Look up exact radical coordinates (x, y), radian angles, and degree positions on the mathematical unit circle.",
    "slug": "unit-circle-calculator",
    "category": "Geometry, Trigonometry & Matrices",
    "subcategory": "Trigonometry",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z\" /></svg>",
    "keywords": [
      "unit circle",
      "unit circle angles",
      "exact trig values",
      "pi radians",
      "sin cos coordinates"
    ]
  },
  {
    "id": "vector-calculator",
    "title": "Vector Operations Calculator (2D & 3D)",
    "description": "Calculate vector magnitude, unit vectors, dot products, cross products, and angle between 2D and 3D vectors.",
    "slug": "vector-calculator",
    "category": "Geometry, Trigonometry & Matrices",
    "subcategory": "Vectors & Matrices",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z\" /></svg>",
    "keywords": [
      "vector magnitude",
      "dot product",
      "cross product",
      "unit vector",
      "3d vector calculator"
    ]
  },
  {
    "id": "matrix-calculator",
    "title": "Matrix Arithmetic Calculator",
    "description": "Perform matrix addition, subtraction, scalar multiplication, and matrix product multiplication up to 3x3.",
    "slug": "matrix-calculator",
    "category": "Geometry, Trigonometry & Matrices",
    "subcategory": "Vectors & Matrices",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z\" /></svg>",
    "keywords": [
      "matrix multiplication",
      "matrix addition",
      "matrix math",
      "matrix dot product",
      "linear algebra"
    ]
  },
  {
    "id": "matrix-inverse-calculator",
    "title": "Matrix Determinant & Inverse Calculator",
    "description": "Calculate determinants, matrix adjugates, and inverse matrices for 2x2 and 3x3 matrices with step checks.",
    "slug": "matrix-inverse-calculator",
    "category": "Geometry, Trigonometry & Matrices",
    "subcategory": "Vectors & Matrices",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z\" /></svg>",
    "keywords": [
      "matrix determinant",
      "matrix inverse",
      "invertible matrix",
      "det a",
      "adjugate matrix"
    ]
  },
  {
    "id": "rref-calculator",
    "title": "RREF & Matrix Rank Calculator",
    "description": "Transform matrices to Reduced Row Echelon Form (RREF) using Gaussian elimination and determine matrix rank.",
    "slug": "rref-calculator",
    "category": "Geometry, Trigonometry & Matrices",
    "subcategory": "Vectors & Matrices",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z\" /></svg>",
    "keywords": [
      "rref calculator",
      "reduced row echelon form",
      "gaussian elimination",
      "matrix rank",
      "row reduction"
    ]
  },
  {
    "id": "derivative-calculator",
    "title": "Derivative Calculator (1st & 2nd Order)",
    "description": "Differentiate mathematical expressions with respect to x using product, quotient, and chain rules.",
    "slug": "derivative-calculator",
    "category": "Calculus & Advanced Math",
    "subcategory": "Differential Calculus",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6\" /></svg>",
    "keywords": [
      "derivative calculator",
      "differentiation",
      "chain rule",
      "product rule",
      "second derivative",
      "calculus solver"
    ],
    "popular": true
  },
  {
    "id": "integral-calculator",
    "title": "Integral Calculator (Definite & Indefinite)",
    "description": "Evaluate definite and indefinite integrals with standard calculus integration rules and boundary limits.",
    "slug": "integral-calculator",
    "category": "Calculus & Advanced Math",
    "subcategory": "Integral Calculus",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6\" /></svg>",
    "keywords": [
      "integral calculator",
      "integration",
      "antiderivative",
      "definite integral",
      "calculus integral"
    ],
    "popular": true
  },
  {
    "id": "limit-calculator",
    "title": "Limit Calculator (One-Sided & Infinite)",
    "description": "Evaluate two-sided and one-sided limits as x approaches finite points (x → a) or infinity (x → ±∞).",
    "slug": "limit-calculator",
    "category": "Calculus & Advanced Math",
    "subcategory": "Differential Calculus",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6\" /></svg>",
    "keywords": [
      "limit calculator",
      "one sided limits",
      "limits at infinity",
      "lhopital rule",
      "calculus limits"
    ]
  },
  {
    "id": "taylor-series-calculator",
    "title": "Taylor & Maclaurin Series Calculator",
    "description": "Generate polynomial Taylor and Maclaurin power series expansions around center point x = a up to specified order.",
    "slug": "taylor-series-calculator",
    "category": "Calculus & Advanced Math",
    "subcategory": "Series & Sequences",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6\" /></svg>",
    "keywords": [
      "taylor series",
      "maclaurin series",
      "power series expansion",
      "polynomial approximation",
      "series order"
    ]
  },
  {
    "id": "partial-derivative-calculator",
    "title": "Partial Derivative Calculator (Multivariable)",
    "description": "Compute first-order and second-order partial derivatives (∂f/∂x, ∂f/∂y) and multivariable gradient vectors.",
    "slug": "partial-derivative-calculator",
    "category": "Calculus & Advanced Math",
    "subcategory": "Differential Calculus",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6\" /></svg>",
    "keywords": [
      "partial derivative",
      "multivariable calculus",
      "gradient vector",
      "second partial derivative",
      "del operator"
    ]
  },
  {
    "id": "differential-equations-calculator",
    "title": "Differential Equations First-Order Solver",
    "description": "Solve separable and first-order linear ordinary differential equations (y' + P(x)y = Q(x)) with initial values.",
    "slug": "differential-equations-calculator",
    "category": "Calculus & Advanced Math",
    "subcategory": "Differential Equations",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6\" /></svg>",
    "keywords": [
      "differential equation solver",
      "first order ode",
      "separable differential equations",
      "integrating factor"
    ]
  },
  {
    "id": "numerical-integration-calculator",
    "title": "Numerical Integration Calculator",
    "description": "Approximate definite integrals using Simpson's 1/3 Rule, the Trapezoidal Rule, and Riemann midpoint sums.",
    "slug": "numerical-integration-calculator",
    "category": "Calculus & Advanced Math",
    "subcategory": "Integral Calculus",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6\" /></svg>",
    "keywords": [
      "numerical integration",
      "simpsons rule",
      "trapezoidal rule",
      "riemann sum",
      "definite integral approximation"
    ]
  },
  {
    "id": "statistics-calculator",
    "title": "Descriptive Statistics Calculator",
    "description": "Calculate mean, median, mode, minimum, maximum, range, interquartile range (IQR), and variance for datasets.",
    "slug": "statistics-calculator",
    "category": "Statistics & Probability",
    "subcategory": "Descriptive Statistics",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z\" /></svg>",
    "keywords": [
      "statistics calculator",
      "mean median mode",
      "summary statistics",
      "interquartile range",
      "dataset analysis"
    ],
    "popular": true
  },
  {
    "id": "standard-deviation-calculator",
    "title": "Standard Deviation & Variance Calculator",
    "description": "Calculate sample standard deviation (s), population standard deviation (σ), and sample/population variance.",
    "slug": "standard-deviation-calculator",
    "category": "Statistics & Probability",
    "subcategory": "Descriptive Statistics",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z\" /></svg>",
    "keywords": [
      "standard deviation",
      "variance calculator",
      "sample standard deviation",
      "population variance",
      "spread of data"
    ],
    "popular": true
  },
  {
    "id": "z-score-calculator",
    "title": "Z-Score & Normal Distribution Calculator",
    "description": "Calculate standard normal z-scores, p-values, percentiles, and cumulative probabilities under N(0,1).",
    "slug": "z-score-calculator",
    "category": "Statistics & Probability",
    "subcategory": "Inferential Statistics",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z\" /></svg>",
    "keywords": [
      "z score calculator",
      "normal distribution",
      "standard normal curve",
      "p value",
      "bell curve"
    ],
    "popular": true
  },
  {
    "id": "confidence-interval-calculator",
    "title": "Confidence Interval Calculator",
    "description": "Compute 90%, 95%, and 99% confidence intervals for population means and survey sample proportions.",
    "slug": "confidence-interval-calculator",
    "category": "Statistics & Probability",
    "subcategory": "Inferential Statistics",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z\" /></svg>",
    "keywords": [
      "confidence interval",
      "margin of error",
      "95 confidence interval",
      "sample mean interval",
      "estimation"
    ]
  },
  {
    "id": "linear-regression-calculator",
    "title": "Linear Regression & Correlation Calculator",
    "description": "Calculate the line of best fit (y = mx + b), Pearson correlation coefficient (r), and coefficient of determination (R²).",
    "slug": "linear-regression-calculator",
    "category": "Statistics & Probability",
    "subcategory": "Regression Analysis",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z\" /></svg>",
    "keywords": [
      "linear regression",
      "correlation coefficient",
      "line of best fit",
      "r squared",
      "scatter plot regression"
    ]
  },
  {
    "id": "probability-calculator",
    "title": "Probability Calculator (Single & Compound)",
    "description": "Calculate single event probabilities, mutually exclusive events, independent events, and conditional probabilities.",
    "slug": "probability-calculator",
    "category": "Statistics & Probability",
    "subcategory": "Probability",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z\" /></svg>",
    "keywords": [
      "probability calculator",
      "odds calculator",
      "independent events",
      "compound probability",
      "conditional probability"
    ]
  },
  {
    "id": "binomial-distribution-calculator",
    "title": "Binomial Distribution Calculator",
    "description": "Calculate exact P(X = k), cumulative P(X ≤ k), expected mean, and variance for n binomial trials with success rate p.",
    "slug": "binomial-distribution-calculator",
    "category": "Statistics & Probability",
    "subcategory": "Probability Distributions",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z\" /></svg>",
    "keywords": [
      "binomial distribution",
      "binomial probability",
      "bernoulli trials",
      "cumulative binomial",
      "success probability"
    ]
  },
  {
    "id": "poisson-distribution-calculator",
    "title": "Poisson Distribution Calculator",
    "description": "Calculate exact and cumulative Poisson distribution probabilities for independent events occurring at rate λ.",
    "slug": "poisson-distribution-calculator",
    "category": "Statistics & Probability",
    "subcategory": "Probability Distributions",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z\" /></svg>",
    "keywords": [
      "poisson distribution",
      "poisson probability",
      "lambda rate",
      "event frequency probability"
    ]
  },
  {
    "id": "chi-square-calculator",
    "title": "Chi-Square Test Calculator",
    "description": "Compute Chi-Square goodness-of-fit and 2x2 contingency table independence test statistics (χ²).",
    "slug": "chi-square-calculator",
    "category": "Statistics & Probability",
    "subcategory": "Inferential Statistics",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z\" /></svg>",
    "keywords": [
      "chi square test",
      "contingency table",
      "goodness of fit",
      "chi square p value",
      "degrees of freedom"
    ]
  },
  {
    "id": "percentile-calculator",
    "title": "Percentile & Quartile Calculator",
    "description": "Calculate the k-th percentile value, deciles, and 5-number summary (Min, Q1, Median, Q3, Max) for datasets.",
    "slug": "percentile-calculator",
    "category": "Statistics & Probability",
    "subcategory": "Descriptive Statistics",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z\" /></svg>",
    "keywords": [
      "percentile calculator",
      "quartiles",
      "5 number summary",
      "interquartile range",
      "dataset rank"
    ]
  },
  {
    "id": "sample-size-calculator",
    "title": "Sample Size & Margin of Error Calculator",
    "description": "Calculate required survey sample sizes based on desired confidence level (95%, 99%) and acceptable margin of error.",
    "slug": "sample-size-calculator",
    "category": "Statistics & Probability",
    "subcategory": "Inferential Statistics",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z\" /></svg>",
    "keywords": [
      "sample size calculator",
      "margin of error",
      "survey sample",
      "confidence level",
      "population sample"
    ]
  },
  {
    "id": "kinematics-calculator",
    "title": "Kinematics & Motion Calculator (1D)",
    "description": "Solve constant acceleration 1D motion problems using kinematic equations for velocity, acceleration, time, and displacement.",
    "slug": "kinematics-calculator",
    "category": "Physics",
    "subcategory": "Mechanics",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z\" /></svg>",
    "keywords": [
      "kinematics calculator",
      "motion calculator",
      "acceleration velocity displacement",
      "physics motion",
      "suvat equations"
    ],
    "popular": true
  },
  {
    "id": "projectile-motion-calculator",
    "title": "Projectile Motion Calculator (2D)",
    "description": "Calculate launch range, maximum height, flight time, and velocity vectors for 2D projectile trajectories.",
    "slug": "projectile-motion-calculator",
    "category": "Physics",
    "subcategory": "Mechanics",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z\" /></svg>",
    "keywords": [
      "projectile motion",
      "trajectory calculator",
      "launch velocity",
      "maximum height",
      "horizontal range"
    ],
    "popular": true
  },
  {
    "id": "force-calculator",
    "title": "Newton's Second Law & Force Calculator",
    "description": "Calculate net force, object mass, and linear acceleration using Newton's Second Law (F = ma).",
    "slug": "force-calculator",
    "category": "Physics",
    "subcategory": "Mechanics",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z\" /></svg>",
    "keywords": [
      "force calculator",
      "newtons second law",
      "f ma formula",
      "mass acceleration",
      "net force"
    ]
  },
  {
    "id": "friction-calculator",
    "title": "Friction & Incline Plane Calculator",
    "description": "Calculate static and kinetic friction force (f = μN) and parallel/perpendicular force components on inclined ramps.",
    "slug": "friction-calculator",
    "category": "Physics",
    "subcategory": "Mechanics",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z\" /></svg>",
    "keywords": [
      "friction calculator",
      "coefficient of friction",
      "inclined plane",
      "normal force",
      "ramp physics"
    ]
  },
  {
    "id": "work-energy-calculator",
    "title": "Work, Kinetic & Potential Energy Calculator",
    "description": "Calculate mechanical work (W = Fd cos θ), kinetic energy (1/2 mv²), and gravitational potential energy (mgh).",
    "slug": "work-energy-calculator",
    "category": "Physics",
    "subcategory": "Mechanics",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z\" /></svg>",
    "keywords": [
      "work energy calculator",
      "kinetic energy",
      "potential energy",
      "mechanical work",
      "conservation of energy"
    ],
    "popular": true
  },
  {
    "id": "momentum-collision-calculator",
    "title": "Momentum & Collision Calculator",
    "description": "Solve conservation of linear momentum (p = mv), impulse (J = FΔt), and elastic/inelastic 1D collisions.",
    "slug": "momentum-collision-calculator",
    "category": "Physics",
    "subcategory": "Mechanics",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z\" /></svg>",
    "keywords": [
      "momentum calculator",
      "elastic collision",
      "inelastic collision",
      "impulse formula",
      "conservation of momentum"
    ]
  },
  {
    "id": "free-fall-calculator",
    "title": "Free Fall Calculator",
    "description": "Calculate impact velocity, fall duration, and distance fallen under Earth's standard gravity (g = 9.8 m/s²).",
    "slug": "free-fall-calculator",
    "category": "Physics",
    "subcategory": "Mechanics",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z\" /></svg>",
    "keywords": [
      "free fall calculator",
      "gravity drop",
      "impact velocity",
      "falling body",
      "terminal velocity"
    ]
  },
  {
    "id": "gravitational-force-calculator",
    "title": "Gravitational Force & Orbit Calculator",
    "description": "Compute universal gravitational attraction (F = G m1m2/r²) and circular orbital speeds around celestial bodies.",
    "slug": "gravitational-force-calculator",
    "category": "Physics",
    "subcategory": "Mechanics",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z\" /></svg>",
    "keywords": [
      "gravitational force",
      "newtons gravity",
      "orbital speed",
      "gravity formula",
      "planetary orbit"
    ]
  },
  {
    "id": "circular-motion-calculator",
    "title": "Centripetal Force & Circular Motion Calculator",
    "description": "Compute centripetal acceleration (a = v²/r), centripetal force (F = m v²/r), and rotational angular velocity.",
    "slug": "circular-motion-calculator",
    "category": "Physics",
    "subcategory": "Mechanics",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z\" /></svg>",
    "keywords": [
      "centripetal force",
      "centripetal acceleration",
      "circular motion",
      "angular velocity",
      "tangential speed"
    ]
  },
  {
    "id": "torque-calculator",
    "title": "Torque & Rotational Equilibrium Calculator",
    "description": "Calculate rotational torque (τ = r F sin θ), moment arms, and lever balance conditions.",
    "slug": "torque-calculator",
    "category": "Physics",
    "subcategory": "Mechanics",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z\" /></svg>",
    "keywords": [
      "torque calculator",
      "rotational equilibrium",
      "lever arm",
      "moment of force",
      "torque formula"
    ]
  },
  {
    "id": "harmonic-motion-calculator",
    "title": "Simple Harmonic Motion & Pendulum Calculator",
    "description": "Calculate oscillation period, frequency, and spring constants for simple pendulums and mass-spring oscillators.",
    "slug": "harmonic-motion-calculator",
    "category": "Physics",
    "subcategory": "Waves & Oscillations",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z\" /></svg>",
    "keywords": [
      "simple harmonic motion",
      "pendulum period",
      "spring oscillator",
      "frequency calculation",
      "shm formula"
    ]
  },
  {
    "id": "ohms-law-calculator",
    "title": "Ohm's Law & Electric Power Calculator",
    "description": "Calculate Voltage (V), Current (I), Resistance (R), and Power (P = VI = I²R = V²/R) with interactive unit options.",
    "slug": "ohms-law-calculator",
    "category": "Physics",
    "subcategory": "Electromagnetism",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z\" /></svg>",
    "keywords": [
      "ohms law",
      "voltage current resistance",
      "electric power",
      "watts amps volts",
      "circuit calculations"
    ],
    "popular": true
  },
  {
    "id": "circuit-calculator",
    "title": "Resistor & Capacitor Circuit Calculator",
    "description": "Calculate equivalent resistance and capacitance for Series and Parallel electronic circuits.",
    "slug": "circuit-calculator",
    "category": "Physics",
    "subcategory": "Electromagnetism",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z\" /></svg>",
    "keywords": [
      "series parallel circuit",
      "equivalent resistance",
      "equivalent capacitance",
      "circuit calculator",
      "resistors in series"
    ],
    "popular": true
  },
  {
    "id": "coulombs-law-calculator",
    "title": "Coulomb's Law Electrostatic Force Calculator",
    "description": "Calculate electrostatic attraction and repulsion forces between two point electric charges (F = k |q1q2|/r²).",
    "slug": "coulombs-law-calculator",
    "category": "Physics",
    "subcategory": "Electromagnetism",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z\" /></svg>",
    "keywords": [
      "coulombs law",
      "electrostatic force",
      "point charge force",
      "electric constant",
      "charge attraction"
    ]
  },
  {
    "id": "lens-mirror-calculator",
    "title": "Lens & Mirror Equation Calculator",
    "description": "Solve focal length, object distance, image distance, and magnification (1/f = 1/do + 1/di) for optics.",
    "slug": "lens-mirror-calculator",
    "category": "Physics",
    "subcategory": "Optics",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z\" /></svg>",
    "keywords": [
      "lens equation",
      "thin lens formula",
      "mirror equation",
      "focal length",
      "magnification optics"
    ]
  },
  {
    "id": "wave-speed-calculator",
    "title": "Wave Speed, Frequency & Wavelength Calculator",
    "description": "Solve the universal wave equation (v = fλ), wave period (T = 1/f), and photon energy calculations.",
    "slug": "wave-speed-calculator",
    "category": "Physics",
    "subcategory": "Waves & Oscillations",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z\" /></svg>",
    "keywords": [
      "wave speed",
      "wavelength frequency",
      "v f lambda",
      "wave period",
      "speed of wave"
    ]
  },
  {
    "id": "density-calculator",
    "title": "Density, Mass & Volume Calculator",
    "description": "Calculate physical density (ρ = m/V), total mass, and volume with metric and imperial unit conversions.",
    "slug": "density-calculator",
    "category": "Physics",
    "subcategory": "Thermodynamics & Fluids",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z\" /></svg>",
    "keywords": [
      "density calculator",
      "mass volume density",
      "specific gravity",
      "rho m v",
      "density formula"
    ],
    "popular": true
  },
  {
    "id": "pressure-buoyancy-calculator",
    "title": "Pressure & Buoyancy (Archimedes) Calculator",
    "description": "Calculate hydrostatic fluid pressure (P = ρgh) and Archimedes upward buoyant force (Fb = ρVg).",
    "slug": "pressure-buoyancy-calculator",
    "category": "Physics",
    "subcategory": "Thermodynamics & Fluids",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z\" /></svg>",
    "keywords": [
      "hydrostatic pressure",
      "buoyant force",
      "archimedes principle",
      "fluid pressure",
      "buoyancy calculator"
    ]
  },
  {
    "id": "molar-mass-calculator",
    "title": "Molar Mass & Molecular Weight Calculator",
    "description": "Parse chemical formulas (e.g. H2SO4, Ca(NO3)2) to compute exact molecular weights and elemental breakdowns.",
    "slug": "molar-mass-calculator",
    "category": "Chemistry",
    "subcategory": "Stoichiometry",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.942A4.5 4.5 0 0 1 15.918 17H8.082a4.5 4.5 0 0 1-2.312-.758L4.2 15.3\" /></svg>",
    "keywords": [
      "molar mass",
      "molecular weight",
      "formula mass",
      "grams per mole",
      "chemical formula parser"
    ],
    "popular": true
  },
  {
    "id": "moles-converter",
    "title": "Moles, Grams & Molecule Particles Converter",
    "description": "Convert between mass (grams), substance amount (moles), and molecule count using Avogadro's constant.",
    "slug": "moles-converter",
    "category": "Chemistry",
    "subcategory": "Stoichiometry",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.942A4.5 4.5 0 0 1 15.918 17H8.082a4.5 4.5 0 0 1-2.312-.758L4.2 15.3\" /></svg>",
    "keywords": [
      "moles to grams",
      "grams to moles",
      "avogadros number",
      "mole conversion",
      "particles to moles"
    ],
    "popular": true
  },
  {
    "id": "molarity-calculator",
    "title": "Solution Molarity & Dilution Calculator",
    "description": "Calculate solution molarity (M = mol/L) and solution dilution formula (M1V1 = M2V2) for laboratory chemistry.",
    "slug": "molarity-calculator",
    "category": "Chemistry",
    "subcategory": "Solutions",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.942A4.5 4.5 0 0 1 15.918 17H8.082a4.5 4.5 0 0 1-2.312-.758L4.2 15.3\" /></svg>",
    "keywords": [
      "molarity calculator",
      "solution dilution",
      "m1v1 m2v2",
      "moles per liter",
      "concentration calculator"
    ],
    "popular": true
  },
  {
    "id": "ideal-gas-law",
    "title": "Ideal Gas Law Calculator (PV = nRT)",
    "description": "Solve the Ideal Gas Law (PV = nRT) and combined gas laws (P1V1/T1 = P2V2/T2) for pressure, volume, or temperature.",
    "slug": "ideal-gas-law",
    "category": "Chemistry",
    "subcategory": "Gas Laws",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.942A4.5 4.5 0 0 1 15.918 17H8.082a4.5 4.5 0 0 1-2.312-.758L4.2 15.3\" /></svg>",
    "keywords": [
      "ideal gas law",
      "pv nrt calculator",
      "gas equation",
      "combined gas law",
      "boyles law charles law"
    ],
    "popular": true
  },
  {
    "id": "chemical-equation-balancer",
    "title": "Chemical Reaction Balancer",
    "description": "Balance chemical reaction equations automatically using linear matrix nullspace stoichiometry algorithms.",
    "slug": "chemical-equation-balancer",
    "category": "Chemistry",
    "subcategory": "Reactions",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.942A4.5 4.5 0 0 1 15.918 17H8.082a4.5 4.5 0 0 1-2.312-.758L4.2 15.3\" /></svg>",
    "keywords": [
      "balance chemical equation",
      "chemical equation balancer",
      "stoichiometric coefficients",
      "reaction balancer"
    ],
    "popular": true
  },
  {
    "id": "stoichiometry-calculator",
    "title": "Stoichiometry & Theoretical Yield Calculator",
    "description": "Identify the limiting reactant, calculate theoretical product yield in grams, and determine percentage yield.",
    "slug": "stoichiometry-calculator",
    "category": "Chemistry",
    "subcategory": "Stoichiometry",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.942A4.5 4.5 0 0 1 15.918 17H8.082a4.5 4.5 0 0 1-2.312-.758L4.2 15.3\" /></svg>",
    "keywords": [
      "stoichiometry calculator",
      "limiting reactant",
      "theoretical yield",
      "percent yield",
      "reaction stoichiometry"
    ],
    "popular": true
  },
  {
    "id": "ph-calculator",
    "title": "pH, pOH & Ion Concentration Calculator",
    "description": "Calculate pH = -log[H+], pOH = -log[OH-], and hydrogen ion concentrations for acid-base solutions.",
    "slug": "ph-calculator",
    "category": "Chemistry",
    "subcategory": "Acids & Bases",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.942A4.5 4.5 0 0 1 15.918 17H8.082a4.5 4.5 0 0 1-2.312-.758L4.2 15.3\" /></svg>",
    "keywords": [
      "ph calculator",
      "poh calculator",
      "hydrogen ion concentration",
      "acid base ph",
      "h+ to ph"
    ],
    "popular": true
  },
  {
    "id": "buffer-ph-calculator",
    "title": "Buffer pH (Henderson-Hasselbalch) Calculator",
    "description": "Calculate buffer solution pH from pKa and weak acid / conjugate base molar concentrations.",
    "slug": "buffer-ph-calculator",
    "category": "Chemistry",
    "subcategory": "Acids & Bases",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.942A4.5 4.5 0 0 1 15.918 17H8.082a4.5 4.5 0 0 1-2.312-.758L4.2 15.3\" /></svg>",
    "keywords": [
      "henderson hasselbalch",
      "buffer ph",
      "pka to ph",
      "acid buffer calculator",
      "conjugate base ratio"
    ]
  },
  {
    "id": "percent-composition-calculator",
    "title": "Percent Composition by Mass Calculator",
    "description": "Calculate elemental percentage composition by mass for chemical formulas and compound mixtures.",
    "slug": "percent-composition-calculator",
    "category": "Chemistry",
    "subcategory": "Stoichiometry",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.942A4.5 4.5 0 0 1 15.918 17H8.082a4.5 4.5 0 0 1-2.312-.758L4.2 15.3\" /></svg>",
    "keywords": [
      "percent composition",
      "mass percent",
      "elemental analysis",
      "percentage by weight",
      "composition by mass"
    ]
  },
  {
    "id": "half-life-calculator",
    "title": "Radioactive Decay & Half-Life Calculator",
    "description": "Calculate exponential radioactive decay (N(t) = N0 (1/2)^(t/t_half)), remaining mass, and elapsed half-lives.",
    "slug": "half-life-calculator",
    "category": "Chemistry",
    "subcategory": "Nuclear Chemistry",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.942A4.5 4.5 0 0 1 15.918 17H8.082a4.5 4.5 0 0 1-2.312-.758L4.2 15.3\" /></svg>",
    "keywords": [
      "half life calculator",
      "radioactive decay",
      "decay constant",
      "carbon dating",
      "exponential decay"
    ]
  },
  {
    "id": "calorimetry-calculator",
    "title": "Calorimetry & Specific Heat Calculator",
    "description": "Calculate heat energy transfer (q = mcΔT), specific heat capacity, and thermal equilibrium temperatures.",
    "slug": "calorimetry-calculator",
    "category": "Chemistry",
    "subcategory": "Thermodynamics",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.942A4.5 4.5 0 0 1 15.918 17H8.082a4.5 4.5 0 0 1-2.312-.758L4.2 15.3\" /></svg>",
    "keywords": [
      "calorimetry calculator",
      "q mc delta t",
      "specific heat capacity",
      "heat transfer",
      "thermal energy"
    ]
  },
  {
    "id": "chemical-kinetics-calculator",
    "title": "Chemical Kinetics & Rate Law Calculator",
    "description": "Calculate reaction rates, rate constants (k), and concentration decay for zero, first, and second-order reactions.",
    "slug": "chemical-kinetics-calculator",
    "category": "Chemistry",
    "subcategory": "Kinetics",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.942A4.5 4.5 0 0 1 15.918 17H8.082a4.5 4.5 0 0 1-2.312-.758L4.2 15.3\" /></svg>",
    "keywords": [
      "chemical kinetics",
      "rate law calculator",
      "first order reaction",
      "reaction rate constant",
      "integrated rate law"
    ]
  },
  {
    "id": "cell-potential-calculator",
    "title": "Electrochemical Cell Potential (Nernst) Calculator",
    "description": "Compute standard cell potential (E°cell) from reduction potentials and non-standard voltage via the Nernst equation.",
    "slug": "cell-potential-calculator",
    "category": "Chemistry",
    "subcategory": "Electrochemistry",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.942A4.5 4.5 0 0 1 15.918 17H8.082a4.5 4.5 0 0 1-2.312-.758L4.2 15.3\" /></svg>",
    "keywords": [
      "cell potential",
      "nernst equation",
      "galvanic cell voltage",
      "reduction potential",
      "electrochemical cell"
    ]
  },
  {
    "id": "empirical-formula-calculator",
    "title": "Empirical & Molecular Formula Calculator",
    "description": "Determine the simplest whole-number empirical formula and molecular formula from elemental percentage compositions.",
    "slug": "empirical-formula-calculator",
    "category": "Chemistry",
    "subcategory": "Stoichiometry",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.942A4.5 4.5 0 0 1 15.918 17H8.082a4.5 4.5 0 0 1-2.312-.758L4.2 15.3\" /></svg>",
    "keywords": [
      "empirical formula",
      "molecular formula",
      "simplest formula",
      "element percentages",
      "empirical formula solver"
    ]
  },
  {
    "id": "punnett-square",
    "title": "Punnett Square & Genetics Calculator",
    "description": "Generate monohybrid (2x2) and dihybrid (4x4) genetic crosses, genotype ratios, and phenotype percentage outcomes.",
    "slug": "punnett-square",
    "category": "Biology & Health Metrics",
    "subcategory": "Genetics",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z\" /></svg>",
    "keywords": [
      "punnett square",
      "genetics calculator",
      "monohybrid cross",
      "dihybrid cross",
      "allele cross",
      "phenotype ratio"
    ],
    "popular": true
  },
  {
    "id": "dna-sequence-analyzer",
    "title": "DNA Sequence Analyzer",
    "description": "Analyze DNA nucleotide sequences to generate reverse complements, GC content %, melting temp (Tm), and RNA translation.",
    "slug": "dna-sequence-analyzer",
    "category": "Biology & Health Metrics",
    "subcategory": "Molecular Biology",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z\" /></svg>",
    "keywords": [
      "dna analyzer",
      "reverse complement",
      "gc content",
      "dna translation",
      "melting temperature"
    ]
  },
  {
    "id": "hardy-weinberg-calculator",
    "title": "Hardy-Weinberg Equilibrium Calculator",
    "description": "Calculate population allele frequencies (p, q) and genotype frequencies (p², 2pq, q²) using Hardy-Weinberg equations.",
    "slug": "hardy-weinberg-calculator",
    "category": "Biology & Health Metrics",
    "subcategory": "Genetics",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z\" /></svg>",
    "keywords": [
      "hardy weinberg",
      "allele frequency",
      "population genetics",
      "p2 2pq q2",
      "genotype frequency"
    ]
  },
  {
    "id": "bmi-calculator",
    "title": "BMI Calculator",
    "description": "Calculate Body Mass Index (BMI) and determine healthy weight ranges using standard metric units.",
    "slug": "bmi-calculator",
    "category": "Biology & Health Metrics",
    "subcategory": "Health Metrics",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z\" /></svg>",
    "keywords": [
      "bmi calculator",
      "body mass index",
      "healthy weight",
      "body surface area",
      "bsa formula"
    ],
    "popular": true
  },
  {
    "id": "bmr-calculator",
    "title": "BMR & Daily Calorie Calculator (TDEE)",
    "description": "Calculate Basal Metabolic Rate (Mifflin-St Jeor) and Total Daily Energy Expenditure based on activity levels.",
    "slug": "bmr-calculator",
    "category": "Biology & Health Metrics",
    "subcategory": "Health Metrics",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z\" /></svg>",
    "keywords": [
      "bmr calculator",
      "tdee calculator",
      "basal metabolic rate",
      "daily calorie needs",
      "maintenance calories"
    ]
  },
  {
    "id": "target-heart-rate-calculator",
    "title": "Target Heart Rate & Training Zones Calculator",
    "description": "Calculate aerobic, anaerobic, and max heart rate training zones using the Karvonen resting heart rate formula.",
    "slug": "target-heart-rate-calculator",
    "category": "Biology & Health Metrics",
    "subcategory": "Health Metrics",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z\" /></svg>",
    "keywords": [
      "target heart rate",
      "heart rate zones",
      "karvonen formula",
      "cardio zone",
      "max heart rate"
    ]
  },
  {
    "id": "water-intake-calculator",
    "title": "Daily Water Intake Calculator",
    "description": "Estimate optimal daily hydration targets in liters and ounces based on body weight, climate, and exercise.",
    "slug": "water-intake-calculator",
    "category": "Biology & Health Metrics",
    "subcategory": "Health Metrics",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z\" /></svg>",
    "keywords": [
      "water intake calculator",
      "daily hydration",
      "water consumption",
      "liters of water per day"
    ]
  },
  {
    "id": "base-converter",
    "title": "Base Converter (Binary/Dec/Hex/Oct)",
    "description": "Convert numbers between Binary (Base 2), Octal (Base 8), Decimal (Base 10), Hexadecimal (Base 16), and custom bases.",
    "slug": "base-converter",
    "category": "Computer Science & Digital Logic",
    "subcategory": "Number Systems",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5\" /></svg>",
    "keywords": [
      "base converter",
      "binary to hex",
      "hex to decimal",
      "decimal to binary",
      "octal converter",
      "radix converter"
    ],
    "popular": true
  },
  {
    "id": "subnet-calculator",
    "title": "IPv4 Subnet & CIDR Calculator",
    "description": "Calculate network address, broadcast address, usable IP range, subnet mask, and total hosts for any IPv4 CIDR block.",
    "slug": "subnet-calculator",
    "category": "Computer Science & Digital Logic",
    "subcategory": "Networking",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5\" /></svg>",
    "keywords": [
      "subnet calculator",
      "ipv4 cidr",
      "ip range calculator",
      "subnet mask",
      "network address",
      "broadcast ip"
    ],
    "popular": true
  },
  {
    "id": "bitwise-calculator",
    "title": "Bitwise Operations & Shift Calculator",
    "description": "Perform bitwise AND, OR, XOR, NOT, NAND, NOR, and left/right bit shifts with live 32-bit binary register display.",
    "slug": "bitwise-calculator",
    "category": "Computer Science & Digital Logic",
    "subcategory": "Digital Logic",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5\" /></svg>",
    "keywords": [
      "bitwise calculator",
      "bitwise and or xor",
      "bit shift",
      "binary bitwise",
      "bitwise not"
    ]
  },
  {
    "id": "truth-table-generator",
    "title": "Truth Table Generator",
    "description": "Generate truth tables for basic boolean logic gates including AND, OR, XOR, NAND, and NOR.",
    "slug": "truth-table-generator",
    "category": "Computer Science & Digital Logic",
    "subcategory": "Digital Logic",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5\" /></svg>",
    "keywords": [
      "truth table generator",
      "boolean logic",
      "propositional logic",
      "logic gate truth table",
      "boolean algebra"
    ],
    "popular": true
  },
  {
    "id": "bandwidth-calculator",
    "title": "Data Storage & Bandwidth Calculator",
    "description": "Calculate file download and upload transfer durations across varying internet connection bandwidths and data sizes.",
    "slug": "bandwidth-calculator",
    "category": "Computer Science & Digital Logic",
    "subcategory": "Networking",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5\" /></svg>",
    "keywords": [
      "bandwidth calculator",
      "download time calculator",
      "upload speed",
      "file transfer duration",
      "data transfer rate"
    ]
  },
  {
    "id": "ascii-converter",
    "title": "ASCII, Text & Hexadecimal Converter",
    "description": "Convert text characters to ASCII decimal codes, binary 8-bit bytes, and hexadecimal strings with ASCII table lookup.",
    "slug": "ascii-converter",
    "category": "Computer Science & Digital Logic",
    "subcategory": "Number Systems",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5\" /></svg>",
    "keywords": [
      "ascii converter",
      "text to binary",
      "text to hex",
      "ascii code lookup",
      "hex to text"
    ]
  },
  {
    "id": "binary-arithmetic-calculator",
    "title": "Binary Arithmetic Calculator",
    "description": "Perform binary addition, binary subtraction, multiplication, and division with bit-by-bit carry and borrow displays.",
    "slug": "binary-arithmetic-calculator",
    "category": "Computer Science & Digital Logic",
    "subcategory": "Number Systems",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5\" /></svg>",
    "keywords": [
      "binary calculator",
      "binary addition",
      "binary subtraction",
      "binary multiplication",
      "binary division"
    ]
  },
  {
    "id": "twos-complement-calculator",
    "title": "Two's Complement & Signed Converter",
    "description": "Convert signed and unsigned integers to 8-bit, 16-bit, and 32-bit Two's Complement binary representations.",
    "slug": "twos-complement-calculator",
    "category": "Computer Science & Digital Logic",
    "subcategory": "Number Systems",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5\" /></svg>",
    "keywords": [
      "twos complement",
      "signed binary",
      "ones complement",
      "binary negative numbers",
      "8 bit twos complement"
    ]
  },
  {
    "id": "word-counter",
    "title": "Word, Character & Sentence Counter",
    "description": "Analyze text in real time to count words, characters (with/without spaces), sentences, paragraphs, and reading level.",
    "slug": "word-counter",
    "category": "Study Productivity & Writing",
    "subcategory": "Writing Utilities",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10\" /></svg>",
    "keywords": [
      "word counter",
      "character count",
      "sentence count",
      "paragraph counter",
      "essay word counter"
    ],
    "popular": true
  },
  {
    "id": "reading-time-calculator",
    "title": "Reading & Speaking Time Calculator",
    "description": "Estimate silent reading time and spoken presentation duration for essays, speeches, and lecture presentations.",
    "slug": "reading-time-calculator",
    "category": "Study Productivity & Writing",
    "subcategory": "Writing Utilities",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10\" /></svg>",
    "keywords": [
      "reading time calculator",
      "speaking time",
      "speech duration",
      "words per minute",
      "presentation time"
    ]
  },
  {
    "id": "words-to-pages-calculator",
    "title": "Words to Pages Converter",
    "description": "Convert word counts to estimated academic paper page counts for single, 1.5, and double line spacing in standard fonts.",
    "slug": "words-to-pages-calculator",
    "category": "Study Productivity & Writing",
    "subcategory": "Writing Utilities",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10\" /></svg>",
    "keywords": [
      "words to pages",
      "pages calculator",
      "essay page count",
      "double spaced pages",
      "word count to pages"
    ]
  },
  {
    "id": "case-converter",
    "title": "Text Case Converter",
    "description": "Convert text instantly between UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, and kebab-case.",
    "slug": "case-converter",
    "category": "Study Productivity & Writing",
    "subcategory": "Writing Utilities",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10\" /></svg>",
    "keywords": [
      "case converter",
      "uppercase to lowercase",
      "title case converter",
      "camelcase converter",
      "text capitalization"
    ]
  },
  {
    "id": "pomodoro-timer",
    "title": "Pomodoro Study Timer & Tracker",
    "description": "Minimalist 25/5 study interval timer with customizable work/break periods and audio bell chime notifications.",
    "slug": "pomodoro-timer",
    "category": "Study Productivity & Writing",
    "subcategory": "Productivity",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10\" /></svg>",
    "keywords": [
      "pomodoro timer",
      "study timer",
      "focus timer",
      "productivity interval",
      "25 minute timer"
    ],
    "popular": true
  },
  {
    "id": "date-difference-calculator",
    "title": "Exam Countdown & Date Difference Calculator",
    "description": "Calculate exact days, weeks, and hours between dates, count business days, or set an exam study countdown.",
    "slug": "date-difference-calculator",
    "category": "Study Productivity & Writing",
    "subcategory": "Productivity",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10\" /></svg>",
    "keywords": [
      "date difference",
      "days between dates",
      "exam countdown",
      "days until exam",
      "calendar difference"
    ]
  },
  {
    "id": "random-number-generator",
    "title": "Random Number & Team Generator",
    "description": "Generate cryptographically random numbers within a range, roll custom dice, and shuffle students into random project teams.",
    "slug": "random-number-generator",
    "category": "Study Productivity & Writing",
    "subcategory": "Productivity",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10\" /></svg>",
    "keywords": [
      "random number generator",
      "random team picker",
      "dice roller",
      "random student group",
      "rng picker"
    ]
  },
  {
    "id": "length-converter",
    "title": "Length & Distance Converter",
    "description": "Convert between meters, centimeters, millimeters, kilometers, inches, feet, yards, and miles with high precision.",
    "slug": "length-converter",
    "category": "Universal Measurement Converters",
    "subcategory": "Measurement",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5\" /></svg>",
    "keywords": [
      "length converter",
      "meters to feet",
      "inches to cm",
      "kilometers to miles",
      "distance unit conversion"
    ]
  },
  {
    "id": "weight-converter",
    "title": "Weight & Mass Converter",
    "description": "Convert between kilograms, grams, milligrams, pounds (lb), ounces (oz), and metric tons.",
    "slug": "weight-converter",
    "category": "Universal Measurement Converters",
    "subcategory": "Measurement",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5\" /></svg>",
    "keywords": [
      "weight converter",
      "kg to lbs",
      "grams to ounces",
      "pounds to kilograms",
      "mass converter"
    ]
  },
  {
    "id": "temperature-converter",
    "title": "Temperature Converter",
    "description": "Convert instantly between Celsius (°C), Fahrenheit (°F), and Kelvin (K) with dynamic formula explanations.",
    "slug": "temperature-converter",
    "category": "Universal Measurement Converters",
    "subcategory": "Measurement",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5\" /></svg>",
    "keywords": [
      "temperature converter",
      "celsius to fahrenheit",
      "fahrenheit to celsius",
      "kelvin converter",
      "temperature scale"
    ]
  },
  {
    "id": "time-converter",
    "title": "Time & Duration Converter",
    "description": "Convert between milliseconds, seconds, minutes, hours, days, weeks, months, and years.",
    "slug": "time-converter",
    "category": "Universal Measurement Converters",
    "subcategory": "Measurement",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5\" /></svg>",
    "keywords": [
      "time converter",
      "seconds to minutes",
      "hours to days",
      "time unit conversion",
      "milliseconds to seconds"
    ]
  },
  {
    "id": "speed-converter",
    "title": "Speed & Velocity Converter",
    "description": "Convert between kilometers per hour (km/h), miles per hour (mph), meters per second (m/s), knots, and ft/s.",
    "slug": "speed-converter",
    "category": "Universal Measurement Converters",
    "subcategory": "Measurement",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5\" /></svg>",
    "keywords": [
      "speed converter",
      "kmh to mph",
      "mps to kmh",
      "knots converter",
      "velocity conversion"
    ]
  },
  {
    "id": "area-converter",
    "title": "Area Measurement Converter",
    "description": "Convert between square meters, square feet, square kilometers, square miles, acres, and hectares.",
    "slug": "area-converter",
    "category": "Universal Measurement Converters",
    "subcategory": "Measurement",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5\" /></svg>",
    "keywords": [
      "area converter",
      "sq meters to sq feet",
      "acres to hectares",
      "square feet to acres",
      "land area conversion"
    ]
  },
  {
    "id": "volume-converter",
    "title": "Volume & Fluid Capacity Converter",
    "description": "Convert between liters, milliliters, cubic meters, US gallons, UK gallons, quarts, pints, and fluid ounces.",
    "slug": "volume-converter",
    "category": "Universal Measurement Converters",
    "subcategory": "Measurement",
    "icon": "<svg fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5\" /></svg>",
    "keywords": [
      "volume converter",
      "liters to gallons",
      "ml to fl oz",
      "cubic meters to liters",
      "fluid capacity conversion"
    ]
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

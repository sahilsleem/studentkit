
export interface ToolContent {
  whatIsIt: string;
  howToUse: string;
  formula?: string;
  variables?: Record<string, string>;
  example?: string;
  whenToUse?: string;
  faq?: { q: string; a: string }[];
}

export const toolContent: Record<string, ToolContent> = {
  "gpa-calculator": {
    whatIsIt: "The GPA (Grade Point Average) Calculator helps students determine their academic standing based on grades and credit hours. It uses the standard 4.0 scale commonly found in US and international high schools and universities.",
    howToUse: "Enter the name of your course, the credits it's worth, and the grade you received. Add as many courses as you need. The calculator will automatically weight the grades against the credits to produce your final GPA.",
    formula: "GPA = Total Grade Points / Total Credit Hours",
    variables: {
      "Total Grade Points": "The sum of (Credit Hours × Grade Value) for all classes.",
      "Total Credit Hours": "The sum of all credits attempted."
    },
    example: "If you take a 3-credit class and get an A (4.0), and a 4-credit class and get a B (3.0): Total Points = (3×4) + (4×3) = 24. Total Credits = 7. GPA = 24 / 7 = 3.42.",
    whenToUse: "Use this at the end of a semester to project your transcript, or mid-semester to set target goals for your finals.",
    faq: [
      { q: "What is a good GPA?", a: "This depends entirely on your institution. Generally, a 3.0 (B average) or higher is considered good for undergraduate admissions, while top-tier universities often look for 3.7+." },
      { q: "Are honors or AP classes weighted?", a: "This calculator calculates unweighted GPA. For weighted GPA, an A in an AP class is typically worth 5.0 points instead of 4.0." }
    ]
  },
  "cgpa-to-percentage": {
    whatIsIt: "A utility to convert Cumulative Grade Point Average (CGPA) on a 10-point scale into a standard percentage, widely used by Indian universities (like CBSE, AICTE, and VTU).",
    howToUse: "Simply enter your 10-point scale CGPA. The calculator will apply the standard 9.5 multiplier rule.",
    formula: "Percentage = CGPA × 9.5",
    example: "If your CGPA is 8.2: Percentage = 8.2 × 9.5 = 77.9%.",
    whenToUse: "When filling out job applications or university forms that strictly require your academic performance in percentage format rather than CGPA."
  },
  "attendance-calculator": {
    whatIsIt: "The Attendance Calculator determines your current attendance percentage and tells you exactly how many more classes you need to attend (or can afford to miss) to maintain your college's minimum threshold.",
    howToUse: "Enter the total number of classes held so far, and the number of classes you have attended. Set your target attendance (e.g., 75%).",
    formula: "(Classes Attended / Total Classes Held) × 100",
    example: "If 40 classes have happened and you attended 32, your attendance is (32/40)×100 = 80%.",
    whenToUse: "Crucial at the end of the semester to ensure you avoid academic penalties or debarment from final exams.",
    faq: [
      { q: "Why is 75% the standard?", a: "Many universities globally enforce a 75% or 80% minimum attendance rule to ensure students participate adequately in continuous learning." }
    ]
  },
  "standard-deviation": {
    whatIsIt: "Standard Deviation measures the amount of variation or dispersion in a set of values. A low standard deviation means values are clustered near the mean, while a high standard deviation indicates values are spread out over a wider range.",
    howToUse: "Enter your dataset as comma-separated numbers (e.g., 12, 14, 15, 18). Choose whether this data represents an entire population or just a sample.",
    formula: "σ = √[ Σ(x - μ)² / N ] (Population)\ns = √[ Σ(x - x̄)² / (n - 1) ] (Sample)",
    variables: {
      "Σ": "Sum of...",
      "x": "Each value in the dataset",
      "μ or x̄": "The mean (average) of the values",
      "N or n": "The number of values"
    },
    example: "For the sample dataset [2, 4, 4, 4, 5, 5, 7, 9]: The mean is 5. The sample standard deviation is 2.138.",
    whenToUse: "Extensively used in statistics, finance to measure risk, and science to calculate experimental error margins."
  },
  "quadratic-equation": {
    whatIsIt: "A tool to find the roots (x-intercepts) of a quadratic equation in the form ax² + bx + c = 0.",
    howToUse: "Enter the coefficients a, b, and c. The calculator will return the roots (which may be real or complex numbers).",
    formula: "x = [-b ± √(b² - 4ac)] / 2a",
    variables: {
      "a": "Coefficient of x² (must not be 0)",
      "b": "Coefficient of x",
      "c": "Constant term",
      "Δ (Discriminant)": "b² - 4ac, determines the nature of the roots"
    },
    example: "For x² - 5x + 6 = 0: a=1, b=-5, c=6. The discriminant is 25 - 24 = 1. The roots are (5 ± 1)/2, which gives x=3 and x=2.",
    whenToUse: "Used in algebra, physics (projectile motion), and optimization problems."
  },
  "ideal-gas-law": {
    whatIsIt: "The Ideal Gas Law describes the behavior of a hypothetical ideal gas under various conditions of temperature, volume, and pressure.",
    howToUse: "Enter three of the four variables (Pressure, Volume, Amount in moles, Temperature). The calculator will solve for the missing fourth variable.",
    formula: "PV = nRT",
    variables: {
      "P": "Absolute pressure",
      "V": "Volume",
      "n": "Amount of substance in moles",
      "R": "Ideal gas constant (approx 8.314 J/(mol·K) or 0.08206 L·atm/(mol·K))",
      "T": "Absolute temperature in Kelvin"
    },
    example: "To find the volume of 1 mole of gas at 1 atm and 273.15 K: V = (1 * 0.08206 * 273.15) / 1 ≈ 22.4 Liters.",
    commonMistakes: "The most common mistake is forgetting to convert Celsius to Kelvin before calculating. Temperature MUST always be in Kelvin.",
    whenToUse: "Fundamental in thermodynamics, stoichiometry of gases, and general chemistry."
  },
  "punnett-square": {
    whatIsIt: "A Punnett Square is a graphical tool used in genetics to predict the probability of an offspring having a particular genotype based on the alleles of the parents.",
    howToUse: "Enter the genotype of Parent 1 (e.g., Aa) and Parent 2 (e.g., Aa). The calculator will generate the grid and calculate the genotypic and phenotypic ratios.",
    example: "Crossing two heterozygous parents (Aa × Aa) yields 25% AA, 50% Aa, and 25% aa. If A is dominant, the phenotypic ratio is 75% dominant to 25% recessive.",
    whenToUse: "Used in introductory biology, genetic counseling predictions, and evolutionary biology.",
    faq: [
      { q: "What is the difference between Genotype and Phenotype?", a: "Genotype refers to the actual genetic makeup (the letters, like Aa). Phenotype refers to the physical expression of that trait (like Brown eyes)." }
    ]
  },
  "percentage-calculator": {
    whatIsIt: "A comprehensive utility to solve the three most common percentage problems: finding X% of Y, finding what % X is of Y, and finding the whole if X is Y%.",
    howToUse: "Select your desired operation from the dropdown, enter the two known values, and the tool will instantly output the missing percentage or value.",
    formula: "Percentage = (Part / Whole) × 100",
    whenToUse: "Useful for calculating discounts, tax, tip amounts, grading, and statistical proportions in daily life."
  },
  "percentage-change": {
    whatIsIt: "Calculates the percentage increase or decrease between two numbers. It clearly indicates whether the change is positive (growth) or negative (decay).",
    formula: "Percentage Change = [(New Value - Old Value) / |Old Value|] × 100",
    example: "If a shirt's price drops from $40 to $30: [(30 - 40) / 40] × 100 = -25% (a 25% decrease).",
    whenToUse: "Used extensively in finance (profit/loss margins), physics (percent error), and economics (inflation rates)."
  },
  "molar-mass": {
    whatIsIt: "The Molar Mass Calculator computes the mass of one mole of a given chemical substance by parsing its molecular formula.",
    howToUse: "Enter a valid chemical formula (e.g., H2O, C6H12O6, or complex nested formulas like Ca(OH)2). The parser automatically maps the elements against standard periodic table weights.",
    formula: "Molar Mass = Σ (Atomic Weight of Element × Number of Atoms)",
    example: "For Water (H2O): Hydrogen is ~1.008 g/mol, Oxygen is ~16.00 g/mol. Molar Mass = (1.008 × 2) + 16.00 = 18.015 g/mol.",
    whenToUse: "Crucial for converting between moles and grams in chemistry stoichiometry problems."
  },
  "base-conversion-calculator": {
    whatIsIt: "A computer science tool that translates numbers between binary (base-2), octal (base-8), decimal (base-10), and hexadecimal (base-16) systems.",
    howToUse: "Select your starting base, input your number, and choose the target base. The tool handles infinitely large integer strings.",
    example: "Converting the decimal number 255 to hexadecimal yields FF. Converting to binary yields 11111111.",
    whenToUse: "Used by software engineers, networking students parsing IP addresses/subnet masks, and hardware designers."
  }
,

  "fraction-calculator": {
    whatIsIt: "A tool designed to instantly add, subtract, multiply, and divide fractions. It automatically simplifies the result and provides the decimal equivalent.",
    howToUse: "Enter your first fraction (numerator on top, denominator on bottom), select an operator (+, -, ×, ÷), and enter your second fraction.",
    example: "To add 1/2 and 1/3: 1/2 + 1/3 = (3/6) + (2/6) = 5/6.",
    whenToUse: "Ideal for checking math homework, scaling recipes, or working with structural measurements."
  },
  "scientific-calculator": {
    whatIsIt: "A comprehensive digital scientific calculator that handles advanced math functions beyond basic arithmetic, including trigonometry, logarithms, and exponentiation.",
    howToUse: "You can click the UI buttons or type directly from your keyboard. Supports parentheses for grouping complex operations.",
    example: "Type 'sin(30)' to evaluate the sine of 30 degrees, or 'log(100)' for base-10 logarithms.",
    faq: [{ q: "Does this use Degrees or Radians?", a: "By default, standard scientific inputs assume Degrees for trig functions unless specified otherwise." }]
  },
  "average-calculator": {
    whatIsIt: "Calculates the arithmetic mean of a dataset, representing the central value of a set of numbers.",
    howToUse: "Enter a list of numbers separated by commas. The tool ignores any spaces or non-numeric characters.",
    formula: "Average = (Sum of all numbers) / (Count of numbers)",
    example: "For the numbers 10, 20, and 30: (10 + 20 + 30) / 3 = 20."
  },
  "variance-calculator": {
    whatIsIt: "Computes how far a set of numbers is spread out from their average value. It is the square of the standard deviation.",
    formula: "Population Variance (σ²) = Σ(x - μ)² / N\nSample Variance (s²) = Σ(x - x̄)² / (n - 1)",
    whenToUse: "Used in finance to assess risk and volatility, or in biology to measure genetic drift."
  },
  "normal-distribution-calculator": {
    whatIsIt: "Calculates the probability density and cumulative probability for a normal (Gaussian) distribution, the most common continuous probability curve (the bell curve).",
    howToUse: "Input the Mean (μ) and Standard Deviation (σ). Enter an X-value or Z-score to find the exact probability at that point.",
    whenToUse: "Used in psychology (IQ tests), manufacturing (quality control), and stock market returns."
  },
  "force-calculator": {
    whatIsIt: "A physics utility to calculate the force exerted on an object based on Newton's Second Law of Motion.",
    formula: "F = m × a",
    variables: {
      "F": "Force (measured in Newtons)",
      "m": "Mass of the object (in kg)",
      "a": "Acceleration (in m/s²)"
    },
    example: "If a 1000 kg car accelerates at 3 m/s²: Force = 1000 × 3 = 3000 Newtons.",
    whenToUse: "Essential for introductory physics students learning classical mechanics."
  },
  "kinetic-energy": {
    whatIsIt: "Calculates the energy that an object possesses due to its motion.",
    formula: "KE = ½mv²",
    example: "For a 2 kg ball traveling at 3 m/s: KE = 0.5 × 2 × (3)² = 9 Joules."
  },
  "potential-energy": {
    whatIsIt: "Calculates the gravitational potential energy of an object based on its height relative to a zero point.",
    formula: "PE = mgh",
    variables: {
      "m": "Mass (kg)",
      "g": "Acceleration due to gravity (~9.8 m/s² on Earth)",
      "h": "Height (meters)"
    },
    whenToUse: "Used to model roller coasters, falling objects, and hydro-electric dams."
  },
  "ohms-law-voltage": {
    whatIsIt: "Calculates the voltage in a circuit using Ohm's Law, the foundational equation of electrical engineering.",
    formula: "V = I × R",
    variables: {
      "V": "Voltage (Volts)",
      "I": "Current (Amperes)",
      "R": "Resistance (Ohms)"
    },
    example: "If a circuit has a 2-amp current running through a 50-ohm resistor: Voltage = 2 × 50 = 100 Volts."
  },
  "momentum-calculator": {
    whatIsIt: "Determines the linear momentum of a moving object.",
    formula: "p = mv",
    whenToUse: "Used heavily in collision calculations and conservation of momentum problems."
  },
  "projectile-motion": {
    whatIsIt: "Calculates the trajectory parameters of an object thrown or projected into the air, subject to only the acceleration of gravity.",
    howToUse: "Enter the initial velocity and launch angle. It will compute max height, time of flight, and horizontal range.",
    whenToUse: "Crucial for sports physics (baseballs, golf balls) and introductory mechanics."
  },
  "molarity-calculator": {
    whatIsIt: "Computes the molar concentration of a solute in a solution.",
    formula: "M = n / V",
    variables: {
      "M": "Molarity (mol/L)",
      "n": "Moles of solute",
      "V": "Volume of solution in liters"
    },
    whenToUse: "Used in wet-lab chemistry to prepare solutions of specific concentrations."
  },
  "dilution-calculator": {
    whatIsIt: "Helps you determine the volume of a stock solution needed to create a diluted solution of a specific concentration.",
    formula: "C₁V₁ = C₂V₂",
    example: "To make 500mL of a 1M solution from a 5M stock: (5)V₁ = (1)(500) => V₁ = 100mL of stock (plus 400mL of water)."
  },
  "ph-calculator": {
    whatIsIt: "Determines the acidity or alkalinity of an aqueous solution based on hydrogen ion concentration.",
    formula: "pH = -log₁₀[H⁺]",
    whenToUse: "Used for acid-base titrations and environmental water testing."
  },
  "periodic-table": {
    whatIsIt: "An interactive digital periodic table of elements providing atomic weights, electron configurations, and categorizations.",
    howToUse: "Click on any element to view its expanded atomic properties.",
    whenToUse: "The ultimate reference guide for any chemistry homework or balancing equations."
  },
  "bmi-calculator": {
    whatIsIt: "Body Mass Index (BMI) is a simple medical screening tool to classify tissue mass (muscle, fat, and bone) and determine if an individual has a healthy body weight.",
    formula: "BMI = mass(kg) / height(m)²",
    faq: [{ q: "Is BMI perfectly accurate?", a: "No. BMI does not distinguish between muscle and fat, meaning athletes often classify as 'overweight' erroneously." }]
  },
  "unit-converter": {
    whatIsIt: "An all-in-one dimensional analysis tool to convert between standard imperial and metric units.",
    howToUse: "Select the category (Length, Mass, Temp, etc.), input your value, and choose the output unit. It handles the scaling internally."
  },
  "date-difference": {
    whatIsIt: "Calculates the exact chronological difference between two calendar dates, accounting for leap years and varying month lengths.",
    howToUse: "Pick a start date and an end date.",
    whenToUse: "Used to determine exact age, contract lengths, or days until a major event."
  }

,

  "percentage-to-cgpa": {
    whatIsIt: "The inverse of the CGPA-to-Percentage calculator. Converts a standard 100-point percentage scale back into a 10-point scale CGPA.",
    formula: "CGPA = Percentage / 9.5",
    whenToUse: "Used when standardizing international transcripts or applying to universities that mandate a 10-point metric."
  },
  "required-marks": {
    whatIsIt: "A target planner that calculates exactly what score you need on your final exam to achieve a specific overall class grade.",
    howToUse: "Enter your current grade, the weight of the final exam (as a percentage), and your target grade. It solves algebraically for the required exam score.",
    formula: "Required = [Target - (Current × (1 - Weight))] / Weight",
    example: "If you have an 85%, want a 90%, and the final is worth 20% (0.2): Required = [90 - (85 × 0.8)] / 0.2 = [90 - 68] / 0.2 = 110%. (Meaning it's mathematically impossible without extra credit!)"
  },
  "classes-to-miss": {
    whatIsIt: "A reverse attendance calculator that tells you exactly how many upcoming classes you can skip without falling below your university's minimum attendance threshold.",
    whenToUse: "Useful when planning for sick days, emergencies, or strategic study breaks near final exams without risking debarment."
  },
  "probability-calculator": {
    whatIsIt: "Calculates the mathematical likelihood of single or multiple events occurring, including mutually exclusive and independent events.",
    formula: "P(A) = Favorable Outcomes / Total Possible Outcomes",
    example: "The probability of rolling a 4 on a standard 6-sided die is 1/6 (approx 16.67%)."
  },
  "chemical-equation-balancer": {
    whatIsIt: "An algorithmic tool that solves stoichiometry problems by balancing the reactants and products of a chemical equation to satisfy the Law of Conservation of Mass.",
    howToUse: "Type an unbalanced equation like 'H2 + O2 = H2O'. The calculator assigns algebraic variables to coefficients, building a matrix to solve for integer values.",
    example: "Input: H2 + O2 = H2O. Output: 2H2 + O2 = 2H2O."
  },
  "bmr-calculator": {
    whatIsIt: "Basal Metabolic Rate (BMR) estimates the minimum number of calories your body requires to function at rest (breathing, circulating blood, cellular growth).",
    formula: "Mifflin-St Jeor Equation: BMR = (10 × weight) + (6.25 × height) - (5 × age) + (s)",
    variables: {
      "s": "+5 for males, -161 for females"
    },
    faq: [{ q: "How is this different from TDEE?", a: "BMR is your baseline. TDEE (Total Daily Energy Expenditure) multiplies your BMR by your physical activity level." }]
  },
  "population-growth": {
    whatIsIt: "Models the exponential or logistic growth of a population over time. Used in biology and ecology to estimate bacterial colony sizes or human demographics.",
    formula: "P(t) = P₀ × e^(rt)",
    variables: {
      "P₀": "Initial population",
      "r": "Growth rate (as a decimal)",
      "t": "Time elapsed"
    },
    whenToUse: "Used in microbiology (predicting cell cultures) and macro-ecology (predator-prey boundaries)."
  },
  "work-calculator": {
    whatIsIt: "Calculates the energy transferred to or from an object via the application of force along a displacement.",
    formula: "W = F × d × cos(θ)",
    example: "Pushing a block with 50N of force over 2 meters on a flat surface (0 degrees): W = 50 × 2 × 1 = 100 Joules."
  },
  "density-calculator": {
    whatIsIt: "Determines the mass per unit volume of a substance, indicating how tightly matter is packed together.",
    formula: "ρ = m / V",
    whenToUse: "Essential in fluid mechanics, geology (identifying minerals), and engineering."
  },
  "electrical-power": {
    whatIsIt: "Calculates the rate of electrical energy transfer by an electric circuit.",
    formula: "P = I × V (or P = I²R, P = V²/R)",
    variables: {
      "P": "Power (Watts)",
      "I": "Current (Amps)",
      "V": "Voltage (Volts)"
    }
  },
  "mean-median-mode": {
    whatIsIt: "A descriptive statistics dashboard that finds the three primary measures of central tendency for any dataset.",
    howToUse: "Input a comma-separated list of values. The mean is the mathematical average, the median is the exact middle value, and the mode is the most frequently occurring value."
  }

};

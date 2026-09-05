
export interface ToolContent {
  whatIsIt: string;
  howToUse?: string;
  formula?: string;
  variables?: Record<string, string>;
  example?: string;
  whenToUse?: string;
  commonMistakes?: string;
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
    whatIsIt: "The inverse of the CGP*to-Percentage calculator. Converts a standard 100-point percentage scale back into a 10-point scale CGPA.",
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
    howToUse: "Input a comma-separated list of values. The mean is the mathematical average, the median is the exact middle value, and the mode is the most frequently occurring value.",
    faq: [
      { q: "What if there is no mode?", a: "If all values appear exactly once, the dataset has no mode. Some datasets can also have multiple modes." },
      { q: "When should I use median instead of mean?", a: "Median is more robust when the dataset contains extreme outliers (e.g., income distributions where a few billionaires skew the average)." }
    ]
  },

  "marks-calculator": {
    whatIsIt: "Calculates your overall percentage or total marks from individual subject scores. Useful for seeing your academic performance across all subjects in one place.",
    howToUse: "Enter each subject name, the maximum marks, and your obtained marks. The tool sums both columns and calculates your overall percentage.",
    formula: "Overall Percentage = (Total Obtained / Total Maximum) × 100",
    example: "If you score 80/100 in Math, 75/100 in English, 90/100 in Science: Total = 245/300 = 81.67%.",
    whenToUse: "After getting your exam results, to quickly see your overall performance at a glance.",
    faq: [
      { q: "Is this different from a GPA calculator?", a: "Yes. This gives a raw percentage from marks. GPA calculators convert letter grades to a 4.0 scale using credit-weighted averaging." }
    ]
  },

  "required-attendance": {
    whatIsIt: "Calculates the minimum number of future classes you must attend to reach your target attendance percentage, given your current attendance record.",
    howToUse: "Enter total classes held, classes attended, and your target attendance percentage (e.g. 75%). It solves for how many of the remaining classes you must attend.",
    formula: "Classes needed = (Target% × Total – Attended) / (1 – Target%)",
    whenToUse: "Especially critical near the end of semester when attendance shortfalls can bar you from final exams.",
    faq: [
      { q: "My required attendance is higher than the remaining classes — what does that mean?", a: "It means the target is mathematically unachievable. You should speak with your professor or institution about your options." }
    ]
  },

  "velocity-calculator": {
    whatIsIt: "Calculates the velocity of an object — the rate of change of its position with direction. Unlike speed, velocity is a vector quantity.",
    formula: "v = Δx / Δt",
    variables: {
      "v": "Velocity (m/s)",
      "Δx": "Displacement (meters)",
      "Δt": "Time interval (seconds)"
    },
    example: "If an object moves 50 meters east in 5 seconds, its velocity is 50/5 = 10 m/s east.",
    whenToUse: "Used in kinematics problems, physics experiments, and engineering motion planning."
  },

  "acceleration-calculator": {
    whatIsIt: "Computes acceleration — the rate of change of velocity over time. Acceleration can be positive (speeding up) or negative (decelerating).",
    formula: "a = (v_f - v_i) / t",
    variables: {
      "a": "Acceleration (m/s²)",
      "v_f": "Final velocity",
      "v_i": "Initial velocity",
      "t": "Time elapsed"
    },
    example: "A car going from 0 to 60 km/h (16.67 m/s) in 8 seconds: a = 16.67 / 8 ≈ 2.08 m/s²."
  },

  "pressure-calculator": {
    whatIsIt: "Determines the force exerted per unit area on a surface.",
    formula: "P = F / A",
    variables: {
      "P": "Pressure (Pascals)",
      "F": "Force applied (Newtons)",
      "A": "Surface area (m²)"
    },
    example: "A 1000 N force on a 2 m² platform: P = 1000 / 2 = 500 Pa.",
    whenToUse: "Used in fluid mechanics, hydraulics, atmospheric science, and structural engineering."
  },

  "molarity-from-grams": {
    whatIsIt: "Calculates the molarity of a solution when you know the mass (in grams) of the solute rather than moles.",
    formula: "M = (mass / molar_mass) / volume_in_liters",
    example: "Dissolving 58.44 g of NaCl (molar mass ≈ 58.44 g/mol) in 1 L of water gives a 1 M NaCl solution.",
    whenToUse: "Essential in laboratory chemistry when weighing out solids to prepare solutions of specific concentrations."
  },

  "stoichiometry-calculator": {
    whatIsIt: "Uses balanced chemical equations to calculate the mass or moles of reactants consumed or products formed in a chemical reaction.",
    howToUse: "Enter a balanced equation, specify which compound you are starting with (and its amount), then select which product or reactant quantity you want to find.",
    example: "In 2H₂ + O₂ → 2H₂O: if you start with 4 moles of H₂, you need 2 moles of O₂ and produce 4 moles of H₂O.",
    whenToUse: "Core skill in every chemistry course for solving 'how much product will I get?' problems."
  },

  "limiting-reagent": {
    whatIsIt: "Identifies which reactant in a chemical reaction runs out first, thereby limiting how much product can be formed.",
    example: "For N₂ + 3H₂ → 2NH₃: if you have 10 mol N₂ and 24 mol H₂, the H₂ is limiting (it runs out after producing 16 mol NH₃ instead of the theoretical 20).",
    faq: [
      { q: "What is the excess reactant?", a: "The excess reactant is the one that is not fully consumed. Some of it remains unused after the reaction completes." }
    ]
  },

  "percent-yield": {
    whatIsIt: "Measures the efficiency of a chemical reaction by comparing how much product was actually produced versus the theoretical maximum.",
    formula: "% Yield = (Actual Yield / Theoretical Yield) × 100",
    example: "If the theoretical yield is 50 g but you only collect 42 g of product: % Yield = (42/50) × 100 = 84%.",
    whenToUse: "Used in organic synthesis, industrial chemistry, and any lab experiment to assess experimental efficiency."
  },

  "linear-regression-calculator": {
    whatIsIt: "Fits a straight line (y = mx + b) through a set of data points to model the linear relationship between two variables.",
    formula: "ŷ = b₀ + b₁x",
    variables: {
      "b₀": "y-intercept — the predicted value of y when x = 0",
      "b₁": "Slope — how much y changes for a 1-unit increase in x"
    },
    whenToUse: "Used in statistics, economics (predicting sales), biology (growth studies), and machine learning baselines.",
    faq: [
      { q: "What does R² mean?", a: "R² (coefficient of determination) measures how well the regression line fits the data. Values closer to 1 indicate a stronger fit." }
    ]
  },

  "correlation-coefficient": {
    whatIsIt: "Calculates Pearson's correlation coefficient (r), which measures the strength and direction of the linear relationship between two variables.",
    formula: "r = Σ[(xᵢ - x̄)(yᵢ - ȳ)] / √[Σ(xᵢ - x̄)² × Σ(yᵢ - ȳ)²]",
    whenToUse: "Used in research, data science, and statistics to determine whether two variables tend to move together.",
    faq: [
      { q: "What values can r take?", a: "r ranges from -1 (perfect negative correlation) to +1 (perfect positive correlation). r = 0 means no linear relationship." },
      { q: "Does correlation imply causation?", a: "No. A high r only indicates a statistical association, not a causal link between the variables." }
    ]
  },

  "poisson-distribution-calculator": {
    whatIsIt: "Calculates probabilities for the Poisson distribution, which models the probability of a given number of events occurring in a fixed time interval when events happen independently at a constant average rate.",
    formula: "P(k) = (λᵏ × e⁻ᵟ) / k!",
    variables: {
      "λ": "Average rate of events per interval",
      "k": "Actual number of events observed",
      "e": "Euler's number (~2.718)"
    },
    example: "If a call center receives 3 calls per minute on average (λ=3), the probability of exactly 5 calls in a minute is P(5) ≈ 10.1%.",
    whenToUse: "Used for quality control (defects per unit), epidemiology (disease incidence), and network traffic modeling."
  },

  "binomial-distribution-calculator": {
    whatIsIt: "Calculates the probability of getting exactly k successes in n independent trials, each with a fixed probability p of success.",
    formula: "P(k) = C(n,k) × pᵏ × (1-p)^(n-k)",
    example: "Flipping a fair coin 10 times (n=10, p=0.5), the probability of exactly 7 heads: P(7) ≈ 11.7%.",
    faq: [
      { q: "When should I use Binomial vs Poisson distribution?", a: "Use Binomial when you have a fixed number of trials (n) and a known success probability (p). Use Poisson when counting events over a continuous interval with no fixed upper limit." }
    ]
  },

  "dna-complement": {
    whatIsIt: "Generates the complementary strand of a DNA sequence using Watson-Crick base pairing rules: A pairs with T, and G pairs with C.",
    howToUse: "Enter a DNA sequence using only the letters A, T, G, and C. The tool returns the complementary strand in the 3'→5' direction.",
    formula: "A ↔ T, G ↔ C",
    example: "For the sequence 5'-ATGCATGC-3', the complementary strand is 3'-TACGTACG-5'.",
    whenToUse: "Used in molecular biology for primer design, PCR analysis, and understanding DNA replication and repair."
  }

,
  "percentage-difference-calculator": {
    "whatIsIt": "Calculates the absolute difference between two numbers as a percentage of their average. Useful when neither number is clearly the 'original' or 'reference' value.",
    "formula": "|a - b| / ((a + b) / 2) × 100",
    "howToUse": "Enter the two values you want to compare. The calculator handles the absolute difference and division automatically.",
    "example": "Comparing two experimental yields (e.g., 45g and 55g) gives a difference of 10g, and an average of 50g. The percentage difference is 10/50 × 100 = 20%.",
    "commonMistakes": "Do not confuse percentage difference with percentage change. Use difference when comparing two independent values (like two test scores), and change when comparing an old value to a new value over time."
},
  "percentage-error-calculator": {
    "whatIsIt": "Determines the inaccuracy of an experimental or estimated value compared to the true, theoretical, or accepted value.",
    "formula": "|(Approximate - Exact) / Exact| × 100",
    "howToUse": "Enter your measured/experimental value and the true/accepted value.",
    "example": "If you estimated 80 people would attend, but 100 actually did, the error is |80 - 100| / 100 × 100 = 20% error.",
    "commonMistakes": "Always divide by the TRUE (exact) value, not the measured one. Dividing by the measured value is the most common student error in lab reports."
},
  "matrix-calculator": {
    "whatIsIt": "A comprehensive tool for adding, subtracting, and multiplying matrices. Fundamental for linear algebra, computer graphics, and physics.",
    "howToUse": "Define the dimensions of Matrix A and Matrix B, input your coefficients, and select the operation (+, -, ×).",
    "commonMistakes": "Remember that matrix multiplication is NOT commutative. A × B does not necessarily equal B × A. Also, to multiply A × B, the number of columns in A must match the number of rows in B."
},
  "speed-calculator": {
    "whatIsIt": "Calculates the scalar magnitude of velocity (speed) based on distance traveled over a specific duration of time.",
    "formula": "s = d / t",
    "howToUse": "Input the total distance and the time taken. Ensure your units are consistent (e.g., meters and seconds).",
    "commonMistakes": "Speed is a scalar quantity (no direction), whereas velocity is a vector (requires direction). This calculator provides speed."
},
  "voltage-calculator": {
    "whatIsIt": "Uses Ohm's Law to calculate the electrical potential difference (voltage) across a component when current and resistance are known.",
    "formula": "V = I × R",
    "variables": {
        "V": "Voltage (Volts)",
        "I": "Current (Amperes)",
        "R": "Resistance (Ohms)"
    },
    "howToUse": "Enter the current flowing through the circuit and the resistance.",
    "example": "A circuit with 2 Amps of current and 5 Ohms of resistance will have a voltage drop of 10 Volts.",
    "commonMistakes": "Ensure your units are strictly in Amperes and Ohms. Convert milli-amps (mA) to Amps before calculating."
},
  "percentile-calculator": {
    "whatIsIt": "Finds the value below which a given percentage of observations in a group of observations falls.",
    "howToUse": "Paste or type your dataset (comma or space separated) and input the desired percentile (0-100).",
    "commonMistakes": "Do not confuse percentile with percentage score. A score of 80% on a test means you got 80% of the questions right. Being in the 80th percentile means you scored better than 80% of the test-takers."
},
  "binary-calculator": {
    "whatIsIt": "Performs arithmetic operations (addition, subtraction, multiplication, division) directly on binary (base-2) numbers.",
    "howToUse": "Enter two binary sequences (1s and 0s) and select the arithmetic operation you wish to perform.",
    "example": "1010 (10 in decimal) + 0101 (5 in decimal) = 1111 (15 in decimal).",
    "commonMistakes": "Mixing binary with hexadecimal or decimal digits. Only 1s and 0s are valid inputs."
},
  "unit-circle": {
    "whatIsIt": "An interactive reference tool displaying the angles (in degrees and radians) and their corresponding trigonometric coordinates (cosine, sine) on a circle with a radius of 1.",
    "howToUse": "Use it to quickly look up exact values for sine, cosine, and tangent for common angles like 30°, 45°, 60°, and 90°.",
    "commonMistakes": "Memorizing the first quadrant is highly recommended. All other quadrants are just sign variations of the first quadrant."
},
  "average-rate-of-change": {
    "whatIsIt": "Measures how much a function changes per unit of change in the input variable over a specific interval. Geometrically, it is the slope of the secant line between two points.",
    "formula": "( f(b) - f(a) ) / ( b - a )",
    "howToUse": "Enter the function values at the start and end of your interval, along with the start and end points themselves.",
    "commonMistakes": "Do not confuse average rate of change over an interval with instantaneous rate of change (which requires a derivative)."
},
  "wave-speed-calculator": {
    "whatIsIt": "Calculates the speed at which a wave propagates through a medium based on its frequency and wavelength.",
    "formula": "v = f × λ",
    "variables": {
        "v": "Wave speed (m/s)",
        "f": "Frequency (Hz)",
        "λ": "Wavelength (m)"
    },
    "howToUse": "Enter the frequency of the wave and its wavelength.",
    "example": "A sound wave with a frequency of 440 Hz (A4 note) and a wavelength of ~0.78 meters has a speed of about 343 m/s in air.",
    "commonMistakes": "Ensure wavelength is in meters. If given in nanometers (like for light), convert to meters first."
},
  "voltage-divider-calculator": {
    "whatIsIt": "Calculates the output voltage of a simple passive linear circuit that turns a large voltage into a smaller one using two resistors in series.",
    "formula": "V_out = V_in × (R2 / (R1 + R2))",
    "howToUse": "Input the source voltage and the resistance values of both resistors.",
    "commonMistakes": "The formula assumes no load is connected to V_out. If you connect a load in parallel with R2, the equivalent resistance drops, changing the output voltage."
},
  "average-atomic-mass": {
    "whatIsIt": "Calculates the weighted average mass of all naturally occurring isotopes of an element.",
    "formula": "(Mass1 × Abundance1) + (Mass2 × Abundance2) + ...",
    "howToUse": "Enter the atomic mass and percentage abundance for each isotope. Ensure the abundances add up to exactly 100%.",
    "commonMistakes": "Forgetting to divide the percentage by 100 before multiplying. (e.g., 75% should be multiplied as 0.75)."
},
  "root-mean-square-speed": {
    "whatIsIt": "Calculates the measure of the speed of particles in a gas, which correlates with the kinetic energy and temperature of the gas.",
    "formula": "v_rms = √(3RT / M)",
    "variables": {
        "R": "Ideal gas constant (8.314 J/(mol·K))",
        "T": "Temperature (Kelvin)",
        "M": "Molar mass (kg/mol)"
    },
    "howToUse": "Input the temperature of the gas and its molar mass.",
    "commonMistakes": "The molar mass M MUST be in kilograms per mole (kg/mol), not grams per mole (g/mol). For example, O2 is 0.032 kg/mol, not 32."
},
  "age-calculator": {
    "whatIsIt": "Calculates the exact chronological time elapsed between a birth date and a target date in years, months, and days.",
    "howToUse": "Enter the date of birth and the current (or future/past) date to compare against.",
    "commonMistakes": "Leap years are automatically handled by the calculator, meaning calculating day counts manually might differ slightly from this exact output."
},
  "matrix-rank-calculator": {
    "whatIsIt": "Determines the rank of a matrix, which is the maximum number of linearly independent row or column vectors in the matrix.",
    "howToUse": "Enter the matrix dimensions and elements. The calculator will reduce the matrix to row echelon form to count the non-zero rows.",
    "commonMistakes": "A matrix is full rank if its rank equals the smallest dimension (rows or columns). If the rank is less, the vectors are linearly dependent."
},
  "matrix-trace-calculator": {
    "whatIsIt": "Computes the trace of a square matrix, which is defined as the sum of elements on the main diagonal (from the upper left to the lower right).",
    "formula": "Tr(A) = a_11 + a_22 + ... + a_nn",
    "howToUse": "Enter a square matrix (N × N) and the trace will be calculated instantly.",
    "commonMistakes": "The trace is only defined for square matrices. You cannot calculate the trace of a non-square matrix."
},
  "mitosis-stages": {
    "whatIsIt": "An educational reference detailing the phases of mitosis, the process of somatic cell division resulting in two identical daughter cells.",
    "howToUse": "Review the breakdown of Prophase, Metaphase, Anaphase, and Telophase (PMAT) to study for biology exams.",
    "commonMistakes": "Confusing mitosis with meiosis. Mitosis creates diploid somatic (body) cells, while meiosis creates haploid gametes (sex cells)."
},
  "meiosis-stages": {
    "whatIsIt": "A reference for the stages of meiosis, which involves two rounds of division (Meiosis I and Meiosis II) to produce four genetically diverse haploid gametes.",
    "howToUse": "Use this to track chromosome counts and understand crossing over (which occurs in Prophase I).",
    "commonMistakes": "Forgetting that DNA replication only happens ONCE (before Meiosis I), even though there are two division phases."
},
  "ratio-calculator": {
    "whatIsIt": "Simplifies ratios, solves for missing proportions (A:B = C:D), and scales ratios up or down.",
    "howToUse": "Input the known parts of your ratio to find the missing variable, or input a single ratio to see its simplest form.",
    "commonMistakes": "Ensure units are the same before creating a ratio. A ratio of 1 inch to 1 foot is 1:12, not 1:1."
},
  "square-calculator": {
    "whatIsIt": "Solves the basic geometric properties of a square (area, perimeter, diagonal) from just one known measurement.",
    "formula": "Area = s², Perimeter = 4s, Diagonal = s√2",
    "howToUse": "Enter any single known value (side, area, perimeter, or diagonal).",
    "commonMistakes": "Don't forget that the diagonal of a square creates two 45-45-90 right triangles, which is where the √2 coefficient comes from."
},
  "rectangle-area-calculator": {
    "whatIsIt": "Computes the 2D space enclosed by a rectangle using its length and width.",
    "formula": "Area = length × width",
    "howToUse": "Input the horizontal length and vertical width. Make sure the units match.",
    "commonMistakes": "If you need to convert units (e.g., feet to inches), do it BEFORE calculating the area, otherwise you must square the conversion factor."
},
  "square-root-calculator": {
    "whatIsIt": "Finds the principal (positive) square root of a number, which is the value that, when multiplied by itself, gives the original number.",
    "formula": "√x",
    "howToUse": "Type any positive number to find its square root.",
    "commonMistakes": "While negative numbers don't have real square roots (resulting in imaginary numbers like 'i'), remember that positive numbers technically have two square roots (e.g., √9 is 3 and -3, though calculators default to the principal positive root)."
},
  "cube-calculator": {
    "whatIsIt": "Solves the geometric properties of a 3D cube (volume, surface area, and space diagonal) based on a single measurement.",
    "formula": "Volume = s³, Surface Area = 6s²",
    "howToUse": "Enter the side length (edge) of the cube.",
    "commonMistakes": "Confusing volume (cubic units, s³) with surface area (square units, 6 × s²). Always double-check your unit types."
}
,
  "scientific-calculator": {
    "whatIsIt": "A versatile online scientific calculator designed for students and professionals. It performs standard arithmetic alongside advanced mathematical operations like trigonometry, logarithms, and exponentiation.",
    "howToUse": "Click or tap the buttons to build your expression. The calculator supports degrees (DEG) and radians (RAD) modes for trigonometric functions. Click 'View History' to see your past calculations.",
    "commonMistakes": "Forgetting to switch between DEG and RAD modes before calculating sine, cosine, or tangent is a very frequent error. Always verify your angle mode matches your assignment."
},
  "limit-calculator": {
    "whatIsIt": "Calculates the mathematical limit of a function as the input variable approaches a specific value. Limits are foundational to calculus, defining continuity, derivatives, and integrals.",
    "formula": "lim (x → a) f(x) = L",
    "howToUse": "Enter your function expression (e.g., sin(x)/x). Specify the point the variable is approaching. You can select the direction of the approach (From Left, From Right, or Both Sides).",
    "variables": {
        "f(x)": "The mathematical function you are evaluating",
        "a": "The point the variable is approaching",
        "L": "The resulting limit"
    },
    "commonMistakes": "Directly substituting the value when it results in an indeterminate form (like 0/0). In those cases, algebraic manipulation or L'Hôpital's rule is required mathematically, though this calculator will attempt to resolve it automatically."
},
  "derivative-calculator": {
    "whatIsIt": "Computes the first derivative of a mathematical function, which represents the instantaneous rate of change or the slope of the tangent line at any given point.",
    "formula": "f'(x) = d/dx [ f(x) ]",
    "howToUse": "Enter a valid function (e.g., x^2 * sin(x)). If you want to evaluate the slope at a specific point, enter a numerical value in the evaluation box. The calculator handles polynomial, trigonometric, and exponential differentiation.",
    "commonMistakes": "Forgetting to use parentheses when combining operations, leading to an incorrect order of operations in complex chain-rule scenarios."
},
  "base-conversion-calculator": {
    "whatIsIt": "Translates numbers between different positional numeral systems, specifically decimal (base 10), binary (base 2), octal (base 8), and hexadecimal (base 16).",
    "howToUse": "Select your starting base and your target base. Enter the number you want to convert. The tool supports standard formats, including letters A-F for hexadecimal values.",
    "example": "Converting the decimal number 255 to hexadecimal yields FF. Converting 255 to binary yields 11111111.",
    "commonMistakes": "Entering digits that are invalid for the selected starting base. For instance, you cannot enter a '2' if you have selected Binary as your input base."
},
  "normal-distribution-calculator": {
    "whatIsIt": "Calculates probabilities (p-values) and z-scores for a normally distributed dataset (the bell curve). Essential for statistics and probability theory.",
    "howToUse": "Input your population mean (μ) and standard deviation (σ). To find a probability, input your boundaries (x). The tool calculates the area under the normal curve for that region.",
    "variables": {
        "Mean (μ)": "The center peak of the distribution",
        "Standard Deviation (σ)": "The measure of spread or width of the bell curve"
    },
    "commonMistakes": "Confusing the standard deviation with the variance. If you are given the variance (σ²), you must take the square root to find the standard deviation before using the calculator."
},
  "bmi-calculator": {
    "whatIsIt": "Calculates Body Mass Index (BMI), a rapid screening tool used to estimate whether a person has a healthy body weight proportional to their height.",
    "howToUse": "Enter your weight and height using either metric or imperial units. The calculator will automatically apply the correct conversion and formula.",
    "commonMistakes": "BMI is only a general screening measure. It does not directly measure body fat percentage and may misclassify athletes with high muscle mass or elderly individuals who have lost muscle mass."
},
  "hexadecimal-converter": {
    "whatIsIt": "Converts values between hexadecimal (base-16) notation and standard decimal or binary formats. Commonly used in computer science for memory addresses and color codes.",
    "howToUse": "Choose whether you are converting TO or FROM hexadecimal, enter your value, and the conversion is performed instantly.",
    "example": "The hex color code #FFFFFF corresponds to the decimal values 255, 255, 255 (Pure White in RGB).",
    "commonMistakes": "Forgetting that hex letters are case-insensitive but mathematically significant. A=10, B=11, C=12, D=13, E=14, F=15."
},
  "unit-converter": {
    "whatIsIt": "A universal conversion tool for standard physical quantities including Length, Weight (Mass), Temperature, and Digital Data.",
    "howToUse": "Select a category at the top (e.g., Length). Choose your starting unit and target unit from the dropdowns, then enter the value to convert.",
    "example": "Converting 100 degrees Celsius to Fahrenheit yields 212°F (the boiling point of water).",
    "commonMistakes": "When converting temperature, remember that Celsius and Fahrenheit do not scale proportionally from zero like length or weight; they have offset zero points (e.g., 0°C = 32°F)."
},
  "taylor-series-calculator": {
    "whatIsIt": "Computes the Taylor series expansion of a function, which approximates a complex function as a polynomial sum calculated from the function's derivatives at a single point.",
    "formula": "f(x) ≈ f(a) + f'(a)(x-a) + f''(a)(x-a)²/2! + ...",
    "howToUse": "Enter the function f(x), the center point 'a' (the point you are approximating around), and the number of terms 'n' to compute.",
    "commonMistakes": "Choosing an expansion center 'a' where the function or its derivatives are undefined (e.g., expanding ln(x) at a = 0). Choose a center point close to the value you actually want to approximate."
}
,
  "quadratic-equation-solver": {
    "whatIsIt": "A mathematical tool that solves quadratic equations of the standard form ax² + bx + c = 0. It instantly calculates the roots (x-intercepts) of the corresponding parabola.",
    "formula": "x = (-b ± √(b² - 4ac)) / 2a",
    "variables": {
        "a": "The coefficient of the squared term (x²)",
        "b": "The coefficient of the linear term (x)",
        "c": "The constant term"
    },
    "howToUse": "Enter the coefficients a, b, and c from your equation. The calculator evaluates the discriminant (b² - 4ac) to determine the nature of the roots. It will output two distinct real roots, one repeated real root, or indicate if the roots are complex (imaginary).",
    "example": "For the equation x² - 5x + 6 = 0, enter a = 1, b = -5, c = 6. The calculator will return x1 = 3 and x2 = 2.",
    "commonMistakes": "Forgetting negative signs on the coefficients. If your equation is 2x² - 3x - 4 = 0, you must enter b as -3 and c as -4, not 3 and 4."
},
  "logarithm-calculator": {
    "whatIsIt": "Calculates the logarithm of a number to any specified base. Logarithms answer the question: 'To what power must we raise the base to obtain the number?'",
    "formula": "log_b(n) = x  (which means b^x = n)",
    "variables": {
        "Number (n)": "The value you are taking the logarithm of (must be positive)",
        "Base (b)": "The base of the logarithm (must be positive and not equal to 1)"
    },
    "howToUse": "Enter your target Number and your desired Base. The tool computes the result using the change-of-base formula internally: ln(Number) / ln(Base). To calculate a common log, use base 10. To calculate a natural log (ln), you can approximate by entering 2.718 for the base, though standard base 10 and base 2 are most common here.",
    "example": "To find log_2(8), enter Number = 8 and Base = 2. The calculator returns 3, because 2³ = 8.",
    "commonMistakes": "Attempting to calculate the logarithm of a negative number or zero, which is mathematically undefined in real numbers and will return an error or NaN."
},
  "standard-normal-distribution": {
    "whatIsIt": "Calculates probability density and cumulative probabilities for the standard normal distribution (a bell curve with a mean of 0 and standard deviation of 1). It relies on z-scores to determine the area under the curve.",
    "formula": "z = (x - μ) / σ",
    "howToUse": "To use this as a true Standard Normal calculator, you must manually set the Mean (μ) to 0 and the Standard Deviation (σ) to 1. Then, enter your z-score as the target value (x). The calculator will output the probability density exactly at that point, as well as the cumulative probabilities (less than or equal to z, and greater than z).",
    "example": "With Mean = 0 and SD = 1, entering an x (z-score) of 1.96 yields a cumulative probability (≤) of approximately 0.975.",
    "commonMistakes": "Forgetting to set the mean to 0 and standard deviation to 1. If you leave these values out or enter raw data instead of z-scores, the resulting probabilities will be incorrect for a standard normal curve."
},
  "pythagorean-theorem-calculator": {
    "whatIsIt": "A geometric calculator that computes the length of the hypotenuse of a right-angled triangle when the lengths of the two shorter legs are known.",
    "formula": "a² + b² = c²  (therefore, c = √(a² + b²))",
    "variables": {
        "Leg A": "The length of one of the shorter sides",
        "Leg B": "The length of the other shorter side",
        "Hypotenuse (c)": "The longest side, opposite the right angle"
    },
    "howToUse": "Enter the lengths of Leg A and Leg B. The calculator squares both values, adds them together, and takes the square root of the sum to find the precise length of the hypotenuse.",
    "example": "If Leg A is 3 and Leg B is 4, the calculator computes √(3² + 4²) = √(9 + 16) = √25, returning a hypotenuse of 5.",
    "commonMistakes": "Attempting to use this calculator to find a missing leg (when you already know the hypotenuse). This specific tool is designed only to find the hypotenuse (c) from legs (a) and (b). If you know the hypotenuse, you must manually subtract instead: a = √(c² - b²)."
},
  "lcm-calculator": {
    "whatIsIt": "Calculates the Least Common Multiple (LCM) of two numbers. The LCM is the smallest positive integer that is perfectly divisible by both of the provided numbers.",
    "formula": "LCM(a,b) = |a × b| / GCD(a,b)",
    "howToUse": "Enter two integers into the calculator. It evaluates their greatest common divisor (GCD) in the background and uses it to instantly compute the lowest common multiple.",
    "example": "For the numbers 4 and 6, the multiples of 4 are (4, 8, 12, 16...) and the multiples of 6 are (6, 12, 18...). The calculator will return 12, as it is the smallest multiple they share.",
    "commonMistakes": "Confusing LCM with GCD. The LCM will always be equal to or larger than the largest of your two inputs, whereas the GCD will always be equal to or smaller than your smallest input."
},
  "gcd-calculator": {
    "whatIsIt": "Calculates the Greatest Common Divisor (GCD), also known as the Greatest Common Factor (GCF). It finds the largest positive integer that perfectly divides both of the provided numbers without leaving a remainder.",
    "howToUse": "Enter two integers. The calculator uses the Euclidean algorithm—successively dividing the numbers and finding the remainder—until it identifies the largest common factor.",
    "example": "For the numbers 48 and 18, the calculator determines the GCD is 6, because 6 is the largest number that divides into both 48 (8 times) and 18 (3 times).",
    "commonMistakes": "Entering decimals or fractions. The concept of a Greatest Common Divisor mathematically applies strictly to integers."
},
  "percentage-calculator": {
    "whatIsIt": "An academic aggregate percentage calculator designed to compute your total overall percentage across multiple subjects, tests, or assignments.",
    "formula": "Overall Percentage = (Sum of Obtained Marks / Sum of Total Marks) × 100",
    "howToUse": "Each row represents a single subject or exam. Optionally enter the subject name, then input the marks you obtained alongside the total possible marks for that test. Click 'Add Subject' to include more exams. The calculator aggregates all your entries to find your cumulative percentage.",
    "example": "If you scored 45/50 in Math and 80/100 in History, the calculator sums your obtained marks (125) and total marks (150). It then calculates (125 / 150) × 100 to yield a final aggregate score of 83.33%.",
    "commonMistakes": "Averaging the percentages of individual classes rather than aggregating the raw marks. If you score 10/10 (100%) and 50/100 (50%), your overall grade is 60/110 (54.5%), NOT the simple average of 75%. This calculator correctly aggregates the raw marks to prevent this mathematical error."
},
  "factorial-calculator": {
    "whatIsIt": "Computes the factorial of a non-negative integer. Factorials are heavily used in combinatorics, probability, and algebra to calculate permutations and combinations.",
    "formula": "n! = n × (n - 1) × (n - 2) × ... × 1",
    "howToUse": "Enter a positive whole number. The calculator will multiply that number by every integer below it down to 1. Note that by mathematical definition, 0! is exactly equal to 1.",
    "example": "Entering 5 will compute 5! = 5 × 4 × 3 × 2 × 1, returning a result of 120.",
    "commonMistakes": "Attempting to input negative numbers or decimals. While advanced math uses the Gamma function to extend factorials to fractions, standard factorial calculators strictly require non-negative integers. Entering a negative number will return an 'Invalid' result."
}
,
  "standard-deviation-calculator": {
    "whatIsIt": "Calculates both the population and sample standard deviation of a dataset. Standard deviation measures how dispersed or spread out your numbers are from the mean (average). A low standard deviation means the data is clustered tightly around the mean, while a high standard deviation indicates the data is spread over a wider range.",
    "formula": "Population: σ = √[Σ(x - μ)² / N]\nSample: s = √[Σ(x - x̄)² / (n - 1)]",
    "howToUse": "Enter your dataset as a comma or space-separated list of numbers. The calculator instantly evaluates all descriptive statistics in one pass. Scroll down to see both the Population Standard Deviation (σ) and the Sample Standard Deviation (s).",
    "example": "For the dataset: 2, 4, 4, 4, 5, 5, 7, 9. The Population Standard Deviation is approximately 2.0. The Sample Standard Deviation is approximately 2.138.",
    "commonMistakes": "Using the population standard deviation when you only have a sample of data. Unless your data represents every single member of the entire group you are studying (the whole population), you should use the Sample Standard Deviation (s) for statistical accuracy."
},
  "fraction-to-decimal": {
    "whatIsIt": "Converts any mathematical fraction into its equivalent decimal value. It simply divides the numerator by the denominator to express the ratio in base-10 format.",
    "formula": "Decimal = Numerator ÷ Denominator",
    "variables": {
        "Numerator": "The top number of the fraction",
        "Denominator": "The bottom number of the fraction"
    },
    "howToUse": "Enter the top number (Numerator) and the bottom number (Denominator). The tool will divide them and output the corresponding decimal value.",
    "example": "Entering 3 as the numerator and 4 as the denominator yields the decimal 0.75.",
    "commonMistakes": "Reversing the inputs. Entering 4 as the numerator and 3 as the denominator will result in 1.3333... instead of the intended 0.75. Also, entering 0 as the denominator is mathematically invalid and will cause an error."
},
  "simultaneous-equations": {
    "whatIsIt": "A tool to solve systems of linear equations. It finds the exact point where multiple lines intersect—the specific values for x, y (and z) that make all the equations in the system true simultaneously.",
    "howToUse": "First, select whether you are solving a 2-variable system (x, y) or a 3-variable system (x, y, z). Then, input the coefficients for each variable and the constant for each equation row. The calculator uses matrix operations to find the unique solution.",
    "example": "For the system:\nx + y = 10\nx - y = 2\nEnter the coefficients for row 1 (1, 1, 10) and row 2 (1, -1, 2). The calculator will solve for x = 6, y = 4.",
    "commonMistakes": "Forgetting to include negative signs when a variable is subtracted. If your equation is 2x - y = 5, you must enter the coefficient for y as -1, not 1."
},
  "circle-area-calculator": {
    "whatIsIt": "Calculates the total space enclosed within a circle's boundary based on its radius.",
    "formula": "A = πr²",
    "variables": {
        "r (Radius)": "The distance from the center of the circle to any point on its edge."
    },
    "howToUse": "Enter the radius of the circle. The calculator squares the radius and multiplies it by Pi (π) to determine the exact area.",
    "example": "If the radius is 5, the area is calculated as π × 5² = π × 25 ≈ 78.5398.",
    "commonMistakes": "Entering the diameter instead of the radius. If you are given a diameter (the full width across the circle), you must divide it by 2 to find the radius before entering it into this calculator."
},
  "cube-volume-calculator": {
    "whatIsIt": "Computes the volume (total 3D space inside) of a perfect cube. In a cube, all edges have the exact same length.",
    "formula": "V = s³",
    "variables": {
        "s (Side Length)": "The length of any single edge of the cube."
    },
    "howToUse": "Enter the length of one side of the cube. The calculator multiplies that length by itself three times (cubes it) to output the volume.",
    "example": "For a cube with a side length of 3, the volume is 3 × 3 × 3 = 27 cubic units.",
    "commonMistakes": "Confusing volume with surface area. This calculator gives the 3D space inside (s³). The surface area (outside wrapping) would be 6s²."
},
  "permutation-calculator": {
    "whatIsIt": "Calculates the number of possible arrangements for a set of items where the order of selection strictly matters (e.g., choosing a 1st, 2nd, and 3rd place winner).",
    "formula": "nPr = n! / (n - r)!",
    "variables": {
        "n (Total Objects)": "The total number of items available to choose from",
        "r (Selected Objects)": "The number of items you are actually choosing"
    },
    "howToUse": "Enter your total number of objects (n) and how many you are selecting (r). The calculator evaluates the factorials to find the total number of ordered permutations.",
    "example": "If you have 5 racers (n=5) and want to know how many ways they can finish 1st and 2nd (r=2), the calculator evaluates 5! / (5-2)! = 120 / 6 = 20 possible arrangements.",
    "commonMistakes": "Using permutations when the order does not matter (like drawing a hand of cards). If the order doesn't matter, you should use the Combinations calculator instead."
},
  "combination-calculator": {
    "whatIsIt": "Calculates the number of possible selections for a set of items where the order of selection does NOT matter (e.g., choosing 3 teammates from a group of 10).",
    "formula": "nCr = n! / [r! × (n - r)!]",
    "variables": {
        "n (Total Objects)": "The total number of items available to choose from",
        "r (Selected Objects)": "The number of items you are selecting"
    },
    "howToUse": "Enter the total pool of objects (n) and the amount you want to select (r). The calculator removes duplicate orderings to give you the exact number of unique combinations.",
    "example": "Choosing 2 toppings (r=2) from a menu of 5 available toppings (n=5). The calculator evaluates 5! / [2! × (5-2)!] = 10 possible unique pizza combinations.",
    "commonMistakes": "Entering a selection value (r) that is larger than your total pool (n). You cannot choose 6 items if you only have 5 available; doing so will yield an 'Invalid' result."
},
  "linear-equation-solver": {
    "whatIsIt": "Solves basic first-degree linear equations in the standard algebraic form of ax + b = 0 to isolate and find the root value of x.",
    "howToUse": "Enter your 'a' coefficient (the number attached to x) and your 'b' constant. The calculator performs the inverse operations mathematically (-b / a) to instantly solve for x.",
    "example": "To solve 2x - 8 = 0, enter a = 2 and b = -8. The calculator outputs x = 4.",
    "commonMistakes": "Forgetting to rearrange your equation to equal zero first. If your homework problem is 3x = 12, you must conceptually rewrite it as 3x - 12 = 0, so you would enter a = 3 and b = -12."
},
  "median-calculator": {
    "whatIsIt": "Finds the median (the exact middle value) of a dataset. The median is a measure of central tendency that is highly resistant to extreme outliers, unlike the mean.",
    "howToUse": "Enter your numbers separated by commas or spaces. The calculator automatically sorts your data from smallest to largest. If you have an odd number of values, it picks the middle one. If you have an even number of values, it calculates the average of the two middle numbers.",
    "example": "For the odd dataset: 3, 5, 7, 8, 10, the median is 7. For the even dataset: 3, 5, 7, 9, the median is 6 (the average of 5 and 7).",
    "commonMistakes": "Trying to find the median of unsorted data manually. This calculator sorts the data for you automatically, so you can paste your raw numbers directly without pre-sorting them."
},
  "mode-calculator": {
    "whatIsIt": "Identifies the mode (the most frequently occurring value or values) in a dataset.",
    "howToUse": "Enter your dataset separated by commas or spaces. The calculator scans the frequencies of every number. If multiple numbers tie for the highest frequency, it will output all of them (bimodal or multimodal). If every number appears exactly once, it will state 'None'.",
    "example": "For the dataset: 2, 3, 3, 4, 5, the mode is 3. For the dataset: 2, 2, 4, 4, 5, the modes are 2 and 4.",
    "commonMistakes": "Assuming the mode must be a single number. A dataset can easily have multiple modes if several values tie for the highest frequency count."
}
};


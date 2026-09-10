
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
    whatIsIt: "A versatile genetic cross solver that predicts offspring genotype and phenotype probabilities for monohybrid (single gene), dihybrid (two gene), test cross, ABO blood type, and sex-linked inheritance patterns.",
    howToUse: "1. Enter the genotype for Parent 1 (e.g., 'Aa' for monohybrid, 'AaBb' for dihybrid, 'AO' for blood type, or 'Xx' for sex-linked).\n2. Enter the corresponding genotype for Parent 2 (e.g., 'Aa', 'AaBb', 'BO', or 'XY').\n3. Click 'Generate Punnett Square' to view the complete grid alongside itemized genotypic and phenotypic percentage breakdowns.",
    formula: "Offspring Probability = (Number of Matching Genotype Combinations / Total Grid Cells) × 100%",
    example: "• Monohybrid (Aa × Aa): 25% AA, 50% Aa, 25% aa (75% dominant, 25% recessive).\n• Dihybrid (AaBb × AaBb): 16-cell grid producing classic 9:3:3:1 phenotypic distribution.\n• Test Cross (Aa × aa): 50% Aa, 50% aa (1:1 ratio).\n• Blood Type (AO × BO): 25% AB, 25% AO (Type A), 25% BO (Type B), 25% OO (Type O).",
    whenToUse: "Essential for genetics problem solving, Mendelian inheritance analysis, studying codominance/blood types, and predicting trait transmission in biology.",
    faq: [
      { q: "What is the difference between Genotype and Phenotype?", a: "Genotype refers to the actual genetic allele makeup (the letters, like Aa). Phenotype refers to the physical expression or trait (like dominant vs recessive trait)." }
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
  "projectile-motion-calculator": {
    whatIsIt: "Projectile motion describes the two-dimensional curved path of an object launched into a uniform gravitational field. In ideal projectile mechanics, gravity acts as the sole downward acceleration while air resistance is considered negligible. Because gravitational acceleration operates exclusively in the vertical axis, the motion decomposes into two completely independent, simultaneous kinematic systems: uniform constant-velocity motion along the horizontal axis, and constant-acceleration free-fall along the vertical axis.",
    howToUse: "Enter the initial launch velocity (v₀) and the launch angle (θ) measured upward from the horizontal ground plane. The calculator evaluates the independent horizontal and vertical components:\n1. Velocity Decomposition: Resolves initial velocity into horizontal velocity v₀x = v₀·cos(θ) and vertical velocity v₀y = v₀·sin(θ).\n2. Time of Flight: Calculates total flight duration until returning to the launch elevation: T = (2·v₀y)/g.\n3. Maximum Height: Determines the peak vertical apex attained above the launch plane: H = (v₀y)²/(2g).\n4. Horizontal Range: Computes total horizontal distance traveled on level ground: R = v₀x·T = (v₀²·sin(2θ))/g.",
    formula: "Velocity Decomposition (Launch Angle θ above horizontal):\nv₀x = v₀ · cos(θ)\nv₀y = v₀ · sin(θ)\n\nHorizontal Motion (a_x = 0, vx is constant):\nx(t) = x₀ + v₀x · t\n\nVertical Motion (a_y = -g, constant gravitational acceleration):\nv_y(t) = v₀y - g · t\ny(t) = y₀ + v₀y · t - (1/2)g · t²\n\nLevel-Ground Trajectory (y₀ = y_final):\nTime of Flight: T = (2 · v₀ · sin(θ)) / g\nMaximum Height: H = (v₀ · sin(θ))² / (2g)\nHorizontal Range: R = (v₀² · sin(2θ)) / g",
    variables: {
      "v₀ (Initial Velocity)": "Magnitude of launch velocity at t = 0 (m/s, km/h, or ft/s).",
      "θ (Launch Angle)": "Trajectory angle measured relative to the horizontal ground plane (0° ≤ θ ≤ 90°).",
      "v₀x (Horizontal Velocity)": "Constant horizontal velocity component: v₀x = v₀ · cos(θ).",
      "v₀y (Vertical Velocity)": "Initial upward vertical velocity component: v₀y = v₀ · sin(θ).",
      "g (Gravitational Acceleration)": "Standard acceleration due to Earth's gravity: 9.80665 m/s² (or 32.174 ft/s²).",
      "H (Maximum Height)": "Peak vertical elevation attained above the initial launch position (at apex v_y = 0).",
      "R (Horizontal Range)": "Total horizontal distance traversed prior to returning to the original launch elevation."
    },
    example: "A projectile is launched from ground level at v₀ = 20 m/s at an angle θ = 30° above the horizontal across level ground (g = 9.8 m/s²):\n\nStep 1: Decompose initial velocity into orthogonal components:\n  v₀x = 20 × cos(30°) = 20 × 0.8660 ≈ 17.32 m/s\n  v₀y = 20 × sin(30°) = 20 × 0.5000 = 10.00 m/s\n\nStep 2: Calculate total time of flight (T):\n  T = (2 × v₀y) / g = (2 × 10.0) / 9.8 ≈ 2.04 s\n\nStep 3: Calculate maximum height attained at apex (H):\n  At the highest point, vertical velocity v_y = 0.\n  H = (v₀y)² / (2g) = (10.0)² / (2 × 9.8) = 100 / 19.6 ≈ 5.10 m\n\nStep 4: Calculate horizontal range (R):\n  R = v₀x × T = 17.32 m/s × 2.04 s ≈ 35.35 m\n  (Using the range formula: R = [20² × sin(2 × 30°)] / 9.8 = [400 × sin(60°)] / 9.8 = [400 × 0.8660] / 9.8 ≈ 35.35 m)\n\nSummary: The projectile reaches a peak height of 5.10 m and lands 35.35 m downrange after 2.04 seconds.",
    whenToUse: "Essential in classical mechanics, ballistics engineering, athletic trajectory optimization (punting footballs, golf drives, basketball arcs), and civil artillery safety clearance.",
    commonMistakes: "1. Calculator in Radian Mode: Entering 30° into a trigonometric function expecting radians yields sin(30 rad) ≈ -0.988, creating absurd negative heights.\n2. Mixing Horizontal and Vertical Components: Substituting gravitational acceleration g into horizontal distance equations (horizontal motion has zero acceleration, a_x = 0).\n3. Forgetting the Sign of Gravity: Using +g in vertical position equations causes the projectile to accelerate upward indefinitely instead of forming a downward parabola.\n4. Apex Velocity Confusion: Assuming total velocity is zero at the peak. Vertical velocity is zero (v_y = 0), but horizontal velocity remains constant (v_x = v₀x), meaning total speed is minimized at apex, not zero.\n5. Misapplying the Level-Ground Range Formula: The formula R = v₀²sin(2θ)/g strictly assumes launch elevation equals landing elevation (y₀ = y_final = 0). When firing off a cliff or toward an elevated target, you must solve the full quadratic kinematic equation for time of flight.",
    faq: [
      { q: "What launch angle achieves maximum horizontal range?", a: "On level ground in a vacuum, 45° maximizes range because sin(2 × 45°) = sin(90°) = 1. If launch and landing elevations differ, or if air resistance is present, the optimal launch angle drops below 45°." },
      { q: "Why is ideal projectile motion independent of mass?", a: "By Newton's second law and the equivalence principle, the gravitational force F = mg equals ma, which simplifies to a = g. All objects experience identical gravitational acceleration regardless of mass when air drag is neglected." }
    ]
  },
  "projectile-motion": {
    whatIsIt: "Calculates trajectory parameters for two-dimensional projectile kinematics under constant gravity and zero air resistance.",
    howToUse: "Enter initial velocity and launch angle above the horizontal to compute apex height, flight time, and ground range.",
    formula: "R = (v₀² · sin(2θ)) / g | H = (v₀ · sin(θ))² / (2g)",
    example: "At v₀ = 20 m/s and θ = 30°: R ≈ 35.35 m, H ≈ 5.10 m, Flight Time ≈ 2.04 s."
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
    whatIsIt: "The dilution equation (C₁V₁ = C₂V₂) governs the preparation of a less concentrated solution from a concentrated stock solution. Based on the fundamental Law of Conservation of Solute, adding pure solvent increases the total solution volume while the total mass or moles of dissolved solute remains strictly unchanged, causing concentration to decrease proportionally.",
    howToUse: "Enter any three known parameters among Initial Concentration (C₁), Initial Volume (V₁), Final Concentration (C₂), and Final Volume (V₂). The calculator solves algebraically for the remaining unknown parameter.",
    formula: "Conservation of Solute Equation:\nC₁ · V₁ = C₂ · V₂  (or M₁ · V₁ = M₂ · V₂)\n\nSolvent Addition Relationship:\nV_solvent = V₂ - V₁",
    variables: {
      "C₁ (Initial Concentration)": "Concentration of the original stock solution (e.g., M, mM, g/L, or %).",
      "V₁ (Initial Stock Volume)": "Volume of concentrated stock solution required to supply the needed solute.",
      "C₂ (Final Concentration)": "Desired target concentration of the diluted working solution.",
      "V₂ (Final Total Volume)": "Total final volume of the completed diluted solution.",
      "V_solvent (Volume Added)": "Volume of pure solvent (water or buffer) added to achieve total volume V₂: V_solvent = V₂ - V₁."
    },
    example: "Prepare 500 mL of 0.1 M hydrochloric acid (HCl) working solution from a 12 M concentrated stock:\n\nStep 1: Identify given quantities and unknown:\n  C₁ = 12 M (stock concentration)\n  C₂ = 0.1 M (desired target concentration)\n  V₂ = 500 mL (desired total final volume)\n  V₁ = ? (volume of stock needed)\n\nStep 2: Solve the dilution equation for stock volume V₁:\n  V₁ = (C₂ × V₂) / C₁\n  V₁ = (0.1 M × 500 mL) / 12 M\n  V₁ = 50 / 12 ≈ 4.17 mL\n\nStep 3: Calculate volume of solvent to add:\n  V_water = V₂ - V₁ = 500 mL - 4.17 mL = 495.83 mL\n\nLaboratory Procedure: Pipette exactly 4.17 mL of 12 M HCl into a volumetric flask partially filled with approximately 300 mL of distilled water. Swirl gently to mix, then bring the total volume up to the 500 mL graduation mark with distilled water.",
    whenToUse: "Standard protocol across chemistry and biological laboratories, including preparing buffer solutions, microbiological serial dilutions, analytical standard calibration curves, and pharmaceutical drug dosing preparations.",
    commonMistakes: "1. Confusing Final Volume (V₂) with Volume of Solvent Added: V₂ is the TOTAL volume of the final diluted solution. Adding 500 mL of water to 4.17 mL of stock yields 504.17 mL, causing an inaccurate, over-diluted concentration. Always dilute TO the final volume (V_solvent = V₂ - V₁).\n2. Inconsistent Units: Multiplying liters on the left side and milliliters on the right side without converting. Concentration and volume units must be identical on both sides of the equation.\n3. Treating Concentration as Solute Amount: Overlooking that doubling volume halves concentration, but does not alter the absolute quantity of solute molecules.\n4. Laboratory Safety Violation (Acid Dilution): Always Add Acid to water (AAA). Never add water to concentrated acid; the extreme exothermic heat of hydration can cause instantaneous boiling, acid splattering, and violent glass fracture.",
    faq: [
      { q: "Can this formula be used with mass percentage or parts per million (ppm)?", a: "Yes. C₁V₁ = C₂V₂ holds for any concentration units (M, mM, g/L, %, ppm) and volume units (mL, L, μL), as long as the same units are used consistently on both sides." },
      { q: "Why are mixed solution volumes sometimes non-additive?", a: "When mixing dissimilar polar liquids (such as ethanol and water), intermolecular hydrogen bonding causes volume contraction. In precise quantitative laboratory chemistry, always dilute to the volumetric mark in a calibrated flask rather than measuring solvent volume independently." }
    ]
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
    howToUse: "Enter initial velocity (v_i), final velocity (v_f), and time elapsed (t). The calculator will compute a = (v_f - v_i) / t.",
    formula: "a = (v_f - v_i) / t",
    variables: {
      "a": "Acceleration (m/s²)",
      "v_f": "Final velocity (m/s)",
      "v_i": "Initial velocity (m/s)",
      "t": "Time interval (s)"
    },
    example: "A car going from 0 to 60 km/h (16.67 m/s) in 8 seconds: a = 16.67 / 8 ≈ 2.08 m/s².",
    whenToUse: "Used in kinematics problems, physics experiments, and engineering motion planning.",
    commonMistakes: "Common mistakes include forgetting to convert speed units to meters per second and mixing up time intervals.",
    faq: [{ q: "What if the time is zero?", a: "Division by zero is undefined; the calculator will return an error for t = 0." }]
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

  "dna-sequence-analyzer": {
    whatIsIt: "A comprehensive bioinformatics nucleotide analyzer for DNA and RNA sequences, computing sequence complement, reverse complement, mRNA transcription, protein translation, GC content percentage, and estimated melting temperature (Tm).",
    howToUse: "1. Paste or type any standard DNA sequence (A, T, G, C) or RNA sequence (A, U, G, C).\n2. Click 'Analyze Sequence'.\n3. View sequence metrics (Length, GC%, Tm, Sequence Type) alongside the generated complementary, transcribed, and translated sequences.",
    formula: "• Watson-Crick Base Pairing: A ↔ T (or U in RNA), G ↔ C\n• Reverse Complement: Complement read in reverse 3'→5' direction\n• Transcription: DNA coding strand T → U\n• Translation: Codon triplet mapping to amino acids via Standard Genetic Code\n• GC Content (%) = ((G + C) / Total Bases) × 100\n• Oligo Tm (<14 nt) = 2(A + T) + 4(G + C) °C\n• Oligo Tm (≥14 nt) = 64.9 + 41 × (G + C - 16.4) / Length °C",
    example: "For DNA sequence 'ATGCGTACGTAGC': Length = 13 bp, GC Content = 53.8%, Est. Tm = 40.0°C, Complement = 'TACGCATGCATCG', Reverse Complement = 'GCTACGTACGCAT', Transcribed mRNA = 'AUGCGUACGUAGC', Translated Protein = 'MRT*'.",
    whenToUse: "Essential for molecular biology coursework, PCR primer design, recombinant DNA cloning, genetic code analysis, and bioinformatics research."
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
    "whatIsIt": "Calculates the speed at which a periodic wave travels through a given medium using the fundamental wave equation relating wave velocity, oscillation frequency, and wavelength.",
    "formula": "v = f × λ",
    "variables": {
        "v": "Wave speed / velocity in meters per second (m/s)",
        "f": "Frequency in Hertz (Hz or 1/s)",
        "λ": "Wavelength in meters (m)"
    },
    "howToUse": "Enter the frequency of the wave and its wavelength. The calculator instantly evaluates the wave equation to determine propagation speed.",
    "example": "A concert pitch sound wave with a frequency of 440 Hz (A4) and a wavelength of 0.78 meters in room-temperature air travels at v = 440 × 0.78 = 343.2 m/s.",
    "whenToUse": "Essential in acoustics, optics, telecommunications, seismology, and quantum mechanics when analyzing mechanical or electromagnetic wave propagation.",
    "commonMistakes": "Entering wavelength in nanometers (nm) or centimeters (cm) without converting to meters (m), or confusing wave propagation speed with the transverse particle speed of the medium.",
    "faq": [
      { "q": "Does frequency change when a wave enters a different medium?", "a": "No, frequency is determined by the wave source and remains constant across boundaries; wave speed and wavelength change proportionally." }
    ]
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
    "whatIsIt": "Computes the derivative of a mathematical function, representing the instantaneous rate of change or the slope of the tangent line at any given point.",
    "formula": "f'(x) = d/dx [ f(x) ]",
    "howToUse": "Enter a valid function (e.g., x^2 * sin(x)). If you want to evaluate the slope at a specific point, enter a numeric value in the evaluation box. The calculator handles polynomial, trigonometric, and exponential differentiation.",
    "modeDetails": {
      "first": "Standard first‑order derivative (default).",
      "second": "Second derivative – click **Second Derivative** mode to see f''(x).",
      "partial": "Partial derivative – specify the variable to differentiate with respect to (e.g., x or y).",
      "implicit": "Implicit differentiation – for equations of the form F(x,y)=0, returns dy/dx = - (∂F/∂x) / (∂F/∂y).",
      "marginal": "Marginal derivative – used for cost/revenue functions; same computation as first derivative but labelled accordingly.",
      "tangent": "Tangent line – after evaluating at a point, also provides the tangent line equation y = mx + b."
    },
    "example": "Find the first derivative of f(x)=x^2 sin(x). Result: f'(x)=2x sin(x)+x^2 cos(x).",
    "exampleSecond": "Second derivative of the same function yields f''(x)=2 sin(x)+4x cos(x)-x^2 sin(x).",
    "commonMistakes": "Forgetting parentheses can change the expression (e.g., writing x^2 sin(x) is parsed as (x^2)*sin(x)). Use explicit * for multiplication when needed.",
    "faq": [
      { "q": "Can I compute higher-order derivatives?", "a": "Yes – select the appropriate mode or repeatedly apply the second derivative feature." },
      { "q": "How do I use implicit differentiation?", "a": "Enter an equation like x^2 + y^2 = 1 and choose the implicit mode to get dy/dx." }
    ]
  },
  "pomodoro-timer": {
    "whatIsIt": "A Pomodoro timer helps you work in focused 25‑minute intervals followed by short breaks, a proven technique for improving concentration and productivity.",
    "howToUse": "Choose a work interval (default 25 min) and break lengths (short 5 min, long 15 min). Click **Start** to begin a work session; the timer counts down and automatically switches to break mode. Use **Pause**/**Reset** as needed. After four work sessions the long break is suggested.",
    "example": "Study for a physics chapter: start a 25‑min work session, focus solely on reading and notes. When the timer signals a break, stand up, stretch, and relax for 5 minutes before resuming.",
    "faq": [
      { "q": "Can I change the interval lengths?", "a": "Yes – click **Settings**, edit the minutes for work, short break, or long break, then press **Apply Settings**." },
      { "q": "Does the timer keep running if I switch tabs?", "a": "The timer runs in the browser regardless of tab focus; it will continue counting down." }
    ]
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
    "whatIsIt": "Converts numbers between hexadecimal (base-16) notation and other positional number systems including decimal (base-10), binary (base-2), and octal (base-8). Hexadecimal is widely used in computing because each hex digit maps directly to 4 binary bits (a nibble).",
    "howToUse": "Enter a number in the input field and select your starting base. The converter immediately calculates equivalent representations across binary, octal, decimal, and hexadecimal.",
    "formula": "Decimal Value = Σ (digit_i × 16ⁱ)\nHexadecimal = Repeated division by 16 recording remainders (10=A, 11=B, 12=C, 13=D, 14=E, 15=F)",
    "variables": {
      "digit_i": "The value of each hexadecimal digit from right to left (0-9, A=10, B=11, C=12, D=13, E=14, F=15)",
      "16ⁱ": "The positional base weight corresponding to index i (16⁰ = 1, 16¹ = 16, 16² = 256, etc.)"
    },
    "example": "To convert hex 2A to decimal: (2 × 16¹) + (10 × 16⁰) = 32 + 10 = 42.",
    "whenToUse": "Use when working with memory addresses, low-level debugging, subnetting, CSS color codes (#RRGGBB), or microcontroller registers.",
    "commonMistakes": "Forgetting that hex letters are case-insensitive but represent values 10 through 15 (A=10, B=11, C=12, D=13, E=14, F=15), or entering digits above F.",
    "faq": [
      { "q": "Why is hexadecimal preferred over binary in programming?", "a": "Hexadecimal is much more compact and human-readable than binary. A byte (8 bits) is represented by exactly 2 hex digits instead of 8 binary digits." }
    ]
},
  "unit-converter": {
    "whatIsIt": "A multi-purpose dimensional analysis converter that converts quantities between metric (SI) and imperial systems across length, mass/weight, temperature, and digital data storage.",
    "howToUse": "Select the measurement category (Length, Weight, Temperature, or Data). Enter the numerical value, choose your source unit from the left dropdown, and choose your target unit from the right dropdown.",
    "formula": "Value_target = (Value_source × Factor_source) / Factor_target\n(Temperature: °F = (°C × 9/5) + 32, K = °C + 273.15)",
    "variables": {
      "Value_source": "The numerical quantity you want to convert",
      "Factor_source": "The base unit multiplier for the starting unit (relative to SI base)",
      "Factor_target": "The base unit multiplier for the output unit"
    },
    "example": "To convert 5 kilometers to miles: 5 km = 5,000 m; 5,000 / 1609.344 ≈ 3.1069 miles.",
    "whenToUse": "Use when converting lab measurements, physics problem units, international travel distances, recipes, or digital file storage sizes.",
    "commonMistakes": "Treating temperature like a direct proportional multiplier. Celsius, Fahrenheit, and Kelvin have different zero points and offset baselines (e.g., 0°C = 32°F, not 0°F).",
    "faq": [
      { "q": "Are imperial and US customary units identical?", "a": "For length and weight (pounds, feet, inches), they are effectively identical. For volume (gallons, pints, fluid ounces), British Imperial and US Customary units differ." }
    ]
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
  },
  "random-number": {
    "whatIsIt": "A cryptographic-grade pseudo-random integer generator that produces uniformly distributed numbers within any custom closed interval [min, max].",
    "howToUse": "Specify your minimum and maximum boundaries in the Min and Max input fields, then click 'Generate' to roll a random integer.",
    "formula": "Random Integer = floor(random() × (max - min + 1)) + min",
    "variables": {
      "min": "The lowest possible integer value that can be produced (inclusive)",
      "max": "The highest possible integer value that can be produced (inclusive)",
      "random()": "A uniform pseudo-random decimal in the half-open range [0, 1)"
    },
    "example": "To roll a standard 6-sided die: set Min = 1 and Max = 6. Each roll has an exact 1/6 (16.67%) chance of appearing.",
    "whenToUse": "Useful for statistical sampling, random prize drawings, board games, classroom presentations, probability experiments, and selecting randomized test cases.",
    "commonMistakes": "Setting the minimum value higher than the maximum value, which produces a range error, or assuming recent outcomes affect future rolls (gambler's fallacy).",
    "faq": [
      { "q": "Are the endpoints included?", "a": "Yes, both the minimum and maximum numbers specified in the range are inclusive and have an equal chance of being generated." }
    ]
  },
  "gravity-calculator": {
    "whatIsIt": "Calculates the local acceleration due to gravity (g) on the surface of any celestial body or at a given radial distance from its center using Newton's Law of Universal Gravitation.",
    "formula": "g = (G × M) / R²",
    "variables": {
      "g": "Gravitational acceleration in meters per second squared (m/s²)",
      "G": "Universal gravitational constant (6.67430 × 10⁻¹¹ N·m²/kg²)",
      "M": "Mass of the celestial body in kilograms (kg)",
      "R": "Radial distance from the center of mass to the point of observation in meters (m)"
    },
    "howToUse": "Enter the planet's mass and its radius. The calculator computes the exact surface gravitational acceleration in m/s².",
    "example": "For Earth (M ≈ 5.972 × 10²⁴ kg, R ≈ 6.371 × 10⁶ m): g = (6.67430e-11 × 5.972e24) / (6.371e6)² ≈ 9.81 m/s².",
    "whenToUse": "Used in astrophysics, orbital mechanics, planetary science, and physics coursework to determine free-fall acceleration and weight on different planets.",
    "commonMistakes": "Entering the altitude above the surface instead of the total distance from the planet's center of mass (Radius + Altitude), or forgetting to square the radius in the denominator.",
    "faq": [
      { "q": "How does gravity change with altitude?", "a": "Gravitational acceleration follows the inverse-square law; doubling your distance from the center of the planet reduces the gravitational pull to one-fourth (1/4)." }
    ]
  },
  "q-mc-delta-t": {
    "whatIsIt": "Calculates the sensible thermal energy (heat) absorbed or released by a substance during a temperature change without a change of state.",
    "formula": "Q = m × c × ΔT\nΔT = T_final - T_initial",
    "variables": {
      "Q": "Heat energy transferred in Joules (J) or kiloJoules (kJ)",
      "m": "Mass of the substance in grams (g) or kilograms (kg)",
      "c": "Specific heat capacity of the material in J/(g·°C) or J/(g·K) (e.g., water = 4.184 J/g·°C)",
      "ΔT": "Temperature change in °C or K (T_final - T_initial)"
    },
    "howToUse": "Enter the mass of the substance, its specific heat capacity, and the temperature change (ΔT). The calculator returns the total heat transferred in Joules and kJ.",
    "example": "Heating 250 g of water (c = 4.184 J/g·°C) from 20°C to 80°C (ΔT = 60°C): Q = 250 × 4.184 × 60 = 62,760 J = 62.76 kJ.",
    "whenToUse": "Crucial in thermochemistry, calorimetry experiments, HVAC design, chemical engineering, and determining heating/cooling requirements.",
    "commonMistakes": "Applying Q = mcΔT during phase changes (melting/boiling), where temperature remains constant and latent heat formulas (Q = m·ΔH_fus or Q = m·ΔH_vap) must be used instead, or mixing grams and kilograms.",
    "faq": [
      { "q": "What does a negative Q value mean?", "a": "A negative Q indicates that the process is exothermic—the substance released heat into its surroundings, causing its temperature to decrease." }
    ]
  },
  "mass-energy-equivalence-calculator": {
    "whatIsIt": "Calculates the total rest energy intrinsically contained within mass based on Albert Einstein's landmark special relativity equation E = mc².",
    "formula": "E = m × c²",
    "variables": {
      "E": "Rest energy in Joules (J)",
      "m": "Mass of the object or particle in kilograms (kg)",
      "c": "Speed of light in vacuum (299,792,458 m/s, c² ≈ 8.98755 × 10¹⁶ m²/s²)"
    },
    "howToUse": "Enter the mass in kilograms or grams. The calculator evaluates E = mc² to reveal the equivalent rest energy in Joules and kilojoules.",
    "example": "Converting 1 gram (0.001 kg) of matter entirely into energy yields: E = 0.001 × (2.99792 × 10⁸)² ≈ 8.988 × 10¹³ Joules (~21.5 kilotons of TNT equivalent).",
    "whenToUse": "Essential in nuclear physics, particle physics, fusion and fission reaction energy calculations, annihilation events, and cosmology.",
    "commonMistakes": "Confusing rest energy (E = mc²) with total relativistic energy (E² = (pc)² + (mc²)²), which must account for momentum when a particle moves at relativistic speeds.",
    "faq": [
      { "q": "How does E = mc² relate to nuclear binding energy and mass defect?", "a": "When nucleons bind into an atomic nucleus, the missing mass (mass defect Δm) is directly converted into the nuclear binding energy that holds the nucleus together: E_b = Δm·c²." }
    ]
  },
  "mass-defect": {
    "whatIsIt": "Calculates the mass defect (Δm) of an atomic nucleus in nuclear chemistry—the difference between the total mass of individual constituent nucleons (free protons and neutrons) and the actual experimental mass of the bonded nucleus. In chemistry and radiochemistry, this mass difference explains isotopic stability and why bonded nuclei weigh less than their isolated constituents.",
    "formula": "Δm = (Z × m_p) + (N × m_n) - M_nucleus",
    "variables": {
      "Z": "Number of protons (atomic number of the isotope)",
      "N": "Number of neutrons (mass number A - atomic number Z)",
      "m_p": "Proton mass (1.67262 × 10⁻²⁷ kg)",
      "m_n": "Neutron mass (1.67493 × 10⁻²⁷ kg)",
      "M_nucleus": "Measured mass of the target atomic nucleus in kilograms (kg)"
    },
    "howToUse": "Input the number of protons (Z), number of neutrons (N), and the actual measured mass of the atomic nucleus in kilograms. The calculator computes the mass defect in kilograms.",
    "example": "For an alpha particle (Helium-4 nucleus, Z = 2, N = 2) with measured nuclear mass 6.64466 × 10⁻²⁷ kg: Unbound nucleons mass = 2(1.67262 × 10⁻²⁷) + 2(1.67493 × 10⁻²⁷) = 6.69510 × 10⁻²⁷ kg. Δm = 6.69510 × 10⁻²⁷ - 6.64466 × 10⁻²⁷ = 5.044 × 10⁻²⁹ kg.",
    "whenToUse": "Used in general and nuclear chemistry coursework to evaluate isotope stability, study nuclear transmutation reactions, and calculate isotopic mass discrepancies.",
    "commonMistakes": "Using atomic mass (which includes orbital electron masses) instead of bare nuclear mass without subtracting electron masses, or forgetting that neutrons are slightly heavier than protons.",
    "faq": [
      { "q": "Why is the bonded nucleus lighter than the sum of its protons and neutrons?", "a": "During the formation of a nucleus, strong nuclear forces bind nucleons together, releasing binding energy into the surroundings. By mass-energy equivalence, this lost energy results in a measurable loss of mass (the mass defect)." },
      { "q": "How does this relate to the physics mass defect calculator?", "a": "Both calculate mass defect using the same underlying principles, but nuclear chemistry focuses on isotopic stability, nuclide formation, and radioactive decay energetics." }
    ]
  },
  "nuclear-binding-energy": {
    "whatIsIt": "Calculates the total nuclear binding energy released when individual nucleons fuse to form a stable atomic nucleus, or equivalently, the energy required to dissociate an atomic nucleus into individual protons and neutrons during nuclear chemical processes.",
    "formula": "E = Δm × c²",
    "variables": {
      "E": "Nuclear binding energy in Joules (J) or kilojoules (kJ)",
      "Δm": "Nuclear mass defect in kilograms (kg)",
      "c": "Speed of light in vacuum (2.99792 × 10⁸ m/s)"
    },
    "howToUse": "Enter the mass defect (Δm) in kilograms. The calculator determines the binding energy released during nucleosynthesis in Joules (J) and kilojoules (kJ).",
    "example": "If a nuclide has a mass defect of Δm = 5.044 × 10⁻²⁹ kg, its total binding energy is: E = (5.044 × 10⁻²⁹ kg) × (2.99792 × 10⁸ m/s)² = 4.533 × 10⁻¹² J.",
    "whenToUse": "Essential in nuclear chemistry for calculating molar binding energies (kJ/mol), analyzing alpha/beta decay energetics, and understanding nuclear reaction thermochemistry.",
    "commonMistakes": "Entering the total mass of the nucleus instead of the mass defect (Δm), or confusing nuclear binding energy with chemical bond dissociation energy (which is millions of times smaller).",
    "faq": [
      { "q": "How does nuclear binding energy compare to chemical bond energy?", "a": "Chemical bond energies (covalent/ionic) are on the order of a few electron-volts (eV) or hundreds of kJ/mol. Nuclear binding energies are millions of electron-volts (MeV) or billions of kJ/mol, reflecting the immense strength of the strong nuclear force compared to electromagnetic forces." }
    ]
  },
  "mass-defect-calculator": {
    "whatIsIt": "Evaluates the relativistic mass defect (Δm) in nuclear and particle physics. In modern physics, mass defect represents the missing rest mass converted into nuclear potential well binding energy under Einstein's mass-energy equivalence principle.",
    "formula": "Δm = (Z × m_p) + (N × m_n) - M_nucleus",
    "variables": {
      "Z": "Proton count (Z)",
      "N": "Neutron count (N)",
      "m_p": "Proton rest mass (1.67262192 × 10⁻²⁷ kg)",
      "m_n": "Neutron rest mass (1.67492750 × 10⁻²⁷ kg)",
      "M_nucleus": "Rest mass of the bound nucleus (kg or g)"
    },
    "howToUse": "Input the number of protons (Z), neutrons (N), and the nucleus rest mass. Select whether the nucleus mass is in kilograms or grams. The calculator outputs the mass defect in kg and g.",
    "example": "For Deuterium (1 proton, 1 neutron) with nucleus mass 3.34358 × 10⁻²⁷ kg: Free nucleons = (1.67262 × 10⁻²⁷) + (1.67493 × 10⁻²⁷) = 3.34755 × 10⁻²⁷ kg. Δm = 3.34755 × 10⁻²⁷ - 3.34358 × 10⁻²⁷ = 3.97 × 10⁻³⁰ kg.",
    "whenToUse": "Fundamental in modern physics, quantum physics, astrophysics (stellar fusion pathways), and nuclear reactor engineering.",
    "commonMistakes": "Neglecting SI units when converting between atomic mass units (u) and kilograms (1 u = 1.66054 × 10⁻²⁷ kg), or confusing rest mass with relativistic mass.",
    "faq": [
      { "q": "Why is mass defect central to modern physics?", "a": "Mass defect is direct experimental proof of special relativity and mass-energy equivalence: mass and energy are interchangeable manifestations of the same underlying physical entity." },
      { "q": "How does mass defect relate to binding energy per nucleon?", "a": "Dividing the mass defect's equivalent energy by the total nucleon count (A = Z + N) yields the binding energy per nucleon (BE/A), which peaks near Iron-56 (56Fe) and governs whether fusion or fission is energetically favorable." }
    ]
  },
  "nuclear-binding-energy-calculator": {
    "whatIsIt": "Computes the nuclear binding energy from mass defect using the relativistic energy relation E = Δm·c². In nuclear physics, binding energy measures the depth of the nuclear potential well holding nucleons together against Coulomb electrostatic repulsion.",
    "formula": "E = Δm × c²",
    "variables": {
      "E": "Total nuclear binding energy in Joules (J) or kilojoules (kJ)",
      "Δm": "Mass defect in kilograms (kg) or grams (g)",
      "c": "Speed of light (2.99792458 × 10⁸ m/s)"
    },
    "howToUse": "Enter the mass defect in kilograms (kg) or grams (g). The calculator evaluates E = Δm·c² to output the total binding energy in Joules and kilojoules.",
    "example": "A mass defect of 3.97 × 10⁻³⁰ kg in Deuteron binding produces E = (3.97 × 10⁻³⁰) × (2.99792 × 10⁸)² = 3.568 × 10⁻¹³ J (approx. 2.227 MeV).",
    "whenToUse": "Required in nuclear physics problem sets, Q-value computations for nuclear decay/reactions, fission/fusion yield analysis, and particle accelerator calculations.",
    "commonMistakes": "Using the total nuclear mass instead of mass defect (Δm), or mixing non-SI units without proper conversion factors (1 MeV = 1.60218 × 10⁻¹³ J).",
    "faq": [
      { "q": "How do you convert binding energy in Joules to Mega-electronvolts (MeV)?", "a": "Divide the energy in Joules by 1.602176634 × 10⁻¹³ J/MeV (1 MeV ≈ 1.602 × 10⁻¹³ J). For example, 3.568 × 10⁻¹³ J / 1.602 × 10⁻¹³ ≈ 2.23 MeV." },
      { "q": "What is the nuclear binding energy curve?", "a": "It plots binding energy per nucleon against mass number A. Light elements release energy via nuclear fusion as they move toward peak stability at Iron-56, while heavy elements (like Uranium-235) release energy through nuclear fission." }
    ]
  },
  "rref-calculator": {
    "whatIsIt": "Reduced Row Echelon Form (RREF) is the canonical, fully solved matrix state obtained by applying Gauss-Jordan elimination to an augmented matrix. A matrix satisfies RREF if and only if:\n1. All zero rows are grouped at the very bottom of the matrix.\n2. The first non-zero number in each non-zero row is a leading 1 (termed a pivot).\n3. Each pivot appears strictly to the right of the pivot in the row above it.\n4. Each pivot is the sole non-zero entry in its entire column (all entries above and below every pivot are reduced to zero).\n\nUnlike standard Row Echelon Form (REF)—which merely requires an upper-triangular ladder with zeros below each pivot—RREF requires leading 1s and zeroing out entries both below and above each pivot. Crucially, while a matrix can have many valid REF representations, its RREF form is mathematically unique.",
    "howToUse": "Enter the coefficients of your linear system into the matrix grid, with the rightmost column representing the constant vector [b]. The calculator executes Gauss-Jordan elimination via three valid Elementary Row Operations:\n1. Row Swapping (Pivoting): R_i ↔ R_j to position non-zero coefficients into pivot positions.\n2. Non-zero Scalar Multiplication: k · R_i → R_i (k ≠ 0) to normalize the leading pivot entry to 1.\n3. Row Addition / Elimination: R_i + k · R_j → R_i to eliminate all non-zero coefficients in the pivot column.\n\nOnce reduced, each pivot column identifies a basic variable, while columns without pivots identify free variables.",
    "formula": "Elementary Row Operations:\n1. Row Swap: R_i ↔ R_j\n2. Scalar Multiplication: k · R_i → R_i  (k ≠ 0)\n3. Row Addition: R_i + k · R_j → R_i\n\nSystem Consistency Conditions:\nUnique Solution: Every variable column has a pivot and no row has [ 0 0 ... 0 | c ] (c ≠ 0).\nInfinite Solutions: System is consistent and at least one variable column lacks a pivot (free variable).\nInconsistent (No Solution): A row reduces to [ 0 0 ... 0 | c ] with c ≠ 0, signifying 0 = c.",
    "variables": {
      "m × n Dimensions": "m represents the number of linear equations (rows); n represents the total number of matrix columns, including coefficients and the augmented constant column.",
      "Augmented Column [b]": "The rightmost column storing the constant values from the right side of each linear equation.",
      "Pivot Columns": "Columns containing a leading 1, corresponding to basic variables with uniquely determined values.",
      "Free Variables": "Variables corresponding to columns lacking a pivot, parameterizing an infinite solution subspace."
    },
    "example": "Solve the 3×3 linear system of equations:\n  x + y + z = 6\n 2x - y + z = 3\n  x + 2y - z = 2\n\nInitial Augmented Matrix [A | b]:\n [  1   1   1 | 6 ]\n [  2  -1   1 | 3 ]\n [  1   2  -1 | 2 ]\n\nStep 1: Eliminate entries below pivot 1 in column 1:\n  R2 - 2·R1 → R2: [ 0  -3  -1 | -9 ]\n  R3 - 1·R1 → R3: [ 0   1  -2 | -4 ]\n\nStep 2: Swap rows R2 and R3 to place a simple pivot 1 into row 2:\n  R2 ↔ R3:\n [ 1   1   1 |  6 ]\n [ 0   1  -2 | -4 ]\n [ 0  -3  -1 | -9 ]\n\nStep 3: Eliminate below row 2 pivot:\n  R3 + 3·R2 → R3: [ 0   0  -7 | -21 ]\n\nStep 4: Scale row 3 by -1/7 to create pivot 1:\n  (-1/7)·R3 → R3: [ 0   0   1 |  3 ]  (giving z = 3)\n\nStep 5: Back-substitute upwards to clear entries ABOVE pivots in column 3:\n  R2 + 2·R3 → R2: [ 0   1   0 |  2 ]  (giving y = 2)\n  R1 - 1·R3 → R1: [ 1   1   0 |  3 ]\n\nStep 6: Clear above pivot in column 2:\n  R1 - 1·R2 → R1: [ 1   0   0 |  1 ]  (giving x = 1)\n\nFinal Unique RREF Matrix:\n [ 1  0  0 | 1 ]  → x = 1\n [ 0  1  0 | 2 ]  → y = 2\n [ 0  0  1 | 3 ]  → z = 3\n\nSolution: The system has a unique solution: (x, y, z) = (1, 2, 3).",
    "whenToUse": "Standard mathematical technique in linear algebra, electrical network loop and node equations, civil truss load analysis, economics input-output models, and chemical stoichiometry matrix balancing.",
    "commonMistakes": "1. Confusing REF with RREF: Stopping once the matrix is upper-triangular without scaling pivots to 1 and eliminating non-zero entries above them.\n2. Forgetting to Clear Above Pivots: Gauss-Jordan elimination requires zeroing entries both below AND above every pivot.\n3. Illegal Row Operations: Multiplying a row by zero (destroying information) or adding a constant to an individual row (e.g. R1 + 5, which is mathematically invalid).\n4. Arithmetic Sign Errors: Overlooking double negatives when subtracting negative row multiples (e.g., subtracting -3 times a row means adding 3 times that row).\n5. Misinterpreting Free Variables: Failing to recognize that a non-pivot variable column represents a free parameter (e.g., x3 = t), giving an infinite family of solutions.\n6. Inconsistent Row Misinterpretation: Mistaking an inconsistent row [ 0 0 0 | 5 ] for a variable value (it states 0x + 0y + 0z = 5, or 0 = 5, meaning the system has NO solution).",
    "faq": [
      { "q": "Why is RREF preferred over Gaussian elimination with back-substitution?", "a": "RREF produces a completely decoupled diagonal identity block for basic variables, reading off solutions directly without requiring manual algebraic substitution." },
      { "q": "Can a matrix have more than one RREF?", "a": "No. While a matrix has infinitely many valid Row Echelon Forms (REF) depending on operation choices, its Reduced Row Echelon Form (RREF) is proven strictly unique." }
    ]
  },
  "definite-integral-calculator": {
    "whatIsIt": "A definite integral represents the net signed area bounded between the graph of a continuous function f(x) and the horizontal x-axis over an interval [a, b]. Defined rigorously as the limit of a Riemann sum as the partition mesh size approaches zero, a definite integral evaluates to a single real number representing cumulative accumulation (such as net distance, total work, or accumulated charge).",
    "howToUse": "Enter your mathematical expression f(x), lower limit of integration (a), and upper limit of integration (b). The calculator applies the Fundamental Theorem of Calculus (FTC):\n1. Finds an analytical antiderivative function F(x) such that F'(x) = f(x).\n2. Evaluates the antiderivative at the upper bound b: F(b).\n3. Evaluates the antiderivative at the lower bound a: F(a).\n4. Computes the definite integral value as the difference: F(b) - F(a).",
    "formula": "The Fundamental Theorem of Calculus (Part 2):\n∫[a to b] f(x) dx = [F(x)]_a^b = F(b) - F(a)  (where F'(x) = f(x))\n\nLimit Reversal Property:\n∫[b to a] f(x) dx = -∫[a to b] f(x) dx\n\nInterval Additivity Property:\n∫[a to b] f(x) dx = ∫[a to c] f(x) dx + ∫[c to b] f(x) dx",
    "variables": {
      "f(x) (Integrand)": "The continuous rate function or mathematical expression being integrated.",
      "a (Lower Limit)": "The starting boundary of the integration interval on the independent axis.",
      "b (Upper Limit)": "The terminal boundary of the integration interval on the independent axis.",
      "F(x) (Antiderivative)": "A primitive function whose derivative reproduces the integrand: d/dx[F(x)] = f(x).",
      "dx (Differential)": "The infinitesimal width of subintervals along the x-axis."
    },
    "example": "Evaluate the definite integral:\n∫[0 to 2] (3x² - 2x + 1) dx\n\nStep 1: Determine the general antiderivative F(x) using the power rule of integration:\n  ∫ 3x² dx = 3(x³/3) = x³\n  ∫ -2x dx = -2(x²/2) = -x²\n  ∫ 1 dx = x\n  F(x) = x³ - x² + x\n\nStep 2: Evaluate F(x) at the upper limit (b = 2):\n  F(2) = (2)³ - (2)² + (2) = 8 - 4 + 2 = 6\n\nStep 3: Evaluate F(x) at the lower limit (a = 0):\n  F(0) = (0)³ - (0)² + (0) = 0\n\nStep 4: Subtract F(a) from F(b) according to the FTC:\n  ∫[0 to 2] (3x² - 2x + 1) dx = F(2) - F(0) = 6 - 0 = 6\n\nResult: The net signed area under the curve is 6.",
    "whenToUse": "Ubiquitous in calculus, physics (evaluating work W = ∫ F·dx, center of mass, fluid hydrostatic force), electrical engineering (root-mean-square voltage, energy dissipation), and probability theory (cumulative probability distributions).",
    "commonMistakes": "1. Confusing Net Signed Area with Total Geometric Area: Regions where f(x) < 0 lie below the x-axis and contribute negative signed area, cancelling out positive regions above the axis. To find total physical enclosed area, you must locate roots of f(x), split the interval, and integrate |f(x)|.\n2. Forgetting the Lower Endpoint: Never assume F(a) = 0 simply because a = 0. For expressions containing cos(x), e^x, or rational functions, F(0) is frequently non-zero (e.g., cos(0) = 1, e^0 = 1).\n3. Swapping Upper and Lower Limits: Reversing the boundaries reverses the sign of integration: ∫[2 to 0] f(x)dx = -∫[0 to 2] f(x)dx.\n4. Blindly Integrating Across Singularities: The Fundamental Theorem of Calculus requires f(x) to be continuous across [a, b]. Attempting an ordinary evaluation across an infinite discontinuity or vertical asymptote (e.g. ∫[-1 to 1] (1/x²) dx) yields an invalid result; such integrals must be treated as improper integrals using limits.",
    "faq": [
      { "q": "Why is the constant of integration (+C) omitted in definite integrals?", "a": "Because [F(b) + C] - [F(a) + C] = F(b) - F(a) + C - C = F(b) - F(a). The arbitrary constant C subtracts to zero identically." },
      { "q": "Can a definite integral equal zero or a negative value?", "a": "Yes. If the area beneath the x-axis exceeds the area above it on [a, b], the definite integral is negative. If positive and negative areas balance perfectly (e.g. ∫[-π to π] sin(x) dx), the integral equals zero." }
    ]
  },
  "integral-calculator": {
    "whatIsIt": "The Integral Calculator evaluates definite integrals numerically in your browser. It uses Simpson's 1/3 rule with 10 000 sub‑intervals to approximate the net signed area under a continuous function.",
    "howToUse": "Enter a mathematical expression f(x) and the lower (a) and upper (b) limits. The calculator runs the Simpson's rule approximation locally and returns the result. For indefinite integrals, the page displays a notice that symbolic antiderivatives are not supported.",
    "formula": "Simpson's 1/3 rule (n = 10 000): ∫[a to b] f(x) dx ≈ (h/3)·[f(x₀) + 4∑f(x_{odd}) + 2∑f(x_{even}) + f(x_n)], where h = (b‑a)/n.",
    "variables": {
      "f(x) (Integrand)": "The function to be integrated, entered as a JavaScript‑compatible expression.",
      "a (Lower Limit)": "Start of the integration interval.",
      "b (Upper Limit)": "End of the integration interval."
    },

    "example": "Evaluate ∫[0 to 2] (3x^2 - 2x + 1) dx.\nThe calculator returns 6, matching the analytical result.",
    "whenToUse": "Useful for quick numerical estimates of definite integrals when an antiderivative is hard to obtain, or for physics and engineering problems requiring a numerical answer.",
    "commonMistakes": "1. Supplying an expression that is undefined or has a singularity inside [a, b] will cause an error because the numerical method requires a continuous integrand.\\n2. Expecting symbolic antiderivatives; the tool only provides numeric approximations.\\n3. Assuming the result is exact; the answer is an approximation whose accuracy depends on the smoothness of f(x) and the interval size.",
    "faq": [
      { "q": "Does the calculator work offline?", "a": "All calculations are performed locally in the browser; no data is sent to a server." },
      { "q": "Can I change the number of intervals?", "a": "The implementation uses a fixed 10 000 intervals for a good balance of speed and accuracy." }
    ]
  },
  "hardy-weinberg-calculator": {
    "whatIsIt": "The Hardy-Weinberg Principle is the foundational null hypothesis of population genetics. It establishes that in a sexually reproducing, diploid population, allele and genotype frequencies remain constant across generations in the absence of evolutionary mechanisms (mutation, migration, selection, and genetic drift). Deviations from Hardy-Weinberg proportions provide direct quantitative evidence that evolutionary forces or non-random mating patterns are operating on the gene pool.",
    "howToUse": "Enter the observed frequency of the homozygous recessive genotype (q²) or recessive phenotype in the population. The calculator executes the standard genetic equilibrium equations:\n1. Derives the recessive allele frequency: q = √(q²).\n2. Derives the dominant allele frequency: p = 1 - q.\n3. Calculates homozygous dominant frequency: p².\n4. Evaluates the heterozygous carrier frequency: 2pq.",
    "formula": "Allele Frequency Equilibrium (Single Locus, Two Alleles):\np + q = 1\n\nGenotype Frequency Equilibrium:\np² + 2pq + q² = 1\n\nSequential Calculation from Recessive Phenotype (q²):\nq = √(q²)\np = 1 - q\nCarrier Frequency = 2 · p · q\nHomozygous Dominant Frequency = p²",
    "variables": {
      "p": "Frequency of the dominant allele (A) in the gene pool (0 ≤ p ≤ 1).",
      "q": "Frequency of the recessive allele (a) in the gene pool (0 ≤ q ≤ 1).",
      "p²": "Frequency of homozygous dominant individuals (genotype AA) displaying the dominant phenotype.",
      "2pq": "Frequency of heterozygous individuals / genetic carriers (genotype Aa) displaying the dominant phenotype.",
      "q²": "Frequency of homozygous recessive individuals (genotype aa) displaying the recessive phenotype."
    },
    "example": "In human genetics, cystic fibrosis is an autosomal recessive condition affecting approximately 1 in 2,500 newborns in a certain demographic:\n\nStep 1: Identify the homozygous recessive genotype frequency (q²):\n  q² = 1 / 2500 = 0.0004\n\nStep 2: Calculate the recessive allele frequency (q):\n  q = √(0.0004) = 0.02  (2% of alleles in the gene pool carry the mutation)\n\nStep 3: Calculate the dominant allele frequency (p):\n  p = 1 - q = 1 - 0.02 = 0.98  (98% of alleles are wild-type dominant)\n\nStep 4: Calculate the heterozygous carrier frequency (2pq):\n  2pq = 2 × (0.98) × (0.02) = 0.0392\n\nInterpretation: While only 0.04% of newborns suffer from the condition (q²), approximately 3.92% of the population (about 1 in 25 individuals) are healthy heterozygous carriers (2pq) capable of passing the mutation to offspring.",
    "whenToUse": "Essential in medical genetics for carrier screening and genetic counseling, evolutionary biology to test for active natural selection, forensic genetics (estimating match probabilities), and agricultural selective breeding.",
    "commonMistakes": "1. Treating Recessive Phenotype Frequency (q²) as Allele Frequency (q): Forgetting to take the square root of the observed recessive incidence before calculating p.\n2. Assuming Dominant Phenotype Equals p²: Individuals displaying the dominant phenotype include BOTH homozygous dominants (p²) and heterozygous carriers (2pq). You cannot determine p simply by taking √(dominant phenotype).\n3. Confusing Allele Frequencies with Genotype Frequencies: p and q represent gamete allele fractions; p², 2pq, and q² represent organism genotype fractions.\n4. Blind Application to Real Populations: Hardy-Weinberg is an idealized null model. Small isolated populations often deviate markedly due to inbreeding, sexual selection, or random genetic drift.",
    "faq": [
      { "q": "What are the 5 mandatory assumptions of Hardy-Weinberg equilibrium?", "a": "1. No mutation (no new alleles formed). 2. Completely random mating (no assortative mating or sexual selection). 3. No gene flow (closed population with zero immigration or emigration). 4. Infinite population size (eliminating sampling error and genetic drift). 5. No natural selection (all genotypes possess identical survival and reproductive fitness)." },
      { "q": "Why must we always calculate q first?", "a": "Because the recessive phenotype is the only phenotype whose underlying genotype is unambiguous (aa = q²). The dominant phenotype contains a mixture of AA (p²) and Aa (2pq), preventing direct extraction of p without first solving for q." }
    ]
  },
  "trigonometric-calculator": {
    "whatIsIt": "A comprehensive trigonometric calculator for evaluating both standard (sin, cos, tan, csc, sec, cot) and inverse (arcsin, arccos, arctan, arccsc, arcsec, arccot) trigonometric functions with full support for degrees and radians.",
    "howToUse": "1. Select the desired standard or inverse trigonometric function from the dropdown.\n2. Choose your preferred angle unit (Degrees or Radians).\n3. Enter the angle (for standard functions) or numeric ratio (for inverse functions).\n4. Click Calculate to view the precise evaluated result.",
    "formula": "Standard Trigonometric Functions:\n• sin(θ) = Opposite / Hypotenuse\n• cos(θ) = Adjacent / Hypotenuse\n• tan(θ) = sin(θ) / cos(θ) = Opposite / Adjacent\n• csc(θ) = 1 / sin(θ)\n• sec(θ) = 1 / cos(θ)\n• cot(θ) = 1 / tan(θ)\n\nInverse Trigonometric Functions:\n• arcsin(x) = θ where sin(θ) = x, x ∈ [-1, 1]\n• arccos(x) = θ where cos(θ) = x, x ∈ [-1, 1]\n• arctan(x) = θ where tan(θ) = x, x ∈ (-∞, ∞)\n• arccsc(x) = arcsin(1/x), |x| ≥ 1\n• arcsec(x) = arccos(1/x), |x| ≥ 1\n• arccot(x) = arctan(1/x), x ∈ (-∞, ∞)",
    "whenToUse": "Use this tool to solve geometric triangles, evaluate trigonometric equations, compute wave phases and vectors in physics, and determine angular coordinates in engineering calculations."
  },
  "molar-mass-calculator": {
    "whatIsIt": "A chemical formula analyzer and molar mass calculator that computes molecular weight, formula mass, and elemental percent mass composition for any chemical compound, supporting nested parentheses and polyatomic groups.",
    "howToUse": "1. Enter a chemical formula (e.g. H2O, C6H12O6, Fe(CN)6, Ca(NO3)2).\n2. Maintain correct elemental capitalization (e.g., Co for Cobalt vs CO for Carbon Monoxide).\n3. Click Calculate to view the total molar mass in g/mol and the itemized elemental mass percentage breakdown.",
    "formula": "Molar Mass (M) = ∑ (n_i × atomic_mass_i)\n\nElement Mass % = ( (n_i × atomic_mass_i) / Total_Molar_Mass ) × 100%\n\nwhere n_i is the number of atoms of element i in the chemical formula.",
    "whenToUse": "Essential for stoichiometry calculations, preparing standard molar solutions in the chemistry laboratory, determining empirical and molecular formulas, and converting between mass (grams) and amount of substance (moles)."
  },
  "set-calculator": {
    "whatIsIt": "A comprehensive set theory calculator for computing set operations including union, intersection, set difference, symmetric difference, cardinality, subset relations, disjointness, and Cartesian product size.",
    "howToUse": "1. Enter elements for Set A and Set B as comma-separated values (e.g., 1, 2, 3, a, b).\n2. Duplicate values within each set are automatically deduplicated.\n3. Click 'Calculate Sets' to view formatted set results in standard curly-brace mathematical notation.",
    "formula": "• Union (A ∪ B) = { x | x ∈ A or x ∈ B }\n• Intersection (A ∩ B) = { x | x ∈ A and x ∈ B }\n• Difference (A - B) = { x | x ∈ A and x ∉ B }\n• Symmetric Difference (A △ B) = (A - B) ∪ (B - A)\n• Cartesian Product Size |A × B| = |A| × |B|",
    "example": "For Set A = {1, 2, 3} and Set B = {3, 4, 5}:\n• A ∪ B = {1, 2, 3, 4, 5}\n• A ∩ B = {3}\n• A - B = {1, 2}\n• B - A = {4, 5}\n• A △ B = {1, 2, 4, 5}\n• |A| = 3, |B| = 3, |A × B| = 9",
    "whenToUse": "Essential for discrete mathematics, probability theory, computer science data structures, database relational algebra, and Venn diagram analysis."
  }
};

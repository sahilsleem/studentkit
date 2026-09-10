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
    "whatIsIt": "The GPA (Grade Point Average) Calculator helps students determine their academic standing based on grades and credit hours. It uses the standard 4.0 scale commonly found in US and international high schools and universities.",
    "howToUse": "Enter the name of your course, the credits it's worth, and the grade you received. Add as many courses as you need. The calculator will automatically weight the grades against the credits to produce your final GPA.",
    "formula": "GPA = Total Grade Points / Total Credit Hours",
    "variables": {
      "Total Grade Points": "The sum of (Credit Hours × Grade Value) for all classes.",
      "Total Credit Hours": "The sum of all credits attempted."
    },
    "example": "If you take a 3-credit class and get an A (4.0), and a 4-credit class and get a B (3.0): Total Points = (3×4) + (4×3) = 24. Total Credits = 7. GPA = 24 / 7 = 3.42.",
    "whenToUse": "Use this at the end of a semester to project your transcript, or mid-semester to set target goals for your finals.",
    "faq": [
      {
        "q": "What is a good GPA?",
        "a": "This depends entirely on your institution. Generally, a 3.0 (B average) or higher is considered good for undergraduate admissions, while top-tier universities often look for 3.7+."
      },
      {
        "q": "Are honors or AP classes weighted?",
        "a": "This calculator calculates unweighted GPA. For weighted GPA, an A in an AP class is typically worth 5.0 points instead of 4.0."
      }
    ]
  },
  "cgpa-to-percentage": {
    "whatIsIt": "A bidirectional academic utility for converting between Cumulative Grade Point Average (CGPA) on a 10-point scale and equivalent percentage scores. It supports standard conversion factors (such as the CBSE / AICTE 9.5 multiplier), direct 10.0 scaling, and custom university-specific multipliers or dividers.",
    "howToUse": "1. Select your conversion mode: 'CGPA → Percentage' or 'Percentage → CGPA'.\n2. Enter your score (0–10 for CGPA or 0–100 for Percentage).\n3. Choose your conversion scale (9.5 for CBSE/Standard, 10.0 for direct decimal shift, or Custom to input your university's official multiplier/divider).\n4. Click Calculate to view your score and easily copy the result.",
    "formula": "• CGPA to Percentage: Percentage = CGPA × Multiplier (e.g., CGPA × 9.5)\n• Percentage to CGPA: CGPA = Percentage ÷ Divider (e.g., Percentage ÷ 9.5)",
    "variables": {
      "Multiplier (9.5)": "Standard factor established by CBSE/AICTE for Indian boards and universities.",
      "Multiplier (10.0)": "Direct linear conversion scale where 10 CGPA = 100%.",
      "Custom Factor": "University-specific conversion coefficient (e.g., Mumbai University, VTU, Anna University)."
    },
    "example": "• Converting 8.20 CGPA to Percentage (9.5 factor): 8.20 × 9.5 = 77.90%.\n• Converting 8.20 CGPA to Percentage (10.0 factor): 8.20 × 10 = 82.00%.\n• Converting 77.90% to CGPA (9.5 factor): 77.90 ÷ 9.5 = 8.20 CGPA.",
    "whenToUse": "Essential when filling out higher education admissions, scholarship applications, government competitive exams, or employment forms requiring a specific scoring metric (percentage vs. 10-point CGPA).",
    "commonMistakes": "1. Assuming the 9.5 multiplier applies to every institution universally; always verify if your university uses a specific formula.\n2. Confusing semester GPA (SGPA) with cumulative grade point average (CGPA).\n3. Entering values outside the valid range (CGPA > 10 or Percentage > 100).",
    "faq": [
      {
        "q": "Why is 9.5 used by CBSE?",
        "a": "CBSE determined 9.5 by calculating the average marks of candidate score distributions in the top 5 percentile compared against grade point bands."
      },
      {
        "q": "Can I use this for non-10-point scales (like 4.0 US GPA)?",
        "a": "For a US 4.0 scale, use our dedicated GPA Calculator which computes credit-weighted course grade averages."
      }
    ]
  },
  "attendance-calculator": {
    "whatIsIt": "The Attendance Calculator determines your current attendance percentage and tells you exactly how many more classes you need to attend (or can afford to miss) to maintain your college's minimum threshold.",
    "howToUse": "Enter the total number of classes held so far, and the number of classes you have attended. Set your target attendance (e.g., 75%).",
    "formula": "(Classes Attended / Total Classes Held) × 100",
    "example": "If 40 classes have happened and you attended 32, your attendance is (32/40)×100 = 80%.",
    "whenToUse": "Crucial at the end of the semester to ensure you avoid academic penalties or debarment from final exams.",
    "faq": [
      {
        "q": "Why is 75% the standard?",
        "a": "Many universities globally enforce a 75% or 80% minimum attendance rule to ensure students participate adequately in continuous learning."
      }
    ]
  },
  "ideal-gas-law": {
    "whatIsIt": "The Ideal Gas Law describes the behavior of a hypothetical ideal gas under various conditions of temperature, volume, and pressure.",
    "howToUse": "Enter three of the four variables (Pressure, Volume, Amount in moles, Temperature). The calculator will solve for the missing fourth variable.",
    "formula": "PV = nRT",
    "variables": {
      "P": "Absolute pressure",
      "V": "Volume",
      "n": "Amount of substance in moles",
      "R": "Ideal gas constant (approx 8.314 J/(mol·K) or 0.08206 L·atm/(mol·K))",
      "T": "Absolute temperature in Kelvin"
    },
    "example": "To find the volume of 1 mole of gas at 1 atm and 273.15 K: V = (1 * 0.08206 * 273.15) / 1 ≈ 22.4 Liters.",
    "commonMistakes": "The most common mistake is forgetting to convert Celsius to Kelvin before calculating. Temperature MUST always be in Kelvin.",
    "whenToUse": "Fundamental in thermodynamics, stoichiometry of gases, and general chemistry."
  },
  "punnett-square": {
    "whatIsIt": "A versatile genetic cross solver that predicts offspring genotype and phenotype probabilities for monohybrid (single gene), dihybrid (two gene), test cross, ABO blood type, and sex-linked inheritance patterns.",
    "howToUse": "1. Enter the genotype for Parent 1 (e.g., 'Aa' for monohybrid, 'AaBb' for dihybrid, 'AO' for blood type, or 'Xx' for sex-linked).\n2. Enter the corresponding genotype for Parent 2 (e.g., 'Aa', 'AaBb', 'BO', or 'XY').\n3. Click 'Generate Punnett Square' to view the complete grid alongside itemized genotypic and phenotypic percentage breakdowns.",
    "formula": "Offspring Probability = (Number of Matching Genotype Combinations / Total Grid Cells) × 100%",
    "example": "• Monohybrid (Aa × Aa): 25% AA, 50% Aa, 25% aa (75% dominant, 25% recessive).\n• Dihybrid (AaBb × AaBb): 16-cell grid producing classic 9:3:3:1 phenotypic distribution.\n• Test Cross (Aa × aa): 50% Aa, 50% aa (1:1 ratio).\n• Blood Type (AO × BO): 25% AB, 25% AO (Type A), 25% BO (Type B), 25% OO (Type O).",
    "whenToUse": "Essential for genetics problem solving, Mendelian inheritance analysis, studying codominance/blood types, and predicting trait transmission in biology.",
    "faq": [
      {
        "q": "What is the difference between Genotype and Phenotype?",
        "a": "Genotype refers to the actual genetic allele makeup (the letters, like Aa). Phenotype refers to the physical expression or trait (like dominant vs recessive trait)."
      }
    ]
  },
  "percentage-calculator": {
    "whatIsIt": "An academic aggregate percentage calculator designed to compute your total overall percentage across multiple subjects, tests, or assignments.",
    "formula": "Overall Percentage = (Sum of Obtained Marks / Sum of Total Marks) × 100",
    "howToUse": "Each row represents a single subject or exam. Optionally enter the subject name, then input the marks you obtained alongside the total possible marks for that test. Click 'Add Subject' to include more exams. The calculator aggregates all your entries to find your cumulative percentage.",
    "example": "If you scored 45/50 in Math and 80/100 in History, the calculator sums your obtained marks (125) and total marks (150). It then calculates (125 / 150) × 100 to yield a final aggregate score of 83.33%.",
    "commonMistakes": "Averaging the percentages of individual classes rather than aggregating the raw marks. If you score 10/10 (100%) and 50/100 (50%), your overall grade is 60/110 (54.5%), NOT the simple average of 75%. This calculator correctly aggregates the raw marks to prevent this mathematical error."
  },
  "percentage-change": {
    "whatIsIt": "Calculates the percentage increase or decrease between two numbers. It clearly indicates whether the change is positive (growth) or negative (decay).",
    "formula": "Percentage Change = [(New Value - Old Value) / |Old Value|] × 100",
    "example": "If a shirt's price drops from $40 to $30: [(30 - 40) / 40] × 100 = -25% (a 25% decrease).",
    "whenToUse": "Used extensively in finance (profit/loss margins), physics (percent error), and economics (inflation rates)."
  },
  "fraction-calculator": {
    "whatIsIt": "A tool designed to instantly add, subtract, multiply, and divide fractions. It automatically simplifies the result and provides the decimal equivalent.",
    "howToUse": "Enter your first fraction (numerator on top, denominator on bottom), select an operator (+, -, ×, ÷), and enter your second fraction.",
    "example": "To add 1/2 and 1/3: 1/2 + 1/3 = (3/6) + (2/6) = 5/6.",
    "whenToUse": "Ideal for checking math homework, scaling recipes, or working with structural measurements."
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
  "projectile-motion-calculator": {
    "whatIsIt": "Projectile motion describes the two-dimensional curved path of an object launched into a uniform gravitational field. In ideal projectile mechanics, gravity acts as the sole downward acceleration while air resistance is considered negligible. Because gravitational acceleration operates exclusively in the vertical axis, the motion decomposes into two completely independent, simultaneous kinematic systems: uniform constant-velocity motion along the horizontal axis, and constant-acceleration free-fall along the vertical axis.",
    "howToUse": "Enter the initial launch velocity (v₀) and the launch angle (θ) measured upward from the horizontal ground plane. The calculator evaluates the independent horizontal and vertical components:\n1. Velocity Decomposition: Resolves initial velocity into horizontal velocity v₀x = v₀·cos(θ) and vertical velocity v₀y = v₀·sin(θ).\n2. Time of Flight: Calculates total flight duration until returning to the launch elevation: T = (2·v₀y)/g.\n3. Maximum Height: Determines the peak vertical apex attained above the launch plane: H = (v₀y)²/(2g).\n4. Horizontal Range: Computes total horizontal distance traveled on level ground: R = v₀x·T = (v₀²·sin(2θ))/g.",
    "formula": "Velocity Decomposition (Launch Angle θ above horizontal):\nv₀x = v₀ · cos(θ)\nv₀y = v₀ · sin(θ)\n\nHorizontal Motion (a_x = 0, vx is constant):\nx(t) = x₀ + v₀x · t\n\nVertical Motion (a_y = -g, constant gravitational acceleration):\nv_y(t) = v₀y - g · t\ny(t) = y₀ + v₀y · t - (1/2)g · t²\n\nLevel-Ground Trajectory (y₀ = y_final):\nTime of Flight: T = (2 · v₀ · sin(θ)) / g\nMaximum Height: H = (v₀ · sin(θ))² / (2g)\nHorizontal Range: R = (v₀² · sin(2θ)) / g",
    "variables": {
      "v₀ (Initial Velocity)": "Magnitude of launch velocity at t = 0 (m/s, km/h, or ft/s).",
      "θ (Launch Angle)": "Trajectory angle measured relative to the horizontal ground plane (0° ≤ θ ≤ 90°).",
      "v₀x (Horizontal Velocity)": "Constant horizontal velocity component: v₀x = v₀ · cos(θ).",
      "v₀y (Vertical Velocity)": "Initial upward vertical velocity component: v₀y = v₀ · sin(θ).",
      "g (Gravitational Acceleration)": "Standard acceleration due to Earth's gravity: 9.80665 m/s² (or 32.174 ft/s²).",
      "H (Maximum Height)": "Peak vertical elevation attained above the initial launch position (at apex v_y = 0).",
      "R (Horizontal Range)": "Total horizontal distance traversed prior to returning to the original launch elevation."
    },
    "example": "A projectile is launched from ground level at v₀ = 20 m/s at an angle θ = 30° above the horizontal across level ground (g = 9.8 m/s²):\n\nStep 1: Decompose initial velocity into orthogonal components:\n  v₀x = 20 × cos(30°) = 20 × 0.8660 ≈ 17.32 m/s\n  v₀y = 20 × sin(30°) = 20 × 0.5000 = 10.00 m/s\n\nStep 2: Calculate total time of flight (T):\n  T = (2 × v₀y) / g = (2 × 10.0) / 9.8 ≈ 2.04 s\n\nStep 3: Calculate maximum height attained at apex (H):\n  At the highest point, vertical velocity v_y = 0.\n  H = (v₀y)² / (2g) = (10.0)² / (2 × 9.8) = 100 / 19.6 ≈ 5.10 m\n\nStep 4: Calculate horizontal range (R):\n  R = v₀x × T = 17.32 m/s × 2.04 s ≈ 35.35 m\n  (Using the range formula: R = [20² × sin(2 × 30°)] / 9.8 = [400 × sin(60°)] / 9.8 = [400 × 0.8660] / 9.8 ≈ 35.35 m)\n\nSummary: The projectile reaches a peak height of 5.10 m and lands 35.35 m downrange after 2.04 seconds.",
    "whenToUse": "Essential in classical mechanics, ballistics engineering, athletic trajectory optimization (punting footballs, golf drives, basketball arcs), and civil artillery safety clearance.",
    "commonMistakes": "1. Calculator in Radian Mode: Entering 30° into a trigonometric function expecting radians yields sin(30 rad) ≈ -0.988, creating absurd negative heights.\n2. Mixing Horizontal and Vertical Components: Substituting gravitational acceleration g into horizontal distance equations (horizontal motion has zero acceleration, a_x = 0).\n3. Forgetting the Sign of Gravity: Using +g in vertical position equations causes the projectile to accelerate upward indefinitely instead of forming a downward parabola.\n4. Apex Velocity Confusion: Assuming total velocity is zero at the peak. Vertical velocity is zero (v_y = 0), but horizontal velocity remains constant (v_x = v₀x), meaning total speed is minimized at apex, not zero.\n5. Misapplying the Level-Ground Range Formula: The formula R = v₀²sin(2θ)/g strictly assumes launch elevation equals landing elevation (y₀ = y_final = 0). When firing off a cliff or toward an elevated target, you must solve the full quadratic kinematic equation for time of flight.",
    "faq": [
      {
        "q": "What launch angle achieves maximum horizontal range?",
        "a": "On level ground in a vacuum, 45° maximizes range because sin(2 × 45°) = sin(90°) = 1. If launch and landing elevations differ, or if air resistance is present, the optimal launch angle drops below 45°."
      },
      {
        "q": "Why is ideal projectile motion independent of mass?",
        "a": "By Newton's second law and the equivalence principle, the gravitational force F = mg equals ma, which simplifies to a = g. All objects experience identical gravitational acceleration regardless of mass when air drag is neglected."
      }
    ]
  },
  "molarity-calculator": {
    "whatIsIt": "Computes the molar concentration of a solute in a solution.",
    "formula": "M = n / V",
    "variables": {
      "M": "Molarity (mol/L)",
      "n": "Moles of solute",
      "V": "Volume of solution in liters"
    },
    "whenToUse": "Used in wet-lab chemistry to prepare solutions of specific concentrations."
  },
  "dilution-calculator": {
    "whatIsIt": "The dilution equation (C₁V₁ = C₂V₂) governs the preparation of a less concentrated solution from a concentrated stock solution. Based on the fundamental Law of Conservation of Solute, adding pure solvent increases the total solution volume while the total mass or moles of dissolved solute remains strictly unchanged, causing concentration to decrease proportionally.",
    "howToUse": "Enter any three known parameters among Initial Concentration (C₁), Initial Volume (V₁), Final Concentration (C₂), and Final Volume (V₂). The calculator solves algebraically for the remaining unknown parameter.",
    "formula": "Conservation of Solute Equation:\nC₁ · V₁ = C₂ · V₂  (or M₁ · V₁ = M₂ · V₂)\n\nSolvent Addition Relationship:\nV_solvent = V₂ - V₁",
    "variables": {
      "C₁ (Initial Concentration)": "Concentration of the original stock solution (e.g., M, mM, g/L, or %).",
      "V₁ (Initial Stock Volume)": "Volume of concentrated stock solution required to supply the needed solute.",
      "C₂ (Final Concentration)": "Desired target concentration of the diluted working solution.",
      "V₂ (Final Total Volume)": "Total final volume of the completed diluted solution.",
      "V_solvent (Volume Added)": "Volume of pure solvent (water or buffer) added to achieve total volume V₂: V_solvent = V₂ - V₁."
    },
    "example": "Prepare 500 mL of 0.1 M hydrochloric acid (HCl) working solution from a 12 M concentrated stock:\n\nStep 1: Identify given quantities and unknown:\n  C₁ = 12 M (stock concentration)\n  C₂ = 0.1 M (desired target concentration)\n  V₂ = 500 mL (desired total final volume)\n  V₁ = ? (volume of stock needed)\n\nStep 2: Solve the dilution equation for stock volume V₁:\n  V₁ = (C₂ × V₂) / C₁\n  V₁ = (0.1 M × 500 mL) / 12 M\n  V₁ = 50 / 12 ≈ 4.17 mL\n\nStep 3: Calculate volume of solvent to add:\n  V_water = V₂ - V₁ = 500 mL - 4.17 mL = 495.83 mL\n\nLaboratory Procedure: Pipette exactly 4.17 mL of 12 M HCl into a volumetric flask partially filled with approximately 300 mL of distilled water. Swirl gently to mix, then bring the total volume up to the 500 mL graduation mark with distilled water.",
    "whenToUse": "Standard protocol across chemistry and biological laboratories, including preparing buffer solutions, microbiological serial dilutions, analytical standard calibration curves, and pharmaceutical drug dosing preparations.",
    "commonMistakes": "1. Confusing Final Volume (V₂) with Volume of Solvent Added: V₂ is the TOTAL volume of the final diluted solution. Adding 500 mL of water to 4.17 mL of stock yields 504.17 mL, causing an inaccurate, over-diluted concentration. Always dilute TO the final volume (V_solvent = V₂ - V₁).\n2. Inconsistent Units: Multiplying liters on the left side and milliliters on the right side without converting. Concentration and volume units must be identical on both sides of the equation.\n3. Treating Concentration as Solute Amount: Overlooking that doubling volume halves concentration, but does not alter the absolute quantity of solute molecules.\n4. Laboratory Safety Violation (Acid Dilution): Always Add Acid to water (AAA). Never add water to concentrated acid; the extreme exothermic heat of hydration can cause instantaneous boiling, acid splattering, and violent glass fracture.",
    "faq": [
      {
        "q": "Can this formula be used with mass percentage or parts per million (ppm)?",
        "a": "Yes. C₁V₁ = C₂V₂ holds for any concentration units (M, mM, g/L, %, ppm) and volume units (mL, L, μL), as long as the same units are used consistently on both sides."
      },
      {
        "q": "Why are mixed solution volumes sometimes non-additive?",
        "a": "When mixing dissimilar polar liquids (such as ethanol and water), intermolecular hydrogen bonding causes volume contraction. In precise quantitative laboratory chemistry, always dilute to the volumetric mark in a calibrated flask rather than measuring solvent volume independently."
      }
    ]
  },
  "ph-calculator": {
    "whatIsIt": "Determines the acidity or alkalinity of an aqueous solution based on hydrogen ion concentration.",
    "formula": "pH = -log₁₀[H⁺]",
    "whenToUse": "Used for acid-base titrations and environmental water testing."
  },
  "periodic-table": {
    "whatIsIt": "An interactive digital periodic table of elements providing atomic weights, electron configurations, and categorizations.",
    "howToUse": "Click on any element to view its expanded atomic properties.",
    "whenToUse": "The ultimate reference guide for any chemistry homework or balancing equations."
  },
  "bmi-calculator": {
    "whatIsIt": "Calculates Body Mass Index (BMI), a rapid screening tool used to estimate whether a person has a healthy body weight proportional to their height.",
    "howToUse": "Enter your weight and height using either metric or imperial units. The calculator will automatically apply the correct conversion and formula.",
    "commonMistakes": "BMI is only a general screening measure. It does not directly measure body fat percentage and may misclassify athletes with high muscle mass or elderly individuals who have lost muscle mass."
  },
  "date-difference": {
    "whatIsIt": "Calculates the exact chronological difference between two calendar dates, accounting for leap years and varying month lengths.",
    "howToUse": "Pick a start date and an end date.",
    "whenToUse": "Used to determine exact age, contract lengths, or days until a major event."
  },
  "bmr-calculator": {
    "whatIsIt": "Basal Metabolic Rate (BMR) estimates the minimum number of calories your body requires to function at rest (breathing, circulating blood, cellular growth).",
    "formula": "Mifflin-St Jeor Equation: BMR = (10 × weight) + (6.25 × height) - (5 × age) + (s)",
    "variables": {
      "s": "+5 for males, -161 for females"
    },
    "faq": [
      {
        "q": "How is this different from TDEE?",
        "a": "BMR is your baseline. TDEE (Total Daily Energy Expenditure) multiplies your BMR by your physical activity level."
      }
    ]
  },
  "linear-regression-calculator": {
    "whatIsIt": "Fits a straight line (y = mx + b) through a set of data points to model the linear relationship between two variables.",
    "formula": "ŷ = b₀ + b₁x",
    "variables": {
      "b₀": "y-intercept — the predicted value of y when x = 0",
      "b₁": "Slope — how much y changes for a 1-unit increase in x"
    },
    "whenToUse": "Used in statistics, economics (predicting sales), biology (growth studies), and machine learning baselines.",
    "faq": [
      {
        "q": "What does R² mean?",
        "a": "R² (coefficient of determination) measures how well the regression line fits the data. Values closer to 1 indicate a stronger fit."
      }
    ]
  },
  "poisson-distribution-calculator": {
    "whatIsIt": "Calculates probabilities for the Poisson distribution, which models the probability of a given number of events occurring in a fixed time interval when events happen independently at a constant average rate.",
    "formula": "P(k) = (λᵏ × e⁻ᵟ) / k!",
    "variables": {
      "λ": "Average rate of events per interval",
      "k": "Actual number of events observed",
      "e": "Euler's number (~2.718)"
    },
    "example": "If a call center receives 3 calls per minute on average (λ=3), the probability of exactly 5 calls in a minute is P(5) ≈ 10.1%.",
    "whenToUse": "Used for quality control (defects per unit), epidemiology (disease incidence), and network traffic modeling."
  },
  "binomial-distribution-calculator": {
    "whatIsIt": "Calculates the probability of getting exactly k successes in n independent trials, each with a fixed probability p of success.",
    "formula": "P(k) = C(n,k) × pᵏ × (1-p)^(n-k)",
    "example": "Flipping a fair coin 10 times (n=10, p=0.5), the probability of exactly 7 heads: P(7) ≈ 11.7%.",
    "faq": [
      {
        "q": "When should I use Binomial vs Poisson distribution?",
        "a": "Use Binomial when you have a fixed number of trials (n) and a known success probability (p). Use Poisson when counting events over a continuous interval with no fixed upper limit."
      }
    ]
  },
  "dna-sequence-analyzer": {
    "whatIsIt": "A comprehensive bioinformatics nucleotide analyzer for DNA and RNA sequences, computing sequence complement, reverse complement, mRNA transcription, protein translation, GC content percentage, and estimated melting temperature (Tm).",
    "howToUse": "1. Paste or type any standard DNA sequence (A, T, G, C) or RNA sequence (A, U, G, C).\n2. Click 'Analyze Sequence'.\n3. View sequence metrics (Length, GC%, Tm, Sequence Type) alongside the generated complementary, transcribed, and translated sequences.",
    "formula": "• Watson-Crick Base Pairing: A ↔ T (or U in RNA), G ↔ C\n• Reverse Complement: Complement read in reverse 3'→5' direction\n• Transcription: DNA coding strand T → U\n• Translation: Codon triplet mapping to amino acids via Standard Genetic Code\n• GC Content (%) = ((G + C) / Total Bases) × 100\n• Oligo Tm (<14 nt) = 2(A + T) + 4(G + C) °C\n• Oligo Tm (≥14 nt) = 64.9 + 41 × (G + C - 16.4) / Length °C",
    "example": "For DNA sequence 'ATGCGTACGTAGC': Length = 13 bp, GC Content = 53.8%, Est. Tm = 40.0°C, Complement = 'TACGCATGCATCG', Reverse Complement = 'GCTACGTACGCAT', Transcribed mRNA = 'AUGCGUACGUAGC', Translated Protein = 'MRT*'.",
    "whenToUse": "Essential for molecular biology coursework, PCR primer design, recombinant DNA cloning, genetic code analysis, and bioinformatics research."
  },
  "percentile-calculator": {
    "whatIsIt": "Finds the value below which a given percentage of observations in a group of observations falls.",
    "howToUse": "Paste or type your dataset (comma or space separated) and input the desired percentile (0-100).",
    "commonMistakes": "Do not confuse percentile with percentage score. A score of 80% on a test means you got 80% of the questions right. Being in the 80th percentile means you scored better than 80% of the test-takers."
  },
  "unit-circle": {
    "whatIsIt": "An interactive reference tool displaying the angles (in degrees and radians) and their corresponding trigonometric coordinates (cosine, sine) on a circle with a radius of 1.",
    "howToUse": "Use it to quickly look up exact values for sine, cosine, and tangent for common angles like 30°, 45°, 60°, and 90°.",
    "commonMistakes": "Memorizing the first quadrant is highly recommended. All other quadrants are just sign variations of the first quadrant."
  },
  "age-calculator": {
    "whatIsIt": "Calculates the exact chronological time elapsed between a birth date and a target date in years, months, and days.",
    "howToUse": "Enter the date of birth and the current (or future/past) date to compare against.",
    "commonMistakes": "Leap years are automatically handled by the calculator, meaning calculating day counts manually might differ slightly from this exact output."
  },
  "mitosis-stages": {
    "whatIsIt": "An educational reference detailing the phases of mitosis, the process of somatic cell division resulting in two identical daughter cells.",
    "howToUse": "Review the breakdown of Prophase, Metaphase, Anaphase, and Telophase (PMAT) to study for biology exams.",
    "commonMistakes": "Confusing mitosis with meiosis. Mitosis creates diploid somatic (body) cells, while meiosis creates haploid gametes (sex cells)."
  },
  "rectangle-area-calculator": {
    "whatIsIt": "Computes the 2D space enclosed by a rectangle using its length and width.",
    "formula": "Area = length × width",
    "howToUse": "Input the horizontal length and vertical width. Make sure the units match.",
    "commonMistakes": "If you need to convert units (e.g., feet to inches), do it BEFORE calculating the area, otherwise you must square the conversion factor."
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
      {
        "q": "Can I compute higher-order derivatives?",
        "a": "Yes – select the appropriate mode or repeatedly apply the second derivative feature."
      },
      {
        "q": "How do I use implicit differentiation?",
        "a": "Enter an equation like x^2 + y^2 = 1 and choose the implicit mode to get dy/dx."
      }
    ]
  },
  "pomodoro-timer": {
    "whatIsIt": "A Pomodoro timer helps you work in focused 25‑minute intervals followed by short breaks, a proven technique for improving concentration and productivity.",
    "howToUse": "Choose a work interval (default 25 min) and break lengths (short 5 min, long 15 min). Click **Start** to begin a work session; the timer counts down and automatically switches to break mode. Use **Pause**/**Reset** as needed. After four work sessions the long break is suggested.",
    "example": "Study for a physics chapter: start a 25‑min work session, focus solely on reading and notes. When the timer signals a break, stand up, stretch, and relax for 5 minutes before resuming.",
    "faq": [
      {
        "q": "Can I change the interval lengths?",
        "a": "Yes – click **Settings**, edit the minutes for work, short break, or long break, then press **Apply Settings**."
      },
      {
        "q": "Does the timer keep running if I switch tabs?",
        "a": "The timer runs in the browser regardless of tab focus; it will continue counting down."
      }
    ]
  },
  "base-conversion-calculator": {
    "whatIsIt": "A comprehensive positional numeral system converter that translates numbers between binary (base-2), octal (base-8), decimal (base-10), and hexadecimal (base-16). It evaluates arbitrary-precision integers and simultaneously displays the equivalent representation in all four standard computing radices.",
    "howToUse": "1. Enter your integer value in the Number field.\n2. Select the starting base from the 'From Base' dropdown (Decimal, Binary, Octal, or Hexadecimal).\n3. Click 'Convert Base' to instantly see the simultaneous converted values in Binary (base 2), Octal (base 8), Decimal (base 10), and Hexadecimal (base 16).",
    "formula": "Positional Base Conversion to Decimal:\nDecimal = ∑ (digit_i × baseⁱ)\n\nDecimal to Target Base (Repeated Division):\nQuotient = floor(Decimal / base)\nRemainder = Decimal mod base (recorded right-to-left, with 10=A, 11=B, 12=C, 13=D, 14=E, 15=F)",
    "variables": {
      "digit_i": "The face value of each digit at position i (0 to base - 1)",
      "baseⁱ": "The positional place weight for radix 'base' at index i (e.g. 2⁰, 2¹, 2² for binary; 16⁰, 16¹, 16² for hex)"
    },
    "example": "Converting Hexadecimal '2A' to other bases:\n• Decimal: (2 × 16¹) + (10 × 16⁰) = 32 + 10 = 42\n• Binary: 2 = 0010, A = 1010 → 101010\n• Octal: 42 in octal = 52 (5×8¹ + 2×8⁰ = 42)\n\nConverting Decimal 255:\n• Binary: 11111111\n• Octal: 377\n• Hexadecimal: FF",
    "whenToUse": "Essential in computer science, software engineering, low-level systems programming, networking (IP subnetting, MAC addresses), bitwise logic operations, and microcontroller register manipulation.",
    "commonMistakes": "1. Entering digits outside the selected radix (e.g., entering '2' in Binary, '8' in Octal, or 'G' in Hexadecimal).\n2. Confusing bit-length with numerical magnitude (e.g., leading zeros in binary do not change decimal value).\n3. Forgetting that Hexadecimal digits A through F represent numeric values 10 through 15.",
    "faq": [
      {
        "q": "Why are binary and hexadecimal so closely related in computing?",
        "a": "Because 16 is 2⁴, exactly four binary bits (a nibble) correspond to one hexadecimal digit, allowing compact, human-readable representations of raw binary memory."
      },
      {
        "q": "Does this converter support very large numbers?",
        "a": "Yes, calculations use arbitrary-precision BigInt integers, preventing standard 53-bit floating-point rounding errors on large inputs."
      }
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
      {
        "q": "Are imperial and US customary units identical?",
        "a": "For length and weight (pounds, feet, inches), they are effectively identical. For volume (gallons, pints, fluid ounces), British Imperial and US Customary units differ."
      }
    ]
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
      {
        "q": "Are the endpoints included?",
        "a": "Yes, both the minimum and maximum numbers specified in the range are inclusive and have an equal chance of being generated."
      }
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
      {
        "q": "What does a negative Q value mean?",
        "a": "A negative Q indicates that the process is exothermic—the substance released heat into its surroundings, causing its temperature to decrease."
      }
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
      {
        "q": "Why is RREF preferred over Gaussian elimination with back-substitution?",
        "a": "RREF produces a completely decoupled diagonal identity block for basic variables, reading off solutions directly without requiring manual algebraic substitution."
      },
      {
        "q": "Can a matrix have more than one RREF?",
        "a": "No. While a matrix has infinitely many valid Row Echelon Forms (REF) depending on operation choices, its Reduced Row Echelon Form (RREF) is proven strictly unique."
      }
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
      {
        "q": "Why is the constant of integration (+C) omitted in definite integrals?",
        "a": "Because [F(b) + C] - [F(a) + C] = F(b) - F(a) + C - C = F(b) - F(a). The arbitrary constant C subtracts to zero identically."
      },
      {
        "q": "Can a definite integral equal zero or a negative value?",
        "a": "Yes. If the area beneath the x-axis exceeds the area above it on [a, b], the definite integral is negative. If positive and negative areas balance perfectly (e.g. ∫[-π to π] sin(x) dx), the integral equals zero."
      }
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
      {
        "q": "Does the calculator work offline?",
        "a": "All calculations are performed locally in the browser; no data is sent to a server."
      },
      {
        "q": "Can I change the number of intervals?",
        "a": "The implementation uses a fixed 10 000 intervals for a good balance of speed and accuracy."
      }
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
      {
        "q": "What are the 5 mandatory assumptions of Hardy-Weinberg equilibrium?",
        "a": "1. No mutation (no new alleles formed). 2. Completely random mating (no assortative mating or sexual selection). 3. No gene flow (closed population with zero immigration or emigration). 4. Infinite population size (eliminating sampling error and genetic drift). 5. No natural selection (all genotypes possess identical survival and reproductive fitness)."
      },
      {
        "q": "Why must we always calculate q first?",
        "a": "Because the recessive phenotype is the only phenotype whose underlying genotype is unambiguous (aa = q²). The dominant phenotype contains a mixture of AA (p²) and Aa (2pq), preventing direct extraction of p without first solving for q."
      }
    ]
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
  },
  "ohms-law-calculator": {
    "whatIsIt": "Calculates voltage (V), current (I), or resistance (R) in a linear direct-current electrical circuit using Ohm's Law.",
    "howToUse": "Select the variable to solve for and input the two known electrical parameters. Supports standard units including V, mV, kV, A, mA, Ω, kΩ, and MΩ.",
    "formula": "V = I · R   |   I = V / R   |   R = V / I",
    "variables": {
      "V": "Electrical potential difference (voltage) in volts (V).",
      "I": "Electric current flow in amperes (A).",
      "R": "Electrical resistance in ohms (Ω)."
    },
    "example": "If a 12 V battery is connected across a 4 Ω resistor: Current I = 12 V / 4 Ω = 3.0 A.",
    "whenToUse": "Essential for electronics prototyping, sizing current-limiting resistors for LEDs, electrical troubleshooting, and physics labs."
  },
  "coulombs-law-calculator": {
    "whatIsIt": "Calculates the magnitude of the electrostatic force of attraction or repulsion between two point charges separated by a distance.",
    "howToUse": "Enter charge 1 (q₁), charge 2 (q₂), and the separation distance (r). Supports coulombs (C), microcoulombs (μC), and nanocoulombs (nC).",
    "formula": "F = k_e · |q₁ · q₂| / r²",
    "variables": {
      "F": "Electrostatic force in newtons (N).",
      "k_e": "Coulomb's electrostatic constant ≈ 8.98755 × 10⁹ N·m²/C².",
      "q₁, q₂": "Magnitudes of the two point charges in coulombs (C).",
      "r": "Straight-line center-to-center separation distance in meters (m)."
    },
    "example": "Two +2 μC charges separated by 0.5 m: F = (8.99×10⁹) · (2×10⁻⁶ · 2×10⁻⁶) / (0.5)² = (8.99×10⁹ · 4×10⁻¹²) / 0.25 = 0.1438 N (repulsive).",
    "whenToUse": "Fundamental in electrostatics, atomic structure physics, and calculating intermolecular bonding forces."
  },
  "gravitational-force-calculator": {
    "whatIsIt": "Calculates the mutual attractive gravitational force between two masses based on Newton's Law of Universal Gravitation.",
    "howToUse": "Input the mass of the first body (m₁), mass of the second body (m₂), and the center-to-center distance (r).",
    "formula": "F = G · (m₁ · m₂) / r²",
    "variables": {
      "F": "Gravitational attraction force in newtons (N).",
      "G": "Universal gravitational constant ≈ 6.67430 × 10⁻¹¹ N·m²/kg².",
      "m₁, m₂": "Masses of the interacting bodies in kilograms (kg).",
      "r": "Center-to-center separation distance in meters (m)."
    },
    "example": "Earth (5.972×10²⁴ kg) and Moon (7.348×10²² kg) separated by 3.844×10⁸ m: F = (6.674×10⁻¹¹ · 5.972×10²⁴ · 7.348×10²²) / (3.844×10⁸)² ≈ 1.98 × 10²⁰ N.",
    "whenToUse": "Used in astrophysics, satellite orbit planning, celestial mechanics, and planetary physics."
  },
  "snells-law-calculator": {
    "whatIsIt": "Calculates refraction angles and refractive indices for light rays crossing the boundary between two optical media.",
    "howToUse": "Enter the refractive index of medium 1 (n₁), angle of incidence (θ₁), and refractive index of medium 2 (n₂). The calculator solves for the angle of refraction (θ₂).",
    "formula": "n₁ · sin(θ₁) = n₂ · sin(θ₂)   ⟹   θ₂ = arcsin[(n₁ / n₂) · sin(θ₁)]",
    "variables": {
      "n₁": "Refractive index of the incident medium (e.g., air ≈ 1.0003).",
      "θ₁": "Angle of incidence measured from the surface normal (degrees).",
      "n₂": "Refractive index of the refracting medium (e.g., water ≈ 1.333, glass ≈ 1.5).",
      "θ₂": "Angle of refraction measured from the surface normal (degrees)."
    },
    "example": "Light passing from air (n₁ = 1.0) into water (n₂ = 1.33) at 30°: sin(θ₂) = (1.0 / 1.33) · sin(30°) = 0.5 / 1.33 ≈ 0.3759 ⟹ θ₂ ≈ 22.08°.",
    "whenToUse": "Essential for optical lens design, fiber optic communications, prism dispersion, and calculating critical angles for total internal reflection."
  },
  "henderson-hasselbalch": {
    "whatIsIt": "Calculates the pH of a chemical buffer solution from the acid dissociation constant (pKa) and the molar ratio of conjugate base to weak acid.",
    "howToUse": "Enter the pKa of the weak acid, molar concentration of the conjugate base [A⁻], and concentration of the undissociated weak acid [HA].",
    "formula": "pH = pKa + log₁₀([A⁻] / [HA])",
    "variables": {
      "pH": "Acidity of the buffer solution.",
      "pKa": "Negative logarithm of the acid dissociation constant (-log₁₀ Ka).",
      "[A⁻]": "Molar concentration of the conjugate base salt.",
      "[HA]": "Molar concentration of the weak acid."
    },
    "example": "An acetic acid buffer with pKa = 4.76, [CH₃COO⁻] = 0.20 M, and [CH₃COOH] = 0.10 M: pH = 4.76 + log₁₀(0.20 / 0.10) = 4.76 + 0.301 = 5.06.",
    "whenToUse": "Essential in biochemistry for preparing biological buffers (e.g., PBS, Tris), analyzing blood bicarbonate systems, and pharmacology.",
    "commonMistakes": "1. Inverting the ratio (placing acid in numerator instead of base).\n2. Using the equation for strong acids where buffer equilibrium approximations fail."
  },
  "nernst-equation": {
    "whatIsIt": "Calculates the non-standard electrical reduction potential of an electrochemical cell as a function of temperature and reactant/product concentrations.",
    "howToUse": "Input the standard cell potential (E°), number of transferred electrons (n), reaction quotient (Q), and temperature (T, default 298.15 K).",
    "formula": "E = E° - (RT / nF) · ln(Q)   or at 25°C: E = E° - (0.05916 / n) · log₁₀(Q)",
    "variables": {
      "E": "Non-standard cell potential in volts (V).",
      "E°": "Standard reduction potential in volts (V).",
      "R": "Ideal gas constant (8.314 J/(mol·K)).",
      "T": "Absolute temperature in Kelvin (K).",
      "n": "Moles of electrons transferred in the balanced redox equation.",
      "F": "Faraday constant ≈ 96,485 C/mol e⁻.",
      "Q": "Reaction quotient ([Products]ᵖ / [Reactants]ʳ)."
    },
    "example": "For a 2-electron cell (E° = +1.10 V) with Q = 0.01 at 25°C: E = 1.10 - (0.0592 / 2) · log₁₀(0.01) = 1.10 - (0.0296 · (-2)) = 1.10 + 0.0592 = 1.159 V.",
    "whenToUse": "Used in battery engineering (discharge voltage curves), biological membrane potentials, corrosion science, and potentiometric sensors."
  },
  "percent-yield-calculator": {
    "whatIsIt": "Computes the percentage efficiency of a chemical reaction by comparing the actual recovered product mass against the theoretical maximum yield.",
    "howToUse": "Enter the actual mass of product recovered in the lab and the theoretical yield calculated from stoichiometry.",
    "formula": "Percent Yield = (Actual Yield / Theoretical Yield) × 100%",
    "variables": {
      "Actual Yield": "The measured mass of product obtained from laboratory experiment (g).",
      "Theoretical Yield": "The maximum calculated product mass based on the limiting reagent (g)."
    },
    "example": "If stoichiometry predicts 25.0 g of aspirin, but the experiment recovers 21.5 g: Percent Yield = (21.5 / 25.0) × 100% = 86.0%.",
    "whenToUse": "Essential in synthetic chemistry labs, pharmaceutical manufacturing quality control, and industrial process optimization."
  },
  "truth-table-generator": {
    "whatIsIt": "Generates comprehensive truth tables for compound boolean and propositional logic statements across all possible input truth-value combinations.",
    "howToUse": "Enter propositional variables (e.g., P, Q, R) connected by logical operators (AND/∧, OR/∨, NOT/¬, IMPLIES/→, IFF/↔). The tool builds the step-by-step matrix evaluation.",
    "formula": "Total Table Rows = 2ⁿ, where n is the number of distinct boolean variables.",
    "variables": {
      "P, Q, R": "Propositional truth variables (True = 1 / T, False = 0 / F).",
      "∧ (AND)": "True only if both operands are true.",
      "∨ (OR)": "True if at least one operand is true.",
      "¬ (NOT)": "Inverts the truth value.",
      "→ (Conditional)": "False only when the antecedent is True and the consequent is False.",
      "↔ (Biconditional)": "True when both operands share the identical truth value."
    },
    "example": "For 2 variables (P, Q), the table has 2² = 4 rows: (T,T), (T,F), (F,T), (F,F). For P → Q, output values are T, F, T, T.",
    "whenToUse": "Used in discrete mathematics, computer science (digital circuit design, boolean minimization), philosophy logic, and formal proof verification."
  },
  "weighted-grade-calculator": {
    "whatIsIt": "Calculates composite overall academic course grades when different assignment categories (homework, quizzes, midterms, finals) contribute different percentage weights.",
    "howToUse": "Enter each assignment category's score percentage alongside its corresponding weight percentage (e.g., Homework: 95% at 20% weight; Midterm: 82% at 30% weight; Final: 88% at 50% weight).",
    "formula": "Weighted Grade = Σ (Grade_i × Weight_i) / Σ Weight_i",
    "variables": {
      "Grade_i": "Your earned percentage score in category i.",
      "Weight_i": "The proportional syllabus percentage weight allocated to category i.",
      "Σ Weight_i": "Total weight sum (normally 100%)."
    },
    "example": "If Homework (90%) is worth 20%, Midterm (80%) is worth 30%, and Final (85%) is worth 50%: Weighted Grade = (90·20 + 80·30 + 85·50) / 100 = (1800 + 2400 + 4250) / 100 = 84.50%.",
    "whenToUse": "Indispensable throughout the semester to monitor actual syllabus standing and forecast final GPA impact."
  },
  "final-grade-calculator": {
    "whatIsIt": "Calculates the exact minimum score a student must achieve on their final exam to secure their desired target overall grade in a course.",
    "howToUse": "Enter your target overall course grade (%), your current standing (%), and the weight percentage that the final exam carries on the syllabus.",
    "formula": "Required Exam Score = [Target Grade - Current Grade × (1 - Final Weight / 100)] / (Final Weight / 100)",
    "variables": {
      "Target Grade": "The minimum final course percentage required (e.g., 90% for an A, 80% for a B).",
      "Current Grade": "Your current accumulated grade percentage before taking the final.",
      "Final Weight": "The percentage weight of the final exam in the course syllabus (e.g., 30%)."
    },
    "example": "If your current grade is 82%, your target grade is 85%, and the final exam is worth 25% (0.25): Required Exam Score = [85 - 82 · (1 - 0.25)] / 0.25 = [85 - 61.5] / 0.25 = 23.5 / 0.25 = 94.0%.",
    "whenToUse": "Essential during finals week to prioritize study hours and determine whether target course letter grades are mathematically achievable."
  },
  "words-to-pages": {
    "whatIsIt": "The Words to Pages Converter translates word counts into approximate printed or digital page counts based on typography settings including font family, font size, margins, and line spacing (single, 1.5, or double spaced). It also converts page counts back to estimated words and calculates estimated reading and speaking durations.",
    "howToUse": "1. Select your conversion direction: 'Words → Pages' or 'Pages → Words'.\n2. Enter your word or page count, or choose a quick preset (Academic Double, Single Spaced, College Essay, or Book Manuscript).\n3. Adjust line spacing (single, 1.5, double), font family, font size (10pt, 11pt, 12pt), and margin sizes.\n4. View the calculated page count, estimated reading/speaking times, and formatting comparison table.",
    "formula": "Estimated Pages = Total Word Count / Estimated Words Per Page\nEstimated Words Per Page = Base WPP × Font Factor × Size Factor × Margin Factor",
    "variables": {
      "Base WPP": "Baseline word capacity per standard page (500 for single spaced, 250 for double spaced with 12pt Times New Roman).",
      "Font Factor": "Relative horizontal glyph width multiplier (e.g., Courier takes ~80% more space than Times New Roman).",
      "Size Factor": "Scaling factor for 10pt (1.25x words), 11pt (1.10x), or 12pt (1.0x).",
      "Margin Factor": "Scaling factor for standard 1.0\" (1.0x), narrow 0.5\" (1.30x), or wide 1.5\" (0.75x) margins."
    },
    "example": "A 2,000-word essay formatted in 12pt Times New Roman, double-spaced with 1-inch margins yields: 2,000 / 250 = 8.0 pages. At 1.5 spacing (~333 wpp), it is ~6.0 pages. Single-spaced (~500 wpp), it is ~4.0 pages.",
    "whenToUse": "Use when planning academic essays, research papers, book manuscripts, articles, or speeches with strict page limits or presentation time constraints.",
    "faq": [
      {
        "q": "How many pages is 1,000 words?",
        "a": "1,000 words is approximately 4 pages double-spaced or 2 pages single-spaced when using standard 12pt Times New Roman font and 1-inch margins."
      },
      {
        "q": "How long does it take to read 1,000 words?",
        "a": "At an average silent reading speed of 230 words per minute (wpm), 1,000 words takes about 4 minutes and 20 seconds to read."
      }
    ]
  },
  "compound-interest-calculator": {
    "whatIsIt": "The Compound Interest Calculator calculates the exponential growth of an investment or savings account over time when earned interest is continuously or periodically reinvested to earn additional interest. It supports regular periodic contributions (monthly or annual) and multiple compounding frequencies.",
    "howToUse": "1. Enter your starting Principal amount.\n2. Input the expected Annual Interest Rate (%).\n3. Specify any regular additional contributions and select contribution frequency (Monthly or Annually).\n4. Choose the investment horizon (years) and compounding frequency (Monthly, Quarterly, Annually, Daily, or Continuously).\n5. View your total future balance, principal vs interest distribution, and year-by-year growth table.",
    "formula": "• Without Deposits: A = P(1 + r/n)^(nt)\n• Continuous Compounding: A = P · e^(rt)\n• With Regular Deposits (PMT): A = P(1 + r/n)^(nt) + PMT · [((1 + r/n)^(nt) - 1) / (r/n)]",
    "variables": {
      "A": "Final future balance including principal and accumulated compound interest.",
      "P": "Initial principal deposit.",
      "r": "Nominal annual interest rate in decimal form (e.g., 7% = 0.07).",
      "n": "Number of times interest is compounded per year (12 for monthly, 4 for quarterly, 1 for annually).",
      "t": "Total investment duration in years.",
      "PMT": "Regular recurring periodic deposit amount."
    },
    "example": "Investing $10,000 at 7% annual interest compounded monthly for 10 years with $200 monthly contributions yields a final future balance of $52,389.14 (Principal invested: $34,000.00, Compound Interest earned: $18,389.14).",
    "whenToUse": "Essential for retirement planning, student loan repayment strategy, index fund investment forecasting, college fund savings, and evaluating savings accounts or certificates of deposit (CDs).",
    "faq": [
      {
        "q": "What is the difference between simple and compound interest?",
        "a": "Simple interest is calculated solely on the original principal balance. Compound interest is calculated on both the original principal and accumulated interest from previous periods, leading to exponential growth over time."
      },
      {
        "q": "What is the Rule of 72?",
        "a": "The Rule of 72 is a quick estimation shortcut: divide 72 by your annual interest rate to find approximately how many years it will take for your money to double (e.g., at 8%, 72 / 8 = ~9 years)."
      }
    ]
  },
  "simple-interest-calculator": {
    "whatIsIt": "The Simple Interest Calculator computes fixed interest earned on investments or charged on short-term loans, promissory notes, and fixed-rate bonds where interest is earned purely on the initial principal. It also functions as a bidirectional algebraic solver to find Principal, Annual Rate, or Time Duration given other known variables.",
    "howToUse": "1. Choose your calculation mode: 'Find Interest & Total', 'Find Principal', 'Find Rate', or 'Find Time'.\n2. Enter the known financial values and select the time unit (Years, Months, or Days).\n3. Click Calculate to see the interest amount, total maturity payout, and detailed step-by-step mathematical substitution.",
    "formula": "• Simple Interest: I = (P × R × T) / 100\n• Total Maturity Amount: A = P + I\n• Principal Solver: P = (100 × I) / (R × T)\n• Rate Solver: R = (100 × I) / (P × T)\n• Time Solver: T = (100 × I) / (P × R)",
    "variables": {
      "I": "Total simple interest earned or owed ($ / ₹ / €).",
      "P": "Original principal amount borrowed or invested.",
      "R": "Annual nominal interest rate percentage (%).",
      "T": "Time duration of the loan or deposit converted into years."
    },
    "example": "Borrowing $5,000 at 6% annual simple interest for 3 years: I = (5000 × 6 × 3) / 100 = $900.00. Total maturity repayment amount = $5,000 + $900 = $5,900.00.",
    "whenToUse": "Ideal for short-term student loans, auto loans, personal promissory agreements, basic banking problems, certificates of deposit with fixed simple yields, and financial math coursework.",
    "faq": [
      {
        "q": "How is simple interest calculated when time is in months or days?",
        "a": "Convert the time to years first: divide months by 12 (e.g., 6 months = 0.5 years) or divide days by 365 (e.g., 90 days = 90/365 ≈ 0.2466 years)."
      },
      {
        "q": "When is simple interest used in real life?",
        "a": "Simple interest is standard for short-term personal loans, certain federal student loans (subsidized/unsubsidized standard amortizations), auto installment loans, and treasury bills."
      }
    ]
  },
  "z-score-calculator": {
    "whatIsIt": "The Z-Score Calculator determines the standard score (number of standard deviations a data point lies above or below the mean) in a normal distribution. It computes left-tail, right-tail, two-tailed P-values, and percentile ranks, and can reverse-calculate raw scores from target Z-values.",
    "howToUse": "1. Select your mode: 'Raw Score → Z-Score', 'Z-Score → P-Value / Percentile', or 'Z-Score → Raw Score'.\n2. Enter the raw score (x), population mean (μ), and standard deviation (σ).\n3. Click Calculate to view the standard Z-score, the visual normal curve indicator, and complete tail probability areas.",
    "formula": "• Z-Score: Z = (x - μ) / σ\n• Raw Score from Z: x = μ + (Z × σ)\n• Cumulative Probability (Percentile): Φ(z) = P(Z < z) = ∫_{-∞}^{z} (1/√(2π)) e^(-t²/2) dt",
    "variables": {
      "x": "Raw observed score or measurement value.",
      "μ (Mu)": "Population or dataset arithmetic mean.",
      "σ (Sigma)": "Population standard deviation (must be strictly positive, σ > 0).",
      "Z": "Standard score representing distance from mean in units of standard deviations.",
      "P(Z < z)": "Left-tail cumulative probability area (percentile rank)."
    },
    "example": "On an exam with a mean of μ = 75 and standard deviation of σ = 10, a student scoring x = 85 has a Z-score of: Z = (85 - 75) / 10 = +1.00. The corresponding percentile is 84.13% (P(Z < 1.0) = 0.8413).",
    "whenToUse": "Widely used in statistics, psychology, standardized testing (SAT, GRE, ACT scoring), quality control (Six Sigma), and hypothesis testing (Z-tests).",
    "faq": [
      {
        "q": "What does a negative Z-score mean?",
        "a": "A negative Z-score indicates that the data point lies below the population mean (e.g., Z = -1.5 is 1.5 standard deviations below the mean)."
      },
      {
        "q": "What is the 68-95-99.7 Empirical Rule?",
        "a": "In any standard normal distribution, approximately 68.27% of observations lie within 1 standard deviation (Z = ±1), 95.45% lie within 2 standard deviations (Z = ±2), and 99.73% lie within 3 standard deviations (Z = ±3)."
      }
    ]
  },
  "permutations-and-combinations": {
    "whatIsIt": "The Permutations and Combinations Calculator computes the number of possible arrangements and selections of r items from a set of n items. It supports permutations without repetition (nPr), combinations without repetition (nCr), permutations with repetition (n^r), and combinations with repetition, providing full factorial derivations.",
    "howToUse": "1. Enter the total number of items in the set (n ≥ 0).\n2. Enter the number of items to select or arrange (r ≥ 0).\n3. View the calculated nPr and nCr values, side-by-side comparison table, and step-by-step factorial expansions.",
    "formula": "• Permutations (Order Matters, No Repetition): nPr = n! / (n - r)!\n• Combinations (Order Does NOT Matter, No Repetition): nCr = n! / (r! × (n - r)!)\n• Permutations with Repetition: n^r\n• Combinations with Repetition: (n + r - 1)! / (r! × (n - 1)!)",
    "variables": {
      "n": "Total number of available items in the master set.",
      "r": "Number of items chosen or arranged.",
      "n!": "Factorial of n (n! = n × (n-1) × ... × 2 × 1, with 0! = 1).",
      "nPr": "Permutations count where sequential arrangement matters.",
      "nCr": "Combinations count where selection group matters regardless of order."
    },
    "example": "Selecting and arranging 3 winners (1st, 2nd, 3rd) out of 10 competitors: nPr = 10! / (10 - 3)! = 10 × 9 × 8 = 720 ways. Choosing a 3-person committee from 10 candidates: nCr = 10! / (3! × 7!) = 720 / 6 = 120 ways.",
    "whenToUse": "Essential in discrete mathematics, probability theory, statistics, combinatorics, cryptography, lottery analysis, and computer algorithm design.",
    "faq": [
      {
        "q": "What is the key difference between permutations and combinations?",
        "a": "Order! Permutations apply when sequence or order matters (e.g., race podiums, PIN codes, locker combinations). Combinations apply when order does not matter (e.g., poker hands, committee selections, pizza toppings)."
      },
      {
        "q": "Why is 0! equal to 1?",
        "a": "By mathematical definition and gamma function extension, there is exactly one way to arrange 0 items: the empty set."
      }
    ]
  },
  "prime-factorization-calculator": {
    "whatIsIt": "The Prime Factorization Calculator decomposes any positive integer (N ≥ 2) into its unique constituent prime number building blocks (Fundamental Theorem of Arithmetic). It provides the canonical exponential representation, expanded prime multiplication string, distinct prime factors, total divisor count d(N), and step-by-step trial division steps.",
    "howToUse": "1. Enter any positive integer N ≥ 2 (or pick from sample numbers like 360, 1024, 9973).\n2. Click 'Find Prime Factors'.\n3. View the canonical exponential form (e.g., 2³ × 3² × 5¹), prime/composite status badge, total divisor metrics, and the step-by-step factor division tree.",
    "formula": "• Fundamental Theorem of Arithmetic: N = p₁^(e₁) × p₂^(e₂) × ... × p_k^(e_k)\n• Number of Divisors: d(N) = (e₁ + 1)(e₂ + 1)...(e_k + 1)\n• Sum of Divisors: σ(N) = ∏ [(p_i^(e_i+1) - 1) / (p_i - 1)]",
    "variables": {
      "N": "The composite or prime integer being factorized.",
      "p_i": "Distinct prime factor numbers (e.g., 2, 3, 5, 7, 11...).",
      "e_i": "Multiplicity exponent of prime factor p_i.",
      "d(N)": "Total count of positive integer divisors/factors of N.",
      "σ(N)": "Sum of all positive integer divisors of N."
    },
    "example": "Factorizing 360: 360 / 2 = 180, 180 / 2 = 90, 90 / 2 = 45, 45 / 3 = 15, 15 / 3 = 5, 5 / 5 = 1. Exponential form: 2³ × 3² × 5¹. Total divisors = (3+1)(2+1)(1+1) = 4 × 3 × 2 = 24 divisors.",
    "whenToUse": "Crucial for finding greatest common divisors (GCD), least common multiples (LCM), simplifying fractions, modular arithmetic, RSA cryptography key generation, and number theory studies.",
    "faq": [
      {
        "q": "What is the Fundamental Theorem of Arithmetic?",
        "a": "It states that every integer greater than 1 either is a prime number itself or can be represented as the product of prime numbers in a unique way up to the order of the factors."
      },
      {
        "q": "Is 1 a prime number?",
        "a": "No, 1 is neither prime nor composite by modern mathematical definition because a prime number must have exactly two distinct positive divisors (1 and itself)."
      }
    ]
  },
  "bitwise-calculator": {
    "whatIsIt": "The Bitwise Calculator computes binary and integer bitwise operations including AND (&), OR (|), XOR (^), NOT (~), Left Shift (<<), Right Shift (>>), and Zero-fill Right Shift (>>>). It supports multiple bit widths (8-bit, 16-bit, 32-bit, 64-bit) and displays aligned binary representations for intuitive visual inspection of every bit position.",
    "howToUse": "1. Enter Operand A and Operand B as decimal integers or prefix with 0b for binary or 0x for hexadecimal.\n2. Select your desired bit width (8-bit, 16-bit, 32-bit, or 64-bit).\n3. Click any operation button (AND, OR, XOR, NOT, Left Shift, Right Shift) or view the full side-by-side operations matrix.",
    "formula": "• AND (A & B): 1 only when both corresponding bits are 1.\n• OR (A | B): 1 when at least one corresponding bit is 1.\n• XOR (A ^ B): 1 when bits differ (one is 1, the other is 0).\n• NOT (~A): Inverts all bits (0 becomes 1, 1 becomes 0).\n• Left Shift (A << k): Shifts bits left by k positions, inserting zeros on the right (multiplies by 2^k).\n• Right Shift (A >> k): Shifts bits right by k positions, preserving the sign bit.",
    "variables": {
      "Operand A": "The first input integer (decimal, hex 0x, or binary 0b).",
      "Operand B": "The second input integer or bit shift amount.",
      "Bit Width": "Fixed word size (8, 16, 32, or 64 bits) determining masking and overflow limits.",
      "Mask": "Bitmask (2^width - 1) applied to keep results within the selected integer width."
    },
    "example": "For 8-bit integers A = 12 (00001100) and B = 10 (00001010):\n• A AND B = 8 (00001000)\n• A OR B = 14 (00001110)\n• A XOR B = 6 (00000110)\n• NOT A = 243 (11110011 unsigned 8-bit)\n• A << 2 = 48 (00110000)",
    "whenToUse": "Essential in computer systems programming, embedded microcontrollers, network protocol packet parsing, cryptography, graphics shaders, game development bitmasks, and low-level algorithm optimization.",
    "faq": [
      {
        "q": "Why does bit width matter in bitwise operations?",
        "a": "Bit width defines the number of binary digits allocated. For example, NOT 0 is 255 (0xFF) in 8-bit, but 65535 (0xFFFF) in 16-bit and 4294967295 (0xFFFFFFFF) in 32-bit."
      },
      {
        "q": "What is the difference between arithmetic and logical right shift?",
        "a": "Arithmetic right shift (>>) preserves the sign bit (sign-extension for negative numbers), while logical/zero-fill right shift (>>>) always shifts in zeros from the left regardless of sign."
      }
    ]
  },
  "scientific-notation-calculator": {
    "whatIsIt": "The Scientific Notation Calculator & Converter allows users to perform arithmetic (+, -, ×, ÷) on numbers in scientific form (a × 10^b) and convert seamlessly between standard decimal notation, normalized scientific notation (1 ≤ |a| < 10), and engineering notation (where the exponent b is a multiple of 3).",
    "howToUse": "1. In Converter Mode: Enter any decimal number or scientific notation string (e.g., 6.022e23) to see instant conversions to standard scientific and engineering forms.\n2. In Calculator Mode: Enter two scientific notation operands (coefficient and power of 10) and choose an operator (+, -, ×, ÷) to view the step-by-step arithmetic solution.",
    "formula": "• Scientific Notation Form: a × 10^b where 1 ≤ |a| < 10 and b is an integer.\n• Engineering Notation Form: a × 10^(3k) where 1 ≤ |a| < 1000 and the exponent is a multiple of 3.\n• Multiplication: (a × 10^m) × (c × 10^n) = (a × c) × 10^(m + n)\n• Division: (a × 10^m) / (c × 10^n) = (a / c) × 10^(m - n)\n• Addition/Subtraction: Align exponents first: a × 10^m ± c × 10^n = (a + c × 10^(n - m)) × 10^m",
    "variables": {
      "a, c": "Mantissa / Significand (coefficient of the number).",
      "b, m, n": "Exponent (power of 10 indicating magnitude order).",
      "E-notation": "Computer representation shorthand where 3.5 × 10^8 is written as 3.5e8."
    },
    "example": "Multiply (3.0 × 10^4) by (2.0 × 10^5):\n1. Multiply coefficients: 3.0 × 2.0 = 6.0\n2. Add exponents: 4 + 5 = 9\n3. Result: 6.0 × 10^9 (Standard decimal: 6,000,000,000; Engineering: 6 × 10^9).",
    "whenToUse": "Used across physics, chemistry, astronomy, biology, electrical engineering, and computing when dealing with extremely large (e.g., speed of light, Avogadro's number) or microscopically small numbers (e.g., Planck's constant, atomic radius).",
    "faq": [
      {
        "q": "What is the difference between scientific and engineering notation?",
        "a": "Scientific notation requires the mantissa to be between 1 and 10 with any integer exponent. Engineering notation restricts exponents to multiples of 3 (e.g., 10^3, 10^6, 10^-9) matching metric SI prefixes like kilo, mega, and nano."
      },
      {
        "q": "How is zero represented in scientific notation?",
        "a": "Zero is represented as 0 × 10^0 or simply 0, because zero cannot be expressed with a non-zero mantissa in the range [1, 10)."
      }
    ]
  },
  "confidence-interval-calculator": {
    "whatIsIt": "The Confidence Interval Calculator computes two-sided confidence intervals for population parameters, including population means with known variance (Z-interval), population means with unknown variance (Student's T-interval), and population proportions. It displays critical values (z* or t*), standard errors, margins of error, and lower/upper interval bounds.",
    "howToUse": "1. Select calculation mode: Mean with known σ (Z-Interval), Mean with unknown σ (T-Interval), or Population Proportion.\n2. Enter the sample mean or sample count, standard deviation, sample size (n), and desired confidence level (e.g., 90%, 95%, 99%).\n3. View the calculated margin of error, critical value, and the resulting confidence interval range [Lower Bound, Upper Bound].",
    "formula": "• Z-Interval for Mean (Known σ): CI = x̄ ± z* × (σ / √n)\n• T-Interval for Mean (Unknown σ): CI = x̄ ± t* × (s / √n) with df = n - 1\n• Proportion Interval: CI = p̂ ± z* × √[p̂(1 - p̂) / n]\n• Margin of Error (ME): ME = Critical Value × Standard Error",
    "variables": {
      "x̄": "Sample mean.",
      "σ": "Known population standard deviation.",
      "s": "Sample standard deviation (estimator for unknown σ).",
      "n": "Sample size (total observations).",
      "p̂": "Sample proportion (p̂ = x / n).",
      "z*, t*": "Critical value associated with the chosen confidence level (1 - α).",
      "SE": "Standard error of the sampling distribution."
    },
    "example": "A sample of n = 64 students has a mean test score of x̄ = 82 with sample standard deviation s = 8. For a 95% confidence level (df = 63, t* ≈ 1.9983):\n• Standard Error: SE = 8 / √64 = 8 / 8 = 1.0\n• Margin of Error: ME = 1.9983 × 1.0 = 1.9983\n• 95% Confidence Interval: [82 - 1.9983, 82 + 1.9983] = [80.00, 83.998].",
    "whenToUse": "Indispensable in statistical inference, polling, medical clinical trials, A/B testing, quality assurance, market research, and academic research.",
    "faq": [
      {
        "q": "When should I use Z-interval vs T-interval?",
        "a": "Use a Z-interval when the population standard deviation (σ) is known, or when sample size n is very large. Use a T-interval when the population standard deviation is unknown and estimated from the sample standard deviation (s)."
      },
      {
        "q": "What does a 95% confidence interval actually mean?",
        "a": "It means that if we were to take repeated random samples of the same size and construct confidence intervals from each, approximately 95% of those calculated intervals would contain the true population parameter."
      }
    ]
  },
  "case-converter": {
    "whatIsIt": "The Case Converter is a comprehensive text manipulation tool that instantly transforms text between 10 standard capitalization styles: Sentence case, lower case, UPPER CASE, Capitalized Case, Title Case, camelCase, PascalCase, snake_case, kebab-case, and aLtErNaTiNg cAsE. It also provides live text analytics including character count, word count, sentence count, and line count.",
    "howToUse": "1. Type or paste your text into the input area (or click 'Sample Text').\n2. Click any of the 10 conversion buttons to transform your text instantly.\n3. Use 'Copy to Clipboard' to copy the converted text, or download the result.",
    "formula": "• Sentence case: Capitalizes the first letter of each sentence.\n• Title Case: Capitalizes principal words while keeping articles, conjunctions, and short prepositions lowercase.\n• camelCase: Words concatenated without spaces; first word lowercase, subsequent words capitalized.\n• PascalCase: Words concatenated without spaces; every word capitalized.\n• snake_case: Words in lowercase separated by underscores (_).\n• kebab-case: Words in lowercase separated by hyphens (-).",
    "variables": {
      "Input String": "Source text to transform.",
      "Word Delimiters": "Spaces, punctuation, underscores, and hyphens used to segment words.",
      "Output Format": "Target casing convention applied to the word tokens."
    },
    "example": "Input: 'hello world of coding'\n• UPPERCASE: 'HELLO WORLD OF CODING'\n• Title Case: 'Hello World of Coding'\n• camelCase: 'helloWorldOfCoding'\n• PascalCase: 'HelloWorldOfCoding'\n• snake_case: 'hello_world_of_coding'\n• kebab-case: 'hello-world-of-coding'",
    "whenToUse": "Essential for software developers formatting variable and file names, copywriters standardizing headlines, students formatting essays and bibliography citations, and data cleaners standardizing CSV column headers.",
    "faq": [
      {
        "q": "What words are kept lowercase in Title Case?",
        "a": "Standard Title Case style guides (AP, Chicago, APA) keep minor words lowercase unless they are the first or last word: articles (a, an, the), coordinating conjunctions (and, but, for, or, nor), and short prepositions (in, to, on, of, for, at, by, with)."
      },
      {
        "q": "What is the difference between camelCase and PascalCase?",
        "a": "camelCase begins with a lowercase letter (e.g., studentName), whereas PascalCase begins with an uppercase letter (e.g., StudentName). Both capitalize subsequent words without spaces."
      }
    ]
  },
  "subnet-calculator": {
    "whatIsIt": "The IPv4 Subnet Calculator is a network engineering utility that analyzes IPv4 addresses and CIDR prefix lengths (/0 to /32) to compute network addresses, broadcast addresses, usable IP address ranges, subnet masks, wildcard masks, total host capacities, and IP class categories. It supports standard subnetting rules and RFC 3021 point-to-point /31 prefixes.",
    "howToUse": "1. Enter an IPv4 address (e.g., 192.168.1.100).\n2. Select a CIDR prefix length or subnet mask from the dropdown (e.g., /24 - 255.255.255.0).\n3. View the network address, broadcast address, first and last usable host IPs, usable host count, and binary address breakdown.",
    "formula": "• Network Address = IP Address AND Subnet Mask\n• Wildcard Mask = 255.255.255.255 XOR Subnet Mask = NOT Subnet Mask\n• Broadcast Address = Network Address OR Wildcard Mask\n• Total Addresses = 2^(32 - CIDR)\n• Usable Hosts = 2^(32 - CIDR) - 2 (For CIDR /1 to /30; RFC 3021 /31 gives 2 hosts; /32 gives 1 host)",
    "variables": {
      "IP Address": "32-bit IPv4 address formatted as four dot-separated octets (0-255).",
      "CIDR Prefix": "Number of leading network bits (0 to 32) denoted with a slash (e.g., /24).",
      "Subnet Mask": "32-bit mask with 1s in network positions and 0s in host positions.",
      "Wildcard Mask": "Inverse of the subnet mask, indicating variable host bits.",
      "Usable Range": "The span between First Usable Host and Last Usable Host."
    },
    "example": "For IP 192.168.1.50 with CIDR /24 (Subnet Mask: 255.255.255.0):\n• Network Address: 192.168.1.0\n• Broadcast Address: 192.168.1.255\n• First Usable Host: 192.168.1.1\n• Last Usable Host: 192.168.1.254\n• Total Usable Hosts: 2^(32 - 24) - 2 = 256 - 2 = 254 hosts.",
    "whenToUse": "Essential for network administrators, systems architects, cybersecurity analysts, CCNA/CompTIA Network+ students, cloud VPC architects (AWS, Azure, GCP), and home lab networking.",
    "faq": [
      {
        "q": "Why are two IP addresses subtracted from total hosts in standard subnets?",
        "a": "In standard IPv4 subnets (/1 to /30), the all-zeros host address is reserved as the Network Identifier, and the all-ones host address is reserved as the Subnet Broadcast Address."
      },
      {
        "q": "What is RFC 3021 (/31 subnetting)?",
        "a": "RFC 3021 defines point-to-point links using /31 subnets (2 addresses total). In /31 networks, both addresses are usable hosts because broadcast and network address reservations are not required on point-to-point links."
      }
    ]
  }
};

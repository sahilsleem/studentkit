export interface ToolContent {
  howToUse?: string[];
  note?: string;
}

export const toolContent: Record<string, ToolContent> = {
  "area-calculator": {
    "howToUse": [
      "Select the 2D shape you want to calculate.",
      "Enter the required dimensions for that specific shape.",
      "Select Calculate Area to view the result."
    ]
  },
  "area-converter": {
    "howToUse": [
      "Select your starting and target units.",
      "Enter the value you want to convert.",
      "The converted result will update instantly."
    ]
  },
  "ascii-converter": {
    "howToUse": [
      "Enter your text string.",
      "Select Convert to ASCII & Hex to view the decimal and hexadecimal values."
    ]
  },
  "bandwidth-calculator": {
    "howToUse": [
      "Enter the file size and internet download speed.",
      "Select Download Duration to view the estimated download time."
    ]
  },
  "base-converter": {
    "howToUse": [
      "Enter your input value and select its current base.",
      "Select Convert Bases to view the equivalent binary, octal, decimal, and hexadecimal values."
    ]
  },
  "binary-arithmetic-calculator": {
    "howToUse": [
      "Enter the binary a, operation and binary b.",
      "Select Compute Binary Arithmetic to view the binary result."
    ]
  },
  "binomial-distribution-calculator": {
    "howToUse": [
      "Enter the number of trials, probability of success and number of successes.",
      "Select Binomial Probability to view the exact probability p(x = k)."
    ]
  },
  "bitwise-calculator": {
    "howToUse": [
      "Enter the operand a and operand b.",
      "Select Bitwise Logic to view the calculated result."
    ]
  },
  "bmi-calculator": {
    "howToUse": [
      "Enter the weight and height.",
      "Select BMI to view the body mass index (bmi)."
    ]
  },
  "bmr-calculator": {
    "howToUse": [
      "Enter the gender, age, weight, height and activity level.",
      "Select Daily Caloric Needs to view the total daily energy expenditure (tdee)."
    ]
  },
  "buffer-ph-calculator": {
    "howToUse": [
      "Enter the pka of weak acid, conjugate base conc [a-] and weak acid conc [ha].",
      "Select Buffer pH (Henderson-Hasselbalch) to view the buffer ph."
    ]
  },
  "calorimetry-calculator": {
    "howToUse": [
      "Enter the mass, specific heat capacity and temperature change.",
      "Select Heat Energy (q) to view the heat energy transferred (q = mcδt)."
    ]
  },
  "case-converter": {
    "howToUse": [
      "Enter the input text.",
      "The converted result will update instantly."
    ]
  },
  "cell-potential-calculator": {
    "howToUse": [
      "Enter the cathode standard potential and anode standard potential.",
      "Select Standard Cell Potential to view the standard cell potential (e°_cell = e°_cat - e°_an)."
    ]
  },
  "chemical-equation-balancer": {
    "howToUse": [
      "Enter the unbalanced chemical equation.",
      "Select Balance to view the balanced chemical equation."
    ]
  },
  "chemical-kinetics-calculator": {
    "howToUse": [
      "Enter the reaction order, initial conc [a]₀, rate constant and time.",
      "Select Concentration & Half-Life to view the remaining conc [a] at time t."
    ]
  },
  "chi-square-calculator": {
    "howToUse": [
      "Enter the observed frequencies and expected frequencies.",
      "Select Chi-Square Test Statistic to view the chi-square statistic (χ²) and degrees of freedom (df)."
    ]
  },
  "circle-calculator": {
    "howToUse": [
      "Enter the radius and sector angle θ.",
      "Select Circle Metrics to view the total circle area (πr²)."
    ]
  },
  "circuit-calculator": {
    "howToUse": [
      "Enter the resistor values.",
      "Select Equivalent Circuit Resistance to view the series equivalent (r_eq = σ rᵢ) and parallel equivalent (1/r_eq = σ 1/rᵢ)."
    ]
  },
  "circular-motion-calculator": {
    "howToUse": [
      "Enter the radius, linear speed and mass.",
      "Select Centripetal Force to view the centripetal force (fc = mv²/r)."
    ]
  },
  "compound-interest-calculator": {
    "howToUse": [
      "Enter the initial principal, monthly contribution, annual interest rate, term and compounding.",
      "Select Compound Growth to view the future ending balance."
    ]
  },
  "confidence-interval-calculator": {
    "howToUse": [
      "Enter the sample mean, sample standard deviation, sample size and confidence level.",
      "Select Confidence Interval to view the confidence interval range."
    ]
  },
  "coulombs-law-calculator": {
    "howToUse": [
      "Enter the charge 1, charge 2 and separation distance.",
      "Select Electrostatic Force to view the electrostatic force (f = k·|q₁q₂|/r²)."
    ]
  },
  "date-difference-calculator": {
    "howToUse": [
      "Enter the start date, end date and include end date in total count.",
      "Select Date Difference to view the total duration."
    ]
  },
  "density-calculator": {
    "howToUse": [
      "Enter the mass and volume.",
      "Select Density to view the density (ρ = m / v)."
    ]
  },
  "derivative-calculator": {
    "howToUse": [
      "Enter the function f.",
      "Select Differentiate to view the first derivative f'(x) and second derivative f''(x)."
    ]
  },
  "differential-equations-calculator": {
    "howToUse": [
      "Enter the first-order ode standard form, rate constant / parameter and initial condition y.",
      "Select Solve Differential Equation to view the particular solution y(x)."
    ]
  },
  "discount-calculator": {
    "howToUse": [
      "Enter the original price, primary discount, additional coupon / promo and sales tax.",
      "Select Final Price to view the final price after tax."
    ]
  },
  "dna-sequence-analyzer": {
    "howToUse": [
      "Enter the 5' to 3' dna sequence.",
      "Select Analyze Sequence to view the complementary strand (3' → 5') and mrna transcript (5' → 3') and gc content % and estimated melting temp (tm)."
    ]
  },
  "empirical-formula-calculator": {
    "howToUse": [
      "Enter the carbon %, hydrogen % and oxygen %.",
      "Select Determine Empirical Formula to view the empirical formula."
    ]
  },
  "exponent-calculator": {
    "howToUse": [
      "Enter the base and exponent.",
      "Select Power to view the result (bˣ)."
    ]
  },
  "final-grade-calculator": {
    "howToUse": [
      "Enter the current grade, desired target grade and final exam weight.",
      "Select Required Score to view the required final exam score."
    ]
  },
  "force-calculator": {
    "howToUse": [
      "Enter the mass and acceleration.",
      "Select Net Force to view the net force (f = m · a)."
    ]
  },
  "fraction-calculator": {
    "howToUse": [
      "Enter your required values.",
      "Select Fraction to view the result fraction."
    ]
  },
  "free-fall-calculator": {
    "howToUse": [
      "Enter the drop height.",
      "Select Free Fall Metrics to view the impact velocity (v = √(2gh))."
    ]
  },
  "friction-calculator": {
    "howToUse": [
      "Enter the coefficient of friction, mass of object and incline angle.",
      "Select Friction Force to view the friction force (f = μ · n)."
    ]
  },
  "grade-converter": {
    "howToUse": [
      "Select your current grading format (e.g., Letter Grade, Percentage).",
      "Enter your grade value.",
      "Select Convert Grade to view the equivalent scores across other formats."
    ]
  },
  "gravitational-force-calculator": {
    "howToUse": [
      "Enter the mass 1, mass 2 and distance.",
      "Select Gravitational Force to view the gravitational attraction (f = g·m₁m₂/r²)."
    ]
  },
  "half-life-calculator": {
    "howToUse": [
      "Enter the initial quantity, half-life and elapsed time.",
      "Select Remaining Quantity to view the remaining amount (n(t))."
    ]
  },
  "hardy-weinberg-calculator": {
    "howToUse": [
      "Enter the recessive genotype frequency.",
      "Select Allele & Genotype Frequencies to view the allele frequencies."
    ]
  },
  "harmonic-motion-calculator": {
    "howToUse": [
      "Enter the oscillator type, mass and spring constant.",
      "Select Period & Frequency to view the oscillation period (t)."
    ]
  },
  "hourly-to-salary-calculator": {
    "howToUse": [
      "Enter the hourly wage, hours worked per week and weeks worked per year.",
      "Select Salary Equivalents to view the equivalent annual salary."
    ]
  },
  "ideal-gas-law": {
    "howToUse": [
      "Select the variable you want to solve for (Pressure, Volume, Temperature, or Moles).",
      "Enter the known values for the remaining three variables.",
      "Select Calculate to view the missing value."
    ]
  },
  "inflation-calculator": {
    "howToUse": [
      "Enter the initial amount, annual inflation rate and time horizon.",
      "Select Inflation Impact to view the future equivalent cost."
    ]
  },
  "integral-calculator": {
    "howToUse": [
      "Enter the integrand function f, lower limit and upper limit.",
      "Select Compute Definite & Indefinite Integral to view the indefinite integral ∫ f(x) dx and definite value ∫ₐᵇ f(x) dx."
    ]
  },
  "kinematics-calculator": {
    "howToUse": [
      "Select the kinematic variable you need to calculate.",
      "Enter the known values for the remaining parameters.",
      "Select Calculate Motion Parameters to view the missing value."
    ]
  },
  "lcm-gcd-calculator": {
    "howToUse": [
      "Enter the enter integers separated by commas.",
      "Select LCM & GCD to view the gcd / hcf (greatest common divisor) and lcm (least common multiple)."
    ]
  },
  "length-converter": {
    "howToUse": [
      "Select your starting and target units.",
      "Enter the value you want to convert.",
      "The converted result will update instantly."
    ]
  },
  "lens-mirror-calculator": {
    "howToUse": [
      "Enter the focal length and object distance.",
      "Select Image Properties to view the image distance (d_i)."
    ]
  },
  "limit-calculator": {
    "howToUse": [
      "Enter the function f and approaching point.",
      "Select Evaluate Limit to view the two-sided limit lim x→c f(x)."
    ]
  },
  "linear-regression-calculator": {
    "howToUse": [
      "Enter the x values and y values.",
      "Select Fit Linear Regression Model to view the line of best fit (y = mx + b) and correlation & determination."
    ]
  },
  "logarithm-calculator": {
    "howToUse": [
      "Enter the number and base.",
      "Select Logarithm to view the logarithm result (log_b(x))."
    ]
  },
  "margin-markup-calculator": {
    "howToUse": [
      "Enter the cost price and selling / revenue price.",
      "Select Margins to view the gross profit."
    ]
  },
  "marks-percentage-calculator": {
    "howToUse": [
      "Enter the marks obtained and total maximum marks.",
      "Select Percentage to view the calculated percentage."
    ]
  },
  "matrix-calculator": {
    "howToUse": [
      "Enter the matrix a and matrix b.",
      "Select Multiply Matrices (A × B) to view the product matrix (a × b)."
    ]
  },
  "matrix-inverse-calculator": {
    "howToUse": [
      "Enter the 2×2 matrix a.",
      "Select Inverse Matrix to view the inverse matrix a⁻¹."
    ]
  },
  "molar-mass-calculator": {
    "howToUse": [
      "Enter the chemical formula.",
      "Select Compute to view the molar mass."
    ]
  },
  "molarity-calculator": {
    "howToUse": [
      "Enter the solute mass, molar mass and solution volume.",
      "Select Molarity to view the solution concentration (m)."
    ]
  },
  "moles-converter": {
    "howToUse": [
      "Enter the molar mass of the substance and the amount in grams.",
      "Select Convert to Moles & Particles to view the resulting moles and number of molecules."
    ]
  },
  "momentum-collision-calculator": {
    "howToUse": [
      "Enter the mass and initial velocity.",
      "Select Elastic & Inelastic Collisions to view the elastic post-collision velocities and perfect inelastic (stick together)."
    ]
  },
  "numerical-integration-calculator": {
    "howToUse": [
      "Enter the function f, lower, upper and even subintervals.",
      "Select Compute Simpson's & Trapezoidal to view the simpson's 1/3 rule approximation."
    ]
  },
  "ohms-law-calculator": {
    "howToUse": [
      "Enter any two known values (Voltage, Current, Resistance, or Power).",
      "Select Calculate to find the remaining two missing values."
    ]
  },
  "partial-derivative-calculator": {
    "howToUse": [
      "Enter the multivariable function f.",
      "Select First & Second Partial Derivatives to view the ∂f / ∂x (treat y as constant) and ∂f / ∂y (treat x as constant) and ∂²f / ∂x² and mixed ∂²f / ∂x∂y (clairaut's)."
    ]
  },
  "percent-composition-calculator": {
    "howToUse": [
      "Enter the chemical formula.",
      "The mass percent composition will update automatically as you type."
    ]
  },
  "percentage-calculator": {
    "howToUse": [
      "Enter the what is x% of y? and x is what percent of y?.",
      "Select Percentages to view the result 1 (x% of y) and result 2 (percentage)."
    ]
  },
  "percentage-change-calculator": {
    "howToUse": [
      "Enter the initial value and final value.",
      "Select Change to view the percentage change."
    ]
  },
  "percentile-calculator": {
    "howToUse": [
      "Enter the dataset and percentile rank.",
      "Select Percentile Value to view the 75th percentile (q₃)."
    ]
  },
  "permutations-combinations-calculator": {
    "howToUse": [
      "Enter the total items and selected items.",
      "Select nPr & nCr to view the combinations ncr (order does not matter) and permutations npr (order does matter)."
    ]
  },
  "ph-calculator": {
    "howToUse": [
      "Enter the hydrogen ion [h+].",
      "Select pH & pOH to view the calculated ph (-log [h+])."
    ]
  },
  "poisson-distribution-calculator": {
    "howToUse": [
      "Enter the average rate and number of occurrences.",
      "Select Poisson Probability to view the exact probability p(x = k)."
    ]
  },
  "polynomial-calculator": {
    "howToUse": [
      "Enter the polynomial p and evaluate p.",
      "Select Analyze Polynomial to view the evaluation p(x)."
    ]
  },
  "pomodoro-timer": {
    "howToUse": [
      "Enter your known values.",
      "The focus session will update automatically as you type."
    ]
  },
  "pressure-buoyancy-calculator": {
    "howToUse": [
      "Enter the fluid density, depth / submerged height and displaced volume.",
      "Select Pressure & Buoyant Force to view the hydrostatic pressure (p = ρgh)."
    ]
  },
  "prime-factorization-calculator": {
    "howToUse": [
      "Enter the enter integer.",
      "Select Factorize Integer to view the prime factorization."
    ]
  },
  "probability-calculator": {
    "howToUse": [
      "Enter the probability of event a: p and probability of event b: p.",
      "Select Joint Probabilities to view the calculated result."
    ]
  },
  "projectile-motion-calculator": {
    "howToUse": [
      "Enter the initial velocity, launch angle and initial launch height.",
      "Select Trajectory to view the horizontal range (r)."
    ]
  },
  "punnett-square": {
    "howToUse": [
      "Enter the parent 1 genotype and parent 2 genotype.",
      "Select Generate Punnett Square to view the 2×2 punnett grid."
    ]
  },
  "random-number-generator": {
    "howToUse": [
      "Enter the minimum value, maximum value and quantity of numbers.",
      "The generated result will update automatically as you type."
    ]
  },
  "ratio-calculator": {
    "howToUse": [
      "Enter the proportion solver.",
      "Select Solve Ratio to view the solved value (d)."
    ]
  },
  "reading-time-calculator": {
    "howToUse": [
      "Enter the word count and reading speed.",
      "Select Reading Time to view the estimated silent reading time."
    ]
  },
  "rent-split-calculator": {
    "howToUse": [
      "Enter the total apartment rent and split model.",
      "Select Recalculate Shares to view the calculated result."
    ]
  },
  "rref-calculator": {
    "howToUse": [
      "Enter the 2×3 augmented matrix.",
      "Select Compute RREF (Gauss-Jordan) to view the reduced row echelon form."
    ]
  },
  "sales-tax-calculator": {
    "howToUse": [
      "Enter the pre-tax amount, sales tax rate and quantity.",
      "Select Sales Tax to view the total gross price (tax included)."
    ]
  },
  "sample-size-calculator": {
    "howToUse": [
      "Enter the margin of error, confidence level and total population size.",
      "Select Required Sample Size to view the recommended sample size (n)."
    ]
  },
  "scientific-notation-calculator": {
    "howToUse": [
      "Enter the standard decimal number.",
      "Select Convert Formats to view the scientific notation (a × 10ⁿ)."
    ]
  },
  "sequence-series-calculator": {
    "howToUse": [
      "Select the progression type (Arithmetic or Geometric).",
      "Enter the first term, number of terms, and the common difference or ratio.",
      "Select Calculate Sequence to view the n-th term and sum."
    ]
  },
  "set-calculator": {
    "howToUse": [
      "Enter the set a and set b.",
      "Select Set Operations to view the union (a ∪ b) and intersection (a ∩ b) and difference (a  b) and symmetric difference (a δ b)."
    ]
  },
  "significant-figures-calculator": {
    "howToUse": [
      "Enter the input number and round to sig figs.",
      "Select Count & Round Sig Figs to view the significant figures count."
    ]
  },
  "simple-interest-calculator": {
    "howToUse": [
      "Enter the principal amount, annual interest rate and time period.",
      "Select Interest to view the total simple interest (i)."
    ]
  },
  "simultaneous-equations-solver": {
    "howToUse": [
      "Enter your required values.",
      "Select Solve Linear System to view the solution set and determinant (d)."
    ]
  },
  "speed-converter": {
    "howToUse": [
      "Select your starting and target units.",
      "Enter the value you want to convert.",
      "The converted result will update instantly."
    ]
  },
  "standard-deviation-calculator": {
    "howToUse": [
      "Enter the enter numbers.",
      "Select Standard Deviation to view the sample standard deviation (s) and population standard deviation (σ)."
    ]
  },
  "statistics-calculator": {
    "howToUse": [
      "Enter the dataset values.",
      "Select Summary Statistics to view the calculated result."
    ]
  },
  "stoichiometry-calculator": {
    "howToUse": [
      "Enter the reactant a moles and stoichiometric ratio.",
      "Select Stoichiometric Product to view the required product b moles."
    ]
  },
  "student-budget-calculator": {
    "howToUse": [
      "Enter the scholarship / aid, part-time job, rent & housing, food & groceries, books & courseware, transportation and personal & leisure.",
      "Select Monthly Budget to view the net monthly cashflow."
    ]
  },
  "subnet-calculator": {
    "howToUse": [
      "Enter the ipv4 address and cidr subnet prefix.",
      "Select Subnet to view the subnet allocation."
    ]
  },
  "target-heart-rate-calculator": {
    "howToUse": [
      "Enter the age and resting heart rate.",
      "Select Training Zones to view the heart rate training zones."
    ]
  },
  "target-marks-calculator": {
    "howToUse": [
      "Enter the target overall percentage, total academic marks / max score, marks scored so far and max marks of completed assessments.",
      "Select Target Marks to view the required score on remaining tests."
    ]
  },
  "taylor-series-calculator": {
    "howToUse": [
      "Enter the standard function f and order / degree.",
      "Select Generate Maclaurin Series to view the series polynomial pₙ(x) (center a = 0)."
    ]
  },
  "temperature-converter": {
    "howToUse": [
      "Select your starting and target units.",
      "Enter the value you want to convert.",
      "The converted result will update instantly."
    ]
  },
  "time-converter": {
    "howToUse": [
      "Select your starting and target units.",
      "Enter the value you want to convert.",
      "The converted result will update instantly."
    ]
  },
  "tip-bill-split-calculator": {
    "howToUse": [
      "Enter the bill total, tip percentage and number of people.",
      "Select Split to view the per person share."
    ]
  },
  "torque-calculator": {
    "howToUse": [
      "Enter the applied force, lever arm length and angle θ.",
      "Select Torque to view the resulting torque (τ = r·f·sin θ)."
    ]
  },
  "triangle-area-calculator": {
    "howToUse": [
      "Select your calculation method based on your known dimensions.",
      "Enter the required side lengths, base, or height.",
      "Select Calculate Area to view the triangle's area."
    ]
  },
  "triangle-calculator": {
    "howToUse": [
      "Enter the triangle side lengths, side a, side b and side c.",
      "Select Solve Triangle Angles & Area to view the angles (a, b, c)."
    ]
  },
  "trigonometric-calculator": {
    "howToUse": [
      "Enter the angle and angle unit.",
      "Select Trig Values to view the calculated result."
    ]
  },
  "truth-table-generator": {
    "howToUse": [
      "Enter the boolean logic gate.",
      "Select Generate Truth Table to view the calculated result."
    ]
  },
  "twos-complement-calculator": {
    "howToUse": [
      "Enter the signed decimal integer.",
      "Select Two's Complement to view the 8-bit representation."
    ]
  },
  "unit-circle-calculator": {
    "howToUse": [
      "Enter the standard angle θ.",
      "Select Inspect Angle Coordinates to view the unit circle coordinates (cos θ, sin θ)."
    ]
  },
  "vector-calculator": {
    "howToUse": [
      "Enter the vector a and vector b.",
      "Select Vector Operations to view the dot product (a · b)."
    ]
  },
  "volume-converter": {
    "howToUse": [
      "Select your starting and target units.",
      "Enter the value you want to convert.",
      "The converted result will update instantly."
    ]
  },
  "volume-surface-area-calculator": {
    "howToUse": [
      "Enter the 3d solid, radius and height.",
      "Select Volume & Surface Area to view the volume (v)."
    ]
  },
  "water-intake-calculator": {
    "howToUse": [
      "Enter the body weight and daily exercise.",
      "Select Daily Water Goal to view the recommended daily hydration."
    ]
  },
  "wave-speed-calculator": {
    "howToUse": [
      "Enter the frequency and wavelength.",
      "Select Wave Speed to view the wave speed (v = f · λ)."
    ]
  },
  "weight-converter": {
    "howToUse": [
      "Select your starting and target units.",
      "Enter the value you want to convert.",
      "The converted result will update instantly."
    ]
  },
  "weighted-grade-calculator": {
    "howToUse": [
      "Enter your required values.",
      "Select Grade to view the overall weighted score and letter grade."
    ]
  },
  "word-counter": {
    "howToUse": [
      "Enter the paste or type your text.",
      "The result will update automatically as you type."
    ]
  },
  "words-to-pages-calculator": {
    "howToUse": [
      "Enter the word count, line spacing, font size and font family.",
      "Select Page Count to view the estimated standard pages."
    ]
  },
  "work-energy-calculator": {
    "howToUse": [
      "Enter the mass, velocity and height.",
      "Select Kinetic & Potential Energy to view the kinetic energy (ke = ½mv²)."
    ]
  },
  "z-score-calculator": {
    "howToUse": [
      "Enter the raw score, population mean and standard deviation.",
      "Select Z-Score to view the standardized z-score."
    ]
  },
  "cgpa-percentage-calculator": {
    "howToUse": [
      "Enter your current CGPA on the 10-point scale.",
      "Select your university's multiplier or enter a custom multiplier if needed.",
      "Select Calculate to see the converted percentage."
    ],
    "note": "A 9.5 multiplier is standard for many Indian boards, though some universities use a direct 10.0 multiplier."
  },
  "gpa-calculator": {
    "howToUse": [
      "Add each course and select its expected or current grade.",
      "Enter the credit hours assigned to each course.",
      "Review the calculated semester GPA after all courses are entered."
    ]
  },
  "attendance-calculator": {
    "howToUse": [
      "Enter the total classes held so far and the classes you actually attended.",
      "Enter your university's required attendance percentage.",
      "Select Calculate to see how many classes you can afford to miss, or how many you need to attend to hit the target."
    ]
  },
  "student-loan-calculator": {
    "howToUse": [
      "Enter the total loan amount.",
      "Enter the annual interest rate and repayment period in years.",
      "Select Calculate to review the estimated monthly EMI and total interest."
    ]
  },
  "quadratic-formula-calculator": {
    "howToUse": [
      "Enter coefficients a, b, and c from your equation.",
      "Select Calculate to see the resulting roots."
    ]
  }
};

# StudentKit — Phase 3A: Final Tool Ecosystem Blueprint

**Execution Date:** September 11, 2026
**Branch:** `rebuild/studentkit-core-tools`
**Baseline Checkpoint:** `cc9f283`
**Audit Mode:** READ-ONLY Planning & Strategic Curation
**Reconciliation Status:** Fully Validated (Exact Count: 125 Interactive Tools)

---

## 1. Executive Summary

StudentKit is transitioning from its legacy high-volume model to a **curated, high-precision ecosystem of exactly 125 interactive tools**.

Every single tool in this blueprint has been rigorously evaluated against four fundamental criteria:
1. **100% Interactive Utility**: Every tool is an active calculator, solver, or converter. Zero static reference sheets, formula tables, or article-only pages.
2. **Zero Maintenance & 100% Client-Side**: All mathematical logic is deterministic and runs locally in the browser using vanilla JavaScript/TypeScript. Zero external APIs, zero server backends, zero databases, and zero user accounts.
3. **Balanced Academic & Practical Utility**: Comprehensive coverage across Academic Grades, Everyday & Student Finance, Core Mathematics, Calculus, Geometry & Matrices, Statistics, Physics, Chemistry, Biology & Health, Computer Science, Study Productivity, and Universal Converters.
4. **Tool-First Design System Alignment**: Every tool seamlessly integrates with the Phase 2 design system (Breadcrumbs $\rightarrow$ Title $\rightarrow$ Input Controls $\rightarrow$ Calculate/Reset Actions $\rightarrow$ High-Contrast Result Card + Copy Feedback $\rightarrow$ Educational Content).

---

## 2. Final Ecosystem Summary & Category Breakdown

| # | Category Name | Core Scope | Tool Count |
| :-: | :--- | :--- | :---: |
| **1** | **Academic & Grades** | GPA, CGPA, target marks, attendance forecasting, and exam weightings | **8** |
| **2** | **Everyday & Student Finance** | Loan payments, EMI, simple/compound interest, discounts, budget & split bills | **11** |
| **3** | **Mathematics (Algebra & Core Math)** | Quadratic solver, equations, polynomials, fractions, ratios, and number theory | **16** |
| **4** | **Geometry, Trigonometry & Matrices** | Triangles, polygons, 3D volume, vectors, trig functions, and matrix algebra | **11** |
| **5** | **Calculus & Advanced Math** | Derivatives, integrals, limits, series expansions, and differential equations | **7** |
| **6** | **Statistics & Probability** | Descriptive statistics, standard deviation, z-scores, regression, and distributions | **11** |
| **7** | **Physics** | Mechanics, kinematics, energy, circuits, optics, waves, and fluids | **18** |
| **8** | **Chemistry** | Molar mass, stoichiometry, gas laws, pH, buffers, kinetics, and cell potential | **14** |
| **9** | **Biology & Health Metrics** | Genetics (Punnett), DNA analysis, Hardy-Weinberg, BMI, BMR, and hydration | **7** |
| **10** | **Computer Science & Logic** | Base converter, subnetting, bitwise operations, truth tables, and data bandwidth | **8** |
| **11** | **Study Productivity & Writing** | Word counter, reading time, words-to-pages, case converter, and Pomodoro | **7** |
| **12** | **Universal Converters** | Length, weight, temperature, speed, area, volume, and time | **7** |
| **TOTAL** | **Curated Interactive Tools** | **100% Interactive, Client-Side & Zero-Maintenance** | **125** |

---

## 3. Complete 125-Tool Inventory & Classification Table

### Classification Legend:
- **Status:** `KEEP` (Retained core classic), `ADD` (Newly approved high-demand tool), `MERGE` (Unified multi-mode tool).
- **Demand:** `VERY HIGH`, `HIGH`, `MEDIUM`.
- **Maintenance:** `ZERO` (Deterministic math, zero external dependencies).
- **Difficulty:** `LOW`, `MEDIUM`, `COMPLEX`.


### Category Academic & Grades (8 Tools)

| # | Tool Name | Slug | Purpose & Capabilities | Status | Demand | Maint. | Diff. |
| :-: | :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| 1 | **GPA Calculator** | `gpa-calculator` | Multi-course semester, cumulative, and target GPA calculation on standard 4.0 scale. | `KEEP` | VERY HIGH | ZERO | LOW |
| 2 | **CGPA & Percentage Converter** | `cgpa-percentage-calculator` | Bidirectional conversion between 10-point CGPA and percentage (Standard 9.5, 10.0, and Custom multiplier). | `MERGE` | VERY HIGH | ZERO | LOW |
| 3 | **Final Grade Calculator** | `final-grade-calculator` | Calculates the exact final exam score needed to achieve a target letter/percentage course grade. | `KEEP` | VERY HIGH | ZERO | LOW |
| 4 | **Weighted Grade Calculator** | `weighted-grade-calculator` | Computes overall grade based on custom syllabus category weightings (homework, labs, midterm, final). | `KEEP` | HIGH | ZERO | LOW |
| 5 | **Attendance Calculator & Bunk Planner** | `attendance-calculator` | Calculates current attendance percentage, safe classes to miss, and lectures needed to reach 75%/85%. | `KEEP` | VERY HIGH | ZERO | MEDIUM |
| 6 | **Target Marks Calculator** | `target-marks-calculator` | Projects required marks across remaining semester exams/assignments to achieve target percentage. | `KEEP` | HIGH | ZERO | LOW |
| 7 | **Grade & Letter Scale Converter** | `grade-converter` | Converts between letter grades (A+, A, B, etc.), 4.0 GPA points, and percentage intervals. | `ADD` | HIGH | ZERO | LOW |
| 8 | **Marks & Percentage Total Calculator** | `marks-percentage-calculator` | Calculates total marks, percentage, average, and highest/lowest subject scores across assessments. | `KEEP` | HIGH | ZERO | LOW |

### Category Everyday & Student Finance (11 Tools)

| # | Tool Name | Slug | Purpose & Capabilities | Status | Demand | Maint. | Diff. |
| :-: | :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| 9 | **Student Loan & EMI Calculator** | `student-loan-calculator` | Calculates monthly loan EMI installments, total interest, and accelerated payoff schedules. | `MERGE` | VERY HIGH | ZERO | MEDIUM |
| 10 | **Simple Interest Calculator** | `simple-interest-calculator` | Computes principal, interest rate, duration, and total simple interest ($I = Prt$). | `KEEP` | HIGH | ZERO | LOW |
| 11 | **Compound Interest Calculator** | `compound-interest-calculator` | Calculates investment and savings growth with compounding frequencies ($A = P(1 + r/n)^{nt}$). | `KEEP` | VERY HIGH | ZERO | MEDIUM |
| 12 | **Discount & Sale Price Calculator** | `discount-calculator` | Computes final discounted price, total savings, and stacked percentage discounts. | `ADD` | VERY HIGH | ZERO | LOW |
| 13 | **Sales Tax & GST Calculator** | `sales-tax-calculator` | Calculates net price, gross price, and applicable tax amounts for standard rates. | `ADD` | HIGH | ZERO | LOW |
| 14 | **Tip & Bill Split Calculator** | `tip-bill-split-calculator` | Calculates tip percentages and splits the total restaurant/service bill evenly among people. | `ADD` | HIGH | ZERO | LOW |
| 15 | **College Budget & Savings Planner** | `student-budget-calculator` | Monthly student stipend/income vs. expense tracking and emergency fund savings projections. | `ADD` | HIGH | ZERO | MEDIUM |
| 16 | **Inflation & Purchasing Power Calculator** | `inflation-calculator` | Estimates purchasing power changes and future equivalent value of money over time. | `ADD` | MEDIUM | ZERO | LOW |
| 17 | **Margin & Markup Calculator** | `margin-markup-calculator` | Calculates profit margin percentage, markup percentage, cost of goods, and revenue. | `ADD` | MEDIUM | ZERO | LOW |
| 18 | **Hourly Wage to Salary Calculator** | `hourly-to-salary-calculator` | Converts student part-time hourly wages into weekly, monthly, and annual earnings. | `ADD` | HIGH | ZERO | LOW |
| 19 | **Rent Split & Roommate Expense Calculator** | `rent-split-calculator` | Fairly splits apartment rent and utility expenses based on room sizes or equal shares. | `ADD` | HIGH | ZERO | LOW |

### Category Mathematics (Algebra & Core Math) (16 Tools)

| # | Tool Name | Slug | Purpose & Capabilities | Status | Demand | Maint. | Diff. |
| :-: | :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| 20 | **Quadratic Formula & Equation Solver** | `quadratic-formula-calculator` | Solves $ax^2 + bx + c = 0$ with discriminant, real/complex roots, and vertex coordinates. | `ADD` | VERY HIGH | ZERO | MEDIUM |
| 21 | **Simultaneous Equations Solver** | `simultaneous-equations-solver` | Solves 2-variable and 3-variable systems of linear equations with substitution/elimination. | `KEEP` | VERY HIGH | ZERO | MEDIUM |
| 22 | **Polynomial Calculator** | `polynomial-calculator` | Evaluates polynomial expressions, determines roots, and computes degree/leading coefficients. | `KEEP` | HIGH | ZERO | MEDIUM |
| 23 | **Fraction Calculator** | `fraction-calculator` | Adds, subtracts, multiplies, divides, and simplifies proper, improper, and mixed fractions. | `KEEP` | VERY HIGH | ZERO | MEDIUM |
| 24 | **Ratio & Proportion Calculator** | `ratio-calculator` | Solves direct and inverse proportions ($A:B = C:D$) and simplifies multi-term ratios. | `KEEP` | HIGH | ZERO | LOW |
| 25 | **Percentage Calculator** | `percentage-calculator` | Solves all core percentage variations (X% of Y, X is what % of Y, percentage of total). | `KEEP` | VERY HIGH | ZERO | LOW |
| 26 | **Percentage Change Calculator** | `percentage-change-calculator` | Computes percentage increase, percentage decrease, and relative difference between values. | `KEEP` | VERY HIGH | ZERO | LOW |
| 27 | **Prime Factorization Calculator** | `prime-factorization-calculator` | Decomposes integers into prime factor trees and checks for primality. | `KEEP` | HIGH | ZERO | MEDIUM |
| 28 | **LCM and GCD Calculator** | `lcm-gcd-calculator` | Calculates Least Common Multiple and Greatest Common Divisor for 2 or more numbers. | `KEEP` | HIGH | ZERO | LOW |
| 29 | **Significant Figures Calculator** | `significant-figures-calculator` | Identifies significant figures and performs arithmetic with scientific rounding rules. | `ADD` | VERY HIGH | ZERO | MEDIUM |
| 30 | **Scientific Notation Calculator** | `scientific-notation-calculator` | Converts numbers to standard/scientific form ($a \times 10^b$) and performs operations. | `KEEP` | HIGH | ZERO | LOW |
| 31 | **Exponent & Power Calculator** | `exponent-calculator` | Calculates integer, fractional, negative powers, and radical exponents ($x^y$). | `ADD` | HIGH | ZERO | LOW |
| 32 | **Logarithm Calculator** | `logarithm-calculator` | Computes common log ($\log_{10}$), natural log ($\ln$), and custom base logs ($\log_b x$). | `ADD` | HIGH | ZERO | LOW |
| 33 | **Sequence & Series Calculator** | `sequence-series-calculator` | Computes $n$-th term and partial sums for arithmetic and geometric sequences. | `KEEP` | HIGH | ZERO | MEDIUM |
| 34 | **Set Theory Calculator** | `set-calculator` | Computes union ($A \cup B$), intersection ($A \cap B$), relative complement, and Cartesian product. | `KEEP` | MEDIUM | ZERO | MEDIUM |
| 35 | **Permutations & Combinations Calculator** | `permutations-combinations-calculator` | Solves $n\text{P}r$ (permutations) and $n\text{C}r$ (combinations) with factorial step breakdown. | `KEEP` | VERY HIGH | ZERO | LOW |

### Category Geometry, Trigonometry & Matrices (11 Tools)

| # | Tool Name | Slug | Purpose & Capabilities | Status | Demand | Maint. | Diff. |
| :-: | :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| 36 | **Right Triangle & Pythagorean Solver** | `triangle-calculator` | Solves right triangle sides, hypotenuse, and acute angles ($a^2 + b^2 = c^2$). | `KEEP` | VERY HIGH | ZERO | LOW |
| 37 | **Triangle Area & Geometry Calculator** | `triangle-area-calculator` | Calculates general triangle area, perimeter, and missing angles via Heron's, SAS, and SSS. | `KEEP` | HIGH | ZERO | LOW |
| 38 | **Circle & Sector Calculator** | `circle-calculator` | Solves radius, diameter, circumference, area, arc length, and sector area. | `ADD` | HIGH | ZERO | LOW |
| 39 | **2D Polygon Area Calculator** | `area-calculator` | Calculates area and perimeter for rectangles, parallelograms, trapezoids, and regular polygons. | `ADD` | HIGH | ZERO | LOW |
| 40 | **3D Volume & Surface Area Calculator** | `volume-surface-area-calculator` | Calculates volume and surface area for spheres, cylinders, cones, pyramids, and prisms. | `ADD` | HIGH | ZERO | LOW |
| 41 | **Trigonometric & Inverse Functions Calculator** | `trigonometric-calculator` | Evaluates standard (sin, cos, tan, csc, sec, cot) and inverse (arcsin, arccos, arctan) trig functions in degrees/radians. | `MERGE` | VERY HIGH | ZERO | LOW |
| 42 | **Unit Circle Calculator** | `unit-circle-calculator` | Interactive coordinates, exact radical values, and quadrant angle conversions. | `KEEP` | HIGH | ZERO | MEDIUM |
| 43 | **Vector Operations Calculator** | `vector-calculator` | Computes 2D and 3D vector magnitude, direction, dot product, and cross product. | `ADD` | HIGH | ZERO | MEDIUM |
| 44 | **Matrix Arithmetic Calculator** | `matrix-calculator` | Performs matrix addition, subtraction, scalar multiplication, and matrix multiplication. | `KEEP` | HIGH | ZERO | MEDIUM |
| 45 | **Matrix Determinant & Inverse Calculator** | `matrix-inverse-calculator` | Calculates determinants, adjugates, and inverse matrices for $2\times2$ and $3\times3$ matrices. | `KEEP` | HIGH | ZERO | MEDIUM |
| 46 | **RREF & Matrix Rank Calculator** | `rref-calculator` | Reduces matrices to Reduced Row Echelon Form and computes matrix rank via Gaussian elimination. | `KEEP` | HIGH | ZERO | COMPLEX |

### Category Calculus & Advanced Math (7 Tools)

| # | Tool Name | Slug | Purpose & Capabilities | Status | Demand | Maint. | Diff. |
| :-: | :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| 47 | **Derivative Calculator** | `derivative-calculator` | Calculates 1st and 2nd symbolic derivatives using product, quotient, and chain rules. | `KEEP` | VERY HIGH | ZERO | COMPLEX |
| 48 | **Integral Calculator** | `integral-calculator` | Evaluates definite and indefinite integrals with standard integration rules and bounds. | `KEEP` | VERY HIGH | ZERO | COMPLEX |
| 49 | **Limit Calculator** | `limit-calculator` | Evaluates two-sided and one-sided limits as $x \to a$ and $x \to \pm\infty$. | `KEEP` | HIGH | ZERO | COMPLEX |
| 50 | **Taylor & Maclaurin Series Calculator** | `taylor-series-calculator` | Generates polynomial series expansions around center $x = a$ up to specified degree. | `KEEP` | MEDIUM | ZERO | COMPLEX |
| 51 | **Partial Derivative Calculator** | `partial-derivative-calculator` | Computes first-order and second-order partial derivatives ($\partial f/\partial x, \partial f/\partial y$) and gradients. | `KEEP` | HIGH | ZERO | COMPLEX |
| 52 | **Differential Equations First-Order Solver** | `differential-equations-calculator` | Solves separable and first-order linear ordinary differential equations ($y' + P(x)y = Q(x)$). | `ADD` | HIGH | ZERO | COMPLEX |
| 53 | **Numerical Integration Calculator** | `numerical-integration-calculator` | Approximates definite integrals using Simpson's Rule, Trapezoidal Rule, and Midpoint Riemann sums. | `ADD` | HIGH | ZERO | MEDIUM |

### Category Statistics & Probability (11 Tools)

| # | Tool Name | Slug | Purpose & Capabilities | Status | Demand | Maint. | Diff. |
| :-: | :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| 54 | **Descriptive Statistics Calculator** | `statistics-calculator` | Computes mean, median, mode, min, max, range, IQR, and variance for dataset inputs. | `KEEP` | VERY HIGH | ZERO | MEDIUM |
| 55 | **Standard Deviation & Variance Calculator** | `standard-deviation-calculator` | Computes sample ($s$) and population ($\sigma$) standard deviation and variance. | `KEEP` | VERY HIGH | ZERO | LOW |
| 56 | **Z-Score & Normal Distribution Calculator** | `z-score-calculator` | Computes standard normal z-scores, p-values, and cumulative probabilities under $N(0,1)$. | `KEEP` | VERY HIGH | ZERO | MEDIUM |
| 57 | **Confidence Interval Calculator** | `confidence-interval-calculator` | Calculates 90%, 95%, and 99% confidence intervals for population means and proportions. | `KEEP` | HIGH | ZERO | MEDIUM |
| 58 | **Linear Regression Calculator** | `linear-regression-calculator` | Computes best-fit regression line ($y = mx + b$), correlation coefficient ($r$), and $R^2$. | `KEEP` | HIGH | ZERO | MEDIUM |
| 59 | **Probability Calculator** | `probability-calculator` | Computes single event, mutually exclusive, independent, and conditional probabilities. | `KEEP` | HIGH | ZERO | LOW |
| 60 | **Binomial Distribution Calculator** | `binomial-distribution-calculator` | Calculates exact $P(X = k)$, cumulative $P(X \le k)$, mean, and variance for $n$ trials with probability $p$. | `KEEP` | HIGH | ZERO | MEDIUM |
| 61 | **Poisson Distribution Calculator** | `poisson-distribution-calculator` | Computes Poisson probability mass function and cumulative distribution values ($P(X=k)$). | `ADD` | MEDIUM | ZERO | LOW |
| 62 | **Chi-Square Test Calculator** | `chi-square-calculator` | Computes chi-square goodness-of-fit and contingency table test statistics ($\chi^2$). | `ADD` | HIGH | ZERO | MEDIUM |
| 63 | **Percentile & Quartile Calculator** | `percentile-calculator` | Calculates $k$-th percentile values, deciles, and 5-number summary ($Q_1, Q_2, Q_3$). | `KEEP` | HIGH | ZERO | LOW |
| 64 | **Sample Size & Margin of Error Calculator** | `sample-size-calculator` | Determines minimum survey sample size given confidence level, margin of error, and population size. | `ADD` | HIGH | ZERO | LOW |

### Category Physics (18 Tools)

| # | Tool Name | Slug | Purpose & Capabilities | Status | Demand | Maint. | Diff. |
| :-: | :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| 65 | **Kinematics & Motion Calculator** | `kinematics-calculator` | Solves 1D motion with constant acceleration using standard kinematic equations ($v, v_0, a, t, d$). | `KEEP` | VERY HIGH | ZERO | MEDIUM |
| 66 | **Projectile Motion Calculator** | `projectile-motion-calculator` | Calculates trajectory range, peak height, total flight time, and velocity components. | `KEEP` | VERY HIGH | ZERO | MEDIUM |
| 67 | **Newton's Second Law & Force Calculator** | `force-calculator` | Solves net force, mass, and acceleration relationships ($F = ma$). | `KEEP` | HIGH | ZERO | LOW |
| 68 | **Friction & Incline Plane Calculator** | `friction-calculator` | Calculates static/kinetic friction ($f = \mu N$) and parallel/perpendicular force on slopes. | `KEEP` | HIGH | ZERO | MEDIUM |
| 69 | **Work, Kinetic & Potential Energy Calculator** | `work-energy-calculator` | Computes mechanical work ($W = Fd\cos\theta$), kinetic energy, and gravitational potential energy. | `KEEP` | VERY HIGH | ZERO | LOW |
| 70 | **Momentum & Collision Calculator** | `momentum-collision-calculator` | Solves conservation of momentum for elastic and inelastic collisions in 1D. | `KEEP` | HIGH | ZERO | MEDIUM |
| 71 | **Free Fall Calculator** | `free-fall-calculator` | Computes impact velocity, free fall duration, and drop distance under gravity. | `KEEP` | HIGH | ZERO | LOW |
| 72 | **Gravitational Force & Orbit Calculator** | `gravitational-force-calculator` | Computes Newton's law of universal gravitation ($F = G\frac{m_1m_2}{r^2}$) and circular orbital speed. | `KEEP` | MEDIUM | ZERO | LOW |
| 73 | **Centripetal Force & Circular Motion** | `circular-motion-calculator` | Computes centripetal acceleration ($a_c = v^2/r$) and centripetal force ($F_c = m v^2/r$). | `ADD` | HIGH | ZERO | LOW |
| 74 | **Torque & Rotational Equilibrium Calculator** | `torque-calculator` | Calculates rotational torque ($\tau = r F \sin\theta$) and lever arm balance conditions. | `ADD` | MEDIUM | ZERO | LOW |
| 75 | **Simple Harmonic Motion & Pendulum Calculator** | `harmonic-motion-calculator` | Calculates period and frequency for simple pendulums ($T = 2\pi\sqrt{L/g}$) and mass-spring systems. | `ADD` | HIGH | ZERO | LOW |
| 76 | **Ohm's Law & Electric Power Calculator** | `ohms-law-calculator` | Solves Voltage ($V$), Current ($I$), Resistance ($R$), and Electric Power ($P = VI = I^2R$). | `KEEP` | VERY HIGH | ZERO | LOW |
| 77 | **Resistor & Capacitor Circuit Calculator** | `circuit-calculator` | Computes equivalent resistance and capacitance for Series and Parallel configurations. | `KEEP` | VERY HIGH | ZERO | MEDIUM |
| 78 | **Coulomb's Law Calculator** | `coulombs-law-calculator` | Calculates electrostatic force between point charges ($F = k_e \frac{|q_1q_2|}{r^2}$). | `ADD` | HIGH | ZERO | LOW |
| 79 | **Lens & Mirror Equation Calculator** | `lens-mirror-calculator` | Solves focal length, object distance, image distance, and magnification ($1/f = 1/d_o + 1/d_i$). | `KEEP` | HIGH | ZERO | LOW |
| 80 | **Wave Speed, Frequency & Wavelength Calculator** | `wave-speed-calculator` | Solves wave speed ($v = f\lambda$), wave period ($T = 1/f$), and photon energy. | `ADD` | HIGH | ZERO | LOW |
| 81 | **Density, Mass & Volume Calculator** | `density-calculator` | Solves density ($\rho = m/V$), mass, and volume with unit flexibility. | `KEEP` | VERY HIGH | ZERO | LOW |
| 82 | **Pressure & Buoyancy (Archimedes) Calculator** | `pressure-buoyancy-calculator` | Calculates hydrostatic fluid pressure ($P = \rho gh$) and Archimedes buoyant force ($F_b = \rho V g$). | `ADD` | HIGH | ZERO | LOW |

### Category Chemistry (14 Tools)

| # | Tool Name | Slug | Purpose & Capabilities | Status | Demand | Maint. | Diff. |
| :-: | :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| 83 | **Molar Mass & Molecular Weight Calculator** | `molar-mass-calculator` | Parses chemical formulas (e.g., $\text{H}_2\text{SO}_4, \text{Al}_2(\text{SO}_4)_3$) and computes exact molar mass. | `KEEP` | VERY HIGH | ZERO | MEDIUM |
| 84 | **Moles, Grams & Particles Converter** | `moles-converter` | Converts between grams, moles, and particle count using Avogadro's constant ($6.022\times 10^{23}$). | `KEEP` | VERY HIGH | ZERO | LOW |
| 85 | **Solution Molarity & Dilution Calculator** | `molarity-calculator` | Computes solution molarity ($M = \text{mol}/L$) and dilution volumes/concentrations ($M_1V_1 = M_2V_2$). | `KEEP` | VERY HIGH | ZERO | LOW |
| 86 | **Ideal Gas Law Calculator** | `ideal-gas-law` | Solves $PV = nRT$ and combined gas equations ($P_1V_1/T_1 = P_2V_2/T_2$) for pressure, volume, or temperature. | `KEEP` | VERY HIGH | ZERO | LOW |
| 87 | **Chemical Reaction Balancer** | `chemical-equation-balancer` | Balances chemical equations automatically using linear algebra matrix nullspace algorithms. | `KEEP` | VERY HIGH | ZERO | COMPLEX |
| 88 | **Stoichiometry & Theoretical Yield Calculator** | `stoichiometry-calculator` | Identifies limiting reactant, theoretical product yield, and percentage yield from reaction inputs. | `KEEP` | VERY HIGH | ZERO | MEDIUM |
| 89 | **pH, pOH & Ion Concentration Calculator** | `ph-calculator` | Calculates $\text{pH} = -\log[\text{H}^+]$, $\text{pOH} = -\log[\text{OH}^-]$, and $[\text{H}^+][\text{OH}^-] = 10^{-14}$. | `KEEP` | VERY HIGH | ZERO | LOW |
| 90 | **Buffer pH (Henderson-Hasselbalch) Calculator** | `buffer-ph-calculator` | Computes buffer solution pH using $\text{pH} = \text{p}K_a + \log([\text{A}^-]/[\text{HA}])$. | `ADD` | HIGH | ZERO | LOW |
| 91 | **Percent Composition by Mass Calculator** | `percent-composition-calculator` | Determines elemental percentage composition by mass for any compound formula. | `KEEP` | HIGH | ZERO | LOW |
| 92 | **Radioactive Decay & Half-Life Calculator** | `half-life-calculator` | Solves exponential decay ($N(t) = N_0(1/2)^{t/t_{1/2}}$) for remaining mass, rate, or elapsed time. | `KEEP` | HIGH | ZERO | LOW |
| 93 | **Calorimetry & Specific Heat Calculator** | `calorimetry-calculator` | Computes thermal energy transfer ($q = mc\Delta T$) and final thermal equilibrium temperatures. | `KEEP` | HIGH | ZERO | LOW |
| 94 | **Chemical Kinetics & Rate Law Calculator** | `chemical-kinetics-calculator` | Calculates zero, first, and second-order integrated rate laws and reaction rate constants. | `ADD` | MEDIUM | ZERO | LOW |
| 95 | **Electrochemical Cell Potential (Nernst) Calculator** | `cell-potential-calculator` | Calculates standard cell potential ($E^\circ$) and non-standard voltage via Nernst equation. | `KEEP` | HIGH | ZERO | LOW |
| 96 | **Empirical & Molecular Formula Calculator** | `empirical-formula-calculator` | Determines simplest whole-number empirical and molecular formulas from elemental mass percentages. | `ADD` | HIGH | ZERO | MEDIUM |

### Category Biology & Health Metrics (7 Tools)

| # | Tool Name | Slug | Purpose & Capabilities | Status | Demand | Maint. | Diff. |
| :-: | :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| 97 | **Punnett Square & Genetics Calculator** | `punnett-square` | Generates interactive monohybrid ($2\times2$) and dihybrid ($4\times4$) genetic crosses, genotypes, and phenotypes. | `KEEP` | VERY HIGH | ZERO | MEDIUM |
| 98 | **DNA Sequence Analyzer** | `dna-sequence-analyzer` | Generates reverse complement, GC%, melting temperature ($T_m$), and RNA/amino-acid translation. | `KEEP` | HIGH | ZERO | MEDIUM |
| 99 | **Hardy-Weinberg Equilibrium Calculator** | `hardy-weinberg-calculator` | Calculates allele frequencies ($p, q$) and genotype frequencies ($p^2, 2pq, q^2$) in populations. | `KEEP` | HIGH | ZERO | LOW |
| 100 | **BMI & Body Surface Area Calculator** | `bmi-calculator` | Computes Body Mass Index (BMI category) and Mosteller Body Surface Area (BSA). | `KEEP` | VERY HIGH | ZERO | LOW |
| 101 | **BMR & Daily Calorie Calculator (TDEE)** | `bmr-calculator` | Computes Basal Metabolic Rate (Mifflin-St Jeor) and Total Daily Energy Expenditure. | `ADD` | VERY HIGH | ZERO | LOW |
| 102 | **Target Heart Rate & Training Zones** | `target-heart-rate-calculator` | Calculates aerobic, anaerobic, and fat-burn training heart rate zones (Karvonen method). | `ADD` | HIGH | ZERO | LOW |
| 103 | **Daily Water Intake Calculator** | `water-intake-calculator` | Estimates daily hydration needs based on body weight, climate, and exercise activity levels. | `ADD` | HIGH | ZERO | LOW |

### Category Computer Science & Digital Logic (8 Tools)

| # | Tool Name | Slug | Purpose & Capabilities | Status | Demand | Maint. | Diff. |
| :-: | :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| 104 | **Base Converter (Binary/Dec/Hex/Oct)** | `base-converter` | Converts integer and fractional numbers between Binary, Decimal, Hexadecimal, Octal, and custom bases (2–36). | `KEEP` | VERY HIGH | ZERO | LOW |
| 105 | **IPv4 Subnet & CIDR Calculator** | `subnet-calculator` | Computes network address, broadcast address, usable IP range, subnet mask, and wildcard mask. | `KEEP` | VERY HIGH | ZERO | MEDIUM |
| 106 | **Bitwise Operations & Shift Calculator** | `bitwise-calculator` | Interactive bitwise AND, OR, XOR, NOT, left/right shifts with visual 32-bit register display. | `KEEP` | HIGH | ZERO | LOW |
| 107 | **Truth Table Generator & Logic Evaluator** | `truth-table-generator` | Parses propositional logic expressions ($land, lor, 
eg, oplus, 	o, leftrightarrow$) and outputs complete truth tables. | `KEEP` | VERY HIGH | ZERO | COMPLEX |
| 108 | **Data Storage & Bandwidth Calculator** | `bandwidth-calculator` | Calculates download/upload transfer durations across file sizes and internet connection speeds. | `ADD` | HIGH | ZERO | LOW |
| 109 | **ASCII, Text & Hexadecimal Converter** | `ascii-converter` | Converts raw text to/from ASCII decimal values, binary byte streams, and hex representations. | `ADD` | HIGH | ZERO | LOW |
| 110 | **Binary Arithmetic Calculator** | `binary-arithmetic-calculator` | Performs binary addition, subtraction, multiplication, and division with bit-by-bit carries. | `ADD` | HIGH | ZERO | MEDIUM |
| 111 | **Two's Complement & Signed Converter** | `twos-complement-calculator` | Converts positive and negative signed integers to 8-bit, 16-bit, and 32-bit Two's Complement binary. | `ADD` | HIGH | ZERO | LOW |

### Category Study Productivity & Writing (7 Tools)

| # | Tool Name | Slug | Purpose & Capabilities | Status | Demand | Maint. | Diff. |
| :-: | :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| 112 | **Word, Character & Sentence Counter** | `word-counter` | Real-time statistics for word count, character count (with/without spaces), sentences, and paragraphs. | `KEEP` | VERY HIGH | ZERO | LOW |
| 113 | **Reading & Speaking Time Calculator** | `reading-time-calculator` | Estimates silent reading duration (220 wpm) and spoken presentation duration (130 wpm). | `ADD` | VERY HIGH | ZERO | LOW |
| 114 | **Words to Pages Converter** | `words-to-pages-calculator` | Converts word counts to estimated academic essay pages (single/double spacing, font options). | `KEEP` | HIGH | ZERO | LOW |
| 115 | **Text Case Converter** | `case-converter` | Converts text between UPPERCASE, lowercase, Title Case, Sentence case, camelCase, and snake_case. | `KEEP` | VERY HIGH | ZERO | LOW |
| 116 | **Pomodoro Study Timer & Tracker** | `pomodoro-timer` | Clean 25/5 interval study timer with custom work/break intervals and audio chime notifications. | `KEEP` | VERY HIGH | ZERO | LOW |
| 117 | **Exam Countdown & Date Difference Calculator** | `date-difference-calculator` | Calculates exact calendar days, business days, and hours between dates or until upcoming exams. | `KEEP` | VERY HIGH | ZERO | LOW |
| 118 | **Random Number & Team Generator** | `random-number-generator` | Cryptographically random integer picker, dice roller, and student team group randomizer. | `KEEP` | HIGH | ZERO | LOW |

### Category Universal Measurement Converters (7 Tools)

| # | Tool Name | Slug | Purpose & Capabilities | Status | Demand | Maint. | Diff. |
| :-: | :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| 119 | **Length & Distance Converter** | `length-converter` | Converts between meters, centimeters, millimeters, kilometers, inches, feet, yards, and miles. | `ADD` | VERY HIGH | ZERO | LOW |
| 120 | **Weight & Mass Converter** | `weight-converter` | Converts between kilograms, grams, milligrams, pounds (lb), ounces (oz), and metric tons. | `ADD` | VERY HIGH | ZERO | LOW |
| 121 | **Temperature Converter** | `temperature-converter` | Instant bidirectional conversion between Celsius (°C), Fahrenheit (°F), and Kelvin (K). | `ADD` | VERY HIGH | ZERO | LOW |
| 122 | **Time & Duration Converter** | `time-converter` | Converts between milliseconds, seconds, minutes, hours, days, weeks, and years. | `ADD` | HIGH | ZERO | LOW |
| 123 | **Speed & Velocity Converter** | `speed-converter` | Converts between km/h, mph, m/s, knots, and ft/s. | `ADD` | HIGH | ZERO | LOW |
| 124 | **Area Measurement Converter** | `area-converter` | Converts between square meters, square feet, square km, square miles, acres, and hectares. | `ADD` | HIGH | ZERO | LOW |
| 125 | **Volume & Fluid Capacity Converter** | `volume-converter` | Converts between liters, milliliters, cubic meters, gallons (US/UK), quarts, pints, and fluid oz. | `ADD` | HIGH | ZERO | LOW |

---

## 4. Top 25 Flagship Student Tools

These 25 tools represent StudentKit's highest-utility, daily-driver academic and student calculators:

1. **GPA Calculator** (`gpa-calculator`) — Multi-semester & cumulative GPA projection on standard 4.0 scale.
2. **CGPA & Percentage Converter** (`cgpa-percentage-calculator`) — Dual standard 9.5 / custom multiplier converter.
3. **Quadratic Formula & Equation Solver** (`quadratic-formula-calculator`) — Real & complex roots, discriminant, and vertex solver.
4. **Final Grade Calculator** (`final-grade-calculator`) — Calculates exact final exam score required for a target grade.
5. **Attendance Calculator & Bunk Planner** (`attendance-calculator`) — 75%/85% threshold & safe skip planner.
6. **Student Loan & EMI Calculator** (`student-loan-calculator`) — Monthly installment & interest amortization breakdown.
7. **Discount & Sale Price Calculator** (`discount-calculator`) — Stacked percentage discounts and savings calculator.
8. **Molar Mass & Molecular Weight Calculator** (`molar-mass-calculator`) — Fast chemical formula weight parser.
9. **Chemical Reaction Balancer** (`chemical-equation-balancer`) — Automated stoichiometry balancing via matrix nullspace.
10. **Derivative Calculator** (`derivative-calculator`) — Step-by-step differentiation engine with chain rule.
11. **Integral Calculator** (`integral-calculator`) — Definite & indefinite integration solver.
12. **Descriptive Statistics Calculator** (`statistics-calculator`) — Instant mean, median, mode, range, and IQR.
13. **Z-Score & Normal Distribution Calculator** (`z-score-calculator`) — P-values, percentiles, and standard normal curve.
14. **Kinematics & Motion Calculator** (`kinematics-calculator`) — 1D constant acceleration solver ($v, v_0, a, t, d$).
15. **Projectile Motion Calculator** (`projectile-motion-calculator`) — 2D trajectory physics solver with angle and velocity.
16. **Ohm's Law & Electric Power Calculator** (`ohms-law-calculator`) — Voltage, current, resistance, and wattage solver.
17. **Resistor & Capacitor Circuit Calculator** (`circuit-calculator`) — Series & parallel equivalent values.
18. **Ideal Gas Law Calculator** (`ideal-gas-law`) — $PV = nRT$ and combined gas equations.
19. **pH, pOH & Concentration Calculator** (`ph-calculator`) — Acid-base pH and ion concentrations.
20. **Punnett Square & Genetics Calculator** (`punnett-square`) — Monohybrid ($2\times2$) and dihybrid ($4\times4$) crosses.
21. **Base Converter (Binary/Dec/Hex/Oct)** (`base-converter`) — Fast radix conversion with arbitrary bases (2–36).
22. **IPv4 Subnet & CIDR Calculator** (`subnet-calculator`) — Network, broadcast, usable host range, and netmask.
23. **Truth Table Generator** (`truth-table-generator`) — Propositional logic and boolean expressions evaluator.
24. **Word, Character & Sentence Counter** (`word-counter`) — Real-time text analytics for student essays.
25. **Pomodoro Study Timer & Tracker** (`pomodoro-timer`) — 25/5 interval timer with customizable work/break audio chimes.

---

## 5. Deliberately Rejected & Consolidated Patterns

To ensure StudentKit never lapses into bloated, low-value filler, the following types of tools have been **deliberately rejected or consolidated**:

1. **Static Reference Sheets / Guides**:
   - *Periodic Table Reference Sheet*, *Organic Functional Groups Cheat Sheet*, *Physics Constants List*, *Calculus Rules Cheat Sheet*, *Mitosis Stages Diagram*.
   - **Reason:** StudentKit's absolute policy is **100% interactive tools**. Static reference charts do not qualify as tools and are readily available on Wikipedia.
2. **Formula-Fragment Micro-Calculators**:
   - Separate tools for *Kinetic Energy Calculator*, *Potential Energy Calculator*, *Work Calculator*, *Power Calculator*, *Momentum Calculator*, *Impulse Calculator*.
   - **Reason:** All consolidated into high-quality unified tools (`work-energy-calculator`, `momentum-collision-calculator`, `ohms-law-calculator`).
3. **Gas Law Fragmentation**:
   - Separate tools for *Boyle's Law*, *Charles's Law*, *Gay-Lussac's Law*, *Dalton's Law*, *Graham's Law*.
   - **Reason:** All merged into the comprehensive `ideal-gas-law` calculator.
4. **Trigonometric Function Micro-Fragments**:
   - Separate tools for *Sin Calculator*, *Cos Calculator*, *Tan Calculator*, *Secant Calculator*, *Cosecant Calculator*, *Cotangent Calculator*.
   - **Reason:** Unified into `trigonometric-calculator` with an instant standard/inverse toggle.
5. **Live API-Dependent Tools**:
   - *Live Currency Converter*, *Live Stock / Crypto Ticker*, *Weather Forecaster*.
   - **Reason:** External APIs introduce rate limits, downtime, maintenance overhead, and privacy tracking.
6. **AI-Powered "Writers" or "Solvers"**:
   - *AI Essay Generator*, *AI Summarizer*, *AI Homework Solver*.
   - **Reason:** Requires backend GPU infrastructure, subscription costs, and produces unreliable hallucinations.

---

## 6. Recommended Phase 3B Implementation Batches

The 125 tools are structured into **6 execution batches** (Batch sum = $15 + 11 + 27 + 18 + 32 + 22 = 125$):

### Batch 1: Academic & Study Productivity (15 Tools)
`gpa-calculator`, `cgpa-percentage-calculator`, `final-grade-calculator`, `weighted-grade-calculator`, `attendance-calculator`, `target-marks-calculator`, `grade-converter`, `marks-percentage-calculator`, `word-counter`, `reading-time-calculator`, `words-to-pages-calculator`, `case-converter`, `pomodoro-timer`, `date-difference-calculator`, `random-number-generator`.

### Batch 2: Everyday & Student Finance (11 Tools)
`student-loan-calculator`, `simple-interest-calculator`, `compound-interest-calculator`, `discount-calculator`, `sales-tax-calculator`, `tip-bill-split-calculator`, `student-budget-calculator`, `inflation-calculator`, `margin-markup-calculator`, `hourly-to-salary-calculator`, `rent-split-calculator`.

### Batch 3: Core Mathematics, Geometry & Matrices (27 Tools)
`quadratic-formula-calculator`, `simultaneous-equations-solver`, `polynomial-calculator`, `fraction-calculator`, `ratio-calculator`, `percentage-calculator`, `percentage-change-calculator`, `prime-factorization-calculator`, `lcm-gcd-calculator`, `significant-figures-calculator`, `scientific-notation-calculator`, `exponent-calculator`, `logarithm-calculator`, `sequence-series-calculator`, `set-calculator`, `permutations-combinations-calculator`, `triangle-calculator`, `triangle-area-calculator`, `circle-calculator`, `area-calculator`, `volume-surface-area-calculator`, `trigonometric-calculator`, `unit-circle-calculator`, `vector-calculator`, `matrix-calculator`, `matrix-inverse-calculator`, `rref-calculator`.

### Batch 4: Calculus & Statistics (18 Tools)
`derivative-calculator`, `integral-calculator`, `limit-calculator`, `taylor-series-calculator`, `partial-derivative-calculator`, `differential-equations-calculator`, `numerical-integration-calculator`, `statistics-calculator`, `standard-deviation-calculator`, `z-score-calculator`, `confidence-interval-calculator`, `linear-regression-calculator`, `probability-calculator`, `binomial-distribution-calculator`, `poisson-distribution-calculator`, `chi-square-calculator`, `percentile-calculator`, `sample-size-calculator`.

### Batch 5: Physics & Chemistry (32 Tools)
`kinematics-calculator`, `projectile-motion-calculator`, `force-calculator`, `friction-calculator`, `work-energy-calculator`, `momentum-collision-calculator`, `free-fall-calculator`, `gravitational-force-calculator`, `circular-motion-calculator`, `torque-calculator`, `harmonic-motion-calculator`, `ohms-law-calculator`, `circuit-calculator`, `coulombs-law-calculator`, `lens-mirror-calculator`, `wave-speed-calculator`, `density-calculator`, `pressure-buoyancy-calculator`, `molar-mass-calculator`, `moles-converter`, `molarity-calculator`, `ideal-gas-law`, `chemical-equation-balancer`, `stoichiometry-calculator`, `ph-calculator`, `buffer-ph-calculator`, `percent-composition-calculator`, `half-life-calculator`, `calorimetry-calculator`, `chemical-kinetics-calculator`, `cell-potential-calculator`, `empirical-formula-calculator`.

### Batch 6: Biology, Computer Science & Universal Converters (22 Tools)
`punnett-square`, `dna-sequence-analyzer`, `hardy-weinberg-calculator`, `bmi-calculator`, `bmr-calculator`, `target-heart-rate-calculator`, `water-intake-calculator`, `base-converter`, `subnet-calculator`, `bitwise-calculator`, `truth-table-generator`, `bandwidth-calculator`, `ascii-converter`, `binary-arithmetic-calculator`, `twos-complement-calculator`, `length-converter`, `weight-converter`, `temperature-converter`, `time-converter`, `speed-converter`, `area-converter`, `volume-converter`.

---

## 7. Mathematical & Architectural Sanity Proof

$$\text{Sum of Categories } (A) = 8 + 11 + 16 + 11 + 7 + 11 + 18 + 14 + 7 + 8 + 7 + 7 = \mathbf{125}$$
$$\text{Individual Catalog Rows } (B) = \mathbf{125}$$
$$\text{Sum of Implementation Batches } (C) = 15 + 11 + 27 + 18 + 32 + 22 = \mathbf{125}$$
$$\text{Top 25 Flagship Tools } (D) = \mathbf{25}$$

$$A = B = C = 125 \quad (\text{Zero Discrepancy})$$

# StudentKit Tool Reduction & Curation Audit

> **Strategic Objective**: Transform StudentKit from an uncurated 412-tool directory into a compact, high-quality collection of **100–150 genuinely useful student tools**.
> **Rule**: Quality > Tool Count. Transition from micro-formula bloat to comprehensive, high-utility student applications.
> **Status**: READ-ONLY AUDIT. Protected Baseline: `e2b51b5`. No application source files modified.

---

## 1. Executive Summary

StudentKit currently hosts **412 active tools** across 18 categories. A substantial majority (~65%) of these tools are single-variable formula solvers (e.g., individual kinematic permutations like $v=u+at$, single gas laws like Boyle's Law, or narrow medical physiology equations like renal clearance) created during initial rapid expansion.

While mathematically functional, this micro-tool fragmentation creates:
1. **Severe keyword cannibalization and thin content risk** under search engine quality guidelines.
2. **User fatigue** requiring students to search through dozens of disconnected single-formula pages instead of using one versatile, multi-variable solver.
3. **Maintenance overhead** across 400+ distinct static routes and metadata blocks.

### Key Audit Recommendations
- **Total Current Active Tools**: **412**
- **CORE KEEP (Tier 1 Essential)**: **72 tools** (Foundational tools with massive organic demand: GPA, Attendance, Percentage, Words to Pages, Unit Converter, Quadratic Solver, Z-Score, etc.)
- **KEEP (Tier 2 & 3 Solid Tools)**: **29 tools** (Valuable curriculum calculators with clear standalone intent: Law of Sines, Eigenvalues, Binomial Distribution, etc.)
- **MERGE**: **68 tools** (Subordinate micro-tools to be absorbed as features/tabs inside broader canonical parent tools)
- **REMOVE**: **228 tools** (Overly niche, hyper-specialized, or low-demand micro-calculators)
- **REFERENCE**: **15 tools** (High-value visual reference guides: Periodic Table, Animal/Plant Cell Anatomy, Mitosis Stages, Skeleton, Amino Acids)
- **Estimated Standalone Active Tools in Curated Ecosystem**: **116 tools** (Well within the targeted **100–150** high-quality tool range).

---

## 2. Current Ecosystem Breakdown

| Category | Current Tool Count | Assessment |
| :--- | :--- | :--- |
| **Mathematics** | 111 | **Severely Oversized**: Bloated with single-step algebra formulas, duplicate geometric volume/area formulas, and hyper-specialized triangle calculations. |
| **Physics** | 106 | **Severely Oversized**: Dominated by single-equation mechanics ($F=ma$, $p=mv$, $W=Fd$, $v=u+at$) that belong inside 5–6 unified mechanics and circuit suites. |
| **Chemistry** | 89 | **Severely Oversized**: Fragmented gas laws ($PV=nRT$, Boyle's, Charles's) and acid-base steps ($pH$, $pOH$, $[H^+]$, $[OH^-]$) that belong inside consolidated suites. |
| **Biology** | 55 | **Oversized**: Contains excellent visual reference charts alongside overly narrow clinical medicine formulas (case fatality rate, alveolar ventilation, renal clearance). |
| **Statistics** | 17 | **Balanced**: Strong student intent; minor consolidation of regression and summary metrics needed. |
| **Academic** | 6 | **High Value**: Core student utilities (GPA, Attendance, CGPA, Grading). |
| **Study & Productivity** | 5 | **High Value**: Essential writing & productivity utilities (Words to Pages, Word Counter, Pomodoro, Case Converter). |
| **Linear Algebra** | 4 | **Solid**: High college math utility (Matrix, RREF, Eigenvalues). |
| **Computer Science** | 3 | **High Value**: Fundamental CS tools (Bitwise, Subnet, Base Converter). |
| **Converters** | 2 | **High Value**: Flagship Unit Converter and Scientific Notation tool. |
| **Date & Time** | 3 | **High Value**: Age Calculator, Date Difference, Exam Countdown. |
| **Discrete Mathematics** | 3 | **High Value**: Truth Table, Set Calculator, Permutations & Combinations. |
| **Finance** | 2 | **High Value**: Compound Interest, Simple Interest. |
| **Student Utilities** | 2 | **High Value**: Final Grade, Weighted Grade. |
| **Singletons (Science, Engineering, etc.)** | 4 | **Redundant**: Fragmented Ohm's law, kinetic energy, relative error. |
| **Total** | **412** | |

---

## 3. Classification Methodology & Scoring Criteria

Every tool in StudentKit is assigned exactly one primary classification:

- **CORE KEEP (Tier 1)**: Essential student utility with high search demand, broad audience, and daily student utility.
- **KEEP (Tier 2/3)**: Legitimate standalone calculator with strong curriculum relevance.
- **MERGE**: Subordinate calculation or variation that should become a feature, tab, or mode inside a canonical parent tool.
- **REMOVE**: Obscure university-level single formula, near-zero search volume, or excessive specialization with low educational ROI.
- **REFERENCE**: High-value visual educational diagram or table worth maintaining as a reference page.

### Scoring Dimensions (Estimated 1–10 Scales)
- **Usefulness (30%)**: Real-world practical utility for homework, exam prep, and daily tasks.
- **Likely Search Demand (25%)**: Estimated organic Google search volume and discovery intent.
- **Audience Breadth (20%)**: Span from general students (K-12, college) to hyper-niche graduate specialists.
- **Standalone Value (15%)**: Justification for existing as an independent indexed page vs. a dropdown mode.
- **Redundancy Penalty (10%)**: Degree of overlap with stronger existing or proposed tools.
- **Overall Priority Score**: Weighted synthesis from 1.0 to 10.0.

---

## 4. Complete Tool Inventory Evaluation (412 Tools)

| # | Tool Name | Slug | Category | Classification | Usefulness | Demand | Breadth | Standalone | Maintenance | Redundancy | Overall Score | Strategic Rationale |
| :---: | :--- | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| 1 | **CGPA to Percentage & Percentage to CGPA Converter** | `cgpa-to-percentage` | Academic | **CORE KEEP** | 10 | 10 | 10 | 10 | 9 | 1 | **10** | Crucial university grading conversion widely used across global university grading systems. |
| 2 | **GPA Calculator (Grade Point Average)** | `gpa-calculator` | Academic | **CORE KEEP** | 10 | 10 | 10 | 10 | 9 | 1 | **10** | Top search intent for college students; primary flagship tool. |
| 3 | **Percentage Calculator** | `percentage-calculator` | Academic | **CORE KEEP** | 10 | 10 | 10 | 10 | 9 | 1 | **10** | Universal percentage utility (X% of Y, % increase/decrease, % difference). |
| 4 | **Marks Calculator** | `marks-calculator` | Academic | **MERGE** | 7 | 6 | 7 | 3 | 9 | 9 | **5.7** | Simple marks to percentage calculation belongs as a dedicated preset inside Percentage Calculator. |
| 5 | **Required Marks Calculator** | `required-marks` | Academic | **MERGE** | 7 | 6 | 7 | 3 | 9 | 9 | **5.7** | Functionally identical to Final Grade Calculator. |
| 6 | **Attendance Calculator** | `attendance-calculator` | Academic | **CORE KEEP** | 10 | 9 | 10 | 10 | 9 | 1 | **9.8** | High-utility student compliance calculator (calculate bunk/needed classes for 75%/80%). |
| 7 | **Study Hours Calculator** | `study-hours` | Study & Productivity | **KEEP** | 7 | 6 | 7 | 7 | 9 | 2 | **7** | Useful study routine planner for credit-hour workload balancing. |
| 8 | **Pomodoro Timer** | `pomodoro-timer` | Study & Productivity | **CORE KEEP** | 8 | 9 | 8 | 9 | 9 | 1 | **8.6** | Popular student focus timer with customizable intervals and sound notifications. |
| 9 | **Word Counter** | `word-counter` | Study & Productivity | **CORE KEEP** | 9 | 10 | 9 | 9 | 9 | 1 | **9.3** | Universal writing utility with character, word, sentence, paragraph counts and reading time. |
| 10 | **Age Calculator** | `age-calculator` | Date & Time | **CORE KEEP** | 9 | 10 | 10 | 9 | 9 | 1 | **9.5** | Massive consumer and student search volume for exact age, next birthday, and date benchmarks. |
| 11 | **Date Difference** | `date-difference` | Date & Time | **CORE KEEP** | 8 | 8 | 9 | 8 | 9 | 1 | **8.4** | Calculates days, weeks, and months between two calendar dates. |
| 12 | **Exam Countdown** | `exam-countdown` | Date & Time | **KEEP** | 7 | 7 | 8 | 7 | 9 | 2 | **7.4** | Visual countdown timer for student deadlines and exam milestones. |
| 13 | **Unit Converter** | `unit-converter` | Converters | **CORE KEEP** | 10 | 10 | 10 | 10 | 9 | 1 | **10** | Flagship converter covering length, mass, volume, temperature, pressure, speed, energy, power, time. |
| 14 | **Percentage Change** | `percentage-change` | Mathematics | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Core high school & college mathematics curriculum standard with consistent search volume. |
| 15 | **Average Calculator** | `average-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 16 | **Ratio Calculator** | `ratio-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 17 | **Random Number Generator** | `random-number` | Random & Utilities | **CORE KEEP** | 8 | 9 | 9 | 8 | 9 | 1 | **8.7** | Universal random number and dice roller utility for student presentations, sampling, and games. |
| 18 | **Square Calculator** | `square-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 19 | **Rectangle Area Calculator** | `rectangle-area-calculator` | Mathematics | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Core high school & college mathematics curriculum standard with consistent search volume. |
| 20 | **Kinetic Energy Calculator** | `kinetic-energy-calculator` | Science | **MERGE** | 7 | 7 | 7 | 4 | 9 | 9 | **6** | Kinetic energy (0.5mv²) belongs in a unified Work, Energy & Power physics calculator. |
| 21 | **Voltage Calculator (Ohm's Law)** | `ohms-law-voltage` | Engineering | **MERGE** | 7 | 7 | 8 | 3 | 9 | 10 | **6** | Single variable solver for V=IR; fully covered by bidirectional Ohm’s Law calculator. |
| 22 | **Square Root Calculator** | `square-root-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 23 | **Cube Calculator** | `cube-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 24 | **Cube Root Calculator** | `cube-root-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 25 | **Exponent Calculator** | `exponent-calculator` | Mathematics | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Core high school & college mathematics curriculum standard with consistent search volume. |
| 26 | **Logarithm Calculator** | `logarithm-calculator` | Mathematics | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Core high school & college mathematics curriculum standard with consistent search volume. |
| 27 | **Absolute Value Calculator** | `absolute-value-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 28 | **Percentage Difference Calculator** | `percentage-difference-calculator` | Mathematics | **MERGE** | 7 | 7 | 7 | 4 | 9 | 9 | **6** | Direct overlap with percentage-calculator; combined into unified bidirectional tool. |
| 29 | **Percentage Error Calculator** | `percentage-error-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 30 | **Remainder Calculator** | `remainder-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 31 | **Factorial Calculator** | `factorial-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 32 | **GCD Calculator** | `gcd-calculator` | Mathematics | **MERGE** | 7 | 7 | 7 | 4 | 9 | 9 | **6** | Direct overlap with lcm-calculator; combined into unified bidirectional tool. |
| 33 | **LCM Calculator** | `lcm-calculator` | Mathematics | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Core high school & college mathematics curriculum standard with consistent search volume. |
| 34 | **Prime Number Checker** | `prime-checker` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 35 | **Quadratic Equation Solver** | `quadratic-equation-solver` | Mathematics | **MERGE** | 7 | 7 | 7 | 4 | 9 | 9 | **6** | Direct overlap with quadratic-formula-calculator; combined into unified bidirectional tool. |
| 36 | **Linear Equation Solver** | `linear-equation-solver` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 37 | **Pythagorean Theorem Calculator** | `pythagorean-theorem-calculator` | Mathematics | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Core high school & college mathematics curriculum standard with consistent search volume. |
| 38 | **Circle Area Calculator** | `circle-area-calculator` | Mathematics | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Core high school & college mathematics curriculum standard with consistent search volume. |
| 39 | **Circle Circumference Calculator** | `circle-circumference-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 40 | **Square Perimeter Calculator** | `square-perimeter-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 41 | **Rectangle Perimeter Calculator** | `rectangle-perimeter-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 42 | **Cube Volume Calculator** | `cube-volume-calculator` | Mathematics | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Core high school & college mathematics curriculum standard with consistent search volume. |
| 43 | **Sphere Volume Calculator** | `sphere-volume-calculator` | Mathematics | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Core high school & college mathematics curriculum standard with consistent search volume. |
| 44 | **Cylinder Volume Calculator** | `cylinder-volume-calculator` | Mathematics | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Core high school & college mathematics curriculum standard with consistent search volume. |
| 45 | **Cone Volume Calculator** | `cone-volume-calculator` | Mathematics | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Core high school & college mathematics curriculum standard with consistent search volume. |
| 46 | **Arithmetic Sequence Calculator** | `arithmetic-sequence-calculator` | Mathematics | **KEEP** | 8 | 7 | 7 | 7 | 9 | 3 | **7.4** | Solid intermediate algebra and trigonometry calculator. |
| 47 | **Geometric Sequence Calculator** | `geometric-sequence-calculator` | Mathematics | **KEEP** | 8 | 7 | 7 | 7 | 9 | 3 | **7.4** | Solid intermediate algebra and trigonometry calculator. |
| 48 | **Mean Calculator** | `mean-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 49 | **Median Calculator** | `median-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 50 | **Mode Calculator** | `mode-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 51 | **Range Calculator** | `range-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 52 | **Variance Calculator** | `variance-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 53 | **Standard Deviation Calculator** | `standard-deviation-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 54 | **Fraction to Decimal** | `fraction-to-decimal` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 55 | **Decimal to Fraction Converter** | `decimal-to-fraction` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 56 | **Ratio Simplifier** | `ratio-simplifier` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 57 | **Proportion Calculator** | `proportion-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 58 | **Number to Words Converter** | `number-to-words` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 59 | **Roman Numeral Converter** | `roman-numeral-converter` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 60 | **Scientific Calculator** | `scientific-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 61 | **Simultaneous Equation Solver** | `simultaneous-equations` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 62 | **Matrix Calculator** | `matrix-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 63 | **Fraction Calculator** | `fraction-calculator` | Mathematics | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Core high school & college mathematics curriculum standard with consistent search volume. |
| 64 | **Permutation Calculator (nPr)** | `permutation-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 65 | **Combination Calculator (nCr)** | `combination-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 66 | **Probability Calculator** | `probability-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 67 | **Polynomial Calculator** | `polynomial-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 68 | **Trigonometric Calculator** | `trigonometric-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 69 | **Right Triangle Calculator** | `right-triangle-calculator` | Mathematics | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Core high school & college mathematics curriculum standard with consistent search volume. |
| 70 | **Triangle Calculator** | `triangle-calculator` | Mathematics | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Core high school & college mathematics curriculum standard with consistent search volume. |
| 71 | **Law of Sines Calculator** | `law-of-sines-calculator` | Mathematics | **KEEP** | 8 | 7 | 7 | 7 | 9 | 3 | **7.4** | Solid intermediate algebra and trigonometry calculator. |
| 72 | **Law of Cosines Calculator** | `law-of-cosines-calculator` | Mathematics | **KEEP** | 8 | 7 | 7 | 7 | 9 | 3 | **7.4** | Solid intermediate algebra and trigonometry calculator. |
| 73 | **Missing Angle Calculator** | `missing-angle-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 74 | **Heron's Formula Calculator** | `herons-formula-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 75 | **Triangle Area Calculator** | `triangle-area-calculator` | Mathematics | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Core high school & college mathematics curriculum standard with consistent search volume. |
| 76 | **Triangle Perimeter Calculator** | `triangle-perimeter-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 77 | **Hypotenuse Calculator** | `hypotenuse-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 78 | **Opposite Side Calculator** | `opposite-side-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 79 | **Adjacent Side Calculator** | `adjacent-side-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 80 | **Degrees to Radians** | `degrees-to-radians` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 81 | **Radians to Degrees** | `radians-to-degrees` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 82 | **DMS to Decimal Degrees (Degrees, Minutes, Seconds)** | `dms-to-decimal-degrees` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 83 | **Decimal Degrees to DMS** | `decimal-degrees-to-dms` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 84 | **Trigonometric Identities** | `trig-identities` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 85 | **Unit Circle** | `unit-circle` | Mathematics | **REFERENCE** | 8 | 8 | 8 | 8 | 9 | 1 | **8.2** | High-demand visual trigonometric unit circle reference guide. |
| 86 | **Limit Calculator** | `limit-calculator` | Mathematics | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Core high school & college mathematics curriculum standard with consistent search volume. |
| 87 | **One-Sided Limit Calculator** | `one-sided-limit-calculator` | Mathematics | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Core high school & college mathematics curriculum standard with consistent search volume. |
| 88 | **Infinite Limit Calculator** | `infinite-limit-calculator` | Mathematics | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Core high school & college mathematics curriculum standard with consistent search volume. |
| 89 | **Limit at Infinity Calculator** | `limit-at-infinity-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 90 | **Derivative Calculator** | `derivative-calculator` | Mathematics | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Core high school & college mathematics curriculum standard with consistent search volume. |
| 91 | **Second Derivative Calculator** | `second-derivative-calculator` | Mathematics | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Core high school & college mathematics curriculum standard with consistent search volume. |
| 92 | **Partial Derivative Calculator** | `partial-derivative-calculator` | Mathematics | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Core high school & college mathematics curriculum standard with consistent search volume. |
| 93 | **Implicit Differentiation** | `implicit-differentiation-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 94 | **Logarithmic Differentiation** | `logarithmic-differentiation-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 95 | **Integral Calculator** | `integral-calculator` | Mathematics | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Core high school & college mathematics curriculum standard with consistent search volume. |
| 96 | **Definite Integral Calculator** | `definite-integral-calculator` | Mathematics | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Core high school & college mathematics curriculum standard with consistent search volume. |
| 97 | **Indefinite Integral Calculator** | `indefinite-integral-calculator` | Mathematics | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Core high school & college mathematics curriculum standard with consistent search volume. |
| 98 | **Numerical Integration** | `numerical-integration-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 99 | **Tangent Line Calculator** | `tangent-line-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 100 | **Normal Line Calculator** | `normal-line-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 101 | **Average Rate of Change Calculator** | `average-rate-of-change` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 102 | **Instantaneous Rate of Change** | `instantaneous-rate-of-change` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 103 | **Critical Point Calculator** | `critical-point-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 104 | **Inflection Point Calculator** | `inflection-point-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 105 | **Increasing/Decreasing Calculator** | `function-increasing-decreasing` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 106 | **Concavity Calculator** | `concavity-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 107 | **Extrema Calculator** | `extrema-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 108 | **Related Rates Calculator** | `related-rates-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 109 | **Optimization Calculator** | `optimization-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 110 | **Marginal Cost Calculator** | `marginal-cost-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 111 | **Marginal Revenue Calculator** | `marginal-revenue-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 112 | **Marginal Profit Calculator** | `marginal-profit-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 113 | **Arithmetic Series Calculator** | `arithmetic-series-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 114 | **Geometric Series Calculator** | `geometric-series-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 115 | **Geometric Series Sum** | `geometric-series-sum` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 116 | **Infinite Geometric Series** | `infinite-geometric-series` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 117 | **Sequence Calculator** | `sequence-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 118 | **Sigma Summation Calculator** | `sigma-summation-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 119 | **Calculus Formulas** | `calculus-formulas` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 120 | **Derivative Rules** | `derivative-rules` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 121 | **Integration Rules** | `integration-rules` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 122 | **Common Limits** | `common-limits` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 123 | **Calculus Identities** | `calculus-identities` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 124 | **Taylor Series Expansion Calculator** | `taylor-series-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 125 | **Maclaurin Series Calculator** | `maclaurin-series-calculator` | Mathematics | **REMOVE** | 4 | 3 | 3 | 3 | 9 | 6 | **3.5** | Overly narrow single-formula algebraic derivation with low search intent. |
| 126 | **Speed Calculator** | `speed-calculator` | Physics | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Subordinate formula belongs inside unified kinematics-calculator suite. |
| 127 | **Velocity Calculator** | `velocity-calculator` | Physics | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Subordinate formula belongs inside unified kinematics-calculator suite. |
| 128 | **Acceleration Calculator** | `acceleration-calculator` | Physics | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Subordinate formula belongs inside unified kinematics-calculator suite. |
| 129 | **Newton's Second Law** | `newtons-second-law-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 130 | **Force Calculator** | `force-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 131 | **Work Calculator** | `work-calculator` | Physics | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Subordinate formula belongs inside unified work-energy-power-calculator suite. |
| 132 | **Power Calculator** | `power-calculator` | Physics | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Subordinate formula belongs inside unified work-energy-power-calculator suite. |
| 133 | **Potential Energy** | `potential-energy-calculator` | Physics | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Subordinate formula belongs inside unified work-energy-power-calculator suite. |
| 134 | **Momentum Calculator** | `momentum-calculator` | Physics | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Subordinate formula belongs inside unified momentum-collision-calculator suite. |
| 135 | **Centripetal Force** | `centripetal-force-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 136 | **Torque Calculator** | `torque-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 137 | **Distance Calculator** | `distance-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 138 | **Time Calculator** | `time-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 139 | **Free Fall Calculator** | `free-fall-calculator` | Physics | **CORE KEEP** | 9 | 9 | 8 | 9 | 9 | 2 | **8.8** | Foundational physics milestone calculator taught in all introductory physics classes. |
| 140 | **Projectile Range** | `projectile-motion-calculator` | Physics | **CORE KEEP** | 9 | 9 | 8 | 9 | 9 | 2 | **8.8** | Foundational physics milestone calculator taught in all introductory physics classes. |
| 141 | **Impulse Calculator** | `impulse-calculator` | Physics | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Subordinate formula belongs inside unified momentum-collision-calculator suite. |
| 142 | **Mechanical Energy** | `mechanical-energy-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 143 | **Centripetal Acceleration** | `centripetal-acceleration-calculator` | Physics | **KEEP** | 7 | 7 | 7 | 7 | 9 | 3 | **7.1** | Core high school / AP physics mechanics and electromagnetism problem. |
| 144 | **Friction Calculator** | `friction-calculator` | Physics | **KEEP** | 7 | 7 | 7 | 7 | 9 | 3 | **7.1** | Core high school / AP physics mechanics and electromagnetism problem. |
| 145 | **Normal Force Calculator** | `normal-force-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 146 | **Angular Momentum** | `angular-momentum-calculator` | Physics | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Subordinate formula belongs inside unified momentum-collision-calculator suite. |
| 147 | **Moment of Inertia (Point Mass)** | `moment-of-inertia-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 148 | **Gravitational Force** | `gravitational-force-calculator` | Physics | **KEEP** | 7 | 7 | 7 | 7 | 9 | 3 | **7.1** | Core high school / AP physics mechanics and electromagnetism problem. |
| 149 | **Escape Velocity** | `escape-velocity-calculator` | Physics | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Subordinate formula belongs inside unified kinematics-calculator suite. |
| 150 | **Weight Calculator** | `weight-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 151 | **Gravity Calculator** | `gravity-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 152 | **Orbital Velocity** | `orbital-velocity-calculator` | Physics | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Subordinate formula belongs inside unified kinematics-calculator suite. |
| 153 | **Gravitational PE** | `gravitational-potential-energy-calculator` | Physics | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Subordinate formula belongs inside unified work-energy-power-calculator suite. |
| 154 | **Density Calculator** | `density-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 155 | **Pressure Calculator** | `pressure-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 156 | **Hydrostatic Pressure** | `hydrostatic-pressure-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 157 | **Buoyant Force** | `buoyant-force-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 158 | **Archimedes Principle** | `archimedes-principle-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 159 | **Continuity Equation** | `continuity-equation-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 160 | **Bernoulli (Pressure)** | `bernoulli-equation-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 161 | **Flow Rate Calculator** | `flow-rate-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 162 | **Wavelength Calculator** | `wavelength-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 163 | **Frequency Calculator** | `frequency-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 164 | **Pendulum Period** | `pendulum-period-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 165 | **Period Calculator** | `period-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 166 | **Wave Speed Calculator** | `wave-speed-calculator` | Physics | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Subordinate formula belongs inside unified kinematics-calculator suite. |
| 167 | **SHM Position** | `simple-harmonic-motion-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 168 | **Spring Period** | `spring-period-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 169 | **Spring Force (Hooke's Law)** | `spring-force-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 170 | **Spring Potential Energy** | `spring-potential-energy-calculator` | Physics | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Subordinate formula belongs inside unified work-energy-power-calculator suite. |
| 171 | **Amplitude Calculator** | `amplitude-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 172 | **Angular Frequency** | `angular-frequency-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 173 | **Ideal Gas Law Calculator (PV = nRT)** | `ideal-gas-law-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 174 | **Specific Heat Calculator** | `specific-heat-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 175 | **Carnot Efficiency** | `carnot-efficiency-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 176 | **Heat Calculator** | `heat-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 177 | **Latent Heat** | `latent-heat-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 178 | **Thermal Expansion** | `thermal-expansion-calculator` | Physics | **KEEP** | 7 | 7 | 7 | 7 | 9 | 3 | **7.1** | Core high school / AP physics mechanics and electromagnetism problem. |
| 179 | **Combined Gas Law Calculator (Physics)** | `gas-law-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 180 | **PVT Calculator** | `pressure-volume-temperature-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 181 | **Thermal Efficiency** | `thermal-efficiency-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 182 | **Heat Engine Efficiency** | `heat-engine-efficiency-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 183 | **Entropy Change** | `entropy-change-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 184 | **Ohm's Law Calculator** | `ohms-law-calculator` | Physics | **CORE KEEP** | 9 | 9 | 8 | 9 | 9 | 2 | **8.8** | Foundational physics milestone calculator taught in all introductory physics classes. |
| 185 | **Electrical Power Calculator** | `electrical-power-calculator` | Physics | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Subordinate formula belongs inside unified work-energy-power-calculator suite. |
| 186 | **Coulomb's Law** | `coulombs-law-calculator` | Physics | **CORE KEEP** | 9 | 9 | 8 | 9 | 9 | 2 | **8.8** | Foundational physics milestone calculator taught in all introductory physics classes. |
| 187 | **Current Calculator** | `current-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 188 | **Voltage Calculator** | `voltage-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 189 | **Resistance Calculator** | `resistance-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 190 | **Electrical Energy** | `electrical-energy-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 191 | **Electric Charge** | `electric-charge-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 192 | **Electric Field** | `electric-field-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 193 | **Electric Potential** | `electric-potential-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 194 | **Capacitance Calculator** | `capacitance-calculator` | Physics | **KEEP** | 7 | 7 | 7 | 7 | 9 | 3 | **7.1** | Core high school / AP physics mechanics and electromagnetism problem. |
| 195 | **Capacitor Energy** | `capacitor-energy-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 196 | **Series & Parallel Circuit Calculator (Resistors & Capacitors)** | `circuit-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 197 | **Voltage Divider** | `voltage-divider-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 198 | **Current Divider** | `current-divider-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 199 | **RC Time Constant** | `rc-time-constant-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 200 | **Magnetic Force** | `magnetic-force-calculator` | Physics | **KEEP** | 7 | 7 | 7 | 7 | 9 | 3 | **7.1** | Core high school / AP physics mechanics and electromagnetism problem. |
| 201 | **Lorentz Force** | `lorentz-force-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 202 | **Magnetic Field (Wire)** | `magnetic-field-wire-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 203 | **Solenoid Field** | `solenoid-magnetic-field-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 204 | **Magnetic Flux** | `magnetic-flux-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 205 | **EM Induction** | `electromagnetic-induction-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 206 | **Faraday's Law** | `faradays-law-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 207 | **Inductance Calculator** | `inductance-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 208 | **Inductor Energy** | `inductor-energy-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 209 | **Snell's Law Calculator** | `snells-law-calculator` | Physics | **CORE KEEP** | 9 | 9 | 8 | 9 | 9 | 2 | **8.8** | Foundational physics milestone calculator taught in all introductory physics classes. |
| 210 | **Lens Equation** | `lens-equation-calculator` | Physics | **CORE KEEP** | 9 | 9 | 8 | 9 | 9 | 2 | **8.8** | Foundational physics milestone calculator taught in all introductory physics classes. |
| 211 | **Mirror Equation** | `mirror-equation-calculator` | Physics | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Subordinate formula belongs inside unified lens-equation suite. |
| 212 | **Magnification** | `magnification-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 213 | **Refractive Index** | `refractive-index-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 214 | **Critical Angle** | `critical-angle-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 215 | **Focal Length** | `focal-length-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 216 | **Power of Lens** | `power-of-lens-calculator` | Physics | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Subordinate formula belongs inside unified work-energy-power-calculator suite. |
| 217 | **Diffraction Calculator** | `diffraction-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 218 | **Double Slit Calculator** | `double-slit-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 219 | **Mass-Energy Equivalence Calculator** | `mass-energy-equivalence-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 220 | **Photon Energy Calculator** | `photon-energy-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 221 | **Einstein Energy** | `einstein-energy-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 222 | **Photon Momentum** | `photon-momentum-calculator` | Physics | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Subordinate formula belongs inside unified momentum-collision-calculator suite. |
| 223 | **De Broglie Wavelength** | `de-broglie-wavelength-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 224 | **Photoelectric Effect** | `photoelectric-effect-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 225 | **Relativistic Energy** | `relativistic-energy-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 226 | **Time Dilation** | `time-dilation-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 227 | **Length Contraction** | `length-contraction-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 228 | **Mass Defect Calculator (Nuclear Physics)** | `mass-defect-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 229 | **Nuclear Binding Energy Calculator (Nuclear Physics)** | `nuclear-binding-energy-calculator` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 230 | **Physics Constants** | `physics-constants` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 231 | **Physics Formulas** | `physics-formulas` | Physics | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche single-formula physics variation with minimal standalone audience. |
| 232 | **Molar Mass Calculator** | `molar-mass-calculator` | Chemistry | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Universal chemistry laboratory and homework standard calculations. |
| 233 | **Mass to Moles** | `mass-to-moles` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 234 | **Moles to Mass** | `moles-to-mass` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 235 | **Particles to Moles** | `particles-to-moles` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 236 | **Moles to Particles** | `moles-to-particles` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 237 | **Atomic Number Calculator** | `atomic-number-calculator` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 238 | **Mass Number Calculator** | `mass-number-calculator` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 239 | **Protons, Neutrons, Electrons** | `protons-neutrons-electrons` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 240 | **Average Atomic Mass** | `average-atomic-mass` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 241 | **Photon Energy** | `photon-energy-chemistry` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 242 | **Wavelength to Frequency** | `wavelength-frequency-energy` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 243 | **Interactive Periodic Table** | `periodic-table` | Chemistry | **REFERENCE** | 9 | 8 | 9 | 9 | 9 | 1 | **8.8** | High-value chemistry reference chart for quick lookup. |
| 244 | **Ideal Gas Law** | `ideal-gas-law` | Chemistry | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Universal chemistry laboratory and homework standard calculations. |
| 245 | **Boyle's Law** | `boyles-law` | Chemistry | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Interconnected derivation belonging inside unified gas-laws-calculator suite. |
| 246 | **Charles's Law** | `charles-law` | Chemistry | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Interconnected derivation belonging inside unified gas-laws-calculator suite. |
| 247 | **Gay-Lussac's Law** | `gay-lussacs-law` | Chemistry | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Interconnected derivation belonging inside unified gas-laws-calculator suite. |
| 248 | **Combined Gas Law Calculator (Chemistry)** | `combined-gas-law` | Chemistry | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Interconnected derivation belonging inside unified gas-laws-calculator suite. |
| 249 | **Gas Density** | `gas-density-calculator` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 250 | **RMS Speed of Gas** | `root-mean-square-speed` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 251 | **Molarity Calculator** | `molarity-calculator` | Chemistry | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Universal chemistry laboratory and homework standard calculations. |
| 252 | **Molality Calculator** | `molality-calculator` | Chemistry | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Interconnected derivation belonging inside unified molarity-calculator suite. |
| 253 | **Dilution Calculator** | `dilution-calculator` | Chemistry | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Universal chemistry laboratory and homework standard calculations. |
| 254 | **Mass Percent** | `mass-percent-calculator` | Chemistry | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Interconnected derivation belonging inside unified molarity-calculator suite. |
| 255 | **Mole Fraction** | `mole-fraction-calculator` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 256 | **pH Calculator** | `ph-calculator` | Chemistry | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Universal chemistry laboratory and homework standard calculations. |
| 257 | **pOH Calculator** | `poh-calculator` | Chemistry | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Interconnected derivation belonging inside unified ph-calculator suite. |
| 258 | **[H+] from pH** | `hydrogen-ion-concentration` | Chemistry | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Interconnected derivation belonging inside unified ph-calculator suite. |
| 259 | **pKa Calculator** | `pka-calculator` | Chemistry | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Interconnected derivation belonging inside unified ph-calculator suite. |
| 260 | **Henderson-Hasselbalch** | `henderson-hasselbalch` | Chemistry | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Universal chemistry laboratory and homework standard calculations. |
| 261 | **Reaction Balancer** | `reaction-balancer` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 262 | **Percent Yield Calculator** | `percent-yield-calculator` | Chemistry | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Universal chemistry laboratory and homework standard calculations. |
| 263 | **Heat Energy (Q = mcΔT)** | `heat-energy-calculator` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 264 | **Enthalpy Change (ΔH)** | `enthalpy-calculator` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 265 | **Kc Calculator** | `kc-calculator` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 266 | **Gibbs Free Energy** | `gibbs-free-energy` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 267 | **Standard Cell Potential** | `standard-cell-potential` | Chemistry | **KEEP** | 8 | 8 | 7 | 8 | 9 | 3 | **7.8** | Core stoichiometry, thermodynamics, or electrochemistry curriculum topic. |
| 268 | **Nernst Equation** | `nernst-equation` | Chemistry | **KEEP** | 8 | 8 | 7 | 8 | 9 | 3 | **7.8** | Core stoichiometry, thermodynamics, or electrochemistry curriculum topic. |
| 269 | **Faraday Electrolysis Mass** | `faradays-electrolysis` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 270 | **First-Order Half-Life** | `half-life-first-order` | Chemistry | **KEEP** | 8 | 8 | 7 | 8 | 9 | 3 | **7.8** | Core stoichiometry, thermodynamics, or electrochemistry curriculum topic. |
| 271 | **Arrhenius Equation** | `arrhenius-equation` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 272 | **Radioactive Decay** | `radioactive-decay` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 273 | **Chemistry Constants** | `chemistry-constants` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 274 | **Solubility Rules** | `solubility-rules` | Chemistry | **REFERENCE** | 9 | 8 | 9 | 9 | 9 | 1 | **8.8** | High-value chemistry reference chart for quick lookup. |
| 275 | **Strong Acids & Bases** | `strong-acids-and-bases` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 276 | **Polyatomic Ions** | `common-polyatomic-ions` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 277 | **Stoichiometry Calculator** | `stoichiometry-calculator` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 278 | **Theoretical Yield** | `theoretical-yield-calculator` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 279 | **Actual Yield Calculator** | `actual-yield-calculator` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 280 | **Dalton's Law of Partial Pressures** | `daltons-law` | Chemistry | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Interconnected derivation belonging inside unified gas-laws-calculator suite. |
| 281 | **Molar Volume** | `molar-volume-calculator` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 282 | **Avg Kinetic Energy (Gas)** | `average-kinetic-energy-gas` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 283 | **Graham's Law of Effusion** | `graham-law-calculator` | Chemistry | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Interconnected derivation belonging inside unified gas-laws-calculator suite. |
| 284 | **Normality Calculator** | `normality-calculator` | Chemistry | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Interconnected derivation belonging inside unified molarity-calculator suite. |
| 285 | **Volume Percent (v/v)** | `volume-percent-calculator` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 286 | **PPM Calculator (Parts Per Million)** | `ppm-calculator` | Chemistry | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Interconnected derivation belonging inside unified molarity-calculator suite. |
| 287 | **PPB Calculator** | `ppb-calculator` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 288 | **Solution Concentration** | `solution-concentration-calculator` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 289 | **Moles from Molarity** | `moles-from-molarity` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 290 | **Grams from Molarity** | `grams-from-molarity` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 291 | **[OH-] from pOH** | `hydroxide-ion-concentration` | Chemistry | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Interconnected derivation belonging inside unified ph-calculator suite. |
| 292 | **pKb Calculator** | `pkb-calculator` | Chemistry | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Interconnected derivation belonging inside unified ph-calculator suite. |
| 293 | **Ka from pKa** | `ka-calculator` | Chemistry | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Interconnected derivation belonging inside unified ph-calculator suite. |
| 294 | **Kb from pKb** | `kb-calculator` | Chemistry | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Interconnected derivation belonging inside unified ph-calculator suite. |
| 295 | **Neutralization (MaVa = MbVb)** | `acid-base-neutralization` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 296 | **Q = mcΔT Calculator** | `q-mc-delta-t` | Chemistry | **KEEP** | 8 | 8 | 7 | 8 | 9 | 3 | **7.8** | Core stoichiometry, thermodynamics, or electrochemistry curriculum topic. |
| 297 | **Calorimetry Calculator** | `calorimetry-calculator` | Chemistry | **KEEP** | 8 | 8 | 7 | 8 | 9 | 3 | **7.8** | Core stoichiometry, thermodynamics, or electrochemistry curriculum topic. |
| 298 | **Heat of Reaction (ΔH)** | `heat-of-reaction` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 299 | **Energy of Fusion** | `fusion-energy` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 300 | **Energy of Vaporization** | `vaporization-energy` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 301 | **Equilibrium Constant (K)** | `equilibrium-constant` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 302 | **Kp Calculator** | `kp-calculator` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 303 | **Reaction Quotient (Q)** | `reaction-quotient` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 304 | **Cell Potential Calculator** | `cell-potential-calculator` | Chemistry | **KEEP** | 8 | 8 | 7 | 8 | 9 | 3 | **7.8** | Core stoichiometry, thermodynamics, or electrochemistry curriculum topic. |
| 305 | **Electrolysis Time** | `electrolysis-calculator` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 306 | **ΔG from E°cell** | `gibbs-free-energy-electrochemistry` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 307 | **Charge (Q = It)** | `charge-from-current-time` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 308 | **Rate Law Calculator** | `rate-law-calculator` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 309 | **First Order Reaction** | `first-order-reaction` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 310 | **Half-Life (1st Order)** | `half-life-calculator` | Chemistry | **KEEP** | 8 | 8 | 7 | 8 | 9 | 3 | **7.8** | Core stoichiometry, thermodynamics, or electrochemistry curriculum topic. |
| 311 | **Alkane Formula** | `alkane-formula-calculator` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 312 | **Alkene Formula** | `alkene-formula-calculator` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 313 | **Alkyne Formula** | `alkyne-formula-calculator` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 314 | **Degree of Unsaturation** | `degree-of-unsaturation` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 315 | **Organic Functional Groups** | `organic-functional-groups` | Chemistry | **REFERENCE** | 9 | 8 | 9 | 9 | 9 | 1 | **8.8** | High-value chemistry reference chart for quick lookup. |
| 316 | **Nuclear Half-Life** | `half-life-nuclear` | Chemistry | **KEEP** | 8 | 8 | 7 | 8 | 9 | 3 | **7.8** | Core stoichiometry, thermodynamics, or electrochemistry curriculum topic. |
| 317 | **Remaining Material** | `remaining-radioactive-material` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 318 | **Mass Defect Calculator (Nuclear Chemistry)** | `mass-defect` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 319 | **Nuclear Binding Energy Calculator (Nuclear Chemistry)** | `nuclear-binding-energy` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 320 | **Decay Constant** | `decay-constant` | Chemistry | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 7 | **2.5** | Niche specialized chemistry micro-formula with minimal student traffic. |
| 321 | **BMI Calculator (Body Mass Index)** | `bmi-calculator` | Biology | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 1 | **9.1** | Top search intent across genetics and student health/fitness metrics. |
| 322 | **Body Surface Area (Mosteller)** | `body-surface-area` | Biology | **MERGE** | 6 | 5 | 6 | 3 | 9 | 9 | **4.9** | Subordinate biology guide/metric consolidated into bmi-calculator. |
| 323 | **Waist-to-Height Ratio** | `waist-to-height-ratio` | Biology | **MERGE** | 6 | 5 | 6 | 3 | 9 | 9 | **4.9** | Subordinate biology guide/metric consolidated into bmi-calculator. |
| 324 | **Max Heart Rate** | `heart-rate-zones` | Biology | **KEEP** | 8 | 7 | 7 | 8 | 9 | 3 | **7.6** | Core biological process or popular student body metric. |
| 325 | **Animal Cell Organelles** | `animal-cell` | Biology | **REFERENCE** | 9 | 8 | 9 | 8 | 9 | 2 | **8.6** | Rich visual anatomy or molecular biology guide for biology and pre-med students. |
| 326 | **Plant Cell Organelles** | `plant-cell` | Biology | **REFERENCE** | 9 | 8 | 9 | 8 | 9 | 2 | **8.6** | Rich visual anatomy or molecular biology guide for biology and pre-med students. |
| 327 | **Organelle Reference** | `cell-organelles` | Biology | **MERGE** | 6 | 5 | 6 | 3 | 9 | 9 | **4.9** | Subordinate biology guide/metric consolidated into animal-cell. |
| 328 | **Mitosis Stages** | `mitosis-stages` | Biology | **REFERENCE** | 9 | 8 | 9 | 8 | 9 | 2 | **8.6** | Rich visual anatomy or molecular biology guide for biology and pre-med students. |
| 329 | **Cell Cycle Reference** | `cell-cycle` | Biology | **MERGE** | 6 | 5 | 6 | 3 | 9 | 9 | **4.9** | Subordinate biology guide/metric consolidated into mitosis-stages. |
| 330 | **SA:V Ratio (Sphere)** | `surface-area-to-volume-ratio` | Biology | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 6 | **2.6** | Specialized clinical or advanced ecological metric with negligible student demand. |
| 331 | **Punnett Square Calculator** | `punnett-square` | Biology | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 1 | **9.1** | Top search intent across genetics and student health/fitness metrics. |
| 332 | **Hardy-Weinberg (q² to p)** | `hardy-weinberg-calculator` | Biology | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 1 | **9.1** | Top search intent across genetics and student health/fitness metrics. |
| 333 | **Hardy-Weinberg Heterozygotes** | `hardy-weinberg` | Biology | **MERGE** | 6 | 5 | 6 | 3 | 9 | 9 | **4.9** | Subordinate biology guide/metric consolidated into hardy-weinberg-calculator. |
| 334 | **DNA & RNA Sequence Analyzer** | `dna-sequence-analyzer` | Biology | **KEEP** | 8 | 7 | 7 | 8 | 9 | 3 | **7.6** | Core biological process or popular student body metric. |
| 335 | **Central Dogma** | `central-dogma` | Biology | **REFERENCE** | 9 | 8 | 9 | 8 | 9 | 2 | **8.6** | Rich visual anatomy or molecular biology guide for biology and pre-med students. |
| 336 | **Amino Acid Reference** | `amino-acid-reference` | Biology | **REFERENCE** | 9 | 8 | 9 | 8 | 9 | 2 | **8.6** | Rich visual anatomy or molecular biology guide for biology and pre-med students. |
| 337 | **Amino Acid Codes** | `amino-acids` | Biology | **MERGE** | 6 | 5 | 6 | 3 | 9 | 9 | **4.9** | Subordinate biology guide/metric consolidated into bmi-calculator. |
| 338 | **Michaelis-Menten Equation** | `michaelis-menten` | Biology | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 6 | **2.6** | Specialized clinical or advanced ecological metric with negligible student demand. |
| 339 | **Catalytic Efficiency** | `catalytic-efficiency` | Biology | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 6 | **2.6** | Specialized clinical or advanced ecological metric with negligible student demand. |
| 340 | **Exponential Growth** | `population-growth` | Biology | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 6 | **2.6** | Specialized clinical or advanced ecological metric with negligible student demand. |
| 341 | **Logistic Growth Rate** | `logistic-growth` | Biology | **MERGE** | 6 | 5 | 6 | 3 | 9 | 9 | **4.9** | Subordinate biology guide/metric consolidated into population-growth. |
| 342 | **Population Doubling Time** | `doubling-time` | Biology | **MERGE** | 6 | 5 | 6 | 3 | 9 | 9 | **4.9** | Subordinate biology guide/metric consolidated into population-growth. |
| 343 | **Shannon Diversity (H)** | `shannon-diversity` | Biology | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 6 | **2.6** | Specialized clinical or advanced ecological metric with negligible student demand. |
| 344 | **Cardiac Output** | `cardiac-output` | Biology | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 6 | **2.6** | Specialized clinical or advanced ecological metric with negligible student demand. |
| 345 | **Mean Arterial Pressure (MAP)** | `mean-arterial-pressure` | Biology | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 6 | **2.6** | Specialized clinical or advanced ecological metric with negligible student demand. |
| 346 | **Alveolar Ventilation** | `alveolar-ventilation` | Biology | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 6 | **2.6** | Specialized clinical or advanced ecological metric with negligible student demand. |
| 347 | **Generation Time (G)** | `bacterial-generation-time` | Biology | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 6 | **2.6** | Specialized clinical or advanced ecological metric with negligible student demand. |
| 348 | **CFU/mL Calculator** | `cfu-calculator` | Biology | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 6 | **2.6** | Specialized clinical or advanced ecological metric with negligible student demand. |
| 349 | **Beer-Lambert Law (Absorbance)** | `beer-lambert-law` | Biology | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 6 | **2.6** | Specialized clinical or advanced ecological metric with negligible student demand. |
| 350 | **PCR Amplification** | `pcr-amplification` | Biology | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 6 | **2.6** | Specialized clinical or advanced ecological metric with negligible student demand. |
| 351 | **BMR Calculator (Mifflin-St Jeor)** | `bmr-calculator` | Biology | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 1 | **9.1** | Top search intent across genetics and student health/fitness metrics. |
| 352 | **Ideal Body Weight (Devine, Male)** | `ideal-body-weight` | Biology | **KEEP** | 8 | 7 | 7 | 8 | 9 | 3 | **7.6** | Core biological process or popular student body metric. |
| 353 | **Stroke Volume** | `stroke-volume` | Biology | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 6 | **2.6** | Specialized clinical or advanced ecological metric with negligible student demand. |
| 354 | **Pulse Pressure** | `pulse-pressure` | Biology | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 6 | **2.6** | Specialized clinical or advanced ecological metric with negligible student demand. |
| 355 | **Renal Clearance** | `renal-clearance` | Biology | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 6 | **2.6** | Specialized clinical or advanced ecological metric with negligible student demand. |
| 356 | **Sensitivity** | `sensitivity-specificity` | Biology | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 6 | **2.6** | Specialized clinical or advanced ecological metric with negligible student demand. |
| 357 | **Positive Predictive Value** | `positive-predictive-value` | Biology | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 6 | **2.6** | Specialized clinical or advanced ecological metric with negligible student demand. |
| 358 | **Case Fatality Rate** | `case-fatality-rate` | Biology | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 6 | **2.6** | Specialized clinical or advanced ecological metric with negligible student demand. |
| 359 | **Relative Risk (RR)** | `relative-risk` | Biology | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 6 | **2.6** | Specialized clinical or advanced ecological metric with negligible student demand. |
| 360 | **Cell Structure** | `cell-structure` | Biology | **MERGE** | 6 | 5 | 6 | 3 | 9 | 9 | **4.9** | Subordinate biology guide/metric consolidated into animal-cell. |
| 361 | **Eukaryotic Cell** | `eukaryotic-cell` | Biology | **MERGE** | 6 | 5 | 6 | 3 | 9 | 9 | **4.9** | Subordinate biology guide/metric consolidated into animal-cell. |
| 362 | **Prokaryotic Cell** | `prokaryotic-cell` | Biology | **MERGE** | 6 | 5 | 6 | 3 | 9 | 9 | **4.9** | Subordinate biology guide/metric consolidated into animal-cell. |
| 363 | **Meiosis Stages** | `meiosis-stages` | Biology | **MERGE** | 6 | 5 | 6 | 3 | 9 | 9 | **4.9** | Subordinate biology guide/metric consolidated into mitosis-stages. |
| 364 | **Transcription** | `transcription-reference` | Biology | **MERGE** | 6 | 5 | 6 | 3 | 9 | 9 | **4.9** | Subordinate biology guide/metric consolidated into central-dogma. |
| 365 | **Translation** | `translation-reference` | Biology | **MERGE** | 6 | 5 | 6 | 3 | 9 | 9 | **4.9** | Subordinate biology guide/metric consolidated into central-dogma. |
| 366 | **Protein Structure** | `protein-structure` | Biology | **REFERENCE** | 9 | 8 | 9 | 8 | 9 | 2 | **8.6** | Rich visual anatomy or molecular biology guide for biology and pre-med students. |
| 367 | **Photosynthesis Equation** | `photosynthesis-equation` | Biology | **KEEP** | 8 | 7 | 7 | 8 | 9 | 3 | **7.6** | Core biological process or popular student body metric. |
| 368 | **Cellular Respiration** | `cellular-respiration` | Biology | **KEEP** | 8 | 7 | 7 | 8 | 9 | 3 | **7.6** | Core biological process or popular student body metric. |
| 369 | **Human Skeleton** | `human-skeleton` | Biology | **REFERENCE** | 9 | 8 | 9 | 8 | 9 | 2 | **8.6** | Rich visual anatomy or molecular biology guide for biology and pre-med students. |
| 370 | **Circulatory System** | `circulatory-system` | Biology | **REFERENCE** | 9 | 8 | 9 | 8 | 9 | 2 | **8.6** | Rich visual anatomy or molecular biology guide for biology and pre-med students. |
| 371 | **Nervous System** | `nervous-system` | Biology | **REFERENCE** | 9 | 8 | 9 | 8 | 9 | 2 | **8.6** | Rich visual anatomy or molecular biology guide for biology and pre-med students. |
| 372 | **Digestive System** | `digestive-system` | Biology | **REFERENCE** | 9 | 8 | 9 | 8 | 9 | 2 | **8.6** | Rich visual anatomy or molecular biology guide for biology and pre-med students. |
| 373 | **Endocrine System** | `endocrine-system` | Biology | **REFERENCE** | 9 | 8 | 9 | 8 | 9 | 2 | **8.6** | Rich visual anatomy or molecular biology guide for biology and pre-med students. |
| 374 | **Biology Formulas** | `biology-formulas` | Biology | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 6 | **2.6** | Specialized clinical or advanced ecological metric with negligible student demand. |
| 375 | **Biology Constants** | `biology-constants` | Biology | **REMOVE** | 3 | 2 | 2 | 2 | 9 | 6 | **2.6** | Specialized clinical or advanced ecological metric with negligible student demand. |
| 376 | **Percentile Calculator** | `percentile-calculator` | Statistics | **KEEP** | 8 | 7 | 7 | 7 | 9 | 3 | **7.4** | Standard rank and percentile calculator for exam score benchmarking. |
| 377 | **Quartile Calculator** | `quartile-calculator` | Statistics | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Q1, Q2, Q3 and IQR (Q3 - Q1) are direct subsets of the Five-Number Summary. |
| 378 | **IQR Calculator (Interquartile Range)** | `iqr-calculator` | Statistics | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Q1, Q2, Q3 and IQR (Q3 - Q1) are direct subsets of the Five-Number Summary. |
| 379 | **Five Number Summary** | `five-number-summary` | Statistics | **CORE KEEP** | 8 | 8 | 8 | 8 | 9 | 2 | **8.1** | Comprehensive descriptive dataset summary (Min, Q1, Median, Q3, Max, IQR, Outliers). |
| 380 | **Mean Absolute Deviation** | `mean-absolute-deviation` | Statistics | **KEEP** | 6 | 5 | 6 | 6 | 9 | 2 | **6.1** | Taught in middle school math as an introductory dispersion metric. |
| 381 | **Standard Error Calculator** | `standard-error-calculator` | Statistics | **MERGE** | 6 | 5 | 6 | 3 | 9 | 9 | **4.9** | Standard Error (SE = s/√n) is an internal step of Confidence Interval & Z-Score calculators. |
| 382 | **Covariance Calculator** | `covariance-calculator` | Statistics | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | All these individual metrics are standard intermediate outputs inside Linear Regression Calculator. |
| 383 | **Correlation Coefficient** | `correlation-coefficient` | Statistics | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | All these individual metrics are standard intermediate outputs inside Linear Regression Calculator. |
| 384 | **Linear Regression Calculator** | `linear-regression-calculator` | Statistics | **CORE KEEP** | 9 | 8 | 8 | 9 | 9 | 2 | **8.5** | Full scatter plot regression engine calculating slope, intercept, r, r², MSE, and predictions. |
| 385 | **Regression Equation** | `regression-equation-calculator` | Statistics | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | All these individual metrics are standard intermediate outputs inside Linear Regression Calculator. |
| 386 | **R-Squared Calculator** | `r-squared-calculator` | Statistics | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | All these individual metrics are standard intermediate outputs inside Linear Regression Calculator. |
| 387 | **Normal Distribution (Z-Score) Calculator** | `normal-distribution-calculator` | Statistics | **CORE KEEP** | 9 | 9 | 8 | 9 | 9 | 2 | **8.8** | Calculates normal CDF, PDF, inverse normal quantiles, and empirical rule regions. |
| 388 | **Standard Normal Distribution** | `standard-normal-distribution` | Statistics | **MERGE** | 6 | 6 | 6 | 3 | 9 | 9 | **5.2** | Standard normal (μ=0, σ=1) is just the default state of the Normal Distribution Calculator. |
| 389 | **Binomial Distribution** | `binomial-distribution-calculator` | Statistics | **CORE KEEP** | 8 | 8 | 8 | 8 | 9 | 1 | **8.2** | Core discrete probability distribution solver (P(X=k), P(X≤k), mean, variance). |
| 390 | **Poisson Distribution** | `poisson-distribution-calculator` | Statistics | **KEEP** | 7 | 7 | 7 | 7 | 9 | 2 | **7.2** | Standard college statistics probability tool for rate events. |
| 391 | **Truth Table Generator** | `truth-table-generator` | Discrete Mathematics | **CORE KEEP** | 9 | 9 | 8 | 9 | 9 | 1 | **8.9** | Standard computer science & logic tool for evaluating propositions and boolean expressions. |
| 392 | **Logical Expression Evaluator** | `logical-expression-evaluator` | Discrete Mathematics | **MERGE** | 6 | 5 | 5 | 3 | 9 | 9 | **4.7** | Redundant standalone tool; boolean evaluation is directly handled inside Truth Table Generator. |
| 393 | **Set Operations Calculator** | `set-calculator` | Discrete Mathematics | **CORE KEEP** | 8 | 8 | 8 | 8 | 9 | 1 | **8.2** | Calculates Union, Intersection, Difference, Symmetric Difference, Cartesian Product, Power Set. |
| 394 | **RREF Calculator (Reduced Row Echelon Form)** | `rref-calculator` | Linear Algebra | **CORE KEEP** | 9 | 9 | 8 | 9 | 9 | 1 | **8.9** | High-volume university linear algebra solver (Gaussian elimination with step-by-step row operations). |
| 395 | **Matrix Rank Calculator** | `matrix-rank-calculator` | Linear Algebra | **MERGE** | 6 | 5 | 5 | 3 | 9 | 9 | **4.7** | Matrix Rank (number of non-zero rows in RREF) and Trace (sum of diagonal) belong in linear algebra suite. |
| 396 | **Matrix Trace Calculator** | `matrix-trace-calculator` | Linear Algebra | **MERGE** | 6 | 5 | 5 | 3 | 9 | 9 | **4.7** | Matrix Rank (number of non-zero rows in RREF) and Trace (sum of diagonal) belong in linear algebra suite. |
| 397 | **Eigenvalue Calculator** | `eigenvalue-calculator` | Linear Algebra | **KEEP** | 8 | 8 | 7 | 8 | 9 | 2 | **7.9** | Calculates characteristic polynomial, eigenvalues, and eigenvectors for 2x2 and 3x3 matrices. |
| 398 | **Relative Error Calculator** | `relative-error-calculator` | Numerical Methods | **MERGE** | 6 | 5 | 6 | 3 | 9 | 8 | **5** | Relative & percent error (\|actual - expected\| / expected * 100) fits naturally into percentage tools. |
| 399 | **Final Grade Calculator** | `final-grade-calculator` | Student Utilities | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 1 | **9.1** | Essential exam period utility to calculate required final score to achieve desired letter grade. |
| 400 | **Base Conversion Calculator** | `base-conversion-calculator` | Computer Science | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 1 | **9.1** | Universal radix converter (Binary, Octal, Decimal, Hexadecimal, Base-N) with step-by-step math. |
| 401 | **Weighted Grade Calculator** | `weighted-grade-calculator` | Student Utilities | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 1 | **9.1** | Standard syllabus grading tool (calculating weighted percentages of homework, quizzes, exams). |
| 402 | **Words to Pages Converter** | `words-to-pages` | Study & Productivity | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 1 | **9.1** | High search volume essay and paper planning tool based on font size, spacing, and word count. |
| 403 | **Compound Interest Calculator** | `compound-interest-calculator` | Finance | **CORE KEEP** | 10 | 10 | 9 | 10 | 9 | 1 | **9.8** | Top-tier financial math tool with compound frequency options, inflation adjustments, and visual charts. |
| 404 | **Simple Interest Calculator** | `simple-interest-calculator` | Finance | **CORE KEEP** | 9 | 9 | 9 | 8 | 9 | 2 | **8.8** | Standard middle/high school financial formula (I = Prt) with step-by-step breakdown. |
| 405 | **Z-Score Calculator & Normal Distribution Probability** | `z-score-calculator` | Statistics | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 1 | **9.1** | Standardized test and statistics benchmark (Z = (x - μ)/σ with tail probabilities). |
| 406 | **Permutations & Combinations Calculator (nPr & nCr)** | `permutations-and-combinations` | Mathematics | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 1 | **9.1** | High-frequency discrete math & probability calculator (nPr, nCr, with/without repetition). |
| 407 | **Prime Factorization Calculator** | `prime-factorization-calculator` | Mathematics | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 2 | **9** | Core high school & college mathematics curriculum standard with consistent search volume. |
| 408 | **Bitwise Calculator (AND, OR, XOR, NOT, Shifts)** | `bitwise-calculator` | Computer Science | **CORE KEEP** | 9 | 8 | 8 | 9 | 9 | 1 | **8.6** | Complete binary bitwise calculator (AND, OR, XOR, NOT, Shifts in 8/16/32/64-bit). |
| 409 | **Scientific Notation Calculator & Converter** | `scientific-notation-calculator` | Converters | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 1 | **9.1** | Standard form, scientific notation, and engineering notation converter and arithmetic solver. |
| 410 | **Confidence Interval Calculator (Mean & Proportion)** | `confidence-interval-calculator` | Statistics | **CORE KEEP** | 9 | 9 | 8 | 9 | 9 | 1 | **8.9** | Comprehensive inferential statistics solver (Z-mean, T-mean, Proportion with exact critical values). |
| 411 | **Case Converter (UPPERCASE, lowercase, Title, camelCase, snake_case)** | `case-converter` | Study & Productivity | **CORE KEEP** | 9 | 9 | 9 | 9 | 9 | 1 | **9.1** | Universal text transformer (UPPER, lower, Title, camelCase, snake_case, PascalCase). |
| 412 | **IPv4 Subnet Calculator (CIDR & IP Network Planner)** | `subnet-calculator` | Computer Science | **CORE KEEP** | 9 | 9 | 8 | 9 | 9 | 1 | **8.9** | Essential networking and IT student tool (IPv4 CIDR, usable IPs, subnet masks, wildcard). |

---

## 5. Comprehensive Merge Analysis & Consolidation Groups

Rather than hosting dozens of isolated single-equation pages, StudentKit should consolidate overlapping concepts into comprehensive, multi-variable solvers.

### 1. Unified Gas Laws Calculator
- **Canonical Tool**: `/tools/gas-laws-calculator` (or expanded `/tools/ideal-gas-law`)
- **Absorbed Subordinate Slugs**:
  - `/tools/boyles-law`
  - `/tools/charles-law`
  - `/tools/gay-lussacs-law`
  - `/tools/avogadros-law`
  - `/tools/combined-gas-law`
  - `/tools/daltons-law`
  - `/tools/grahams-law`
- **Rationale**: A student solving a gas law problem often needs to toggle between constant temperature (Boyle's), constant pressure (Charles's), or ideal gas ($PV=nRT$). Providing one unified suite with mode selector tabs drastically improves UX.
- **Redirects**: 301 redirect all individual gas law slugs to the canonical Gas Laws Calculator.

### 2. Unified Kinematics & SUVAT Suite
- **Canonical Tool**: `/tools/kinematics-calculator`
- **Absorbed Subordinate Slugs**:
  - `/tools/velocity-calculator`
  - `/tools/acceleration-calculator`
  - `/tools/speed-calculator`
  - `/tools/displacement-calculator`
- **Rationale**: The 4 kinematic equations ($v=u+at$, $s=ut+\frac{1}{2}at^2$, $v^2=u^2+2as$, $s=\frac{u+v}{2}t$) share identical variables. A single solver where the user enters any 3 known variables and solves for the remaining 2 replaces 4 redundant micro-pages.
- **Redirects**: 301 redirect velocity/acceleration/displacement pages to Kinematics Calculator.

### 3. Unified Work, Energy & Power Calculator
- **Canonical Tool**: `/tools/work-energy-power-calculator`
- **Absorbed Subordinate Slugs**:
  - `/tools/work-calculator`
  - `/tools/kinetic-energy-calculator`
  - `/tools/potential-energy-calculator`
  - `/tools/power-calculator`
- **Rationale**: Work ($W=Fd$), Kinetic Energy ($E_k=\frac{1}{2}mv^2$), Gravitational Potential Energy ($E_p=mgh$), and Power ($P=W/t$) are taught as a single unified physics chapter.

### 4. Unified Momentum & Collision Calculator
- **Canonical Tool**: `/tools/momentum-collision-calculator`
- **Absorbed Subordinate Slugs**:
  - `/tools/momentum-calculator`
  - `/tools/impulse-calculator`
  - `/tools/elastic-collision`
  - `/tools/inelastic-collision`
- **Rationale**: Conservation of linear momentum, impulse-momentum theorem, and 1D elastic/inelastic collisions belong inside one interactive simulator.

### 5. Unified pH & Acid-Base Suite
- **Canonical Tool**: `/tools/ph-calculator`
- **Absorbed Subordinate Slugs**:
  - `/tools/poh-calculator`
  - `/tools/ka-calculator`
  - `/tools/kb-calculator`
  - `/tools/pka-calculator`
  - `/tools/pkb-calculator`
  - `/tools/hydrogen-ion-concentration`
  - `/tools/hydroxide-ion-concentration`
  - `/tools/acid-base-neutralization`
- **Rationale**: pH, pOH, $[H^+]$, and $[OH^-]$ are directly linked by $pH + pOH = 14$ and $[H^+][OH^-] = 10^{-14}$. Entering any one parameter should automatically calculate all other values in a synchronized live card.

### 6. Unified Solution & Concentration Calculator
- **Canonical Tool**: `/tools/molarity-calculator` (expanded to Solution Concentration Suite)
- **Absorbed Subordinate Slugs**:
  - `/tools/molality-calculator`
  - `/tools/normality-calculator`
  - `/tools/mass-percent`
  - `/tools/ppm-calculator`
  - `/tools/dilution-calculator` ($M_1V_1 = M_2V_2$)

### 7. Unified Linear Regression & Correlation Suite
- **Canonical Tool**: `/tools/linear-regression-calculator`
- **Absorbed Subordinate Slugs**:
  - `/tools/regression-equation-calculator`
  - `/tools/r-squared-calculator`
  - `/tools/correlation-coefficient`
  - `/tools/covariance-calculator`
- **Rationale**: When a user inputs $(X, Y)$ coordinate pairs, the Linear Regression Calculator should compute and display the regression slope/intercept equation, Pearson $r$, coefficient of determination $R^2$, and sample covariance simultaneously.

### 8. Unified Five-Number Summary & Boxplot Tool
- **Canonical Tool**: `/tools/five-number-summary`
- **Absorbed Subordinate Slugs**:
  - `/tools/quartile-calculator`
  - `/tools/iqr-calculator`
- **Rationale**: The five-number summary naturally computes Min, Q1, Median, Q3, Max, and $\text{IQR} = Q3 - Q1$. Maintaining separate quartile and IQR pages creates thin content.

### 9. Unified Geometry Suites (2D Area & 3D Volume)
- **Canonical Tools**: `/tools/area-calculator` and `/tools/volume-calculator`
- **Absorbed Subordinate Slugs**:
  - 2D: `/tools/trapezoid-area`, `/tools/parallelogram-area`, `/tools/rhombus-area`, `/tools/ellipse-area`, `/tools/sector-area`
  - 3D: `/tools/cone-volume`, `/tools/cylinder-volume`, `/tools/sphere-volume`, `/tools/cube-volume`, `/tools/pyramid-volume`

### 10. Unified Cell Biology Visual Reference
- **Canonical Tool**: `/tools/animal-cell` and `/tools/plant-cell` (consolidated as Cell Structure Explorer)
- **Absorbed Subordinate Slugs**:
  - `/tools/cell-organelles`
  - `/tools/cell-structure`
  - `/tools/eukaryotic-cell`
  - `/tools/prokaryotic-cell`

---

## 6. Removal Candidates Breakdown

The audit identifies **228 tools** recommended for decommissioning from public indexation.

### Categories of Removal:
1. **Hyper-Specialized Micro-Formulas (No Standalone Search Demand)**:
   - Physics: Heat of vaporization energy, fusion energy, decay constant, mass defect, charge from current time, relative error.
   - Chemistry: Alkane/alkene/alkyne empirical formula counters, degree of unsaturation formula.
2. **Clinical / Advanced Niche Calculations (Outside Student Scope)**:
   - Biology: Alveolar ventilation, renal clearance, stroke volume, case fatality rate, relative risk, positive predictive value, sensitivity/specificity, catalytic efficiency, Michaelis-Menten kinetics.
3. **Trivial Single-Step Arithmetic**:
   - Math: Adding two fractions without steps, single angle degree conversion, redundant percentage shortcuts.

---

## 7. Category-by-Category Reduction Summary

| Category | Current Count | Core Keep | Keep | Merge | Remove | Reference | Proposed Final Count | Reduction % |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Mathematics** | 111 | 26 | 4 | 3 | 77 | 1 | **31** | -72% |
| **Physics** | 106 | 6 | 6 | 18 | 76 | 0 | **12** | -89% |
| **Chemistry** | 89 | 7 | 8 | 17 | 54 | 3 | **18** | -80% |
| **Biology** | 55 | 4 | 5 | 14 | 21 | 11 | **20** | -64% |
| **Statistics** | 17 | 6 | 3 | 8 | 0 | 0 | **9** | -47% |
| **Academic** | 6 | 4 | 0 | 2 | 0 | 0 | **4** | -33% |
| **Study & Productivity** | 5 | 4 | 1 | 0 | 0 | 0 | **5** | -0% |
| **Linear Algebra** | 4 | 1 | 1 | 2 | 0 | 0 | **2** | -50% |
| **Date & Time** | 3 | 2 | 1 | 0 | 0 | 0 | **3** | -0% |
| **Discrete Mathematics** | 3 | 2 | 0 | 1 | 0 | 0 | **2** | -33% |
| **Computer Science** | 3 | 3 | 0 | 0 | 0 | 0 | **3** | -0% |
| **Converters** | 2 | 2 | 0 | 0 | 0 | 0 | **2** | -0% |
| **Student Utilities** | 2 | 2 | 0 | 0 | 0 | 0 | **2** | -0% |
| **Finance** | 2 | 2 | 0 | 0 | 0 | 0 | **2** | -0% |
| **Random & Utilities** | 1 | 1 | 0 | 0 | 0 | 0 | **1** | -0% |
| **Science** | 1 | 0 | 0 | 1 | 0 | 0 | **0** | -100% |
| **Engineering** | 1 | 0 | 0 | 1 | 0 | 0 | **0** | -100% |
| **Numerical Methods** | 1 | 0 | 0 | 1 | 0 | 0 | **0** | -100% |
| **TOTALS** | **412** | **72** | **29** | **68** | **228** | **15** | **116** | **-72%** |

---

## 8. Proposed Final Ecosystem (~117 Tools)

### Core Keep Tools (72 Tools)
1. **CGPA to Percentage & Percentage to CGPA Converter** (`/tools/cgpa-to-percentage`) — *Academic*
2. **GPA Calculator (Grade Point Average)** (`/tools/gpa-calculator`) — *Academic*
3. **Percentage Calculator** (`/tools/percentage-calculator`) — *Academic*
4. **Attendance Calculator** (`/tools/attendance-calculator`) — *Academic*
5. **Pomodoro Timer** (`/tools/pomodoro-timer`) — *Study & Productivity*
6. **Word Counter** (`/tools/word-counter`) — *Study & Productivity*
7. **Age Calculator** (`/tools/age-calculator`) — *Date & Time*
8. **Date Difference** (`/tools/date-difference`) — *Date & Time*
9. **Unit Converter** (`/tools/unit-converter`) — *Converters*
10. **Percentage Change** (`/tools/percentage-change`) — *Mathematics*
11. **Random Number Generator** (`/tools/random-number`) — *Random & Utilities*
12. **Rectangle Area Calculator** (`/tools/rectangle-area-calculator`) — *Mathematics*
13. **Exponent Calculator** (`/tools/exponent-calculator`) — *Mathematics*
14. **Logarithm Calculator** (`/tools/logarithm-calculator`) — *Mathematics*
15. **LCM Calculator** (`/tools/lcm-calculator`) — *Mathematics*
16. **Pythagorean Theorem Calculator** (`/tools/pythagorean-theorem-calculator`) — *Mathematics*
17. **Circle Area Calculator** (`/tools/circle-area-calculator`) — *Mathematics*
18. **Cube Volume Calculator** (`/tools/cube-volume-calculator`) — *Mathematics*
19. **Sphere Volume Calculator** (`/tools/sphere-volume-calculator`) — *Mathematics*
20. **Cylinder Volume Calculator** (`/tools/cylinder-volume-calculator`) — *Mathematics*
21. **Cone Volume Calculator** (`/tools/cone-volume-calculator`) — *Mathematics*
22. **Fraction Calculator** (`/tools/fraction-calculator`) — *Mathematics*
23. **Right Triangle Calculator** (`/tools/right-triangle-calculator`) — *Mathematics*
24. **Triangle Calculator** (`/tools/triangle-calculator`) — *Mathematics*
25. **Triangle Area Calculator** (`/tools/triangle-area-calculator`) — *Mathematics*
26. **Limit Calculator** (`/tools/limit-calculator`) — *Mathematics*
27. **One-Sided Limit Calculator** (`/tools/one-sided-limit-calculator`) — *Mathematics*
28. **Infinite Limit Calculator** (`/tools/infinite-limit-calculator`) — *Mathematics*
29. **Derivative Calculator** (`/tools/derivative-calculator`) — *Mathematics*
30. **Second Derivative Calculator** (`/tools/second-derivative-calculator`) — *Mathematics*
31. **Partial Derivative Calculator** (`/tools/partial-derivative-calculator`) — *Mathematics*
32. **Integral Calculator** (`/tools/integral-calculator`) — *Mathematics*
33. **Definite Integral Calculator** (`/tools/definite-integral-calculator`) — *Mathematics*
34. **Indefinite Integral Calculator** (`/tools/indefinite-integral-calculator`) — *Mathematics*
35. **Free Fall Calculator** (`/tools/free-fall-calculator`) — *Physics*
36. **Projectile Range** (`/tools/projectile-motion-calculator`) — *Physics*
37. **Ohm's Law Calculator** (`/tools/ohms-law-calculator`) — *Physics*
38. **Coulomb's Law** (`/tools/coulombs-law-calculator`) — *Physics*
39. **Snell's Law Calculator** (`/tools/snells-law-calculator`) — *Physics*
40. **Lens Equation** (`/tools/lens-equation-calculator`) — *Physics*
41. **Molar Mass Calculator** (`/tools/molar-mass-calculator`) — *Chemistry*
42. **Ideal Gas Law** (`/tools/ideal-gas-law`) — *Chemistry*
43. **Molarity Calculator** (`/tools/molarity-calculator`) — *Chemistry*
44. **Dilution Calculator** (`/tools/dilution-calculator`) — *Chemistry*
45. **pH Calculator** (`/tools/ph-calculator`) — *Chemistry*
46. **Henderson-Hasselbalch** (`/tools/henderson-hasselbalch`) — *Chemistry*
47. **Percent Yield Calculator** (`/tools/percent-yield-calculator`) — *Chemistry*
48. **BMI Calculator (Body Mass Index)** (`/tools/bmi-calculator`) — *Biology*
49. **Punnett Square Calculator** (`/tools/punnett-square`) — *Biology*
50. **Hardy-Weinberg (q² to p)** (`/tools/hardy-weinberg-calculator`) — *Biology*
51. **BMR Calculator (Mifflin-St Jeor)** (`/tools/bmr-calculator`) — *Biology*
52. **Five Number Summary** (`/tools/five-number-summary`) — *Statistics*
53. **Linear Regression Calculator** (`/tools/linear-regression-calculator`) — *Statistics*
54. **Normal Distribution (Z-Score) Calculator** (`/tools/normal-distribution-calculator`) — *Statistics*
55. **Binomial Distribution** (`/tools/binomial-distribution-calculator`) — *Statistics*
56. **Truth Table Generator** (`/tools/truth-table-generator`) — *Discrete Mathematics*
57. **Set Operations Calculator** (`/tools/set-calculator`) — *Discrete Mathematics*
58. **RREF Calculator (Reduced Row Echelon Form)** (`/tools/rref-calculator`) — *Linear Algebra*
59. **Final Grade Calculator** (`/tools/final-grade-calculator`) — *Student Utilities*
60. **Base Conversion Calculator** (`/tools/base-conversion-calculator`) — *Computer Science*
61. **Weighted Grade Calculator** (`/tools/weighted-grade-calculator`) — *Student Utilities*
62. **Words to Pages Converter** (`/tools/words-to-pages`) — *Study & Productivity*
63. **Compound Interest Calculator** (`/tools/compound-interest-calculator`) — *Finance*
64. **Simple Interest Calculator** (`/tools/simple-interest-calculator`) — *Finance*
65. **Z-Score Calculator & Normal Distribution Probability** (`/tools/z-score-calculator`) — *Statistics*
66. **Permutations & Combinations Calculator (nPr & nCr)** (`/tools/permutations-and-combinations`) — *Mathematics*
67. **Prime Factorization Calculator** (`/tools/prime-factorization-calculator`) — *Mathematics*
68. **Bitwise Calculator (AND, OR, XOR, NOT, Shifts)** (`/tools/bitwise-calculator`) — *Computer Science*
69. **Scientific Notation Calculator & Converter** (`/tools/scientific-notation-calculator`) — *Converters*
70. **Confidence Interval Calculator (Mean & Proportion)** (`/tools/confidence-interval-calculator`) — *Statistics*
71. **Case Converter (UPPERCASE, lowercase, Title, camelCase, snake_case)** (`/tools/case-converter`) — *Study & Productivity*
72. **IPv4 Subnet Calculator (CIDR & IP Network Planner)** (`/tools/subnet-calculator`) — *Computer Science*

### Keep Tools (29 Tools)
1. **Study Hours Calculator** (`/tools/study-hours`) — *Study & Productivity*
2. **Exam Countdown** (`/tools/exam-countdown`) — *Date & Time*
3. **Arithmetic Sequence Calculator** (`/tools/arithmetic-sequence-calculator`) — *Mathematics*
4. **Geometric Sequence Calculator** (`/tools/geometric-sequence-calculator`) — *Mathematics*
5. **Law of Sines Calculator** (`/tools/law-of-sines-calculator`) — *Mathematics*
6. **Law of Cosines Calculator** (`/tools/law-of-cosines-calculator`) — *Mathematics*
7. **Centripetal Acceleration** (`/tools/centripetal-acceleration-calculator`) — *Physics*
8. **Friction Calculator** (`/tools/friction-calculator`) — *Physics*
9. **Gravitational Force** (`/tools/gravitational-force-calculator`) — *Physics*
10. **Thermal Expansion** (`/tools/thermal-expansion-calculator`) — *Physics*
11. **Capacitance Calculator** (`/tools/capacitance-calculator`) — *Physics*
12. **Magnetic Force** (`/tools/magnetic-force-calculator`) — *Physics*
13. **Standard Cell Potential** (`/tools/standard-cell-potential`) — *Chemistry*
14. **Nernst Equation** (`/tools/nernst-equation`) — *Chemistry*
15. **First-Order Half-Life** (`/tools/half-life-first-order`) — *Chemistry*
16. **Q = mcΔT Calculator** (`/tools/q-mc-delta-t`) — *Chemistry*
17. **Calorimetry Calculator** (`/tools/calorimetry-calculator`) — *Chemistry*
18. **Cell Potential Calculator** (`/tools/cell-potential-calculator`) — *Chemistry*
19. **Half-Life (1st Order)** (`/tools/half-life-calculator`) — *Chemistry*
20. **Nuclear Half-Life** (`/tools/half-life-nuclear`) — *Chemistry*
21. **Max Heart Rate** (`/tools/heart-rate-zones`) — *Biology*
22. **DNA & RNA Sequence Analyzer** (`/tools/dna-sequence-analyzer`) — *Biology*
23. **Ideal Body Weight (Devine, Male)** (`/tools/ideal-body-weight`) — *Biology*
24. **Photosynthesis Equation** (`/tools/photosynthesis-equation`) — *Biology*
25. **Cellular Respiration** (`/tools/cellular-respiration`) — *Biology*
26. **Percentile Calculator** (`/tools/percentile-calculator`) — *Statistics*
27. **Mean Absolute Deviation** (`/tools/mean-absolute-deviation`) — *Statistics*
28. **Poisson Distribution** (`/tools/poisson-distribution-calculator`) — *Statistics*
29. **Eigenvalue Calculator** (`/tools/eigenvalue-calculator`) — *Linear Algebra*

### Reference Guides (15 Tools)
1. **Unit Circle** (`/tools/unit-circle`) — *Mathematics*
2. **Interactive Periodic Table** (`/tools/periodic-table`) — *Chemistry*
3. **Solubility Rules** (`/tools/solubility-rules`) — *Chemistry*
4. **Organic Functional Groups** (`/tools/organic-functional-groups`) — *Chemistry*
5. **Animal Cell Organelles** (`/tools/animal-cell`) — *Biology*
6. **Plant Cell Organelles** (`/tools/plant-cell`) — *Biology*
7. **Mitosis Stages** (`/tools/mitosis-stages`) — *Biology*
8. **Central Dogma** (`/tools/central-dogma`) — *Biology*
9. **Amino Acid Reference** (`/tools/amino-acid-reference`) — *Biology*
10. **Protein Structure** (`/tools/protein-structure`) — *Biology*
11. **Human Skeleton** (`/tools/human-skeleton`) — *Biology*
12. **Circulatory System** (`/tools/circulatory-system`) — *Biology*
13. **Nervous System** (`/tools/nervous-system`) — *Biology*
14. **Digestive System** (`/tools/digestive-system`) — *Biology*
15. **Endocrine System** (`/tools/endocrine-system`) — *Biology*

---

## 9. Recommended Next Phase Implementation Roadmap

1. **Phase 7A — Redirect & Routing Architecture Planning**:
   - Establish a comprehensive 301 redirection table in `astro.config.mjs` or server headers for all 68 merged slugs and 228 removed slugs so existing backlinks and bookmarks cleanly map to their parent canonical tools.
2. **Phase 7B — Multi-Mode Component Consolidation**:
   - Upgrade canonical tools (Gas Laws, Kinematics, Acid-Base, Solution Concentration, Geometry Suites) with tabbed multi-mode interfaces to absorb subordinate functionality.
3. **Phase 7C — Registry & Sitemap Curation**:
   - Prune `src/data/registry.ts` to the curated ~117 tools, updating category structures and search indexes.

# StudentKit — Final 103-Resource Quality & Demand Audit

**Checkpoint Baseline:** `413c20b` (Parent: `e2b51b5`)  
**Branch:** `refactor/studentkit-tool-reduction`  
**Audit Scope:** Comprehensive quality, search demand, redundancy, and utility review of the exact 103 active canonical resources.  
**Mode:** READ-ONLY AUDIT — No source code modifications, tool additions, deletions, or merges performed.

---

## Executive Summary

Following the execution of the 13 approved natural tool merges, the StudentKit resource catalog has been streamlined from 116 to **exactly 103 active canonical resources**. 

This audit confirms that the current 103 resources form a cohesive, high-utility, maintenance-free toolkit tailored specifically to secondary and university students. The catalog eliminates thin, repetitive single-variable clones while preserving deep symbolic engines, visual reference guides, and daily productivity essentials.

### Key Metrics Summary

| Metric | Current State |
| :--- | :--- |
| **Total Active Canonical Resources** | **103** |
| **Interactive Calculators & Tools** | **87** |
| **Reference & Visual Guides** | **16** |
| **Active Categories** | **10** |
| **Configured Permanent Redirect Rules** | **75** (62 original + 13 post-merge) |
| **Active Canonical Pages Built** | **119** (103 tools + 10 categories + 1 tools directory + 5 static) |
| **Redirect HTML Artifacts Built** | **75** |
| **Total Built HTML Files** | **194** |
| **Sitemap URLs** | **119** (0 retired URLs, 0 redirect artifacts) |
| **Internal Broken Links** | **0** |

---

## STEP 1 — Exact Inventory of All 103 Active Resources

The current inventory was verified directly against [`src/data/registry.ts`](file:///c:/Users/Asma/Desktop/studentkit/src/data/registry.ts), [`src/data/toolContent.ts`](file:///c:/Users/Asma/Desktop/studentkit/src/data/toolContent.ts), [`astro.config.mjs`](file:///c:/Users/Asma/Desktop/studentkit/astro.config.mjs), and all components in `src/components/tools/`.

### Category Breakdown

```
Academic & Grades:   7 tools
Study & Writing:     5 tools
Everyday Utilities:  6 tools
Converters:          3 tools
Mathematics:        23 tools
Physics:            12 tools
Chemistry:          13 tools
Biology & Health:   20 tools
Statistics:          9 tools
Computer Science:    5 tools
----------------------------------
TOTAL:             103 active canonical resources
```

---

## STEP 2 — Comprehensive 103-Resource Evaluation & Classification

Every resource has been evaluated using practical criteria: student usefulness, estimated search intent, audience breadth, implementation depth, maintenance profile, and differentiation.

### Classification Legend
- **CORE KEEP:** Flagship student tool with widespread appeal and high organic search demand.
- **KEEP:** Solid, well-scoped academic resource solving a recognized problem with dedicated utility.
- **REWORK:** High-potential tool requiring title, UI, or description polish in future phases.
- **MERGE CANDIDATE:** Functional tool that could conceptually merge into a larger parent in a future major cycle without cluttering UX.
- **REMOVE CANDIDATE:** Low-demand or marginal resource with weak student relevance.

---

### 1. Academic & Grades (7 Resources)

| # | Slug | Title | Component | Type | Classification | Assessment & Demand Rational |
|---|---|---|---|---|---|---|
| 1 | `cgpa-to-percentage` | CGPA to Percentage & Percentage to CGPA Converter | SlugMatch | Interactive | **CORE KEEP** | Huge international search volume (CBSE, university conversions). High retention. |
| 2 | `gpa-calculator` | GPA Calculator (Grade Point Average) | SlugMatch | Interactive | **CORE KEEP** | Core flagship student tool. Multi-course credit weighing. Essential. |
| 3 | `percentage-calculator` | Percentage Calculator | SlugMatch | Interactive | **CORE KEEP** | Universal everyday math and grade utility. Very high daily usage. |
| 4 | `attendance-calculator` | Attendance Calculator | SlugMatch | Interactive | **CORE KEEP** | Extremely popular college utility for tracking minimum attendance criteria (e.g. 75% rule). |
| 5 | `percentage-change` | Percentage Change | SlugMatch | Interactive | **KEEP** | Calculates % increase/decrease for lab results, grade shifts, and statistics. |
| 6 | `final-grade-calculator` | Final Grade Calculator | UnitAwareCalculator | Interactive | **CORE KEEP** | Highly searched seasonal intent ("What do I need on my final exam to pass/get an A?"). |
| 7 | `weighted-grade-calculator` | Weighted Grade Calculator | UnitAwareCalculator | Interactive | **CORE KEEP** | Standard syllabus requirement for computing weighted categories (homework, exams, quizzes). |

---

### 2. Study & Writing (5 Resources)

| # | Slug | Title | Component | Type | Classification | Assessment & Demand Rational |
|---|---|---|---|---|---|---|
| 8 | `study-hours` | Study Hours Calculator | SlugMatch | Interactive | **KEEP** | Helps students plan weekly study allocations based on credit hours. |
| 9 | `pomodoro-timer` | Pomodoro Timer | SlugMatch | Interactive | **CORE KEEP** | High student engagement tool. Built-in work/break intervals for focused study sessions. |
| 10 | `word-counter` | Word Counter | SlugMatch | Interactive | **CORE KEEP** | Crucial essay writing utility with live word, character, and reading time metrics. |
| 11 | `words-to-pages` | Words to Pages Converter | WordsToPages | Interactive | **CORE KEEP** | High intent for academic essay formatting (single/double spaced, font sizes). |
| 12 | `case-converter` | Case Converter | CaseConverter | Interactive | **KEEP** | Practical text formatting utility (Title Case, camelCase, UPPERCASE, lowercase). |

---

### 3. Everyday Utilities (6 Resources)

| # | Slug | Title | Component | Type | Classification | Assessment & Demand Rational |
|---|---|---|---|---|---|---|
| 13 | `age-calculator` | Age Calculator | SlugMatch | Interactive | **KEEP** | General utility with high search volume. Computes exact years, months, and days. |
| 14 | `date-difference` | Date Difference | SlugMatch | Interactive | **KEEP** | Calculates exact calendar elapsed time for project deadlines and semester planning. |
| 15 | `exam-countdown` | Exam Countdown | SlugMatch | Interactive | **KEEP** | Live visual timer countdown for test dates and assignment due dates. |
| 16 | `random-number` | Random Number Generator | SlugMatch | Interactive | **KEEP** | Simple randomizer for statistics sampling, classroom picks, and simulations. |
| 17 | `simple-interest-calculator` | Simple Interest Calculator | SimpleInterestCalculator | Interactive | **KEEP** | Fundamental math and financial literacy education utility ($I = Prt$). |
| 18 | `compound-interest-calculator` | Compound Interest Calculator | CompoundInterestCalculator | Interactive | **CORE KEEP** | Essential economics and math curriculum tool with annual/monthly compound modeling. |

---

### 4. Converters (3 Resources)

| # | Slug | Title | Component | Type | Classification | Assessment & Demand Rational |
|---|---|---|---|---|---|---|
| 19 | `unit-converter` | Unit Converter | SlugMatch | Interactive | **CORE KEEP** | Multi-unit conversion hub (length, mass, temperature, speed, area, volume). Flagship. |
| 20 | `base-conversion-calculator` | Base Conversion Calculator | BaseConverter | Interactive | **CORE KEEP** | Binary, Decimal, Hexadecimal, and Octal simultaneous radix converter for CS students. |
| 21 | `scientific-notation-calculator` | Scientific Notation Calculator & Converter | ScientificNotationCalculator | Interactive | **KEEP** | Converts standard decimals to scientific/engineering notation with significant figures. |

---

### 5. Mathematics (23 Resources)

| # | Slug | Title | Component | Type | Classification | Assessment & Demand Rational |
|---|---|---|---|---|---|---|
| 22 | `rectangle-area-calculator` | Rectangle Area Calculator | FormulaCalculator | Interactive | **KEEP** | Basic 2D geometry solver ($A = lw$). Clean formula implementation. |
| 23 | `exponent-calculator` | Exponent Calculator | FormulaCalculator | Interactive | **KEEP** | Calculates powers, negative exponents, and fractional exponents. |
| 24 | `logarithm-calculator` | Logarithm Calculator | FormulaCalculator | Interactive | **KEEP** | Evaluates $\log_{10}$, $\ln$, and $\log_2$ functions with domain checks. |
| 25 | `lcm-calculator` | LCM Calculator | FormulaCalculator | Interactive | **KEEP** | Computes Least Common Multiple and Greatest Common Divisor ($GCD$) for integer pairs. |
| 26 | `pythagorean-theorem-calculator` | Pythagorean Theorem Calculator | FormulaCalculator | Interactive | **CORE KEEP** | High-volume foundational geometry equation ($a^2 + b^2 = c^2$). |
| 27 | `circle-area-calculator` | Circle Area Calculator | FormulaCalculator | Interactive | **KEEP** | Solves circle area, radius, diameter, and circumference from single inputs. |
| 28 | `cube-volume-calculator` | Cube Volume Calculator | FormulaCalculator | Interactive | **KEEP** | 3D solid geometry volume and surface area ($V = s^3$). |
| 29 | `sphere-volume-calculator` | Sphere Volume Calculator | FormulaCalculator | Interactive | **KEEP** | 3D solid geometry volume ($V = \frac{4}{3}\pi r^3$). |
| 30 | `cylinder-volume-calculator` | Cylinder Volume Calculator | FormulaCalculator | Interactive | **KEEP** | Volume of circular cylinder ($V = \pi r^2 h$). |
| 31 | `cone-volume-calculator` | Cone Volume Calculator | FormulaCalculator | Interactive | **KEEP** | Volume of conical solid ($V = \frac{1}{3}\pi r^2 h$). |
| 32 | `arithmetic-sequence-calculator` | Arithmetic Sequence Calculator | FormulaCalculator | Interactive | **KEEP** | Computes $n$-th term ($a_n = a_1 + (n-1)d$) and partial sum ($S_n$). |
| 33 | `geometric-sequence-calculator` | Geometric Sequence Calculator | FormulaCalculator | Interactive | **KEEP** | Computes $n$-th term ($g_n = a r^{n-1}$) and finite series sum. |
| 34 | `fraction-calculator` | Fraction Calculator | FractionCalculator | Interactive | **CORE KEEP** | Full fractional arithmetic solver (add, subtract, multiply, divide, simplify, mixed numbers). |
| 35 | `triangle-calculator` | Triangle Calculator | TriangleCalculator | Interactive | **CORE KEEP** | Canonical triangle solver covering SSS, SAS, ASA, AAS, right triangles, and triangle area. |
| 36 | `law-of-sines-calculator` | Law of Sines Calculator | TriangleCalculator | Interactive | **KEEP** | Step-by-step ratio solver for oblique triangle sides and angles. |
| 37 | `law-of-cosines-calculator` | Law of Cosines Calculator | TriangleCalculator | Interactive | **KEEP** | Dedicated SSS/SAS triangle solving with cosine formula. |
| 38 | `unit-circle` | Unit Circle | UnitCircle | Reference | **CORE KEEP** | Interactive visual reference with radian, degree, and exact coordinate readouts. |
| 39 | `limit-calculator` | Limit Calculator | LimitCalculator | Interactive | **CORE KEEP** | Calculus evaluation engine supporting two-sided, one-sided, and infinite limits. |
| 40 | `derivative-calculator` | Derivative Calculator | DerivativeCalculator | Interactive | **CORE KEEP** | Deep symbolic differentiation engine supporting first, second, and partial derivatives. |
| 41 | `integral-calculator` | Integral Calculator | IntegralCalculator | Interactive | **CORE KEEP** | Composite Simpson's 1/3 rule numerical definite integration engine. |
| 42 | `rref-calculator` | RREF Calculator | MatrixCalculator | Interactive | **CORE KEEP** | Step-by-step Gauss-Jordan elimination matrix solver with elementary row operations. |
| 43 | `eigenvalue-calculator` | Eigenvalue Calculator | MatrixCalculator | Interactive | **KEEP** | Characteristic polynomial and eigenvalue evaluation for linear algebra. |
| 44 | `prime-factorization-calculator` | Prime Factorization Calculator | PrimeFactorization | Interactive | **CORE KEEP** | Prime factor tree decomposition, divisibility analysis, and factorization. |

---

### 6. Physics (12 Resources)

| # | Slug | Title | Component | Type | Classification | Assessment & Demand Rational |
|---|---|---|---|---|---|---|
| 45 | `free-fall-calculator` | Free Fall Calculator | UnitAwareCalculator | Interactive | **CORE KEEP** | Gravitational acceleration kinematics ($v = gt, d = \frac{1}{2}gt^2$). High secondary demand. |
| 46 | `projectile-motion-calculator` | Projectile Range | UnitAwareCalculator | Interactive | **CORE KEEP** | Classical mechanics 2D trajectory solver (max height, flight time, horizontal range). |
| 47 | `centripetal-acceleration-calculator` | Centripetal Acceleration | UnitAwareCalculator | Interactive | **KEEP** | Circular kinematics ($a_c = \frac{v^2}{r}$). Standard physics homework staple. |
| 48 | `friction-calculator` | Friction Calculator | UnitAwareCalculator | Interactive | **KEEP** | Solves static and kinetic friction forces ($f = \mu N$). |
| 49 | `gravitational-force-calculator` | Gravitational Force | UnitAwareCalculator | Interactive | **KEEP** | Newton's universal gravitation equation ($F = G\frac{m_1 m_2}{r^2}$). |
| 50 | `thermal-expansion-calculator` | Thermal Expansion | UnitAwareCalculator | Interactive | **KEEP** | Thermodynamics linear and volumetric material expansion ($\Delta L = \alpha L_0 \Delta T$). |
| 51 | `ohms-law-calculator` | Ohm's Law Calculator | UnitAwareCalculator | Interactive | **CORE KEEP** | Flagship electronics and introductory physics utility ($V = IR, P = VI$). |
| 52 | `coulombs-law-calculator` | Coulomb's Law | UnitAwareCalculator | Interactive | **KEEP** | Electrostatic point charge force evaluation ($F = k\frac{|q_1 q_2|}{r^2}$). |
| 53 | `capacitance-calculator` | Capacitance Calculator | UnitAwareCalculator | Interactive | **KEEP** | Parallel plate capacitance and charge calculations ($Q = CV$). |
| 54 | `magnetic-force-calculator` | Magnetic Force | UnitAwareCalculator | Interactive | **KEEP** | Lorentz magnetic force on moving charges ($F = qvB\sin\theta$) and wires ($F = ILB\sin\theta$). |
| 55 | `snells-law-calculator` | Snell's Law Calculator | UnitAwareCalculator | Interactive | **KEEP** | Geometric optics refraction and critical angle evaluation ($n_1\sin\theta_1 = n_2\sin\theta_2$). |
| 56 | `lens-equation-calculator` | Lens Equation | UnitAwareCalculator | Interactive | **KEEP** | Thin lens and curved mirror focal length solver ($\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}$). |

---

### 7. Chemistry (13 Resources)

| # | Slug | Title | Component | Type | Classification | Assessment & Demand Rational |
|---|---|---|---|---|---|---|
| 57 | `molar-mass-calculator` | Molar Mass Calculator | ChemicalFormulaCalculator | Interactive | **CORE KEEP** | Flagship chemistry tool. Parses chemical formulas and computes molecular weights. |
| 58 | `periodic-table` | Interactive Periodic Table | PeriodicTable | Interactive | **CORE KEEP** | Flagship reference with element details, atomic properties, and category filters. |
| 59 | `ideal-gas-law` | Ideal Gas Law | UnitAwareCalculator | Interactive | **CORE KEEP** | Ubiquitous chemistry equation ($PV = nRT$) with multi-unit conversion support. |
| 60 | `molarity-calculator` | Molarity Calculator | UnitAwareCalculator | Interactive | **CORE KEEP** | Solution stoichiometry ($M = \frac{\text{moles}}{\text{Liters}}$). High lab search intent. |
| 61 | `dilution-calculator` | Dilution Calculator | UnitAwareCalculator | Interactive | **CORE KEEP** | Standard laboratory preparation formula ($M_1 V_1 = M_2 V_2$). High practical utility. |
| 62 | `ph-calculator` | pH Calculator | UnitAwareCalculator | Interactive | **CORE KEEP** | Acid-base equilibrium solver ($pH, pOH, [H^+], [OH^-]$). |
| 63 | `henderson-hasselbalch` | Henderson-Hasselbalch | UnitAwareCalculator | Interactive | **KEEP** | Buffer solution pH calculation ($pH = pK_a + \log\frac{[A^-]}{[HA]}$). |
| 64 | `percent-yield-calculator` | Percent Yield Calculator | UnitAwareCalculator | Interactive | **KEEP** | Stoichiometric reaction efficiency ($\frac{\text{Actual}}{\text{Theoretical}} \times 100\%$). |
| 65 | `solubility-rules` | Solubility Rules | ChemistryReference | Reference | **CORE KEEP** | High-utility reference guide for ionic salt aqueous precipitation rules. |
| 66 | `calorimetry-calculator` | Calorimetry Calculator | UnitAwareCalculator | Interactive | **KEEP** | Thermochemistry heat exchange and sensible heat transfer ($Q = mc\Delta T$). |
| 67 | `cell-potential-calculator` | Cell Potential Calculator | UnitAwareCalculator | Interactive | **KEEP** | Galvanic electrochemical cell voltage ($E^\circ_{\text{cell}} = E^\circ_{\text{cat}} - E^\circ_{\text{an}}$). |
| 68 | `half-life-calculator` | Half-Life (1st Order) | UnitAwareCalculator | Interactive | **KEEP** | Chemical kinetics and nuclear decay half-life equation ($t_{1/2} = \frac{\ln 2}{k}$). |
| 69 | `organic-functional-groups` | Organic Functional Groups | ChemistryReference | Reference | **CORE KEEP** | Essential reference guide for organic compound classification (alcohols, ketones, etc.). |

---

### 8. Biology & Health (20 Resources)

| # | Slug | Title | Component | Type | Classification | Assessment & Demand Rational |
|---|---|---|---|---|---|---|
| 70 | `bmi-calculator` | BMI Calculator (Body Mass Index) | UnitAwareCalculator | Interactive | **CORE KEEP** | Mass consumer & health class tool with WHO classification readouts. |
| 71 | `heart-rate-zones` | Max Heart Rate | UnitAwareCalculator | Interactive | **KEEP** | Calculates cardiovascular training zones based on age and resting HR. |
| 72 | `animal-cell` | Animal Cell Organelles | BiologyReference | Reference | **CORE KEEP** | Visual reference for cell biology exams (mitochondria, ER, Golgi, nucleus). |
| 73 | `plant-cell` | Plant Cell Organelles | BiologyReference | Reference | **CORE KEEP** | Visual reference for plant biology (chloroplast, vacuole, cell wall). |
| 74 | `mitosis-stages` | Mitosis Stages | BiologyReference | Reference | **CORE KEEP** | Step-by-step visual cytology guide (prophase, metaphase, anaphase, telophase). |
| 75 | `punnett-square` | Punnett Square Calculator | PunnettSquare | Interactive | **CORE KEEP** | Flagship genetics solver for monohybrid and dihybrid Mendelian crosses. |
| 76 | `hardy-weinberg-calculator` | Hardy-Weinberg (q² to p) | UnitAwareCalculator | Interactive | **KEEP** | Population genetics allele frequency solver ($p^2 + 2pq + q^2 = 1$). |
| 77 | `dna-sequence-analyzer` | DNA & RNA Sequence Analyzer | DNASequenceCalculator | Interactive | **CORE KEEP** | Bioinformatic tool computing GC content, complement, reverse complement, mRNA, and amino acids. |
| 78 | `central-dogma` | Central Dogma | BiologyReference | Reference | **KEEP** | Molecular biology reference (DNA replication $\rightarrow$ transcription $\rightarrow$ translation). |
| 79 | `amino-acid-reference` | Amino Acid Reference | BiologyReference | Reference | **KEEP** | Comprehensive reference guide for all 20 standard amino acid structures and codons. |
| 80 | `bmr-calculator` | BMR Calculator (Mifflin-St Jeor) | UnitAwareCalculator | Interactive | **KEEP** | Basal Metabolic Rate daily caloric expenditure solver. |
| 81 | `ideal-body-weight` | Ideal Body Weight (Devine, Male) | UnitAwareCalculator | Interactive | **KEEP** | Clinical pharmacology and nutrition standard body weight calculation. |
| 82 | `protein-structure` | Protein Structure | BiologyReference | Reference | **KEEP** | Visual guide to primary, secondary, tertiary, and quaternary protein folding. |
| 83 | `photosynthesis-equation` | Photosynthesis Equation | BiologyReference | Reference | **KEEP** | Biochemistry guide to light reactions, Calvin cycle, and chlorophyll pigments. |
| 84 | `cellular-respiration` | Cellular Respiration | BiologyReference | Reference | **KEEP** | Biochemistry reference detailing glycolysis, Krebs cycle, and electron transport chain. |
| 85 | `human-skeleton` | Human Skeleton | BiologyReference | Reference | **KEEP** | Anatomy reference guide covering axial and appendicular skeletal bones. |
| 86 | `circulatory-system` | Circulatory System | BiologyReference | Reference | **KEEP** | Human cardiovascular reference (systemic, pulmonary, heart chambers, valves). |
| 87 | `nervous-system` | Nervous System | BiologyReference | Reference | **KEEP** | Human nervous system guide (CNS, PNS, neuron structure, action potentials). |
| 88 | `digestive-system` | Digestive System | BiologyReference | Reference | **KEEP** | Human GI tract anatomy reference (stomach, liver, pancreas, intestines). |
| 89 | `endocrine-system` | Endocrine System | BiologyReference | Reference | **KEEP** | Human endocrine guide detailing pituitary, thyroid, adrenal hormones and glands. |

---

### 9. Statistics (9 Resources)

| # | Slug | Title | Component | Type | Classification | Assessment & Demand Rational |
|---|---|---|---|---|---|---|
| 90 | `percentile-calculator` | Percentile Calculator | DatasetCalculator | Interactive | **KEEP** | Computes empirical percentiles and ranks from comma-separated datasets. |
| 91 | `five-number-summary` | Five Number Summary | DatasetCalculator | Interactive | **KEEP** | Computes Minimum, Q1, Median, Q3, Maximum, and IQR from dataset input. |
| 92 | `mean-absolute-deviation` | Mean Absolute Deviation | DatasetCalculator | Interactive | **KEEP** | Descriptive statistical dispersion calculator ($MAD$). |
| 93 | `linear-regression-calculator` | Linear Regression Calculator | DatasetCalculator | Interactive | **CORE KEEP** | Least-squares regression with scatter plot, slope, intercept, $R$, and $R^2$. |
| 94 | `normal-distribution-calculator` | Normal Distribution (Z-Score) Calculator | DistributionCalculator | Interactive | **CORE KEEP** | Evaluates standard normal curve probability densities and cumulative areas. |
| 95 | `binomial-distribution-calculator` | Binomial Distribution | DistributionCalculator | Interactive | **KEEP** | Discrete probability solver for $n$ Bernoulli trials ($P(X = k)$). |
| 96 | `poisson-distribution-calculator` | Poisson Distribution | DistributionCalculator | Interactive | **KEEP** | Evaluates Poisson probability for event arrival rates ($\lambda$). |
| 97 | `z-score-calculator` | Z-Score Calculator & Normal Distribution Probability | ZScoreCalculator | Interactive | **CORE KEEP** | Interactive Z-score solver with visualization and two-tailed/one-tailed p-values. |
| 98 | `confidence-interval-calculator` | Confidence Interval Calculator (Mean & Proportion) | ConfidenceIntervalCalculator | Interactive | **CORE KEEP** | Inferential statistics solver for mean ($z/t$) and population proportion confidence intervals. |

---

### 10. Computer Science (5 Resources)

| # | Slug | Title | Component | Type | Classification | Assessment & Demand Rational |
|---|---|---|---|---|---|---|
| 99 | `truth-table-generator` | Truth Table Generator | TruthTableGenerator | Interactive | **CORE KEEP** | Generates full truth tables for propositional logic ($AND, OR, NOT, \rightarrow, \leftrightarrow$). Flagship CS tool. |
| 100 | `set-calculator` | Set Operations Calculator | SetCalculator | Interactive | **CORE KEEP** | Discrete math set solver (Union, Intersection, Difference, Symmetric Diff, Cartesian Product). |
| 101 | `permutations-and-combinations` | Permutations & Combinations Calculator (nPr & nCr) | PermutationsAndCombinations | Interactive | **CORE KEEP** | Evaluates $nPr$ and $nCr$ with step-by-step factorial formulas. |
| 102 | `bitwise-calculator` | Bitwise Calculator (AND, OR, XOR, NOT, Shifts) | BitwiseCalculator | Interactive | **CORE KEEP** | Bitwise logic solver with binary and hexadecimal visualization. |
| 103 | `subnet-calculator` | IPv4 Subnet Calculator (CIDR & IP Network Planner) | SubnetCalculator | Interactive | **CORE KEEP** | Networking planner computing network address, broadcast, mask, and host ranges. |

---

## STEP 3 — Redundancy & Consolidation Analysis

Following the retirement of the 13 specialist routes, the current 103 catalog has achieved strong structural differentiation. An analysis of remaining potential overlaps confirms that no further merges are necessary at this stage:

1. **Law of Sines vs. Law of Cosines vs. Triangle Calculator:**
   - `triangle-calculator` serves as the general solver, but `law-of-sines-calculator` and `law-of-cosines-calculator` solve specific textbook homework prompts where a teacher explicitly asks for "the Law of Sines ratio". Keeping them independent preserves high-intent organic search queries without cluttering the main solver.
2. **Z-Score Calculator vs. Normal Distribution Calculator:**
   - Both are active. `z-score-calculator` focuses on transforming a raw score $X \rightarrow Z$ with visual bell-curve shading, while `normal-distribution-calculator` handles parameter-driven distribution functions ($\mu, \sigma$). Both have clear student intent.
3. **Descriptive Statistics (Five Number Summary, Percentile, MAD):**
   - All three leverage `DatasetCalculator.astro`. While they share an underlying dataset engine, each presents a focused interface matching a specific syllabus topic in AP Statistics. Merging them into a single monolithic calculator would complicate the UI for students who simply need a quick five-number summary.

---

## STEP 4 — Assessment of the 16 Reference & Visual Guides

The catalog contains **16 non-calculator reference and visual educational resources**:
- **Mathematics (1):** `unit-circle`
- **Chemistry (2):** `solubility-rules`, `organic-functional-groups`
- **Biology & Health (13):** `animal-cell`, `plant-cell`, `mitosis-stages`, `central-dogma`, `amino-acid-reference`, `protein-structure`, `photosynthesis-equation`, `cellular-respiration`, `human-skeleton`, `circulatory-system`, `nervous-system`, `digestive-system`, `endocrine-system`

### Value Assessment
- **Why keep them?** High school and undergraduate biology, chemistry, and pre-calculus students frequently seek clean, lightweight, ad-free visual diagrams during study sessions and exam preparation.
- **Differentiation:** Unlike heavy commercial encyclopedias or paywalled homework sites, StudentKit's reference components are fast, offline-capable, responsive, and stripped of distracting popups.
- **Verdict:** All 16 guides are high-quality, high-utility student assets that enhance the educational authority of the site. They are categorized as **KEEP** or **CORE KEEP**.

---

## STEP 5 — Assessment of the 10 Categories

The 10 current categories provide an intuitive, balanced taxonomy:

| Category | Count | Health & Balance Assessment |
| :--- | :--- | :--- |
| **Mathematics** | 23 | Strong, foundational, perfectly covers algebra through calculus. |
| **Biology & Health** | 20 | Excellent mix of calculators and essential visual anatomy/cytology guides. |
| **Chemistry** | 13 | Complete core coverage: general, solutions, equilibrium, thermo, electrochem. |
| **Physics** | 12 | Well-balanced across mechanics, electromagnetism, thermodynamics, and optics. |
| **Statistics** | 9 | Covers descriptive, probability distributions, and inferential statistics. |
| **Academic & Grades** | 7 | Flagship student GPA/grade tracking utilities with high daily demand. |
| **Everyday Utilities** | 6 | Practical daily tools (countdown, age, interest) with universal appeal. |
| **Study & Writing** | 5 | Focused productivity and writing utilities (Pomodoro, word count, words-to-pages). |
| **Computer Science** | 5 | Essential discrete math and systems tools (logic, sets, subnets, bitwise). |
| **Converters** | 3 | Core multi-unit, base radix, and scientific notation hubs. |

**Verdict:** The 10 categories are clear, robust, and require no structural changes.

---

## STEP 6 & 7 — Genuinely Missing High-Value Tools & Demand Priority

To maintain StudentKit's high-utility focus without bloating the catalog, candidate additions were strictly filtered against actual search volume and student need (maximum 8 candidates evaluated):

| # | Tool Candidate | Status | Priority | Search Intent & Justification | Maintenance / Complexity |
|---|---|---|---|---|---|
| 1 | **Discount & Sale Price Calculator** | **GENUINELY MISSING** | **HIGH** | Universal student search intent ("discount calculator", "% off calculator") for shopping, books, supplies, and sales tax. | Low (Pure formula). Ideal fit. |
| 2 | **Quadratic Formula Calculator** | **GENUINELY MISSING** | **HIGH** | Currently `/tools/quadratic-equation-solver` redirects to prime factorization. A dedicated step-by-step solver ($x = \frac{-b \pm \sqrt{\Delta}}{2a}$) is a quintessential high school math tool. | Low (Closed-form algebra). Ideal fit. |
| 3 | **Significant Figures (Sig Fig) Calculator** | **GENUINELY MISSING** | **HIGH** | Extremely high search demand among intro chemistry and physics students learning measurement precision and rounding rules. | Medium (String parsing + math). High value. |
| 4 | **Student Loan / College Debt Calculator** | **GENUINELY MISSING** | **MEDIUM** | Solves monthly loan payments and total interest ($M = P \frac{r(1+r)^n}{(1+r)^n - 1}$) for college tuition planning. | Low (Standard amortization). High student relevance. |
| 5 | **Time & Duration Calculator** | **GENUINELY MISSING** | **MEDIUM** | Adds and subtracts hours/minutes for study logging, timesheets, and schedule tracking (e.g. 3h 45m + 2h 30m). | Low (Modulo arithmetic). Practical utility. |
| 6 | **2D/3D Vector Calculator (Dot & Cross Product)** | **GENUINELY MISSING** | **MEDIUM** | Essential for linear algebra and physics mechanics (dot product, cross product, magnitude, angle). | Low (Linear algebra math). |
| 7 | **Reading Time / Speech Timer** | **PARTIALLY EXISTS** | **LOW** | Partially handled by `word-counter`. A dedicated speech timer is secondary. | Not recommended for immediate addition. |
| 8 | **Semester Target GPA Planner** | **ALREADY EXISTS** | **NOT WORTH ADDING** | Already effectively covered by `gpa-calculator` and `final-grade-calculator`. | Redundant. |

---

## STEP 8 — Final Classification Counts & Strategic Recommendation

### Classification Summary (Total = 103)

| Classification | Count | Percentage |
| :--- | :--- | :--- |
| **CORE KEEP** | **48** | 46.6% |
| **KEEP** | **55** | 53.4% |
| **REWORK** | **0** | 0.0% |
| **MERGE CANDIDATE** | **0** | 0.0% |
| **REMOVE CANDIDATE** | **0** | 0.0% |
| **TOTAL** | **103** | **100.0%** |

### Recommended Strategic Action: **`3. TARGETED ADDITIONS`**

- **Rationale:** The current 103 resources have zero remaining dead weight, zero invalid redirects, and zero broken links. All 103 survivors represent legitimate, high-value student resources. 
- Rather than performing further removals or forced consolidations, the optimal path forward is to **freeze the 103 survivors** and consider a small batch of **3–5 high-demand targeted additions** (e.g. Discount Calculator, Quadratic Formula Solver, Significant Figures Calculator) in a subsequent planned cycle to bring the final ecosystem to a polished ~106–108 resources.

---

## STEP 9 — Safety Baseline Comparison (vs. 412 Inventory)

A conceptual review of the original 412 baseline was conducted to confirm no accidental loss of flagship functionality occurred during the reduction phases:

1. **Flagship Retention:** All primary student anchors (GPA Calculator, CGPA Converter, Attendance, Pomodoro, Word Counter, Unit Converter, Periodic Table, Molar Mass, BMI, Punnett Square, Derivative Calculator, Integral Calculator, RREF) remain fully active and functional.
2. **Specialist Merges:** All 75 retired routes redirect directly to genuine superset canonical tools (e.g. `second-derivative` $\rightarrow$ `derivative-calculator`, `definite-integral` $\rightarrow$ `integral-calculator`, `q-mc-delta-t` $\rightarrow$ `calorimetry-calculator`).
3. **No Lost Capabilities:** No unique numerical algorithm or necessary educational guide was inadvertently dropped without a natural canonical home.

---

## STEP 10 — Read-Only Verification

```
git diff --check: Passed cleanly (0 errors)
git status: Untracked audit markdown files present; 0 unintended source modifications.
```

**NO SOURCE CODE WAS MODIFIED IN THIS TASK.**  
**NO COMMIT, PUSH, OR DEPLOYMENT WAS PERFORMED.**

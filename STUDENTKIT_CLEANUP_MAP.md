# StudentKit — Master Cleanup & Consolidation Implementation Map (Phase 10A)

**Document Date:** September 10, 2026  
**Phase:** Phase 10A (Planning, Verification & Action Mapping)  
**Status:** Planning / Verification Only (No Code Modifications Made)  
**Known-Good Rollback Checkpoint:** `a5d9e3fc`  
**Target Domain:** `https://studentkit.in`  

---

## 1. Executive Summary & Verification of Audit Counts (Task 1)

This cleanup map builds upon the initial inspection recorded in `STUDENTKIT_TOOL_INVENTORY.md`. The entire codebase was re-verified against live file structures, component implementations, and routing mechanisms to ensure 100% accuracy before any modifications occur.

### 1.1 Verified Repository Metrics

| Metric | Verified Count | Audit Alignment | Status |
| :--- | :---: | :---: | :--- |
| **Total Site Routes** | **475** | Matches Audit | Verified (6 static + 17 dynamic category + 452 dynamic tool routes) |
| **Total Registered Tools** | **452** | Matches Audit | Verified in `src/data/registry.ts` |
| **Total Interactive Tools** | **415** | Matches Audit | Verified (Calculators with form/slider inputs) |
| **Total Category Hub Pages** | **17** | Matches Audit | Verified via `getActiveCategories()` in `category/[category].astro` |
| **Total Static / Other Pages** | **6** | Matches Audit | Verified (`/`, `/about`, `/contact`, `/privacy`, `/terms`, `/tools`) |
| **Routes Missing from Registry** | **0** | Matches Audit | Verified (All tool routes generated from registry) |
| **Registry Entries Missing Routes** | **0** | Matches Audit | Verified (1-to-1 dynamic route mapping) |
| **Static / Reference Pages as Tools** | **37** | Matches Audit | Verified (Zero user input / static HTML renderers) |
| **Broken / Incomplete Tools** | **9** | Matches Audit | Verified (1 syntax error crash + 8 calculus pseudo-solvers) |
| **Questionable Tools (Initial Audit)** | **49** | Matches Audit | Reclassified into 37 `REFERENCE` + 12 `MERGE` (Trig) |
| **Obvious Merge Candidates** | **42** | Expanded from 30 | Re-verified: 10 logical clusters across utilities & math |

### 1.2 Audit Corrections
*No structural count errors were found in the previous audit.* However, for this actionable cleanup map, the classification taxonomy is refined from descriptive labels to 5 strict action verbs: `KEEP`, `FIX`, `MERGE`, `REMOVE`, and `REFERENCE`.

---

## 2. Action Classification Breakdown (Task 2)

Every tool in the central registry has been evaluated under the core product principle:
$$\text{USER INPUT} \longrightarrow \text{REAL OPERATION} \longrightarrow \text{MEANINGFUL OUTPUT}$$

| Classification | Count | Percentage | Core Definition |
| :--- | :---: | :---: | :--- |
| **KEEP** | **359** | **79.4%** | Distinct, fully functional, interactive utility or academic calculator that performs a genuine operation. |
| **FIX** | **9** | **2.0%** | Genuinely useful tool concept that has an implementation flaw, runtime syntax error, or incomplete solver logic. |
| **MERGE** | **42** | **9.3%** | Valuable feature that currently exists as an artificial duplicate or single-button fragmentation; will be combined into a superior unified tool. |
| **REMOVE** | **5** | **1.1%** | Redundant wrapper clone of the interactive periodic table with 100% duplicate code and no independent function. |
| **REFERENCE** | **37** | **8.2%** | High-value static educational guide / reference sheet with zero inputs that should become dedicated reference content. |
| **Total** | **452** | **100.0%** | **Complete Registry Inventory** |

---

## 3. Deep Verification of Obvious Merge Groups (Task 3)

The source code for all candidate merge groups was inspected directly. Below is the verified evidence, analysis, and migration recommendation for Groups A through J (plus auxiliary groups).

### Group A — Date Difference Tools
1. **Current Pages:** `/tools/date-difference`, `/tools/days-between-dates`, `/tools/weeks-between-dates`
2. **Current Components:** `date-difference.astro`, `days-between-dates.astro`, `weeks-between-dates.astro`
3. **Duplication Verification:** **100% True Duplicate.** Code comparison shows all three files have identical form inputs (Start Date, End Date) and identical calculation logic outputting Days, Weeks, Months, and Years.
4. **Preserved Functionality:** All time unit conversions (days, weeks, fractional months, years, and exact Y-M-D text).
5. **Surviving Canonical Route:** `/tools/date-difference`
6. **Redirects Needed:**
   - `/tools/days-between-dates` $\to$ 301 Redirect to `/tools/date-difference`
   - `/tools/weeks-between-dates` $\to$ 301 Redirect to `/tools/date-difference`
7. **Accidental Loss Risk:** Zero risk.
8. **Recommendation:** **MERGE**

### Group B — Attendance Tools
1. **Current Pages:** `/tools/attendance-calculator`, `/tools/classes-to-miss`, `/tools/required-attendance`
2. **Current Components:** `attendance-calculator.astro`, `classes-to-miss.astro`, `required-attendance.astro`
3. **Duplication Verification:** **True Functional Subset.** `attendance-calculator.astro` already computes *Current Attendance %*, *Classes you can safely miss*, and *Classes required to hit target* simultaneously. `classes-to-miss` and `required-attendance` are single-output fragments of the exact same math.
4. **Preserved Functionality:** Comprehensive current percentage, safe skip calculation, consecutive classes required calculation, and threshold status badge.
5. **Surviving Canonical Route:** `/tools/attendance-calculator`
6. **Redirects Needed:**
   - `/tools/classes-to-miss` $\to$ 301 Redirect to `/tools/attendance-calculator`
   - `/tools/required-attendance` $\to$ 301 Redirect to `/tools/attendance-calculator`
7. **Accidental Loss Risk:** Zero risk.
8. **Recommendation:** **MERGE**

### Group C — Text Metrics Tools
1. **Current Pages:** `/tools/word-counter`, `/tools/character-counter`, `/tools/reading-time`
2. **Current Components:** `word-counter.astro`, `character-counter.astro`, `reading-time.astro`
3. **Duplication Verification:** **True Functional Overlap.** All three take a single text string. `word-counter.astro` already displays words, characters, sentences, paragraphs, and estimated reading time.
4. **Preserved Functionality:** Real-time word count, character count (with/without spaces), sentence count, paragraph count, and reading time slider.
5. **Surviving Canonical Route:** `/tools/word-counter`
6. **Redirects Needed:**
   - `/tools/character-counter` $\to$ 301 Redirect to `/tools/word-counter`
   - `/tools/reading-time` $\to$ 301 Redirect to `/tools/word-counter`
7. **Accidental Loss Risk:** Zero risk.
8. **Recommendation:** **MERGE**

### Group D — Periodic Table Tools
1. **Current Pages:** `/tools/periodic-table`, `/tools/isotope-calculator`, `/tools/electron-configuration`, `/tools/valence-electron-calculator`, `/tools/oxidation-state-calculator`, `/tools/isotope-abundance-calculator`
2. **Current Components:** All 6 tools route to `PeriodicTable.astro`
3. **Duplication Verification:** **Exact Duplicate UI Wrappers.** Code inspection of `PeriodicTable.astro` reveals no slug-branching or customized calculations; all 6 routes render the exact same interactive grid and modal.
4. **Preserved Functionality:** Interactive 118-element periodic table modal with atomic mass, electron configurations, oxidation states, group/period properties.
5. **Surviving Canonical Route:** `/tools/periodic-table`
6. **Redirects Needed:**
   - `/tools/isotope-calculator` $\to$ 301 Redirect to `/tools/periodic-table`
   - `/tools/electron-configuration` $\to$ 301 Redirect to `/tools/periodic-table`
   - `/tools/valence-electron-calculator` $\to$ 301 Redirect to `/tools/periodic-table`
   - `/tools/oxidation-state-calculator` $\to$ 301 Redirect to `/tools/periodic-table`
   - `/tools/isotope-abundance-calculator` $\to$ 301 Redirect to `/tools/periodic-table`
7. **Accidental Loss Risk:** Zero risk.
8. **Recommendation:** **REMOVE 5 duplicate entries & redirect to periodic-table**

### Group E — Trigonometry Single-Function Tools
1. **Current Pages:** `sin-calculator`, `cos-calculator`, `tan-calculator`, `cosecant-calculator`, `secant-calculator`, `cotangent-calculator`, `arcsin-calculator`, `arccos-calculator`, `arctan-calculator`, `arccsc-calculator`, `arcsec-calculator`, `arccot-calculator` (12 tools)
2. **Current Components:** `TrigFunctionCalculator.astro`
3. **Duplication Verification:** **Severe Artificial Fragmentation.** Each route is a single input field calculating 1 trigonometric function.
4. **Preserved Functionality:** Trigonometric calculation with degree/radian toggles, reciprocal functions, inverse functions, and exact unit circle fraction support.
5. **Surviving Canonical Route:** `/tools/trigonometric-calculator` (or unified within `TrigFunctionCalculator.astro`)
6. **Redirects Needed:** 301 Redirects from all 12 single-function slugs to `/tools/trigonometric-calculator`
7. **Accidental Loss Risk:** Zero loss if the unified calculator includes a function selector (dropdown or tab bar) defaulted or deep-linkable.
8. **Recommendation:** **MERGE into a unified Trigonometry Calculator**

### Group F — Chemical Formula Tools
1. **Current Pages:** `molar-mass-calculator`, `percent-composition-calculator`, `moles-calculator`, `atoms-calculator`, `molecules-calculator` (5 tools)
2. **Current Components:** `ChemicalFormulaCalculator.astro`
3. **Duplication Verification:** **True Functional Suite.** `ChemicalFormulaCalculator.astro` takes a chemical formula string and already calculates molar mass, element percentages, mole conversions, and Avogadro atom/molecule counts in a single unified dashboard.
4. **Preserved Functionality:** Complete chemical formula breakdown (mass, composition %, mole-to-mass, particle count).
5. **Surviving Canonical Route:** `/tools/molar-mass-calculator`
6. **Redirects Needed:**
   - `/tools/percent-composition-calculator` $\to$ 301 Redirect to `/tools/molar-mass-calculator`
   - `/tools/moles-calculator` $\to$ 301 Redirect to `/tools/molar-mass-calculator`
   - `/tools/atoms-calculator` $\to$ 301 Redirect to `/tools/molar-mass-calculator`
   - `/tools/molecules-calculator` $\to$ 301 Redirect to `/tools/molar-mass-calculator`
7. **Accidental Loss Risk:** Zero risk.
8. **Recommendation:** **MERGE**

### Group G — Molecular Biology & DNA Tools
1. **Current Pages:** `dna-complement`, `reverse-complement`, `dna-to-rna`, `rna-transcription`, `codon-translator`, `gc-content`, `rna-to-protein`, `peptide-mass-calculator` (8 tools)
2. **Current Components:** `DNASequenceCalculator.astro`
3. **Duplication Verification:** **True Functional Suite.** All tools share sequence processing logic (complement, reverse, transcription, translation, GC ratio, peptide mass).
4. **Preserved Functionality:** Full bioinformatics sequence operations in a tabbed/multi-panel interface.
5. **Surviving Canonical Route:** `/tools/dna-sequence-analyzer` (or `/tools/dna-complement`)
6. **Redirects Needed:** 301 Redirects from the 7 sub-feature slugs to the canonical route.
7. **Accidental Loss Risk:** Zero risk.
8. **Recommendation:** **MERGE**

### Group H — Genetics & Inheritance Tools
1. **Current Pages:** `punnett-square`, `monohybrid-cross`, `dihybrid-cross`, `test-cross`, `blood-type-inheritance`, `sex-linked-inheritance` (6 tools)
2. **Current Components:** `PunnettSquare.astro`
3. **Duplication Verification:** **True Functional Suite.** All 6 routes use genetic cross algorithms to produce allele matrices and phenotypic ratios.
4. **Preserved Functionality:** Monohybrid (2x2), dihybrid (4x4), test cross, ABO blood group, and X-linked cross matrices.
5. **Surviving Canonical Route:** `/tools/punnett-square`
6. **Redirects Needed:** 301 Redirects from the 5 cross-type slugs to `/tools/punnett-square`.
7. **Accidental Loss Risk:** Zero risk.
8. **Recommendation:** **MERGE**

### Group I — Set Operations Tools
1. **Current Pages:** `set-union-calculator`, `set-intersection-calculator`, `set-difference-calculator` (3 tools)
2. **Current Components:** `SetCalculator.astro`
3. **Duplication Verification:** **True Functional Suite.** `SetCalculator.astro` computes $A \cup B$, $A \cap B$, $A \setminus B$, and $B \setminus A$ simultaneously.
4. **Preserved Functionality:** Union, intersection, symmetric difference, relative difference, cardinality, Venn diagram visualization.
5. **Surviving Canonical Route:** `/tools/set-calculator` (or `/tools/set-union-calculator`)
6. **Redirects Needed:** 301 Redirects from intersection and difference slugs to `/tools/set-calculator`.
7. **Accidental Loss Risk:** Zero risk.
8. **Recommendation:** **MERGE**

### Group J — Number Base Tools
1. **Current Pages:** `binary-calculator`, `hexadecimal-converter`, `base-conversion-calculator` (3 tools)
2. **Current Components:** `BaseConverter.astro`
3. **Duplication Verification:** **True Functional Suite.** `BaseConverter.astro` supports conversion between arbitrary bases from Base 2 to Base 36.
4. **Preserved Functionality:** Arbitrary radix conversions, step-by-step division/multiplication breakdowns, binary, octal, decimal, hex.
5. **Surviving Canonical Route:** `/tools/base-conversion-calculator`
6. **Redirects Needed:** 301 Redirects from `binary-calculator` and `hexadecimal-converter` to `/tools/base-conversion-calculator`.
7. **Accidental Loss Risk:** Zero risk.
8. **Recommendation:** **MERGE**

### Group K — Grade & CGPA Conversion (Auxiliary Group)
1. **Current Pages:** `cgpa-to-percentage`, `percentage-to-cgpa`
2. **Current Components:** `cgpa-to-percentage.astro`, `percentage-to-cgpa.astro`
3. **Duplication Verification:** Direct inverse pair.
4. **Preserved Functionality:** Bidirectional conversion between CGPA and Percentage across standard university scales (9.5 CBSE, 10.0 Mumbai/VTU, 4.0 US).
5. **Surviving Canonical Route:** `/tools/cgpa-to-percentage` (with 2-way direction toggle)
6. **Redirects Needed:** 301 Redirect from `/tools/percentage-to-cgpa` $\to$ `/tools/cgpa-to-percentage`.
7. **Recommendation:** **MERGE**

### Group L — Electrical Circuits (Auxiliary Group)
1. **Current Pages:** `series-resistance-calculator`, `parallel-resistance-calculator`, `series-capacitance-calculator`, `parallel-capacitance-calculator` (4 tools)
2. **Current Components:** `CircuitCalculator.astro`
3. **Duplication Verification:** Common circuit impedance formulas.
4. **Preserved Functionality:** Series and parallel combination calculations for resistors, capacitors, and inductors.
5. **Surviving Canonical Route:** `/tools/circuit-calculator` (or `/tools/series-resistance-calculator`)
6. **Redirects Needed:** 301 Redirects from parallel/capacitance slugs.
7. **Recommendation:** **MERGE**

---

## 4. Investigation of the 9 Broken / Incomplete Tools (Task 4)

| Tool Slug | Claimed UI Function | Actual Code Execution | Mathematical Correctness | Recommended Action | Fix Implementation Requirement |
| :--- | :--- | :--- | :--- | :---: | :--- |
| **`decimal-degrees-to-dms`** | Convert Decimal Degrees to DMS format ($D^\circ\,M'\,S''$) | JS syntax error in `formulaConfig.expression`: malformed quotes `'' '` throws `Unexpected string` | Correct mathematical formula, but code has fatal syntax crash | **FIX** | Fix string quotation in `registry.ts` expression: `return d + '° ' + m + "' " + s.toFixed(2) + '"';` |
| **`critical-point-calculator`** | Find critical points where $f'(x) = 0$ or undefined | Calculates derivative formula $f'(x)$ using MathJS; does not solve $f'(x)=0$ | Partially implemented (derivative computed, roots missing) | **FIX** | Add numerical/Newton-Raphson root-finder or bisection solver to compute actual roots $x_c$. |
| **`inflection-point-calculator`** | Find points of inflection where concavity changes ($f''(x) = 0$) | Calculates second derivative $f''(x)$; does not solve $f''(x)=0$ | Partially implemented (second derivative computed, roots missing) | **FIX** | Add numerical root solver for $f''(x)=0$ and test sign changes of $f''(x)$ across roots. |
| **`function-increasing-decreasing`** | Determine intervals where $f(x)$ is increasing/decreasing | Calculates $f'(x)$; does not compute intervals or sign chart | Partially implemented | **FIX** | Find roots of $f'(x)=0$, partition real line into test intervals, and evaluate sign of $f'(x)$. |
| **`concavity-calculator`** | Determine intervals of upward/downward concavity | Calculates $f''(x)$; does not evaluate concavity intervals | Partially implemented | **FIX** | Find roots of $f''(x)=0$, test sample points, output interval notation (e.g. $(-\infty, a)$ concave up). |
| **`extrema-calculator`** | Find local & global minima/maxima | Calculates $f'(x)$; does not evaluate critical points in $f''(x)$ or boundary | Partially implemented | **FIX** | Solve $f'(x)=0$, apply Second Derivative Test $f''(x_c)$ to classify local min/max. |
| **`related-rates-calculator`** | Solve geometric & physical related rate differential equations | Calculates standard 1-variable derivative $df/dx$; does not model rates | Incorrect for claimed problem domain | **FIX** | Implement structured presets (e.g. sliding ladder, expanding sphere, cone tank) with step-by-step rate solving. |
| **`optimization-calculator`** | Find optimal dimensions / parameters maximizing/minimizing $f(x)$ | Calculates standard derivative $f'(x)$; does not optimize | Partially implemented | **FIX** | Provide objective function + constraint input fields, compute stationary points and extrema. |
| **`logarithmic-differentiation-calculator`** | Step-by-step differentiation using logs $\ln(y) = \ln(f(x))$ | Computes standard MathJS derivative directly without log transformation steps | Mathematically yields derivative, but skips logarithmic methodology | **FIX** | Generate explicit intermediate algebraic steps: $1/y \cdot dy/dx = d/dx[\ln(f(x))]$. |

---

## 5. Security & Architectural Investigation of FormulaCalculator.astro (Task 5)

### 5.1 Technical Architecture
- **Location:** `src/components/ui/FormulaCalculator.astro`
- **Usage:** Powers **49 tools** in the registry.
- **Pattern:** Uses `new Function(...paramNames, `return ${config.expression};`) ` on client side to evaluate mathematical expressions.

### 5.2 Security Assessment
- **Risk Level:** **LOW (Static / Build-Time Controlled)**
- **Origin of Expression:** 100% developer-controlled static strings declared in `src/data/registry.ts`.
- **User Input Isolation:** User inputs from form fields are parsed strictly as floating-point numbers via `parseFloat(input.value)` and passed as numeric arguments (`...args`) into the pre-compiled function.
- **XSS / Code Execution Vectors:** None. User input strings are NEVER concatenated into the function body string.
- **Attack Path:** No accessible attack path exists from user input to JavaScript execution.
- **Content Security Policy (CSP) Implication:** `new Function(...)` requires `'unsafe-eval'` in CSP headers.
- **Recommended Action:** Migrate to `mathjs.evaluate(expr, scope)` (which is already installed in `package.json`) in a future maintenance batch to permit strict CSP headers without `'unsafe-eval'`.
- **Does it need immediate emergency fixing?** **NO.**

---

## 6. Reference Content Architecture & Roadmap (Task 6)

The **37 static reference pages** contain substantial, high-quality educational material (diagrams, tables, anatomical breakdowns, reaction pathways). They should NOT be deleted, but rather recognized as **Reference Guides / Study Sheets** rather than interactive calculators.

| Reference Group | Tool Count | Sample Slugs | Content Depth & Usefulness | Proposed Future Architecture |
| :--- | :---: | :--- | :--- | :--- |
| **Biology Reference** | **24** | `amino-acid-reference`, `mitosis-stages`, `meiosis-stages`, `cell-organelles`, `circulatory-system`, `nervous-system`, `cellular-respiration`, `photosynthesis-equation` | **Very High.** Rich tables, ASCII diagrams, physiological parameters, organ system breakdowns. | Group into a dedicated **Biology Study Hub** under `/reference/biology/[topic]` or retain indexable canonical guides. |
| **Chemistry Reference** | **5** | `chemistry-constants`, `solubility-rules`, `strong-acids-and-bases`, `common-polyatomic-ions`, `organic-functional-groups` | **High.** Essential chemistry reference tables frequently searched by students. | Group into **Chemistry Reference Guide** under `/reference/chemistry/[topic]`. |
| **Calculus Reference** | **5** | `calculus-formulas`, `derivative-rules`, `integration-rules`, `common-limits`, `calculus-identities` | **High.** Standard calculus cheat sheets and formula tables. | Group into **Calculus Formula Sheets** under `/reference/calculus/[topic]`. |
| **Physics Reference** | **2** | `physics-constants`, `physics-formulas` | **High.** Comprehensive fundamental constants and kinematic/electromagnetic equations. | Group into **Physics Reference Center** under `/reference/physics/[topic]`. |
| **Trigonometry Reference** | **1** | `trig-identities` | **Medium-High.** Complete table of Pythagorean, angle-sum, and half-angle identities. | Group into **Math Reference Center** under `/reference/mathematics/trig-identities`. |

*Note: Migrating URL paths for reference content will be handled in a dedicated future migration batch with 301 redirects.*

---

## 7. Category Taxonomy Optimization (Task 8)

### 7.1 Current Taxonomy Analysis
- **Declared in `registry.ts` Array (11 categories):** `Academic`, `Mathematics`, `Science`, `Engineering`, `Computer Science`, `Study & Productivity`, `Date & Time`, `Finance`, `Converters`, `Files & Images`, `Random & Utilities`.
- **Actually Used on Tool Objects (17 categories):** `Mathematics` (120), `Physics` (111), `Chemistry` (100), `Biology` (68), `Statistics` (15), `Academic` (9), `Study & Productivity` (5), `Date & Time` (5), `Discrete Mathematics` (5), `Linear Algebra` (4), `Computer Science` (3), `Student Utilities` (2), `Converters` (1), `Random & Utilities` (1), `Science` (1), `Engineering` (1), `Numerical Methods` (1).
- **Core Mismatches:**
  - 279 tools belong to `Physics`, `Chemistry`, and `Biology`, which are absent from the declared `categories` array.
  - `Finance` and `Files & Images` have 0 tools.
  - Micro-categories like `Discrete Mathematics`, `Linear Algebra`, `Numerical Methods` should be subcategories of `Mathematics`.

### 7.2 Proposed Clean Taxonomy (9 Focused Categories)
1. **Academic & Grades:** GPA, CGPA, Attendance, Marks, Exam Countdown, Target Grade.
2. **Mathematics:** Algebra, Calculus, Trigonometry, Geometry, Linear Algebra, Discrete Math.
3. **Physics & Mechanics:** Kinematics, Forces, Thermodynamics, Electromagnetism, Optics, Circuits.
4. **Chemistry:** Stoichiometry, Solutions, Gas Laws, Periodic Table, Thermodynamics.
5. **Biology & Life Sciences:** Genetics, Cell Biology, Molecular Biology, Biochemistry.
6. **Statistics & Data Analysis:** Descriptive Statistics, Probability, Distributions, Regression.
7. **Date, Time & Productivity:** Date Difference, Pomodoro Timer, Study Hours, Age Calculator.
8. **Text & Document Tools:** Word Counter, Character Counter, Reading Time.
9. **Converters & Numbers:** Unit Converter, Number Base Converter, Random Number Generator.

---

## 8. SEO & Route Migration Safety Plan (Task 9)

For every tool designated as `MERGE` or `REMOVE`, the following safety requirements apply:
1. **Permanent 301 Redirects:** Configured in `astro.config.mjs` redirects map.
2. **Sitemap Synchronization:** Merged/removed routes are removed from `registry.ts`, automatically updating `sitemap-0.xml` on build.
3. **Canonical Tag Continuity:** The surviving canonical tool retains its `<link rel="canonical">`.
4. **Internal Link Update:** Search keywords and aliases on surviving tools are enriched to capture search traffic from deprecated slugs.
5. **Structured Data Preservation:** `WebApplication` and `BreadcrumbList` schemas remain intact for surviving routes.

### Estimated Route Count Evolution
- **Current Total Routes:** **475** (6 static + 17 categories + 452 tools)
- **Net Reductions:**
  - 5 Duplicate Periodic Table Wrappers Removed ($-5$)
  - 37 Merged Duplicate Slugs Replaced with Redirects ($-37$)
  - 17 Category Pages Consolidated to 9 Clean Hubs ($-8$)
- **Estimated Cleaned Total Routes:** **425 routes** (all fast, distinct, and high-value).

---

## 9. Phased Implementation Sequence (Task 10)

### Batch 0 — Safety Checkpoint & Verification
- **Actions:** Verify git working tree clean; verify baseline test build (`astro build`).
- **Files Affected:** None.
- **Risk Level:** Zero.
- **Rollback:** Trivial (`git checkout a5d9e3fc`).

### Batch 1 — Fix Genuinely Broken Low-Risk Tools
- **Actions:** Fix syntax quote bug in `decimal-degrees-to-dms` in `src/data/registry.ts`. Test runtime calculation.
- **Files Affected:** `src/data/registry.ts`.
- **Risk Level:** Very Low.
- **Route Count Change:** 0.

### Batch 2 — Upgrade Calculus Pseudo-Solvers
- **Actions:** Enhance `DerivativeCalculator.astro` to perform numerical root solving and interval analysis for critical points, inflection points, and extrema.
- **Files Affected:** `src/components/tools/DerivativeCalculator.astro`, `src/data/registry.ts`.
- **Risk Level:** Low.
- **Route Count Change:** 0.

### Batch 3 — Merge High-Confidence Duplicate Utilities
- **Actions:** Consolidate Date triplet (`days-between-dates`, `weeks-between-dates` $\to$ `date-difference`), Attendance triplet, Text tools triplet, Grade conversion pair, and Base converters. Add 301 redirects to `astro.config.mjs`.
- **Files Affected:** `src/data/registry.ts`, `astro.config.mjs`, respective `.astro` component files.
- **Risk Level:** Low.
- **Route Count Change:** $-7$.

### Batch 4 — Merge Academic Scientific Suites & Remove Exact Clones
- **Actions:** 
  - Remove 5 exact wrapper clones of Periodic Table (`isotope-calculator`, `electron-configuration`, etc.) with 301 redirects to `periodic-table`.
  - Consolidate Chemical Formula suite into `molar-mass-calculator`.
  - Consolidate DNA Sequence suite into `dna-complement`.
  - Consolidate Genetics suite into `punnett-square`.
  - Consolidate Set operations into `set-union-calculator`.
  - Consolidate Circuit tools into `series-resistance-calculator`.
- **Files Affected:** `src/data/registry.ts`, `astro.config.mjs`.
- **Risk Level:** Medium-Low.
- **Route Count Change:** $-30$.

### Batch 5 — Unify Single-Operation Trigonometry Tools
- **Actions:** Combine 12 single-button trig tools into a unified, responsive Trigonometric Calculator with mode selection and 301 redirects.
- **Files Affected:** `src/components/tools/TrigFunctionCalculator.astro`, `src/data/registry.ts`, `astro.config.mjs`.
- **Risk Level:** Medium-Low.
- **Route Count Change:** $-11$.

### Batch 6 — Category Taxonomy Alignment
- **Actions:** Align the `categories` array in `src/data/registry.ts` with the 9 proposed clean categories and update tool category properties accordingly.
- **Files Affected:** `src/data/registry.ts`, `src/pages/category/[category].astro`.
- **Risk Level:** Medium.
- **Route Count Change:** $-8$ category routes.

### Batch 7 — Reference Content Hub Formulation (Future Roadmap)
- **Actions:** Re-architect the 37 static reference tools into dedicated study reference guides under `/reference/[subject]/[slug]` with proper canonical mapping and category integration.
- **Files Affected:** `src/pages/reference/`, `src/data/registry.ts`, `astro.config.mjs`.
- **Risk Level:** Medium.
- **Route Count Change:** Neutral (re-routed).

### Batch 8 — Full Build, SEO, Canonical & Runtime Verification
- **Actions:** Execute full static site build (`npm run build`), run link-checker and automated validation suite to verify zero 404s, clean sitemap, and valid JSON-LD schemas.
- **Files Affected:** Verification reports only.
- **Risk Level:** Zero.

---

## 10. Master Action Table (All 452 Tools)

Below is the complete, item-by-item classification for every registered tool in StudentKit.

| # | Slug | Tool Title | Category | Action | Target / Resolution | Rationale |
| :---: | :--- | :--- | :--- | :---: | :--- | :--- |
| 1 | `cgpa-to-percentage` | **CGPA to Percentage (Cumulative Grade Point Average)** | Academic | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 2 | `percentage-to-cgpa` | **Percentage to CGPA** | Academic | **MERGE** | `/tools/cgpa-to-percentage` | Inverse conversion. Integrate into 2-way toggle in cgpa-to-percentage. 301 redirect. |
| 3 | `gpa-calculator` | **GPA Calculator (Grade Point Average)** | Academic | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 4 | `percentage-calculator` | **Percentage Calculator** | Academic | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 5 | `marks-calculator` | **Marks Calculator** | Academic | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 6 | `required-marks` | **Required Marks Calculator** | Academic | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 7 | `attendance-calculator` | **Attendance Calculator** | Academic | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 8 | `required-attendance` | **Required Attendance** | Academic | **MERGE** | `/tools/attendance-calculator` | Feature subset already fully computed in attendance-calculator. 301 redirect to attendance-calculator. |
| 9 | `classes-to-miss` | **Classes You Can Miss** | Academic | **MERGE** | `/tools/attendance-calculator` | Feature subset already fully computed in attendance-calculator. 301 redirect to attendance-calculator. |
| 10 | `study-hours` | **Study Hours Calculator** | Study & Productivity | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 11 | `pomodoro-timer` | **Pomodoro Timer** | Study & Productivity | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 12 | `word-counter` | **Word Counter** | Study & Productivity | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 13 | `character-counter` | **Character Counter** | Study & Productivity | **MERGE** | `/tools/word-counter` | Consolidate into unified text metrics suite on word-counter. 301 redirect. |
| 14 | `reading-time` | **Reading Time** | Study & Productivity | **MERGE** | `/tools/word-counter` | Consolidate into unified text metrics suite on word-counter. 301 redirect. |
| 15 | `age-calculator` | **Age Calculator** | Date & Time | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 16 | `date-difference` | **Date Difference** | Date & Time | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 17 | `days-between-dates` | **Days Between Dates** | Date & Time | **MERGE** | `/tools/date-difference` | Identical component duplicate. 301 redirect to date-difference. |
| 18 | `weeks-between-dates` | **Weeks Between Dates** | Date & Time | **MERGE** | `/tools/date-difference` | Identical component duplicate. 301 redirect to date-difference. |
| 19 | `exam-countdown` | **Exam Countdown** | Date & Time | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 20 | `unit-converter` | **Unit Converter** | Converters | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 21 | `percentage-change` | **Percentage Change** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 22 | `average-calculator` | **Average Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 23 | `ratio-calculator` | **Ratio Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 24 | `random-number` | **Random Number Generator** | Random & Utilities | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 25 | `square-calculator` | **Square Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 26 | `rectangle-area-calculator` | **Rectangle Area Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 27 | `kinetic-energy-calculator` | **Kinetic Energy Calculator** | Science | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 28 | `ohms-law-voltage` | **Voltage Calculator (Ohm's Law)** | Engineering | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 29 | `square-root-calculator` | **Square Root Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 30 | `cube-calculator` | **Cube Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 31 | `cube-root-calculator` | **Cube Root Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 32 | `exponent-calculator` | **Exponent Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 33 | `logarithm-calculator` | **Logarithm Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 34 | `absolute-value-calculator` | **Absolute Value Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 35 | `percentage-difference-calculator` | **Percentage Difference Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 36 | `percentage-error-calculator` | **Percentage Error Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 37 | `remainder-calculator` | **Remainder Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 38 | `factorial-calculator` | **Factorial Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 39 | `gcd-calculator` | **GCD Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 40 | `lcm-calculator` | **LCM Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 41 | `prime-checker` | **Prime Number Checker** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 42 | `quadratic-equation-solver` | **Quadratic Equation Solver** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 43 | `linear-equation-solver` | **Linear Equation Solver** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 44 | `pythagorean-theorem-calculator` | **Pythagorean Theorem Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 45 | `circle-area-calculator` | **Circle Area Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 46 | `circle-circumference-calculator` | **Circle Circumference Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 47 | `square-perimeter-calculator` | **Square Perimeter Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 48 | `rectangle-perimeter-calculator` | **Rectangle Perimeter Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 49 | `cube-volume-calculator` | **Cube Volume Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 50 | `sphere-volume-calculator` | **Sphere Volume Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 51 | `cylinder-volume-calculator` | **Cylinder Volume Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 52 | `cone-volume-calculator` | **Cone Volume Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 53 | `arithmetic-sequence-calculator` | **Arithmetic Sequence Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 54 | `geometric-sequence-calculator` | **Geometric Sequence Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 55 | `mean-calculator` | **Mean Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 56 | `median-calculator` | **Median Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 57 | `mode-calculator` | **Mode Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 58 | `range-calculator` | **Range Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 59 | `variance-calculator` | **Variance Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 60 | `standard-deviation-calculator` | **Standard Deviation Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 61 | `fraction-to-decimal` | **Fraction to Decimal** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 62 | `decimal-to-fraction` | **Decimal to Fraction Converter** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 63 | `ratio-simplifier` | **Ratio Simplifier** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 64 | `proportion-calculator` | **Proportion Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 65 | `number-to-words` | **Number to Words Converter** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 66 | `roman-numeral-converter` | **Roman Numeral Converter** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 67 | `scientific-calculator` | **Scientific Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 68 | `simultaneous-equations` | **Simultaneous Equation Solver** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 69 | `matrix-calculator` | **Matrix Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 70 | `fraction-calculator` | **Fraction Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 71 | `permutation-calculator` | **Permutation Calculator (nPr)** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 72 | `combination-calculator` | **Combination Calculator (nCr)** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 73 | `probability-calculator` | **Probability Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 74 | `polynomial-calculator` | **Polynomial Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 75 | `sin-calculator` | **Sine Calculator (sin)** | Mathematics | **MERGE** | `/tools/trig-calculator` | Single-button trig operations. Consolidate into unified Trigonometric Calculator with tabbed/dropdown function selection. |
| 76 | `cos-calculator` | **Cosine Calculator (cos)** | Mathematics | **MERGE** | `/tools/trig-calculator` | Single-button trig operations. Consolidate into unified Trigonometric Calculator with tabbed/dropdown function selection. |
| 77 | `tan-calculator` | **Tangent Calculator (tan)** | Mathematics | **MERGE** | `/tools/trig-calculator` | Single-button trig operations. Consolidate into unified Trigonometric Calculator with tabbed/dropdown function selection. |
| 78 | `cosecant-calculator` | **Cosecant Calculator (csc)** | Mathematics | **MERGE** | `/tools/trig-calculator` | Single-button trig operations. Consolidate into unified Trigonometric Calculator with tabbed/dropdown function selection. |
| 79 | `secant-calculator` | **Secant Calculator (sec)** | Mathematics | **MERGE** | `/tools/trig-calculator` | Single-button trig operations. Consolidate into unified Trigonometric Calculator with tabbed/dropdown function selection. |
| 80 | `cotangent-calculator` | **Cotangent Calculator (cot)** | Mathematics | **MERGE** | `/tools/trig-calculator` | Single-button trig operations. Consolidate into unified Trigonometric Calculator with tabbed/dropdown function selection. |
| 81 | `arcsin-calculator` | **Arcsine Calculator (arcsin)** | Mathematics | **MERGE** | `/tools/trig-calculator` | Single-button trig operations. Consolidate into unified Trigonometric Calculator with tabbed/dropdown function selection. |
| 82 | `arccos-calculator` | **Arccosine Calculator (arccos)** | Mathematics | **MERGE** | `/tools/trig-calculator` | Single-button trig operations. Consolidate into unified Trigonometric Calculator with tabbed/dropdown function selection. |
| 83 | `arctan-calculator` | **Arctangent Calculator (arctan)** | Mathematics | **MERGE** | `/tools/trig-calculator` | Single-button trig operations. Consolidate into unified Trigonometric Calculator with tabbed/dropdown function selection. |
| 84 | `arccsc-calculator` | **Arccosecant Calculator (arccsc)** | Mathematics | **MERGE** | `/tools/trig-calculator` | Single-button trig operations. Consolidate into unified Trigonometric Calculator with tabbed/dropdown function selection. |
| 85 | `arcsec-calculator` | **Arcsecant Calculator (arcsec)** | Mathematics | **MERGE** | `/tools/trig-calculator` | Single-button trig operations. Consolidate into unified Trigonometric Calculator with tabbed/dropdown function selection. |
| 86 | `arccot-calculator` | **Arccotangent Calculator (arccot)** | Mathematics | **MERGE** | `/tools/trig-calculator` | Single-button trig operations. Consolidate into unified Trigonometric Calculator with tabbed/dropdown function selection. |
| 87 | `right-triangle-calculator` | **Right Triangle Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 88 | `triangle-calculator` | **Triangle Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 89 | `law-of-sines-calculator` | **Law of Sines Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 90 | `law-of-cosines-calculator` | **Law of Cosines Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 91 | `missing-angle-calculator` | **Missing Angle Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 92 | `herons-formula-calculator` | **Heron's Formula Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 93 | `triangle-area-calculator` | **Triangle Area Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 94 | `triangle-perimeter-calculator` | **Triangle Perimeter Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 95 | `hypotenuse-calculator` | **Hypotenuse Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 96 | `opposite-side-calculator` | **Opposite Side Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 97 | `adjacent-side-calculator` | **Adjacent Side Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 98 | `degrees-to-radians` | **Degrees to Radians** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 99 | `radians-to-degrees` | **Radians to Degrees** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 100 | `dms-to-decimal-degrees` | **DMS to Decimal Degrees (Degrees, Minutes, Seconds)** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 101 | `decimal-degrees-to-dms` | **Decimal Degrees to DMS** | Mathematics | **FIX** | `None` | Fix JS expression quote syntax error in formulaConfig. |
| 102 | `trig-identities` | **Trigonometric Identities** | Mathematics | **REFERENCE** | `/reference/mathematics/trig-identities` | Static reference content in TrigIdentities.astro; no user input or dynamic calculations. |
| 103 | `unit-circle` | **Unit Circle** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 104 | `limit-calculator` | **Limit Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 105 | `one-sided-limit-calculator` | **One-Sided Limit Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 106 | `infinite-limit-calculator` | **Infinite Limit Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 107 | `limit-at-infinity-calculator` | **Limit at Infinity Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 108 | `derivative-calculator` | **Derivative Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 109 | `second-derivative-calculator` | **Second Derivative Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 110 | `partial-derivative-calculator` | **Partial Derivative Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 111 | `implicit-differentiation-calculator` | **Implicit Differentiation** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 112 | `logarithmic-differentiation-calculator` | **Logarithmic Differentiation** | Mathematics | **FIX** | `None` | Upgrade DerivativeCalculator with numerical root/interval solving, or refine scope to derivative analysis. |
| 113 | `integral-calculator` | **Integral Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 114 | `definite-integral-calculator` | **Definite Integral Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 115 | `indefinite-integral-calculator` | **Indefinite Integral Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 116 | `numerical-integration-calculator` | **Numerical Integration** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 117 | `tangent-line-calculator` | **Tangent Line Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 118 | `normal-line-calculator` | **Normal Line Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 119 | `average-rate-of-change` | **Average Rate of Change Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 120 | `instantaneous-rate-of-change` | **Instantaneous Rate of Change** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 121 | `critical-point-calculator` | **Critical Point Calculator** | Mathematics | **FIX** | `None` | Upgrade DerivativeCalculator with numerical root/interval solving, or refine scope to derivative analysis. |
| 122 | `inflection-point-calculator` | **Inflection Point Calculator** | Mathematics | **FIX** | `None` | Upgrade DerivativeCalculator with numerical root/interval solving, or refine scope to derivative analysis. |
| 123 | `function-increasing-decreasing` | **Increasing/Decreasing Calculator** | Mathematics | **FIX** | `None` | Upgrade DerivativeCalculator with numerical root/interval solving, or refine scope to derivative analysis. |
| 124 | `concavity-calculator` | **Concavity Calculator** | Mathematics | **FIX** | `None` | Upgrade DerivativeCalculator with numerical root/interval solving, or refine scope to derivative analysis. |
| 125 | `extrema-calculator` | **Extrema Calculator** | Mathematics | **FIX** | `None` | Upgrade DerivativeCalculator with numerical root/interval solving, or refine scope to derivative analysis. |
| 126 | `related-rates-calculator` | **Related Rates Calculator** | Mathematics | **FIX** | `None` | Upgrade DerivativeCalculator with numerical root/interval solving, or refine scope to derivative analysis. |
| 127 | `optimization-calculator` | **Optimization Calculator** | Mathematics | **FIX** | `None` | Upgrade DerivativeCalculator with numerical root/interval solving, or refine scope to derivative analysis. |
| 128 | `marginal-cost-calculator` | **Marginal Cost Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 129 | `marginal-revenue-calculator` | **Marginal Revenue Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 130 | `marginal-profit-calculator` | **Marginal Profit Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 131 | `arithmetic-series-calculator` | **Arithmetic Series Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 132 | `geometric-series-calculator` | **Geometric Series Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 133 | `geometric-series-sum` | **Geometric Series Sum** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 134 | `infinite-geometric-series` | **Infinite Geometric Series** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 135 | `sequence-calculator` | **Sequence Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 136 | `sigma-summation-calculator` | **Sigma Summation Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 137 | `calculus-formulas` | **Calculus Formulas** | Mathematics | **REFERENCE** | `/reference/calculus/[topic]` | Static reference content in CalculusReference.astro; no user input or dynamic calculations. |
| 138 | `derivative-rules` | **Derivative Rules** | Mathematics | **REFERENCE** | `/reference/calculus/[topic]` | Static reference content in CalculusReference.astro; no user input or dynamic calculations. |
| 139 | `integration-rules` | **Integration Rules** | Mathematics | **REFERENCE** | `/reference/calculus/[topic]` | Static reference content in CalculusReference.astro; no user input or dynamic calculations. |
| 140 | `common-limits` | **Common Limits** | Mathematics | **REFERENCE** | `/reference/calculus/[topic]` | Static reference content in CalculusReference.astro; no user input or dynamic calculations. |
| 141 | `calculus-identities` | **Calculus Identities** | Mathematics | **REFERENCE** | `/reference/calculus/[topic]` | Static reference content in CalculusReference.astro; no user input or dynamic calculations. |
| 142 | `taylor-series-calculator` | **Taylor Series Expansion Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 143 | `maclaurin-series-calculator` | **Maclaurin Series Calculator** | Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 144 | `speed-calculator` | **Speed Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 145 | `velocity-calculator` | **Velocity Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 146 | `acceleration-calculator` | **Acceleration Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 147 | `newtons-second-law-calculator` | **Newton's Second Law** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 148 | `force-calculator` | **Force Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 149 | `work-calculator` | **Work Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 150 | `power-calculator` | **Power Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 151 | `potential-energy-calculator` | **Potential Energy** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 152 | `momentum-calculator` | **Momentum Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 153 | `centripetal-force-calculator` | **Centripetal Force** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 154 | `torque-calculator` | **Torque Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 155 | `distance-calculator` | **Distance Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 156 | `time-calculator` | **Time Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 157 | `free-fall-calculator` | **Free Fall Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 158 | `projectile-motion-calculator` | **Projectile Range** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 159 | `impulse-calculator` | **Impulse Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 160 | `mechanical-energy-calculator` | **Mechanical Energy** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 161 | `centripetal-acceleration-calculator` | **Centripetal Acceleration** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 162 | `friction-calculator` | **Friction Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 163 | `normal-force-calculator` | **Normal Force Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 164 | `angular-momentum-calculator` | **Angular Momentum** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 165 | `moment-of-inertia-calculator` | **Moment of Inertia (Point Mass)** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 166 | `gravitational-force-calculator` | **Gravitational Force** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 167 | `escape-velocity-calculator` | **Escape Velocity** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 168 | `weight-calculator` | **Weight Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 169 | `gravity-calculator` | **Gravity Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 170 | `orbital-velocity-calculator` | **Orbital Velocity** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 171 | `gravitational-potential-energy-calculator` | **Gravitational PE** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 172 | `density-calculator` | **Density Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 173 | `pressure-calculator` | **Pressure Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 174 | `hydrostatic-pressure-calculator` | **Hydrostatic Pressure** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 175 | `buoyant-force-calculator` | **Buoyant Force** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 176 | `archimedes-principle-calculator` | **Archimedes Principle** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 177 | `continuity-equation-calculator` | **Continuity Equation** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 178 | `bernoulli-equation-calculator` | **Bernoulli (Pressure)** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 179 | `flow-rate-calculator` | **Flow Rate Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 180 | `wavelength-calculator` | **Wavelength Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 181 | `frequency-calculator` | **Frequency Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 182 | `pendulum-period-calculator` | **Pendulum Period** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 183 | `period-calculator` | **Period Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 184 | `wave-speed-calculator` | **Wave Speed Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 185 | `simple-harmonic-motion-calculator` | **SHM Position** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 186 | `spring-period-calculator` | **Spring Period** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 187 | `spring-force-calculator` | **Spring Force (Hooke's Law)** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 188 | `spring-potential-energy-calculator` | **Spring Potential Energy** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 189 | `amplitude-calculator` | **Amplitude Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 190 | `angular-frequency-calculator` | **Angular Frequency** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 191 | `ideal-gas-law-calculator` | **Ideal Gas Law Calculator (PV = nRT)** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 192 | `specific-heat-calculator` | **Specific Heat Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 193 | `carnot-efficiency-calculator` | **Carnot Efficiency** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 194 | `heat-calculator` | **Heat Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 195 | `latent-heat-calculator` | **Latent Heat** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 196 | `thermal-expansion-calculator` | **Thermal Expansion** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 197 | `gas-law-calculator` | **Combined Gas Law Calculator (Physics)** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 198 | `pressure-volume-temperature-calculator` | **PVT Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 199 | `thermal-efficiency-calculator` | **Thermal Efficiency** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 200 | `heat-engine-efficiency-calculator` | **Heat Engine Efficiency** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 201 | `entropy-change-calculator` | **Entropy Change** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 202 | `ohms-law-calculator` | **Ohm's Law Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 203 | `electrical-power-calculator` | **Electrical Power Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 204 | `coulombs-law-calculator` | **Coulomb's Law** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 205 | `current-calculator` | **Current Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 206 | `voltage-calculator` | **Voltage Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 207 | `resistance-calculator` | **Resistance Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 208 | `electrical-energy-calculator` | **Electrical Energy** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 209 | `electric-charge-calculator` | **Electric Charge** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 210 | `electric-field-calculator` | **Electric Field** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 211 | `electric-potential-calculator` | **Electric Potential** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 212 | `capacitance-calculator` | **Capacitance Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 213 | `capacitor-energy-calculator` | **Capacitor Energy** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 214 | `series-resistance-calculator` | **Series Resistance** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 215 | `parallel-resistance-calculator` | **Parallel Resistance** | Physics | **MERGE** | `/tools/series-resistance-calculator` | Consolidate into unified Series & Parallel R/C Circuit Calculator. |
| 216 | `series-capacitance-calculator` | **Series Capacitance** | Physics | **MERGE** | `/tools/series-resistance-calculator` | Consolidate into unified Series & Parallel R/C Circuit Calculator. |
| 217 | `parallel-capacitance-calculator` | **Parallel Capacitance** | Physics | **MERGE** | `/tools/series-resistance-calculator` | Consolidate into unified Series & Parallel R/C Circuit Calculator. |
| 218 | `series-circuit-calculator` | **Series Circuit** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 219 | `parallel-circuit-calculator` | **Parallel Circuit** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 220 | `voltage-divider-calculator` | **Voltage Divider** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 221 | `current-divider-calculator` | **Current Divider** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 222 | `rc-time-constant-calculator` | **RC Time Constant** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 223 | `magnetic-force-calculator` | **Magnetic Force** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 224 | `lorentz-force-calculator` | **Lorentz Force** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 225 | `magnetic-field-wire-calculator` | **Magnetic Field (Wire)** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 226 | `solenoid-magnetic-field-calculator` | **Solenoid Field** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 227 | `magnetic-flux-calculator` | **Magnetic Flux** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 228 | `electromagnetic-induction-calculator` | **EM Induction** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 229 | `faradays-law-calculator` | **Faraday's Law** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 230 | `inductance-calculator` | **Inductance Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 231 | `inductor-energy-calculator` | **Inductor Energy** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 232 | `snells-law-calculator` | **Snell's Law Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 233 | `lens-equation-calculator` | **Lens Equation** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 234 | `mirror-equation-calculator` | **Mirror Equation** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 235 | `magnification-calculator` | **Magnification** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 236 | `refractive-index-calculator` | **Refractive Index** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 237 | `critical-angle-calculator` | **Critical Angle** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 238 | `focal-length-calculator` | **Focal Length** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 239 | `power-of-lens-calculator` | **Power of Lens** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 240 | `diffraction-calculator` | **Diffraction Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 241 | `double-slit-calculator` | **Double Slit Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 242 | `mass-energy-equivalence-calculator` | **Mass-Energy Equivalence Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 243 | `photon-energy-calculator` | **Photon Energy Calculator** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 244 | `einstein-energy-calculator` | **Einstein Energy** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 245 | `photon-momentum-calculator` | **Photon Momentum** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 246 | `de-broglie-wavelength-calculator` | **De Broglie Wavelength** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 247 | `photoelectric-effect-calculator` | **Photoelectric Effect** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 248 | `relativistic-energy-calculator` | **Relativistic Energy** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 249 | `time-dilation-calculator` | **Time Dilation** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 250 | `length-contraction-calculator` | **Length Contraction** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 251 | `mass-defect-calculator` | **Mass Defect Calculator (Nuclear Physics)** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 252 | `nuclear-binding-energy-calculator` | **Nuclear Binding Energy Calculator (Nuclear Physics)** | Physics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 253 | `physics-constants` | **Physics Constants** | Physics | **REFERENCE** | `/reference/physics/constants` | Static reference content in PhysicsConstants.astro; no user input or dynamic calculations. |
| 254 | `physics-formulas` | **Physics Formulas** | Physics | **REFERENCE** | `/reference/physics/formulas` | Static reference content in PhysicsFormulas.astro; no user input or dynamic calculations. |
| 255 | `molar-mass-calculator` | **Molar Mass Calculator** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 256 | `percent-composition-calculator` | **Percent Composition** | Chemistry | **MERGE** | `/tools/molar-mass-calculator` | Consolidate into comprehensive chemical formula & stoichiometry calculator. |
| 257 | `mass-to-moles` | **Mass to Moles** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 258 | `moles-to-mass` | **Moles to Mass** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 259 | `particles-to-moles` | **Particles to Moles** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 260 | `moles-to-particles` | **Moles to Particles** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 261 | `atomic-number-calculator` | **Atomic Number Calculator** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 262 | `mass-number-calculator` | **Mass Number Calculator** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 263 | `protons-neutrons-electrons` | **Protons, Neutrons, Electrons** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 264 | `average-atomic-mass` | **Average Atomic Mass** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 265 | `photon-energy-chemistry` | **Photon Energy** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 266 | `wavelength-frequency-energy` | **Wavelength to Frequency** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 267 | `periodic-table` | **Interactive Periodic Table** | Chemistry | **KEEP** | `None` | Primary interactive periodic table tool. |
| 268 | `ideal-gas-law` | **Ideal Gas Law** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 269 | `boyles-law` | **Boyle's Law** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 270 | `charles-law` | **Charles's Law** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 271 | `gay-lussacs-law` | **Gay-Lussac's Law** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 272 | `combined-gas-law` | **Combined Gas Law Calculator (Chemistry)** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 273 | `gas-density-calculator` | **Gas Density** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 274 | `root-mean-square-speed` | **RMS Speed of Gas** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 275 | `molarity-calculator` | **Molarity Calculator** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 276 | `molality-calculator` | **Molality Calculator** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 277 | `dilution-calculator` | **Dilution Calculator** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 278 | `mass-percent-calculator` | **Mass Percent** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 279 | `mole-fraction-calculator` | **Mole Fraction** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 280 | `ph-calculator` | **pH Calculator** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 281 | `poh-calculator` | **pOH Calculator** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 282 | `hydrogen-ion-concentration` | **[H+] from pH** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 283 | `pka-calculator` | **pKa Calculator** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 284 | `henderson-hasselbalch` | **Henderson-Hasselbalch** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 285 | `reaction-balancer` | **Reaction Balancer** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 286 | `percent-yield-calculator` | **Percent Yield Calculator** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 287 | `heat-energy-calculator` | **Heat Energy (Q = mcΔT)** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 288 | `enthalpy-calculator` | **Enthalpy Change (ΔH)** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 289 | `kc-calculator` | **Kc Calculator** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 290 | `gibbs-free-energy` | **Gibbs Free Energy** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 291 | `standard-cell-potential` | **Standard Cell Potential** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 292 | `nernst-equation` | **Nernst Equation** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 293 | `faradays-electrolysis` | **Faraday Electrolysis Mass** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 294 | `half-life-first-order` | **First-Order Half-Life** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 295 | `arrhenius-equation` | **Arrhenius Equation** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 296 | `radioactive-decay` | **Radioactive Decay** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 297 | `chemistry-constants` | **Chemistry Constants** | Chemistry | **REFERENCE** | `/reference/chemistry/[topic]` | Static reference content in ChemistryReference.astro; no user input or dynamic calculations. |
| 298 | `solubility-rules` | **Solubility Rules** | Chemistry | **REFERENCE** | `/reference/chemistry/[topic]` | Static reference content in ChemistryReference.astro; no user input or dynamic calculations. |
| 299 | `strong-acids-and-bases` | **Strong Acids & Bases** | Chemistry | **REFERENCE** | `/reference/chemistry/[topic]` | Static reference content in ChemistryReference.astro; no user input or dynamic calculations. |
| 300 | `common-polyatomic-ions` | **Polyatomic Ions** | Chemistry | **REFERENCE** | `/reference/chemistry/[topic]` | Static reference content in ChemistryReference.astro; no user input or dynamic calculations. |
| 301 | `moles-calculator` | **Moles Calculator** | Chemistry | **MERGE** | `/tools/molar-mass-calculator` | Consolidate into comprehensive chemical formula & stoichiometry calculator. |
| 302 | `atoms-calculator` | **Atoms Calculator** | Chemistry | **MERGE** | `/tools/molar-mass-calculator` | Consolidate into comprehensive chemical formula & stoichiometry calculator. |
| 303 | `molecules-calculator` | **Molecules Calculator** | Chemistry | **MERGE** | `/tools/molar-mass-calculator` | Consolidate into comprehensive chemical formula & stoichiometry calculator. |
| 304 | `ions-calculator` | **Ions Calculator** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 305 | `chemical-formula-calculator` | **Chemical Formula Calculator** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 306 | `stoichiometry-calculator` | **Stoichiometry Calculator** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 307 | `theoretical-yield-calculator` | **Theoretical Yield** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 308 | `actual-yield-calculator` | **Actual Yield Calculator** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 309 | `isotope-calculator` | **Isotope Calculator** | Chemistry | **REMOVE** | `/tools/periodic-table` | Exact duplicate wrapper rendering identical periodic table modal with no custom logic. 301 redirect to periodic-table. |
| 310 | `electron-configuration` | **Electron Configuration** | Chemistry | **REMOVE** | `/tools/periodic-table` | Exact duplicate wrapper rendering identical periodic table modal with no custom logic. 301 redirect to periodic-table. |
| 311 | `valence-electron-calculator` | **Valence Electrons** | Chemistry | **REMOVE** | `/tools/periodic-table` | Exact duplicate wrapper rendering identical periodic table modal with no custom logic. 301 redirect to periodic-table. |
| 312 | `oxidation-state-calculator` | **Oxidation State Calculator** | Chemistry | **REMOVE** | `/tools/periodic-table` | Exact duplicate wrapper rendering identical periodic table modal with no custom logic. 301 redirect to periodic-table. |
| 313 | `isotope-abundance-calculator` | **Isotope Abundance** | Chemistry | **REMOVE** | `/tools/periodic-table` | Exact duplicate wrapper rendering identical periodic table modal with no custom logic. 301 redirect to periodic-table. |
| 314 | `daltons-law` | **Dalton's Law of Partial Pressures** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 315 | `molar-volume-calculator` | **Molar Volume** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 316 | `average-kinetic-energy-gas` | **Avg Kinetic Energy (Gas)** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 317 | `graham-law-calculator` | **Graham's Law of Effusion** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 318 | `normality-calculator` | **Normality Calculator** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 319 | `volume-percent-calculator` | **Volume Percent (v/v)** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 320 | `ppm-calculator` | **PPM Calculator (Parts Per Million)** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 321 | `ppb-calculator` | **PPB Calculator** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 322 | `solution-concentration-calculator` | **Solution Concentration** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 323 | `moles-from-molarity` | **Moles from Molarity** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 324 | `grams-from-molarity` | **Grams from Molarity** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 325 | `hydroxide-ion-concentration` | **[OH-] from pOH** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 326 | `pkb-calculator` | **pKb Calculator** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 327 | `ka-calculator` | **Ka from pKa** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 328 | `kb-calculator` | **Kb from pKb** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 329 | `acid-base-neutralization` | **Neutralization (MaVa = MbVb)** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 330 | `q-mc-delta-t` | **Q = mcΔT Calculator** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 331 | `calorimetry-calculator` | **Calorimetry Calculator** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 332 | `heat-of-reaction` | **Heat of Reaction (ΔH)** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 333 | `fusion-energy` | **Energy of Fusion** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 334 | `vaporization-energy` | **Energy of Vaporization** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 335 | `equilibrium-constant` | **Equilibrium Constant (K)** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 336 | `kp-calculator` | **Kp Calculator** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 337 | `reaction-quotient` | **Reaction Quotient (Q)** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 338 | `cell-potential-calculator` | **Cell Potential Calculator** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 339 | `electrolysis-calculator` | **Electrolysis Time** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 340 | `gibbs-free-energy-electrochemistry` | **ΔG from E°cell** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 341 | `charge-from-current-time` | **Charge (Q = It)** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 342 | `rate-law-calculator` | **Rate Law Calculator** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 343 | `first-order-reaction` | **First Order Reaction** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 344 | `half-life-calculator` | **Half-Life (1st Order)** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 345 | `alkane-formula-calculator` | **Alkane Formula** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 346 | `alkene-formula-calculator` | **Alkene Formula** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 347 | `alkyne-formula-calculator` | **Alkyne Formula** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 348 | `degree-of-unsaturation` | **Degree of Unsaturation** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 349 | `organic-functional-groups` | **Organic Functional Groups** | Chemistry | **REFERENCE** | `/reference/chemistry/[topic]` | Static reference content in ChemistryReference.astro; no user input or dynamic calculations. |
| 350 | `half-life-nuclear` | **Nuclear Half-Life** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 351 | `remaining-radioactive-material` | **Remaining Material** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 352 | `mass-defect` | **Mass Defect Calculator (Nuclear Chemistry)** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 353 | `nuclear-binding-energy` | **Nuclear Binding Energy Calculator (Nuclear Chemistry)** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 354 | `decay-constant` | **Decay Constant** | Chemistry | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 355 | `bmi-calculator` | **BMI Calculator (Body Mass Index)** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 356 | `body-surface-area` | **Body Surface Area (Mosteller)** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 357 | `waist-to-height-ratio` | **Waist-to-Height Ratio** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 358 | `heart-rate-zones` | **Max Heart Rate** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 359 | `animal-cell` | **Animal Cell Organelles** | Biology | **REFERENCE** | `/reference/biology/[topic]` | Static reference content in BiologyReference.astro; no user input or dynamic calculations. |
| 360 | `plant-cell` | **Plant Cell Organelles** | Biology | **REFERENCE** | `/reference/biology/[topic]` | Static reference content in BiologyReference.astro; no user input or dynamic calculations. |
| 361 | `cell-organelles` | **Organelle Reference** | Biology | **REFERENCE** | `/reference/biology/[topic]` | Static reference content in BiologyReference.astro; no user input or dynamic calculations. |
| 362 | `mitosis-stages` | **Mitosis Stages** | Biology | **REFERENCE** | `/reference/biology/[topic]` | Static reference content in BiologyReference.astro; no user input or dynamic calculations. |
| 363 | `cell-cycle` | **Cell Cycle Reference** | Biology | **REFERENCE** | `/reference/biology/[topic]` | Static reference content in BiologyReference.astro; no user input or dynamic calculations. |
| 364 | `surface-area-to-volume-ratio` | **SA:V Ratio (Sphere)** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 365 | `punnett-square` | **Punnett Square Calculator** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 366 | `monohybrid-cross` | **Monohybrid Cross** | Biology | **MERGE** | `/tools/punnett-square` | Consolidate into multi-mode genetics cross calculator on punnett-square. |
| 367 | `dihybrid-cross` | **Dihybrid Cross** | Biology | **MERGE** | `/tools/punnett-square` | Consolidate into multi-mode genetics cross calculator on punnett-square. |
| 368 | `hardy-weinberg-calculator` | **Hardy-Weinberg (q² to p)** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 369 | `hardy-weinberg` | **Hardy-Weinberg Heterozygotes** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 370 | `dna-complement` | **DNA Complement** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 371 | `reverse-complement` | **Reverse Complement** | Biology | **MERGE** | `/tools/dna-complement` | Consolidate into comprehensive DNA/RNA sequence analysis workbench on dna-complement (or dna-sequence-analyzer). |
| 372 | `rna-transcription` | **DNA to RNA Transcription** | Biology | **MERGE** | `/tools/dna-complement` | Consolidate into comprehensive DNA/RNA sequence analysis workbench on dna-complement (or dna-sequence-analyzer). |
| 373 | `codon-translator` | **Codon Translator** | Biology | **MERGE** | `/tools/dna-complement` | Consolidate into comprehensive DNA/RNA sequence analysis workbench on dna-complement (or dna-sequence-analyzer). |
| 374 | `dna-melting-temperature` | **DNA Melting Temperature (Tm)** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 375 | `gc-content` | **GC Content Calculator** | Biology | **MERGE** | `/tools/dna-complement` | Consolidate into comprehensive DNA/RNA sequence analysis workbench on dna-complement (or dna-sequence-analyzer). |
| 376 | `central-dogma` | **Central Dogma** | Biology | **REFERENCE** | `/reference/biology/[topic]` | Static reference content in BiologyReference.astro; no user input or dynamic calculations. |
| 377 | `amino-acid-reference` | **Amino Acid Reference** | Biology | **REFERENCE** | `/reference/biology/[topic]` | Static reference content in BiologyReference.astro; no user input or dynamic calculations. |
| 378 | `amino-acids` | **Amino Acid Codes** | Biology | **REFERENCE** | `/reference/biology/[topic]` | Static reference content in BiologyReference.astro; no user input or dynamic calculations. |
| 379 | `michaelis-menten` | **Michaelis-Menten Equation** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 380 | `catalytic-efficiency` | **Catalytic Efficiency** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 381 | `population-growth` | **Exponential Growth** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 382 | `logistic-growth` | **Logistic Growth Rate** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 383 | `doubling-time` | **Population Doubling Time** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 384 | `shannon-diversity` | **Shannon Diversity (H)** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 385 | `cardiac-output` | **Cardiac Output** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 386 | `mean-arterial-pressure` | **Mean Arterial Pressure (MAP)** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 387 | `alveolar-ventilation` | **Alveolar Ventilation** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 388 | `bacterial-generation-time` | **Generation Time (G)** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 389 | `cfu-calculator` | **CFU/mL Calculator** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 390 | `beer-lambert-law` | **Beer-Lambert Law (Absorbance)** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 391 | `pcr-amplification` | **PCR Amplification** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 392 | `bmr-calculator` | **BMR Calculator (Mifflin-St Jeor)** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 393 | `ideal-body-weight` | **Ideal Body Weight (Devine, Male)** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 394 | `stroke-volume` | **Stroke Volume** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 395 | `pulse-pressure` | **Pulse Pressure** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 396 | `renal-clearance` | **Renal Clearance** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 397 | `sensitivity-specificity` | **Sensitivity** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 398 | `positive-predictive-value` | **Positive Predictive Value** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 399 | `case-fatality-rate` | **Case Fatality Rate** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 400 | `relative-risk` | **Relative Risk (RR)** | Biology | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 401 | `test-cross` | **Test Cross Analysis** | Biology | **MERGE** | `/tools/punnett-square` | Consolidate into multi-mode genetics cross calculator on punnett-square. |
| 402 | `blood-type-inheritance` | **Blood Type Inheritance** | Biology | **MERGE** | `/tools/punnett-square` | Consolidate into multi-mode genetics cross calculator on punnett-square. |
| 403 | `sex-linked-inheritance` | **Sex-Linked Inheritance** | Biology | **MERGE** | `/tools/punnett-square` | Consolidate into multi-mode genetics cross calculator on punnett-square. |
| 404 | `dna-to-rna` | **DNA to RNA** | Biology | **MERGE** | `/tools/dna-complement` | Consolidate into comprehensive DNA/RNA sequence analysis workbench on dna-complement (or dna-sequence-analyzer). |
| 405 | `rna-to-protein` | **RNA to Protein** | Biology | **MERGE** | `/tools/dna-complement` | Consolidate into comprehensive DNA/RNA sequence analysis workbench on dna-complement (or dna-sequence-analyzer). |
| 406 | `peptide-mass-calculator` | **Peptide Mass** | Biology | **MERGE** | `/tools/dna-complement` | Consolidate into comprehensive DNA/RNA sequence analysis workbench on dna-complement (or dna-sequence-analyzer). |
| 407 | `cell-structure` | **Cell Structure** | Biology | **REFERENCE** | `/reference/biology/[topic]` | Static reference content in BiologyReference.astro; no user input or dynamic calculations. |
| 408 | `eukaryotic-cell` | **Eukaryotic Cell** | Biology | **REFERENCE** | `/reference/biology/[topic]` | Static reference content in BiologyReference.astro; no user input or dynamic calculations. |
| 409 | `prokaryotic-cell` | **Prokaryotic Cell** | Biology | **REFERENCE** | `/reference/biology/[topic]` | Static reference content in BiologyReference.astro; no user input or dynamic calculations. |
| 410 | `meiosis-stages` | **Meiosis Stages** | Biology | **REFERENCE** | `/reference/biology/[topic]` | Static reference content in BiologyReference.astro; no user input or dynamic calculations. |
| 411 | `transcription-reference` | **Transcription** | Biology | **REFERENCE** | `/reference/biology/[topic]` | Static reference content in BiologyReference.astro; no user input or dynamic calculations. |
| 412 | `translation-reference` | **Translation** | Biology | **REFERENCE** | `/reference/biology/[topic]` | Static reference content in BiologyReference.astro; no user input or dynamic calculations. |
| 413 | `protein-structure` | **Protein Structure** | Biology | **REFERENCE** | `/reference/biology/[topic]` | Static reference content in BiologyReference.astro; no user input or dynamic calculations. |
| 414 | `photosynthesis-equation` | **Photosynthesis Equation** | Biology | **REFERENCE** | `/reference/biology/[topic]` | Static reference content in BiologyReference.astro; no user input or dynamic calculations. |
| 415 | `cellular-respiration` | **Cellular Respiration** | Biology | **REFERENCE** | `/reference/biology/[topic]` | Static reference content in BiologyReference.astro; no user input or dynamic calculations. |
| 416 | `human-skeleton` | **Human Skeleton** | Biology | **REFERENCE** | `/reference/biology/[topic]` | Static reference content in BiologyReference.astro; no user input or dynamic calculations. |
| 417 | `circulatory-system` | **Circulatory System** | Biology | **REFERENCE** | `/reference/biology/[topic]` | Static reference content in BiologyReference.astro; no user input or dynamic calculations. |
| 418 | `nervous-system` | **Nervous System** | Biology | **REFERENCE** | `/reference/biology/[topic]` | Static reference content in BiologyReference.astro; no user input or dynamic calculations. |
| 419 | `digestive-system` | **Digestive System** | Biology | **REFERENCE** | `/reference/biology/[topic]` | Static reference content in BiologyReference.astro; no user input or dynamic calculations. |
| 420 | `endocrine-system` | **Endocrine System** | Biology | **REFERENCE** | `/reference/biology/[topic]` | Static reference content in BiologyReference.astro; no user input or dynamic calculations. |
| 421 | `biology-formulas` | **Biology Formulas** | Biology | **REFERENCE** | `/reference/biology/[topic]` | Static reference content in BiologyReference.astro; no user input or dynamic calculations. |
| 422 | `biology-constants` | **Biology Constants** | Biology | **REFERENCE** | `/reference/biology/[topic]` | Static reference content in BiologyReference.astro; no user input or dynamic calculations. |
| 423 | `percentile-calculator` | **Percentile Calculator** | Statistics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 424 | `quartile-calculator` | **Quartile Calculator** | Statistics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 425 | `iqr-calculator` | **IQR Calculator (Interquartile Range)** | Statistics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 426 | `five-number-summary` | **Five Number Summary** | Statistics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 427 | `mean-absolute-deviation` | **Mean Absolute Deviation** | Statistics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 428 | `standard-error-calculator` | **Standard Error Calculator** | Statistics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 429 | `covariance-calculator` | **Covariance Calculator** | Statistics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 430 | `correlation-coefficient` | **Correlation Coefficient** | Statistics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 431 | `linear-regression-calculator` | **Linear Regression Calculator** | Statistics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 432 | `regression-equation-calculator` | **Regression Equation** | Statistics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 433 | `r-squared-calculator` | **R-Squared Calculator** | Statistics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 434 | `normal-distribution-calculator` | **Normal Distribution (Z-Score) Calculator** | Statistics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 435 | `standard-normal-distribution` | **Standard Normal Distribution** | Statistics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 436 | `binomial-distribution-calculator` | **Binomial Distribution** | Statistics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 437 | `poisson-distribution-calculator` | **Poisson Distribution** | Statistics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 438 | `truth-table-generator` | **Truth Table Generator** | Discrete Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 439 | `logical-expression-evaluator` | **Logical Expression Evaluator** | Discrete Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 440 | `set-union-calculator` | **Set Union Calculator** | Discrete Mathematics | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 441 | `set-intersection-calculator` | **Set Intersection Calculator** | Discrete Mathematics | **MERGE** | `/tools/set-union-calculator` | Consolidate into unified Set Operations Calculator. |
| 442 | `set-difference-calculator` | **Set Difference Calculator** | Discrete Mathematics | **MERGE** | `/tools/set-union-calculator` | Consolidate into unified Set Operations Calculator. |
| 443 | `rref-calculator` | **RREF Calculator (Reduced Row Echelon Form)** | Linear Algebra | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 444 | `matrix-rank-calculator` | **Matrix Rank Calculator** | Linear Algebra | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 445 | `matrix-trace-calculator` | **Matrix Trace Calculator** | Linear Algebra | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 446 | `eigenvalue-calculator` | **Eigenvalue Calculator** | Linear Algebra | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 447 | `relative-error-calculator` | **Relative Error Calculator** | Numerical Methods | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 448 | `final-grade-calculator` | **Final Grade Calculator** | Student Utilities | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 449 | `binary-calculator` | **Binary Converter** | Computer Science | **MERGE** | `/tools/base-conversion-calculator` | Consolidate into universal base converter. |
| 450 | `hexadecimal-converter` | **Hexadecimal Converter** | Computer Science | **MERGE** | `/tools/base-conversion-calculator` | Consolidate into universal base converter. |
| 451 | `base-conversion-calculator` | **Base Conversion Calculator** | Computer Science | **KEEP** | `None` | Distinct, useful, functional interactive tool. |
| 452 | `weighted-grade-calculator` | **Weighted Grade Calculator** | Student Utilities | **KEEP** | `None` | Distinct, useful, functional interactive tool. |

---

## 11. Rollback & Verification Integrity

- **Current Working State:** Validated against commit `a5d9e3fc`.
- **Next Step:** Awaiting explicit authorization to proceed with **Batch 1 (Fix genuinely broken low-risk tools)**.

# StudentKit — Final Addition Verification & Candidate Audit

**Checkpoint Baseline:** `413c20b` (Parent: `e2b51b5`)  
**Branch:** `refactor/studentkit-tool-reduction`  
**Scope:** Strict read-only codebase verification of the three candidate additions:
1. Quadratic Formula Calculator
2. Discount & Sale Price Calculator
3. Significant Figures Calculator

**Mode:** READ-ONLY VERIFICATION — No source code modifications, tool additions, deletions, or redirects performed.

---

## 1. Current 103-Resource Baseline Summary

Following the execution of the 13 approved natural tool merges:
- **Active Canonical Resources:** **103** (87 interactive tools, 16 reference/visual guides)
- **Active Categories:** **10**
- **Permanent Redirect Rules:** **75** in `astro.config.mjs`
- **Sitemap URLs:** **119** canonical pages (103 tools + 10 categories + 1 tools directory + 5 static content pages)
- **Active Build Status:** Clean build (0 errors, 0 warnings, 0 broken internal links)

---

## 2. Investigation 1 — Quadratic Formula Calculator

### Historical Context & Inconsistency Resolved
In earlier audit iterations, `/tools/quadratic-equation-solver` was recorded as a redirect to `/tools/prime-factorization-calculator` (via `astro.config.mjs` line 77). Because a redirect rule existed, some high-level text summaries assumed quadratic solving capabilities were already present on the site.

### Source Code Audit Findings
A comprehensive inspection of the current codebase was conducted across:
- `src/data/registry.ts`
- `src/data/toolContent.ts`
- `src/components/tools/*` (specifically `PrimeFactorization.astro`, `PolynomialCalculator.astro`, `ScientificCalculator.astro`)
- `astro.config.mjs`

1. **Registry & Content:** Zero active tools define quadratic equation solving, discriminant calculation ($\Delta = b^2 - 4ac$), or root extraction ($x = \frac{-b \pm \sqrt{\Delta}}{2a}$).
2. **Component Inspection (`PrimeFactorization.astro`):** Solves integer prime factor trees (e.g. $360 = 2^3 \times 3^2 \times 5^1$, divisor counts, prime testing). It contains zero functionality for algebraic polynomial root solving.
3. **Other Components:** `MatrixCalculator.astro` computes characteristic eigenvalues for $2 \times 2$ and $3 \times 3$ matrices, but no general $ax^2 + bx + c = 0$ quadratic solver is exposed to students.

### Verdict
**Status: D. GENUINELY MISSING**

**Proof:** No surviving tool in the 103-resource catalog provides quadratic formula evaluation, discriminant analysis, real/complex root extraction, or parabola vertex/axis of symmetry calculation.

---

## 3. Investigation 2 — Discount & Sale Price Calculator

### Source Code Audit Findings
A full scan of `src/` for keywords `discount`, `sale price`, `percentage discount`, `marked price`, `original price`, `final price`, and `sales tax` returned **0 occurrences**.

Inspecting the existing percentage tools in `src/components/tools/`:
- `percentage-calculator.astro` — Computes academic course grades (Subject marks obtained / Total maximum marks).
- `percentage-change.astro` — Computes generic percentage increase/decrease between two arbitrary values ($\frac{B - A}{A} \times 100\%$).

Neither tool accommodates:
- Original list / marked price inputs
- Percentage discount ($X\%$ off) or fixed amount discount ($\$Y$ off)
- Additional stackable discounts (e.g., student discount + clearance coupon)
- Sales tax calculation on discounted subtotal
- Total money saved breakdown

### Verdict
**Status: C. GENUINELY MISSING**

**Priority:** **HIGH**  
**Justification:** Universal everyday utility with immense search demand among students purchasing textbooks, school electronics, campus merchandise, supplies, and apparel.

---

## 4. Investigation 3 — Significant Figures Calculator

### Source Code Audit Findings
A detailed scan for `significant figure`, `sig fig`, `significant digit`, `sigfig`, and precision handling across `src/` and `src/components/tools/ScientificNotationCalculator.astro` revealed:

1. **`ScientificNotationCalculator.astro`:**
   - Converts numbers between decimal format, scientific notation ($a \times 10^b$), engineering notation ($a \times 10^{3k}$), and E-notation.
   - Performs standard floating-point arithmetic.
   - **Does NOT** count significant figures (e.g. determining that `0.00450` has 3 sig figs while `100.0` has 4).
   - **Does NOT** round numbers to $N$ significant digits.
   - **Does NOT** apply scientific operation rules for addition/subtraction (limiting by least decimal places) versus multiplication/division (limiting by least sig figs).
2. **`src/utils/formatters.ts`:** Contains standard output display formatting with `toPrecision(6)`, but no student-facing sig fig counting or rules engine.

### Verdict
**Status: C. GENUINELY MISSING**

**Priority:** **HIGH**  
**Justification:** High-frequency student search intent across introductory and AP/undergraduate chemistry and physics lab coursework where significant figures and measurement uncertainty are mandatory.

---

## 5. Maintenance-Free Architectural Fit

All three candidates strictly adhere to StudentKit's client-side, maintenance-free philosophy:

| Criteria | Quadratic Formula Calculator | Discount & Sale Price Calculator | Significant Figures Calculator |
| :--- | :--- | :--- | :--- |
| **Pure Client-Side JS/TS?** | Yes (100%) | Yes (100%) | Yes (100%) |
| **External API Required?** | None | None | None |
| **Database Required?** | None | None | None |
| **Live / Dynamic Data?** | None | None | None |
| **Uses Existing Tool Layout?** | Yes (`ToolLayout.astro`) | Yes (`ToolLayout.astro`) | Yes (`ToolLayout.astro`) |
| **Long-Term Maintenance?** | Zero (Timeless math) | Zero (Timeless math) | Zero (Timeless rules) |
| **Student Practical Utility?** | Essential STEM core | Universal daily utility | Essential lab science utility |

---

## 6. Summary & Ranking Table

| Candidate | Status | Priority | Primary Justification |
| :--- | :--- | :--- | :--- |
| **Quadratic Formula Calculator** | **GENUINELY MISSING** | **HIGH** | Quintessential algebra solver ($x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$). Previous redirect to Prime Factorization was mathematically incomplete. |
| **Discount & Sale Price Calculator** | **GENUINELY MISSING** | **HIGH** | Universal high-volume student search utility for shopping, textbooks, and multi-tier discount/tax calculations. Zero current coverage. |
| **Significant Figures Calculator** | **GENUINELY MISSING** | **HIGH** | Critical science homework tool (counting sig figs, rounding to $N$ precision, applying arithmetic rules). Unsupported by current notation tool. |

---

## 7. Read-Only Verification Confirmation

- `git diff --check`: Clean (0 errors).
- `git status`: Unchanged tracked source code.

**NO SOURCE CODE MODIFICATION, TOOL ADDITION, DELETION, OR COMMIT WAS PERFORMED.**

# StudentKit — Phase 2 Final Merge Implementation Plan

**Branch:** `refactor/studentkit-tool-reduction`
**HEAD checkpoint:** `413c20b`
**Protected baseline:** `e2b51b5` (must not be modified)
**Status:** READ-ONLY PLAN — No source code changes made in this document.

---

## Overview

This plan covers the retirement of 13 duplicate/specialist tool routes through natural 1:1 merges into surviving canonical tools. After these merges:

| Metric | Value |
|--------|-------|
| Pre-merge resource count | 116 |
| Resources retired (merged) | 13 |
| Post-merge resource count | **103** |
| Natural redirects added | 13 |
| Total redirects (existing 62 + new 13) | **75** |

---

## Pre-Merge Verification State

All 13 retiring slugs are currently **active entries in `src/data/registry.ts`** — they generate live pages.
None of the 13 are already present in `astro.config.mjs` redirects.
All 13 surviving canonical destinations are confirmed present in `registry.ts`.

---

## Individual Merge Analyses

---

### Merge 1 — `second-derivative-calculator` ? `derivative-calculator`

| Field | Value |
|-------|-------|
| Retired URL | `/tools/second-derivative-calculator` |
| Surviving canonical | `/tools/derivative-calculator` |
| Component | `DerivativeCalculator.astro` (shared — both use `component: "DerivativeCalculator"`) |
| Registry line (retired) | L601–608 |
| Registry line (survivor) | L591–598 |

**Does the survivor already expose all functionality of the retired route?**
Yes. `DerivativeCalculator.astro` is a 93KB symbolic differentiation engine. The `toolContent.ts` entry for `derivative-calculator` explicitly documents a `modeDetails.second` mode: "Second derivative – click Second Derivative mode to see f''(x)." The UI already has a Second Derivative mode button. The retiring tool adds no new capability.

**Configuration / options to preserve:**
None. The retiring entry has no `formulaConfig`, no `related`, no `aliases`, no `physicsConfig`.

**Survivor UI / title / description adjustment needed?**
Optional: the survivor description undersells the tool — it says "first derivatives" but the tool handles second and partial. Not a blocker.

**Redirect is a natural 1:1?**
YES. A user arriving at `/tools/second-derivative-calculator` lands on a tool with an explicit "Second Derivative" mode.

**Internal links pointing to retired URL?**
None found.

**Sitemap / search / content references to clean?**
No `toolContent.ts` entry for `second-derivative-calculator`. Registry removal automatically cleans sitemap via `getStaticPaths()`.

**Risk of functionality loss?**
NONE.

---

### Merge 2 — `partial-derivative-calculator` ? `derivative-calculator`

| Field | Value |
|-------|-------|
| Retired URL | `/tools/partial-derivative-calculator` |
| Surviving canonical | `/tools/derivative-calculator` |
| Component | `DerivativeCalculator.astro` (shared) |
| Registry line (retired) | L611–618 |

**Does the survivor already expose all functionality?**
Yes. `toolContent.ts` `modeDetails.partial`: "Partial derivative – specify the variable to differentiate with respect to." Natively supported.

**Configuration / options to preserve:** None.
**Survivor UI adjustment needed?** Same optional description improvement. Not a blocker.
**Redirect is a natural 1:1?** YES.
**Internal links?** None found.
**Risk?** NONE.

---

### Merge 3 — `definite-integral-calculator` ? `integral-calculator`

| Field | Value |
|-------|-------|
| Retired URL | `/tools/definite-integral-calculator` |
| Surviving canonical | `/tools/integral-calculator` |
| Component | `IntegralCalculator.astro` (shared) |
| Registry line (retired) | L631–639 |
| Registry line (survivor) | L621–628 |
| ToolContent entry (retired) | `src/data/toolContent.ts` L497 |

**Does the survivor already expose all functionality?**
Yes. `IntegralCalculator.astro` L5: `let mode = 'definite'` — definite integration is the default mode. No functionality is lost.

**Configuration / options to preserve:**
The retiring entry has `related: ["indefinite-integral-calculator","derivative-calculator","limit-calculator"]` at L638. Both slug targets in that list are also being retired; this array is eliminated with the entry.

**CRITICAL INTERNAL LINK BUG FOUND:**
`IntegralCalculator.astro` line 28 contains:
  `<a href="/tools/definite-integral-calculator">Use Definite Integral Calculator</a>`
This appears inside the mode === 'indefinite' banner. After Merge 4 retires `indefinite-integral-calculator`, the banner becomes dead code — but the dangling link to the retiring URL still exists in source.
RESOLUTION: Remove the entire mode === 'indefinite' banner block (L20–30) and the mode detection logic (L5–6). This is dead code after both integral variants are retired.

**ToolContent entry to remove:** `"definite-integral-calculator"` at `toolContent.ts` L497.

**Redirect is a natural 1:1?** YES — definite mode is the default.
**Risk?** LOW — requires removing dead-code banner to eliminate dangling link.

---

### Merge 4 — `indefinite-integral-calculator` ? `integral-calculator`

| Field | Value |
|-------|-------|
| Retired URL | `/tools/indefinite-integral-calculator` |
| Surviving canonical | `/tools/integral-calculator` |
| Component | `IntegralCalculator.astro` (shared) |
| Registry line (retired) | L642–649 |

**Does the survivor already expose all functionality?**
The retiring URL displayed a "Symbolic Integration Not Supported" notice — it never offered real indefinite integration. Redirecting to the definite integral calculator is appropriate and honest.

**Survivor UI adjustment needed?**
YES (cleanup only): Remove the dead-code `mode === 'indefinite'` banner (L20–30) and `mode` variable (L5–6) from `IntegralCalculator.astro`. This also eliminates the dangling link identified in Merge 3.

**Redirect is a natural 1:1?** YES.
**Internal links?** The retiring `definite-integral-calculator` `related` array referenced this slug — both are retiring, no surviving reference remains.
**Risk?** NONE from redirect. Dead-code removal is risk-free.

---

### Merge 5 — `one-sided-limit-calculator` ? `limit-calculator`

| Field | Value |
|-------|-------|
| Retired URL | `/tools/one-sided-limit-calculator` |
| Surviving canonical | `/tools/limit-calculator` |
| Component | `LimitCalculator.astro` (shared) |
| Registry line (retired) | L571–578 |
| Registry line (survivor) | L561–568 |

**Does the survivor already expose all functionality?**
Yes. `toolContent.ts` for `limit-calculator`: "You can select the direction of the approach (From Left, From Right, or Both Sides)." One-sided limits are a built-in feature.

**Configuration / options to preserve:** None.
**Survivor UI adjustment needed?** No.
**Redirect is a natural 1:1?** YES.
**Internal links?** None found.
**Risk?** NONE.

---

### Merge 6 — `infinite-limit-calculator` ? `limit-calculator`

| Field | Value |
|-------|-------|
| Retired URL | `/tools/infinite-limit-calculator` |
| Surviving canonical | `/tools/limit-calculator` |
| Component | `LimitCalculator.astro` (shared) |
| Registry line (retired) | L581–588 |

**Does the survivor already expose all functionality?**
Yes. The direction dropdown allows approach to 8 or -8. Infinite limits are supported natively.

**Configuration / options to preserve:** None.
**Survivor UI adjustment needed?** No.
**Redirect is a natural 1:1?** YES.
**Internal links?** None found.
**Risk?** NONE.

---

### Merge 7 — `right-triangle-calculator` ? `triangle-calculator`

| Field | Value |
|-------|-------|
| Retired URL | `/tools/right-triangle-calculator` |
| Surviving canonical | `/tools/triangle-calculator` |
| Component | `TriangleCalculator.astro` (shared) |
| Registry line (retired) | L488–495 |
| Registry line (survivor) | L498–505 |

**Does the survivor already expose all functionality?**
Yes, with nuance. `TriangleCalculator.astro` L4:
  `const isRight = tool.slug.includes('right-triangle') || ...`
When the retiring slug is active, `isRight = true` changes heading labels and input guidance to "right triangle" mode. After retirement, the general tool is shown. Users can still solve right triangles by entering angle C = 90°. The `isRight` mode is cosmetic labeling, not a distinct algorithm.

**Configuration / options to preserve:** None.
**Survivor UI adjustment needed?** No (cosmetic dead code can optionally be removed later).
**Redirect is a natural 1:1?** YES. Right triangle solving is a special case of general triangle solving.
**Internal links?** None found.
**Risk?** LOW. Users lose dedicated labeling but not functionality.

---

### Merge 8 — `triangle-area-calculator` ? `triangle-calculator`

| Field | Value |
|-------|-------|
| Retired URL | `/tools/triangle-area-calculator` |
| Surviving canonical | `/tools/triangle-calculator` |
| Retiring component | `FormulaCalculator` via `formulaConfig: { expression: "0.5 * b * h" }` |
| Surviving component | `TriangleCalculator.astro` |
| Registry line (retired) | L528–548 |

**Does the survivor already expose all functionality?**
Yes. `TriangleCalculator.astro` computes area (A = ½ab·sin(C)) as part of its full solution — a superset of A = ½·b·h.

**formulaConfig to preserve?** No — the survivor computes area automatically.
**Survivor UI adjustment needed?** No.
**Redirect is a natural 1:1?** YES.
**Internal links?** None found.
**Risk?** NONE. Survivor strictly exceeds the retiring tool.

---

### Merge 9 — `half-life-first-order` ? `half-life-calculator`

| Field | Value |
|-------|-------|
| Retired URL | `/tools/half-life-first-order` |
| Surviving canonical | `/tools/half-life-calculator` |
| Component | `UnitAwareCalculator.astro` (shared) |
| Registry line (retired) | L876–883 |
| Registry line (survivor) | L926–933 |

**Does the survivor already expose all functionality?**
Yes. Both tools compute t1/2 = ln2/k. Survivor title "Half-Life (1st Order)" is identical in scope to retiring "First-Order Half-Life". `UnitAwareCalculator` does NOT use `tool.slug` for behavior branching — no mode-detection risk.

**Configuration / options to preserve:** None.
**Survivor UI adjustment needed?** No.
**Redirect is a natural 1:1?** YES.
**Internal links?** None found.
**Risk?** NONE.

---

### Merge 10 — `half-life-nuclear` ? `half-life-calculator`

| Field | Value |
|-------|-------|
| Retired URL | `/tools/half-life-nuclear` |
| Surviving canonical | `/tools/half-life-calculator` |
| Component | `UnitAwareCalculator.astro` (shared) |
| Registry line (retired) | L946–953 |

**Does the survivor already expose all functionality?**
With nuance. Nuclear half-life tracks remaining activity N(t) = N0·(½)^(t/t1/2), which differs from the kinetic rate formula. However, both tools currently use `UnitAwareCalculator` without `physicsConfig`, rendering as generic formula tools. At current implementation depth, the survivor is the appropriate destination.

**Configuration / options to preserve:** None.
**Survivor UI adjustment needed?** Optionally rename from "Half-Life (1st Order)" to "Half-Life Calculator" for broader applicability. Not a blocker.
**Redirect is a natural 1:1?** YES within current implementation scope.
**Internal links?** None found.
**Risk?** LOW.

---

### Merge 11 — `standard-cell-potential` ? `cell-potential-calculator`

| Field | Value |
|-------|-------|
| Retired URL | `/tools/standard-cell-potential` |
| Surviving canonical | `/tools/cell-potential-calculator` |
| Component | `UnitAwareCalculator.astro` (shared) |
| Registry line (retired) | L856–863 |
| Registry line (survivor) | L916–923 |

**Does the survivor already expose all functionality?**
Yes. Both compute E°cell = E°cathode - E°anode. Same formula, different title. Both use generic `UnitAwareCalculator`.

**Configuration / options to preserve:** None.
**Survivor UI adjustment needed?** No.
**Redirect is a natural 1:1?** YES.
**Internal links?** None found.
**Risk?** NONE.

---

### Merge 12 — `nernst-equation` ? `cell-potential-calculator`

| Field | Value |
|-------|-------|
| Retired URL | `/tools/nernst-equation` |
| Surviving canonical | `/tools/cell-potential-calculator` |
| Component | `UnitAwareCalculator.astro` (shared) |
| Registry line (retired) | L866–873 |
| ToolContent entry (retired) | `src/data/toolContent.ts` L648 |

**Does the survivor already expose all functionality?**
Partially. The Nernst equation (E = E° - (RT/nF)ln(Q)) accounts for non-standard conditions; the survivor focuses on standard cell potential. However, both currently use generic `UnitAwareCalculator` without `physicsConfig`. The survivor is the closest available electrochemistry tool.

**ToolContent entry to remove:** `"nernst-equation"` at `toolContent.ts` L648.
**Survivor UI adjustment needed?** No.
**Redirect is a natural 1:1?** YES — same electrochemistry domain, closest available destination.
**Internal links?** None in `related:` arrays.
**Risk?** LOW. Content entry must be removed.

---

### Merge 13 — `q-mc-delta-t` ? `calorimetry-calculator`

| Field | Value |
|-------|-------|
| Retired URL | `/tools/q-mc-delta-t` |
| Surviving canonical | `/tools/calorimetry-calculator` |
| Component | `UnitAwareCalculator.astro` (shared) |
| Registry line (retired) | L896–903 |
| ToolContent entry (retired) | `src/data/toolContent.ts` L453 |

**Does the survivor already expose all functionality?**
Yes. Q = mc?T is the calorimetry formula. The survivor (Calorimetry Calculator) covers constant-pressure heat exchange — a natural superset.

**ToolContent entry to remove:** `"q-mc-delta-t"` at `toolContent.ts` L453.
**Survivor UI adjustment needed?** No.
**Redirect is a natural 1:1?** YES.
**Internal links?** None found.
**Risk?** NONE.

---

## Summary

### A. Exact Resource Counts

| Phase | Count |
|-------|-------|
| Pre-merge (HEAD `413c20b`) | **116** |
| Resources retired by this merge | 13 |
| Post-merge surviving resources | **103** |

### B. Retired ? Canonical Mapping (13 total)

| # | Retired URL | Canonical Destination |
|---|------------|----------------------|
| 1 | `/tools/second-derivative-calculator` | `/tools/derivative-calculator` |
| 2 | `/tools/partial-derivative-calculator` | `/tools/derivative-calculator` |
| 3 | `/tools/definite-integral-calculator` | `/tools/integral-calculator` |
| 4 | `/tools/indefinite-integral-calculator` | `/tools/integral-calculator` |
| 5 | `/tools/one-sided-limit-calculator` | `/tools/limit-calculator` |
| 6 | `/tools/infinite-limit-calculator` | `/tools/limit-calculator` |
| 7 | `/tools/right-triangle-calculator` | `/tools/triangle-calculator` |
| 8 | `/tools/triangle-area-calculator` | `/tools/triangle-calculator` |
| 9 | `/tools/half-life-first-order` | `/tools/half-life-calculator` |
| 10 | `/tools/half-life-nuclear` | `/tools/half-life-calculator` |
| 11 | `/tools/standard-cell-potential` | `/tools/cell-potential-calculator` |
| 12 | `/tools/nernst-equation` | `/tools/cell-potential-calculator` |
| 13 | `/tools/q-mc-delta-t` | `/tools/calorimetry-calculator` |

### C. Natural Redirect Count
All 13 are natural redirects. Total: **13**

### D. Survivor UI Changes Required

| Change | File | Required? |
|--------|------|-----------|
| Remove `mode === 'indefinite'` banner block (L20–30) | `IntegralCalculator.astro` | **YES — eliminates dangling link to retiring URL** |
| Remove `let mode` and slug detection (L5–6) | `IntegralCalculator.astro` | **YES — dead code after merge** |

### E. toolContent.ts Entries to Remove

| Key | Line | Action |
|-----|------|--------|
| `"q-mc-delta-t"` | L453 | Remove |
| `"definite-integral-calculator"` | L497 | Remove |
| `"nernst-equation"` | L648 | Remove |

### F. Implementation Steps (when approved)

1. `src/data/registry.ts` — Remove 13 retiring tool blocks
2. `astro.config.mjs` — Add 13 permanent redirect rules (total 75)
3. `src/data/toolContent.ts` — Remove 3 content entries
4. `src/components/tools/IntegralCalculator.astro` — Remove dead-code indefinite banner
5. `npm run build` — Verify 119 active pages + 75 redirect artifacts = 194 total HTML; 0 broken links

### G. Risks

| Risk | Severity | Mitigation |
|------|----------|------------|
| Dangling link `/tools/definite-integral-calculator` in `IntegralCalculator.astro` | MEDIUM | Removed by eliminating the indefinite banner block |
| `TriangleCalculator.astro` `isRight` branch becomes dead code | LOW | Cosmetic; no functional impact |
| `half-life-nuclear` covers broader formula than survivor | LOW | Both generic at current impl depth |
| `nernst-equation` formula differs from survivor | LOW | Closest available electrochemistry tool |

---

*Generated: READ-ONLY. No source code was modified to produce this document.*

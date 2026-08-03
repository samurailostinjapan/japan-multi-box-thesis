# Japan's Slow Compression

**Fiscal Dominance, Policy Collision, and the Transition from Managed Stability to Market-Driven Constraint**

[Read the published monograph](https://samurailostinjapan.github.io/japan-multi-box-thesis/)

Japan is not approaching a conventional sovereign default or a single dramatic collapse. It is entering a regime in which fiscal, monetary, demographic, household, corporate, energy, financial, and political constraints are tightening at the same time. Policies that relieve one pressure increasingly intensify another.

This repository contains the full 11-chapter independent research monograph and the MkDocs Material site used to publish it.

## Publication facts

- Evidence cutoff: July 31, 2026
- Length: 69,291 words
- Chapters: 11
- Chapter footnotes: 232
- Scenario horizon: 2027–2045

## Manuscript

1. [The Japanese Stability Puzzle](docs/chapters/chapter-01-introduction-japanese-stability-puzzle.md)
2. [Literature, Analytical Framework, and Method](docs/chapters/chapter-02-literature-framework-method.md)
3. [The Construction and Exhaustion of the Old Stability Regime](docs/chapters/chapter-03-construction-exhaustion-old-stability-regime.md)
4. [Fiscal Dominance and the Refinancing Constraint](docs/chapters/chapter-04-fiscal-dominance-and-refinancing-constraint.md)
5. [The Bank of Japan, the JGB Market, and the Yen](docs/chapters/chapter-05-bank-of-japan-jgb-market-yen.md)
6. [Domestic Transmission: Households, Firms, SMEs, and Banks](docs/chapters/chapter-06-domestic-transmission-households-firms-smes-banks.md)
7. [Demographic Compression](docs/chapters/chapter-07-demographic-compression.md)
8. [Political Management and the Subsidy State](docs/chapters/chapter-08-political-management-and-subsidy-state.md)
9. [The Multi-Box Compression Mechanism](docs/chapters/chapter-09-multi-box-compression-mechanism.md)
10. [Scenarios, Warning Signals, and Falsification](docs/chapters/chapter-10-scenarios-warning-signals-falsification.md)
11. [Conclusion: The Erosion of Policy Sovereignty](docs/chapters/chapter-11-conclusion-erosion-policy-sovereignty.md)

## Local build

```bash
python -m venv .venv
. .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

The production workflow runs `mkdocs build --strict` and deploys the generated site to GitHub Pages after updates reach `main`.

## Editorial rules

- Facts, mechanism-based inferences, stress estimates, and scenarios remain distinct.
- Official projections are conditional models, not automatically accepted forecasts.
- Debt service is not used interchangeably with interest expense or gross issuance.
- “Slow compression” means narrowing policy freedom and rising distributional cost. It does not imply imminent insolvency.

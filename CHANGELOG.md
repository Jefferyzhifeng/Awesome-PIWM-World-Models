# Changelog

All notable updates to this repository are documented here.

## 2026-05-18 — Survey-style refactor

### Added
- Survey-paper-style README with abstract, seven framework contributions, scissor argument, four integration mechanisms, 4×5 application matrix, capability matrix highlights, four-phase roadmap, and dual-threshold hypothesis.
- Five publication-quality figures (`assets/figures/figure1_landscape.png` through `figure5_coverage.png`) plus hero overview image — copied from the companion survey manuscript.
- Vector PDF figure exports under `assets/figures/pdf/` for academic reuse with attribution.
- Homepage (`index.html`) rebuilt as a survey landing page: abstract panel, seven-contribution card grid, scissor-argument figure, four-mechanism cards with Figure 2, 4×5 matrix with Figure 5, quantitative-benchmark findings, four-phase roadmap with Figure 4, dual-threshold callout, citation block.
- Full bilingual (EN / 中文) translation strings for every new section in `assets/main.js`.
- New CSS components: `.contrib-grid`, `.contrib-card`, `.section-kicker`, `.figure-block`, `.phase-card`, `.findings-list`, `.dual-quote`, `.cite-block` in `assets/style.css`.

### Improved
- Top navigation now reflects survey structure: Abstract → Contributions → Mechanisms → Matrix → Roadmap → Resources.
- Hero meta chips report manuscript metadata (52 pages · 265 references · 5 figures · target *Proc. IEEE*).
- Open Graph metadata added for social-card previews.

### Repository status
- Companion to the manuscript "Physics-Informed World Models for Medical Imaging: A Survey and Technology Roadmap", target *Proceedings of the IEEE*.
- Manuscript: 52 pages, 265 references, 5 figures, 0 errors, 0 undefined citations.

---

## 2026-05-18 — Initial release

### Added
- Initial Awesome repository scaffold with 8 thematic lists.
- GitHub Pages homepage with overview image and curated navigation.
- Survey-backed resource population across foundations, methods, benchmarks, toolkits, and reproducibility.
- Chinese-first resource list with bilingual anchors.
- Lists index page at `lists/index.html` with local search.
- Homepage bilingual toggle (EN/中文) with persistent language preference.

### Improved
- README structure with curation status and entry format conventions.
- CONTRIBUTING guide with entry templates and PR checklist.
- Homepage UX with quick navigation, searchable section cards, and featured-paper highlights.

---
name: run-qa-automation-portfolio
description: Build, run, and drive the qa-automation-portfolio site (React/Vite SPA). Use when asked to start/run the portfolio, take a screenshot of it, verify a UI change, check for console errors, or smoke-test the site after edits to src/App.tsx or src/styles.css.
---

Vite/React single-page app (no backend). Driven headlessly via the
Playwright driver in this skill directory —
`.claude/skills/run-qa-automation-portfolio/driver.mjs`.

All paths below are relative to the repo root
(`qa-automation-portfolio/`).

## Prerequisites

Node.js (already required by the project) and Playwright's Chromium
build. Chromium is expected to already be cached at
`~/Library/Caches/ms-playwright` on this machine — if `driver.mjs`
fails with a "browser not found" error, install it once:

```bash
npx playwright install chromium
```

## Setup

```bash
npm install            # project deps
npm install -D playwright@1.62.1   # driver dependency (matches this repo's package-lock)
```

No build step is needed to run the dev server (Vite serves `src/`
directly). `npm run build` (runs `tsc && vite build`) only matters if
you need a production bundle in `dist/`.

## Run (agent path)

1. Start the dev server in the background and wait for it to actually
   serve (don't `sleep` a fixed time — poll the port):

   ```bash
   npm run dev -- --port 5173 --strictPort > /tmp/vite-dev.log 2>&1 &
   disown
   until curl -sf http://localhost:5173/ >/dev/null; do sleep 0.5; done
   ```

2. Drive it with the Playwright script:

   ```bash
   node .claude/skills/run-qa-automation-portfolio/driver.mjs smoke
   ```

   This runs one representative flow: load the homepage, scroll to
   Case Studies, flip the first case-study card, switch the UI to
   French — and prints any browser console errors. Screenshots land
   in `.claude/skills/run-qa-automation-portfolio/screenshots/`:

   | file | what it shows |
   |---|---|
   | `01-home.png` | hero section on load |
   | `02-case-studies.png` | case-study grid, front (resume-summary) side |
   | `03-case-study-flipped.png` | first card flipped to the back (description/achievements) side |
   | `04-lang-fr.png` | UI after switching language to French |

   Look at the PNGs, don't just trust the exit code — a blank or
   half-rendered frame is a failure even if no console error fired.

3. For a single ad-hoc screenshot instead of the full flow:

   ```bash
   node .claude/skills/run-qa-automation-portfolio/driver.mjs screenshot /#case-studies /tmp/case-studies.png
   ```

4. Stop the dev server when done:

   ```bash
   lsof -ti:5173 -sTCP:LISTEN | xargs -r kill
   ```

## Run (human path)

```bash
npm run dev
```

Opens on `http://localhost:5173/`; open it in an actual browser.
`Ctrl-C` to stop.

## Test

No automated test suite exists in this repo yet — `npm run build`
(which runs `tsc --noEmit` via the `build` script) is the only
verification step besides the driver above. Run it after any `.tsx`
change:

```bash
npm run build
```

---

## Gotchas

- **French copy != English copy structure.** The FR case-studies
  section title (`#case-studies-title`) reads "Expérience projet",
  *not* a literal translation of the EN title, and the kicker
  ("Études de cas") is a different string from the title. Don't guess
  translated text for `waitFor`/assertions — read the actual string
  out of `uiText.fr` in `src/App.tsx` first.
- **`npm run dev &` alone won't let you `kill` it later** — `$!` is
  the `npm` wrapper's PID, and npm doesn't forward `SIGTERM` to the
  Vite child it spawns. Kill by port (`lsof -ti:5173 ... | xargs kill`),
  not by PID.
- **Case-study cards are a CSS 3D flip**, not a route change —
  `.case-study-flip.is-flipped` is the class to wait for after
  clicking a card, not a URL or new DOM subtree.

## Troubleshooting

- **`page.waitForSelector: Timeout 30000ms exceeded` on the FR
  title check**: the selector was checking for the wrong translated
  string (see Gotchas above). Fix the expected text, not the wait
  logic.
- **`EADDRINUSE` on dev server start**: a previous `npm run dev` is
  still bound to 5173. `lsof -ti:5173 -sTCP:LISTEN | xargs -r kill`
  before relaunching.

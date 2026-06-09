# SeanGormann.github.io

Personal site for [Seán Gorman](https://seangormann.github.io) — deployed to GitHub Pages via a Vite + React + TypeScript build.

---

## Stack

| Layer | Tech |
|-------|------|
| Framework | React 19 + TypeScript |
| Build tool | Vite 6 |
| Styling | Tailwind CSS v4 |
| Routing | React Router v7 (HashRouter — GitHub Pages compatible) |
| CV PDF | Python 3 + ReportLab |

---

## Repo layout

```
├── src/
│   ├── App.tsx                  # Route definitions
│   ├── main.tsx                 # React entry point
│   ├── index.css                # Tailwind + custom theme tokens
│   ├── components/
│   │   └── Layout.tsx           # Nav bar + footer shell
│   └── pages/
│       ├── Home.tsx             # Landing page / core domains
│       ├── Research.tsx         # Research work
│       ├── Engineering.tsx      # Projects & infrastructure
│       ├── CV.tsx               # On-site CV (reads data/cv.json)
│       └── About.tsx            # Bio + contact links
│
├── data/
│   ├── cv.json                  # ← single source of truth for CV content
│   ├── profile.json             # Personal info, bio, education, career
│   ├── projects.json            # Project details
│   ├── publications.json        # Academic publications
│   ├── images/                  # Site images
│   └── files/
│       └── SeanGorman-CV.pdf    # OLD — no longer used
│
├── public/
│   └── files/
│       └── SeanGorman-CV.pdf    # Generated PDF (Vite copies to dist/, served for download)
│
├── cv/
│   ├── generate_cv.py           # ReportLab PDF generator (reads data/cv.json)
│   ├── build.sh                 # One-command CV build script
│   └── .venv/                   # Auto-created Python venv (gitignored)
│
├── index.html                   # Vite HTML entry
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Local development

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev       # → http://localhost:3000
```

---

## Deploying to GitHub Pages

This site uses `HashRouter` so all navigation works as static files — no server-side routing required.

### First-time setup

1. Go to your repo on GitHub → **Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [master]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - uses: actions/deploy-pages@v4
        id: deployment
```

4. Push to `master` — GitHub Actions builds and deploys automatically on every push.

> The `.nojekyll` file in the repo root tells GitHub Pages not to run Jekyll on the output.

---

## Updating the CV

All CV content lives in **`data/cv.json`**. Edit that file, then run one command to regenerate the PDF:

```bash
./cv/build.sh
```

On first run this creates a Python venv at `cv/.venv/` and installs ReportLab — subsequent runs are instant.

The script outputs `public/files/SeanGorman-CV.pdf`. Commit both the JSON and the PDF together:

```bash
git add data/cv.json public/files/SeanGorman-CV.pdf
git commit -m "update CV"
git push
```

The site page (`/cv`) and the downloadable PDF are then both updated in one push.

### cv.json structure

```jsonc
{
  "header":       { "name", "phone", "email", "linkedin", "github", "kaggle" },
  "projects":     [ { "name", "description" } ],
  "experience":   [ { "role", "company", "period", "sections": [ { "heading", "bullets" } ] } ],
  "education":    [ { "degree", "institution", "period", "thesis", "modules" } ],
  "awards":       [ { "title", "description" } ],
  "skills":       [ "tag", ... ],
  "publications": [ "citation string with inline <b>HTML</b> ok" ]
}
```

Bullet strings support inline HTML (`<b>`, `<i>`, `&amp;` etc.) — both the PDF generator and the React page render it correctly.

---

## Tailwind v4 note

This project uses Tailwind CSS v4, which maps `max-w-{size}` / `p-{size}` etc. to custom spacing tokens defined in `src/index.css` under `@theme`. The tokens are:

| Token | Value |
|-------|-------|
| `xs` | 8px |
| `sm` | 16px |
| `md` | 24px |
| `lg` | 48px |
| `xl` | 80px |

Avoid using `max-w-sm`, `max-w-lg` etc. as width constraints — use explicit values like `max-w-[32rem]` or `max-w-2xl` instead.

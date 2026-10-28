# mohitkhanduri.com

Personal site of Mohit Khanduri, product analytics engineer. Built with [Astro](https://astro.build), deployed on Cloudflare Pages.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
```

## Where things live

| Path | What |
|---|---|
| `src/data/site.ts` | All reusable copy: headline, principles, case-study cards, lab, build log, Now, CV timeline and stack |
| `src/pages/` | One file per page: home, How I build, CV, `work/*` case studies, `lab/*` projects |
| `src/layouts/CaseStudy.astro` | Shared case-study template (problem, what I built, decisions, results, stack) |
| `src/components/Flow.astro` | Simple architecture diagram used on case-study pages |
| `public/` | Favicon, link-preview image, robots.txt |

Add a build-log note by adding an entry to `buildLog` in `src/data/site.ts` (newest first).

## Deploy

Cloudflare Pages builds every push to `main`: build command `npm run build`, output directory `dist`.

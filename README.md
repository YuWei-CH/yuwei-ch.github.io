# Yuwei (Peter) Sun — Portfolio

Static personal site built with Astro and Tailwind CSS. It includes a home page, an involvement page, and a creative interests page, each available in English and Chinese through the language toggle.

## Local development

Use Node.js 22 or newer (22.12.0 minimum).

```bash
npm ci
npm run dev
```

Open the local URL printed by Astro, usually `http://localhost:4321/`.

## Content and layout

- English content is in `src/config/*.ts`, assembled by `src/config/locales/en.ts`.
- Chinese content is in `src/config/locales/zh.ts`.
- Both locales follow `src/config/schema.ts`. Entries in each collection use matching, unique `id` values and the same order. `src/config.ts` checks this during a build.
- `src/layouts/BaseLayout.astro` owns the shared page head, header, language toggle, and footer. Page content is in `src/pages/`; presentation components are in `src/components/`.

When adding an experience, project, news item, or other collection entry, add its translation with the same `id` in the corresponding position. The language toggle updates the page title and description along with visible content.

## Validation and deployment

```bash
npm run check
npm run build
```

`check` runs Astro's type and template diagnostics. `build` runs that check and then builds the three static pages, including the bilingual entry validation. Pull requests run the build in `.github/workflows/check.yml`. The GitHub Pages workflow in `.github/workflows/deploy.yml` builds and deploys the `dist/` output on pushes to `master` or manual dispatch.

# Studio Concept

A Polish-language portfolio concept for a fictional hand and foot care studio, built with React, Vite and Tailwind CSS.

This is a design demonstration, not an operating business. Service descriptions are illustrative. The page has no booking, contact, map, social profile, or customer review integrations.

## Development

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Run `npm run build` to create a prerendered production build in `dist/`, and `npm run preview` to preview that build.

Page sections are in `src/components/`. Edit illustrative service descriptions in `src/content.js`, and shared colours and typography in `src/styles.css`.

Decorative website images are tracked in `public/images/` and copied into the production build.

## GitHub Pages

The deployment workflow is manually triggered. Enable **GitHub Actions** in Settings → Pages, then run **Deploy to GitHub Pages** from the Actions tab and select the desired branch. Hosting from a private repository requires an eligible GitHub plan.

The workflow derives `VITE_BASE_PATH` from the repository name, so it follows a repository rename. Local development uses `/` by default. For a custom domain, set the workflow’s `VITE_BASE_PATH` to `/`.

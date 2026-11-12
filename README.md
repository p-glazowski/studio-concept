# Studio Concept

A Polish-language portfolio concept for a fictional hand and foot care studio, built with React, Vite and Tailwind CSS.

This portfolio website presents a fictional studio with finished, customer-facing Polish copy. Service descriptions and testimonials with fictional names are invented sample content, not claims about a real business or real customer reviews. Booking controls are intentionally inert buttons with no handlers, external links, forms or backend. The displayed phone number (+48 000 000 000) is an invalid placeholder; its call button is also intentionally inert and does not invoke a dialer. No former client information is included.

## Development

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Run `npm run build` to create a prerendered production build in `dist/`, and `npm run preview` to preview that build.

Page sections are in `src/components/`. Edit service descriptions and fictional sample reviews in `src/content.js`, and shared colours and typography in `src/styles.css`.

Decorative website images are tracked in `public/images/` and copied into the production build.

## GitHub Pages

The deployment workflow is manually triggered. Enable **GitHub Actions** in Settings → Pages, then run **Deploy to GitHub Pages** from the Actions tab and select the desired branch. Hosting from a private repository requires an eligible GitHub plan.

The workflow derives `VITE_BASE_PATH` from the repository name, so it follows a repository rename. Local development uses `/` by default. For a custom domain, set the workflow’s `VITE_BASE_PATH` to `/`.

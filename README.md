# Practical AI Systems (magic-portfolio)

Marketing site for practical AI workflows, templates, automations, and services for small business owners. Built on the [Once UI magic-portfolio](https://demo.magic-portfolio.com) template with App Router + MDX blog.

**Production project path:** `paraileial.com/magic-portfolio`

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in before launch
npm run dev
```

## Quality gate

```bash
npm run check          # lint + typecheck + audit:content + build
AUDIT_STRICT=1 npm run audit:content   # production integration checks
```

> **Note:** Next.js 16 removed the `next lint` CLI. `npm run lint` runs `tsc --noEmit` (strict TypeScript). Biome is available via `npm run biome-write` for formatting.

See `LAUNCH_CHECKLIST.md`, `CONTENT_EDITING.md`, and `SECURITY.md`.

## Environment variables

Copy `.env.example` → `.env.local`. Required before launch:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_NEWSLETTER_FORM_ACTION` (or `NEXT_PUBLIC_NEWSLETTER_DISABLED=true`)
- `NEXT_PUBLIC_CHECKOUT_*` per available product
- `NEXT_PUBLIC_BOOKING_URL` (or use email fallback on `/contact`)

## Where to edit content

| Content | File |
|---------|------|
| Site identity / CTAs | `src/resources/content.tsx`, `src/resources/site.ts` |
| Products | `src/resources/products.ts` |
| Services | `src/resources/services.ts` |
| Case studies | `src/resources/case-studies.ts` |
| Blog posts | `src/app/blog/posts/*.mdx` |
| Routes on/off | `src/resources/once-ui.config.ts` |

---

## Upstream template notes

![Magic Portfolio](public/images/og/home.jpg)

## Getting started

**1. Clone the repository**
```
git clone https://github.com/once-ui-system/magic-portfolio.git
```

**2. Install dependencies**
```
npm install
```

**3. Run dev server**
```
npm run dev
```

**4. Edit config**
```
src/resources/once-ui.config.js
```

**5. Edit content**
```
src/resources/content.js
```

**6. Create blog posts / projects**
```
Add a new .mdx file to src/app/blog/posts or src/app/work/projects
```

Magic Portfolio was built with [Once UI](https://once-ui.com) for [Next.js](https://nextjs.org). It requires Node.js v18.17+.

## Documentation

Docs available at: [docs.once-ui.com](https://docs.once-ui.com/docs/magic-portfolio/quick-start)

## Features

### Once UI
- All tokens, components & features of [Once UI](https://once-ui.com)

### SEO
- Automatic open-graph and X image generation with next/og
- Automatic schema and metadata generation based on the content file

### Design
- Responsive layout optimized for all screen sizes
- Timeless design without heavy animations and motion
- Endless customization options through [data attributes](https://once-ui.com/docs/theming)

### Content
- Render sections conditionally based on the content file
- Enable or disable pages for blog, work, gallery and about / CV
- Generate and display social links automatically
- Set up password protection for URLs

### Localization
- A localized, earlier version of Magic Portfolio is available with the next-intl library
- To use localization, switch to the 'i18n' branch

## Creators

Lorant One: [Threads](https://www.threads.net/@lorant.one) / [LinkedIn](https://www.linkedin.com/in/lorant-one/)

## Get involved

- Join the Design Engineers Club on [Discord](https://discord.com/invite/5EyAQ4eNdS) and share your project with us!
- Deployed your docs? Share it on the [Once UI Hub](https://once-ui.com/hub) too! We feature our favorite apps on our landing page.

## License

Distributed under the CC BY-NC 4.0 License.
- Attribution is required.
- Commercial usage is not allowed.
- You can extend the license to [Dopler CC](https://dopler.app/license) by purchasing a [Once UI Pro](https://once-ui.com/pricing) license.

See `LICENSE.txt` for more information.

## Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fonce-ui-system%2Fmagic-portfolio&project-name=portfolio&repository-name=portfolio&redirect-url=https%3A%2F%2Fgithub.com%2Fonce-ui-system%2Fmagic-portfolio&demo-title=Magic%20Portfolio&demo-description=Showcase%20your%20designers%20or%20developer%20portfolio&demo-url=https%3A%2F%2Fdemo.magic-portfolio.com&demo-image=%2F%2Fraw.githubusercontent.com%2Fonce-ui-system%2Fmagic-portfolio%2Fmain%2Fpublic%2Fimages%2Fog%2Fhome.jpg)
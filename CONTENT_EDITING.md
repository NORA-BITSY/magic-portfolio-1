# Content editing guide

## Site-wide settings

Edit environment variables (see `.env.example`) for domain, contact email, booking, newsletter, checkout URLs, and analytics.

Runtime config helpers live in `src/resources/site.ts`.

## Products

File: `src/resources/products.ts`

1. Add a new entry to the `products` array with a unique `slug`.
2. Set `availability` to `"available"` or `"comingSoon"`.
3. Add matching `NEXT_PUBLIC_CHECKOUT_<SLUG>` in production env (see `.env.example`).
4. List related slugs in `relatedSlugs` (must exist).

Store pages are generated automatically at `/store/[slug]`.

## Blog posts

Add an MDX file under `src/app/blog/posts/your-slug.mdx` with frontmatter:

```yaml
---
title: "Post title"
publishedAt: "2026-01-15"
summary: "Short description"
tag: "Automation Workflows"
---
```

Posts appear on `/blog` and `/blog/[slug]` automatically.

## Case studies

File: `src/resources/case-studies.ts`

Keep illustrative examples labeled clearly. Link `relatedProductSlug` to a real product slug.

## Services

File: `src/resources/services.ts`

Update `ctaHref` (usually `/contact`). Booking URL comes from env, not this file.

## Navigation

Enabled routes: `src/resources/once-ui.config.ts` → `routes` object.

Do not enable `/work` or `/gallery` unless you intend to ship those pages.

## Avoid broken launches

Run before deploy:

```bash
npm run audit:content
```

With strict production checks:

```bash
AUDIT_STRICT=1 npm run audit:content
```

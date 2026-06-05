# Security

## Response headers

Production responses include (via `next.config.mjs`):

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Frame-Options: DENY`
- `Permissions-Policy` (camera, microphone, geolocation, etc. disabled)
- `Content-Security-Policy` (restrictive baseline; see below)

## Content-Security-Policy

- **default-src** `'self'`
- **script-src** `'self'`, `'unsafe-inline'`, Plausible, Google Tag Manager (only if analytics env vars are set)
- **style-src** `'self'`, `'unsafe-inline'` (required by current Once UI / theme init inline script)
- **form-action** `'self'` plus common newsletter provider origins (Mailchimp, ConvertKit, Beehiiv patterns)
- Checkout and booking use **link-out** (no Lemon Squeezy / Cal.com iframe embeds), so those script origins are not whitelisted.

If you add embedded checkout, calendar, or newsletter widgets, update CSP in `next.config.mjs` and document the new origins here.

## Environment variables

- Only `NEXT_PUBLIC_*` variables are exposed to the browser.
- Never commit `.env`, `.env.local`, or `.env.production`.
- Do not put API secrets in `NEXT_PUBLIC_*` names.

## Third-party domains (when configured)

| Service | Purpose |
|---------|---------|
| plausible.io | Analytics (optional) |
| googletagmanager.com / google-analytics.com | GA4 (optional) |
| Lemon Squeezy checkout URL | External checkout (link only) |
| Newsletter form action host | Email capture POST target |
| Booking URL host | External scheduling |

## Owner checklist before launch

1. Set all values in `.env.example` on the hosting provider (Vercel, etc.).
2. Run `npm run check` locally with `AUDIT_STRICT=1`.
3. Verify headers on the deployed preview (`curl -I https://your-domain/`).
4. Confirm CSP does not block newsletter forms or analytics after enabling them.

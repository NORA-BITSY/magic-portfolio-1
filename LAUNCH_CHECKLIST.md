# Launch checklist

## Brand and content

- [ ] Replace `/public/images/avatar.jpg` with your real headshot (or keep neutral placeholder)
- [ ] Confirm `NEXT_PUBLIC_FOUNDER_NAME` and about page copy
- [ ] Confirm `NEXT_PUBLIC_SITE_URL` matches production domain
- [ ] Review all product descriptions and pricing in `src/resources/products.ts`

## Integrations (launch blockers if selling / capturing leads)

- [ ] `NEXT_PUBLIC_NEWSLETTER_FORM_ACTION` — Mailchimp, Kit, or Beehiiv form action URL
- [ ] `NEXT_PUBLIC_CHECKOUT_*` — Lemon Squeezy checkout URL per available product
- [ ] `NEXT_PUBLIC_BOOKING_URL` — Cal.com, Calendly, or SavvyCal link (or rely on email fallback)
- [ ] `NEXT_PUBLIC_LINKEDIN_URL` / `NEXT_PUBLIC_X_URL` — only real profile URLs

## Analytics (optional)

- [ ] `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` **or** `NEXT_PUBLIC_GA_MEASUREMENT_ID`

## Legal

- [ ] Read `/privacy`, `/terms`, `/refund-policy` and adjust for your business
- [ ] Confirm refund window matches your actual policy

## Technical verification

```bash
npm run check
AUDIT_STRICT=1 npm run audit:content
npm run build && npm run start
```

- [ ] Visit `/sitemap.xml` and `/robots.txt`
- [ ] Spot-check mobile (360px, 390px)
- [ ] `curl -I` production URL for security headers
- [ ] Submit sitemap in Google Search Console

## Post-launch

- [ ] Test one newsletter signup
- [ ] Test one checkout link (test mode)
- [ ] Test booking link or email fallback on `/contact`

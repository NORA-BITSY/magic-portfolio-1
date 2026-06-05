/**
 * Single source of truth for site identity, integrations, and launch settings.
 * Owner: set values in `.env` (see `.env.example`) before production deploy.
 */

const trimTrailingSlash = (url: string) => url.replace(/\/+$/, "");

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Practical AI Systems",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
    "Practical AI workflows, templates, automations, and systems for small business owners.",
  url: trimTrailingSlash(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://paraileial.com",
  ),
  founderName: process.env.NEXT_PUBLIC_FOUNDER_NAME ?? "Patrick",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@paraileial.com",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "",
  newsletterFormAction: process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ACTION ?? "",
  newsletterEnabled: process.env.NEXT_PUBLIC_NEWSLETTER_DISABLED !== "true",
  lemonSqueezyStoreUrl: process.env.NEXT_PUBLIC_LEMON_SQUEEZY_STORE_URL ?? "",
  plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "",
  linkedInUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  xUrl: process.env.NEXT_PUBLIC_X_URL ?? "",
  youtubeUrl: process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "",
  primaryCta: {
    label:
      process.env.NEXT_PUBLIC_PRIMARY_CTA_LABEL ??
      "Get the Free AI Workflow Checklist",
    href: process.env.NEXT_PUBLIC_PRIMARY_CTA_HREF ?? "/free-checklist",
  },
  secondaryCta: {
    label:
      process.env.NEXT_PUBLIC_SECONDARY_CTA_LABEL ?? "Browse Tools & Templates",
    href: process.env.NEXT_PUBLIC_SECONDARY_CTA_HREF ?? "/store",
  },
} as const;

/** Per-product Lemon Squeezy (or other) checkout URLs — set before launch. */
export const productCheckoutEnvKeys: Record<string, string> = {
  "small-business-prompt-library": "NEXT_PUBLIC_CHECKOUT_SMALL_BUSINESS_PROMPT_LIBRARY",
  "ai-admin-starter-kit": "NEXT_PUBLIC_CHECKOUT_AI_ADMIN_STARTER_KIT",
  "lead-follow-up-automation-kit": "NEXT_PUBLIC_CHECKOUT_LEAD_FOLLOW_UP_AUTOMATION_KIT",
  "content-repurposing-workflow-kit":
    "NEXT_PUBLIC_CHECKOUT_CONTENT_REPURPOSING_WORKFLOW_KIT",
};

export function getProductCheckoutUrl(slug: string): string {
  const key = productCheckoutEnvKeys[slug];
  if (!key) return "";
  return (process.env[key] ?? "").trim();
}

export function absoluteUrl(path: string): string {
  const base = siteConfig.url;
  if (!path || path === "/") return base;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function isExternalUrl(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

export function isPlaceholderUrl(href: string): boolean {
  const h = href.trim().toLowerCase();
  if (!h || h === "#") return true;
  if (h.startsWith("#checkout")) return true;
  if (h.includes("localhost")) return true;
  if (h === "https://cal.com" || h === "http://cal.com") return true;
  if (h.includes("url/subscribe/post")) return true;
  if (h.includes("example.com")) return true;
  return false;
}

export function resolveBookingUrl(): string {
  const url = siteConfig.bookingUrl.trim();
  return isPlaceholderUrl(url) ? "" : url;
}

export function resolveNewsletterAction(): string {
  const action = siteConfig.newsletterFormAction.trim();
  return isPlaceholderUrl(action) ? "" : action;
}

/** Routes that must exist for launch (used by content audit). */
export const publicRoutes = [
  "/",
  "/start-here",
  "/store",
  "/services",
  "/blog",
  "/case-studies",
  "/about",
  "/free-checklist",
  "/contact",
  "/privacy",
  "/terms",
  "/refund-policy",
] as const;

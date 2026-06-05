#!/usr/bin/env node
/**
 * Content and launch-readiness audit. Run via: npm run audit:content
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "src");

const PLACEHOLDER_PATTERNS = [
  /#checkout/i,
  /\bTODO\b/i,
  /\bTBD\b/i,
  /\bLorem\b/i,
  /Founder Name/i,
  /your-email/i,
  /https:\/\/cal\.com\/?$/i,
  /url\/subscribe\/post/i,
  /https?:\/\/localhost/i,
  /noreply@example\.com/i,
];

const PUBLIC_ROUTES = [
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
];

const DISABLED_ROUTES = ["/work", "/gallery"];

let errors = [];
let warnings = [];

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) {
      if (name === "node_modules" || name === ".next") continue;
      walk(p, acc);
    } else if (/\.(tsx?|mdx|mjs|json)$/.test(name)) {
      acc.push(p);
    }
  }
  return acc;
}

function fail(msg) {
  errors.push(msg);
}
function warn(msg) {
  warnings.push(msg);
}

const strict =
  process.env.NODE_ENV === "production" || process.env.AUDIT_STRICT === "1";

// --- Parse products.ts ---
const productsFile = readFileSync(join(src, "resources/products.ts"), "utf8");
const slugMatches = [...productsFile.matchAll(/slug:\s*"([^"]+)"/g)];
const slugs = slugMatches.map((m) => m[1]);
const slugSet = new Set(slugs);
if (slugs.length !== slugSet.size) {
  fail("Duplicate product slugs in products.ts");
}

const envKeyMap = {
  "small-business-prompt-library": "NEXT_PUBLIC_CHECKOUT_SMALL_BUSINESS_PROMPT_LIBRARY",
  "ai-admin-starter-kit": "NEXT_PUBLIC_CHECKOUT_AI_ADMIN_STARTER_KIT",
  "lead-follow-up-automation-kit": "NEXT_PUBLIC_CHECKOUT_LEAD_FOLLOW_UP_AUTOMATION_KIT",
  "content-repurposing-workflow-kit":
    "NEXT_PUBLIC_CHECKOUT_CONTENT_REPURPOSING_WORKFLOW_KIT",
};

for (const slug of slugs) {
  const block = productsFile.slice(
    productsFile.indexOf(`slug: "${slug}"`),
    productsFile.indexOf(`slug: "${slug}"`) + 900,
  );
  const relatedMatch = block.match(/relatedSlugs:\s*\[([^\]]*)\]/);
  if (relatedMatch) {
    const related = [...relatedMatch[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]);
    for (const rel of related) {
      if (!slugSet.has(rel)) {
        fail(`Product "${slug}" references missing related slug "${rel}"`);
      }
    }
  }
  if (!/availability:\s*"available"/.test(block)) continue;
  const envKey = envKeyMap[slug];
  const envVal = (process.env[envKey] ?? "").trim();
  if (!envVal || PLACEHOLDER_PATTERNS.some((re) => re.test(envVal))) {
    const msg = `Product "${slug}" is available but ${envKey} is not set.`;
    if (strict) fail(msg);
    else warn(msg);
  }
}

// --- Blog slugs ---
const blogDir = join(src, "app/blog/posts");
const blogSlugs = readdirSync(blogDir)
  .filter((f) => f.endsWith(".mdx"))
  .map((f) => f.replace(/\.mdx$/, ""));
if (blogSlugs.length < 5) {
  fail(`Expected at least 5 blog posts, found ${blogSlugs.length}`);
}
if (blogSlugs.length !== new Set(blogSlugs).size) {
  fail("Duplicate blog slugs");
}

// --- Case study slugs ---
const caseFile = readFileSync(join(src, "resources/case-studies.ts"), "utf8");
const caseSlugs = [...caseFile.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
if (caseSlugs.length !== new Set(caseSlugs).size) {
  fail("Duplicate workflow example slugs");
}

// --- Nav/footer must not link to disabled routes ---
const headerFile = readFileSync(join(src, "components/Header.tsx"), "utf8");
const footerFile = readFileSync(join(src, "components/Footer.tsx"), "utf8");
for (const disabled of DISABLED_ROUTES) {
  if (headerFile.includes(`href="${disabled}"`) || footerFile.includes(`href="${disabled}"`)) {
    fail(`Nav/footer links to disabled route ${disabled}`);
  }
}

// --- Footer legal links ---
for (const legal of ["/privacy", "/terms", "/refund-policy"]) {
  if (!footerFile.includes(`href="${legal}"`)) {
    fail(`Footer missing link to ${legal}`);
  }
}

// --- Scan source for placeholders ---
const scanDirs = [join(src, "app"), join(src, "components"), join(src, "resources")];
for (const dir of scanDirs) {
  for (const file of walk(dir)) {
    const rel = relative(root, file);
    if (
      rel.includes("work/") ||
      rel.includes("gallery/") ||
      rel.endsWith("site.ts") ||
      rel.includes("scripts/audit-content")
    ) {
      continue;
    }
    const text = readFileSync(file, "utf8");
    for (const re of PLACEHOLDER_PATTERNS) {
      if (re.test(text)) {
        fail(`Placeholder pattern ${re} in ${rel}`);
      }
    }
    // Internal href audit (simple)
    const hrefs = [...text.matchAll(/href=["'](\/[^"'#?]+)["']/g)].map((m) => m[1]);
    for (const href of hrefs) {
      if (href.startsWith("/store/")) continue;
      if (href.startsWith("/blog/")) continue;
      if (DISABLED_ROUTES.includes(href)) {
        fail(`Link to disabled route ${href} in ${rel}`);
      }
      if (
        href.startsWith("/") &&
        !PUBLIC_ROUTES.includes(href) &&
        !href.startsWith("/store/") &&
        !href.startsWith("/blog/")
      ) {
        const pagePath = join(src, "app", href.slice(1), "page.tsx");
        try {
          statSync(pagePath);
        } catch {
          fail(`Internal link ${href} in ${rel} has no matching page`);
        }
      }
    }
  }
}

// --- Legal pages exist ---
for (const legal of ["privacy", "terms", "refund-policy"]) {
  try {
    statSync(join(src, "app", legal, "page.tsx"));
  } catch {
    fail(`Missing legal page: /${legal}`);
  }
}

// --- Production env ---
if (strict) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";
  if (!siteUrl || siteUrl.includes("localhost")) {
    fail("NEXT_PUBLIC_SITE_URL must be set to production domain");
  }
  const newsletter = process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ACTION ?? "";
  if (
    process.env.NEXT_PUBLIC_NEWSLETTER_DISABLED !== "true" &&
    (!newsletter || /url\/subscribe/.test(newsletter))
  ) {
    fail("NEXT_PUBLIC_NEWSLETTER_FORM_ACTION required (or set NEWSLETTER_DISABLED=true)");
  }
  const booking = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";
  if (!booking || /^https:\/\/cal\.com\/?$/i.test(booking)) {
    warn("NEXT_PUBLIC_BOOKING_URL not set — contact page uses email fallback");
  }
}

console.log("Content audit complete.");
if (warnings.length) {
  console.log("\nWarnings:");
  warnings.forEach((w) => console.log(`  ⚠ ${w}`));
}
if (errors.length) {
  console.error("\nErrors:");
  errors.forEach((e) => console.error(`  ✗ ${e}`));
  process.exit(1);
}
console.log("✓ No blocking content issues found.");

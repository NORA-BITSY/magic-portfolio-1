export type ProductCategory =
  | "starter-kits"
  | "automation-templates"
  | "prompt-packs"
  | "business-systems";

export type ProductAvailability = "available" | "comingSoon";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  priceLabel: string;
  category: ProductCategory;
  categoryLabel: string;
  featured: boolean;
  availability: ProductAvailability;
  includes: string[];
  forWho: string[];
  notFor: string[];
  useCases: string[];
  relatedSlugs: string[];
  seoTitle: string;
  seoDescription: string;
};

export const productCategories: Record<ProductCategory, string> = {
  "starter-kits": "AI Starter Kits",
  "automation-templates": "Automation Templates",
  "prompt-packs": "Prompt Packs",
  "business-systems": "Business Systems",
};

export const products: Product[] = [
  {
    slug: "small-business-prompt-library",
    name: "Small Business Prompt Library",
    tagline: "Practical prompts for everyday business tasks",
    description:
      "A curated library of prompts for marketing, operations, sales, admin, and customer support. Use them immediately without building a complicated system.",
    price: 29,
    priceLabel: "$29",
    category: "prompt-packs",
    categoryLabel: "Prompt Packs",
    featured: true,
    includes: [
      "25+ business-ready prompt templates",
      "Email, proposal, and SOP prompts",
      "Customer support response prompts",
      "Marketing and content prompts",
      "Notion and Google Doc formats",
      "Usage guide with examples",
    ],
    forWho: [
      "Solo operators and small teams",
      "Business owners new to AI",
      "Anyone rewriting the same emails and documents",
    ],
    notFor: [
      "Developers looking for API integrations",
      "Teams that need custom automation builds",
    ],
    useCases: [
      "Draft client emails faster",
      "Create SOPs from rough notes",
      "Generate social post variations",
      "Summarize customer feedback",
    ],
    availability: "available",
    relatedSlugs: ["ai-admin-starter-kit", "lead-follow-up-automation-kit"],
    seoTitle: "Small Business Prompt Library – Practical AI Systems",
    seoDescription:
      "Practical ChatGPT prompts for email, SOPs, marketing, and customer support for small business owners.",
  },
  {
    slug: "ai-admin-starter-kit",
    name: "AI Admin Starter Kit",
    tagline: "Handle repetitive admin work faster",
    description:
      "A practical set of prompts, templates, and workflows to draft emails, summarize meetings, extract tasks, create checklists, and organize weekly priorities.",
    price: 79,
    priceLabel: "$79",
    category: "starter-kits",
    categoryLabel: "AI Starter Kits",
    featured: true,
    includes: [
      "Email reply prompt templates",
      "Meeting summary workflow",
      "Task extraction prompts",
      "Weekly planning system",
      "Admin cleanup checklist",
      "Step-by-step SOPs",
    ],
    forWho: [
      "Solo business owners drowning in admin",
      "Operators managing inbox, calendar, and notes",
      "Teams that need consistent weekly planning",
    ],
    notFor: [
      "Businesses with dedicated admin staff and mature systems",
      "Teams looking for full CRM automation",
    ],
    useCases: [
      "Turn meeting notes into action items",
      "Draft routine email replies in your voice",
      "Build a weekly review habit",
      "Reduce scattered task lists",
    ],
    availability: "available",
    relatedSlugs: ["small-business-prompt-library", "lead-follow-up-automation-kit"],
    seoTitle: "AI Admin Starter Kit – Practical AI Systems",
    seoDescription:
      "Templates and workflows to handle admin, email, meetings, and weekly planning with AI.",
  },
  {
    slug: "lead-follow-up-automation-kit",
    name: "Lead Follow-Up Automation Kit",
    tagline: "Stop letting leads fall through the cracks",
    description:
      "A complete workflow map, email templates, and CRM setup guide to capture leads, qualify them, send follow-up, and track next steps consistently.",
    price: 149,
    priceLabel: "$149",
    category: "automation-templates",
    categoryLabel: "Automation Templates",
    featured: true,
    includes: [
      "Lead follow-up workflow map",
      "Qualification email templates",
      "CRM setup guide (no-code friendly)",
      "Follow-up sequence templates",
      "Reminder and tagging SOP",
      "Before/after process diagram",
    ],
    forWho: [
      "Consultants, agencies, and local businesses",
      "Teams getting leads from multiple channels",
      "Anyone with inconsistent follow-up",
    ],
    notFor: [
      "High-volume ecommerce with automated funnels",
      "Businesses without any lead flow yet",
    ],
    useCases: [
      "Unify leads from forms, email, and social",
      "Send timely follow-ups without sounding spammy",
      "Track pipeline in a simple CRM",
      "Set reminders for stalled conversations",
    ],
    availability: "available",
    relatedSlugs: ["ai-admin-starter-kit", "content-repurposing-workflow-kit"],
    seoTitle: "Lead Follow-Up Automation Kit – Practical AI Systems",
    seoDescription:
      "Workflow map, email templates, and CRM guide to stop losing leads.",
  },
  {
    slug: "content-repurposing-workflow-kit",
    name: "Content Repurposing Workflow Kit",
    tagline: "Turn one idea into a week of content",
    description:
      "A prompt chain, content calendar template, and repurposing SOP to turn one idea into emails, social posts, blog outlines, and short-form content.",
    price: 99,
    priceLabel: "$99",
    category: "business-systems",
    categoryLabel: "Business Systems",
    featured: false,
    includes: [
      "Content repurposing prompt chain",
      "Weekly content calendar template",
      "Platform-specific adaptation prompts",
      "Publishing checklist SOP",
      "Example workflow walkthrough",
    ],
    forWho: [
      "Creators, consultants, and agencies",
      "Teams producing content inconsistently",
      "Business owners who want to post more without starting from scratch",
    ],
    notFor: [
      "Brands with a full content team and established pipeline",
      "Businesses not creating any content yet",
    ],
    useCases: [
      "Repurpose blog posts into emails and social",
      "Plan a week of content from one core idea",
      "Maintain consistent posting rhythm",
      "Reduce blank-page syndrome",
    ],
    availability: "comingSoon",
    relatedSlugs: ["small-business-prompt-library", "ai-admin-starter-kit"],
    seoTitle: "Content Repurposing Workflow Kit – Practical AI Systems",
    seoDescription:
      "Turn one content idea into emails, social posts, and outlines with a repeatable workflow.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

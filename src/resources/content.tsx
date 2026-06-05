import {
  About,
  Blog,
  CaseStudiesPage,
  Contact,
  FreeChecklist,
  Gallery,
  Home,
  Newsletter,
  Person,
  ServicesPage,
  SiteCTA,
  Social,
  StartHere,
  Store,
  Work,
} from "@/types";
import { siteConfig } from "./site";

const person: Person = {
  firstName: "Patrick",
  lastName: "",
  name: "Patrick",
  role: "AI Systems Consultant",
  avatar: "/images/avatar.jpg",
  email: "hello@paraileial.com",
  location: "America/New_York",
  languages: ["English"],
};

const siteCTA: SiteCTA = {
  primaryLabel: siteConfig.primaryCta.label,
  primaryHref: siteConfig.primaryCta.href,
  secondaryLabel: siteConfig.secondaryCta.label,
  secondaryHref: siteConfig.secondaryCta.href,
};

const newsletter: Newsletter = {
  display: true,
  title: <>One practical AI workflow each week.</>,
  description: (
    <>
      Get simple examples, prompts, tool breakdowns, and automation ideas for small-business work.
      No jargon, no hype, no bloated tool stacks.
    </>
  ),
};

const social: Social = [
  ...(siteConfig.linkedInUrl
    ? [{ name: "LinkedIn", icon: "linkedin" as const, link: siteConfig.linkedInUrl, essential: true }]
    : []),
  ...(siteConfig.xUrl
    ? [{ name: "X", icon: "x" as const, link: siteConfig.xUrl, essential: true }]
    : []),
  {
    name: "Email",
    icon: "email",
    link: `mailto:${siteConfig.contactEmail}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "Practical AI Systems for Small Business",
  description:
    "Templates, workflows, and automations to help small businesses reduce busywork, improve follow-up, and build repeatable systems without technical overwhelm.",
  headline: <>Practical AI systems for small business owners who want less busywork.</>,
  featured: {
    display: true,
    title: <>Free resource — AI Workflow Checklist</>,
    href: "/free-checklist",
  },
  subline: (
    <>
      Get templates, automations, guides, and done-with-you workflows for follow-up, marketing, admin,
      client work, and everyday operations — without heavy jargon.
    </>
  ),
};

const startHere: StartHere = {
  path: "/start-here",
  label: "Start Here",
  title: "Start Here – Practical AI Systems",
  description:
    "Choose your path: learn the basics, download templates, or book implementation help for your small business.",
};

const store: Store = {
  path: "/store",
  label: "Store",
  title: "Templates & Toolkits – Practical AI Systems",
  description:
    "Practical AI resources for admin, marketing, sales, content, client onboarding, customer support, and operations.",
};

const servicesPage: ServicesPage = {
  path: "/services",
  label: "Services",
  title: "AI Automation Services – Practical AI Systems",
  description:
    "Practical AI and automation services for small teams. Audits, build sprints, consulting, and ongoing optimization.",
};

const caseStudiesPage: CaseStudiesPage = {
  path: "/case-studies",
  label: "Examples",
  title: "Workflow Examples – Practical AI Systems",
  description:
    "Illustrative before/after workflow examples showing the kinds of systems this site helps you build.",
};

const freeChecklist: FreeChecklist = {
  path: "/free-checklist",
  label: "Free Checklist",
  title: "Free AI Workflow Checklist – Practical AI Systems",
  description:
    "Download the free checklist to identify which small-business tasks you can simplify with AI this week.",
};

const contact: Contact = {
  path: "/contact",
  label: "Contact",
  title: "Book a Call – Practical AI Systems",
  description:
    "Tell me what is manual, repetitive, or messy in your business. I will help you decide what to automate, document, delegate, or leave alone.",
};

const about: About = {
  path: "/about",
  label: "About",
  title: "About – Practical AI Systems",
  description:
    "I help small-business owners turn scattered tasks into simple AI-assisted workflows without technical overwhelm.",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "/contact",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I help small-business owners turn scattered tasks into simple AI-assisted workflows.
        <br />
        <br />
        Most businesses do not need more random tools. They need clearer processes: how leads are
        handled, how follow-ups happen, how content gets created, how client work moves forward,
        and how repetitive admin gets reduced.
        <br />
        <br />
        This site exists to make AI practical. You will find templates, prompts, workflow kits,
        guides, and services designed for real business tasks — not abstract technology experiments.
        <br />
        <br />
        <strong>Principles I work by:</strong>
        <br />
        • Systems before tools — identify the repeatable process first
        <br />
        • AI without the tech fog — clear workflows for non-technical operators
        <br />
        • Small-business reality — built for messy inboxes, late follow-ups, and lean teams
        <br />• Templates plus implementation — start DIY or hire help when ready
      </>
    ),
  },
  work: {
    display: true,
    title: "What I Help With",
    experiences: [
      {
        company: "Admin & Operations",
        timeframe: "Core focus",
        role: "Reduce repetitive back-office work",
        achievements: [
          <>Email drafting, meeting summaries, task extraction, and weekly planning systems.</>,
          <>SOP creation and process documentation with AI-assisted templates.</>,
        ],
        images: [],
      },
      {
        company: "Sales & Lead Follow-Up",
        timeframe: "Core focus",
        role: "Improve response time and conversion",
        achievements: [
          <>Lead capture, qualification, follow-up sequences, and CRM workflows.</>,
          <>Pipeline visibility without overcomplicated sales stacks.</>,
        ],
        images: [],
      },
      {
        company: "Content & Marketing",
        timeframe: "Core focus",
        role: "Build repeatable content systems",
        achievements: [
          <>Content repurposing workflows that turn one idea into multiple assets.</>,
          <>Prompt libraries for consistent brand voice across channels.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false,
    title: "Background",
    institutions: [],
  },
  technical: {
    display: true,
    title: "Tool Stack",
    skills: [
      {
        title: "AI & Prompting",
        description: (
          <>ChatGPT, Claude, and custom prompt workflows for business tasks — emails, SOPs, summaries, and content.</>
        ),
        tags: [{ name: "ChatGPT" }, { name: "Claude" }],
        images: [],
      },
      {
        title: "No-Code Automation",
        description: (
          <>Make, Zapier, Tally, Airtable, and Notion for connecting forms, spreadsheets, email, and AI.</>
        ),
        tags: [{ name: "Make" }, { name: "Zapier" }, { name: "Airtable" }],
        images: [],
      },
      {
        title: "Business Systems",
        description: (
          <>CRM setup, intake forms, email sequences, content calendars, and handoff documentation.</>
        ),
        tags: [{ name: "Notion" }, { name: "Google Workspace" }],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Clear guides for using AI in everyday business work.",
  description:
    "Learn how to use AI tools, prompts, and no-code automations to simplify operations, create content, improve follow-up, and reduce manual admin.",
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
  startHere,
  store,
  servicesPage,
  caseStudiesPage,
  freeChecklist,
  contact,
  siteCTA,
};

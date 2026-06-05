export type Service = {
  slug: string;
  name: string;
  outcome: string;
  description: string;
  priceRange: string;
  timeline: string;
  deliverables: string[];
  process: string[];
  bestFor: string[];
  notFor: string[];
  cta: string;
  ctaHref: string;
};

export const services: Service[] = [
  {
    slug: "automation-audit",
    name: "AI Workflow Audit",
    outcome: "Find the best workflow opportunities in your business",
    description:
      "A focused 60–90 minute diagnostic to map your current process, identify high-leverage automation opportunities, and recommend practical next steps your team can maintain.",
    priceRange: "From $750",
    timeline: "60–90 min call + report within 5 business days",
    deliverables: [
      "Current workflow assessment",
      "Automation opportunity report",
      "Tool and approach recommendations",
      "Prioritized action plan",
      "Risk and constraint review",
    ],
    process: [
      "Pre-call intake questionnaire",
      "Live workflow walkthrough",
      "Opportunity scoring and prioritization",
      "Written report within 5 business days",
      "Optional follow-up Q&A session",
    ],
    bestFor: [
      "Business owners who know something needs to improve",
      "Teams unsure what to automate first",
      "Operators evaluating tools before committing",
    ],
    notFor: [
      "Businesses wanting full implementation in one call",
      "Teams with no repetitive workflows to improve",
    ],
    cta: "Book an automation audit",
    ctaHref: "/contact",
  },
  {
    slug: "workflow-build-sprint",
    name: "14-Day Build Sprint",
    outcome: "Build one complete automation from intake to handoff",
    description:
      "A done-with-you or done-for-you sprint to build one reliable workflow end-to-end — with documentation your team can actually use.",
    priceRange: "From $2,500",
    timeline: "Typically 14 days from kickoff to handoff",
    deliverables: [
      "One complete automation workflow",
      "Tool setup and configuration",
      "SOP and handoff documentation",
      "Team walkthrough session",
      "30-day post-launch support",
    ],
    process: [
      "Kickoff and scope definition",
      "Process mapping and tool selection",
      "Build, test, and refine",
      "Documentation and training",
      "Handoff and maintenance guide",
    ],
    bestFor: [
      "Businesses ready to implement after an audit",
      "Teams with a specific workflow pain point",
      "Operators who want it built correctly the first time",
    ],
    notFor: [
      "Businesses without a defined process to automate",
      "Teams needing multiple unrelated workflows at once",
    ],
    cta: "Apply for a build sprint",
    ctaHref: "/contact",
  },
  {
    slug: "ai-systems-consulting",
    name: "Done-With-You AI Setup",
    outcome: "Improve your tools, workflows, prompts, and SOPs",
    description:
      "Strategic consulting to improve how your team uses AI across marketing, admin, sales, and operations — without adding unnecessary complexity.",
    priceRange: "From $1,500",
    timeline: "1–3 sessions over 2–4 weeks",
    deliverables: [
      "Workflow and tool stack review",
      "Prompt and template optimization",
      "SOP improvements",
      "Team usage guidelines",
      "Implementation roadmap",
    ],
    process: [
      "Discovery and current-state review",
      "Gap analysis across key workflows",
      "Recommendations and prioritization",
      "Implementation support",
      "Follow-up review session",
    ],
    bestFor: [
      "Growing teams adopting AI inconsistently",
      "Businesses with tools but no clear systems",
      "Leaders who want team-wide consistency",
    ],
    notFor: [
      "Solo operators who only need one template kit",
      "Businesses expecting full done-for-you builds",
    ],
    cta: "Discuss consulting",
    ctaHref: "/contact",
  },
  {
    slug: "monthly-optimization",
    name: "AI Ops Retainer",
    outcome: "Maintain and improve automations over time",
    description:
      "Ongoing support to keep your automations running, fix what breaks, and incrementally improve workflows as your business evolves.",
    priceRange: "From $500/mo",
    timeline: "Monthly review + async improvements",
    deliverables: [
      "Monthly workflow health check",
      "Bug fixes and adjustments",
      "New automation opportunities",
      "Template and prompt updates",
      "Priority support channel",
    ],
    process: [
      "Monthly review call",
      "Async improvements between sessions",
      "Change log and documentation updates",
      "Quarterly systems review",
    ],
    bestFor: [
      "Businesses with live automations",
      "Teams without in-house automation expertise",
      "Operators who want continuous improvement",
    ],
    notFor: [
      "Businesses with no systems in place yet",
      "One-off project needs without ongoing maintenance",
    ],
    cta: "Request support",
    ctaHref: "/contact",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

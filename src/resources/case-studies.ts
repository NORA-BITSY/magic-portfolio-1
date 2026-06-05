/** Illustrative workflow examples — not verified client case studies. */
export type WorkflowExample = {
  slug: string;
  businessType: string;
  problem: string;
  beforeWorkflow: string;
  afterWorkflow: string;
  toolsInvolved: string[];
  whatChanged: string;
  risksHandled: string;
  relatedProduct?: string;
  relatedService?: string;
};

export const workflowExamples: WorkflowExample[] = [
  {
    slug: "solo-consultant-lead-follow-up",
    businessType: "Solo consultant (illustrative)",
    problem: "Leads come from multiple channels and follow-up is inconsistent.",
    beforeWorkflow:
      "Website form, email inbox, and social DMs tracked manually in a spreadsheet with no reminders.",
    afterWorkflow:
      "Intake form → CRM record → AI summary → follow-up email draft → reminder task",
    toolsInvolved: ["Tally", "Airtable", "Make", "Gmail", "ChatGPT"],
    whatChanged:
      "New leads land in one place, follow-up drafts are ready for review, and stalled conversations are visible.",
    risksHandled: "Personalized follow-ups reviewed before sending; no fully automated outreach.",
    relatedProduct: "lead-follow-up-automation-kit",
    relatedService: "workflow-build-sprint",
  },
  {
    slug: "agency-content-repurposing",
    businessType: "Small marketing agency (illustrative)",
    problem: "Content production starts from scratch for every platform.",
    beforeWorkflow:
      "One person writes a blog post; others manually adapt it for email, LinkedIn, and social each week.",
    afterWorkflow:
      "Core idea capture → prompt chain for platform variants → content calendar → publishing checklist",
    toolsInvolved: ["Notion", "ChatGPT", "Google Docs", "Buffer"],
    whatChanged:
      "One core idea becomes multiple assets with a repeatable review step before publishing.",
    risksHandled: "Human review before publishing; brand voice guidelines embedded in prompts.",
    relatedProduct: "content-repurposing-workflow-kit",
    relatedService: "ai-systems-consulting",
  },
  {
    slug: "local-service-admin-cleanup",
    businessType: "Local service business, solo operator (illustrative)",
    problem: "Admin work — emails, meeting notes, and weekly planning — consumes the owner's best hours.",
    beforeWorkflow:
      "Meeting notes in a notebook, tasks scattered across email flags and a phone app, weekly planning ad hoc.",
    afterWorkflow:
      "Meeting-to-tasks prompt workflow → weekly review template → email reply prompt library → priority checklist",
    toolsInvolved: ["Google Calendar", "Gmail", "Notion", "ChatGPT"],
    whatChanged:
      "Admin runs in focused blocks with a short weekly review and faster routine email handling.",
    risksHandled: "AI drafts reviewed before sending; sensitive client details excluded from prompts.",
    relatedProduct: "ai-admin-starter-kit",
    relatedService: "automation-audit",
  },
];

/** @deprecated Use workflowExamples */
export const caseStudies = workflowExamples;

export function getWorkflowExample(slug: string): WorkflowExample | undefined {
  return workflowExamples.find((c) => c.slug === slug);
}

export const getCaseStudy = getWorkflowExample;

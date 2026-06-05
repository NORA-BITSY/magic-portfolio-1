import { Button, Column, Heading, Meta, Row, Schema, Text, Icon } from "@once-ui-system/core";
import { baseURL, person, freeChecklist } from "@/resources";
import { Mailchimp } from "@/components";
import { CTABlock } from "@/components/shared/CTABlock";

export async function generateMetadata() {
  return Meta.generate({
    title: freeChecklist.title,
    description: freeChecklist.description,
    baseURL: baseURL,
    path: freeChecklist.path,
    image: `/api/og/generate?title=${encodeURIComponent(freeChecklist.title)}`,
  });
}

const checklistItems = [
  "Email replies and routine correspondence",
  "Meeting notes and action item extraction",
  "Lead capture and follow-up reminders",
  "Content repurposing from one core idea",
  "Client onboarding steps and handoffs",
  "Customer support FAQ responses",
  "Weekly planning and priority review",
  "SOP and process documentation",
  "Invoice and admin task routing",
  "Social media post drafting",
  "Proposal and estimate creation",
  "CRM data entry and lead tagging",
  "Calendar scheduling and reminders",
  "Feedback collection and summarization",
  "Team handoff and status updates",
];

const scorecardQuestions = [
  "How many hours per week go to repetitive admin?",
  "Do leads get followed up within 24 hours consistently?",
  "Are your business processes documented anywhere?",
  "Does your team use AI with consistent prompts?",
  "How many tools does one workflow touch before completion?",
];

export default function FreeChecklist() {
  return (
    <Column maxWidth="m" gap="xl" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={freeChecklist.title}
        description={freeChecklist.description}
        path={freeChecklist.path}
        image={`/api/og/generate?title=${encodeURIComponent(freeChecklist.title)}`}
        author={{ name: person.name, url: `${baseURL}/about`, image: `${baseURL}${person.avatar}` }}
      />

      <Column gap="m">
        <Heading variant="display-strong-m" wrap="balance">
          Free AI Workflow Checklist
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          15 small-business tasks you can simplify with AI this week. Use this checklist to identify
          what to automate first — without the tech fog.
        </Text>
      </Column>

      <Column
        padding="l"
        gap="m"
        border="neutral-alpha-weak"
        radius="l"
        background="surface"
      >
        <Heading as="h2" variant="heading-strong-l">
          What&apos;s in the checklist
        </Heading>
        <Column as="ul" gap="12" paddingLeft="16">
          {checklistItems.map((item) => (
            <Row as="li" key={item} gap="8">
              <Icon name="document" onBackground="brand-medium" size="s" />
              <Text variant="body-default-m">{item}</Text>
            </Row>
          ))}
        </Column>
        <Text variant="body-default-s" onBackground="neutral-weak">
          Delivered as a PDF + spreadsheet you can score and prioritize.
        </Text>
      </Column>

      <Mailchimp />

      <Column gap="l">
        <Heading as="h2" variant="display-strong-s">
          Small Business AI Readiness Scorecard
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Ask yourself these five questions to gauge whether AI automation will pay off for your
          business right now:
        </Text>
        <Column as="ol" gap="12" paddingLeft="16">
          {scorecardQuestions.map((q, i) => (
            <Row as="li" key={q} gap="8">
              <Text variant="label-default-s" onBackground="brand-medium">
                {i + 1}.
              </Text>
              <Text variant="body-default-m">{q}</Text>
            </Row>
          ))}
        </Column>
        <Button href="/contact" variant="secondary" size="s" arrowIcon>
          Take the scorecard on a call
        </Button>
      </Column>

      <Column
        padding="l"
        gap="m"
        border="neutral-alpha-weak"
        radius="l"
        background="brand-alpha-weak"
      >
        <Heading as="h2" variant="heading-strong-l">
          After you download
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Pick one task from the checklist. Implement it this week using a starter kit or a free
          prompt. If you want help prioritizing, the AI Admin Starter Kit and Automation Audit are
          the natural next steps.
        </Text>
        <Row gap="8" wrap>
          <Button href="/store/ai-admin-starter-kit" size="s">
            Get the AI Admin Starter Kit
          </Button>
          <Button href="/store" variant="secondary" size="s">
            Browse all kits
          </Button>
        </Row>
      </Column>

      <CTABlock
        headline="Start with the checklist"
        copy="No hype. No jargon. Just practical systems you can test."
        primaryLabel="Send me the workflows"
        primaryHref="#mc-embedded-subscribe-form"
        secondaryLabel="Book an automation audit"
        secondaryHref="/contact"
      />
    </Column>
  );
}

import { Button, Column, Heading, Meta, Row, Schema, Text, Icon } from "@once-ui-system/core";
import { baseURL, person, contact, about } from "@/resources";
import { CTABlock } from "@/components/shared/CTABlock";
import { resolveBookingUrl, siteConfig } from "@/resources/site";

export async function generateMetadata() {
  return Meta.generate({
    title: contact.title,
    description: contact.description,
    baseURL: baseURL,
    path: contact.path,
    image: `/api/og/generate?title=${encodeURIComponent(contact.title)}`,
  });
}

const intakeQuestions = [
  "What type of business do you run?",
  "What workflow feels most broken right now?",
  "What tools do you currently use?",
  "How many people are involved?",
  "What happens when the workflow fails?",
  "What kind of help do you want? (template, audit, done-with-you, done-for-you, ongoing support)",
  "What budget range are you considering?",
  "What timeline do you have in mind?",
];

const expectations = [
  "A 60–90 minute diagnostic call for audits",
  "A written opportunity report within 5 business days",
  "Clear recommendations — automate, document, delegate, or leave alone",
  "No pressure to buy services or products you do not need",
  "Your information is used only to prepare for our conversation — see our privacy policy",
];

export default function Contact() {
  const bookingUrl = resolveBookingUrl();

  return (
    <Column maxWidth="m" gap="xl" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={contact.title}
        description={contact.description}
        path={contact.path}
        image={`/api/og/generate?title=${encodeURIComponent(contact.title)}`}
        author={{ name: person.name, url: `${baseURL}/about`, image: `${baseURL}${person.avatar}` }}
      />

      <Column gap="m">
        <Heading as="h1" variant="display-strong-m" wrap="balance">
          Have a workflow you want to simplify?
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          Tell me what is currently manual, repetitive, or messy. I will help you identify whether it
          should be automated, documented, delegated, or left alone.
        </Text>
      </Column>

      <Column padding="l" gap="m" border="neutral-alpha-weak" radius="l" background="surface">
        <Heading as="h2" variant="heading-strong-l">
          Who this is for
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Service businesses, freelancers, consultants, agencies, and small teams (solo to ~15
          people) who want practical AI systems — not a full technical overhaul.
        </Text>
        {bookingUrl ? (
          <Button
            href={bookingUrl}
            size="m"
            arrowIcon
            suffixIcon="openLink"
            rel="noopener noreferrer"
            target="_blank"
          >
            Book an automation audit
          </Button>
        ) : (
          <Text variant="body-default-m" onBackground="neutral-weak">
            Online booking is not configured yet. Email{" "}
            <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a> to schedule
            an audit.
          </Text>
        )}
        <Button href={`mailto:${siteConfig.contactEmail}`} variant="secondary" size="s">
          Email inquiry: {siteConfig.contactEmail}
        </Button>
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="display-strong-s">
          What to expect
        </Heading>
        <Column as="ul" gap="12" paddingLeft="16">
          {expectations.map((item) => (
            <Row as="li" key={item} gap="8">
              <Icon name="arrowRight" onBackground="brand-medium" size="s" />
              <Text variant="body-default-m">{item}</Text>
            </Row>
          ))}
        </Column>
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="display-strong-s">
          Qualification questions
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Prepare answers to these before booking — they help us use call time efficiently:
        </Text>
        <Column as="ol" gap="8" paddingLeft="16">
          {intakeQuestions.map((q, i) => (
            <Row as="li" key={q} gap="8">
              <Text variant="label-default-s" onBackground="brand-medium">
                {i + 1}.
              </Text>
              <Text variant="body-default-s">{q}</Text>
            </Row>
          ))}
        </Column>
      </Column>

      <Column
        padding="l"
        gap="m"
        border="neutral-alpha-weak"
        radius="l"
        background="brand-alpha-weak"
      >
        <Heading as="h2" variant="heading-strong-l">
          While you wait
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Download the free checklist, read workflow examples, or browse starter kits.
        </Text>
        <Row gap="8" wrap>
          <Button href="/free-checklist" size="s">
            Get the free checklist
          </Button>
          <Button href="/case-studies" variant="secondary" size="s">
            Workflow examples
          </Button>
          <Button href="/store" variant="secondary" size="s">
            Browse starter kits
          </Button>
        </Row>
      </Column>

      <CTABlock
        headline="Book an automation audit"
        copy="The strongest first step for most businesses: a focused diagnostic to find your highest-leverage workflow opportunities."
        primaryLabel={bookingUrl ? "Book the audit" : "Email to book"}
        primaryHref={bookingUrl || `mailto:${siteConfig.contactEmail}`}
        secondaryLabel="Read about page"
        secondaryHref={about.path}
      />
    </Column>
  );
}

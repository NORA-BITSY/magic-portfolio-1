import { Button, Column, Grid, Heading, Meta, Row, Schema, Text } from "@once-ui-system/core";
import { baseURL, person, servicesPage } from "@/resources";
import { services } from "@/resources/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CTABlock } from "@/components/shared/CTABlock";

export async function generateMetadata() {
  return Meta.generate({
    title: servicesPage.title,
    description: servicesPage.description,
    baseURL: baseURL,
    path: servicesPage.path,
    image: `/api/og/generate?title=${encodeURIComponent(servicesPage.title)}`,
  });
}

const faqs = [
  {
    q: "Who are these services for?",
    a: "Service businesses, freelancers, consultants, agencies, and small teams (solo to ~15 people) who want practical AI systems without hiring a full technical team.",
  },
  {
    q: "Do I need to buy a product first?",
    a: "No. You can book an audit directly. Many people start with a free checklist or starter kit — but it is not required.",
  },
  {
    q: "What tools do you work with?",
    a: "Make, Zapier, Airtable, Notion, Tally, Gmail, Google Workspace, ChatGPT, Claude, and common small-business CRMs.",
  },
  {
    q: "What if I am not technical?",
    a: "That is exactly who these services are built for. Every system includes documentation and a handoff your team can maintain.",
  },
];

const goodFit = [
  "You have repeatable tasks eating your week",
  "You want clarity before buying more tools",
  "You are ready to implement one workflow at a time",
  "You value documentation and handoff, not just setup",
];

const notGoodFit = [
  "You want a fully automated business with no human review",
  "You need enterprise-scale custom software development",
  "You have no budget or time for a short diagnostic call",
];

export default function Services() {
  return (
    <Column maxWidth="m" gap="xl" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={servicesPage.title}
        description={servicesPage.description}
        path={servicesPage.path}
        image={`/api/og/generate?title=${encodeURIComponent(servicesPage.title)}`}
        author={{ name: person.name, url: `${baseURL}/about`, image: `${baseURL}${person.avatar}` }}
      />

      <Column gap="m">
        <Heading as="h1" variant="display-strong-m" wrap="balance">
          Need the workflow built with you?
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          If you know your business has repetitive tasks but you are not sure what to automate, I can
          help you map the process, choose the right tools, build the workflow, and hand it off in a
          way your team can actually use.
        </Text>
        <Button href="/contact" size="m" arrowIcon>
          Book an automation audit
        </Button>
      </Column>

      <Grid columns="2" s={{ columns: 1 }} fillWidth gap="16">
        {services.map((service) => (
          <Column
            key={service.slug}
            padding="l"
            gap="m"
            border="neutral-alpha-weak"
            radius="l"
            background="surface"
          >
            <ServiceCard service={service} />
            <Text variant="label-default-s" onBackground="neutral-weak">
              Timeline: {service.timeline}
            </Text>
            <Column gap="8">
              <Text variant="label-default-s" onBackground="neutral-weak">
                Deliverables
              </Text>
              <Column as="ul" gap="4" paddingLeft="16">
                {service.deliverables.map((d) => (
                  <Text as="li" key={d} variant="body-default-s">
                    {d}
                  </Text>
                ))}
              </Column>
            </Column>
            <Column gap="8">
              <Text variant="label-default-s" onBackground="neutral-weak">
                Process
              </Text>
              <Column as="ul" gap="4" paddingLeft="16">
                {service.process.map((step, i) => (
                  <Row as="li" key={step} gap="8">
                    <Text variant="label-default-s" onBackground="brand-medium">
                      {i + 1}.
                    </Text>
                    <Text variant="body-default-s">{step}</Text>
                  </Row>
                ))}
              </Column>
            </Column>
          </Column>
        ))}
      </Grid>

      <Grid columns="2" s={{ columns: 1 }} fillWidth gap="16">
        <Column padding="l" gap="m" border="neutral-alpha-weak" radius="l" background="surface">
          <Heading as="h2" variant="heading-strong-l">
            Good fit
          </Heading>
          <Column as="ul" gap="8" paddingLeft="16">
            {goodFit.map((item) => (
              <Text as="li" key={item} variant="body-default-s">
                {item}
              </Text>
            ))}
          </Column>
        </Column>
        <Column padding="l" gap="m" border="neutral-alpha-weak" radius="l" background="surface">
          <Heading as="h2" variant="heading-strong-l">
            Not a good fit
          </Heading>
          <Column as="ul" gap="8" paddingLeft="16">
            {notGoodFit.map((item) => (
              <Text as="li" key={item} variant="body-default-s" onBackground="neutral-weak">
                {item}
              </Text>
            ))}
          </Column>
        </Column>
      </Grid>

      <Column gap="l">
        <Heading as="h2" variant="display-strong-s">
          Frequently asked questions
        </Heading>
        <Column gap="12">
          {faqs.map((faq) => (
            <Column key={faq.q} padding="m" gap="8" border="neutral-alpha-weak" radius="m">
              <Text variant="heading-strong-m">{faq.q}</Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {faq.a}
              </Text>
            </Column>
          ))}
        </Column>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="display-strong-s">
          See example workflows
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Illustrative before/after examples — not verified client case studies.
        </Text>
        <Button href="/case-studies" variant="secondary" size="s" arrowIcon>
          View workflow examples
        </Button>
      </Column>

      <CTABlock
        headline="Apply for a build sprint"
        copy="Ready to implement? Tell me about the workflow you want to improve and we will determine if a build sprint is the right fit."
        primaryLabel="Apply for a build sprint"
        primaryHref="/contact"
        secondaryLabel="Download service guide"
        secondaryHref="/free-checklist"
      />
    </Column>
  );
}

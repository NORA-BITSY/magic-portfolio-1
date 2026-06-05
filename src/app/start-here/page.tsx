import { Button, Column, Grid, Heading, Meta, Row, Schema, Text, Icon } from "@once-ui-system/core";
import { baseURL, person, startHere, siteCTA } from "@/resources";
import { getFeaturedProducts } from "@/resources/products";
import { ProductCard } from "@/components/store/ProductCard";
import { CTABlock } from "@/components/shared/CTABlock";

export async function generateMetadata() {
  return Meta.generate({
    title: startHere.title,
    description: startHere.description,
    baseURL: baseURL,
    path: startHere.path,
    image: `/api/og/generate?title=${encodeURIComponent(startHere.title)}`,
  });
}

const paths = [
  {
    title: "I am brand new to AI",
    description: "Start with the free checklist and beginner guides to understand what actually helps.",
    steps: ["Download the AI Workflow Checklist", "Read: What Should a Small Business Automate First?", "Try 3 prompts from the free sample"],
    cta: "Get the free checklist",
    href: "/free-checklist",
  },
  {
    title: "I want templates I can use today",
    description: "Browse starter kits for admin, lead follow-up, and content workflows.",
    steps: ["Browse the Prompt Library ($29)", "Pick one workflow kit for your biggest pain", "Implement one system this week"],
    cta: "Browse the store",
    href: "/store",
  },
  {
    title: "I want someone to build it with me",
    description: "Book an audit or apply for a workflow build sprint.",
    steps: ["Book an automation audit", "Review the opportunity report", "Decide: DIY with kits or hire for implementation"],
    cta: "Book an automation audit",
    href: "/contact",
  },
];

const roadmap = [
  { step: "1", title: "Identify one repetitive task", detail: "Pick something that happens weekly and drains your time." },
  { step: "2", title: "Map the current process", detail: "Write down inputs, steps, outputs, and handoffs." },
  { step: "3", title: "Choose the right tool", detail: "Match the task to a simple AI prompt or no-code automation." },
  { step: "4", title: "Build and test one workflow", detail: "Start small. Run it for two weeks before expanding." },
  { step: "5", title: "Document and improve", detail: "Create a simple SOP so the system survives busy weeks." },
];

export default function StartHere() {
  const featuredProducts = getFeaturedProducts();

  return (
    <Column maxWidth="m" gap="xl" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={startHere.title}
        description={startHere.description}
        path={startHere.path}
        image={`/api/og/generate?title=${encodeURIComponent(startHere.title)}`}
        author={{ name: person.name, url: `${baseURL}/about`, image: `${baseURL}${person.avatar}` }}
      />

      <Column gap="m">
        <Heading variant="display-strong-m" wrap="balance">
          Choose your path
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          Not sure where to start? Pick the path that matches where you are right now. You can always
          move to the next level when you are ready.
        </Text>
      </Column>

      <Grid columns="1" fillWidth gap="16">
        {paths.map((path) => (
          <Column
            key={path.title}
            padding="l"
            gap="m"
            border="neutral-alpha-weak"
            radius="l"
            background="surface"
          >
            <Heading as="h2" variant="heading-strong-l">
              {path.title}
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {path.description}
            </Text>
            <Column as="ul" gap="8" paddingLeft="16">
              {path.steps.map((step) => (
                <Row as="li" key={step} gap="8">
                  <Icon name="arrowRight" onBackground="brand-medium" size="s" />
                  <Text variant="body-default-s">{step}</Text>
                </Row>
              ))}
            </Column>
            <Button href={path.href} variant="secondary" size="s" arrowIcon>
              {path.cta}
            </Button>
          </Column>
        ))}
      </Grid>

      <Column gap="l">
        <Heading as="h2" variant="display-strong-s">
          Beginner roadmap
        </Heading>
        <Column gap="12">
          {roadmap.map((item) => (
            <Row
              key={item.step}
              fillWidth
              padding="m"
              gap="16"
              border="neutral-alpha-weak"
              radius="m"
              vertical="start"
            >
              <Text variant="heading-strong-l" onBackground="brand-medium">
                {item.step}
              </Text>
              <Column gap="4">
                <Text variant="heading-strong-m">{item.title}</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {item.detail}
                </Text>
              </Column>
            </Row>
          ))}
        </Column>
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="display-strong-s">
          Recommended starter products
        </Heading>
        <Grid columns="3" s={{ columns: 1 }} fillWidth gap="16">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </Grid>
      </Column>

      <CTABlock
        headline="Take the first step today."
        copy="Download the free checklist to identify what to automate first, or browse starter kits if you are ready to implement."
        primaryLabel={siteCTA.primaryLabel}
        primaryHref={siteCTA.primaryHref}
        secondaryLabel="Take the AI workflow quiz"
        secondaryHref="/free-checklist"
      />
    </Column>
  );
}

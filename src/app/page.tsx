import {
  Heading,
  Text,
  Button,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
  Grid,
  Icon,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes, siteCTA } from "@/resources";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { ProductCard } from "@/components/store/ProductCard";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CTABlock } from "@/components/shared/CTABlock";
import { getFeaturedProducts } from "@/resources/products";
import { services } from "@/resources/services";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

const audienceItems = [
  "Know AI can help but are not sure where to start",
  "Have too many repeat tasks living in your inbox, calendar, notes, or spreadsheet",
  "Want simple workflows for marketing, admin, operations, and client work",
  "Need templates and examples, not abstract theory",
  "Want to automate carefully without breaking your current process",
];

const problemSolution = [
  {
    problem: "You try random AI tools without a clear workflow",
    solution: "Start with the task, then choose the tool",
  },
  {
    problem: "You rewrite the same emails and documents repeatedly",
    solution: "Use reusable prompts, templates, and SOPs",
  },
  {
    problem: "Leads fall through the cracks",
    solution: "Automate capture, tagging, follow-up, and reminders",
  },
  {
    problem: "Content creation feels inconsistent",
    solution: "Build a repeatable content repurposing workflow",
  },
  {
    problem: "Admin work eats your best hours",
    solution: "Use AI-assisted summaries, checklists, and task routing",
  },
];

const offerPaths = [
  {
    path: "Learn",
    bestFor: "Beginners who want clarity",
    gets: "Guides, blog posts, tutorials, tool comparisons",
    cta: "Read the blog",
    href: "/blog",
  },
  {
    path: "Download",
    bestFor: "DIY users",
    gets: "Templates, prompts, checklists, workflow kits",
    cta: "Browse the store",
    href: "/store",
  },
  {
    path: "Build",
    bestFor: "Business owners who want implementation",
    gets: "Audit, automation build, training, handoff",
    cta: "Book a call",
    href: "/contact",
  },
];

const trustSignals = [
  "Workflow maps and before/after process diagrams",
  "Sample templates and prompt outputs",
  "Tool stack breakdowns for each system",
  "Clear refund policy on digital products",
  "Illustrative workflow examples — not fake client proof",
];

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Section 1: Hero */}
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx fillWidth horizontal="center" paddingBottom="24">
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l" align="center">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="24">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-l" align="center">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx delay={0.3} horizontal="center">
            <Row gap="12" wrap horizontal="center">
              <Button href={siteCTA.primaryHref} size="m" arrowIcon>
                {siteCTA.primaryLabel}
              </Button>
              <Button href={siteCTA.secondaryHref} variant="secondary" size="m">
                {siteCTA.secondaryLabel}
              </Button>
            </Row>
          </RevealFx>
          <RevealFx delay={0.4} paddingTop="16">
            <Text variant="body-default-s" onBackground="neutral-weak" align="center" wrap="balance">
              Built for small-business owners, freelancers, operators, and lean teams who need useful
              systems, not jargon.
            </Text>
          </RevealFx>
        </Column>
      </Column>

      {/* Section 2: Audience */}
      <Column fillWidth gap="l" paddingTop="24">
        <Heading as="h2" variant="display-strong-s" wrap="balance">
          Built for people who run the business, not people who want another complicated tool.
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          You are probably in the right place if you:
        </Text>
        <Column as="ul" gap="12" paddingLeft="16">
          {audienceItems.map((item) => (
            <Row as="li" key={item} gap="8" vertical="start">
              <Icon name="arrowRight" onBackground="brand-medium" size="s" />
              <Text variant="body-default-m">{item}</Text>
            </Row>
          ))}
        </Column>
        <Button href="/start-here" variant="secondary" size="s" arrowIcon>
          Start with the beginner roadmap
        </Button>
      </Column>

      {/* Section 3: Problem / Solution */}
      <Column fillWidth gap="l">
        <Heading as="h2" variant="display-strong-s" wrap="balance">
          AI works best when it is attached to a real business process.
        </Heading>
        <Column fillWidth gap="8">
          <Row
            fillWidth
            padding="12"
            background="neutral-alpha-weak"
            radius="m"
            s={{ hide: true }}
          >
            <Column flex={1}>
              <Text variant="label-default-s" onBackground="neutral-weak">
                The common problem
              </Text>
            </Column>
            <Column flex={1}>
              <Text variant="label-default-s" onBackground="brand-medium">
                The better system
              </Text>
            </Column>
          </Row>
          {problemSolution.map((row) => (
            <Row
              key={row.problem}
              fillWidth
              padding="m"
              border="neutral-alpha-weak"
              radius="m"
              gap="16"
              s={{ direction: "column" }}
            >
              <Column flex={1} gap="4">
                <Row hide s={{ hide: false }}>
                  <Text variant="label-default-s" onBackground="neutral-weak">
                    Problem
                  </Text>
                </Row>
                <Text variant="body-default-m">{row.problem}</Text>
              </Column>
              <Column flex={1} gap="4">
                <Row hide s={{ hide: false }}>
                  <Text variant="label-default-s" onBackground="brand-medium">
                    Better system
                  </Text>
                </Row>
                <Text variant="body-default-m" onBackground="brand-medium">
                  {row.solution}
                </Text>
              </Column>
            </Row>
          ))}
        </Column>
      </Column>

      {/* Section 4: Offer paths */}
      <Column fillWidth gap="l">
        <Heading as="h2" variant="display-strong-s">
          Choose the level of help you need.
        </Heading>
        <Grid columns="3" s={{ columns: 1 }} fillWidth gap="16">
          {offerPaths.map((item) => (
            <Column
              key={item.path}
              padding="l"
              gap="m"
              border="neutral-alpha-weak"
              radius="l"
              background="surface"
            >
              <Heading as="h3" variant="heading-strong-l">
                {item.path}
              </Heading>
              <Text variant="label-default-s" onBackground="neutral-weak">
                Best for: {item.bestFor}
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {item.gets}
              </Text>
              <Button href={item.href} variant="secondary" size="s" arrowIcon>
                {item.cta}
              </Button>
            </Column>
          ))}
        </Grid>
      </Column>

      {/* Section 5: Featured products */}
      <Column fillWidth gap="l">
        <Heading as="h2" variant="display-strong-s">
          Starter kits for common small-business problems.
        </Heading>
        <Grid columns="2" s={{ columns: 1 }} fillWidth gap="16">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </Grid>
        <Button href="/store" variant="secondary" size="m" arrowIcon>
          View all toolkits
        </Button>
      </Column>

      {/* Section 6: Services preview */}
      <Column fillWidth gap="l">
        <Heading as="h2" variant="display-strong-s">
          Want the system built with you?
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          If you know what needs to improve but do not want to wire everything together yourself, I
          offer practical AI and automation services for small teams. We start with your current
          workflow, identify the highest-leverage automation opportunities, and build simple systems
          your business can actually maintain.
        </Text>
        <Grid columns="2" s={{ columns: 1 }} fillWidth gap="16">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </Grid>
        <Button href="/contact" size="m" arrowIcon>
          Book an automation audit
        </Button>
      </Column>

      {/* Section 7: Trust */}
      <Column fillWidth gap="l">
        <Heading as="h2" variant="display-strong-s">
          Practical systems, not shiny-object AI.
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          Every resource is designed around a real business task: replying faster, organizing leads,
          creating content, onboarding clients, summarizing calls, documenting processes, or reducing
          manual admin work.
        </Text>
        <Column as="ul" gap="12" paddingLeft="16">
          {trustSignals.map((signal) => (
            <Row as="li" key={signal} gap="8" vertical="start">
              <Icon name="document" onBackground="accent-medium" size="s" />
              <Text variant="body-default-m">{signal}</Text>
            </Row>
          ))}
        </Column>
        <Button href="/case-studies" variant="secondary" size="s" arrowIcon>
          See workflow examples
        </Button>
      </Column>

      {/* Section 8: Blog preview */}
      {routes["/blog"] && (
        <Column fillWidth gap="24">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Column gap="16">
            <Heading as="h2" variant="display-strong-s">
              Learn the workflows before you buy the tools.
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              Clear guides for using AI in everyday business work.
            </Text>
          </Column>
          <Posts range={[1, 4]} columns="2" />
          <Button href="/blog" variant="secondary" size="s" arrowIcon>
            Read the resource library
          </Button>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}

      {/* Section 9: Newsletter */}
      <Mailchimp />

      {/* Section 10: Final CTA */}
      <CTABlock />
    </Column>
  );
}

import { Button, Column, Heading, Meta, Row, Schema, Tag, Text } from "@once-ui-system/core";
import { baseURL, person, caseStudiesPage } from "@/resources";
import { workflowExamples } from "@/resources/case-studies";
import { getProduct } from "@/resources/products";
import { CTABlock } from "@/components/shared/CTABlock";

export async function generateMetadata() {
  return Meta.generate({
    title: "Workflow Examples – Practical AI Systems",
    description:
      "Illustrative before/after workflow examples showing the kinds of systems this site helps you build.",
    baseURL: baseURL,
    path: caseStudiesPage.path,
    image: `/api/og/generate?title=${encodeURIComponent("Workflow Examples")}`,
  });
}

export default function WorkflowExamples() {
  return (
    <Column maxWidth="m" gap="xl" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title="Workflow Examples – Practical AI Systems"
        description="Illustrative workflow examples for small businesses."
        path={caseStudiesPage.path}
        image={`/api/og/generate?title=${encodeURIComponent("Workflow Examples")}`}
        author={{ name: person.name, url: `${baseURL}/about`, image: `${baseURL}${person.avatar}` }}
      />

      <Column gap="m">
        <Heading as="h1" variant="display-strong-m" wrap="balance">
          Workflow examples
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          Illustrative examples showing the kinds of systems this site helps you build. These are
          not verified client case studies — they describe realistic before/after workflows you can
          adapt for your business.
        </Text>
      </Column>

      <Column gap="24">
        {workflowExamples.map((example) => {
          const relatedProduct = example.relatedProduct
            ? getProduct(example.relatedProduct)
            : undefined;

          return (
            <Column
              key={example.slug}
              padding="l"
              gap="m"
              border="neutral-alpha-weak"
              radius="l"
              background="surface"
            >
              <Row gap="8" wrap>
                <Tag size="m">{example.businessType}</Tag>
                <Tag size="m" background="neutral-alpha-weak">
                  Example build
                </Tag>
              </Row>

              <Heading as="h2" variant="heading-strong-l">
                {example.problem}
              </Heading>

              <Column gap="12">
                <Row gap="8" vertical="start" s={{ direction: "column" }}>
                  <Text variant="label-default-s" onBackground="neutral-weak">
                    Before
                  </Text>
                  <Text variant="body-default-m">{example.beforeWorkflow}</Text>
                </Row>
                <Row gap="8" vertical="start" s={{ direction: "column" }}>
                  <Text variant="label-default-s" onBackground="brand-medium">
                    After
                  </Text>
                  <Text variant="body-default-m" onBackground="brand-medium">
                    {example.afterWorkflow}
                  </Text>
                </Row>
                <Row gap="8" vertical="start" s={{ direction: "column" }}>
                  <Text variant="label-default-s" onBackground="neutral-weak">
                    Tools
                  </Text>
                  <Text variant="body-default-s">{example.toolsInvolved.join(", ")}</Text>
                </Row>
              </Column>

              <Text variant="body-default-s" onBackground="neutral-weak">
                <strong>Risks handled:</strong> {example.risksHandled}
              </Text>
              <Text variant="body-default-s">
                <strong>What changed:</strong> {example.whatChanged}
              </Text>

              <Row gap="8" wrap>
                {relatedProduct && (
                  <Button href={`/store/${relatedProduct.slug}`} variant="secondary" size="s">
                    Get the {relatedProduct.name}
                  </Button>
                )}
                <Button href="/contact" size="s" arrowIcon>
                  Build something like this
                </Button>
              </Row>
            </Column>
          );
        })}
      </Column>

      <CTABlock
        headline="Want help mapping your workflow?"
        copy="Book an automation audit to find your highest-leverage opportunities, or browse starter kits to implement it yourself."
        primaryLabel="Book an automation audit"
        primaryHref="/contact"
        secondaryLabel="View services"
        secondaryHref="/services"
      />
    </Column>
  );
}

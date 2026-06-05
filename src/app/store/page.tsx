import { Column, Grid, Heading, Meta, Row, Schema, Tag, Text } from "@once-ui-system/core";
import { baseURL, person, store } from "@/resources";
import { products, productCategories, ProductCategory } from "@/resources/products";
import { ProductCard } from "@/components/store/ProductCard";
import { CTABlock } from "@/components/shared/CTABlock";

export async function generateMetadata() {
  return Meta.generate({
    title: store.title,
    description: store.description,
    baseURL: baseURL,
    path: store.path,
    image: `/api/og/generate?title=${encodeURIComponent(store.title)}`,
  });
}

const categories = Object.entries(productCategories) as [ProductCategory, string][];

export default function Store() {
  return (
    <Column maxWidth="m" gap="xl" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={store.title}
        description={store.description}
        path={store.path}
        image={`/api/og/generate?title=${encodeURIComponent(store.title)}`}
        author={{ name: person.name, url: `${baseURL}/about`, image: `${baseURL}${person.avatar}` }}
      />

      <Column gap="m">
        <Heading variant="display-strong-m" wrap="balance">
          Templates and toolkits for the work you repeat every week.
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          Browse practical AI resources for admin, marketing, sales, content, client onboarding,
          customer support, and operations. Each product is designed to help you move faster without
          building a complicated system from scratch.
        </Text>
      </Column>

      <Row gap="8" wrap>
        {categories.map(([key, label]) => (
          <Tag key={key} size="l">
            {label}
          </Tag>
        ))}
      </Row>

      <Grid columns="2" s={{ columns: 1 }} fillWidth gap="16">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </Grid>

      <Column
        padding="l"
        gap="m"
        border="neutral-alpha-weak"
        radius="l"
        background="surface"
      >
        <Heading as="h2" variant="heading-strong-l">
          Satisfaction guarantee
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          If a digital product does not help you simplify a real workflow within 14 days, contact us
          for a full refund. These are practical tools — not hype products.
        </Text>
      </Column>

      <CTABlock
        headline="Not sure which kit fits?"
        copy="Start with the free AI Workflow Checklist to identify your highest-leverage automation opportunity, then pick the matching starter kit."
        secondaryLabel="Book an automation audit"
        secondaryHref="/contact"
      />
    </Column>
  );
}

import { notFound } from "next/navigation";
import {
  Button,
  Column,
  Grid,
  Heading,
  Meta,
  Row,
  Schema,
  Tag,
  Text,
  Icon,
} from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { getProduct, products } from "@/resources/products";
import { ProductCard } from "@/components/store/ProductCard";
import { ProductPurchase } from "@/components/store/ProductPurchase";
import { CTABlock } from "@/components/shared/CTABlock";
import { absoluteUrl } from "@/resources/site";

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  return Meta.generate({
    title: product.seoTitle,
    description: product.seoDescription,
    baseURL: baseURL,
    path: `/store/${slug}`,
    image: `/api/og/generate?title=${encodeURIComponent(product.name)}`,
  });
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = product.relatedSlugs
    .map((s) => getProduct(s))
    .filter((p): p is NonNullable<typeof p> => !!p);

  return (
    <Column maxWidth="m" gap="xl" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={product.name}
        description={product.description}
        path={`/store/${slug}`}
        image={`/api/og/generate?title=${encodeURIComponent(product.name)}`}
        author={{ name: person.name, url: `${baseURL}/about`, image: `${baseURL}${person.avatar}` }}
      />

      <Column gap="m">
        <Row gap="8" wrap>
          <Tag size="m">{product.categoryLabel}</Tag>
          <Text variant="heading-strong-l" onBackground="brand-medium">
            {product.priceLabel}
          </Text>
        </Row>
        <Heading variant="display-strong-s" wrap="balance">
          {product.name}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          {product.description}
        </Text>
        <Row gap="12" wrap>
          <ProductPurchase product={product} size="m" />
          <Button href="/free-checklist" variant="secondary" size="m">
            Download the free checklist
          </Button>
        </Row>
        <Text variant="body-default-s" onBackground="neutral-weak">
          You&apos;ll receive the download link by email after purchase. See our{" "}
          <a href="/refund-policy">refund policy</a>.
        </Text>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: product.name,
              description: product.description,
              offers: {
                "@type": "Offer",
                price: product.price,
                priceCurrency: "USD",
                availability:
                  product.availability === "available"
                    ? "https://schema.org/InStock"
                    : "https://schema.org/preorder",
                url: absoluteUrl(`/store/${slug}`),
              },
            }),
          }}
        />
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="heading-strong-l">
          What&apos;s included
        </Heading>
        <Column as="ul" gap="12" paddingLeft="16">
          {product.includes.map((item) => (
            <Row as="li" key={item} gap="8">
              <Icon name="document" onBackground="brand-medium" size="s" />
              <Text variant="body-default-m">{item}</Text>
            </Row>
          ))}
        </Column>
      </Column>

      <Grid columns="2" s={{ columns: 1 }} fillWidth gap="16">
        <Column padding="l" gap="m" border="neutral-alpha-weak" radius="l" background="surface">
          <Heading as="h3" variant="heading-strong-m">
            Who this is for
          </Heading>
          <Column as="ul" gap="8" paddingLeft="16">
            {product.forWho.map((item) => (
              <Text as="li" key={item} variant="body-default-s">
                {item}
              </Text>
            ))}
          </Column>
        </Column>
        <Column padding="l" gap="m" border="neutral-alpha-weak" radius="l" background="surface">
          <Heading as="h3" variant="heading-strong-m">
            Who this is not for
          </Heading>
          <Column as="ul" gap="8" paddingLeft="16">
            {product.notFor.map((item) => (
              <Text as="li" key={item} variant="body-default-s" onBackground="neutral-weak">
                {item}
              </Text>
            ))}
          </Column>
        </Column>
      </Grid>

      <Column gap="l">
        <Heading as="h2" variant="heading-strong-l">
          Use cases
        </Heading>
        <Grid columns="2" s={{ columns: 1 }} fillWidth gap="12">
          {product.useCases.map((useCase) => (
            <Row
              key={useCase}
              padding="m"
              border="neutral-alpha-weak"
              radius="m"
              gap="8"
            >
              <Icon name="arrowRight" onBackground="accent-medium" size="s" />
              <Text variant="body-default-m">{useCase}</Text>
            </Row>
          ))}
        </Grid>
      </Column>

      {related.length > 0 && (
        <Column gap="l">
          <Heading as="h2" variant="heading-strong-l">
            Related products
          </Heading>
          <Grid columns="2" s={{ columns: 1 }} fillWidth gap="16">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </Grid>
        </Column>
      )}

      <CTABlock
        headline="Want this workflow built for you?"
        copy="If you would rather have the system wired together and handed off with documentation, book an automation audit or apply for a build sprint."
        primaryLabel="Book an automation audit"
        primaryHref="/contact"
        secondaryLabel="View all services"
        secondaryHref="/services"
      />
    </Column>
  );
}

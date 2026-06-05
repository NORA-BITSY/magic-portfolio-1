import { Button, Column, Heading, Row, Tag, Text } from "@once-ui-system/core";
import { Product } from "@/resources/products";
import { ProductPurchase } from "@/components/store/ProductPurchase";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Column
      fillWidth
      padding="l"
      gap="m"
      border="neutral-alpha-weak"
      radius="l"
      background="surface"
    >
      <Row horizontal="between" vertical="center" fillWidth>
        <Tag size="s">{product.categoryLabel}</Tag>
        <Text variant="heading-strong-s" onBackground="brand-medium">
          {product.priceLabel}
        </Text>
      </Row>
      <Heading as="h3" variant="heading-strong-l">
        {product.name}
      </Heading>
      <Text variant="body-default-m" onBackground="neutral-weak">
        {product.tagline}
      </Text>
      <Text variant="body-default-s" onBackground="neutral-weak">
        {product.description}
      </Text>
      <Row gap="8" marginTop="8">
        <Button href={`/store/${product.slug}`} variant="secondary" size="s" arrowIcon>
          See what&apos;s included
        </Button>
        <ProductPurchase product={product} size="s" label="Get the starter kit" />
      </Row>
    </Column>
  );
}

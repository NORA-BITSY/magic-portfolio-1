"use client";

import { Button } from "@once-ui-system/core";
import { getProductCheckoutUrl, isExternalUrl } from "@/resources/site";
import type { Product } from "@/resources/products";

type Props = {
  product: Product;
  size?: "s" | "m" | "l";
  label?: string;
};

export function ProductPurchase({ product, size = "m", label }: Props) {
  const checkoutUrl = getProductCheckoutUrl(product.slug);
  const available = product.availability === "available" && checkoutUrl.length > 0;

  if (product.availability === "comingSoon" || !available) {
    return (
      <Button size={size} disabled>
        Coming soon
      </Button>
    );
  }

  const external = isExternalUrl(checkoutUrl);

  return (
    <Button
      href={checkoutUrl}
      size={size}
      arrowIcon
      suffixIcon={external ? "openLink" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {label ?? `Buy for ${product.priceLabel}`}
    </Button>
  );
}

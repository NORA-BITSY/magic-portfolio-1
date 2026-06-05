import { Button, Column, Heading, Text } from "@once-ui-system/core";
import { Service } from "@/resources/services";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Column
      fillWidth
      padding="l"
      gap="m"
      border="neutral-alpha-weak"
      radius="l"
      background="surface"
    >
      <Heading as="h3" variant="heading-strong-l">
        {service.name}
      </Heading>
      <Text variant="body-default-m" onBackground="brand-medium">
        {service.outcome}
      </Text>
      <Text variant="body-default-s" onBackground="neutral-weak">
        {service.description}
      </Text>
      <Text variant="label-default-s" onBackground="neutral-weak">
        {service.priceRange}
      </Text>
      <Button href={service.ctaHref} variant="secondary" size="s" arrowIcon>
        {service.cta}
      </Button>
    </Column>
  );
}

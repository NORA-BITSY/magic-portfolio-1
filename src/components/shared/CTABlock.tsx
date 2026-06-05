import { Button, Column, Heading, Row, Text } from "@once-ui-system/core";
import { siteCTA } from "@/resources";

interface CTABlockProps {
  headline?: string;
  copy?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTABlock({
  headline = "Start with one workflow. Improve from there.",
  copy = "You do not need to automate your whole business at once. Start with one repetitive task, build one reliable system, and use that as the foundation for better operations.",
  primaryLabel = siteCTA.primaryLabel,
  primaryHref = siteCTA.primaryHref,
  secondaryLabel = "Book an Automation Audit",
  secondaryHref = "/contact",
}: CTABlockProps) {
  return (
    <Column
      fillWidth
      padding="xl"
      gap="l"
      align="center"
      horizontal="center"
      border="neutral-alpha-weak"
      radius="l"
      background="brand-alpha-weak"
    >
      <Heading as="h2" variant="display-strong-s" align="center" wrap="balance">
        {headline}
      </Heading>
      <Column maxWidth={48} horizontal="center">
        <Text variant="body-default-l" onBackground="neutral-weak" align="center" wrap="balance">
          {copy}
        </Text>
      </Column>
      <Row gap="12" wrap horizontal="center">
        <Button href={primaryHref} size="m" arrowIcon>
          {primaryLabel}
        </Button>
        <Button href={secondaryHref} variant="secondary" size="m">
          {secondaryLabel}
        </Button>
      </Row>
    </Column>
  );
}

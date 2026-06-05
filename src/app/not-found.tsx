import { Button, Column, Heading, Row, Text } from "@once-ui-system/core";

export default function NotFound() {
  return (
    <Column as="section" fill center paddingBottom="160" gap="l" maxWidth="s">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="m" variant="display-default-xs">
        Page not found
      </Heading>
      <Text onBackground="neutral-weak" align="center">
        That page does not exist. Try one of these paths instead:
      </Text>
      <Row gap="8" wrap horizontal="center">
        <Button href="/start-here" size="s">
          Start here
        </Button>
        <Button href="/store" variant="secondary" size="s">
          Store
        </Button>
        <Button href="/contact" variant="secondary" size="s">
          Contact
        </Button>
      </Row>
    </Column>
  );
}

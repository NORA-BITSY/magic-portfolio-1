"use client";

import { Button, Column, Heading, Text } from "@once-ui-system/core";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Column as="section" fill center paddingBottom="160" gap="l" maxWidth="s">
      <Heading variant="display-default-xs">Something went wrong</Heading>
      <Text onBackground="neutral-weak" align="center">
        We could not load this page. Try again, or return to the homepage.
      </Text>
      <Button onClick={() => reset()} size="s">
        Try again
      </Button>
      <Button href="/" variant="secondary" size="s">
        Go home
      </Button>
    </Column>
  );
}

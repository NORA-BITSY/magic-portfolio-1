import { Column, Heading, Schema, Text } from "@once-ui-system/core";
import { baseURL } from "@/resources";

type Section = { title: string; paragraphs: string[] };

type Props = {
  title: string;
  description: string;
  path: string;
  sections: Section[];
};

export function LegalPage({ title, description, path, sections }: Props) {
  return (
    <Column maxWidth="m" gap="xl" paddingTop="24" as="article">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={title}
        description={description}
        path={path}
      />
      <Column gap="m">
        <Heading as="h1" variant="display-strong-s">
          {title}
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-weak">
          Last updated: {new Date().toISOString().split("T")[0]}
        </Text>
      </Column>
      {sections.map((section) => (
        <Column key={section.title} gap="m">
          <Heading as="h2" variant="heading-strong-l">
            {section.title}
          </Heading>
          {section.paragraphs.map((p) => (
            <Text key={p} variant="body-default-m" onBackground="neutral-weak">
              {p}
            </Text>
          ))}
        </Column>
      ))}
    </Column>
  );
}

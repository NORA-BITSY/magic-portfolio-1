import { Column, Heading, Meta, Row, Schema, Tag, Text } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

const categories = [
  "AI Basics",
  "Automation Workflows",
  "Prompting",
  "Admin & Operations",
  "Sales",
];

export default function Blog() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading as="h1" marginBottom="m" variant="heading-strong-xl" marginLeft="24">
        {blog.title}
      </Heading>
      <Column marginLeft="24" marginBottom="l" maxWidth={48}>
        <Text variant="body-default-l" onBackground="neutral-weak">
          {blog.description}
        </Text>
      </Column>
      <Row gap="8" wrap marginLeft="24" marginBottom="l">
        {categories.map((cat) => (
          <Tag key={cat} size="l">
            {cat}
          </Tag>
        ))}
      </Row>
      <Column fillWidth flex={1} gap="40">
        <Posts range={[1, 5]} columns="2" thumbnail />
        <Mailchimp marginBottom="l" />
      </Column>
    </Column>
  );
}

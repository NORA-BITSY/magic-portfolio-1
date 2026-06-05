import { Row, IconButton, SmartLink, Text, Column } from "@once-ui-system/core";
import { social, siteCTA } from "@/resources";
import { isPlaceholderUrl } from "@/resources/site";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" s={{ direction: "column" }}>
      <Column
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="center"
        align="center"
      >
        <Row gap="16" wrap horizontal="center">
          <SmartLink href="/start-here">Start Here</SmartLink>
          <SmartLink href="/store">Store</SmartLink>
          <SmartLink href="/services">Services</SmartLink>
          <SmartLink href="/blog">Blog</SmartLink>
          <SmartLink href="/case-studies">Examples</SmartLink>
          <SmartLink href="/about">About</SmartLink>
          <SmartLink href={siteCTA.primaryHref}>Free Checklist</SmartLink>
          <SmartLink href="/contact">Contact</SmartLink>
          <SmartLink href="/privacy">Privacy</SmartLink>
          <SmartLink href="/terms">Terms</SmartLink>
          <SmartLink href="/refund-policy">Refunds</SmartLink>
        </Row>
        <Text variant="body-default-s" onBackground="neutral-strong" align="center">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">Practical AI Systems</Text>
          <Text onBackground="neutral-weak">/ Less admin. Better follow-up. Smarter workflows.</Text>
        </Text>
        <Row gap="16">
          {social.map(
            (item) =>
              item.link &&
              !isPlaceholderUrl(item.link) && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="tertiary"
                  rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                />
              ),
          )}
        </Row>
      </Column>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};

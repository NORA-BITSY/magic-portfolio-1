"use client";

import { usePathname } from "next/navigation";

import { Fade, Row, ToggleButton, Button, Line, SmartLink, Text } from "@once-ui-system/core";

import {
  routes,
  about,
  blog,
  startHere,
  store,
  servicesPage,
  caseStudiesPage,
  siteCTA,
  display,
} from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

export const Header = () => {
  const pathname = usePathname() ?? "";

  const navItems = [
    { route: "/start-here" as const, label: startHere.label, href: "/start-here", icon: "rocket" as const, match: (p: string) => p === "/start-here" },
    { route: "/store" as const, label: store.label, href: "/store", icon: "grid" as const, match: (p: string) => p.startsWith("/store") },
    { route: "/services" as const, label: servicesPage.label, href: "/services", icon: "document" as const, match: (p: string) => p === "/services" },
    { route: "/blog" as const, label: blog.label, href: "/blog", icon: "book" as const, match: (p: string) => p.startsWith("/blog") },
    { route: "/case-studies" as const, label: caseStudiesPage.label, href: "/case-studies", icon: "document" as const, match: (p: string) => p === "/case-studies" },
    { route: "/about" as const, label: about.label, href: "/about", icon: "person" as const, match: (p: string) => p === "/about" },
    { route: "/free-checklist" as const, label: "Free Checklist", href: "/free-checklist", icon: "document" as const, match: (p: string) => p === "/free-checklist" },
  ];

  return (
    <>
      <Fade s={{ hide: true }} fillWidth position="fixed" height="80" zIndex={9} />
      <Fade
        hide
        s={{ hide: false }}
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />
      <Row
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
        s={{
          position: "fixed",
        }}
      >
        <Row paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s" s={{ hide: true }}>
          <SmartLink href="/">
            <Text variant="body-default-s" weight="strong">
              Practical AI Systems
            </Text>
          </SmartLink>
        </Row>
        <Row fillWidth horizontal="center">
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Row gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {navItems.map((item) =>
                routes[item.route] ? (
                  <Row key={item.href} s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon={item.icon}
                      href={item.href}
                      label={item.label}
                      selected={item.match(pathname)}
                    />
                  </Row>
                ) : null,
              )}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
            </Row>
          </Row>
        </Row>
        <Row fillWidth horizontal="end" vertical="center" paddingRight="12" s={{ hide: true }}>
          <Button href={siteCTA.primaryHref} size="s" arrowIcon>
            {siteCTA.primaryLabel}
          </Button>
        </Row>
        <Row height="48" hide s={{ hide: false }} />
      </Row>
    </>
  );
};

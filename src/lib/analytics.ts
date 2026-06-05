"use client";

import { siteConfig } from "@/resources/site";

type EventName =
  | "cta_click"
  | "checklist_click"
  | "checkout_click"
  | "booking_click"
  | "contact_submit";

export function trackEvent(
  name: EventName,
  props?: Record<string, string | number | boolean>,
): void {
  if (typeof window === "undefined") return;

  const payload = { name, ...props };

  if (siteConfig.plausibleDomain && "plausible" in window) {
    (window as Window & { plausible?: (e: string, o?: object) => void }).plausible?.(
      name,
      { props },
    );
  }

  if (siteConfig.gaMeasurementId && "gtag" in window) {
    (
      window as Window & {
        gtag?: (cmd: string, action: string, params: object) => void;
      }
    ).gtag?.("event", name, payload);
  }
}

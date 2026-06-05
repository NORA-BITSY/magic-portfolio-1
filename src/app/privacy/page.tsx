import { Meta } from "@once-ui-system/core";
import { LegalPage } from "@/components/legal/LegalPage";
import { baseURL } from "@/resources";
import { siteConfig } from "@/resources/site";

export async function generateMetadata() {
  return Meta.generate({
    title: "Privacy Policy – Practical AI Systems",
    description: "How Practical AI Systems collects and uses data on this website.",
    baseURL,
    path: "/privacy",
  });
}

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How Practical AI Systems collects and uses data on this website."
      path="/privacy"
      sections={[
        {
          title: "Overview",
          paragraphs: [
            `This site (${siteConfig.url}) is operated by ${siteConfig.name}. We collect only what is needed to run the site, deliver resources, and respond to inquiries.`,
            "This page is a practical summary, not legal advice. Consult a qualified attorney for your jurisdiction.",
          ],
        },
        {
          title: "What we collect",
          paragraphs: [
            "Email address when you subscribe to the newsletter or download the free checklist (via your email provider’s form).",
            "Information you send through contact or booking flows (business type, workflow questions, etc.).",
            "Purchase-related data handled by our checkout provider (for example Lemon Squeezy) — we do not store payment card details on this site.",
            "Basic analytics (page views and commercial events) if you enable Plausible or Google Analytics.",
          ],
        },
        {
          title: "How we use data",
          paragraphs: [
            "To send the resources and emails you requested.",
            "To respond to service inquiries and booking requests.",
            "To improve site content and understand which pages are useful.",
          ],
        },
        {
          title: "Third parties",
          paragraphs: [
            "Newsletter and email capture may use Mailchimp, Kit (ConvertKit), or similar — governed by their policies.",
            "Checkout uses Lemon Squeezy or another payment platform you configure.",
            "Booking may use Cal.com, Calendly, or similar when configured.",
          ],
        },
        {
          title: "Your choices",
          paragraphs: [
            `Unsubscribe from emails using the link in any message, or contact ${siteConfig.contactEmail}.`,
            `Request access or deletion of data we hold by emailing ${siteConfig.contactEmail}.`,
          ],
        },
      ]}
    />
  );
}

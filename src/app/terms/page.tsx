import { Meta } from "@once-ui-system/core";
import { LegalPage } from "@/components/legal/LegalPage";
import { baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Terms of Use – Practical AI Systems",
    description: "Terms for using Practical AI Systems templates, content, and services.",
    baseURL,
    path: "/terms",
  });
}

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      description="Terms for using Practical AI Systems templates, content, and services."
      path="/terms"
      sections={[
        {
          title: "Educational content and templates",
          paragraphs: [
            "Digital products, guides, and blog posts are provided for educational and operational use. You receive a license to use materials for your business; you may not resell or redistribute templates as your own product without permission.",
          ],
        },
        {
          title: "No guaranteed business results",
          paragraphs: [
            "Workflow examples and case studies describe processes that may help reduce busywork. We do not guarantee revenue, leads, time savings, or any specific business outcome. Results depend on your implementation, team, and market.",
          ],
        },
        {
          title: "Services",
          paragraphs: [
            "Consulting, audits, and build sprints are delivered under a separate statement of work or agreement. Scope, timeline, and fees are confirmed before work begins.",
          ],
        },
        {
          title: "Acceptable use",
          paragraphs: [
            "Do not use this site or our materials for unlawful purposes, spam, harassment, or to generate harmful or deceptive content at scale.",
          ],
        },
        {
          title: "Limitation",
          paragraphs: [
            "To the fullest extent permitted by law, our liability for use of this site and digital products is limited to the amount you paid for the specific product in the twelve months before a claim.",
          ],
        },
      ]}
    />
  );
}

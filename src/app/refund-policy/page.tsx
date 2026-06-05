import { Meta } from "@once-ui-system/core";
import { LegalPage } from "@/components/legal/LegalPage";
import { baseURL } from "@/resources";
import { siteConfig } from "@/resources/site";

export async function generateMetadata() {
  return Meta.generate({
    title: "Refund Policy – Practical AI Systems",
    description: "Refund terms for digital products and services.",
    baseURL,
    path: "/refund-policy",
  });
}

export default function RefundPage() {
  return (
    <LegalPage
      title="Refund Policy"
      description="Refund terms for digital products and services."
      path="/refund-policy"
      sections={[
        {
          title: "Digital products",
          paragraphs: [
            "Templates, prompt packs, and workflow kits are delivered digitally. If files are defective or not as described, email us within 14 days of purchase and we will work to fix access or offer a refund at our discretion.",
            "Because digital goods can be copied after download, we may decline refunds when materials were successfully delivered and the issue is fit or preference rather than a delivery failure.",
          ],
        },
        {
          title: "Services",
          paragraphs: [
            "Deposits for audits, build sprints, or retainers are non-refundable once work has started, unless otherwise stated in your agreement. Unused prepaid blocks may be handled per your statement of work.",
          ],
        },
        {
          title: "How to request a refund",
          paragraphs: [
            `Email ${siteConfig.contactEmail} with your order email, product name, and a short description of the issue. We typically respond within 3 business days.`,
          ],
        },
      ]}
    />
  );
}

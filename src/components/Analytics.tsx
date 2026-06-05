import Script from "next/script";
import { siteConfig } from "@/resources/site";

export function Analytics() {
  if (siteConfig.plausibleDomain) {
    return (
      <Script
        defer
        data-domain={siteConfig.plausibleDomain}
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
      />
    );
  }

  if (siteConfig.gaMeasurementId) {
    return (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteConfig.gaMeasurementId}', { anonymize_ip: true });
          `}
        </Script>
      </>
    );
  }

  return null;
}

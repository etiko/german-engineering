import type { Metadata } from "next";
import { PolicyPage } from "@/components/legal/policy-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website Terms",
  description:
    "Terms governing use of the German Engineering Car Specialists website and its vehicle information.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <PolicyPage
      eyebrow="Legal information"
      title="Website terms"
      introduction="These terms apply when you browse this website or use it to start an enquiry. Any vehicle purchase, workshop booking, finance agreement, warranty or delivery arrangement will have separate terms."
      sections={[
        {
          id: "operator",
          title: "Website operator",
          paragraphs: [
            <>
              This website is operated by {siteConfig.name}, company number{" "}
              <a
                href={siteConfig.companiesHouseUrl}
                target="_blank"
                rel="noreferrer"
              >
                {siteConfig.companyNumber}
              </a>
              , at {siteConfig.address.street}, {siteConfig.address.locality},{" "}
              {siteConfig.address.region}, {siteConfig.address.postcode}.
            </>,
          ],
        },
        {
          id: "information",
          title: "Website and vehicle information",
          paragraphs: [
            "The site provides general information and an invitation to make contact; it is not an online offer or contract. Stock, availability, price, mileage, specification, condition, images and finance information may change or contain an error, so material details must be confirmed with the team before you travel or make a decision.",
            "Vehicle history, inspection records and written sales documents should be reviewed for the individual vehicle. Do not rely on generic page content as a substitute for those documents.",
          ],
        },
        {
          id: "enquiries",
          title: "Enquiries and appointments",
          paragraphs: [
            "Submitting or preparing an enquiry does not reserve a vehicle, confirm a workshop appointment, guarantee a valuation or create a finance approval. A booking or arrangement is confirmed only when the team expressly agrees it with you.",
            "You are responsible for supplying accurate contact and vehicle information and for not including unnecessary sensitive information in a general enquiry.",
          ],
        },
        {
          id: "finance",
          title: "Finance information",
          paragraphs: [
            "Finance is subject to status, lender approval and separate terms. German Engineering acts as a credit broker, not a lender. Nothing on this site is a guarantee that finance will be available or suitable for you.",
            "Read the finance disclosure and the documents provided by the relevant lender before entering an agreement.",
          ],
        },
        {
          id: "support",
          title: "Warranty, delivery and aftercare",
          paragraphs: [
            "Warranty cover, delivery charges, collection arrangements and aftercare support vary by vehicle and service. The written policy, invoice, order form or other terms agreed for your transaction take precedence over general website descriptions.",
          ],
        },
        {
          id: "availability",
          title: "Availability, links and acceptable use",
          paragraphs: [
            "Reasonable efforts are made to keep the site available and secure, but uninterrupted access is not guaranteed. Do not attempt to interfere with the website, introduce malicious material, scrape it in a way that harms the service or misuse its content.",
            "External links are provided for convenience. German Engineering does not control the availability, security or content of third-party sites.",
          ],
        },
        {
          id: "rights",
          title: "Rights and responsibility",
          paragraphs: [
            "Website text, design and original materials may not be commercially reproduced without permission. Nothing in these terms excludes responsibility that cannot lawfully be excluded, including liability for fraud or for death or personal injury caused by negligence.",
            "These terms are governed by the laws of England and Wales. Consumer rights and any mandatory protections remain unaffected.",
          ],
        },
      ]}
    />
  );
}

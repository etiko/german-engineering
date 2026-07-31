import type { Metadata } from "next";
import { PolicyPage } from "@/components/legal/policy-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "How German Engineering Car Specialists collects, uses and protects personal information.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <PolicyPage
      eyebrow="Legal information"
      title="Privacy notice"
      introduction="This notice explains what personal information we use when you browse the site, contact the team or discuss a vehicle, workshop service or finance enquiry."
      sections={[
        {
          id: "controller",
          title: "Who is responsible",
          paragraphs: [
            <>
              {siteConfig.name}, company number {siteConfig.companyNumber}, is
              the controller responsible for personal information handled by
              the dealership. You can verify the legal entity on{" "}
              <a
                href={siteConfig.companiesHouseUrl}
                target="_blank"
                rel="noreferrer"
              >
                Companies House
              </a>
              .
            </>,
            <>
              Privacy questions and rights requests can be sent to{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or
              to {siteConfig.address.street}, {siteConfig.address.locality},{" "}
              {siteConfig.address.region}, {siteConfig.address.postcode}.
            </>,
          ],
        },
        {
          id: "information",
          title: "Information we may receive",
          items: [
            "Identity and contact details, such as your name, email address and telephone number.",
            "Vehicle and enquiry details, including a registration, mileage, vehicle interest, budget, requested workshop work and preferred contact method.",
            "Correspondence, feedback and information you choose to provide by phone, email or in person.",
            "Transaction, finance or warranty information where it is needed to provide a requested service or meet a legal obligation.",
            "Basic technical and security information processed by the website host, such as request times, browser information and IP address.",
          ],
          paragraphs: [
            "The current website enquiry forms prepare an email in your own email application. The website does not store the completed form or collect banking, employment or full credit-application details.",
            "Please do not include unnecessary sensitive personal information in a general website enquiry.",
          ],
        },
        {
          id: "use",
          title: "How and why we use it",
          items: [
            "To answer enquiries and take steps you request before a sale, service, valuation or finance discussion.",
            "To provide, administer and support products or services you choose to purchase.",
            "To keep appropriate business, warranty, accounting and regulatory records.",
            "To operate, secure, diagnose and improve the website and dealership services.",
            "To meet legal or regulatory obligations and establish or defend legal claims.",
          ],
          paragraphs: [
            "The lawful basis depends on the context and may be performance of a contract, steps before a contract, legitimate interests, a legal obligation or consent. Optional analytics will only be considered where the saved cookie preference permits it and a provider has been configured.",
          ],
        },
        {
          id: "sharing",
          title: "Who information may be shared with",
          paragraphs: [
            "Information is shared only where necessary with service providers supporting hosting, email, IT, professional advice, vehicle services, warranty administration or an explicitly requested finance introduction. Public authorities or regulators may receive information where the law requires it.",
            "External sites such as maps, review platforms, warranty providers and the FCA Register have their own privacy notices. They receive information only when you choose to follow a link; this site does not automatically load their embeds.",
            "Where a provider processes information outside the UK, the business will require an appropriate legal transfer mechanism where applicable.",
          ],
        },
        {
          id: "retention",
          title: "How long information is kept",
          paragraphs: [
            "Personal information is kept only for as long as needed for the enquiry or service, applicable warranty and accounting records, legal or regulatory requirements, and the handling of possible disputes. Retention varies by record type rather than using one period for everything.",
            "Cookie preferences remain in your browser until they are removed, replaced or cleared. Hosting and security logs are retained according to the relevant provider configuration.",
          ],
        },
        {
          id: "rights",
          title: "Your data-protection rights",
          items: [
            "Ask for access to personal information held about you.",
            "Ask for inaccurate or incomplete information to be corrected.",
            "Ask for erasure or restriction where the law allows it.",
            "Object to certain processing based on legitimate interests.",
            "Ask for portable information where the right applies.",
            "Withdraw consent at any time without affecting earlier lawful processing.",
          ],
          paragraphs: [
            <>
              Identity may need to be confirmed before a request is completed.
              You can also raise a concern with the{" "}
              <a
                href="https://ico.org.uk/make-a-complaint/"
                target="_blank"
                rel="noreferrer"
              >
                Information Commissioner&apos;s Office
              </a>
              , although the team would appreciate the opportunity to address
              it first.
            </>,
          ],
        },
        {
          id: "changes",
          title: "Changes and accuracy",
          paragraphs: [
            "This notice will be updated when website features, providers or business processes materially change. Please tell the team when information supplied to the dealership needs correcting.",
          ],
        },
      ]}
    />
  );
}

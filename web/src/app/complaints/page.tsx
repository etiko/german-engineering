import type { Metadata } from "next";
import { PolicyPage } from "@/components/legal/policy-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Complaints",
  description:
    "How to raise a sales, service or finance-related complaint with German Engineering Car Specialists.",
  alternates: {
    canonical: "/complaints",
  },
};

export default function ComplaintsPage() {
  return (
    <PolicyPage
      eyebrow="Customer support"
      title="Complaints"
      introduction="If something has gone wrong, tell the team clearly and as soon as possible so the issue can be investigated and a fair response provided."
      sections={[
        {
          id: "contact",
          title: "How to make a complaint",
          paragraphs: [
            <>
              Email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              , call <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
              , or write to {siteConfig.name}, {siteConfig.address.street},{" "}
              {siteConfig.address.locality}, {siteConfig.address.region},{" "}
              {siteConfig.address.postcode}.
            </>,
          ],
          items: [
            "Your name and preferred contact details.",
            "The vehicle registration, stock reference, invoice or job reference where relevant.",
            "What happened, when it happened and who you dealt with.",
            "Copies of useful documents or photographs, without sending original documents.",
            "What you believe would resolve the issue.",
          ],
        },
        {
          id: "process",
          title: "What happens next",
          paragraphs: [
            "The team will record the concern, confirm who is handling it and may ask for further information. The issue will be investigated using relevant messages, documents, vehicle records and conversations.",
            "A response will explain the findings and any proposed action. The time needed depends on the nature of the complaint and any regulatory rules that apply. If more time is needed, the team should explain the position and the next step.",
          ],
        },
        {
          id: "finance",
          title: "Finance-related complaints",
          paragraphs: [
            <>
              {siteConfig.name} displays FCA reference number{" "}
              <a
                href={siteConfig.fcaRegisterUrl}
                target="_blank"
                rel="noreferrer"
              >
                {siteConfig.fcaNumber}
              </a>{" "}
              and acts as a credit broker, not a lender. A finance complaint
              may need to involve the lender or finance provider as well as
              the dealership.
            </>,
            <>
              If an eligible financial-services complaint remains unresolved
              after the applicable complaints process, the final response
              should explain any right to refer it to the{" "}
              <a
                href="https://www.financial-ombudsman.org.uk/consumers/how-to-complain"
                target="_blank"
                rel="noreferrer"
              >
                Financial Ombudsman Service
              </a>{" "}
              and the relevant time limit.
            </>,
          ],
        },
        {
          id: "privacy",
          title: "Complaint information",
          paragraphs: [
            "Personal information supplied with a complaint is used to investigate, respond, keep appropriate records and meet legal or regulatory obligations. Only include information relevant to the issue.",
          ],
        },
      ]}
    />
  );
}

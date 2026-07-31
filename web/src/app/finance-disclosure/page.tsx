import type { Metadata } from "next";
import { PolicyPage } from "@/components/legal/policy-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Finance Disclosure",
  description:
    "Credit-broker status and important vehicle-finance information for German Engineering Car Specialists.",
  alternates: {
    canonical: "/finance-disclosure",
  },
};

export default function FinanceDisclosurePage() {
  return (
    <PolicyPage
      eyebrow="Vehicle finance"
      title="Finance disclosure"
      introduction="This page explains the dealership's role when you ask about vehicle finance. It is general information, not financial advice or a credit offer."
      sections={[
        {
          id: "status",
          title: "Our role",
          paragraphs: [
            <>
              {siteConfig.name}, company number {siteConfig.companyNumber},
              displays FCA reference number{" "}
              <a
                href={siteConfig.fcaRegisterUrl}
                target="_blank"
                rel="noreferrer"
              >
                {siteConfig.fcaNumber}
              </a>
              . Check the official register for the current status and
              permissions.
            </>,
            "German Engineering acts as a credit broker, not a lender. The dealership may introduce you to a finance provider but does not itself make the lending decision.",
          ],
        },
        {
          id: "availability",
          title: "Availability and approval",
          paragraphs: [
            "Finance is subject to status, affordability assessment, lender approval and the lender's terms. An enquiry, illustration or discussion is not a guarantee of acceptance, rate, monthly payment or available product.",
            "Any representative example or promotion supplied for a particular vehicle must be read with its assumptions, deposit, term, mileage conditions, fees, total amount payable and other required information.",
          ],
        },
        {
          id: "panel",
          title: "Lender panel and commission",
          paragraphs: [
            "Before proceeding, ask for the current information about the lenders the dealership can introduce and whether German Engineering will receive a commission, fee or other benefit. The transaction-specific disclosure provided before an agreement takes precedence over this general page.",
            "A commission arrangement can affect how much the dealership receives. It must not change the amount you pay unless this is clearly included in the lender's documents and permitted by applicable rules.",
          ],
        },
        {
          id: "application",
          title: "Initial website enquiry",
          paragraphs: [
            "The website finance form is only for an initial conversation. It asks about the vehicle, available deposit and target monthly budget but does not collect bank details, employment details or the information needed for a full credit application.",
            "A finance provider's own secure process and privacy information will apply if you choose to continue.",
          ],
        },
        {
          id: "decision",
          title: "Make an informed decision",
          items: [
            "Check that the vehicle, deposit, term, mileage allowance and monthly payment match your needs.",
            "Review the interest rate, APR, fees, total amount payable and consequences of missed payments.",
            "Understand ownership options and any final or balloon payment.",
            "Ask questions before signing and keep copies of the documents provided.",
          ],
          paragraphs: [
            "If you are unsure whether a finance product is suitable, consider independent financial guidance. Complaints about the dealership's finance activity can be raised through the complaints process.",
          ],
        },
      ]}
    />
  );
}

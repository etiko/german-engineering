import type { Metadata } from "next";
import { PolicyPage } from "@/components/legal/policy-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Accessibility approach, testing and contact information for the German Engineering website.",
  alternates: {
    canonical: "/accessibility",
  },
};

export default function AccessibilityPage() {
  return (
    <PolicyPage
      eyebrow="Inclusive access"
      title="Accessibility statement"
      introduction="German Engineering wants customers to be able to browse vehicles, understand services and contact the team regardless of device or access need."
      sections={[
        {
          id: "approach",
          title: "Our approach",
          items: [
            "Semantic headings, landmarks, labels and link names.",
            "Keyboard-visible focus and a skip link to the main content.",
            "Responsive layouts that do not depend on hover alone.",
            "Text and controls designed for readable colour contrast and useful touch targets.",
            "Forms with associated labels, required-field indicators and clear consent information.",
            "No automatically loaded map, chat or finance embed that obstructs the page.",
          ],
        },
        {
          id: "standard",
          title: "Target standard",
          paragraphs: [
            "The website is being developed with WCAG 2.2 Level AA as the target. Automated checks cover representative pages and are supported by browser, keyboard, screen-reader, zoom and device testing before launch.",
            "Automated testing cannot identify every barrier, so feedback from people using assistive technology remains important.",
          ],
        },
        {
          id: "current-testing",
          title: "Current testing",
          paragraphs: [
            "The homepage, inventory, contact, services and privacy templates are included in automated WCAG A and AA checks. Critical routes, pagination, required form fields, redirects, security headers and cookie-preference controls are also covered by browser tests.",
            "Final production testing still depends on the approved stock, finance, lead-delivery, analytics and other third-party integrations. Those services must be checked before they are enabled.",
          ],
        },
        {
          id: "contact",
          title: "Report an accessibility problem",
          paragraphs: [
            <>
              If you cannot access information or complete a task, email{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or
              call <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
              . Explain the page, the problem and the format or adjustment
              that would help.
            </>,
            "The team will review the issue and provide the information another way where reasonably possible.",
          ],
        },
      ]}
    />
  );
}

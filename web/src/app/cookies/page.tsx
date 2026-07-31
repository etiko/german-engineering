import type { Metadata } from "next";
import { PolicyPage } from "@/components/legal/policy-page";
import { CookiePreferencesButton } from "@/features/consent/components/cookie-preferences-button";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Information about essential storage, optional analytics and cookie controls on the German Engineering website.",
  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiesPage() {
  return (
    <PolicyPage
      eyebrow="Privacy controls"
      title="Cookie policy"
      introduction="The replacement website is designed to work without advertising cookies or automatically loaded third-party embeds."
      sections={[
        {
          id: "current-use",
          title: "What the site currently uses",
          paragraphs: [
            "The site currently uses essential browser storage only. It records your cookie preference so the notice does not need to be shown on every visit. The website host may also use strictly necessary security and delivery technologies.",
          ],
          items: [
            "Preference name: ge-cookie-preferences-v1.",
            "Purpose: remembers whether optional analytics has been accepted or rejected.",
            "Type: local browser storage, not an advertising identifier.",
            "Duration: remains until you change the preference or clear site data in your browser.",
          ],
        },
        {
          id: "analytics",
          title: "Optional analytics",
          paragraphs: [
            "No analytics provider is currently installed. Saving an analytics preference does not load tracking by itself. Optional analytics will remain disabled unless a real provider is configured, its data use is documented and your saved preference allows it.",
            "Enquiry content, vehicle registrations, names, email addresses and telephone numbers must not be included in analytics events.",
          ],
        },
        {
          id: "third-parties",
          title: "External services",
          paragraphs: [
            "Maps, independent review profiles, warranty information and regulatory registers are provided as ordinary links. Their content is not embedded or loaded before you choose to visit them. Once you leave this site, the destination service controls its own cookies and data use.",
          ],
        },
        {
          id: "controls",
          title: "Change or withdraw your choice",
          paragraphs: [
            <>
              You can{" "}
              <CookiePreferencesButton className="font-bold text-[#1266a8] underline underline-offset-4">
                open cookie preferences
              </CookiePreferencesButton>{" "}
              at any time. You can also clear site data or block storage in
              your browser settings. Blocking necessary storage may cause the
              notice to appear again but does not prevent core pages from
              loading.
            </>,
          ],
        },
        {
          id: "updates",
          title: "Future changes",
          paragraphs: [
            "This policy and the preference controls must be updated before adding analytics, chat, finance widgets, embedded maps or any other non-essential technology.",
          ],
        },
      ]}
    />
  );
}

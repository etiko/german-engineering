import type { Metadata } from "next";
import { EnquiryForm } from "@/features/enquiries/components/enquiry-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vehicle Finance",
  description:
    "Make a vehicle finance enquiry with German Engineering Car Specialists in Haverhill.",
  alternates: {
    canonical: "/finance",
  },
};

const benefits = [
  "Discuss the vehicle, deposit and monthly budget with our team.",
  "Receive clear information before completing a full application.",
  "No sensitive banking or employment details are collected here.",
];

export default function FinancePage() {
  return (
    <>
      <section className="bg-[#081421] py-16 text-white md:py-20">
        <div className="shell grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#73c6fb]">
              Vehicle finance
            </p>
            <h1 className="font-display text-balance mt-3 text-6xl font-bold uppercase leading-[0.9] tracking-[-0.025em] md:text-7xl">
              Start with a straightforward conversation.
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/70">
            Share the vehicle and budget you have in mind. Our team will
            explain the available next steps without asking for sensitive
            application details here.
          </p>
        </div>
      </section>

      <section className="section-grid bg-[#f7f9fb] py-16 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <aside className="border border-[#dce5ec] bg-white p-7 md:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#1266a8]">
              Finance enquiry
            </p>
            <ul className="mt-7 grid gap-6">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-4">
                  <span
                    className="mt-1.5 h-3 w-3 shrink-0 bg-[#1266a8]"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-7 text-[#38516a]">{benefit}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-[#dce5ec] pt-6 text-xs leading-6 text-[#6e8396]">
              Finance is subject to status and lender approval. Terms and
              conditions apply. German Engineering Car Specialists Ltd is a
              credit broker, not a lender.
            </p>
          </aside>

          <div className="border border-[#dce5ec] bg-white p-7 shadow-[0_18px_50px_rgba(8,20,33,0.08)] md:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#1266a8]">
              Your requirements
            </p>
            <h2 className="font-display mt-3 text-4xl font-bold uppercase text-[#081421]">
              Make a finance enquiry
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-[#526a7f]">
              This is an initial enquiry, not a credit application or a
              guarantee of finance.
            </p>
            <div className="mt-8">
              <EnquiryForm kind="finance" recipient={siteConfig.email} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

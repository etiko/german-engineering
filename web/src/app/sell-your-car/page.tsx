import type { Metadata } from "next";
import { EnquiryForm } from "@/features/enquiries/components/enquiry-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sell Your Car",
  description:
    "Request a vehicle valuation from German Engineering Car Specialists in Haverhill.",
  alternates: {
    canonical: "/sell-your-car",
  },
};

const steps = [
  "Share your vehicle registration, mileage and condition.",
  "Our team reviews the details and contacts you.",
  "Arrange an inspection and receive a confirmed valuation.",
];

export default function SellYourCarPage() {
  return (
    <>
      <section className="bg-[#081421] py-16 text-white md:py-20">
        <div className="shell grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#73c6fb]">
              Vehicle valuation
            </p>
            <h1 className="font-display text-balance mt-3 text-6xl font-bold uppercase leading-[0.9] tracking-[-0.025em] md:text-7xl">
              Sell your car without the usual hassle.
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/70">
            Tell us about your vehicle and our Haverhill team will contact you
            to discuss the next step.
          </p>
        </div>
      </section>

      <section className="section-grid bg-[#f7f9fb] py-16 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <aside className="border border-[#dce5ec] bg-white p-7 md:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#1266a8]">
              What happens next
            </p>
            <ol className="mt-7 grid gap-6">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="font-display grid h-10 w-10 shrink-0 place-items-center bg-[#1266a8] text-xl font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-sm leading-7 text-[#38516a]">{step}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8 border-t border-[#dce5ec] pt-6 text-sm leading-7 text-[#526a7f]">
              A final offer depends on inspection, service history, condition
              and any outstanding finance.
            </p>
          </aside>

          <div className="border border-[#dce5ec] bg-white p-7 shadow-[0_18px_50px_rgba(8,20,33,0.08)] md:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#1266a8]">
              Your vehicle
            </p>
            <h2 className="font-display mt-3 text-4xl font-bold uppercase text-[#081421]">
              Request a valuation
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-[#526a7f]">
              Provide a few details so the team can prepare for the
              conversation.
            </p>
            <div className="mt-8">
              <EnquiryForm kind="valuation" recipient={siteConfig.email} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRightIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/ui/icons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Warranty, Delivery and Aftercare",
  description:
    "Learn about vehicle-specific warranty information, delivery options and aftercare from German Engineering.",
  alternates: {
    canonical: "/warranty-and-aftercare",
  },
};

const ownershipSupport = [
  {
    id: "warranty",
    number: "01",
    title: "Warranty information",
    description:
      "Warranty cover is confirmed for each vehicle before purchase. Available duration, eligibility, covered parts, exclusions and claim steps depend on the vehicle and written policy terms.",
  },
  {
    id: "delivery",
    number: "02",
    title: "UK delivery",
    description:
      "Mainland delivery and vehicle collection may be arranged. Pricing depends on location, vehicle and timing, so the team will provide a specific quote before anything is agreed.",
  },
  {
    id: "aftercare",
    number: "03",
    title: "Practical aftercare",
    description:
      "The workshop remains available for servicing, diagnostics and repair support after purchase, giving you a local team to contact throughout ownership.",
  },
];

export default function WarrantyAndAftercarePage() {
  return (
    <>
      <section className="bg-[#081421] py-16 text-white md:py-20">
        <div className="shell grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#73c6fb]">
              Ownership support
            </p>
            <h1 className="font-display text-balance mt-3 text-6xl font-bold uppercase leading-[0.9] tracking-[-0.025em] md:text-7xl">
              Support beyond the handover.
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/70">
            Clear vehicle-specific information, delivery options and workshop
            support for the road ahead.
          </p>
        </div>
      </section>

      <section className="section-grid bg-[#f7f9fb] py-16 md:py-24">
        <div className="shell grid gap-6">
          {ownershipSupport.map((item) => (
            <article
              id={item.id}
              key={item.id}
              className="grid gap-6 border border-[#dce5ec] bg-white p-7 md:grid-cols-[5rem_1fr] md:p-10"
            >
              <span className="font-display text-4xl font-bold text-[#9ab4c4]">
                {item.number}
              </span>
              <div>
                <h2 className="font-display text-4xl font-bold uppercase text-[#081421]">
                  {item.title}
                </h2>
                <p className="mt-4 max-w-3xl leading-8 text-[#526a7f]">
                  {item.description}
                </p>

                {item.id === "warranty" ? (
                  <a
                    href={siteConfig.warrantyProviderUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[#1266a8] hover:text-[#081421]"
                  >
                    Warranty First information
                    <ArrowRightIcon className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}

          <div className="mt-4 grid gap-8 bg-[#111820] p-7 text-white md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#9ab4c4]">
                Confirm the details
              </p>
              <h2 className="font-display mt-2 text-4xl font-bold uppercase">
                Ask about the vehicle you are considering.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/60">
                Written policy terms and a delivery quote take precedence over
                general website information.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.phoneHref}
                className="cta cta-primary inline-flex"
              >
                <PhoneIcon className="h-4 w-4" />
                <span>Call the team</span>
              </a>
              <Link
                href="/contact"
                className="cta cta-outline-light inline-flex"
              >
                <MailIcon className="h-4 w-4" />
                <span>Send an enquiry</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

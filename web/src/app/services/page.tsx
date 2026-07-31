import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRightIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/ui/icons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vehicle Servicing and Repairs",
  description:
    "Vehicle servicing, MOT preparation, diagnostics, repairs, tyres and bodywork from German Engineering in Haverhill.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    number: "01",
    title: "Servicing and MOT",
    description:
      "Routine maintenance, manufacturer-schedule servicing and MOT preparation for all makes and models.",
  },
  {
    number: "02",
    title: "Diagnostics and repairs",
    description:
      "Experienced fault finding, clear explanations and practical mechanical repairs to get you moving again.",
  },
  {
    number: "03",
    title: "Tyres and exhausts",
    description:
      "Tyre inspection and replacement, wheel-related checks and exhaust diagnosis for safe, dependable driving.",
  },
  {
    number: "04",
    title: "Air conditioning",
    description:
      "Air-conditioning checks and maintenance to restore effective cooling and identify system faults.",
  },
  {
    number: "05",
    title: "Bodywork and paint",
    description:
      "Support for cosmetic damage, paintwork and body repairs, with straightforward advice on the right approach.",
  },
  {
    number: "06",
    title: "Accident support",
    description:
      "A local point of contact for repair guidance and the practical next steps following vehicle damage.",
  },
];

const process = [
  {
    title: "Tell us what you need",
    description:
      "Call or email the workshop with your registration, mileage and the work or symptoms involved.",
  },
  {
    title: "Agree the next step",
    description:
      "The team will discuss availability, likely checks and anything needed before confirming a booking.",
  },
  {
    title: "Receive clear advice",
    description:
      "We explain the findings and recommended work so you can make an informed decision.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#081421] py-16 text-white md:py-20">
        <div className="shell grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#73c6fb]">
              Workshop services
            </p>
            <h1 className="font-display text-balance mt-3 text-6xl font-bold uppercase leading-[0.9] tracking-[-0.025em] md:text-7xl">
              Experienced care for every stage of ownership.
            </h1>
          </div>
          <div>
            <p className="max-w-xl text-lg leading-8 text-white/70">
              Servicing, diagnostics, mechanical repair and vehicle care for
              all makes from our independent workshop in Haverhill.
            </p>
            <a
              href={siteConfig.phoneHref}
              className="cta cta-primary mt-7 inline-flex"
            >
              <PhoneIcon className="h-4 w-4" />
              <span>Call the workshop</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section-grid bg-[#f7f9fb] py-16 md:py-24">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#1266a8]">
              How we can help
            </p>
            <h2 className="font-display text-balance mt-3 text-5xl font-bold uppercase leading-[0.94] text-[#081421] md:text-6xl">
              One trusted team for your vehicle.
            </h2>
          </div>

          <div className="mt-10 grid gap-px border border-[#dce5ec] bg-[#dce5ec] md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.number} className="bg-white p-7 md:p-9">
                <span className="font-display text-4xl font-bold text-[#46a7e8]">
                  {service.number}
                </span>
                <h3 className="font-display mt-7 text-3xl font-bold uppercase leading-none text-[#081421]">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-[#526a7f]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#1266a8]">
              A straightforward process
            </p>
            <h2 className="font-display text-balance mt-3 text-5xl font-bold uppercase leading-[0.94] text-[#081421]">
              Start with a conversation.
            </h2>
          </div>

          <ol className="grid gap-px border border-[#dce5ec] bg-[#dce5ec] md:grid-cols-3">
            {process.map((step, index) => (
              <li key={step.title} className="bg-[#f7f9fb] p-7">
                <span className="font-display text-2xl font-bold text-[#1266a8]">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-[#081421]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#526a7f]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#1266a8] py-14 text-white md:py-18">
        <div className="shell flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">
              Ready to arrange a visit?
            </p>
            <h2 className="font-display mt-2 text-4xl font-bold uppercase md:text-5xl">
              Speak to the workshop team.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.phoneHref}
              className="cta cta-dark inline-flex"
            >
              <PhoneIcon className="h-4 w-4" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Workshop service enquiry")}`}
              className="cta cta-outline-light inline-flex"
            >
              <MailIcon className="h-4 w-4" />
              <span>Email the workshop</span>
              <ArrowRightIcon className="cta-arrow" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#081421] py-8 text-white">
        <div className="shell flex flex-col justify-between gap-3 text-sm text-white/65 sm:flex-row">
          <p>All makes and models welcome.</p>
          <Link className="font-bold text-[#73c6fb] hover:text-white" href="/vehicles">
            Looking for your next vehicle?
          </Link>
        </div>
      </section>
    </>
  );
}

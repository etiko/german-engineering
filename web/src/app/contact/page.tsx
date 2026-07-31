import type { Metadata } from "next";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/ui/icons";
import { EnquiryForm } from "@/features/enquiries/components/enquiry-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact and Find Us",
  description:
    "Contact German Engineering Car Specialists or get directions to our Haverhill showroom and workshop.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#081421] py-16 text-white md:py-20">
        <div className="shell grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#73c6fb]">
              Contact and directions
            </p>
            <h1 className="font-display text-balance mt-3 text-6xl font-bold uppercase leading-[0.9] tracking-[-0.025em] md:text-7xl">
              Visit, call or send the team a message.
            </h1>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <a
              href={siteConfig.phoneHref}
              className="cta cta-primary inline-flex"
            >
              <PhoneIcon className="h-4 w-4" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="cta cta-outline-light inline-flex"
            >
              <MailIcon className="h-4 w-4" />
              <span>Email the team</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section-grid bg-[#f7f9fb] py-16 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="grid gap-6">
            <section className="border border-[#dce5ec] bg-white p-7 md:p-8">
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#1266a8] text-white">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#1266a8]">
                    Find us
                  </p>
                  <h2 className="font-display mt-1 text-3xl font-bold uppercase text-[#081421]">
                    Haverhill, Suffolk
                  </h2>
                </div>
              </div>

              <address className="mt-6 not-italic leading-7 text-[#38516a]">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.locality}, {siteConfig.address.region}
                <br />
                {siteConfig.address.postcode}
              </address>

              <a
                href={siteConfig.addressHref}
                target="_blank"
                rel="noreferrer"
                className="cta cta-dark mt-7 inline-flex"
              >
                <MapPinIcon className="h-4 w-4" />
                <span>Open Google Maps</span>
              </a>
              <p className="mt-4 text-xs leading-6 text-[#6e8396]">
                The map opens only when selected, avoiding an automatic
                third-party embed.
              </p>
            </section>

            <section className="border border-[#dce5ec] bg-[#081421] p-7 text-white md:p-8">
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#36546a] text-white">
                  <ClockIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#9ab4c4]">
                    Opening hours
                  </p>
                  <h2 className="font-display mt-1 text-3xl font-bold uppercase">
                    Open seven days
                  </h2>
                </div>
              </div>

              <dl className="mt-7 grid gap-4">
                {siteConfig.openingHours.map((period) => (
                  <div
                    key={period.label}
                    className="flex items-center justify-between gap-4 border-b border-white/12 pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="text-sm text-white/60">{period.label}</dt>
                    <dd className="font-bold">
                      <time dateTime={period.opens}>{period.opens}</time>
                      <span className="mx-1 text-[#9ab4c4]" aria-hidden="true">
                        -
                      </span>
                      <time dateTime={period.closes}>{period.closes}</time>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-xs leading-6 text-white/50">
                Alternative appointment times are available by prior
                arrangement.
              </p>
            </section>

            <p className="border-l-4 border-[#1266a8] bg-[#eef3f6] p-5 text-sm leading-7 text-[#38516a]">
              Please call before travelling to view a specific vehicle so the
              team can confirm its availability.
            </p>
          </div>

          <div className="border border-[#dce5ec] bg-white p-7 shadow-[0_18px_50px_rgba(8,20,33,0.08)] md:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#1266a8]">
              Send an enquiry
            </p>
            <h2 className="font-display mt-3 text-4xl font-bold uppercase text-[#081421]">
              How can we help?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-[#526a7f]">
              Use the form for sales, sourcing, servicing, repairs, bodywork or
              a general question.
            </p>
            <div className="mt-8">
              <EnquiryForm kind="contact" recipient={siteConfig.email} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

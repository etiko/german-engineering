import Image from "next/image";
import Link from "next/link";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/ui/icons";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-[#081421] text-white">
      <div className="shell py-14 md:py-16">
        <div className="grid gap-10 border-b border-white/12 pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <Link
              href="/"
              aria-label={`${siteConfig.name} home`}
              className="inline-flex border-l-4 border-[#1266a8] pl-5 opacity-90 transition hover:opacity-100"
            >
              <Image
                src={siteConfig.logoUrl}
                alt={siteConfig.name}
                width={204}
                height={106}
                sizes="204px"
                className="h-20 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="mt-6 max-w-md leading-7 text-white/65">
              Used cars and vans, servicing, diagnostics and vehicle care from
              an independent team in Haverhill, Suffolk.
            </p>
            <p className="mt-4 text-sm font-semibold text-white">
              Vehicle sales and workshop support, seven days a week.
            </p>
          </div>

          <section aria-labelledby="footer-hours-heading">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center bg-[#1266a8] text-white">
                <ClockIcon className="h-5 w-5" />
              </span>
              <div>
                <h2
                  id="footer-hours-heading"
                  className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#73c6fb]"
                >
                  Opening hours
                </h2>
                <p className="mt-1 text-sm text-white/55">
                  Showroom and workshop
                </p>
              </div>
            </div>

            <dl className="mt-5 grid gap-3 sm:grid-cols-2">
              {siteConfig.openingHours.map((period) => (
                <div
                  key={period.label}
                  className="border border-white/12 bg-white/[0.03] p-5"
                >
                  <dt className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#9eb8ca]">
                    {period.label}
                  </dt>
                  <dd className="font-display mt-2 text-3xl font-bold text-white">
                    <time dateTime={period.opens}>{period.opens}</time>
                    <span className="mx-1 text-[#73c6fb]" aria-hidden="true">
                      -
                    </span>
                    <time dateTime={period.closes}>{period.closes}</time>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs leading-6 text-white/45">
              Alternative appointment times are available by prior
              arrangement.
            </p>
          </section>
        </div>

        <div className="mt-9">
          <h2 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#73c6fb]">
            Contact
          </h2>
          <address className="mt-5 grid gap-3 not-italic lg:grid-cols-3">
            <a
              className="group flex h-full items-start gap-4 border border-white/12 bg-white/[0.03] p-5 transition hover:border-[#46a7e8] hover:bg-white/[0.06]"
              href={siteConfig.phoneHref}
              aria-label={`Call sales and enquiries on ${siteConfig.phoneDisplay}`}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center bg-[#1266a8] text-white transition group-hover:bg-[#1984d1]">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-[#9eb8ca]">
                  Sales and enquiries
                </span>
                <span className="mt-1 block font-semibold text-white">
                  Call our team
                </span>
                <span className="mt-0.5 block text-sm text-white/60">
                  {siteConfig.phoneDisplay}
                </span>
              </span>
            </a>

            <a
              className="group flex h-full items-start gap-4 border border-white/12 bg-white/[0.03] p-5 transition hover:border-[#46a7e8] hover:bg-white/[0.06]"
              href={`mailto:${siteConfig.email}`}
              aria-label={`Email ${siteConfig.name}`}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center bg-[#1266a8] text-white transition group-hover:bg-[#1984d1]">
                <MailIcon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-[#9eb8ca]">
                  Email the team
                </span>
                <span className="mt-1 block font-semibold text-white">
                  Send an enquiry
                </span>
                <span className="mt-0.5 block break-words text-sm text-white/60">
                  {siteConfig.email}
                </span>
              </span>
            </a>

            <a
              className="group flex h-full items-start gap-4 border border-white/12 bg-white/[0.03] p-5 transition hover:border-[#46a7e8] hover:bg-white/[0.06]"
              href={siteConfig.addressHref}
              target="_blank"
              rel="noreferrer"
              aria-label={`Get directions to ${siteConfig.name}`}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center bg-white/10 text-[#73c6fb]">
                <MapPinIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-[#9eb8ca]">
                  Visit the showroom
                </span>
                <span className="mt-1 block text-sm leading-6 text-white/70">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.locality}, {siteConfig.address.region}
                  <br />
                  {siteConfig.address.postcode}
                </span>
                <span className="mt-2 block text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-[#73c6fb]">
                  Get directions
                </span>
              </span>
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-white/12">
        <div className="shell flex flex-col gap-4 py-6 text-xs leading-6 text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            Company No. 10771039. FCA No. 780109. Credit broker, not a lender.
          </p>
          <p>
            Copyright {new Date().getFullYear()} {siteConfig.shortName}
          </p>
        </div>
      </div>
    </footer>
  );
}

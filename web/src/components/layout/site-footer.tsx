import Image from "next/image";
import Link from "next/link";
import {
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/ui/icons";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-[#081421] text-white">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <Image
            src={siteConfig.logoUrl}
            alt={siteConfig.name}
            width={204}
            height={106}
            sizes="180px"
            className="h-20 w-auto rounded-sm bg-white px-3 py-2 object-contain"
          />
          <p className="mt-6 max-w-md leading-7 text-white/65">
            Used cars and vans, servicing, diagnostics and vehicle care from an
            independent team in Haverhill, Suffolk.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#73c6fb]">
            Explore
          </h2>
          <ul className="mt-5 space-y-3 text-sm font-semibold text-white/75">
            <li>
              <Link className="hover:text-white" href="/vehicles">
                Current vehicles
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/#sell">
                Sell your car
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/#finance">
                Vehicle finance
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/#services">
                Workshop services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#73c6fb]">
            Contact
          </h2>
          <address className="mt-5 grid gap-3 not-italic">
            <a
              className="group flex items-start gap-4 border border-white/12 bg-white/[0.03] p-4 transition hover:border-[#46a7e8] hover:bg-white/[0.06]"
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
              className="group flex items-start gap-4 border border-white/12 bg-white/[0.03] p-4 transition hover:border-[#46a7e8] hover:bg-white/[0.06]"
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

            <div className="flex items-start gap-4 border border-white/12 bg-white/[0.03] p-4">
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
              </span>
            </div>
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

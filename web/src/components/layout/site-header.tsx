import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/ui/icons";
import { siteConfig } from "@/lib/site";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Vehicles", href: "/vehicles" },
  { label: "Sell your car", href: "/sell-your-car" },
  { label: "Finance", href: "/finance" },
  { label: "Services", href: "/services" },
];

export function SiteHeader() {
  return (
    <header className="relative z-50 bg-white">
      <div className="bg-[#081421] text-white">
        <div className="shell flex min-h-12 items-center justify-between gap-4 py-2">
          <span className="hidden text-xs font-bold uppercase tracking-[0.12em] text-white/65 lg:inline">
            Vehicle sales and workshop services in Haverhill
          </span>
          <div className="ml-auto flex items-center gap-4 sm:gap-6">
            <a
              className="header-contact"
              href={`mailto:${siteConfig.email}`}
              aria-label={`Email ${siteConfig.name}`}
            >
              <span className="header-contact-icon">
                <MailIcon className="h-4 w-4" />
              </span>
              <span className="header-contact-copy header-email-copy">
                <span className="header-contact-label">Email the team</span>
                <span className="header-contact-value">Send an enquiry</span>
              </span>
            </a>
            <a
              className="header-contact"
              href={siteConfig.phoneHref}
              aria-label={`Call sales and enquiries on ${siteConfig.phoneDisplay}`}
            >
              <span className="header-contact-icon">
                <PhoneIcon className="h-4 w-4" />
              </span>
              <span className="header-contact-copy">
                <span className="header-contact-label">
                  Sales and enquiries
                </span>
                <span className="header-contact-value">
                  {siteConfig.phoneDisplay}
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-[#dce5ec]">
        <div className="shell flex min-h-24 items-center justify-between gap-8 py-3">
          <Link href="/" aria-label={`${siteConfig.name} home`}>
            <Image
              src={siteConfig.logoUrl}
              alt={siteConfig.name}
              width={204}
              height={106}
              sizes="204px"
              className="h-16 w-auto object-contain md:h-[4.5rem]"
            />
          </Link>

          <nav aria-label="Primary navigation" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#142a40] transition hover:text-[#1266a8]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href="/vehicles"
            className="cta cta-primary cta-compact hidden sm:inline-flex lg:hidden xl:inline-flex"
          >
            <span>View stock</span>
            <ArrowRightIcon className="cta-arrow" />
          </Link>

          <details className="mobile-menu relative lg:hidden">
            <summary className="cursor-pointer border border-[#b7c7d3] px-4 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-[#081421]">
              Menu
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="absolute right-0 top-[calc(100%+0.75rem)] w-72 border border-[#dce5ec] bg-white p-3 shadow-2xl"
            >
              <ul>
                {navigation.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="block border-b border-[#eef3f6] px-3 py-3 text-sm font-bold text-[#142a40] last:border-0 hover:bg-[#eef3f6]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

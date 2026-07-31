import type { ReactNode } from "react";
import Link from "next/link";
import { MailIcon, PhoneIcon } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site";

export type PolicySection = {
  id: string;
  title: string;
  paragraphs?: ReactNode[];
  items?: ReactNode[];
};

type PolicyPageProps = {
  eyebrow: string;
  title: string;
  introduction: string;
  sections: PolicySection[];
};

export function PolicyPage({
  eyebrow,
  title,
  introduction,
  sections,
}: PolicyPageProps) {
  return (
    <>
      <section className="bg-[#081421] py-16 text-white md:py-20">
        <div className="shell max-w-5xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#73c6fb]">
            {eyebrow}
          </p>
          <h1 className="font-display text-balance mt-3 text-6xl font-bold uppercase leading-[0.9] tracking-[-0.025em] md:text-7xl">
            {title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">
            {introduction}
          </p>
          <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.14em] text-[#9eb8ca]">
            Last updated 30 July 2026
          </p>
        </div>
      </section>

      <section className="section-grid bg-[#f7f9fb] py-16 md:py-24">
        <div className="shell grid gap-8 lg:grid-cols-[1fr_18rem] lg:items-start">
          <article className="border border-[#dce5ec] bg-white p-7 md:p-10 lg:p-12">
            <div className="grid gap-12">
              {sections.map((section) => (
                <section
                  id={section.id}
                  key={section.id}
                  className="scroll-mt-36"
                  aria-labelledby={`${section.id}-heading`}
                >
                  <h2
                    id={`${section.id}-heading`}
                    className="font-display text-3xl font-bold uppercase text-[#081421] md:text-4xl"
                  >
                    {section.title}
                  </h2>
                  {section.paragraphs?.map((paragraph, index) => (
                    <p
                      key={index}
                      className="mt-4 max-w-3xl leading-8 text-[#526a7f] [&_a]:font-bold [&_a]:text-[#1266a8] [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-[#081421]"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.items ? (
                    <ul className="mt-5 grid gap-3">
                      {section.items.map((item, index) => (
                        <li
                          key={index}
                          className="flex gap-4 leading-7 text-[#526a7f] [&_a]:font-bold [&_a]:text-[#1266a8] [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-[#081421]"
                        >
                          <span
                            className="mt-2.5 h-2 w-2 shrink-0 bg-[#1266a8]"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          </article>

          <aside className="border border-[#dce5ec] bg-white p-6 lg:sticky lg:top-32">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#1266a8]">
              Questions or concerns
            </p>
            <p className="mt-4 text-sm leading-7 text-[#526a7f]">
              Contact the team if you need clarification or want to exercise a
              right described on this page.
            </p>
            <div className="mt-6 grid gap-3">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-3 font-bold text-[#081421] hover:text-[#1266a8]"
              >
                <PhoneIcon className="h-4 w-4 text-[#1266a8]" />
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-3 break-all text-sm font-bold leading-6 text-[#081421] hover:text-[#1266a8]"
              >
                <MailIcon className="mt-1 h-4 w-4 shrink-0 text-[#1266a8]" />
                {siteConfig.email}
              </a>
            </div>
            <Link
              href="/contact"
              className="cta cta-outline-dark mt-7 inline-flex w-full"
            >
              Contact details
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}

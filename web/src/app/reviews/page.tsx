import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { reviewHighlights } from "@/features/reviews/data/reviews";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Read customer feedback themes and visit the independent review profiles for German Engineering Car Specialists.",
  alternates: {
    canonical: "/reviews",
  },
};

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-[#081421] py-16 text-white md:py-20">
        <div className="shell grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#73c6fb]">
              Customer feedback
            </p>
            <h1 className="font-display text-balance mt-3 text-6xl font-bold uppercase leading-[0.9] tracking-[-0.025em] md:text-7xl">
              Trust built through real conversations.
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/70">
            Explore the themes customers mention most, then visit the
            independent profiles for the latest complete reviews.
          </p>
        </div>
      </section>

      <section className="section-grid bg-[#f7f9fb] py-16 md:py-24">
        <div className="shell">
          <div className="grid gap-px border border-[#dce5ec] bg-[#dce5ec] lg:grid-cols-3">
            {reviewHighlights.map((review, index) => (
              <article key={review.title} className="bg-white p-7 md:p-9">
                <span className="font-display text-4xl font-bold text-[#9ab4c4]">
                  0{index + 1}
                </span>
                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-[#1266a8]">
                  {review.context}
                </p>
                <h2 className="font-display mt-3 text-3xl font-bold uppercase leading-none text-[#081421]">
                  {review.title}
                </h2>
                <p className="mt-4 leading-7 text-[#526a7f]">
                  {review.summary}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 bg-[#111820] p-7 text-white md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#9ab4c4]">
                Independent sources
              </p>
              <h2 className="font-display mt-2 text-4xl font-bold uppercase">
                Read the latest full reviews.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/60">
                Review summaries on this site do not replace the original
                source. Ratings and full comments remain on the external
                profiles.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={siteConfig.reviewProfiles.autoTrader}
                target="_blank"
                rel="noreferrer"
                className="cta cta-primary inline-flex"
              >
                <span>AutoTrader profile</span>
                <ArrowRightIcon className="cta-arrow" />
              </a>
              <a
                href={siteConfig.reviewProfiles.google}
                target="_blank"
                rel="noreferrer"
                className="cta cta-outline-light inline-flex"
              >
                <span>Google profile</span>
                <ArrowRightIcon className="cta-arrow" />
              </a>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.14em] text-[#1266a8] hover:text-[#081421]"
            >
              Speak with the team
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

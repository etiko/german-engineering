import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";

export default function NotFound() {
  return (
    <section className="bg-[#f7f9fb] py-24 md:py-32">
      <div className="shell max-w-3xl text-center">
        <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#1266a8]">
          Page not found
        </p>
        <h1 className="font-display mt-3 text-6xl font-bold uppercase leading-[0.9] text-[#081421] md:text-7xl">
          This route has reached a dead end.
        </h1>
        <p className="mx-auto mt-6 max-w-xl leading-8 text-[#526a7f]">
          The page may have moved or the vehicle may no longer be available.
          Browse the latest stock or return to the homepage.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/vehicles"
            className="cta cta-primary inline-flex"
          >
            <span>Browse vehicles</span>
            <ArrowRightIcon className="cta-arrow" />
          </Link>
          <Link
            href="/"
            className="cta cta-outline-dark inline-flex"
          >
            Return home
          </Link>
        </div>
      </div>
    </section>
  );
}

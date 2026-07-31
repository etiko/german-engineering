import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  PhoneIcon,
} from "@/components/ui/icons";
import { VehicleCard } from "@/features/vehicles/components/vehicle-card";
import { VehicleSearch } from "@/features/vehicles/components/vehicle-search";
import {
  getFeaturedVehicles,
  getVehicleFacets,
} from "@/features/vehicles/data/vehicles";
import { siteConfig } from "@/lib/site";

const services = [
  {
    number: "01",
    title: "Servicing and MOT",
    description:
      "Routine servicing, MOT preparation and manufacturer-schedule maintenance for all makes.",
  },
  {
    number: "02",
    title: "Diagnostics and repair",
    description:
      "Clear fault finding, practical advice and experienced mechanical repair under one roof.",
  },
  {
    number: "03",
    title: "Bodywork and tyres",
    description:
      "Smart repairs, paintwork, tyres, exhausts and accident support from a local specialist.",
  },
];

export default async function HomePage() {
  const [featuredVehicles, facets] = await Promise.all([
    getFeaturedVehicles(),
    getVehicleFacets(),
  ]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["AutoDealer", "AutomotiveBusiness"],
    name: siteConfig.name,
    url: siteConfig.url,
    logo: siteConfig.logoUrl,
    image: siteConfig.heroImageUrl,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postcode,
      addressCountry: "GB",
    },
    openingHoursSpecification: siteConfig.openingHours.map((period) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: period.days,
      opens: period.opens,
      closes: period.closes,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="relative isolate min-h-[760px] overflow-hidden bg-[#081421] text-white md:min-h-[790px]">
        <Image
          src={siteConfig.heroImageUrl}
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover object-[64%_center]"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="shell relative z-10 flex min-h-[760px] flex-col justify-center pb-48 pt-24 md:min-h-[790px] md:pb-40 md:pt-32">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.22em] text-[#73c6fb]">
              Independent vehicle specialists in Haverhill
            </p>
            <h1 className="font-display text-balance text-6xl font-bold uppercase leading-[0.88] tracking-[-0.035em] sm:text-7xl md:text-[6.5rem]">
              Find the right car.
              <span className="block text-[#73c6fb]">Keep it at its best.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
              Quality used cars and vans, backed by experienced servicing,
              diagnostics and aftercare for every stage of ownership.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/vehicles"
                className="cta cta-primary inline-flex"
              >
                <span>Browse all vehicles</span>
                <ArrowRightIcon className="cta-arrow" />
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="cta cta-outline-light inline-flex"
              >
                <PhoneIcon className="h-4 w-4" />
                <span>Speak to sales</span>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20">
          <div className="shell">
            <VehicleSearch
              idPrefix="home-stock"
              makes={facets.makes}
              bodyTypes={facets.bodyTypes}
            />
          </div>
        </div>
      </section>

      <section className="border-b border-[#dce5ec] bg-white">
        <div className="shell grid gap-px bg-[#dce5ec] md:grid-cols-3">
          {[
            ["80+", "Years of combined motor-industry experience"],
            ["All makes", "Sales, servicing, repairs and diagnostics"],
            ["Haverhill", "Convenient for Suffolk and Cambridge"],
          ].map(([value, label]) => (
            <div
              key={value}
              className="flex items-center gap-5 bg-white px-6 py-7 md:px-8"
            >
              <strong className="font-display text-4xl uppercase text-[#1266a8]">
                {value}
              </strong>
              <span className="text-sm font-semibold leading-6 text-[#38516a]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-grid-dark overflow-hidden bg-[#081421] py-20 text-white md:py-28">
        <div className="shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#73c6fb]">
                Available now
              </p>
              <h2 className="font-display mt-3 text-5xl font-bold uppercase tracking-[-0.02em] text-white md:text-6xl">
                Featured vehicles
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-white/65">
                A selection of current cars and vans, chosen to give you a
                quick view of the latest stock from our Haverhill showroom.
              </p>
            </div>
            <Link
              href="/vehicles"
              className="cta cta-outline-light inline-flex self-start md:self-auto"
            >
              <span>View all stock</span>
              <ArrowRightIcon className="cta-arrow" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} tone="dark" />
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-grid bg-white py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#1266a8]">
              Workshop expertise
            </p>
            <h2 className="font-display text-balance mt-3 text-5xl font-bold uppercase leading-[0.94] tracking-[-0.025em] text-[#081421] md:text-6xl">
              One trusted team for the road ahead.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#526a7f]">
              From routine maintenance to diagnostics, tyres and bodywork, our
              workshop supports all makes with practical advice and experienced
              care.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/services" className="cta cta-primary inline-flex">
                <span>Explore services</span>
                <ArrowRightIcon className="cta-arrow" />
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="cta cta-outline-dark inline-flex"
              >
                <PhoneIcon className="h-4 w-4" />
                <span>Call to book</span>
              </a>
            </div>
          </div>

          <div className="divide-y divide-[#dce5ec] border-y border-[#dce5ec]">
            {services.map((service) => (
              <article
                key={service.number}
                className="grid gap-5 py-8 sm:grid-cols-[5rem_1fr] md:py-10"
              >
                <span className="font-display text-4xl font-bold text-[#46a7e8]">
                  {service.number}
                </span>
                <div>
                  <h3 className="font-display text-3xl font-bold uppercase tracking-[-0.01em] text-[#081421]">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-2xl leading-7 text-[#526a7f]">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081421] py-20 text-white md:py-28">
        <div className="shell grid overflow-hidden border border-white/15 lg:grid-cols-2">
          <article id="finance" className="p-8 md:p-12">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#73c6fb]">
              Flexible finance
            </p>
            <h2 className="font-display mt-3 text-5xl font-bold uppercase leading-[0.94]">
              Make the numbers work for you.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-white/70">
              Explore vehicle finance with clear information and a secure
              application route through our approved provider.
            </p>
            <Link
              href="/finance"
              className="mt-8 inline-flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.14em] text-[#73c6fb] hover:text-white"
            >
              Make a finance enquiry
              <span aria-hidden="true">-&gt;</span>
            </Link>
          </article>

          <article
            id="sell"
            className="border-t border-white/15 bg-[#1266a8] p-8 md:p-12 lg:border-l lg:border-t-0"
          >
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-white/70">
              Sell or part exchange
            </p>
            <h2 className="font-display mt-3 text-5xl font-bold uppercase leading-[0.94]">
              A simpler way to change your car.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-white/78">
              Tell us about your current vehicle and our team will respond with
              the next steps, without the hassle of selling privately.
            </p>
            <Link
              href="/sell-your-car"
              className="mt-8 inline-flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.14em] text-white hover:text-[#d9f2ff]"
            >
              Request a valuation
              <span aria-hidden="true">-&gt;</span>
            </Link>
          </article>
        </div>
      </section>

      <section id="about" className="bg-[#eef3f6] py-20 md:py-28">
        <div className="shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#1266a8]">
              German expertise, wider choice
            </p>
            <h2 className="font-display text-balance mt-3 text-5xl font-bold uppercase leading-[0.94] text-[#081421] md:text-6xl">
              Specialist knowledge without the main-dealer experience.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-[#38516a]">
              Based in Haverhill, we combine specialist knowledge of
              German-engineered vehicles with carefully selected stock and
              workshop support for all makes.
            </p>
            <p className="mt-5 leading-8 text-[#526a7f]">
              Whether you are buying, selling or maintaining a vehicle, the aim
              is straightforward: clear advice, dependable work and a team you
              can speak to.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-20 md:py-28">
        <div className="shell grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#1266a8]">
              Visit or contact us
            </p>
            <h2 className="font-display text-balance mt-3 text-5xl font-bold uppercase leading-[0.94] text-[#081421] md:text-6xl">
              Start with a conversation.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#526a7f]">
              Speak with the team about current stock, vehicle sourcing,
              servicing, diagnostics or bodywork.
            </p>
          </div>

          <div className="border border-[#dce5ec] bg-[#f7f9fb] p-7 md:p-9">
            <dl className="space-y-6">
              <div>
                <dt className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#6e8396]">
                  Telephone
                </dt>
                <dd className="mt-2">
                  <a
                    href={siteConfig.phoneHref}
                    className="font-display text-3xl font-bold text-[#081421] hover:text-[#1266a8]"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#6e8396]">
                  Email
                </dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-semibold text-[#081421] hover:text-[#1266a8]"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#6e8396]">
                  Showroom
                </dt>
                <dd className="mt-2 leading-7 text-[#38516a]">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.locality}, {siteConfig.address.region}
                  <br />
                  {siteConfig.address.postcode}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}

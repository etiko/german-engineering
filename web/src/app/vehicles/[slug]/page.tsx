import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PhoneIcon } from "@/components/ui/icons";
import { VehicleCard } from "@/features/vehicles/components/vehicle-card";
import {
  getVehicleBySlug,
  getVehicleSlugs,
  getVehicles,
} from "@/features/vehicles/data/vehicles";
import {
  formatMileage,
  formatPrice,
} from "@/features/vehicles/formatters";
import { siteConfig } from "@/lib/site";

type VehiclePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getVehicleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: VehiclePageProps): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = await getVehicleBySlug(slug);

  if (!vehicle) {
    return {
      title: "Vehicle not found",
    };
  }

  return {
    title: `${vehicle.year} ${vehicle.make} ${vehicle.model} for sale`,
    description: `${vehicle.derivative}, ${formatMileage(vehicle.mileage)}, ${vehicle.fuel}, ${vehicle.transmission}. Available in Haverhill for ${formatPrice(vehicle.price)}.`,
    alternates: {
      canonical: `/vehicles/${vehicle.slug}`,
    },
    openGraph: {
      type: "website",
      title: `${vehicle.year} ${vehicle.make} ${vehicle.model}`,
      description: vehicle.description,
      images: [vehicle.imageUrl],
    },
  };
}

export default async function VehiclePage({ params }: VehiclePageProps) {
  const { slug } = await params;
  const vehicle = await getVehicleBySlug(slug);

  if (!vehicle) {
    notFound();
  }

  const relatedVehicles = (await getVehicles())
    .filter((item) => item.id !== vehicle.id)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: `${vehicle.year} ${vehicle.make} ${vehicle.model}`,
    image: vehicle.imageUrl,
    description: vehicle.description,
    brand: {
      "@type": "Brand",
      name: vehicle.make,
    },
    model: vehicle.model,
    color: vehicle.colour,
    fuelType: vehicle.fuel,
    mileageFromOdometer: {
      "@type": "QuantitativeValue",
      value: vehicle.mileage,
      unitCode: "SMI",
    },
    vehicleConfiguration: vehicle.derivative,
    bodyType: vehicle.bodyType,
    vehicleTransmission: vehicle.transmission,
    offers: {
      "@type": "Offer",
      price: vehicle.price,
      priceCurrency: "GBP",
      availability:
        vehicle.status === "available"
          ? "https://schema.org/InStock"
          : "https://schema.org/SoldOut",
      url: `${siteConfig.url}/vehicles/${vehicle.slug}`,
      seller: {
        "@type": "AutoDealer",
        name: siteConfig.name,
        telephone: siteConfig.phoneDisplay,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="border-b border-white/10 bg-[#081421] py-10 text-white md:py-14">
        <div className="shell">
          <nav aria-label="Breadcrumb" className="text-xs text-white/58">
            <Link className="hover:text-white" href="/">
              Home
            </Link>
            <span aria-hidden="true"> / </span>
            <Link className="hover:text-white" href="/vehicles">
              Vehicles
            </Link>
            <span aria-hidden="true"> / </span>
            <span>
              {vehicle.make} {vehicle.model}
            </span>
          </nav>

          <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#73c6fb]">
                {vehicle.year} {vehicle.bodyType}
              </p>
              <h1 className="font-display mt-2 text-6xl font-bold uppercase leading-[0.9] tracking-[-0.025em] md:text-7xl">
                {vehicle.make} {vehicle.model}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/68">
                {vehicle.derivative}
              </p>
            </div>
            <strong className="font-display text-5xl font-bold text-white md:text-6xl">
              {formatPrice(vehicle.price)}
            </strong>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fb] py-10 md:py-16">
        <div className="shell grid gap-8 lg:grid-cols-[minmax(0,1.55fr)_minmax(20rem,0.75fr)]">
          <div>
            <div className="relative aspect-[4/3] overflow-hidden bg-[#dce5ec]">
              <Image
                src={vehicle.imageUrl}
                alt={`${vehicle.year} ${vehicle.make} ${vehicle.model} in ${vehicle.colour}`}
                fill
                preload
                sizes="(max-width: 1023px) 100vw, 65vw"
                className="object-cover"
              />
              <span className="absolute left-5 top-5 bg-[#081421] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-white">
                {vehicle.status}
              </span>
            </div>

            <div className="mt-8 border border-[#dce5ec] bg-white p-6 md:p-8">
              <h2 className="font-display text-4xl font-bold uppercase text-[#081421]">
                Vehicle overview
              </h2>
              <p className="mt-5 text-base leading-8 text-[#526a7f]">
                {vehicle.description} Contact our team for full service-history,
                warranty and availability information before travelling.
              </p>

              <dl className="mt-8 grid gap-px bg-[#dce5ec] sm:grid-cols-2">
                {[
                  ["Mileage", formatMileage(vehicle.mileage)],
                  ["Transmission", vehicle.transmission],
                  ["Fuel", vehicle.fuel],
                  ["Body style", vehicle.bodyType],
                  ["Colour", vehicle.colour],
                  ["Registration year", vehicle.year.toString()],
                ].map(([label, value]) => (
                  <div key={label} className="bg-[#f7f9fb] p-5">
                    <dt className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#6e8396]">
                      {label}
                    </dt>
                    <dd className="mt-2 font-bold text-[#142a40]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <aside className="lg:sticky lg:top-8 lg:self-start">
            <div className="border border-[#dce5ec] bg-white p-6 shadow-[0_18px_50px_rgba(8,20,33,0.08)] md:p-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#1266a8]">
                Interested in this vehicle?
              </p>
              <h2 className="font-display mt-3 text-4xl font-bold uppercase leading-none text-[#081421]">
                Speak with the sales team.
              </h2>
              <p className="mt-4 leading-7 text-[#526a7f]">
                Quote stock reference {vehicle.id} when you call or email.
              </p>

              <div className="mt-7 grid gap-3">
                <a
                  href={siteConfig.phoneHref}
                  className="cta cta-primary inline-flex"
                >
                  <PhoneIcon className="h-4 w-4" />
                  <span>Call {siteConfig.phoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Enquiry about ${vehicle.year} ${vehicle.make} ${vehicle.model} - ${vehicle.id}`)}`}
                  className="cta cta-outline-dark inline-flex"
                >
                  Email an enquiry
                </a>
                <Link
                  href="/#sell"
                  className="cta cta-outline-dark inline-flex"
                >
                  Request part exchange
                </Link>
              </div>

              <p className="mt-6 border-t border-[#eef3f6] pt-5 text-xs leading-6 text-[#6e8396]">
                Vehicle information should be confirmed with the dealership
                before purchase. Finance is subject to status and approval.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="shell">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#1266a8]">
                More current stock
              </p>
              <h2 className="font-display mt-3 text-5xl font-bold uppercase text-[#081421]">
                You may also like
              </h2>
            </div>
            <Link
              href="/vehicles"
              className="hidden text-sm font-extrabold uppercase tracking-[0.14em] text-[#1266a8] hover:text-[#081421] sm:inline-flex"
            >
              All vehicles -&gt;
            </Link>
          </div>
          <div className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedVehicles.map((item) => (
              <VehicleCard key={item.id} vehicle={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

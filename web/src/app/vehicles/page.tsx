import type { Metadata } from "next";
import Link from "next/link";
import { VehicleCard } from "@/features/vehicles/components/vehicle-card";
import { VehicleSearch } from "@/features/vehicles/components/vehicle-search";
import {
  getVehicleFacets,
  getVehicles,
} from "@/features/vehicles/data/vehicles";

export const metadata: Metadata = {
  title: "Used Cars and Vans in Haverhill",
  description:
    "Browse quality used cars and vans available from German Engineering Car Specialists in Haverhill, Suffolk.",
  alternates: {
    canonical: "/vehicles",
  },
};

type VehiclesPageProps = {
  searchParams: Promise<{
    make?: string | string[];
    body?: string | string[];
    maxPrice?: string | string[];
    page?: string | string[];
  }>;
};

const vehiclesPerPage = 10;

function firstValue(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

function positiveInteger(value: string | undefined): number {
  if (!value || !/^\d+$/.test(value)) {
    return 1;
  }

  const parsed = Number(value);
  return Number.isSafeInteger(parsed) && parsed > 0 ? parsed : 1;
}

export default async function VehiclesPage({
  searchParams,
}: VehiclesPageProps) {
  const params = await searchParams;
  const make = firstValue(params.make);
  const bodyType = firstValue(params.body);
  const maxPriceValue = firstValue(params.maxPrice);
  const maxPrice = maxPriceValue ? Number.parseInt(maxPriceValue, 10) : undefined;
  const requestedPage = positiveInteger(firstValue(params.page));

  const [vehicles, facets] = await Promise.all([
    getVehicles({
      make,
      bodyType,
      maxPrice: Number.isFinite(maxPrice) ? maxPrice : undefined,
    }),
    getVehicleFacets(),
  ]);

  const totalPages = Math.max(1, Math.ceil(vehicles.length / vehiclesPerPage));
  const currentPage = Math.min(requestedPage, totalPages);
  const firstVehicleIndex = (currentPage - 1) * vehiclesPerPage;
  const visibleVehicles = vehicles.slice(
    firstVehicleIndex,
    firstVehicleIndex + vehiclesPerPage,
  );
  const firstVisibleVehicle =
    vehicles.length === 0 ? 0 : firstVehicleIndex + 1;
  const lastVisibleVehicle = Math.min(
    firstVehicleIndex + vehiclesPerPage,
    vehicles.length,
  );

  function pageHref(page: number): string {
    const query = new URLSearchParams();

    if (make) {
      query.set("make", make);
    }

    if (bodyType) {
      query.set("body", bodyType);
    }

    if (maxPriceValue) {
      query.set("maxPrice", maxPriceValue);
    }

    if (page > 1) {
      query.set("page", page.toString());
    }

    const search = query.toString();
    return search ? `/vehicles?${search}` : "/vehicles";
  }

  return (
    <>
      <section className="bg-[#081421] py-16 text-white md:py-20">
        <div className="shell">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#73c6fb]">
            Current stock
          </p>
          <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h1 className="font-display text-6xl font-bold uppercase leading-[0.9] tracking-[-0.025em] md:text-7xl">
              Used cars and vans
            </h1>
            <p className="max-w-lg leading-7 text-white/68">
              Browse the latest vehicles available from our Haverhill showroom.
              Contact the team to confirm availability or arrange a viewing.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dce5ec] bg-[#eef3f6] py-6">
        <div className="shell">
          <VehicleSearch
            idPrefix="listing-stock"
            makes={facets.makes}
            bodyTypes={facets.bodyTypes}
            defaults={{
              make,
              bodyType,
              maxPrice: maxPriceValue,
            }}
            showReset
          />
        </div>
      </section>

      <section className="bg-[#f7f9fb] py-14 md:py-20">
        <div className="shell">
          <div className="flex items-center justify-between gap-6 border-b border-[#c8d6e0] pb-5">
            <p className="text-sm font-bold text-[#38516a]">
              {vehicles.length === 0
                ? "No vehicles found"
                : `Showing ${firstVisibleVehicle}-${lastVisibleVehicle} of ${vehicles.length} ${
                    vehicles.length === 1 ? "vehicle" : "vehicles"
                  }`}
            </p>
            <p className="hidden text-xs font-extrabold uppercase tracking-[0.14em] text-[#6e8396] sm:block">
              Sorted by newest stock
            </p>
          </div>

          {vehicles.length > 0 ? (
            <>
              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {visibleVehicles.map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>

              {totalPages > 1 ? (
                <nav
                  aria-label="Vehicle results pages"
                  className="mt-12 border-t border-[#c8d6e0] pt-8"
                >
                  <ul className="flex flex-wrap items-center justify-center gap-2">
                    {currentPage > 1 ? (
                      <li>
                        <Link
                          href={pageHref(currentPage - 1)}
                          className="cta cta-outline-dark cta-compact inline-flex"
                        >
                          Previous
                        </Link>
                      </li>
                    ) : null}

                    {Array.from({ length: totalPages }, (_, index) => {
                      const page = index + 1;
                      const isCurrent = page === currentPage;

                      return (
                        <li key={page}>
                          {isCurrent ? (
                            <span
                              aria-current="page"
                              className="grid min-h-11 min-w-11 place-items-center bg-[#081421] px-3 text-sm font-extrabold text-white"
                            >
                              {page}
                            </span>
                          ) : (
                            <Link
                              href={pageHref(page)}
                              aria-label={`Go to vehicle results page ${page}`}
                              className="grid min-h-11 min-w-11 place-items-center border border-[#b7c7d3] bg-white px-3 text-sm font-extrabold text-[#142a40] hover:border-[#081421] hover:bg-[#081421] hover:text-white"
                            >
                              {page}
                            </Link>
                          )}
                        </li>
                      );
                    })}

                    {currentPage < totalPages ? (
                      <li>
                        <Link
                          href={pageHref(currentPage + 1)}
                          className="cta cta-primary cta-compact inline-flex"
                        >
                          Next
                        </Link>
                      </li>
                    ) : null}
                  </ul>
                </nav>
              ) : null}
            </>
          ) : (
            <div className="mt-8 border border-[#dce5ec] bg-white px-6 py-16 text-center">
              <h2 className="font-display text-4xl font-bold uppercase text-[#081421]">
                No vehicles match those filters
              </h2>
              <p className="mx-auto mt-3 max-w-xl leading-7 text-[#526a7f]">
                Reset the search or contact the team. We may be able to source
                the vehicle you are looking for.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

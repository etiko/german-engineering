import Image from "next/image";
import Link from "next/link";
import {
  formatMileage,
  formatPrice,
} from "@/features/vehicles/formatters";
import type { Vehicle } from "@/features/vehicles/types";

type VehicleCardProps = {
  vehicle: Vehicle;
  tone?: "dark" | "light";
};

export function VehicleCard({
  vehicle,
  tone = "light",
}: VehicleCardProps) {
  const isDark = tone === "dark";

  return (
    <article
      className={
        isDark
          ? "group flex h-full flex-col overflow-hidden border border-white/12 bg-[#19232d] text-white transition duration-300 hover:-translate-y-1 hover:border-[#6f8fa3] hover:shadow-[0_20px_50px_rgba(0,0,0,0.28)]"
          : "group flex h-full flex-col overflow-hidden border border-[#dce5ec] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#9fb5c5] hover:shadow-[0_18px_45px_rgba(8,20,33,0.12)]"
      }
    >
      <Link
        href={`/vehicles/${vehicle.slug}`}
        aria-label={`View ${vehicle.year} ${vehicle.make} ${vehicle.model}`}
        className={`relative block aspect-[4/3] shrink-0 overflow-hidden ${
          isDark ? "bg-[#24313c]" : "bg-[#dce5ec]"
        }`}
      >
        <Image
          src={vehicle.imageUrl}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model} in ${vehicle.colour}`}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-[1.035]"
        />
        <span
          className={`absolute left-4 top-4 px-3 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-white ${
            isDark ? "bg-[#36546a]" : "bg-[#081421]"
          }`}
        >
          {vehicle.status}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p
          className={`text-xs font-extrabold uppercase tracking-[0.16em] ${
            isDark ? "text-[#9ab4c4]" : "text-[#1266a8]"
          }`}
        >
          {vehicle.year} {vehicle.bodyType}
        </p>
        <h3
          className={`font-display mt-2 text-3xl font-bold uppercase leading-none ${
            isDark ? "text-white" : "text-[#081421]"
          }`}
        >
          <Link
            href={`/vehicles/${vehicle.slug}`}
            className={
              isDark ? "hover:text-[#c2d4de]" : "hover:text-[#1266a8]"
            }
          >
            {vehicle.make} {vehicle.model}
          </Link>
        </h3>
        <p
          className={`mt-3 min-h-12 text-sm leading-6 ${
            isDark ? "text-white/60" : "text-[#526a7f]"
          }`}
        >
          {vehicle.derivative}
        </p>

        <dl
          className={`mt-5 grid grid-cols-2 gap-x-4 gap-y-2 border-y py-4 text-xs ${
            isDark ? "border-white/12" : "border-[#eef3f6]"
          }`}
        >
          <div>
            <dt className={isDark ? "text-[#9eb8ca]" : "text-[#6e8396]"}>
              Mileage
            </dt>
            <dd
              className={`mt-1 font-bold ${
                isDark ? "text-white" : "text-[#142a40]"
              }`}
            >
              {formatMileage(vehicle.mileage)}
            </dd>
          </div>
          <div>
            <dt className={isDark ? "text-[#9eb8ca]" : "text-[#6e8396]"}>
              Gearbox
            </dt>
            <dd
              className={`mt-1 font-bold ${
                isDark ? "text-white" : "text-[#142a40]"
              }`}
            >
              {vehicle.transmission}
            </dd>
          </div>
          <div>
            <dt className={isDark ? "text-[#9eb8ca]" : "text-[#6e8396]"}>
              Fuel
            </dt>
            <dd
              className={`mt-1 font-bold ${
                isDark ? "text-white" : "text-[#142a40]"
              }`}
            >
              {vehicle.fuel}
            </dd>
          </div>
          <div>
            <dt className={isDark ? "text-[#9eb8ca]" : "text-[#6e8396]"}>
              Colour
            </dt>
            <dd
              className={`mt-1 font-bold ${
                isDark ? "text-white" : "text-[#142a40]"
              }`}
            >
              {vehicle.colour}
            </dd>
          </div>
        </dl>

        <div className="mt-auto flex items-center justify-between gap-4 pt-5">
          <strong
            className={`font-display text-3xl font-bold ${
              isDark ? "text-white" : "text-[#081421]"
            }`}
          >
            {formatPrice(vehicle.price)}
          </strong>
          <Link
            href={`/vehicles/${vehicle.slug}`}
            className={`text-xs font-extrabold uppercase tracking-[0.12em] ${
              isDark
                ? "text-[#a9c1cf] hover:text-white"
                : "text-[#1266a8] hover:text-[#081421]"
            }`}
          >
            Details <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

import Image from "next/image";
import Link from "next/link";
import {
  formatMileage,
  formatPrice,
} from "@/features/vehicles/formatters";
import type { Vehicle } from "@/features/vehicles/types";

type VehicleCardProps = {
  vehicle: Vehicle;
};

export function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <article className="group overflow-hidden border border-[#dce5ec] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#9fb5c5] hover:shadow-[0_18px_45px_rgba(8,20,33,0.12)]">
      <Link
        href={`/vehicles/${vehicle.slug}`}
        aria-label={`View ${vehicle.year} ${vehicle.make} ${vehicle.model}`}
        className="relative block aspect-[4/3] overflow-hidden bg-[#dce5ec]"
      >
        <Image
          src={vehicle.imageUrl}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model} in ${vehicle.colour}`}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-[1.035]"
        />
        <span className="absolute left-4 top-4 bg-[#081421] px-3 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-white">
          {vehicle.status}
        </span>
      </Link>

      <div className="p-5">
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#1266a8]">
          {vehicle.year} {vehicle.bodyType}
        </p>
        <h3 className="font-display mt-2 text-3xl font-bold uppercase leading-none text-[#081421]">
          <Link
            href={`/vehicles/${vehicle.slug}`}
            className="hover:text-[#1266a8]"
          >
            {vehicle.make} {vehicle.model}
          </Link>
        </h3>
        <p className="mt-3 min-h-12 text-sm leading-6 text-[#526a7f]">
          {vehicle.derivative}
        </p>

        <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 border-y border-[#eef3f6] py-4 text-xs">
          <div>
            <dt className="text-[#6e8396]">Mileage</dt>
            <dd className="mt-1 font-bold text-[#142a40]">
              {formatMileage(vehicle.mileage)}
            </dd>
          </div>
          <div>
            <dt className="text-[#6e8396]">Gearbox</dt>
            <dd className="mt-1 font-bold text-[#142a40]">
              {vehicle.transmission}
            </dd>
          </div>
          <div>
            <dt className="text-[#6e8396]">Fuel</dt>
            <dd className="mt-1 font-bold text-[#142a40]">{vehicle.fuel}</dd>
          </div>
          <div>
            <dt className="text-[#6e8396]">Colour</dt>
            <dd className="mt-1 font-bold text-[#142a40]">{vehicle.colour}</dd>
          </div>
        </dl>

        <div className="mt-5 flex items-center justify-between gap-4">
          <strong className="font-display text-3xl font-bold text-[#081421]">
            {formatPrice(vehicle.price)}
          </strong>
          <Link
            href={`/vehicles/${vehicle.slug}`}
            className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#1266a8] hover:text-[#081421]"
          >
            Details <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

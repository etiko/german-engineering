import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { findVehicleFacet } from "@/features/vehicles/normalizers";

type VehicleSearchProps = {
  idPrefix: string;
  makes: string[];
  bodyTypes: string[];
  defaults?: {
    make?: string;
    bodyType?: string;
    maxPrice?: string;
  };
  showReset?: boolean;
};

const fieldClassName =
  "min-h-13 w-full border border-[#c8d6e0] bg-white px-4 text-sm font-semibold text-[#142a40]";

export function VehicleSearch({
  idPrefix,
  makes,
  bodyTypes,
  defaults,
  showReset = false,
}: VehicleSearchProps) {
  const defaultMake = findVehicleFacet(defaults?.make, makes);
  const defaultBodyType = findVehicleFacet(defaults?.bodyType, bodyTypes);

  return (
    <form
      action="/vehicles"
      className="grid gap-3 bg-white p-4 shadow-[0_18px_60px_rgba(8,20,33,0.24)] sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]"
    >
      <div>
        <label
          htmlFor={`${idPrefix}-make`}
          className="mb-2 block text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#526a7f]"
        >
          Make
        </label>
        <select
          id={`${idPrefix}-make`}
          name="make"
          defaultValue={defaultMake}
          className={fieldClassName}
        >
          <option value="">All makes</option>
          {makes.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor={`${idPrefix}-body`}
          className="mb-2 block text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#526a7f]"
        >
          Body style
        </label>
        <select
          id={`${idPrefix}-body`}
          name="body"
          defaultValue={defaultBodyType}
          className={fieldClassName}
        >
          <option value="">All body styles</option>
          {bodyTypes.map((bodyType) => (
            <option key={bodyType} value={bodyType}>
              {bodyType}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor={`${idPrefix}-max-price`}
          className="mb-2 block text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#526a7f]"
        >
          Maximum price
        </label>
        <select
          id={`${idPrefix}-max-price`}
          name="maxPrice"
          defaultValue={defaults?.maxPrice ?? ""}
          className={fieldClassName}
        >
          <option value="">Any price</option>
          <option value="7500">Up to GBP 7,500</option>
          <option value="10000">Up to GBP 10,000</option>
          <option value="12500">Up to GBP 12,500</option>
          <option value="15000">Up to GBP 15,000</option>
          <option value="20000">Up to GBP 20,000</option>
        </select>
      </div>

      <div className="flex items-end gap-3">
        <button
          type="submit"
          className="cta cta-primary inline-flex flex-1"
        >
          <span>Search stock</span>
          <ArrowRightIcon className="cta-arrow" />
        </button>
        {showReset ? (
          <Link
            href="/vehicles"
            className="cta cta-outline-dark inline-flex"
          >
            Reset
          </Link>
        ) : null}
      </div>
    </form>
  );
}

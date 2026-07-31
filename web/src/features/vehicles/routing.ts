import type { Vehicle } from "@/features/vehicles/types";

export function vehicleDestination(vehicle: Vehicle): string {
  return vehicle.status === "sold"
    ? "/vehicles"
    : `/vehicles/${vehicle.slug}`;
}

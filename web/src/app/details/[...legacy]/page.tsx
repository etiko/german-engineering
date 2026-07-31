import { notFound, permanentRedirect } from "next/navigation";
import { getVehicleById } from "@/features/vehicles/data/vehicles";

type LegacyVehiclePageProps = {
  params: Promise<{
    legacy: string[];
  }>;
};

export default async function LegacyVehiclePage({
  params,
}: LegacyVehiclePageProps) {
  const { legacy } = await params;
  const stockId = legacy.at(-1);

  if (!stockId || !/^\d+$/.test(stockId)) {
    notFound();
  }

  const vehicle = await getVehicleById(stockId);

  if (!vehicle) {
    notFound();
  }

  permanentRedirect(`/vehicles/${vehicle.slug}`);
}

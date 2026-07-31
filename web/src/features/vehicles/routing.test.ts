import { describe, expect, it } from "vitest";
import { vehicleDestination } from "@/features/vehicles/routing";
import type { Vehicle } from "@/features/vehicles/types";

const vehicle: Vehicle = {
  id: "123",
  slug: "2020-example-model",
  make: "Example",
  model: "Model",
  derivative: "1.0 Example",
  year: 2020,
  price: 10000,
  mileage: 25000,
  fuel: "Petrol",
  transmission: "Manual",
  bodyType: "Hatchback",
  colour: "Blue",
  imageUrl: "https://example.test/vehicle.jpg",
  status: "available",
  featured: false,
  description: "Example vehicle",
};

describe("vehicleDestination", () => {
  it("keeps an active vehicle on its detail route", () => {
    expect(vehicleDestination(vehicle)).toBe(
      "/vehicles/2020-example-model",
    );
  });

  it("redirects a sold vehicle to current stock", () => {
    expect(vehicleDestination({ ...vehicle, status: "sold" })).toBe(
      "/vehicles",
    );
  });
});

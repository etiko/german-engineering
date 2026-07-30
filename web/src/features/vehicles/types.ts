export type VehicleStatus = "available" | "reserved" | "sold";

export type Vehicle = {
  id: string;
  slug: string;
  make: string;
  model: string;
  derivative: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  bodyType: string;
  colour: string;
  imageUrl: string;
  status: VehicleStatus;
  featured: boolean;
  description: string;
};

export type VehicleFilters = {
  make?: string;
  bodyType?: string;
  maxPrice?: number;
};

export type VehicleFacets = {
  makes: string[];
  bodyTypes: string[];
};

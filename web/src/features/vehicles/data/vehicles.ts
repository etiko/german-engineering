import "server-only";
import type {
  Vehicle,
  VehicleFacets,
  VehicleFilters,
} from "@/features/vehicles/types";

const vehicles: Vehicle[] = [
  {
    id: "1884938",
    slug: "2016-audi-a5-black-edition-plus",
    make: "Audi",
    model: "A5",
    derivative:
      "2.0 TFSI Black Edition Plus S Tronic quattro Euro 6 (s/s) 2dr",
    year: 2016,
    price: 10999,
    mileage: 82204,
    fuel: "Petrol",
    transmission: "Automatic",
    bodyType: "Coupe",
    colour: "White",
    imageUrl:
      "https://img-uk3.cd5.uk/originals/2776/stockimages/1884938/w1024/445b68ccd70cbf19ec18b896fe54fe68_1884938.jpg?fm=webp",
    status: "available",
    featured: true,
    description:
      "A well-specified Audi coupe combining quattro traction, automatic transmission and Black Edition Plus equipment.",
  },
  {
    id: "1895123",
    slug: "2017-land-rover-range-rover-evoque-se-tech",
    make: "Land Rover",
    model: "Range Rover Evoque",
    derivative: "2.0 TD4 SE Tech Auto 4WD Euro 6 (s/s) 5dr",
    year: 2017,
    price: 8888,
    mileage: 73839,
    fuel: "Diesel",
    transmission: "Automatic",
    bodyType: "SUV",
    colour: "White",
    imageUrl:
      "https://img-uk3.cd5.uk/originals/2776/stockimages/1895123/w1024/a0d3ccd2ff37d0800f3d39936be39129_1895123.jpg?fm=webp",
    status: "available",
    featured: true,
    description:
      "A practical four-wheel-drive SUV with automatic transmission, Euro 6 emissions and SE Tech specification.",
  },
  {
    id: "1892856",
    slug: "2021-vauxhall-corsa-elite-nav",
    make: "Vauxhall",
    model: "Corsa",
    derivative: "1.2 Turbo Elite Nav Euro 6 (s/s) 5dr",
    year: 2021,
    price: 7499,
    mileage: 85233,
    fuel: "Petrol",
    transmission: "Manual",
    bodyType: "Hatchback",
    colour: "Grey",
    imageUrl:
      "https://img-uk3.cd5.uk/originals/2776/stockimages/1892856/w1024/5009242b419c0c8c013830377e5e6688_1892856.jpg?fm=webp",
    status: "available",
    featured: true,
    description:
      "A modern five-door hatchback with turbo petrol power, navigation and Elite specification.",
  },
  {
    id: "1880010",
    slug: "2016-nissan-juke-tekna",
    make: "Nissan",
    model: "Juke",
    derivative: "1.6 Tekna XTRON Euro 6 5dr",
    year: 2016,
    price: 7222,
    mileage: 60785,
    fuel: "Petrol",
    transmission: "Automatic",
    bodyType: "SUV",
    colour: "Black",
    imageUrl:
      "https://img-uk3.cd5.uk/originals/2776/stockimages/1880010/w1024/687a56c1d6fd465b51fbb55fb4f00bd7_1880010.jpg?fm=webp",
    status: "available",
    featured: true,
    description:
      "A compact automatic SUV with Tekna equipment, a petrol engine and useful everyday practicality.",
  },
];

export async function getVehicles(
  filters: VehicleFilters = {},
): Promise<Vehicle[]> {
  return vehicles.filter((vehicle) => {
    if (
      filters.make &&
      vehicle.make.toLowerCase() !== filters.make.toLowerCase()
    ) {
      return false;
    }

    if (
      filters.bodyType &&
      vehicle.bodyType.toLowerCase() !== filters.bodyType.toLowerCase()
    ) {
      return false;
    }

    if (filters.maxPrice && vehicle.price > filters.maxPrice) {
      return false;
    }

    return vehicle.status !== "sold";
  });
}

export async function getFeaturedVehicles(): Promise<Vehicle[]> {
  return vehicles.filter(
    (vehicle) => vehicle.featured && vehicle.status === "available",
  );
}

export async function getVehicleBySlug(
  slug: string,
): Promise<Vehicle | undefined> {
  return vehicles.find((vehicle) => vehicle.slug === slug);
}

export async function getVehicleFacets(): Promise<VehicleFacets> {
  return {
    makes: [...new Set(vehicles.map((vehicle) => vehicle.make))].sort(),
    bodyTypes: [
      ...new Set(vehicles.map((vehicle) => vehicle.bodyType)),
    ].sort(),
  };
}

export async function getVehicleSlugs(): Promise<string[]> {
  return vehicles.map((vehicle) => vehicle.slug);
}

import "server-only";
import type {
  Vehicle,
  VehicleFacets,
  VehicleFilters,
} from "@/features/vehicles/types";
import { normalizeVehicleFacet } from "@/features/vehicles/normalizers";

type ListedVehicle = Omit<Vehicle, "description" | "status">;

// Temporary public-site snapshot captured on 30 July 2026.
const listedVehicles: ListedVehicle[] = [
  {
    id: "1659208",
    slug: "2016-volvo-xc90-t8-inscription",
    make: "Volvo",
    model: "XC90",
    derivative:
      "2.0h T8 Twin Engine 9.2kWh Inscription Geartronic 4WD Euro 6 (s/s) 5dr",
    year: 2016,
    price: 16888,
    mileage: 92931,
    fuel: "Petrol Plug-in Hybrid",
    transmission: "Automatic",
    bodyType: "SUV",
    colour: "Blue",
    imageUrl:
      "https://img-uk3.cd5.uk/originals/2776/stockimages/1659208/w1024/854c78629a5973002c3038757c7ef131_1659208.jpg?fm=webp",
    featured: true,
  },
  {
    id: "1630762",
    slug: "2019-land-rover-discovery-sport-landmark",
    make: "Land Rover",
    model: "Discovery Sport",
    derivative: "2.0 TD4 Landmark Auto 4WD Euro 6 (s/s) 5dr",
    year: 2019,
    price: 13999,
    mileage: 50202,
    fuel: "Diesel",
    transmission: "Automatic",
    bodyType: "SUV",
    colour: "White",
    imageUrl:
      "https://img-uk3.cd5.uk/originals/2776/stockimages/1630762/w1024/bbd994fff12a82ce9901de3f3c943452_1630762.jpg?fm=webp",
    featured: true,
  },
  {
    id: "1833461",
    slug: "2017-bmw-x1-20d-m-sport",
    make: "BMW",
    model: "X1",
    derivative: "2.0 20d M Sport Auto xDrive Euro 6 (s/s) 5dr",
    year: 2017,
    price: 12222,
    mileage: 64652,
    fuel: "Diesel",
    transmission: "Automatic",
    bodyType: "SUV",
    colour: "Black",
    imageUrl:
      "https://img-uk3.cd5.uk/originals/2776/stockimages/1833461/w1024/4775574d189d3af5f7b70dbaa3e96dd0_1833461.jpg?fm=webp",
    featured: true,
  },
  {
    id: "1763086",
    slug: "2020-peugeot-rifter-gt-line-long",
    make: "Peugeot",
    model: "Rifter",
    derivative: "1.5 BlueHDi GT Line Long MPV Euro 6 (s/s) 5dr",
    year: 2020,
    price: 10999,
    mileage: 101440,
    fuel: "Diesel",
    transmission: "Manual",
    bodyType: "MPV",
    colour: "Bronze",
    imageUrl:
      "https://img-uk3.cd5.uk/originals/2776/stockimages/1763086/w1024/a67347421a531e31dfbdae5301229353_1763086.jpg?fm=webp",
    featured: true,
  },
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
    featured: false,
  },
  {
    id: "1865697",
    slug: "2012-porsche-cayenne-v6",
    make: "Porsche",
    model: "Cayenne",
    derivative: "3.0 TD V6 Tiptronic 4WD Euro 5 (s/s) 5dr",
    year: 2012,
    price: 9222,
    mileage: 129903,
    fuel: "Diesel",
    transmission: "Automatic",
    bodyType: "SUV",
    colour: "Brown",
    imageUrl:
      "https://img-uk3.cd5.uk/originals/2776/stockimages/1865697/w1024/2eb80e6ec077a9d451c6727b25d34f62_1865697.jpg?fm=webp",
    featured: false,
  },
  {
    id: "1803648",
    slug: "2015-audi-a3-s-line",
    make: "Audi",
    model: "A3",
    derivative: "1.4 TFSI S line Euro 6 (s/s) 3dr",
    year: 2015,
    price: 8999,
    mileage: 62586,
    fuel: "Petrol",
    transmission: "Manual",
    bodyType: "Hatchback",
    colour: "Black",
    imageUrl:
      "https://img-uk3.cd5.uk/originals/2776/stockimages/1803648/w1024/d4fa289e451a5782c9b0422a31479573_1803648.jpg?fm=webp",
    featured: false,
  },
  {
    id: "1827487",
    slug: "2003-porsche-boxster-986-s",
    make: "Porsche",
    model: "Boxster",
    derivative: "3.2 986 S Tiptronic S 2dr",
    year: 2003,
    price: 8999,
    mileage: 73139,
    fuel: "Petrol",
    transmission: "Automatic",
    bodyType: "Convertible",
    colour: "Grey",
    imageUrl:
      "https://img-uk3.cd5.uk/originals/2776/stockimages/1827487/w1024/aa19b94932f9aeb5575636da4c63e45d_1827487.jpg?fm=webp",
    featured: false,
  },
  {
    id: "1866133",
    slug: "2017-land-rover-range-rover-evoque-se-tech-1866133",
    make: "Land Rover",
    model: "Range Rover Evoque",
    derivative: "2.0 TD4 SE Tech Auto 4WD Euro 6 (s/s) 5dr",
    year: 2017,
    price: 8999,
    mileage: 68908,
    fuel: "Diesel",
    transmission: "Automatic",
    bodyType: "SUV",
    colour: "Grey",
    imageUrl:
      "https://img-uk3.cd5.uk/originals/2776/stockimages/1866133/w1024/92bc7b56aa503d72953a0531dbd5fb02_1866133.jpg?fm=webp",
    featured: false,
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
    colour: "Black",
    imageUrl:
      "https://img-uk3.cd5.uk/originals/2776/stockimages/1895123/w1024/a0d3ccd2ff37d0800f3d39936be39129_1895123.jpg?fm=webp",
    featured: false,
  },
  {
    id: "1798304",
    slug: "2016-bmw-x1-18d-sport",
    make: "BMW",
    model: "X1",
    derivative: "2.0 18d Sport Auto sDrive Euro 6 (s/s) 5dr",
    year: 2016,
    price: 7599,
    mileage: 114103,
    fuel: "Diesel",
    transmission: "Automatic",
    bodyType: "SUV",
    colour: "Black",
    imageUrl:
      "https://img-uk3.cd5.uk/originals/2776/stockimages/1798304/w1024/d9c7f0ead17338c64546f7cfbf7d4ce6_1798304.jpg?fm=webp",
    featured: false,
  },
  {
    id: "1850550",
    slug: "2016-volkswagen-golf-gt-estate",
    make: "Volkswagen",
    model: "Golf",
    derivative: "2.0 TDI BlueMotion Tech GT Euro 6 (s/s) 5dr",
    year: 2016,
    price: 7499,
    mileage: 90662,
    fuel: "Diesel",
    transmission: "Manual",
    bodyType: "Estate",
    colour: "Red",
    imageUrl:
      "https://img-uk3.cd5.uk/originals/2776/stockimages/1850550/w1024/b5a6ce3d6f7bfa33dad03fb1d6ee2049_1850550.jpg?fm=webp",
    featured: false,
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
    featured: false,
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
    featured: false,
  },
  {
    id: "1880340",
    slug: "2015-bmw-3-series-320d-m-sport-touring",
    make: "BMW",
    model: "3 Series",
    derivative: "2.0 320d M Sport Touring Auto Euro 5 (s/s) 5dr",
    year: 2015,
    price: 7222,
    mileage: 125685,
    fuel: "Diesel",
    transmission: "Automatic",
    bodyType: "Estate",
    colour: "Black",
    imageUrl:
      "https://img-uk3.cd5.uk/originals/2776/stockimages/1880340/w1024/23827a4e6f1da6ce1e1091787d9dc076_1880340.jpg?fm=webp",
    featured: false,
  },
  {
    id: "1561069",
    slug: "1997-leyland-daf-45-series-motor-home",
    make: "Leyland DAF",
    model: "45 Series",
    derivative: "Motor Home",
    year: 1997,
    price: 6999,
    mileage: 81384,
    fuel: "Not specified",
    transmission: "Not specified",
    bodyType: "Motorhome",
    colour: "Other",
    imageUrl:
      "https://img-uk3.cd5.uk/originals/2776/stockimages/1561069/w1024/deb0dd0bd46c5e4f8f28981cb9a0ca18_1561069.jpg?fm=webp",
    featured: false,
  },
  {
    id: "1897627",
    slug: "2011-citroen-dispatch-lx",
    make: "Citroen",
    model: "Dispatch",
    derivative: "2.0 1200 vHDi LX L2 H1 5dr",
    year: 2011,
    price: 2999,
    mileage: 145000,
    fuel: "Diesel",
    transmission: "Manual",
    bodyType: "Panel Van",
    colour: "White",
    imageUrl:
      "https://img-uk3.cd5.uk/originals/2776/stockimages/1897627/w1024/2151a0714ab8da41aec191f6373dadd5_1897627.jpg?fm=webp",
    featured: false,
  },
];

const vehicles: Vehicle[] = listedVehicles.map((vehicle) => ({
  ...vehicle,
  status: "available",
  description: `${vehicle.derivative}. Finished in ${vehicle.colour} with ${vehicle.mileage.toLocaleString("en-GB")} miles.`,
}));

export async function getVehicles(
  filters: VehicleFilters = {},
): Promise<Vehicle[]> {
  return vehicles.filter((vehicle) => {
    if (
      filters.make &&
      normalizeVehicleFacet(vehicle.make) !==
        normalizeVehicleFacet(filters.make)
    ) {
      return false;
    }

    if (
      filters.bodyType &&
      normalizeVehicleFacet(vehicle.bodyType) !==
        normalizeVehicleFacet(filters.bodyType)
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

export async function getVehicleById(
  id: string,
): Promise<Vehicle | undefined> {
  return vehicles.find((vehicle) => vehicle.id === id);
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

import { env } from "@/lib/env";

export const siteConfig = {
  name: "German Engineering Car Specialists Ltd",
  shortName: "German Engineering",
  companyNumber: "10771039",
  fcaNumber: "780109",
  companiesHouseUrl:
    "https://find-and-update.company-information.service.gov.uk/company/10771039",
  fcaRegisterUrl: "https://register.fca.org.uk/s/search?q=780109&type=Companies",
  description:
    "Quality used cars and vans, vehicle finance, servicing, diagnostics and bodywork in Haverhill, Suffolk.",
  url: env.siteUrl,
  phoneDisplay: "01440 269543",
  phoneHref: "tel:+441440269543",
  email: "info@germanengineeringcarsales.com",
  address: {
    street: "Unit 9, Boundary Road",
    locality: "Haverhill",
    region: "Suffolk",
    postcode: "CB9 7YH",
  },
  addressHref:
    "https://www.google.com/maps/search/?api=1&query=Unit+9+Boundary+Road+Haverhill+Suffolk+CB9+7YH",
  reviewProfiles: {
    autoTrader:
      "https://www.autotrader.co.uk/dealers/suffolk/haverhill/german-engineering-car-sales-limited-10002915",
    google:
      "https://www.google.com/maps/search/?api=1&query=German+Engineering+Car+Specialists+Haverhill",
  },
  warrantyProviderUrl: "https://www.warrantyfirst.co.uk/",
  openingHours: [
    {
      label: "Monday-Saturday",
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    {
      label: "Sunday",
      days: ["Sunday"],
      opens: "10:00",
      closes: "16:00",
    },
  ],
  logoUrl:
    "https://www.germanengineeringcarsales.co.uk/admin/uploaded_photos/site_logo.png?nc=3004",
  heroImageUrl:
    "https://www.germanengineeringcarsales.co.uk/admin/uploaded_photos/0_1_banner.jpg?fm=webp",
} as const;

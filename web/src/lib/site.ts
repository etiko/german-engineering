export const siteConfig = {
  name: "German Engineering Car Specialists Ltd",
  shortName: "German Engineering",
  description:
    "Quality used cars and vans, vehicle finance, servicing, diagnostics and bodywork in Haverhill, Suffolk.",
  url: process.env.SITE_URL ?? "http://localhost:3000",
  phoneDisplay: "01440 269543",
  phoneHref: "tel:+441440269543",
  email: "info@germanengineeringcarsales.com",
  address: {
    street: "Unit 9, Boundary Road",
    locality: "Haverhill",
    region: "Suffolk",
    postcode: "CB9 7YH",
  },
  logoUrl:
    "https://www.germanengineeringcarsales.co.uk/admin/uploaded_photos/site_logo.png?nc=3004",
  heroImageUrl:
    "https://www.germanengineeringcarsales.co.uk/admin/uploaded_photos/0_1_banner.jpg?fm=webp",
} as const;

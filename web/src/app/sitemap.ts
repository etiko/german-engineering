import type { MetadataRoute } from "next";
import { getVehicles } from "@/features/vehicles/data/vehicles";
import { siteConfig } from "@/lib/site";

const staticRoutes: Array<{
  path: string;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
}> = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/vehicles", changeFrequency: "daily", priority: 0.9 },
  { path: "/sell-your-car", changeFrequency: "monthly", priority: 0.8 },
  { path: "/finance", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/reviews", changeFrequency: "monthly", priority: 0.7 },
  {
    path: "/warranty-and-aftercare",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cookies", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/complaints", changeFrequency: "yearly", priority: 0.4 },
  { path: "/accessibility", changeFrequency: "yearly", priority: 0.3 },
  { path: "/finance-disclosure", changeFrequency: "yearly", priority: 0.4 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const vehicles = await getVehicles();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route.path}`,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...vehicles.map((vehicle) => ({
      url: `${siteConfig.url}/vehicles/${vehicle.slug}`,
      changeFrequency: "daily" as const,
      priority: 0.8,
      images: [vehicle.imageUrl],
    })),
  ];
}

import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "connect-src 'self'",
  "font-src 'self' data:",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "img-src 'self' data: blob: https://www.germanengineeringcarsales.co.uk https://img-uk3.cd5.uk",
  "manifest-src 'self'",
  "media-src 'self'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "worker-src 'self' blob:",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  {
    key: "Content-Security-Policy-Report-Only",
    value: contentSecurityPolicy,
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  skipTrailingSlashRedirect: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.germanengineeringcarsales.co.uk",
        pathname: "/admin/uploaded_photos/**",
      },
      {
        protocol: "https",
        hostname: "img-uk3.cd5.uk",
        pathname: "/originals/2776/stockimages/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    const legacyRedirects = [
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
      {
        source: "/used/cars/haverhill",
        destination: "/vehicles",
        permanent: true,
      },
      {
        source: "/used/vans/haverhill",
        destination: "/vehicles",
        permanent: true,
      },
      {
        source: "/used/cars/suffolk",
        destination: "/vehicles",
        permanent: true,
      },
      {
        source: "/used-cars/:make/haverhill",
        destination: "/vehicles?make=:make",
        permanent: true,
      },
      {
        source: "/used-vans/:make/haverhill",
        destination: "/vehicles?make=:make",
        permanent: true,
      },
      {
        source: "/used/:make/haverhill",
        destination: "/vehicles?make=:make",
        permanent: true,
      },
      {
        source: "/cat/:body/:id",
        destination: "/vehicles?body=:body",
        permanent: true,
      },
      {
        source: "/sellyourcarform",
        destination: "/sell-your-car",
        permanent: true,
      },
      {
        source: "/partexchange",
        destination: "/sell-your-car",
        permanent: true,
      },
      {
        source: "/find_us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/testimonials",
        destination: "/reviews",
        permanent: true,
      },
      {
        source: "/warranty",
        destination: "/warranty-and-aftercare#warranty",
        permanent: true,
      },
      {
        source: "/pages-delivery",
        destination: "/warranty-and-aftercare#delivery",
        permanent: true,
      },
      {
        source: "/pages-customer-aftercare",
        destination: "/warranty-and-aftercare#aftercare",
        permanent: true,
      },
      {
        source: "/privacy_policy",
        destination: "/privacy",
        permanent: true,
      },
      ...[
        "pages-servicing-bodyshop",
        "pages-mot-service",
        "pages-servicing",
        "pages-tyres",
        "pages-air-conditioning",
        "pages-smart-body-work",
        "pages-our-services",
        "pages-recovery-services",
        "pages-accident-management",
      ].map((source) => ({
        source: `/${source}`,
        destination: "/services",
        permanent: true,
      })),
    ];

    return [
      ...legacyRedirects.flatMap((redirect) => [
        redirect,
        {
          ...redirect,
          source: `${redirect.source}/`,
        },
      ]),
      ...[
        "vehicles",
        "finance",
        "sell-your-car",
        "services",
        "contact",
        "reviews",
        "warranty-and-aftercare",
        "privacy",
        "cookies",
        "terms",
        "complaints",
        "accessibility",
        "finance-disclosure",
      ].map((route) => ({
        source: `/${route}/`,
        destination: `/${route}`,
        permanent: true,
      })),
      {
        source: "/vehicles/:slug/",
        destination: "/vehicles/:slug",
        permanent: true,
      },
      {
        source: "/api/health/",
        destination: "/api/health",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

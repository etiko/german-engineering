import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MobileContactBar } from "@/components/layout/mobile-contact-bar";
import { BackToTop } from "@/components/ui/back-to-top";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Used Cars and Vehicle Services`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    url: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <span id="page-top" tabIndex={-1} className="sr-only">
          Top of page
        </span>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <div className="flex min-h-screen flex-col pb-16 lg:pb-0">
          <SiteHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
          <BackToTop />
          <MobileContactBar />
        </div>
      </body>
    </html>
  );
}

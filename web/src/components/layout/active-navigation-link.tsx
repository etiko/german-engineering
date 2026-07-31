"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ActiveNavigationLinkProps = {
  children: ReactNode;
  href: string;
  variant: "desktop" | "mobile";
};

function isCurrentRoute(pathname: string, href: string): boolean {
  return href === "/"
    ? pathname === href
    : pathname === href || pathname.startsWith(`${href}/`);
}

export function ActiveNavigationLink({
  children,
  href,
  variant,
}: ActiveNavigationLinkProps) {
  const pathname = usePathname();
  const isActive = isCurrentRoute(pathname, href);

  const className =
    variant === "desktop"
      ? `border-b-2 px-0.5 py-2 text-xs font-extrabold uppercase tracking-[0.12em] transition ${
          isActive
            ? "border-[#1266a8] text-[#1266a8]"
            : "border-transparent text-[#142a40] hover:border-[#9fb5c5] hover:text-[#1266a8]"
        }`
      : `block border-b border-[#eef3f6] px-3 py-3 text-sm font-bold transition ${
          isActive
            ? "border-l-4 border-l-[#1266a8] bg-[#eef3f6] pl-2 text-[#081421]"
            : "text-[#142a40] hover:bg-[#eef3f6]"
        }`;

  return (
    <Link
      href={href}
      className={className}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

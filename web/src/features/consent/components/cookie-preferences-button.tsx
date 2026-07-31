"use client";

import type { ReactNode } from "react";
import { COOKIE_PREFERENCES_EVENT } from "@/features/consent/constants";

type CookiePreferencesButtonProps = {
  children?: ReactNode;
  className?: string;
};

export function CookiePreferencesButton({
  children = "Manage cookies",
  className,
}: CookiePreferencesButtonProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(COOKIE_PREFERENCES_EVENT))}
    >
      {children}
    </button>
  );
}

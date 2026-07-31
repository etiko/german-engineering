"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@/components/ui/icons";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      setIsVisible(window.scrollY > 560);
    }

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  function scrollToTop() {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    document.getElementById("page-top")?.focus({ preventScroll: true });
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={`fixed bottom-20 right-5 z-40 inline-flex min-h-12 items-center justify-center gap-2 border border-white/20 bg-[#1266a8] px-4 text-white shadow-[0_14px_35px_rgba(8,20,33,0.3)] transition duration-200 hover:-translate-y-1 hover:bg-[#0b4f82] sm:right-7 lg:bottom-7 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUpIcon className="h-5 w-5" />
      <span className="hidden text-xs font-extrabold uppercase tracking-[0.12em] sm:inline">
        Back to top
      </span>
    </button>
  );
}

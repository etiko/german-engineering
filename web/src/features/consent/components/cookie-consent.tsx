"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import Link from "next/link";
import {
  COOKIE_PREFERENCES_CHANGED_EVENT,
  COOKIE_PREFERENCES_EVENT,
  COOKIE_PREFERENCES_KEY,
} from "@/features/consent/constants";

type CookiePreferences = {
  analytics: boolean;
  updatedAt: string;
  version: 1;
};

const SERVER_SNAPSHOT = "__cookie_preferences_loading__";

function isCookiePreferences(value: unknown): value is CookiePreferences {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<CookiePreferences>;

  return (
    candidate.version === 1 &&
    typeof candidate.analytics === "boolean" &&
    typeof candidate.updatedAt === "string"
  );
}

function parseCookiePreferences(value: string): CookiePreferences | null {
  if (!value || value === SERVER_SNAPSHOT) {
    return null;
  }

  try {
    const parsedPreferences: unknown = JSON.parse(value);
    return isCookiePreferences(parsedPreferences) ? parsedPreferences : null;
  } catch (error) {
    console.warn("Cookie preferences could not be parsed.", error);
    return null;
  }
}

function subscribeToCookiePreferences(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(
    COOKIE_PREFERENCES_CHANGED_EVENT,
    onStoreChange,
  );

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(
      COOKIE_PREFERENCES_CHANGED_EVENT,
      onStoreChange,
    );
  };
}

function getCookiePreferencesSnapshot(): string {
  try {
    return window.localStorage.getItem(COOKIE_PREFERENCES_KEY) ?? "";
  } catch (error) {
    console.warn("Cookie preferences could not be read.", error);
    return "";
  }
}

export function CookieConsent() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [analytics, setAnalytics] = useState(false);
  const [storageError, setStorageError] = useState<string | null>(null);
  const storedSnapshot = useSyncExternalStore(
    subscribeToCookiePreferences,
    getCookiePreferencesSnapshot,
    () => SERVER_SNAPSHOT,
  );
  const storedPreferences = useMemo(
    () => parseCookiePreferences(storedSnapshot),
    [storedSnapshot],
  );
  const showBanner =
    storedSnapshot !== SERVER_SNAPSHOT && storedPreferences === null;

  const openPreferences = useCallback(() => {
    setAnalytics(storedPreferences?.analytics ?? false);
    setStorageError(null);
    dialogRef.current?.showModal();
  }, [storedPreferences]);

  useEffect(() => {
    window.addEventListener(COOKIE_PREFERENCES_EVENT, openPreferences);

    return () => {
      window.removeEventListener(COOKIE_PREFERENCES_EVENT, openPreferences);
    };
  }, [openPreferences]);

  function savePreferences(allowAnalytics: boolean) {
    const preferences: CookiePreferences = {
      analytics: allowAnalytics,
      updatedAt: new Date().toISOString(),
      version: 1,
    };

    try {
      window.localStorage.setItem(
        COOKIE_PREFERENCES_KEY,
        JSON.stringify(preferences),
      );
      setAnalytics(allowAnalytics);
      setStorageError(null);
      window.dispatchEvent(new Event(COOKIE_PREFERENCES_CHANGED_EVENT));
      dialogRef.current?.close();
    } catch (error) {
      console.warn("Cookie preferences could not be saved.", error);
      setStorageError(
        "Your preference could not be saved in this browser. Please check its storage settings and try again.",
      );
    }
  }

  return (
    <>
      {showBanner ? (
        <section
          aria-label="Cookie notice"
          className="fixed bottom-18 left-4 right-4 z-[70] mx-auto max-w-5xl border border-[#9fb5c5] bg-white p-5 shadow-[0_24px_70px_rgba(8,20,33,0.3)] lg:bottom-5 lg:p-6"
        >
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold uppercase text-[#081421]">
                Your cookie choice
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-[#526a7f]">
                This site currently uses essential storage only. You can also
                record whether optional analytics may be enabled if a provider
                is configured later.{" "}
                <Link
                  href="/cookies"
                  className="font-bold text-[#1266a8] underline underline-offset-4"
                >
                  Read the cookie policy
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                className="cta cta-outline-dark cta-compact"
                onClick={() => savePreferences(false)}
              >
                Reject optional
              </button>
              <button
                type="button"
                className="cta cta-outline-dark cta-compact"
                onClick={openPreferences}
              >
                Manage
              </button>
              <button
                type="button"
                className="cta cta-primary cta-compact"
                onClick={() => savePreferences(true)}
              >
                Accept optional
              </button>
            </div>
          </div>
          {storageError ? (
            <p className="mt-4 text-sm font-bold text-[#9d271e]" role="alert">
              {storageError}
            </p>
          ) : null}
        </section>
      ) : null}

      <dialog
        ref={dialogRef}
        aria-labelledby="cookie-preferences-title"
        aria-describedby="cookie-preferences-description"
        className="m-auto max-h-[calc(100vh-2rem)] w-[min(38rem,calc(100%-2rem))] border-0 bg-white p-0 text-[#081421] shadow-[0_30px_90px_rgba(8,20,33,0.45)] backdrop:bg-[#081421]/75"
      >
        <div className="border-b border-[#dce5ec] p-6 md:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#1266a8]">
                Privacy controls
              </p>
              <h2
                id="cookie-preferences-title"
                className="font-display mt-2 text-4xl font-bold uppercase"
              >
                Cookie preferences
              </h2>
            </div>
            <button
              type="button"
              className="min-h-11 min-w-11 border border-[#b7c7d3] text-xl font-bold"
              aria-label="Close cookie preferences"
              onClick={() => dialogRef.current?.close()}
            >
              &times;
            </button>
          </div>
          <p
            id="cookie-preferences-description"
            className="mt-4 leading-7 text-[#526a7f]"
          >
            Necessary functionality is always active. Optional analytics is
            not currently installed and will remain disabled unless both a
            provider is configured and you allow it.
          </p>
        </div>

        <div className="grid gap-4 p-6 md:p-8">
          <div className="flex items-start justify-between gap-5 border border-[#dce5ec] bg-[#f7f9fb] p-5">
            <div>
              <h3 className="font-bold">Necessary</h3>
              <p className="mt-2 text-sm leading-6 text-[#526a7f]">
                Supports security, core site operation and remembering this
                preference.
              </p>
            </div>
            <span className="shrink-0 text-xs font-extrabold uppercase tracking-[0.12em] text-[#1266a8]">
              Always active
            </span>
          </div>

          <label className="flex cursor-pointer items-start justify-between gap-5 border border-[#dce5ec] p-5">
            <span>
              <span className="block font-bold">Analytics</span>
              <span className="mt-2 block text-sm leading-6 text-[#526a7f]">
                Would help measure site use without including enquiry details.
                No analytics provider is currently loaded.
              </span>
            </span>
            <input
              type="checkbox"
              className="mt-1 h-6 w-6 shrink-0 accent-[#1266a8]"
              checked={analytics}
              onChange={(event) => setAnalytics(event.target.checked)}
            />
          </label>

          {storageError ? (
            <p className="text-sm font-bold text-[#9d271e]" role="alert">
              {storageError}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-3 border-t border-[#dce5ec] bg-[#f7f9fb] p-6 sm:flex-row sm:justify-end md:px-8">
          <button
            type="button"
            className="cta cta-outline-dark"
            onClick={() => savePreferences(false)}
          >
            Reject optional
          </button>
          <button
            type="button"
            className="cta cta-primary"
            onClick={() => savePreferences(analytics)}
          >
            Save preferences
          </button>
        </div>
      </dialog>
    </>
  );
}

import "server-only";

function asHttpsUrl(hostname: string | undefined): string | undefined {
  if (!hostname) {
    return undefined;
  }

  return hostname.startsWith("http") ? hostname : `https://${hostname}`;
}

function parseUrl(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(
      `[environment] ${name} is required for production builds and deployments.`,
    );
  }

  try {
    const url = new URL(value);

    if (url.protocol !== "http:" && url.protocol !== "https:") {
      throw new Error("Only HTTP and HTTPS URLs are supported.");
    }

    return url.origin;
  } catch (error) {
    const detail = error instanceof Error ? ` ${error.message}` : "";
    throw new Error(`[environment] ${name} must be a valid URL.${detail}`);
  }
}

const localUrl =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000";

export const env = Object.freeze({
  siteUrl: parseUrl(
    "SITE_URL",
    process.env.SITE_URL ??
      asHttpsUrl(process.env.VERCEL_URL) ??
      asHttpsUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
      localUrl,
  ),
});

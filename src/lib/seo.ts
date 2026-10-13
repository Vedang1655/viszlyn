export const SITE_URL = "https://www.viszlyn.io";
export const SITE_NAME = "Viszlyn";

/** Converts a display date such as "October 12, 2026" to an ISO date (YYYY-MM-DD). Returns undefined if unparseable. */
export function toIsoDate(value: string): string | undefined {
  const parsed = new Date(`${value} UTC`);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString().slice(0, 10);
}
